import { defineConfig } from 'vite';

let ghRepo = "/breakout_game/"
export default defineConfig({
  base: ghRepo,  
  build: {
    outDir: 'dist',   
  },
});