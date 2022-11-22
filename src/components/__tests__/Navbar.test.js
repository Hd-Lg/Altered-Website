import { render, screen } from "@testing-library/react";

import Navbar from "../ui/Navbar";

test('Renders logo', () => {
    render(<Navbar />)
    const logoElement = 
})

test("Renders links", () => {
	render(<Navbar />);
	const linkElement = screen.getByText(/home/i);
	expect(linkElement).toBeInTheDocument();
});
