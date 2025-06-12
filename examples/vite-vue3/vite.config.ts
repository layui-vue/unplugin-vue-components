import type { UserConfig } from 'vite'
import path from 'node:path'
import { LayuiVueResolver } from '@layui/unplugin-vue-components/resolvers'
import Components from '@layui/unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import Inspect from 'vite-plugin-inspect'

const config: UserConfig = {
  resolve: {
    alias: {
      '/~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({}),
    Icons(),
    Inspect(),
    Components({
      resolvers: [LayuiVueResolver()],
    }),
  ],
  build: {
    sourcemap: true,
  },
}

export default config
