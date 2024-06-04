it('4_氣象觀測>地面氣象觀測', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    /*
    1. 點擊觀測頁籤。
    2. 勾選氣象觀測>地面氣象觀測。
    3. 確認表格是否有顯示。
    4. 點擊表格第一個測站的風向數值，畫面彈出時序圖。
    5. 點擊下載按鈕儲存時序圖。
    6. 點擊表格第一個測站其他氣象資料，確認時序圖視窗的氣象變數與時序圖有跟著變化並點擊下載圖示儲存圖片。
    */

    cy.addTestContext('測試步驟：')
    cy.addTestContext('1. 點擊觀測頁籤。')
    cy.addTestContext('2. 勾選氣象觀測>地面氣象觀測。')
    cy.addTestContext('3. 確認表格是否有顯示。')
    cy.addTestContext('4. 點擊表格第一個測站的風向數值，畫面彈出時序圖。')
    cy.addTestContext('5. 點擊下載按鈕儲存時序圖。')
    cy.addTestContext('6. 點擊表格第一個測站其他氣象資料，確認時序圖視窗的氣象變數與時序圖有跟著變化並點擊下載圖示儲存圖片。')
    cy.addTestContext('-----------------------------------------------------------------------------------------')

    cy.visit('https://61.56.11.201/pub/')

    cy.syswindow_close()

    //cy.qpe_menu_open().click()
    cy.get('.main-block-options__content > .row > :nth-child(3)').click();
    cy.get('.monitor_treeview > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
    cy.close_menu().click()
    cy.get('#monitor-datatable').children().should('be.visible').then(()=>{
        cy.wait(4000)
        cy.screenshot('4-3_顯示表格',{overwrite:true})
    })
    
    cy.get(':nth-child(1) > :nth-child(5) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_0風向',{overwrite:true}).wait(1000)
    cy.get('#tsgraph-download').click()
    cy.get(':nth-child(1) > :nth-child(6) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_1平均風',{overwrite:true}).wait(1000)
    cy.get('#tsgraph-download').click()
    cy.get(':nth-child(1) > :nth-child(7) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_2瞬間風',{overwrite:true}).wait(1000)
    cy.get('#tsgraph-download').click()
    cy.get(':nth-child(1) > :nth-child(9) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_3溫度',{overwrite:true}).wait(1000)
    cy.get('#tsgraph-download').click()
    cy.get(':nth-child(1) > :nth-child(10) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_4相對溼度',{overwrite:true}).wait(1000)
    cy.get('#tsgraph-download').click()
    cy.get(':nth-child(1) > :nth-child(11) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_5氣壓',{overwrite:true}).wait(1000)
    cy.get('#tsgraph-download').click()
    cy.get(':nth-child(1) > :nth-child(12) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_6雨量',{overwrite:true}).wait(1000)
    cy.addTestContext('截圖對照：')
    cy.addTestContext({
            title: '4-3_顯示表格',
            value: './screenshots/4_pub.cy.js/4-3_顯示表格.png',
      })
      cy.addTestContext({
            title: '4-6_0風向',
            value: './screenshots/4_pub.cy.js/4-6_0風向.png'
      })
      cy.addTestContext({
            title: '4-6_1平均風',
            value: './screenshots/4_pub.cy.js/4-6_1平均風.png',
      })
      cy.addTestContext({
            title: '4-6_2瞬間風',
            value: './screenshots/4_pub.cy.js/4-6_2瞬間風.png',
      })
      cy.addTestContext({
            title: '4-6_3溫度',
            value: './screenshots/4_pub.cy.js/4-6_3溫度.png',
      })
      cy.addTestContext({
            title: '4-6_4相對溼度',
            value: './screenshots/4_pub.cy.js/4-6_4相對溼度.png',
      })
      cy.addTestContext({
            title: '4-6_5氣壓',
            value: './screenshots/4_pub.cy.js/4-6_5氣壓.png',
      })
      cy.addTestContext({
            title: '4-6_6雨量',
            value: './screenshots/4_pub.cy.js/4-6_6雨量.png',
      })
  });
 