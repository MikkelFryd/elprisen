import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['mainIcon.ico', "180.png", "mainIcon.svg"],
  manifest:{
    name:"Elprisen",
    short_name:"Elprisen",
    description:"Tjek elpriserne døgnet rundt",
    icons:[{
      src: '../assets/ios/192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'../assets/ios/512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '../assets/ios/180.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: '../assets/ios/512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn as any)],
})