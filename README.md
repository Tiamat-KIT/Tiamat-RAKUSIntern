# ラクスインターン用
## [Webサーバ](https://eng-entrance.com/web-server-mechanism)
### クライアントとサーバ
- Webブラウザはクライアント側である。（ユーザ側で動き、情報を取り出すもの）
- サーバはクライアント側が情報を取り出す先である。
- サーバはクライアントからの指示を受け取ってその内容に応じた情報を返す。

上記のことから以下のように認識していればよい
- サービス提供側：サーバ（SERVICE+～ER=SERVER）
- サービスを受ける側:クライアント（お客）

#### リクエストとレスポンス
- クライアントがサーバに送る情報：リクエスト
- サーバがクライアントに送り返す情報：レスポンス

#### 総括
クライアントとサーバではリクエストとレスポンスの送受信が行われており、
Webブラウザが情報を閲覧する先（サーバ）がWebサーバ（Webに関するサービスを提供しているサーバ）という、

### WebサーバとURLの関係
Webブラウザでは、アドレスバーにアドレスが入力される。
このアドレスは**URL**と呼ばれている。
Webブラウザでは、URLを受け取ると、
その内容を確認し、3つの要素に分けて考える

仮に`http://example.com/sample.txt`を入力した場合は以下のようになる。
- `http` → 相手との接続方式として "http" を使うものとする。
-  `com` → 接続先ホストは`localhost`、接続ポート番号は`8080`とする
- 接続できたら、`/sample.html`を要求する


ブラウザーはこの情報を元に
1. サーバーへ接続
2. サーバーから情報を取得できるように要求を送信
3. 結果を受け取って画面に表示

するようになっている。

