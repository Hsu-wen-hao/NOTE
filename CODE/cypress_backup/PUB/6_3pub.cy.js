it('6_3地圖>閃電觀測', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.addTestContext('測試步驟：')
  cy.addTestContext('1. 點選閃電觀測全部項目')
  cy.addTestContext('------------------------------------------------')
  cy.addTestContext('截圖對照：')

  describe('6-3地圖>迴圈閃電觀測測試',()=>{
      cy.visit('https://61.56.11.201/pub/');
      cy.syswindow_close()
    });

        //閃電觀測
        cy.log('parper next test').wait(2000)
        cy.wait(5000).then(()=>{
        cy.delserch()
        cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(3) > .v-treeview-node__root > .v-treeview-node__toggle').click();
        cy.get('[class="v-treeview theme--light"]').children().eq(3).click();
        cy.get(':nth-child(4) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.get('.display-ctrl__btn').click();
        cy.close_menu().click().wait(1000)
        cy.screenshot('6-3_1及時閃電',{overwrite:true}).then(()=>{
          cy.addTestContext({
            title:'6-3_1及時閃電',
            value:'./screenshots/6_3pub.cy.js/6-3_1及時閃電.png'
          })
        })

        cy.qpe_menu_open().click();
        cy.get(':nth-child(4) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.get(':nth-child(4) > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.get('.display-ctrl__btn').click();
        cy.close_menu().click().wait(1000)
        cy.screenshot('6-3_2閃電頻率1hour',{overwrite:true}).then(()=>{
          cy.addTestContext({
            title:'6-3_2閃電頻率1hour',
            value:'./screenshots/6_3pub.cy.js/6-3_2閃電頻率1hour.png'
          })
        })

        cy.qpe_menu_open().click();
        cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
        .children('.v-slider__tick').eq(1).click();
        cy.get('.display-ctrl__btn').click();
        cy.close_menu().click().wait(1000)
        cy.screenshot('6-3_3閃電頻率3hour',{overwrite:true}).then(()=>{
          cy.addTestContext({
            title:'6-3_3閃電頻率3hour',
            value:'./screenshots/6_3pub.cy.js/6-3_3閃電頻率3hour.png'
          })
        })

        cy.qpe_menu_open().click();
        cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
        .children('.v-slider__tick').eq(2).click();
        cy.get('.display-ctrl__btn').click();
        cy.close_menu().click().wait(1000)
        cy.screenshot('6-3_4閃電頻率6hour',{overwrite:true}).then(()=>{
          cy.addTestContext({
            title:'6-3_4閃電頻率6hour',
            value:'./screenshots/6_3pub.cy.js/6-3_4閃電頻率6hour.png'
          })
        })

        cy.qpe_menu_open().click();
        cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
        .children('.v-slider__tick').eq(3).click();
        cy.get('.display-ctrl__btn').click();
        cy.close_menu().click().wait(1000)
        cy.screenshot('6-3_5閃電頻率12hour',{overwrite:true}).then(()=>{
          cy.addTestContext({
            title:'6-3_5閃電頻率12hour',
            value:'./screenshots/6_3pub.cy.js/6-3_5閃電頻率12hour.png'
          })
        })

        cy.qpe_menu_open().click();
        cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
        .children('.v-slider__tick').eq(4).click();
        cy.get('.display-ctrl__btn').click();
        cy.close_menu().click().wait(1000)
        cy.screenshot('6-3_6閃電頻率24hour',{overwrite:true}).then(()=>{
          cy.addTestContext({
            title:'6-3_6閃電頻率24hour',
            value:'./screenshots/6_3pub.cy.js/6-3_6閃電頻率24hour.png'
          })
        })
         })
        //---------------------------------------------------------------------------------------

      });

