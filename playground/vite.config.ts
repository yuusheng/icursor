import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Uno from '@unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import { alias } from '../alias'

export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [
    Vue({ reactivityTransform: true }),
    Uno({
      presets: [presetUno(), presetAttributify(), presetIcons()],
      shortcuts: {
        'base-btn': 'px3 py2 mx5 bg-gray-3 rounded border-none',
      },
    }),
  ],
})
