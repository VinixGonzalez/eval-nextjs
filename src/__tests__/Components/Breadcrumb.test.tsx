import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "@/app/components";

describe("Breadcrumb", () => {
  it("render the breadcrumb without problems", () => {
    render(
      <Breadcrumb
        crumbList={[{ isLast: false, label: "Test", path: "/to-any-path" }]}
      />
    );

    const breadCrumb = screen.getByText("Test");

    expect(breadCrumb).toBeInTheDocument;
  });
});
