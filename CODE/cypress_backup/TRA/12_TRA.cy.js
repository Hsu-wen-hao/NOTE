
it('12-監控>警示>重點監控橋梁', () => {
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
          return false
        })
        /*
        測試總覽：
        1. 點選"監控"頁籤。
        2. 點選"警示>重點監控橋梁"。
        3.要有表格出現。
        4.點表格第一行的10分鐘雨量數值,要出現時序組體圖。
        */
        cy.addTestContext('測試步驟：')
        cy.addTestContext('1. 點選"監控"頁籤。') 
        cy.addTestContext('2. 點選"警示>重點監控路段"。')
        cy.addTestContext('3. 要有表格出現。')
        cy.addTestContext('4. 點表格第一行的10分鐘雨量數值,要出現時序組體圖。')
        cy.addTestContext('-----------------------------------------------------------')
        cy.addTestContext('判斷結果：')
        cy.QPETRA_login();
        cy.wait(5000)

        //cy.get('.main-block-options__btn__menu--mobile > .tooltip--self-made > .hide-menu-btn__content').click();
        cy.TRA_ouside_menu().eq(3).invoke('text').should('match',/監控/i).then(($text)=>{
                cy.TRA_ouside_menu().eq(3).click();
                cy.control_funtion_table(1,3).click();
                cy.qpe_menu_close();
                cy.wait(1000)
                //3.要有表格出現。
                cy.get('#monitor-datatable').children().should('be.visible').then(($text)=>{
                    const elementcontent = $text.is(':visible');
                    cy.addTestContext(`12-3_將會返回true[成功]或false[失敗]：${elementcontent}`)
                })
                cy.addTestContext('-----------------------------------------------------------')
                cy.addTestContext('截圖對照：')
                //4.點表格第一行的10分鐘雨量數值,要出現時序組體圖。
                cy.choice_table(1,9).then(()=>{
                    cy.wait(1500);
                cy.screenshot("12-4_時序組體圖",{overwrite:true})
                cy.addTestContext({
                    title: '12-4_時序組體圖',
                    value: './screenshots/TRA.cy.js/12-4_時序組體圖.png'
                    }
                );
            })
        })
       
});