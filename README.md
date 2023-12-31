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
`v-bind`ディレクティブを利用してhref属性を設定する場合は以下のように記述する
```html
<a v-bind:href="変数名">リンク名</a>
```

実装例として、変数linkを定義して、GoogleのURLを設定

```html
<script setup>
  const link = 'https://google.com';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div>
    <a v-bind:href="link">Google</a>
  </div>
</template>
```
※ここからはすべてv-bind:の省略型の:(コロン)を利用

#### class属性
##### `v-bind`を使ったclass適用（オブジェクト利用）
オブジェクトのプロパティにclass名を設定し、値に変数名または
true,falseを利用することでclassを適用するかどうかを設定することができる。
変数名を true に設定した場合は class が適用され false に設定した場合は適用されない
※v-bindを利用してclassを設定する理由は、動的に適用するclassを変更できるようにするため
`v-bind:class="{class名: 変数名 or (true or false)}"`
上記のように記述する

記述例
```html
<script setup>
  const isActive = false;
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p>:class="{ active: isActive }">v-bindの設定方法の確認</p>
</template>
```

- 通常のclassとバインディングclassを設定
通常のclass指定とバインディングclass指定は共存させられる。
常時適用させたいclassは通常のclass指定、
動的な変更が必要な場合は`v-bind`を利用したclass指定
`<p class="underLine" :class="{ active: isActive }">`

underLine と active クラスを isActive が true の場合に適用したい場合には下記のように記述
`<p :class="{ 'underLine active': isActive }">`

`v-bind`ディレクティブを設定したclassの中に、
複数のclassを設定可能
`<p class="underLine" :class="{ active: isActive, back: isBlack }">`

`<p :class="{ 'underLine active': isActive, back: isBlack }">`

三項演算子を活用した例
`<p :class="isActive ? 'active' : 'underLine'">`

変数内文字列展開
`  <p :class="isActive">`

配列で複数のクラスを適用
` <p :class="[isActive, isBlack]">`

配列内でオブジェクト利用
`<p :class="[{ active: 'isActive' }, isBlack]">`

配列内で演算子利用
`<p :class="[isActive && 'active', isBlack]">`
`<p :class="[isActive ? 'active' : 'underLine', isBlack]">`

#### style属性の設定
style属性の場合もclass同様に複数の記述方法を持つ。
inlineでオブジェクトを利用して府k数のプロパティ設定を行うことができる、
変数の内容を展開する例
`<p :style="{ color: activeColor, fontWeight: fontStress }">

上記例ではキャメルケースになっているが、
通常のstyleプロパティを利用した場合は、シングルクォーテーションを利用する
`<p :style="{ color: activeColor, 'font-weight': fontStress }">`

変数側にstyleオブジェクトを設定する
```html
<script setup>
    const styleObject = {
        color: "red",
        fontWeight: 900,
    }
</script>

<template>
    <p :style="styleObject">
</template>
```
変数側に通常のstylea属性のように記述することもできる
```html
<script setup>
    const styleObject = "color:red;font-weight:900"
</script>
<template>
    <p :style="styleObject">
</template>
```
### 条件分岐 
`v-if`ディレクティブを利用することで要素単位または分六単位で表示非表示、または内容変更ができる。
`v-if`と共に、`v-else-if`,`v-else`ディレクティブを利用できる。
条件分岐のディレクティブは下記の記述で利用できる
`<div v-if="条件式">内容</div>`
`<div v-else-if="条件式">内容</div>`
`<div v-else>内容</div>`

活用例
- 特定の変数に値が入ってる場合に表示
```html
<script setup>
  const error = 'エラー発生';
</script>

<template>
  <div>v-if="error">{{ error }}</div>
</template>
```
条件式には変数の値をtrue,falseのbooleanを利用することもできる。
```html
<script setup>
  const error = true;
</script>

<template>
  <div>v-if="error">エラーが発生しています。</div>
</template>
```

- エラーが起きていない場合の表示を行いたいとき(2つの分岐)
```html
<script setup>
  const error = '';
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-else>エラーはありません。</div>
</template>
```

- 表示内容を複数の分岐で変えたいとき
```html
<script setup>
  const stock = 0;
</script>

<template>
  <div v-if="stock > 5">まだ商品に在庫数に余裕があります</div>
  <div v-else-if="stock === 0">申し訳ございません。現在売り切れです。</div>
  <div v-else>在庫数が少なくなっています。お急ぎください。</div>
</template>
```
※`v-if`と`v-if`は1つしか利用できないが、`v-else-if`は条件の数によって増やすことができる

- 条件によって表示内容を変える。
`v-if`ディレクティブが設定されている要素だけではなく、
その中にさらに要素を含むより大きな単位で表示の内容を切り替える

```html
<div v-if="user">
  <div>...</div>
  <div>
    <p>...</p>
    <p>...</p>
  </div>
</div>
```
#### `v-show`による制御
`v-if`ディレクティブに似たものに`v-show`ディレクティブがある。
`v-if`では条件式を利用することで表示・非表示だけではなく、表示する内容を変更することができた
`v-show`には、`v-else-if`などを一緒に利用するディレクティブは存在しない。
条件によって表示・非表示のみ制御を行う。
`<div v-show="条件式">内容</div>`
error変数の値がtrueの場合は内容が表示され、falseの場合には内容が表示されることはない
```html
<script setup>
  const error = true;
</script>

<template>
  <div v-show="error">エラーが発生しています。</div>
</template>
```

#### `v-if`と`v-show`の違い
非表示の方法が`v-if`,`v-show`で異なるが、では`v-show`を利用するメリットは何なのでしょうか
`v-show`のdisplayのnone,blockの切り替えは`v-if`による要素の追加、削除より処理の負荷が低いため。
例
- ドロップダウンメニューのように非表示の時には何も表示されず表示・非表示を繰り返すような機能に v-show を利用することが適している

### リスト表示
#### `v-for`ディレクティブ
複数のデータで構成された情報を画面上にリストまたはテーブル表示させたいという場合がある。
そのようなデータをリスト表示させたい場合に利用できるのが`v-for`ディレクティブ
- 配列を画面上に表示
配列がたくさんの要素で構成されている場合
`v-for`ディレクティブで、1行のコードで処理を行うことができるようになる
```html
<script>
   setup>
  const languages = ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Rust', 'Go'];
</script>

<template>
  <p v-for="language in languages" :key="language">{{ language }}</p>
</template>
```
1. 配列から要素を1つずつ順番に取り出し
2. 取り出し要素をマスタッシュで囲む
これでリストとして表示できる
※`v-for`ディレクティブを利用した場合は`v-bind`で、`key`属性に一意の値を設定する必要がある

### イベントを設定
ユーザとのインタラクティブなUIを提供するためにはイベントを利用する必要がある。

イベントは
- ボタンをクリック 
- マウスを動かす
- キーボードを押す
などユーザが実行する処理によって引き起こされる。
ユーザによって引き起こされたイベントを`v-on`ディレクティブを使って受け取ることができる。
`v-on`ディレクティブでイベントを受け取ることで、それをトリガーとして別の処理を行うことができる。
`v-on`ディレクティブを設定してもイベントが発生しなければ何も処理は行われない。

##### ボタンのクリック


click イベント
## [JavaScript](https://jsprimer.net/basic/introduction/)
