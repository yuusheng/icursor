import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Uno from '@unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  plugins: [
    Vue({ reactivityTransform: true }),
    Uno({
      presets: [presetUno(), presetAttributify(), presetIcons()],
      shortcuts: {
        'base-btn': 'px2 py1 mx1 bg-blue rounded border-none',
      },
    }),
  ],
})
