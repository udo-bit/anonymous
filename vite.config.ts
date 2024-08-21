import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import jxs from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from "unplugin-vue-components/resolvers";
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        jxs(),
        UnoCSS(),
        AutoImport({
            imports: [
                'vue',
                'pinia',
                'vue-router',
                'vue-i18n',
                'vue/macros',
                '@vueuse/core',
                {
                    "naive-ui": [
                        'useDialog',
                        'useMessage',
                        'useNotification',
                        'useLoadingBar',
                    ]
                },
            ],
            dts: "src/types/auto-imports.d.ts",
            dirs: [
                'src/stores',
                'src/composables',
            ]
        }),
        Components({
            resolvers: [NaiveUiResolver()],
            dts: 'src/types/components.d.ts'
        })
    ],
})
