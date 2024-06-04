describe('2.預報與觀測>地面觀測>自動雨量站',()=>{ 
  const test = ['hello world','test']
it(`${test}`, () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    /*
    先單獨繪製自動雨量站測試打點與圖標是否正常顯示
    1. 點擊地圖工具”設定已選圖資”，打開設定已選圖資區塊。
    2. 點擊”取消全選”先清空圖資。
    3. 選取”地面觀測>自動雨量站”，點擊[顯示圖資]。
    4. 檢視地圖上是否有打點，左上角圖標是否有顯示。
    5. 檢視已選圖資區塊的資料狀態是否與地圖呈現符合。
    6. 選取”雷達觀測>整合回波”，點擊[顯示圖資]。
    7. 檢視地圖上是否有打點，左上角圖標是否有顯示。
    8. 檢視已選圖資區塊的資料狀態是否與地圖呈現符合。

    以網頁預設狀態測試打點與圖標是否正常顯示
    1. 重新整理網頁。
    2. 點擊地圖工具”設定已選圖資”，打開設定已選圖資區塊。
    3. 選取”地面觀測>自動雨量站”，點擊[顯示圖資]。
    4. 檢視地圖上是否有打點，左上角圖標是否有顯示。
    5. 選取”雷達觀測>整合回波”，點擊[顯示圖資]。
    6. 檢視地圖上是否有打點，左上角圖標是否有顯示。
    7. 檢視已選圖資區塊的資料狀態是否與地圖呈現符合。
    8. 檢視已選圖資區塊的資料狀態是否與地圖呈現符合。

    */
    cy.addTestContext('測試步驟：')
    cy.addTestContext('先單獨繪製自動雨量站測試打點與圖標是否正常顯示')
    cy.addTestContext('1. 點擊地圖工具”設定已選圖資”，打開設定已選圖資區塊。')
    cy.addTestContext('2. 點擊”取消全選”先清空圖資。')
    cy.addTestContext('3. 選取”地面觀測>自動雨量站”，點擊[顯示圖資]。')
    cy.addTestContext('4. 檢視地圖上是否有打點，左上角圖標是否有顯示。')
    cy.addTestContext('5. 檢視已選圖資區塊的資料狀態是否與地圖呈現符合。')
    cy.addTestContext('6. 選取”雷達觀測>整合回波”，點擊[顯示圖資]。')
    cy.addTestContext('7. 檢視地圖上是否有打點，左上角圖標是否有顯示。')
    cy.addTestContext('8. 檢視已選圖資區塊的資料狀態是否與地圖呈現符合。')
    cy.addTestContext('9. 重新整理網頁。')
    cy.addTestContext('10. 點擊地圖工具”設定已選圖資”，打開設定已選圖資區塊。')
    cy.addTestContext('11. 選取”地面觀測>自動雨量站”，點擊[顯示圖資]。')
    cy.addTestContext('12. 檢視地圖上是否有打點，左上角圖標是否有顯示。')
    cy.addTestContext('13. 選取”雷達觀測>整合回波”，點擊[顯示圖資]。')
    cy.addTestContext('14. 檢視地圖上是否有打點，左上角圖標是否有顯示。')
    cy.addTestContext('15. 檢視已選圖資區塊的資料狀態是否與地圖呈現符合。')
    cy.addTestContext('--------------------------------------------------------------')
    cy.addTestContext('判斷結果：')

    cy.visit('https://61.56.11.201/pub/')

    cy.syswindow_close()
    //cy.qpe_menu_open().click()
    cy.map_radar()
    cy.TRA_map_inside_children().eq(0).click();
    cy.map_radar()
    //cy.delserch().click()
    cy.map_observation()
    cy.TRA_map_inside_children().eq(2).click();
    cy.get('.display-ctrl__btn').click();

    cy.wait(5000)
    //4. 檢視地圖上是否有打點，左上角圖標是否有顯示。
    cy.get('#gauge_message>.card>.card-content').children().should('have.text', '●●●●●').then(($text)=>{
      const elementcontent = $text.is(':visible');
      cy.addTestContext(`2-4_將會返回true[成功]或false[失敗]：${elementcontent}`)
    })
    
    cy.get('.display-ctrl__btn').click().then(()=>{
      cy.get('.main-block-options__btn__menu').click();
      cy.get('#product_btn').click()
      cy.screenshot('2-4_自動雨量',{overwrite:true,capture:'fullPage'})
      let found = false;
      cy.get('.draggable-item span').each(($span)=>{
        const text = $span.text();
        if(text.includes('自動雨量站')){
          found = true;
        }
        console.log(text)
      }).then(()=>{
        console.log(found)
        cy.addTestContext(`2-5_將會返回true[成功]或false[失敗]：${found}`)
      })
    
    cy.get('.main-block-options__btn__menu').click()
        cy.TRA_map_inside_children().eq(2).click();
        cy.map_observation()
        cy.map_radar()
        cy.TRA_map_inside_children().eq(0).click();
        cy.get('.display-ctrl__btn').click();
        cy.get('.main-block-options__btn__menu').click();
        //7. 檢視地圖上是否有打點，左上角圖標是否有顯示。
        cy.get('#colorbar-id_15').should('be.visible').children().and('have.class', 'colorbar-content').then(($text)=>{
          const elementcontent = $text.is(':visible');
          cy.addTestContext(`2-7_將會返回true[成功]或false[失敗]：${elementcontent}`)
       })
        cy.screenshot('2-7_整合回波',{overwrite:true,capture:'fullPage'})
      })
      let found = false;
      cy.get('.draggable-item span').each(($span)=>{
        const text = $span.text();
        if(text.includes('整合回波')){
          found = true;
        }
        console.log(text)
      }).then(()=>{
        console.log(found)
        cy.addTestContext(`2-8_將會返回true[成功]或false[失敗]：${found}`)
      })
    //1. 重新整理網頁。
    cy.reload()
    //cy.qpe_menu_open().click()
    //cy.get('#product_menu > .menu-ctrl > .icon-container > :nth-child(2) > [aria-haspopup="true"] > .v-icon').click()
    cy.wait(5000)
    cy.delserch()
    cy.map_observation()
    cy.TRA_map_inside_children().eq(2).click();
    cy.get('.display-ctrl__btn').click().then(()=>{
    cy.get('.main-block-options__btn__menu').click();
        cy.wait(5000)
        //4. 檢視地圖上是否有打點，左上角圖標是否有顯示。
        cy.get('#gauge_message>.card>.card-content').children().should('have.text', '●●●●●').then(($text)=>{
          const elementcontent = $text.is(':visible');
          cy.addTestContext(`2-11_將會返回true[成功]或false[失敗]：${elementcontent}`)
       })
       //cy.get('.main-block-options__btn__menu').click();
       cy.get('#product_btn').click()
       let found = false;
       cy.get('.draggable-item span').each(($span)=>{
         const text = $span.text();
         if(text.includes('自動雨量站')){
           found = true;
          }
          console.log(text)
        }).then(()=>{
          console.log(found)
          cy.addTestContext(`2-12_將會返回true[成功]或false[失敗]：${found}`)
        })
        cy.screenshot('2-11_自動雨量',{overwrite:true})
        cy.get('.main-block-options__btn__menu').click();
        cy.TRA_map_inside_children().eq(2).click();
        cy.map_observation()
        cy.map_radar()
        cy.TRA_map_inside_children().eq(0).click();
        cy.get('.display-ctrl__btn').click();
        cy.get('.main-block-options__btn__menu').click();
        //6. 檢視地圖上是否有打點，左上角圖標是否有顯示。
        cy.get('#colorbar-id_15').should('be.visible').children().and('have.class', 'colorbar-content').then(($text)=>{
          const elementcontent = $text.is(':visible');
          cy.addTestContext(`2-13_將會返回true[成功]或false[失敗]：${elementcontent}`)
       })
        cy.screenshot('2-13_整合回波',{overwrite:true})

      })
      let found1 = false;
      cy.get('.draggable-item span').each(($span)=>{
        const text = $span.text();
        if(text.includes('整合回波')){
          found1 = true;
        }
        console.log(text)
      }).then(()=>{
        console.log(found1)
        cy.addTestContext(`2-14_將會返回true[成功]或false[失敗]：${found1}`)
      })
      cy.addTestContext('--------------------------------------------------------------')
      cy.addTestContext('截圖對照：')

      cy.addTestContext({
        title: '2-4_自動雨量',
        value: './screenshots/2_0pub.cy.js/2-4_自動雨量.png'
      });
      cy.addTestContext({
        title: '2-7_整合回波',
        value: './screenshots/2_0pub.cy.js/2-7_整合回波.png'
      })
      cy.addTestContext({
        title: '2-11_自動雨量',
        value: './screenshots/2_0pub.cy.js/2-11_自動雨量.png'
      })
      cy.addTestContext({
        title: '2-13_整合回波',
        value: './screenshots/2_0pub.cy.js/2-13_整合回波.png'
      })
    
      
  });
})