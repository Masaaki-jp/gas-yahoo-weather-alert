/**
   * Yahooアラート専用：指定期間内の既存アラートを一度削除し、最新のブロックで再登録する
   */
  replaceYahooEvents(startTime, endTime, eventTitle, newBlocks, eventColor) {
    // 1. 指定期間内のイベントを取得
    const existingEvents = this.calendar.getEvents(startTime, endTime);
    
    // 2. タイトルが一致する既存のYahooアラートをすべて削除
    existingEvents.forEach(event => {
      if (event.getTitle() === eventTitle) {
        event.deleteEvent();
      }
    });

    // 3. まとまった新しい雨ブロックを登録
    newBlocks.forEach(block => {
      const description = `Yahoo!気象情報により、最大降水強度 ${block.maxRainfall}mm/h の雨が予測されています。`;
      const newEvent = this.calendar.createEvent(eventTitle, block.startTime, block.endTime, {
        description: description
      });
      newEvent.setColor(eventColor);
      
      // 他の予定を邪魔しないよう「予定なし（透明）」に設定
      newEvent.setTransparency(CalendarApp.EventTransparency.TRANSPARENT);
      
      Logger.log(`✅ 更新: ${block.startTime.toLocaleTimeString()} 〜 ${block.endTime.toLocaleTimeString()} にアラートを再集約しました。`);
    });
  }
