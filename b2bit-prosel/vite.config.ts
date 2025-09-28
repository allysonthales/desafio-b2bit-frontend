/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	test: { // O TypeScript vai parar de reclamar desta propriedade
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
  },
});

// // Vitest configuration
// export const test = {
//   globals: true, // Para não precisar importar describe, it, expect, etc. em todo arquivo.
//   environment: 'jsdom', // Define o ambiente de teste como jsdom.
//   setupFiles: './src/setupTests.ts', // Arquivo de setup que será executado antes de cada teste.
//   css: true, // Habilita o processamento de CSS se necessário (útil para CSS Modules, não tanto para Tailwind).
// };
