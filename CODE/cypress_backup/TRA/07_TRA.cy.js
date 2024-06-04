it('7-圖輯>工務段雨量>鐵路線', () => {
        Cypress.on('uncaught:exception', (err, runnable, promise) => {
            return false
            })
        /*
        測試總覽：
        1. 點選"圖輯"頁籤。
        2. 點擊"工務段雨量>鐵路線"。
        3. 點選下拉選單"選擇路線"。
            a. 點選"縱貫線(北段)"。
            b. 點選"宜蘭線"。
            c. 點選"六家線"。
            d. 點選"臺中線"。
            e. 點選"阿里山祝山線"。
            f. 點選"阿里山眠月線"。
            g. 點選"阿里山本線"。
            h. 點選"阿里山水山線"。
            i. 點選"縱貫線(南段)"。
            j. 點選"北迴線"。
            k. 點選"南迴線(東段)"。
            l. 點選"縱貫線(海線)"。
            m. 點選"深澳線"。
            n. 點選"平溪線"。
            o. 點選"內灣線"。
            p. 點選"沙崙線"。
            q. 點選"屏東線"。
            r. 點選"成追線"。
            s. 點選"臺東線"。
            t. 點選"集集線"。
            u. 點選"南迴線"。
        4. 繪圖的javascript要可執行. 不能空轉.
         */
        cy.addTestContext('測試步驟：')
        cy.addTestContext('1. 點選"圖輯"頁籤。') 
        cy.addTestContext('2. 點擊"工務段雨量>鐵路線"。')
        cy.addTestContext('3. 點選下拉選單"選擇路線"。')
        cy.addTestContext('a. 點選"縱貫線(北段)"。')
        cy.addTestContext('b. 點選"宜蘭線"。')
        cy.addTestContext('c. 點選"六家線"。')
        cy.addTestContext('d. 點選"臺中線"。')
        cy.addTestContext('e. 點選"阿里山祝山線"。')
        cy.addTestContext('f. 點選"阿里山眠月線"。')
        cy.addTestContext('g. 點選"阿里山本線"。')
        cy.addTestContext('h. 點選"阿里山水山線"。')
        cy.addTestContext('i. 點選"縱貫線(南段)"。')
        cy.addTestContext('j. 點選"北迴線"。')
        cy.addTestContext('k. 點選"南迴線(東段)"。')
        cy.addTestContext('l. 點選"縱貫線(海線)"。')
        cy.addTestContext('m. 點選"深澳線"。')
        cy.addTestContext('n. 點選"平溪線"。')
        cy.addTestContext('o. 點選"內灣線"。')
        cy.addTestContext('p. 點選"沙崙線"。')
        cy.addTestContext('q. 點選"屏東線"。')
        cy.addTestContext('r. 點選"成追線"。')
        cy.addTestContext('s. 點選"臺東線"。')
        cy.addTestContext('t. 點選"集集線"。')
        cy.addTestContext('u. 點選"南迴線"。')
        cy.addTestContext('4. 繪圖的javascript要可執行. 不能空轉.')
        cy.addTestContext('-----------------------------------------------------------')
        cy.addTestContext('判斷結果：')

            cy.intercept('POST','https://61.56.11.201/TRA/rainmonitor/get_tag_sectiondisplay_by_tag/').as('getTag')
            cy.QPETRA_login()
            cy.wait(5000)
            //cy.get('.main-block-options__btn__menu--mobile > .tooltip--self-made > .hide-menu-btn__content > .v-btn__content > .v-icon').click()
            cy.TRA_ouside_menu().eq(2).click()
            //cy.get('.main-block-options__content > .row > :nth-child(3)').click()
            cy.get(':nth-child(4) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
            .click()
            cy.get('.multiple-chart__control > .v-select > .v-input__control > .v-input__slot').click()
            //遍歷全部的下拉式選單
            cy.get('[class="v-list v-sheet v-sheet--tile theme--light"]').children().invoke('text').then(($el)=>{
                const elementlenght = $el.length;
                console.log(elementlenght)
                cy.log($el);

                //檢查API是否正確回應200
                cy.wait('@getTag').its('response.statusCode').should('eq',200).then(($status)=>{
                    cy.addTestContext(`資料API狀態：${$status}`)
                    console.log($status)
                })
                cy.qpe_menu_close();

                for (let i =0 ; i < 20;i++){
                    //喘口氣
                    const number = i;
                    cy.wait(1000)
                    cy.get('[class="v-list v-sheet v-sheet--tile theme--light"]').children().eq(i).click().then(()=>{ 
                        cy.get('[class="v-list v-sheet v-sheet--tile theme--light"]').children().eq(i).invoke('text').then(($text)=>{
                            //cy.log($text)
                        
                            //console.log(`${number}：${$text}`);
                            cy.addTestContext(`${$text}`)
                            console.log(`${$text}`)

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
                                                        console.log("Elehight:",elehight)
                                                        //下列是打印過程，確認使否有get到element
                                                        //console.log(elementCount);
                                                        //console.log(elewight);
                                                        //console.log(elehight);
                                                        if (elehight === "0"){
                                                            nothing++;
                                                        }else if(elehight > "0"){
                                                            count++;
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
        

        