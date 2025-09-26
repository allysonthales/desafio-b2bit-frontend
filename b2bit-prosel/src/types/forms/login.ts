import z from "zod";

export const loginFormSchema = z.object({
	email: z
		.email({ message: "Digite um e-mail válido" })
		.max(50, { message: "O e-mail deve ter no máximo 50 caracteres" }),
	password: z
		.string()
		.min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
