# ポケガチャ ver.3 開発メモ

## button のコンポーネント( atom )作成から始める

- 機能ごと（A ボタン、 B ボタンなど）に分けたほうが良い？
- 見た目（丸形、四角型など）ごとに分けたほうが良い？

- 後で onClick の動作テストを行う予定なのでとりあえず機能ごとでコンポーネント分けして作ってみる

## A ボタン、 B ボタンのまとまりである AbButton というコンポーネント( molecule )を作成

- とりあえず isAnimation を props として渡して実装

## UI とロジックを分けて開発する

- UI 部分の細かいところから作っていき、合わせていく

[Container / Presentational 構成【React のコンポーネント設計】](https://www.nochitoku-it.com/containr-1)
