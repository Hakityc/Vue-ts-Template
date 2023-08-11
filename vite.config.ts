import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import { resolve } from "path"
import unocss from "unocss/vite"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss(),
    AutoImport({
      imports: ["vue", "vue-router"],
    }),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: "less" }), IconsResolver({ prefix: "i" })],
      dts: "./types/components.d.ts",
      include: [/\.ts$/, /\.vue$/],
    }),
    Icons({
      scale: 1, // 缩放比 相对1em
      autoInstall: true, // 自动安装
      compiler: "vue3", // 编译方式
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 路径别名
    },
    extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#4d6deb",
          "text-color": "#2e2e33",
          "error-color": "#e64552",
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    proxy: {},
  },
})
