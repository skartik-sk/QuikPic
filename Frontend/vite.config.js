import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nextui } from "@nextui-org/react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@mapbox/node-pre-gyp'],
  },
  build: {
    rollupOptions: {
        output:{
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString();
                }
            }
        }
    }
}

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
