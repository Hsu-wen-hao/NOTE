it('9-圖輯>工務段雨量>分駐所', () => {
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        return false
        })
    /*
    測試總覽：
    "1. 點選""圖輯""頁籤。
        2. 點擊""工務段雨量>分駐所""。
        3. 點選下拉選單""選擇分駐所""。
            a. 點選""八堵分駐所""。
            b. 點選""瑞芳分駐所""。
            c. 點選""新竹分駐所""。
            d. 點選""彰化分駐所""。
            e. 點選""阿里山監工區""。
            f. 點選""竹崎監工區""。
            g. 點選""嘉義分駐所""。
            h. 點選""臺南分駐所""。
            i. 點選""蘇新分駐所""。
            j. 點選""臺東分駐所""。
            k. 點選""新營分駐所""。
            l. 點選""桃園分駐所""。
            m. 點選""大甲分駐所""。
            n. 點選""苗栗分駐所""。
            o. 點選""臺南工務段分駐所""。
            p. 點選""枋寮工務分駐所""。
            q. 點選""田中分駐所""。
            r. 點選""奮起湖監工區""。
            s. 點選""鳳林分駐所""。
            t. 點選""池上分駐所""。
            u. 點選""花蓮分駐所""。
            v. 點選""高雄工務分駐所""。
            w. 點選""高雄分駐所""。
            x. 點選""枋寮分駐所""。
        4. 繪圖的javascript要可執行. 不能空轉."
     */
        cy.addTestContext('測試步驟：')
        cy.addTestContext('1. 點選""圖輯""頁籤。') 
        cy.addTestContext('2. 點擊""工務段雨量>分駐所""。')
        cy.addTestContext('3. 點選下拉選單""選擇分駐所""。')
        cy.addTestContext('a. 點選""八堵分駐所""。')
        cy.addTestContext('b. 點選""瑞芳分駐所""。')
        cy.addTestContext('c. 點選""新竹分駐所""。')
        cy.addTestContext('e. 點選""阿里山監工區""。')
        cy.addTestContext('e. 點選""嘉義工務段""。')
        cy.addTestContext('f. 點選""竹崎監工區""。')
        cy.addTestContext('g. 點選""嘉義分駐所""。')
        cy.addTestContext('h. 點選""臺南分駐所""。')
        cy.addTestContext('i. 點選""蘇新分駐所""。')
        cy.addTestContext('j. 點選""臺東分駐所""。')
        cy.addTestContext('k. 點選""新營分駐所""。')
        cy.addTestContext('l. 點選""桃園分駐所""。')
        cy.addTestContext('m. 點選""大甲分駐所""。')
        cy.addTestContext('n. 點選""苗栗分駐所""。')
        cy.addTestContext('o. 點選""臺南工務段分駐所""。')
        cy.addTestContext('p. 點選""枋寮工務分駐所""。')
        cy.addTestContext('q. 點選""田中分駐所""。')
        cy.addTestContext('r. 點選""奮起湖監工區""。')
        cy.addTestContext('s. 點選""鳳林分駐所""。')
        cy.addTestContext('t. 點選""池上分駐所""。')
        cy.addTestContext('u. 點選""花蓮分駐所""。')
        cy.addTestContext('v. 點選""高雄工務分駐所""。')
        cy.addTestContext('w. 點選""高雄分駐所""。')
        cy.addTestContext('x. 點選""枋寮分駐所""。')
        cy.addTestContext('4. 繪圖的javascript要可執行. 不能空轉."')
        cy.addTestContext('-----------------------------------------------------------')
        cy.addTestContext('判斷結果：')



        cy.intercept('POST','https://61.56.11.201/TRA/rainmonitor/get_tag_sectiondisplay_by_tag/').as('getTag')
        cy.QPETRA_login().then(()=>{
            //cy.get('.main-block-options__btn__menu--mobile > .tooltip--self-made > .hide-menu-btn__content > .v-btn__content > .v-icon').click()
        }).then(()=>{
        cy.wait(5000)
        cy.get('.main-block-options__content > .row > :nth-child(3)').click()
        cy.get(':nth-child(4) > .v-treeview-node__children > :nth-child(3) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
        .click()
        }).then(()=>{
                //下拉選單
                cy.get('.multiple-chart__control > .v-select > .v-input__control > .v-input__slot').click()
                //遍歷全部的下拉式選單
                cy.get('[class="v-list v-sheet v-sheet--tile theme--light"]').children().then(($el)=>{
                    const elementlenght = $el.length;
                    console.log(elementlenght)
                    //檢查API是否正確回應200
                    cy.wait('@getTag').its('response.statusCode').should('eq',200).then(($status)=>{
                        cy.addTestContext(`資料API狀態：${$status}`)
                        console.log($status)
                    })
                    cy.qpe_menu_close();
                    for (let i =0 ; i<24;i++){
                        const number = i;
                        //喘口氣
                        cy.wait(1000)
                        cy.get('[class="v-list v-sheet v-sheet--tile theme--light"]').children().eq(i).click().then(()=>{ 
                            cy.get('[class="v-list v-sheet v-sheet--tile theme--light"]').children().eq(i).invoke('text').then(($text)=>{   
                                //cy.log($text)
                            
                                //console.log(`${number}：${$text}`);
                                cy.addTestContext(`${$text}`)
        
                                            //檢查圖輯中的表單
                                            const templist = ['#ten_mins','#one_hour','#three_hours','#six_hours','#twelve_hours','#one_day'];
                                                //遍歷所有表格內元素
                                                for(var i=0 ; i < templist.length;i++){
                                                    let count = 0;
                                                    let nothing = 0;
                                                    let havetext = templist[i];

                                                    cy.get(`${templist[i]}`)
                                                    .find('rect[fill="steelblue"]').each(($el)=>{
                                                            let elementCount;
                                                            let elewight = $el.attr('width');
                                                            let elehight = $el.attr('height');
                                                            elementCount = $el.length;
                                                            //下列是打印過程，確認使否有get到element
                                                            console.log(elementCount);
                                                            console.log(elewight);
                                                            console.log(elehight);
                                                            if (elehight === '0'){
                                                                nothing++;
                                                            }else{
                                                                count++;

                                                            }
                                                        }).then(()=>{
                                                            console.log(`${havetext}有畫圖數量${count}`);
                                                            console.log(`${havetext}無畫圖數量${nothing}`);
                                                            cy.addTestContext(`${havetext}有畫圖數量：${count}/無畫圖數量${nothing}`)
                                                        })
                                                }
                                            })

                                    })
                        cy.get('.multiple-chart__control > .v-select > .v-input__control > .v-input__slot').click()
                    }
                })
            })
})
    

    