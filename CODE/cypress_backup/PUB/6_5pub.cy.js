it('6_5地圖>雷達定量降雨預報', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.addTestContext('測試步驟：')
  cy.addTestContext('1. 點選雷達定量降雨預報全部項目')
  cy.addTestContext('------------------------------------------------')
  cy.addTestContext('截圖對照：')

  describe('6-5地圖>迴圈雷達定量降雨預報測試',()=>{
      cy.visit('https://61.56.11.201/pub/');
      cy.syswindow_close()
    });
        //雷達定量降雨
        cy.log('parper next test').wait(2000)
        cy.wait(5000);
        cy.delserch()
        cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(5) > .v-treeview-node__root > .v-treeview-node__toggle').click();
        cy.get('[class="v-treeview theme--light"]').children().eq(5).click();
        cy.get(':nth-child(6) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.get('.display-ctrl__btn').click();
        cy.close_menu().click().wait(1000)
        cy.screenshot('6-5_1未來1小時雨量預報',{overwrite:true}).then(()=>{
          cy.addTestContext({
            title:'6-5_1未來1小時雨量預報',
            value:'./screenshots/6_5pub.cy.js/6-5_1未來1小時雨量預報.png'
          })
        })

        cy.qpe_menu_open().click().wait(1000);
        cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(5) > .v-treeview-node__root > .v-treeview-node__toggle').click();
        cy.get('[class="v-treeview theme--light"]').children().eq(5).click();
        cy.get(':nth-child(6) > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.get('.display-ctrl__btn').click();
        cy.close_menu().click().wait(1000)
        cy.screenshot('6-5_2未來1小時回波預報',{overwrite:true}).then(()=>{
          cy.addTestContext({
            title:'6-5_2未來1小時回波預報',
            value:'./screenshots/6_5pub.cy.js/6-5_2未來1小時回波預報.png'
          })
        })

      });

