import App from "@/App";
import { render } from "@testing-library/react";

describe("App tests", () => {
  it("should render component", () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
