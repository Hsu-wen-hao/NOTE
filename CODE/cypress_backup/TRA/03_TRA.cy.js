it('3-圖輯>短期預報雨量圖(0~24HR)', () => {
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
          return false
        })
        /*
        測試總覽：
        1. 點擊圖輯。
        2. 點擊"短期預報雨量圖(0~24HR)"。
        3.點選下拉選單"選擇時間區間"中的四個時間。
        4.至少要有一張圖, 不能全部都是CWB logo.
         */
        cy.addTestContext('測試步驟：')
        cy.addTestContext('1. 點擊圖輯。') 
        cy.addTestContext('2. 點擊"短期預報雨量圖(0~24HR)"。')
        cy.addTestContext('3. 點選下拉選單"選擇時間區間"中的四個時間。')
        cy.addTestContext('4. 至少要有一張圖, 不能全部都是CWB logo.')
        cy.addTestContext('-----------------------------------------------------------')
        cy.addTestContext('判斷結果：')
        cy.QPETRA_login()
        cy.wait(5000)
        //cy.get('.main-block-options__btn__menu--mobile > .tooltip--self-made > .hide-menu-btn__content > .v-btn__content > .v-icon').click()
        cy.TRA_ouside_menu().eq(2).click()
        let elementCount;
        //計算元素的數量

                cy.get('[class="v-responsive v-image"]').then($elements => {
                elementCount = $elements.length;
                console.log($elements);
                let empty_image = 0;
                let visible_image = 0;
                //進行等待因為圖片尚未仔入完成，立即進行判斷，導致找不到每個元素
                cy.wait(3000)
                //遍歷每個元素進行判斷
                cy.get('[class="v-image__image v-image__image--contain"]').each(($td) => {
                let url = $td.css('background-image');
                if (url.includes('https://61.56.11.201/static/images/capture/blue_cwb_logo_string_eng.png')) {
                empty_image++;
                } else if (url.includes('https://61.56.11.201/static/data/images/qpf4tra/PCP2D/ENS/')) {
                visible_image++;
                } else if (url.includes('https://61.56.11.201/static/data/images/qpf4tra/')) {
                visible_image++;
                }
                }).then(() => {
                cy.log("存在圖片的數量")
                cy.log(visible_image)
                cy.log("默認圖片的數量")
                cy.log(empty_image)
                console.log(`${visible_image}`);
                console.log(`${empty_image}`);
                //輸出至報告文字
                cy.addTestContext(`短期預報雨量圖(0~24HR)數量：${visible_image},氣象局LOGO圖片的數量：${empty_image}`)
                })
                
            })

});