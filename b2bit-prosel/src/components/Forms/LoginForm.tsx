import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { type LoginFormValues, loginFormSchema } from "@/types/forms/login";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface LoginFormProps {
	onSubmit: (email: string, password: string) => void;
	onClick?: () => void;
}

export function LoginForm({ onSubmit, onClick }: LoginFormProps) {
	const [showPassword, setShowPassword] = useState(false);
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function handleShowPassword() {
		setShowPassword(!showPassword);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((values) =>
					onSubmit(values.email, values.password),
				)}
				className="space-y-8"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="">E-mail</FormLabel>
							<FormControl>
								<Input placeholder="@gmail.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="password"
					control={form.control}
					render={({ field }) => (
						<FormItem className="relative">
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="***************"
									{...field}
									type={showPassword ? "text" : "password"}
									className="pr-12"
								/>
							</FormControl>
							<button
								className="absolute right-3 top-1/2  text-gray-500 cursor-pointer p-2 "
								type="button"
								onClick={handleShowPassword}
							>
								{showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
							</button>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className="w-full py-8 bg-primary text-xl mt-2 cursor-pointer"
					type="submit"
					onClick={onClick}
				>
					Sing In
				</Button>
			</form>
		</Form>
	);
}
