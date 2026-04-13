# gas-yahoo-weather-alert
Yahoo!気象情報APIを活用し、Googleカレンダーへ鉄砲雨（ゲリラ豪雨）アラートを自動登録するGASライブラリ。Survival DXの実践用。
素晴らしいですね！GitHubのリポジトリにおいて、READMEは「そのプロジェクトの顔」であり、多言語化されていることは、グローバルなエンジニアコミュニティや教育の現場において信頼性を一気に高めます。

「Survival DX」と「忍の精神」をエッセンスとして加えつつ、エンジニアが読みやすい構成で作成しました。そのままGitHubの README.md に貼り付けて使っていただけます。

gas-yahoo-weather-alert
Japanese | English

<a name="japanese"></a>

🇯🇵 日本語 (Japanese)
概要
このプロジェクトは、Yahoo!気象情報APIを活用して「鉄砲雨（ゲリラ豪雨）」をリアルタイムで検知し、Googleカレンダーにアラートを自動登録するGoogle Apps Script（GAS）ツールです。

**Survival DX（サバイバルDX）**の一環として、低スペックなPC環境でも動作し、日常の決断疲れ（Decision Fatigue）を最小化して生存戦略を高めることを目的としています。

特徴
高精度な日本国内予報: Yahoo!の雨雲レーダー（ナウキャスト）を利用し、1時間後までの降水強度を10分刻みで取得。

カレンダー同期: 雨が降る時間帯に「🚨 [Yahoo] 降雨アラート」を自動登録。

自己クリーンアップ: 予報が「晴れ」に変わった場合、カレンダー上のアラートを自動で探し出し、削除します。

軽量・サーバーレス: GASで動作するため、24時間365日の監視を完全無料で実現します。

セットアップ方法
Yahoo!デベロッパーネットワークでClient IDを取得します。

Google Apps Scriptのエディタを開き、本リポジトリのコードを貼り付けます。

YAHOO_APP_ID、LATITUDE、LONGITUDE、CALENDAR_ID を自身の環境に合わせて設定します。

checkYahooRainAlert 関数を、**「分ベースのタイマー / 10分おき」**のトリガーで実行設定します。

開発の背景
現代は予測不能な鉄砲雨が多発するサバイバルな環境です。我らは忍（シノビ）。IT技術という現代の忍具を使い、無駄な濡れを避け、常に身の回りの状況を把握しておく必要があります。

詳細な解説は note 記事をご覧ください：
【Survival DX】鉄砲雨を完全回避。GAS×Yahoo!天気APIで作る直前アラートシステム

<a name="english"></a>

🇺🇸 English
Overview
This project is a Google Apps Script (GAS) tool that detects "Guerrilla Rainstorms" (sudden heavy rain) in real-time using the Yahoo! Japan Weather API and automatically registers alerts on Google Calendar.

Inspired by the philosophy of "Survival DX," this tool is designed to run efficiently even on low-spec hardware, helping users minimize decision fatigue and enhance daily survival strategies through automation.

Features
High-Precision Alerts: Leverages Yahoo! Japan's rain radar (Nowcast) to fetch 1-hour precipitation forecasts at 10-minute intervals.

Calendar Sync: Automatically adds "🚨 [Yahoo] Rain Alert" events to your schedule.

Auto-Cleanup: If the forecast changes to "Clear," the script identifies and deletes outdated alerts from your calendar.

Serverless & Free: Runs entirely on GAS, providing 24/7 monitoring at zero cost.

Quick Start
Obtain a Client ID from the Yahoo! Japan Developer Network.

Open the GAS editor and paste the code from this repository.

Configure YAHOO_APP_ID, LATITUDE, LONGITUDE, and CALENDAR_ID.

Set up a trigger for the checkYahooRainAlert function: "Time-driven / Minute timer / Every 10 minutes."

Background
In an era of unpredictable weather, we must be prepared. As modern "Shinobi" (ninjas), we utilize IT as our weapon to stay aware of our surroundings and avoid unnecessary risks.

License
MIT License - See the LICENSE file for details.
