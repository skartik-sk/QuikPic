import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nextui } from "@nextui-org/react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@mapbox/node-pre-gyp'],
  },
  // rules: [
  //   // other rules...
  //   {
  //     test: /\.html$/,
  //     use: [
  //       {
  //         loader: 'html-loader',
  //       },
  //     ],
  //   },
  // ],
});
