# portfolio

弘松 陸（Riku Hiromatsu）のポートフォリオサイト。Astro で作り、Cloudflare で公開する予定。

## 構成

1ページだけのサイト。上から順に次のセクションが並ぶ。

| セクション | 部品 | 中身の置き場所 |
|---|---|---|
| ヘッダー | `src/components/Header.astro` | — |
| 冒頭（肩書き・一文） | `src/components/Hero.astro` | `src/data/site.ts` |
| 頼めること | `src/components/Services.astro` | `src/data/site.ts` の `services` |
| つくっているもの | `src/components/Making.astro` | `src/content/making/*.md`（1件1ファイル） |
| お知らせ | `src/components/News.astro` | `src/content/news/*.md`（1件1ファイル） |
| 連絡（X の DM） | `src/components/Contact.astro` | `src/data/site.ts` の `contact` |
| フッター | `src/components/Footer.astro` | `src/data/site.ts` の `links` |

色や余白は `src/styles/global.css` の変数にまとめている。

## お知らせを足すとき

`src/content/news/` に Markdown を1つ足す。

```md
---
title: 〇〇に登壇します
date: 2026-11-01
url: https://example.com   # 任意
---
```

## 開発

Node.js 22.23.4 以上が必要（`.nvmrc` は 24）。

```sh
npm install
npm run dev     # http://localhost:4321
npm run build   # dist/ に静的 HTML を出力
```
