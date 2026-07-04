import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";

// posthog-js 모킹
const initMock = vi.fn();
vi.mock("posthog-js", () => ({
  default: { init: initMock },
}));

// @posthog/react 모킹
const PostHogMock = vi.fn(({ children }: { children: ReactNode }) => (
  <div data-testid="posthog-provider">{children}</div>
));
vi.mock("@posthog/react", () => ({
  PostHogProvider: PostHogMock,
}));

describe("PostHogProvider", () => {
  beforeEach(() => {
    // 모듈 최상단의 posthog.init() 호출을 매번 다시 검증하기 위해
    // 모듈 캐시를 초기화하고 동적으로 다시 import 한다.
    vi.resetModules();
    initMock.mockClear();
    PostHogMock.mockClear();

    vi.stubEnv("VITE_POSTHOG_PROJECT_TOKEN", "test-token");
    vi.stubEnv("VITE_POSTHOG_HOST", "https://test.posthog.com");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("모듈이 로드될 때 posthog.init을 환경변수 값으로 호출한다", async () => {
    await import("./index");

    expect(initMock).toHaveBeenCalledTimes(1);
    expect(initMock).toHaveBeenCalledWith("test-token", {
      api_host: "https://test.posthog.com",
      defaults: "2026-05-30",
    });
  });

  it("children을 정상적으로 렌더링한다", async () => {
    const { PostHogProvider } = await import("./index");

    render(
      <PostHogProvider>
        <span>테스트 자식 요소</span>
      </PostHogProvider>,
    );

    expect(screen.getByText("테스트 자식 요소")).toBeInTheDocument();
  });

  it("@posthog/react의 PostHogProvider에 posthog client 인스턴스를 전달한다", async () => {
    const { PostHogProvider } = await import("./index");
    const posthog = (await import("posthog-js")).default;

    render(
      <PostHogProvider>
        <span>child</span>
      </PostHogProvider>,
    );

    expect(PostHogMock).toHaveBeenCalled();

    // React 19부터는 함수형 컴포넌트에 두 번째 인자(legacy ref)가
    // 전달되지 않을 수 있어, 첫 번째 인자(props)만 명시적으로 검사한다.
    const [props] = PostHogMock.mock.calls[0];
    expect(props).toEqual(expect.objectContaining({ client: posthog }));
  });
});
