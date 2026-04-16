const YAHOO_APP_ID = 'YOUR_YAHOO_CLIENT_ID'; 
const YAHOO_ALERT_COLOR = '11'; // 赤色

/**
 * Yahoo!気象情報API（YOLP）用のメイン関数
 * ※ 10分〜15分おきのトリガーで実行
 */
function checkYahooRainAlert() {
  const yahooApi = new YahooWeatherAPI(YAHOO_APP_ID, LATITUDE, LONGITUDE);
  const calendarManager = new GoogleCalendarManager(CALENDAR_ID);

  try {
    const rainForecasts = yahooApi.getRainForecasts();
    
    // 60分以内の予測データの中から、雨が降る時間帯を探す
    for (const forecast of rainForecasts) {
      const startTime = forecast.startTime;
      const endTime = forecast.endTime;
      const rainfall = forecast.rainfall;
      
      // 【修正】タイトルを固定文字にする（予報が外れたときにカレンダーから探し出して削除するため）
      const title = `🚨 [Yahoo] 降雨アラート`; 
      
      // 降水強度の数値は説明文（詳細）の中に入れる
      const description = `Yahoo!気象情報により、${startTime.toLocaleTimeString()}頃から降水強度 ${rainfall}mm/h の雨が予測されています。`;
      
      // 雨が0より大きい場合にカレンダー登録（shouldExist = true）
      const isRaining = rainfall > 0;
      
      calendarManager.manageEvent(
        startTime, 
        endTime, 
        title, 
        description, 
        YAHOO_ALERT_COLOR, 
        isRaining
      );
    }
  } catch (e) {
    Logger.log('Yahoo APIエラー: ' + e.toString());
  }
}

/**
 * Yahoo!気象情報APIとの通信を管理するクラス
 */
class YahooWeatherAPI {
  constructor(appId, latitude, longitude) {
    this.appId = appId;
    this.coordinates = `${longitude},${latitude}`; // Yahooは 経度,緯度 の順
  }

  /**
   * 1時間後の予測データを10分刻みの配列で返す
   */
  getRainForecasts() {
    const options = {
      method: 'get',
      muteHttpExceptions: true,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };

    // Client IDの前後に見えない空白が入っていても安全なように除去
    const safeAppId = this.appId.trim();
    const url = `https://map.yahooapis.jp/weather/V1/place?coordinates=${this.coordinates}&appid=${safeAppId}&output=json&past=0`;

    const response = UrlFetchApp.fetch(url, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();

    if (responseCode !== 200) {
      throw new Error(`Yahoo API通信エラー (ステータスコード: ${responseCode}) - 詳細: ${responseText}`);
    }

    const json = JSON.parse(responseText);

    if (!json || !json.Feature || json.Feature.length === 0) {
      throw new Error('Yahoo APIからデータが取得できませんでした。');
    }

    const weatherList = json.Feature[0].Property.WeatherList.Weather;
    const forecasts = [];

    weatherList.forEach((w) => {
      // 予測データのみを対象にする
      if (w.Type === 'forecast' || w.Type === 'observation') {
        const startTime = this.parseDate(w.Date);
        const endTime = new Date(startTime.getTime() + 10 * 60 * 1000); // 10分枠
        
        forecasts.push({
          startTime: startTime,
          endTime: endTime,
          rainfall: w.Rainfall
        });
      }
    });
    return forecasts;
  }

  /**
   * Yahoo形式の日時文字列(YYYYMMDDHHMI)をDateオブジェクトに変換
   */
  parseDate(dateStr) {
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6) - 1;
    const day = dateStr.substring(6, 8);
    const hour = dateStr.substring(8, 10);
    const minute = dateStr.substring(10, 12);
    return new Date(year, month, day, hour, minute);
  }
}
