describe('QPE_台鐵板測試',()=>{                      
it('1-個案查詢功能>地圖>設定', () => {
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
          return false
        })
        cy.addTestContext('測試步驟：')
        cy.addTestContext('1. 點擊「設定」。') 
        cy.addTestContext('2. 勾選「個案查詢」。')
        cy.addTestContext('3. 選取2022年的「2022梅花颱風」')
        cy.addTestContext('4. 確認時間軸的起訖是否與個案的時間符合。')
        cy.addTestContext('5. 點擊「預報與觀測」，勾選「颱風路徑資訊」，點擊[顯示圖資]，確認颱風是否顯示在地圖上，並截圖。')
        cy.addTestContext('6. 點擊「設定」。 ')
        cy.addTestContext('7. 點擊「開啟選取個案介面」，點擊 sn 為 174 (2022軒嵐諾) Actions 欄位的 icon。 ')
        cy.addTestContext('8. 確認個案查詢視窗有關掉，且設定>個案查詢的個案有切換到 2022軒嵐諾 ')
        cy.addTestContext('9. 確認時間軸的起訖是否與個案的時間符合。 ')
        cy.addTestContext('10. 確認颱風是否顯示在地圖上，並截圖。')
        cy.addTestContext('-----------------------------------------------------------')
        cy.addTestContext('判斷結果：')

        cy.recordVideo()

        cy.QPETRA_login()
        //cy.qpe_menu_open().click()
        cy.wait(5000)
        cy.TRA_inside_menu().should('be.visible').then(()=>{
          
          cy.TRA_inside_menu().eq(6).click()
          cy.TRA_map_inside_children().eq(0).click()
          cy.TRA_top_menu().eq(3).click()
          cy.setting_menu_inside(3)
          cy.setting_menu_inside_event().click()
          //7. 點擊「開啟選取個案介面」，點擊 sn 為 174 (2022軒嵐諾) Actions 欄位的 icon。
          cy.setting_menu_inside_choice_years_and_event('2022軒嵐諾颱風','369').click()
          cy.get('.display-ctrl__btn > .v-btn__content').click()
          // 9. 確認時間軸的起訖是否與個案的時間符合。
          cy.get('.text-container > span')
          .invoke('text').should('match', /2022-09-04/).and('match', /20:10/).then((text)=>{
            cy.addTestContext(`2022軒嵐諾颱風:${text}`);
          })
          // 10. 確認颱風是否顯示在地圖上，並截圖。
          cy.wait(2000)
          cy.qpe_menu_close()
          cy.screenshot('1-10_颱風',{overwrite:true})
          cy.addTestContext('-----------------------------------------------------------')
          cy.addTestContext('截圖對照：')
          cy.addTestContext({
            title:`1-10_颱風`,
            value:'./screenshots/TRA.cy.js/1-10_颱風.png',
          })
        })

        cy.stopVideo()
  
        cy.addTestContext('QPE_TRA尚未存在:3. 選取2022年的「2022梅花颱風」。不存在狀態已通知了，暫時跳過該步驟測試')
        cy.addTestContext('-----------------------------------------------------------')
        cy.addTestContext('失敗截圖()')
        cy.addTestContext({
          title:'',
          value:'./screenshots/TRA.cy.js/1-10_颱風(failed).png',
        })
      

});



