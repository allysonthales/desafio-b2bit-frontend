// src/components/LoginForm.test.tsx

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest"; // O Vitest nos dá uma ferramenta para "espionar" funções
import { LoginForm } from "./LoginForm";

// O `describe` agrupa testes relacionados para um mesmo componente
describe("LoginForm Component", () => {
	// Cenário 1: O Caminho Feliz
	it("should call onSubmit with email and password when form is submitted correctly", async () => {
		const user = userEvent.setup();
		// 1. Arrange (Preparação)
		// Criamos uma função "espiã" (mock) para a prop onSubmit.
		// Isso nos permite verificar se ela foi chamada e com quais argumentos.
		const mockOnSubmit = vi.fn();

		render(<LoginForm onSubmit={mockOnSubmit} />);

		// 2. Act (Ação)
		// Encontramos os campos pelos seus labels (rótulos), que é uma ótima prática de acessibilidade.
		const emailInput = screen.getByLabelText(/e-mail/i);
		const passwordInput = screen.getByLabelText(/password/i);
		const submitButton = screen.getByRole("button", { name: /sing in/i });

		// Simulamos o usuário digitando nos campos
		await user.type(emailInput, "test@example.com");
		await user.type(passwordInput, "password123");

		// Simulamos o usuário clicando no botão de submit
		await user.click(submitButton);

		// 3. Assert (Verificação)
		// Verificamos se a nossa função espiã foi chamada
		expect(mockOnSubmit).toHaveBeenCalled();
		// Verificamos se ela foi chamada com os valores corretos
		expect(mockOnSubmit).toHaveBeenCalledWith(
			"test@example.com",
			"password123",
		);
	});

	// Cenário 2: Validação
	// Teste 2: Validação - o usuário envia dados inválidos.
	it("should show validation error for invalid email format", async () => {
		const user = userEvent.setup();
		// Arrange
		const mockOnSubmit = vi.fn();
		render(<LoginForm onSubmit={mockOnSubmit} />);

		// Act
		const emailInput = screen.getByLabelText(/e-mail/i);
		const submitButton = screen.getByRole("button", { name: /sing in/i });

		// Simulamos um e-mail com formato inválido.
		await user.type(emailInput, "email-invalido");
		await user.click(submitButton);

		// Assert
		// Agora procuramos pela sua mensagem de erro específica.
		const errorMessage = await screen.findByText(/digite um e-mail válido/i);
		expect(errorMessage).toBeInTheDocument();

		// E garantimos que a função de submissão NÃO foi chamada.
		expect(mockOnSubmit).not.toHaveBeenCalled();
	});

	// Cenário 3: Interação da Senha
	it("should toggle password visibility when the eye icon is clicked", async () => {
		const user = userEvent.setup();
		// Arrange
		render(<LoginForm onSubmit={() => {}} />); // A prop onSubmit não importa aqui

		// Act
		const passwordInput = screen.getByLabelText(/password/i);
		// O ícone de olho não tem um label, então o buscamos pelo seu "role" de botão.
		// Como há dois botões (o de submit e o do olho), precisamos ser mais específicos.
		// Neste caso, vou buscar pelo ícone `EyeOff` que deve estar visível inicialmente.
		const toggleButton = screen
			.getByRole("button", { name: "" })
			.querySelector("svg"); // Uma forma de pegar o botão do olho

		// Assert (Antes do clique)
		// Verificamos se o input começa como tipo "password"
		expect(passwordInput).toHaveAttribute("type", "password");

		// Act (O clique)
		if (toggleButton) {
			// Verificação para o TypeScript
			await user.click(toggleButton.parentElement!);
		}

		// Assert (Depois do clique)
		// Verificamos se o tipo do input mudou para "text"
		expect(passwordInput).toHaveAttribute("type", "text");

		// Clicamos de novo para garantir que ele volta ao estado original
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

		// Digitamos um e-mail válido, mas uma senha curta.
		await user.type(emailInput, "valido@email.com");
		await user.type(passwordInput, "123"); // <--- Senha curta
		await user.click(submitButton);

		// Verificamos a mensagem de erro da senha.
		const errorMessage = await screen.findByText(
			/a senha deve ter no mínimo 6 caracteres/i,
		);
		expect(errorMessage).toBeInTheDocument();
		expect(mockOnSubmit).not.toHaveBeenCalled();
	});
});
