import { it } from "mocha";
it('10-監控>警示>監控總覽', () => {
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
          return false
        })
         /*
         測試總覽：
        1. 點選"監控"頁籤。
        2. 點選"警示>監控總覽"。
        3.要有表格出現。
        4.點表格第一行的10分鐘雨量數值,要出現時序組體圖。
        */

        cy.addTestContext('測試步驟：')
        cy.addTestContext('1. 點選"監控"頁籤。') 
        cy.addTestContext('2. 點選"警示>監控總覽"。')
        cy.addTestContext('3. 要有表格出現。')
        cy.addTestContext('4. 點表格第一行的10分鐘雨量數值,要出現時序組體圖。')
        cy.addTestContext('-----------------------------------------------------------')
        cy.addTestContext('判斷結果：')

        cy.QPETRA_login()
        cy.wait(5000)

        //cy.qpe_menu_open().click()
        cy.TRA_ouside_menu().eq(3).invoke('text').should('match',/監控/i).then(($text)=>{
            console.log($text)
            cy.TRA_ouside_menu().eq(3).click().then(()=>{
                cy.wait(3000)
                cy.control_funtion_table(1,1).click()
                cy.qpe_menu_close()
                //3.要有表格出現。
                cy.get('#monitor-datatable').children().should('be.visible').then(($text)=>{
                    const elementcontent = $text.is(':visible');
                    cy.addTestContext(`10-3_將會返回true[成功]或alse[失敗])：${elementcontent}`)
                })
                cy.wait(5000)
                cy.get(':nth-child(3) > .monitor-table-page__table-wrapper > #monitor-datatable')
                .invoke('text').then((text)=>{
                    if(text){
                        console.log('element has text ',text);
                        cy.addTestContext(`表格內容： ${text}`)
                    }else{
                        console.log('element has no text');
                    }
                })
            })
        })
        /*
       */
});