it('2_1預報與觀測>地面觀測>閒置測試自動雨量站', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    /*
    測試自動雨量站自動更新時，是否重新繪製
    1. 點擊地圖工具”設定已選圖資”，打開設定已選圖資區塊。
    2. 選取”地面觀測>自動雨量站”，點擊[顯示圖資]。
    3. 檢視地圖上是否有打點，左上角圖標是否有顯示。
    4. 閒置一段時間，觀察自動更新時自動雨量站是否正常繪製。
    */
   cy.addTestContext('測試步驟：')
   cy.addTestContext('測試自動雨量站自動更新時，是否重新繪製')
   cy.addTestContext('1. 點擊地圖工具”設定已選圖資”，打開設定已選圖資區塊。')
   cy.addTestContext('2. 選取”地面觀測>自動雨量站”，點擊[顯示圖資]。')
   cy.addTestContext('3. 檢視地圖上是否有打點，左上角圖標是否有顯示。')
   cy.addTestContext('4. 閒置一段時間，觀察自動更新時自動雨量站是否正常繪製。')
   cy.addTestContext('--------------------------------------------------------------')
   cy.addTestContext('判斷結果：')

    cy.visit('https://61.56.11.201/pub/')

    cy.syswindow_close()

    //cy.qpe_menu_open().click()
    cy.map_radar()
    cy.TRA_map_inside_children().eq(0).click();
    cy.map_radar()
    cy.map_observation()
    cy.TRA_map_inside_children().eq(2).click();
    cy.get('.display-ctrl__btn').click();
    cy.get('.main-block-options__btn__menu').click().then(()=>{
    //3. 檢視地圖上是否有打點，左上角圖標是否有顯示。
      cy.get('#gauge_message>.card>.card-content').children().should('have.text', '●●●●●').then(($text)=>{
        cy.addTestContext($text)
      })
    })
    cy.screenshot('2-4_閒置前',{overwrite:true})
    cy.get('.main-block-options__btn__menu').click();
    cy.get('#product_btn').click()
    cy.screenshot('2-4_自動雨量',{overwrite:true,capture:'fullPage'})
    let found = false;
    cy.get('.draggable-item span').each(($span)=>{
      const text = $span.text();
      if(text.includes('自動雨量站')){
        found = true;
      }
      console.log(text)
    }).then(()=>{
      console.log(found)
      cy.addTestContext(`2-1_3將會返回true[成功]或false[失敗]：${found}`)
    })
    const TA = cy.get('.text-container > span');
    for (let i = 1; i <= 10; i++) {
      cy.wait(60000);
      cy.get('.text-container > span').invoke('text').should('not.eq', `${i}:00`).then((text)=>{
          cy.addTestContext(`閒置測試：${text}`);
      })
    }
    cy.addTestContext('--------------------------------------------------------------')
    cy.addTestContext('截圖對照：')
    cy.screenshot('2-4_閒置後',{overwrite:true})
    cy.addTestContext({
        title:'2-4_閒置前',
        value:'./screenshots/2_1_pub.cy.js/2-4_閒置前.png',
      })
      cy.addTestContext({
        title:'2-4_閒置後',
        value:'./screenshots/2_1_pub.cy.js/2-4_閒置後.png',
      })



  });