URLとして接続先ホスト名の後に何も書いていない場合は自動的に末尾に`/`が補われ、
`http://example.com/`として扱われるようになっている。 例えば、今回のケースであれば、`http://example.com`が該当する
![image](https://github.com/Tiamat-KIT/Tiamat-RAKUSIntern/assets/100649020/f07348ad-7fdf-436b-bfd3-1beb8f66202c)

```mermaid
sequenceDiagram
    participant Webブラウザ
    participant Webサーバ
    Webブラウザ->>Webサーバ: 接続して`/sample.html`を要求するリクエストを送信
    Webサーバ-->>Webサーバ: 内部で  `/sample.html`向けの情報を確認し、送信準備
    Webサーバ->>Webブラウザ: 応答して`/sample.html`をもったレスポンスを返す
```
サーバーは基本的な動きとして
- 要求に合わせたファイルを準備しておく
- リクエストに応じたファイルを読み込んで内容を返す

これができればよいということ

## [HTML](https://magazine.techacademy.jp/magazine/4843)
## [HTML2](https://magazine.techacademy.jp/magazine/4808)
## [Vue.js](https://reffect.co.jp/vue/beginner-vue/)
### Vue.jsとは
Webサイト、アプリケーションを利用するユーザに対してインタラクティブなUIを提供したいときに利用できる
JavaScriptフレームワーク
今回は**Vite**を使う。Vue.jsを開発する際に元になるプロジェクトを作成することができるツールを使う
Vue.js側は現在、新規でプロジェクトを作成する際にはVue CLIではなく、Viteを利用することを推奨している
今後はプロジェクト作成ツールは Vite をベースに開発が行われていくよう。
ViteでVue.jsのプロジェクト作成するコマンド：`npm init vite@latest . -- --template vue`

`index.html`:最初にブラウザから開発サーバにアクセスすると表示されるのがプロジェクトフォルダ直下にあるhtml ファイル
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

`main.js`
```javascript
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');
```
1. vue から createApp 関数を import
2. import した createApp 関数を利用して Vue.js のインスタンス
3. インスタンスを作成する際には引数に App.vue ファイルから import した App を指定(App.vue ファイルには見慣れない vue という拡張子)
    拡張子 vue は App.vue ファイルが Vue.js のフォーマットでコードが記述されていることを表しておりこの拡張子を見て内部で適切な処理が行われる。
    vue ファイルの中には Vue.js 特有のフォーマットで中身を記述する必要がある。
4. createApp でインスタンスを作成した後は mount メソッドを実行しています。
    mount メソッドの引数に指定しているのが index.html ファイルに記述されている div 要素の id 属性の app です。
    mount メソッドの処理で id 属性に app を持つ div 要素の中に App.vue ファイルに記述された内容を挿入しています。
    mount の引数の文字列を#app から別の文字列に変更することは可能ですが
    変更した場合は index.html ファイルの id 属性も同じ名前に変更する必要があります。

`App.vue`
```javascript
<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
```
App.vueは以下のタグで分けられた3つのパートに分けられている
- `<script>`に`import`文を書いて他のvueファイルからコンポーネントを引っ張ってきたりなどのJavaScriptを書く。
- `<template>`にJSX文（`<body>`部分のHTML）を書く
- `<style>`部分にCSSを書く。

`HelloWorld.vue`
```javascript
<script setup>
  import {ref} from "vue"

  defineProps({
    msg: String
  })
</script>

<template>
  <h1>{{msg}}</h1>
  <div class="card">
    <button type="button" @click="count++">
      count is {{count}} 
    </button>
    <p>Edit <code>components/HelloWorld.vue</code>to test HMR</p>
  </div>

  <p>
    Check Out 
    <a 
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank">
      create-vue
    </a>
    , the official Vue + Vite starter
  </p>
  <p>
    Install
    <a 
      href="https://github.com/johnsoncodehk/volar"  　 　　 target="_blank">
      Volar
    </a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
```
vueという拡張子のついたファイルを**シングルファイルコンポーネント**
ファイル（SFC）という。
Vue.jsではcreateAppで指定されていたAppコンポーネントをルートコンポーネントとして他のコンポーネントをimportすることでアプリケーションを構築していく。
Appコンポーネントに全処理を記述するよりコードを肥大化させないように
メンテナンスも大変になることを避けるため、コンポーネントを機能・役割ごとに分割していくことでコンポーネントが再利用できるようになり、コード保守も楽になる。したがって**コンポーネントはツリーのような構造**になる

Vue.jsを使うことによって、インタラクティブな機能を持ったコンテンツをカンタンに実装可能

#### `<script>`タグの中にsetupという文字列がある理由
Vue.jsのコード(Composition API)の記述を楽するために必要な設定
これを消すとVue.jsを利用したコードが動かなくなる。

#### `{{}}`（マスタッシュ）の利用
これを使うと、変数や関数の戻り値などをHTML上に表示できるようになります。
三項演算子を用いた処理を実行することも

#### `v-text`ディレクティブ
Vue.jsではtemplateタグ内の要素に対してVue.jsが持つ特別な属性
`v-xxx(xxxには属性名)`を設定することで設定した要素に対して特別な
機能を追加することが可能。
`v-text`を使うと、`v-text`に設定した変数の内容をブラウザに表示させられる。

つまり、
- マスタッシュを使った変数の内容の表示`<p>{{ message }}</p>`
- `v-text`に変数を文字列で指定する`<p v-text="message"></p>`

また、`v-text`で設定したタグ内に文字を入力するエラーが発生するので、
自己終了タグを使うのが良い

#### `v-html`ディレクティブ
変数にhtmlタグを含めるとそのタグをブラウザ上でタグとして認識させられる。
```javascript
<script setup>
  const message = '<h2>Hello World</h2>';
</script>

<template>
  <div v-html="message"></div>
</template>
```

上記の処理を記述した際、ブラウザはこれを
```html
<div>
  <h2>Hello World</h2>
</div>
```
と解釈する

#### `<script>`タグ内でのアロー関数の直接実行
`<script>`タグ内で直接の関数の実行が可能。
このタグの中身は自動実行される。

### Binding(バインディング)
`v-bind`ディレクティブを利用することで、`html`タグの属性の設定を行うことができる。

## [JavaScript](https://jsprimer.net/basic/introduction/)
