import { fireEvent, render, screen } from "@testing-library/react";
import GoBackButton from "./GoBackButton";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Go Back Button", () => {
  test("should render Go back button correctly", () => {
    render(<GoBackButton />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/Go Back/i)).toBeInTheDocument();
  });
});