it('2-測試自動雨量站自動更新時，是否重新繪製', () => {
  Cypress.on('uncaught:exception', (err, runnable, promise) => {
        return false
      })
      /*
      測試總覽：
      1. 點擊地圖工具”設定已選圖資”，打開設定已選圖資區塊。
      2. 選取”地面觀測>自動雨量站”，點擊[顯示圖資]。
      3. 檢視地圖上是否有打點，左上角圖標是否有顯示。
      4. 閒置一段時間，觀察自動更新時自動雨量站是否正常繪製。
      */
      cy.addTestContext('測試步驟：')
      cy.addTestContext('1. 點擊地圖工具”設定已選圖資”，打開設定已選圖資區塊。') 
      cy.addTestContext('2. 選取”地面觀測>自動雨量站”，點擊[顯示圖資]。')
      cy.addTestContext('3. 檢視地圖上是否有打點，左上角圖標是否有顯示。')
      cy.addTestContext('4. 閒置一段時間，觀察自動更新時自動雨量站是否正常繪製。')
      cy.addTestContext('-----------------------------------------------------------')
      cy.addTestContext('判斷結果：')


      
     cy.QPETRA_login()
     //cy.qpe_menu_open().click()
     //喘口氣
     cy.wait(5000)
     cy.delserch()
     cy.TRA_inside_menu().eq(3).click()
     cy.TRA_map_inside_children().eq(2).click()
     cy.dispaly_image()
     cy.qpe_menu_close()
     cy.screenshot('2-4_閒置前',{overwrite:true})
     cy.addTestContext('閒置測試(每分鐘打印檢查結果)：');
     const TA = cy.get('.text-container > span');
      for (let i = 1; i <= 11; i++) {
        // Wait for 1 minute
        cy.wait(60000);
        // Get the timer text and verify that it has changed
        cy.get('.text-container > span').invoke('text').should('not.eq', `${i}:00`).then((text)=>{
            cy.addTestContext(`${text}`);
        })
      }
      cy.addTestContext('-----------------------------------------------------------')
      cy.addTestContext('截圖對照：')
      cy.screenshot('2-4_閒置後',{overwrite:true})
      cy.addTestContext({
        title:'2-4_閒置前',
        value:'./screenshots/TRA.cy.js/2-4_閒置前.png',
      })
      cy.addTestContext({
        title:'2-4_閒置後',
        value:'./screenshots/TRA.cy.js/2-4_閒置後.png',
      })

     
});
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
it('4-圖輯>24小時與72小時累積雨量圖', () => {
  Cypress.on('uncaught:exception', (err, runnable, promise) => {
        return false
      })
      /*
      測試總覽：
      1. 點選"圖輯"頁籤。
      2. 點選"24小時與72小時累積雨量圖"。
      3. 點選下拉選單"選擇時間區間"中的四個時間。
      4.至少要有一張圖, 不能全部都是CWB logo.
       */
      cy.addTestContext('測試步驟：')
      cy.addTestContext('1. 點擊圖輯。') 
      cy.addTestContext('2. 點選"24小時與72小時累積雨量圖"。')
      cy.addTestContext('3. 點選下拉選單"選擇時間區間"中的四個時間。')
      cy.addTestContext('4. 至少要有一張圖, 不能全部都是CWB logo.')
      cy.addTestContext('-----------------------------------------------------------')
      cy.addTestContext('判斷結果：')
      cy.QPETRA_login()
      cy.wait(5000)

      //cy.get('.main-block-options__btn__menu--mobile > .tooltip--self-made > .hide-menu-btn__content > .v-btn__content > .v-icon').click()
      cy.TRA_ouside_menu().eq(2).click()
      cy.get(':nth-child(2) > .v-treeview-node__children > .v-treeview-node > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
      .click()
      let elementCount;
      cy.get('[class="v-responsive v-image"]').then($elements => {
      elementCount = $elements.length;
      console.log($elements);
      let empty_image = 0;
      let visible_image = 0;
      cy.wait(3000)//如果沒有進行等待，推測是因為圖片尚未仔入完成，立即進行判斷，導致找不到每個元素
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
      cy.addTestContext(`24小時與72小時累積雨量圖數量：${visible_image},氣象局LOGO圖片的數量：${empty_image}`)
      })
      })
});
it('5-圖輯>24小時鐵路沿線累積雨量圖', () => {
  Cypress.on('uncaught:exception', (err, runnable, promise) => {
        return false
      })
      /*
      測試總覽：
      1. 點選"圖輯"頁籤。
      2. 點擊"24小時鐵路沿線累積雨量圖"。
      3. 點選下拉選單"選擇時間區間"中的四個時間。
      4. 颱風期間才會有圖, 非颱風期間為CWB logo.      
      */
      cy.addTestContext('測試步驟：')
      cy.addTestContext('1. 點擊圖輯。') 
      cy.addTestContext('2. 點擊"24小時鐵路沿線累積雨量圖"。')
      cy.addTestContext('3. 點選下拉選單"選擇時間區間"中的四個時間。')
      cy.addTestContext('4. 颱風期間才會有圖, 非颱風期間為CWB logo.  ')
      cy.addTestContext('-----------------------------------------------------------')
      cy.addTestContext('判斷結果：')

      cy.QPETRA_login()
      cy.wait(5000)

      //cy.get('.main-block-options__btn__menu--mobile > .tooltip--self-made > .hide-menu-btn__content > .v-btn__content > .v-icon').click()
      cy.TRA_ouside_menu().eq(2).click()
      cy.get(':nth-child(3) > .v-treeview-node__children > [aria-expanded="true"] > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
      .click()
      let elementCount;
      cy.get('[class="v-responsive v-image"]').then($elements => {
      elementCount = $elements.length;
      console.log($elements);
      let empty_image = 0;
      let visible_image = 0;
      cy.wait(3000)//如果沒有進行等待，推測是因為圖片尚未仔入完成，立即進行判斷，導致找不到每個元素
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
      cy.addTestContext(`24小時鐵路沿線累積雨量圖數量：${visible_image},氣象局LOGO圖片的數量：${empty_image}`)

      })
      })
});
it('6-圖輯>颱風路徑圖', () => {
  Cypress.on('uncaught:exception', (err, runnable, promise) => {
        return false
      })
      /*
      測試總覽：
      1. 點選"圖輯"頁籤。
      2. 點擊"颱風路徑圖"。
      3. 點選下拉選單"選擇時間區間"中的四個時間。
       */

      cy.addTestContext('測試步驟：')
      cy.addTestContext('1. 點擊圖輯。') 
      cy.addTestContext('2. 點擊"颱風路徑圖"。')
      cy.addTestContext('3. 點選下拉選單"選擇時間區間"中的四個時間。')
      cy.addTestContext('-----------------------------------------------------------')
      cy.addTestContext('判斷結果：')
      cy.QPETRA_login()
      cy.wait(5000)
      //cy.get('.main-block-options__btn__menu--mobile > .tooltip--self-made > .hide-menu-btn__content > .v-btn__content > .v-icon').click()
      cy.TRA_ouside_menu().eq(2).click()
      cy.get(':nth-child(3) > .v-treeview-node__children > [aria-expanded="false"] > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')        
      .click()
      if(cy.get('[class="atlas-table-page__container"]').children().should('not.have.text')){
        
        cy.get('[class="atlas-table-page__container"]').children().invoke('text').then((text)=>{
            console.log(text)
            cy.addTestContext(`空值(將打印出他的內容)：${text}`)
          })

      }else{

               let elementCount;
                cy.get('[class="v-responsive v-image"]').then($elements => {
                elementCount = $elements.length;
                console.log($elements);
                let empty_image = 0;
                let visible_image = 0;
                cy.wait(3000)//如果沒有進行等待，推測是因為圖片尚未仔入完成，立即進行判斷，導致找不到每個元素
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
                cy.addTestContext(`颱風路徑圖數量：${visible_image},氣象局LOGO圖片的數量：${empty_image}`)
                })
                })
              }
              

});
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
  
