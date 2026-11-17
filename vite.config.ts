import react from "@vitejs/plugin-react";
import { defineConfig, type CommonServerOptions } from "vite";
import tailwindcss from "@tailwindcss/vite";

const server: CommonServerOptions = {
  port: 3000,
  host: true,
  cors: true,
  allowedHosts: true,
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server,
  preview: server,
  resolve: {
    tsconfigPaths: true,
  },
});
