## インターンで使う技術一覧
- HTML/CSS/JavaScript
- Vue.js(v3)
- Vuetify(v3)
- Vue Router(v4)
- Vite(v4)
- Socket.io(v4)

## Vite+Vue3の環境構築
https://zenn.dev/satjopg/scraps/86cde0f7b5883f
1. `npm init vite@latest`を実行
2. `tsconfig.json`に以下を追加
    ```json
    "baseUrl": ".",
    "paths": {
        "@": [
        "src"
    ],
    "@/*": [
        "src/*"
        ]
    }
    ```
3. `vite.config.ts`の`defineConfig`に、`import path from "path"`と
    ```ts
    resolve: {
        alias: {
        '@': path.resolve(__dirname, './src')
        }
    }
    ```
    を追加する方法もしくは、vite-tsconfig-pathsを導入するため<br/>

    `npm i -D vite-tsconfig-paths`を実行した上で、<br />`vite.config.ts`に、
    `import tsConfigPaths from "vite-tsconfig-paths"`と<br />`defineConfig`の`plugins`を
    `[vue(), tsConfigPaths()]`に変更する
4. `npm i vue-router`でvue-routerを導入

この時点で大枠の準備は完了。
ここで、
 - ルーティング対象とするコンポーネントの場所を決めておく。
今回は、
`src/pages`直下に置く。
- ルータ設定ファイル（`src/router/index.ts`）を作成しておく
