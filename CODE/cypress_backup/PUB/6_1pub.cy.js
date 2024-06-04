import { values } from "lodash";

  it('6_1地圖>地面觀測', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.addTestContext('測試步驟：')
    cy.addTestContext('1. 點選地面觀測全部項目')
    cy.addTestContext('------------------------------------------------')
    //------------------------------------------------------------------
    //地面觀測--
    cy.addTestContext('截圖對照：')
      cy.visit('https://61.56.11.201/pub/');
      cy.syswindow_close()
      cy.wait(5000)
        cy.wait(5000).then(()=>{
            cy.delserch()
            //cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__toggle').click();
            cy.get('[class="v-treeview theme--light"]').children().eq(1).click();
            cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_1地面氣象站',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_1地面氣象站',
                value:'./screenshots/6_1pub.cy.js/6-1_1地面氣象站.png'
              })
            })
            cy.get('.main-block-options__btn__menu').click();
            cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();

            cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_2自動氣象站',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_1地面氣象站',
                value:'./screenshots/6_1pub.cy.js/6-1_1地面氣象站.png'
              })
            })
            cy.qpe_menu_open().click();
            cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();

            cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(3) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_3自動雨量站',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_3自動雨量站',
                value:'./screenshots/6_1pub.cy.js/6-1_3自動雨量站.png'
              })
            })
            cy.qpe_menu_open().click();
            cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(3) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();

            cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(4) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_4累積雨量分布圖',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_4累積雨量分布圖',
                value:'./screenshots/6_1pub.cy.js/6-1_4累積雨量分布圖.png'
              })
            })

            cy.qpe_menu_open().click();
            cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
            .children('.v-slider__tick').eq(1).click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_5累積雨量3hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_5累積雨量3hour',
                value:'./screenshots/6_1pub.cy.js/6-1_5累積雨量3hour.png'
              })
            })
            
            cy.qpe_menu_open().click();
            cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
            .children('.v-slider__tick').eq(2).click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_6累積雨量6hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_6累積雨量6hour',
                value:'./screenshots/6_1pub.cy.js/6-1_6累積雨量6hour.png'
              })
            })

            cy.qpe_menu_open().click();
            cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
            .children('.v-slider__tick').eq(3).click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_7累積雨量12hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_7累積雨量12hour',
                value:'./screenshots/6_1pub.cy.js/6-1_7累積雨量12hour.png'
              })
            })

            cy.qpe_menu_open().click();
            cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
            .children('.v-slider__tick').eq(4).click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_8累積雨量24hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_8累積雨量24hour',
                value:'./screenshots/6_1pub.cy.js/6-1_8累積雨量24hour.png'
              })
            })
            
            cy.qpe_menu_open().click();
            cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(4) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
            cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(5) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_9縣市最大雨量1hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_9縣市最大雨量1hour',
                value:'./screenshots/6_1pub.cy.js/6-1_9縣市最大雨量1hour.png'
              })
            })
            
            cy.qpe_menu_open().click();
            cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
            .children('.v-slider__tick').eq(1).click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_10縣市最大雨量3hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_10縣市最大雨量3hour',
                value:'./screenshots/6_1pub.cy.js/6-1_10縣市最大雨量3hour.png'
              })
            })

            cy.qpe_menu_open().click();
            cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
            .children('.v-slider__tick').eq(2).click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_11縣市最大雨量6hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_11縣市最大雨量6hour',
                value:'./screenshots/6_1pub.cy.js/6-1_11縣市最大雨量6hour.png'
              })
            })

            cy.qpe_menu_open().click();
            cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
            .children('.v-slider__tick').eq(3).click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_12縣市最大雨量12hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_12縣市最大雨量12hour',
                value:'./screenshots/6_1pub.cy.js/6-1_12縣市最大雨量12hour.png'
              })
            })

            cy.qpe_menu_open().click();
            cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
            .children('.v-slider__tick').eq(4).click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(1000)
            cy.screenshot('6-1_13縣市最大雨量24hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_13縣市最大雨量24hour',
                value:'./screenshots/6_1pub.cy.js/6-1_13縣市最大雨量24hour.png'
              })
            })

            cy.qpe_menu_open().click();
            cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(5) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
            cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(6) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(10000)
            cy.screenshot('6-1_14鄉鎮最大雨量1hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_14鄉鎮最大雨量1hour',
                value:'./screenshots/6_1pub.cy.js/6-1_14鄉鎮最大雨量1hour.png'
              })
            })

          
            cy.qpe_menu_open().click();
            cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
            .children('.v-slider__tick').eq(1).click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(10000)
            cy.screenshot('6-1_15鄉鎮最大雨量3hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_15鄉鎮最大雨量3hour',
                value:'./screenshots/6_1pub.cy.js/6-1_15鄉鎮最大雨量3hour.png'
              })
            })

            cy.qpe_menu_open().click();
            cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
            .children('.v-slider__tick').eq(2).click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(10000)
            cy.screenshot('6-1_16鄉鎮最大雨量3hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_16鄉鎮最大雨量3hour',
                value:'./screenshots/6_1pub.cy.js/6-1_16鄉鎮最大雨量3hour.png'
              })
            })

            cy.qpe_menu_open().click();
            cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
            .children('.v-slider__tick').eq(3).click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(10000)
            cy.screenshot('6-1_17鄉鎮最大雨量3hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_17鄉鎮最大雨量3hour',
                value:'./screenshots/6_1pub.cy.js/6-1_17鄉鎮最大雨量3hour.png'
              })
            })

            cy.qpe_menu_open().click();
            cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
            .children('.v-slider__tick').eq(4).click();
            cy.get('.display-ctrl__btn').click();
            cy.close_menu().click().wait(10000)
            cy.screenshot('6-1_18鄉鎮最大雨量3hour',{overwrite:true}).then(()=>{
              cy.addTestContext({
                title:'6-1_18鄉鎮最大雨量3hour',
                value:'./screenshots/6_1pub.cy.js/6-1_18鄉鎮最大雨量3hour.png'
              })
            })
          })
        //-----------------------------------------------------------------------------------------
      });

