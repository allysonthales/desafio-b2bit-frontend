// src/components/LoginForm.test.tsx

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest"; 
import { LoginForm } from "./LoginForm";

describe("LoginForm Component", () => {
	it("should call onSubmit with email and password when form is submitted correctly", async () => {
		const user = userEvent.setup();
		const mockOnSubmit = vi.fn();

		render(<LoginForm onSubmit={mockOnSubmit} />);

		const emailInput = screen.getByLabelText(/e-mail/i);
		const passwordInput = screen.getByLabelText(/password/i);
		const submitButton = screen.getByRole("button", { name: /sing in/i });

		await user.type(emailInput, "test@example.com");
		await user.type(passwordInput, "password123");

		await user.click(submitButton);

		expect(mockOnSubmit).toHaveBeenCalled();
		expect(mockOnSubmit).toHaveBeenCalledWith(
			"test@example.com",
			"password123",
		);
	});

	it("should show validation error for invalid email format", async () => {
		const user = userEvent.setup();
		const mockOnSubmit = vi.fn();
		render(<LoginForm onSubmit={mockOnSubmit} />);

		const emailInput = screen.getByLabelText(/e-mail/i);
		const submitButton = screen.getByRole("button", { name: /sing in/i });

		await user.type(emailInput, "email-invalido");
		await user.click(submitButton);

		const errorMessage = await screen.findByText(/digite um e-mail válido/i);
		expect(errorMessage).toBeInTheDocument();

		expect(mockOnSubmit).not.toHaveBeenCalled();
	});

	it("should toggle password visibility when the eye icon is clicked", async () => {
		const user = userEvent.setup();
		render(<LoginForm onSubmit={() => {}} />); 

		const passwordInput = screen.getByLabelText(/password/i);
		const toggleButton = screen
			.getByRole("button", { name: "" })
			.querySelector("svg"); 

		expect(passwordInput).toHaveAttribute("type", "password");

		if (toggleButton) {
			await user.click(toggleButton.parentElement!);
		}

		expect(passwordInput).toHaveAttribute("type", "text");

		if (toggleButton) {
			await user.click(toggleButton.parentElement!);
		}
		expect(passwordInput).toHaveAttribute("type", "password");
	});
	it("should show validation error for short password", async () => {
		const user = userEvent.setup();
		const mockOnSubmit = vi.fn();
		render(<LoginForm onSubmit={mockOnSubmit} />);

		const emailInput = screen.getByLabelText(/e-mail/i);
		const passwordInput = screen.getByLabelText(/password/i);
		const submitButton = screen.getByRole("button", { name: /sing in/i });

		await user.type(emailInput, "valido@email.com");
		await user.type(passwordInput, "123"); 
		await user.click(submitButton);

		const errorMessage = await screen.findByText(
			/a senha deve ter no mínimo 6 caracteres/i,
		);
		expect(errorMessage).toBeInTheDocument();
		expect(mockOnSubmit).not.toHaveBeenCalled();
	});
});
