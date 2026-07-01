import posthog from "posthog-js";
import { PostHogProvider as PostHog } from "@posthog/react";

posthog.init(import.meta.env.VITE_POSTHOG_PROJECT_TOKEN, {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  defaults: "2026-05-30",
});

interface Props {
  children: React.ReactNode;
}

export const PostHogProvider = ({ children }: Props) => {
  return <PostHog client={posthog}>{children}</PostHog>;
};
