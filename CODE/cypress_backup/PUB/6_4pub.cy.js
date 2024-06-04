it('6_4地圖>颱風資訊', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.addTestContext('測試步驟：')
  cy.addTestContext('1. 點選颱風資訊全部項目')
  cy.addTestContext('------------------------------------------------')
  cy.addTestContext('截圖對照：')

  describe('6-4地圖>迴圈颱風資訊測試',()=>{
      cy.visit('https://61.56.11.201/pub/');
      cy.syswindow_close()
    });

        //颱風資訊
        cy.log('parper next test').wait(2000)
        cy.wait(5000);
        cy.delserch()
        cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(4) > .v-treeview-node__root > .v-treeview-node__toggle').click();
        cy.get('[class="v-treeview theme--light"]').children().eq(4).click();
        cy.get(':nth-child(5) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
        cy.get('.display-ctrl__btn').click();
        cy.close_menu().click().wait(1000)
        cy.screenshot('6-4_1颱風路徑資訊',{overwrite:true}).then(()=>{
          cy.addTestContext({
            title:'6-4_1颱風路徑資訊',
            value:'./screenshots/6_4pub.cy.js/6-4_1颱風路徑資訊.png'
          })
        })

        //---------------------------------------------------------------------------------------

      });

