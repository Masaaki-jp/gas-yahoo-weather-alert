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

4. **トリガー**: checkYahooRainAlert を 「10分おき」 に設定。

🥷 開発の背景
現代は予測不能な雨が多発するサバイバル環境。我らは忍。
現代の忍具（IT）を使いこなし、無駄な濡れを避け、生存戦略を最大化せよ。

詳細な解説（note）:
【Survival DX】鉄砲雨を完全回避するシステム

---🇺🇸 English---


# 🚨 gas-yahoo-weather-alert

> **A Google Apps Script (GAS) tool that detects "Guerrilla Rainstorms" in real-time using Yahoo! Japan Weather API and auto-registers alerts on Google Calendar.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Survival DX](https://img.shields.io/badge/Survival-DX-blue.svg)](#philosophy)

## 🌊 Overview
In an era of unpredictable weather, this tool real-time monitors "Guerrilla Rainstorms" (sudden heavy rain) and injects alert events into your Google Calendar exactly when you need them. 

This is a practical tool for **"Survival DX"**—achieving high-level IT results with minimal resources to enhance daily survival strategies.

### 🛠 Key Features

| Feature | Description |
| :--- | :--- |
| **Hyper-Local Forecast** | Uses Yahoo! Japan Nowcast to fetch precipitation levels at 10-min intervals. |
| **Calendar Sync** | Automatically adds "🚨 Rain Alert" events to your Google Calendar. |
| **Auto-Cleanup** | Automatically detects and deletes alerts if the forecast changes to clear skies. |
| **Zero Cost** | Runs entirely on Google Apps Script (Serverless) with no maintenance fees. |

---

## 🚀 Quick Start

### 1. Obtain API Key
Get your "Client ID" from the [Yahoo! Japan Developer Network](https://developer.yahoo.co.jp/). (Select "Do not use ID linkage" for easy setup).

### 2. Implementation
Paste the code from `YahooWeatherAPI.js` into your Google Apps Script editor.

### 3. Configuration
Set your environment variables in the script:
```javascript
const YAHOO_APP_ID = 'YOUR_CLIENT_ID';
const LATITUDE     = 35.586; // Example: Kawasaki, Japan
const LONGITUDE    = 139.632;
const CALENDAR_ID  = 'YOUR_CALENDAR_ID'; 
```
### 4. Set Trigger
Set a trigger for the checkYahooRainAlert function:

Type: Time-driven / Minute timer

Interval: Every 10 minutes

🥷 Philosophy: Survival DX
We live in a survival environment where unpredictable storms occur frequently. As modern Shinobi (Ninjas), we must master IT "tools" to avoid unnecessary risks and stay aware of our surroundings at all times.

Detailed Article (Japanese):
How to avoid sudden rainstorms using GAS & Yahoo API(https://note.com/masa_cloud/n/na23827707f83)
