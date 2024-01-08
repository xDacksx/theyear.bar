import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "../../_firebase_hosting/theyear.bar/public",
        chunkSizeWarningLimit: 1600,
    },
});
