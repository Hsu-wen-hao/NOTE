
it('11-監控>警示>重點監控路段', () => {
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
          return false
        })
        /*
        測試總覽：
        1. 點選"監控"頁籤。
        2. 點選"警示>重點監控路段"。
        3. 要有表格出現。
        4. 點表格第一行的10分鐘雨量數值,要出現時序組體圖。
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
   
            cy.TRA_ouside_menu().eq(3).invoke('text').should('match',/監控/i).then(($text)=>{
                cy.TRA_ouside_menu().eq(3).click().then(()=>{
                                cy.wait(3000)
                                cy.control_funtion_table(1,2).click();
                                cy.qpe_menu_close();
                                cy.wait(1500);
                                //3.要有表格出現。
                                cy.get('#monitor-datatable').children().should('be.visible').then(($text)=>{
                                    const elementcontent = $text.is(':visible');
                                    cy.addTestContext(`11-3_將會返回true[成功]或false[失敗]：${elementcontent}`)
                                })
                                cy.wait(1000);
                                //4.點表格第一行的10分鐘雨量數值,要出現時序組體圖。
                cy.addTestContext('-----------------------------------------------------------')
                cy.addTestContext('截圖對照：')
                                cy.choice_table(1,9).then(()=>{ 
                                cy.wait(3000);
                                cy.screenshot("11-4_時序組體圖",{overwrite:true})
                                cy.addTestContext({
                                    title: '11-4_時序組體圖',
                                    value: './screenshots/TRA.cy.js/11-4_時序組體圖.png'
                                    }
                                );
                            })
                        })

                    })
        
});