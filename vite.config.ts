import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://damienpelletier-server.eddi.cloud/fmh",
})

//Serveur front
//base: "https://zeinealawieh.github.io/FMH-prod/",
//base: "http://zeinealawieh-server.eddi.cloud/fmh",