it('8-圖輯>工務段雨量>工務段', () => {
  Cypress.on('uncaught:exception', (err, runnable, promise) => {
      return false
      })
  /*
  測試總覽：
 "1. 點選""圖輯""頁籤。
  2. 點擊""工務段雨量>工務段""。
  3. 點選下拉選單""選擇工務段""。
      a. 點選""臺北工務段""。
      b. 點選""宜蘭工務段""。
      c. 點選""臺中工務段""。
      d. 點選""阿里山森鐵管理處""。
      e. 點選""嘉義工務段""。
      f. 點選""高雄工務段""。
      g. 點選""臺東工務段""。
      h. 點選""花蓮工務段""。
  4. 繪圖的javascript要可執行. 不能空轉."
   */
  cy.addTestContext('測試步驟：')
  cy.addTestContext('1. 點選""圖輯""頁籤。') 
  cy.addTestContext('2. 點擊""工務段雨量>工務段""。')
  cy.addTestContext('3. 點選下拉選單""選擇工務段""。')
  cy.addTestContext('a. 點選""臺北工務段""。')
  cy.addTestContext('b. 點選""宜蘭工務段""。')
  cy.addTestContext('c. 點選""臺中工務段""。')
  cy.addTestContext('d. 點選""阿里山森鐵管理處""。')
  cy.addTestContext('e. 點選""嘉義工務段""。')
  cy.addTestContext('f. 點選""高雄工務段""。')
  cy.addTestContext('g. 點選""臺東工務段""。')
  cy.addTestContext('h. 點選""花蓮工務段""。')
  cy.addTestContext('4. 繪圖的javascript要可執行. 不能空轉."')
  cy.addTestContext('-----------------------------------------------------------')
  cy.addTestContext('判斷結果：')


      cy.intercept('POST','https://61.56.11.201/TRA/rainmonitor/get_tag_sectiondisplay_by_tag/').as('getTag')
      cy.QPETRA_login()
      cy.wait(5000)

      //cy.get('.main-block-options__btn__menu--mobile > .tooltip--self-made > .hide-menu-btn__content > .v-btn__content > .v-icon').click()
      cy.get('.main-block-options__content > .row > :nth-child(3)').click()
    
    
      
      cy.get(':nth-child(4) > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
      .click()
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
          for (let i =0 ; i< 8 ;i++){
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
                                                  //console.log(elementCount);
                                                  //console.log(elewight);
                                                  //console.log(elehight);
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

it('14-監控>警示>台鐵閃電警示表', () => {
  Cypress.on('uncaught:exception', (err, runnable, promise) => {
        return false
      })
      /*
      測試總覽：
      1. 點選"監控"頁籤。
      2. 點選"警示>台鐵閃電警示表"。
      3.要有表格出現。
      */
      cy.addTestContext('測試步驟：')
      cy.addTestContext('1. 點選"監控"頁籤。') 
      cy.addTestContext('2. 點選"警示>台鐵閃電警示表"。')
      cy.addTestContext('3. 要有表格出現。')
      cy.addTestContext('-----------------------------------------------------------')
      cy.addTestContext('判斷結果：')


      cy.QPETRA_login();
      cy.wait(5000)
      //cy.qpe_menu_open().click();
      cy.get('.row > :nth-child(4)').click();
      cy.control_funtion_table(1,4).click();
      cy.qpe_menu_close();
      cy.wait(1000)
      //3.要有表格出現。將會返回True或False
      cy.get('#monitor-datatable').children().should('be.visible').then(($text)=>{
          const elementcontent = $text.is(':visible');
          cy.addTestContext(`14-3_將會返回true[成功]或false[失敗]：${elementcontent}`)
      })
      /*.then(($el)=>{
          const elementcontent = $el.is(':visible');
          cy.addTestContext({
          title:'表單有沒有出現(將會返回True[成功]或False[失敗])：',
          value: `${elementcontent}`,
      })
      })*/


     
});
})