### 参考

[zenn: 【完全版】React + FastAPI で開発するモダンな web アプリ](https://zenn.dev/sawao/articles/15a9cf0e3360a7)

### 起こった問題

- python -m venv venv が通らない
  - [qiita: mac の Python はコマンドによってバージョンが違う](https://qiita.com/Naoki_kkc/items/8688862020c9db3ae77b)

### 次にすること

- docker を用いて DB を用意し CRUD をやってみる
  - todo など簡単らやつ
- 行けそうらなら prisma も併用してみたい
- 料金帯に応じて aws にデプロイ
  - もしかしたら Lambda てやつにおけるかも?
    - できたら Lambda に処理を書いて docker で自動デプロイまでできたら最高
