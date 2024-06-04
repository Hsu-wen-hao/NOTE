  it('6_2地圖>衛星產品', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.addTestContext('測試步驟：')
    cy.addTestContext('1. 點選衛星產品全部項目')
    cy.addTestContext('------------------------------------------------')
    cy.addTestContext('截圖對照：')
      cy.visit('https://61.56.11.201/pub/');
      cy.syswindow_close()
        //衛星產品
        cy.log('parper next test').wait(2000)
        cy.wait(5000).then(()=>{

          cy.delserch()
          cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__toggle').click();
          cy.get('[class="v-treeview theme--light"]').children().eq(2).click();
          cy.get(':nth-child(3) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
          cy.get('.display-ctrl__btn').click();
          cy.close_menu().click().wait(1000)
          cy.screenshot('6-2_1縣市最大雨量24hour',{overwrite:true}).then(()=>{
            cy.addTestContext({
              title:'6-2_1縣市最大雨量24hour',
              value:'./screenshots/6_2pub.cy.js/6-2_1縣市最大雨量24hour.png'
            })
          })

          cy.qpe_menu_open().click();
          cy.get(':nth-child(3) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
          cy.get(':nth-child(3) > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
          cy.get('.display-ctrl__btn').click();
          cy.close_menu().click().wait(1000)
          cy.screenshot('6-2_2縣市最大雨量24hour',{overwrite:true}).then(()=>{
            cy.addTestContext({
              title:'6-2_2縣市最大雨量24hour',
              value:'./screenshots/6_2pub.cy.js/6-2_2縣市最大雨量24hour.png'
            })
          })
        })

        //-----------------------------------------------------------------------------------------
      });

