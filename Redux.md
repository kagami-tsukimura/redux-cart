# Redux

## Redux とは

状態管理のこと。
Redux で監視している現在の状態に応じて処理を変える。

### ex. 飲食店

- 注文前
  - 客
    - 状態：メニューを悩んでいる。
  - 店員
    - 状態：何もしない。
- 注文
  - 客
    - 状態：店員を呼ぶ。
  - 店員
    - 状態：注文を聞きに行く。
- 注文後
  - 客
    - 状態：何もしない。
  - 店員
    - 状態：注文を伝える。

客の注文に応じて店員の処理を変える。
− 客が注文前か、注文するのか、注文後なのかを Redux で監視する。

### ex. X

- ログイン済
  - プロフィールを見せる。
- ログイン前
  - ログイン画面を見せる。

Redux でページの画面を変更する。

### バニラ React のみとの違い

- React：Component から子、孫、それ以下にバケツリレーして渡す。
  - 小規模でバケツリレーをあまりしなくて良い場合。
  - 保守性に欠ける。
- Redux：1 箇所で管理してどこの Component からでも呼び出せる。
  - 大規模でバケツリレーが必要な場合。
  - 保守性に優れる。

### Redux の仕組み

![Image](https://user-images.githubusercontent.com/113032853/268547801-bdb29500-9a8c-426d-a887-a6c3376fc13a.gif)

> Quoted from https://redux.js.org/tutorials/essentials/part-1-overview-concepts
