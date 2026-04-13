# 🚨 gas-yahoo-weather-alert

> **Yahoo!気象情報APIを活用し、Googleカレンダーへ「鉄砲雨」アラートを自動登録するGASライブラリ。**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Survival DX](https://img.shields.io/badge/Survival-DX-blue.svg)](#japanese)

---

## 🇯🇵 日本語 (Japanese)

### 🌊 概要
「あと数分で降り始める」という**鉄砲雨（ゲリラ豪雨）**をリアルタイムで検知し、Googleカレンダーにアラートを自動でねじ込みます。
これは、低スペックPCでも高度なIT結果を出す**「Survival DX」**の実践ツールです。

### 🛠 主な機能

| 機能 | 内容 |
| :--- | :--- |
| **超局地予報** | Yahoo!ナウキャストを利用。10分刻みの降水強度を取得。 |
| **カレンダー同期** | 雨が降る時間枠に「🚨 降雨アラート」を自動登録。 |
| **自己消去** | 予報が「晴れ」に変われば、登録済みの予定を自動で削除。 |
| **完全無料** | Google Apps Script上で動くため、維持費ゼロ。 |

### 🚀 セットアップ
1. **API取得**: [Yahoo!デベロッパーネットワーク](https://developer.yahoo.co.jp/)でClient IDを取得。
2. **コード導入**: 本リポジトリの `.js` コードをGASエディタに貼り付け。
3. **変数設定**:
   ```javascript
   const YAHOO_APP_ID = 'YOUR_CLIENT_ID';
   const LATITUDE     = 35.586; // 緯度
   const LONGITUDE    = 139.632; // 経度
   const CALENDAR_ID  = 'YOUR_CALENDAR_ID';
