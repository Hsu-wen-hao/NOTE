import { it } from "mocha";

it('13-監控>警示>土石流警示溪流', () => {
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
          return false
        })
        /*
        測試總覽：
        1. 點選"監控"頁籤。
        2. 點選"警示>土石流警示溪流"。
        3. 要有表格出現。
        */
        cy.addTestContext('測試步驟：')
        cy.addTestContext('1. 點選"監控"頁籤。') 
        cy.addTestContext('2. 點選"警示>土石流警示溪流"。')
        cy.addTestContext('3. 要有表格出現。')
        cy.addTestContext('-----------------------------------------------------------')
        cy.addTestContext('判斷結果：')
        
        cy.QPETRA_login();
        cy.wait(5000)
        //cy.qpe_menu_open().click();
        cy.TRA_ouside_menu().eq(3).click();
        cy.control_funtion_table(1,3).click();
        cy.qpe_menu_close();
        cy.wait(1000)
        //3.要有表格出現。將會返回True或False
        cy.get('#monitor-datatable').children().should('be.visible').then(($text)=>{
            const elementcontent = $text.is(':visible');
            cy.addTestContext(`13-3_將會返回true[成功]或false[失敗]：${elementcontent}`)
        })


       
});