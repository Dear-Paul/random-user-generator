import { render,  screen } from "@testing-library/react";
import UserList from "../UserList";


test("user action", () => {
    render(<UserList />);
    
    const country = screen.getByTestId("country");
    expect(country).toHaveTextContent("Country");
})