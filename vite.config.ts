import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
const pathSrc = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        AutoImport({
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports: ['vue', 'vue-router', 'pinia'],

            // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
            resolvers: [
                ElementPlusResolver(),

                // 自动导入图标组件
                IconsResolver({
                    prefix: 'Icon'
                })
            ],

            dts: path.resolve(pathSrc, 'auto-imports.d.ts')
        }),

        Components({
            resolvers: [
                // 自动注册图标组件
                IconsResolver({
                    enabledCollections: ['ep']
                }),
                // 自动导入 Element Plus 组件
                ElementPlusResolver()
            ],

            dts: path.resolve(pathSrc, 'components.d.ts')
        }),

        Icons({
            autoInstall: true
        }),

        // 在vue文件的script中直接设置name
        vueSetupExtend()
    ],
    server: {
        port: 8080, //启动端口
        hmr: {
            host: 'localhost',
            port: 8080
        },
        // 设置代理
        proxy: {
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id: any) {
                    if (id.includes('src/config/index')) {
                        return 'config';
                    } else if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    }
});
