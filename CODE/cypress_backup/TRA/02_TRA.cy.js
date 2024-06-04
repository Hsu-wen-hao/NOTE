

it('2-測試自動雨量站自動更新時，是否重新繪製', () => {
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
          return false
        })
        /*
        測試總覽：
        1. 點擊地圖工具”設定已選圖資”，打開設定已選圖資區塊。
        2. 選取”地面觀測>自動雨量站”，點擊[顯示圖資]。
        3. 檢視地圖上是否有打點，左上角圖標是否有顯示。
        4. 閒置一段時間，觀察自動更新時自動雨量站是否正常繪製。
        */
        cy.addTestContext('測試步驟：')
        cy.addTestContext('1. 點擊地圖工具”設定已選圖資”，打開設定已選圖資區塊。') 
        cy.addTestContext('2. 選取”地面觀測>自動雨量站”，點擊[顯示圖資]。')
        cy.addTestContext('3. 檢視地圖上是否有打點，左上角圖標是否有顯示。')
        cy.addTestContext('4. 閒置一段時間，觀察自動更新時自動雨量站是否正常繪製。')
        cy.addTestContext('-----------------------------------------------------------')
        cy.addTestContext('判斷結果：')
       cy.QPETRA_login()
       //cy.qpe_menu_open().click()
       //喘口氣
       cy.wait(5000)
       cy.delserch()
       cy.TRA_inside_menu().eq(3).click()
       cy.TRA_map_inside_children().eq(2).click()
       cy.dispaly_image()
       cy.qpe_menu_close()
       cy.screenshot('2-4_閒置前',{overwrite:true})
       cy.addTestContext('閒置測試(每分鐘打印檢查結果)：');
       const TA = cy.get('.text-container > span');
        for (let i = 1; i <= 11; i++) {
          // Wait for 1 minute
          cy.wait(60000);
          // Get the timer text and verify that it has changed
          cy.get('.text-container > span').invoke('text').should('not.eq', `${i}:00`).then((text)=>{
              cy.addTestContext(`${text}`);
          })
        }
        cy.addTestContext('-----------------------------------------------------------')
        cy.addTestContext('截圖對照：')
        cy.screenshot('2-4_閒置後',{overwrite:true})
        cy.addTestContext({
          title:'2-4_閒置前',
          value:'./screenshots/TRA.cy.js/2-4_閒置前.png',
        })
        cy.addTestContext({
          title:'2-4_閒置後',
          value:'./screenshots/TRA.cy.js/2-4_閒置後.png',
        })

       
});