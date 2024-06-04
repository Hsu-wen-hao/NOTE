it('5_中英文切換', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    /* 
    1. 點擊 lang 頁籤。
    2. 檢查頁籤是否變為 map、obs、語言、ablout。
    3. 點擊 map 頁籤，確認產品選單是否都為英文。
    4. 選取 Composite Reflectivity 產品，確認載入資料的等待視窗是否為英文。
    5. 點擊 OVERLAYS 頁籤，確認選單皆為英文。
    6. 點擊 SETTING 頁籤，確認選單皆為英文。
    7. 勾選 Customized Time Periods 選項。
    8. 點擊 Start Date、Start Time、Time Period 的設定畫面與選項皆為英文。
    9. 點擊 obs 頁籤。
    10. 檢查表格標題、內容是否都是英文。
    11. 切換時間選項確認表格內容是否都為英文。
    12. 點擊語言頁籤，重複以上動作確認所有資訊都是中文。
    */
    cy.addTestContext('測試步驟：')
    cy.addTestContext('1. 點擊 lang 頁籤。')
    cy.addTestContext('2. 檢查頁籤是否變為 map、obs、語言、ablout。')
    cy.addTestContext('3. 點擊 map 頁籤，確認產品選單是否都為英文。')
    cy.addTestContext('4. 選取 Composite Reflectivity 產品，確認載入資料的等待視窗是否為英文。')
    cy.addTestContext('5. 點擊 OVERLAYS 頁籤，確認選單皆為英文。')
    cy.addTestContext('6. 點擊 SETTING 頁籤，確認選單皆為英文。')
    cy.addTestContext('7. 勾選 Customized Time Periods 選項。')
    cy.addTestContext('8. 點擊 Start Date、Start Time、Time Period 的設定畫面與選項皆為英文。')
    cy.addTestContext('9. 點擊 obs 頁籤。')
    cy.addTestContext('10. 檢查表格標題、內容是否都是英文。')
    cy.addTestContext('11. 切換時間選項確認表格內容是否都為英文。')
    cy.addTestContext('12. 點擊語言頁籤，重複以上動作確認所有資訊都是中文。')
    cy.addTestContext('----------------------------------------------------------------------')

    const templist = ["radar", "observation", "satellite", "Lightning", "Typhoon", "Radar-based Nowcast"];
    cy.visit('https://61.56.11.201/pub/')
    cy.syswindow_close()
    //cy.qpe_menu_open().click()
    cy.qpe_lang().click().then(()=>{
            cy.wait(1000)
            cy.get('.language_treeview > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click({
            force: true
            }).wait(5000);
            cy.get('.main-block-options__content > .row > :nth-child(2)').click()
            cy.screenshot('5-4_等待視窗英文',({overwrite:true}))
            cy.get('.msg-container> .text-container > span').invoke('text').should('match', /Map Loading... Please Wait./i);
            cy.get('.menu-btn').invoke('text').should('match', /map/i).and('match', /obs/i).and('match', /about/i);
            for (var i = 0; i < templist.length; i++) {
            cy.get('#map_obs').children().invoke('text').should('match', new RegExp(`${templist[i]}`, 'i')).then(($text)=>{
                //cy.addTestContext($text)
            })
            }
            cy.get('[href="#sub-menu-2"]').click().wait(1000)
            cy.screenshot('5-5_overlays頁簽英文',({overwrite:true}))
            cy.get('[href="#sub-menu-3"]').click().wait(1000)
            cy.screenshot('5-6_sitting頁簽英文',({overwrite:true}))



            cy.qpe_obs().click()
            cy.get('.main-block-options__btn__menu').click();

            cy.get('.time > .v-input > .v-input__control > .v-input__slot').click();
            cy.screenshot('5-11_1切換時間前',({overwrite:true}))
            cy.get('[style="left: 6.69873%; top: 75%;"]').click();
            cy.get(':nth-child(4) > .v-btn__content').click()
            cy.screenshot('5-11_2切換時間後',({overwrite:true}))

            cy.get('.main-block-options__btn__menu').click();
            cy.get('.row > :nth-child(4)').click()
            cy.get('.language_treeview > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
            .click()
            cy.get('.main-block-options__btn__menu').click()
            cy.get('.time > .v-input > .v-input__control > .v-input__slot').click();
            cy.screenshot('5-12_1中文切換時間前')
            cy.get('[style="left: 65.5%; top: 76.8468%;"]').click( {force: true})
            cy.get(':nth-child(4) > .v-btn__content').click()
            cy.screenshot('5-12_1中文切換時間後')
            cy.get('.main-block-options__btn__menu').click();
            cy.get('.row > :nth-child(4)').click()
            cy.get(':nth-child(2) > .menu-btn > .v-icon').click()
            cy.screenshot('5-12_3中文設定')
            cy.get('[href="#sub-menu-2"]').click()
            cy.screenshot('5-12_3中文底圖')
            cy.get('[href="#sub-menu-1"]').click()
            cy.screenshot('5-12_3中文預報和觀測')
        })
        cy.addTestContext('截圖對照：')

    cy.addTestContext({
        title: '5-4_等待視窗英文',
        value: './screenshots/5_pub.cy.js/5-4_等待視窗英文.png'
    })
    cy.addTestContext({
        title: '5-5_overlays頁簽英文',
        value: './screenshots/5_pub.cy.js/5-5_overlays頁簽英文.png'
    })
    cy.addTestContext({
        title: '5-6_sitting頁簽英文',
        value: './screenshots/5_pub.cy.js/5-6_sitting頁簽英文.png'
    })
    cy.addTestContext({
        title: '5-11_1切換時間前',
        value: './screenshots/5_pub.cy.js/5-11_1切換時間前.png'
    })
    cy.addTestContext({
        title: '5-11_2切換時間後',
        value: './screenshots/5_pub.cy.js/5-11_2切換時間後.png'
    })
    cy.addTestContext({
        title: '5-12_1中文切換時間前',
        value: './screenshots/5_pub.cy.js/5-12_1中文切換時間前.png'
    })
    cy.addTestContext({
        title: '5-12_1中文切換時間後',
        value: './screenshots/5_pub.cy.js/5-12_1中文切換時間後.png'
    })
    cy.addTestContext({
        title: '5-12_3中文設定',
        value: './screenshots/5_pub.cy.js/5-12_3中文設定.png'
    })
        cy.addTestContext({
        title: '5-12_3中文底圖',
        value: './screenshots/5_pub.cy.js/5-12_3中文底圖.png'
    })
        cy.addTestContext({
        title: '5-12_3中文預報和觀測',
        value: './screenshots/5_pub.cy.js/5-12_3中文預報和觀測.png'
    })


  });