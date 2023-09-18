# Redux

## Redux とは

状態管理のこと。
Redux で監視している現在の状態に応じて処理を変える。

### ex. 飲食店

<details><summary><b>=======================<br>&nbsp;&nbsp;&nbsp;飲食店でのRedux<br>&nbsp;========================</b></summary><div>

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

</div></details>

### ex. X

<details><summary><b>=======================<br>&nbsp;&nbsp;&nbsp;XでのRedux<br>&nbsp;========================</b></summary><div>

- ログイン済
  - プロフィールを見せる。
- ログイン前
  - ログイン画面を見せる。

Redux でページの画面を変更する。

</div></details>

### バニラ React のみとの違い

- React：Component から子、孫、それ以下にバケツリレーして渡す。
  - 小規模でバケツリレーをあまりしなくて良い場合。
  - 保守性に欠ける。
- Redux：1 箇所で管理してどこの Component からでも呼び出せる。
  - 大規模でバケツリレーが必要な場合。
  - 保守性に優れる。

### Redux の仕組み

![Image](https://user-images.githubusercontent.com/113032853/268547801-bdb29500-9a8c-426d-a887-a6c3376fc13a.gif)

> Quoted from <https://redux.js.org/tutorials/essentials/part-1-overview-concepts>

<details><summary><b>=======================<br>&nbsp;&nbsp;&nbsp;Reduxによる処理の流れ<br>&nbsp;========================</b></summary><div>

1. State：状態

   - ex. $0

2. UI：Button

   - Deposit $10：ボタンを押して+$10 する。
     - Action 実行。

3. Dispatch：Action を Store に通知

   - Event Handler：Event(Deposit $10)を処理する。

4. Store：1 箇所で状態を管理し、どの Component でも使えるようにする。

   - Global に扱う。
   - Reducer：State（以前の状態） を Action（新しい状態） に更新。
     - Action と State を同時に取得する。
       - Action：Event(Deposit $10)）が Reducer に遷移する。
       - State：以前の状態（$0）が Reducer に遷移する。
     - R：Reducer 内のロジック
   - State：$0→$10 に更新。

</div></details>
