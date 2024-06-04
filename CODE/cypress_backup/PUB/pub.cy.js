
describe('QPE_民眾版測試',()=>{                      
  it('1_預報與觀測>地面觀測>地面氣象站', () => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        cy.addTestContext('測試步驟：')
        cy.addTestContext('1. 勾選預報與觀測的地面觀測>地面氣象站。') 
        cy.addTestContext('2. 點擊基隆市 七堵區 國三S004 CAB030 測站(id=WM-id_6-CAB030)。')
        cy.addTestContext('3. 確認右下角是否有彈出視窗。')
        cy.addTestContext('4. 點擊地圖工具的「儲存影像」下載圖片。')
        cy.addTestContext('5. 點擊「時序圖」。')
        cy.addTestContext('6. 點擊下載圖示下載時序圖圖片。 ')
        cy.addTestContext('-----------------------------------------------------------')

        cy.visit('https://61.56.11.201/pub/')
        cy.syswindow_close()
        
              cy.map_radar()
              cy.TRA_map_inside_children().eq(0).click()
              cy.map_radar()
              cy.map_observation()
              cy.floor_station().click()
              cy.get('.display-ctrl__btn').click();
              cy.get('.main-block-options__btn__menu').click();
              //2. 點擊基隆市 七堵區 國三S004 CAB030 測站(id=WM-id_6-CAB030)。
              cy.get('#WM-id_6-CAB040').click({
                force: true
              });
              //3. 確認右下角是否有彈出視窗。
              cy.get('#popup_table >.popup-table__wrapper ').should('be.visible').then(($text)=>{
                const elementcontent = $text.is(':visible');
                cy.addTestContext(`1-3_將返回true[成功]或false[失敗]：${elementcontent}`)
                cy.screenshot('1-3_視窗',{overwrite:true})
              })

              //4. 點擊地圖工具的「儲存影像」下載圖片。
              cy.get(':nth-child(7) > #map-btn > .map-btn-icon').click().then(()=>{

                //6. 點擊下載圖示下載時序圖圖片。
                cy.get('.diagram-btn').click()
                cy.get('#tsgraph-download > .v-btn__content > .v-icon').click()
              })

        
        cy.addTestContext('--------------------------------------------------------------')
        cy.addTestContext('截圖對照：')
        const explain_screenshots = "1-3_視窗";
        cy.addTestContext({
          title:`${explain_screenshots}`,
          value:'./screenshots/pub.cy.js/1-3_視窗.png',
        })

        
    });

  it('2_0預報與觀測>地面觀測>自動雨量站', () => {
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
        value: './screenshots/pub.cy.js/2-4_自動雨量.png'
      });
      cy.addTestContext({
        title: '2-7_整合回波',
        value: './screenshots/pub.cy.js/2-7_整合回波.png'
      })
      cy.addTestContext({
        title: '2-11_自動雨量',
        value: './screenshots/pub.cy.js/2-11_自動雨量.png'
      })
      cy.addTestContext({
        title: '2-13_整合回波',
        value: './screenshots/pub.cy.js/2-13_整合回波.png'
      })
    
      
  });
  it('2_1預報與觀測>地面觀測>閒置測試自動雨量站', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    /*
    測試自動雨量站自動更新時，是否重新繪製
    1. 點擊地圖工具”設定已選圖資”，打開設定已選圖資區塊。
    2. 選取”地面觀測>自動雨量站”，點擊[顯示圖資]。
    3. 檢視地圖上是否有打點，左上角圖標是否有顯示。
    4. 閒置一段時間，觀察自動更新時自動雨量站是否正常繪製。
    */
   cy.addTestContext('測試步驟：')
   cy.addTestContext('測試自動雨量站自動更新時，是否重新繪製')
   cy.addTestContext('1. 點擊地圖工具”設定已選圖資”，打開設定已選圖資區塊。')
   cy.addTestContext('2. 選取”地面觀測>自動雨量站”，點擊[顯示圖資]。')
   cy.addTestContext('3. 檢視地圖上是否有打點，左上角圖標是否有顯示。')
   cy.addTestContext('4. 閒置一段時間，觀察自動更新時自動雨量站是否正常繪製。')
   cy.addTestContext('--------------------------------------------------------------')
   cy.addTestContext('判斷結果：')

    cy.visit('https://61.56.11.201/pub/')

    cy.syswindow_close()

    //cy.qpe_menu_open().click()
    cy.map_radar()
    cy.TRA_map_inside_children().eq(0).click();
    cy.map_radar()
    cy.map_observation()
    cy.TRA_map_inside_children().eq(2).click();
    cy.get('.display-ctrl__btn').click();
    cy.get('.main-block-options__btn__menu').click().then(()=>{
    //3. 檢視地圖上是否有打點，左上角圖標是否有顯示。
      cy.get('#gauge_message>.card>.card-content').children().should('have.text', '●●●●●').then(($text)=>{
        cy.addTestContext($text)
      })
    })
    cy.screenshot('2-4_閒置前',{overwrite:true})
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
      cy.addTestContext(`2-1_3將會返回true[成功]或false[失敗]：${found}`)
    })
    const TA = cy.get('.text-container > span');
    for (let i = 1; i <= 10; i++) {
      cy.wait(60000);
      cy.get('.text-container > span').invoke('text').should('not.eq', `${i}:00`).then((text)=>{
          cy.addTestContext(`閒置測試：${text}`);
      })
    }
    cy.addTestContext('--------------------------------------------------------------')
    cy.addTestContext('截圖對照：')
    cy.screenshot('2-4_閒置後',{overwrite:true})
    cy.addTestContext({
        title:'2-4_閒置前',
        value:'./screenshots/pub.cy.js/2-4_閒置前.png',
      })
      cy.addTestContext({
        title:'2-4_閒置後',
        value:'./screenshots/pub.cy.js/2-4_閒置後.png',
      })



  });

  it('3_預報與觀測>颱風資訊>颱風路徑資訊', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    /*
    1. 點擊”取消全選”先清空圖資。
    2. 選取”颱風資訊>颱風路徑資訊”，點擊[顯示圖資]。
    3. 檢視地圖上是否有打點，左上角圖標是否有顯示。
    4. 閒置一段時間，觀察自動更新時自動雨量站是否正常繪製。
    */
    cy.addTestContext('測試步驟：')
    cy.addTestContext('1. 點擊”取消全選”先清空圖資。')
    cy.addTestContext('2. 選取”颱風資訊>颱風路徑資訊”，點擊[顯示圖資]。')
    cy.addTestContext('3. 檢視地圖上是否有打點，左上角圖標是否有顯示。')
    cy.addTestContext('4. 閒置一段時間，觀察自動更新時自動雨量站是否正常繪製。')
    cy.addTestContext('----------------------------------------------------')
    
    cy.visit('https://61.56.11.201/pub/')
    cy.syswindow_close()
    //cy.qpe_menu_open().click()
    cy.map_typhoon()
    cy.TRA_map_inside_children().eq(0).click();
    cy.get('.display-ctrl__btn').click();

    /*cy.get('[class="text-container"]').children().invoke('text').then((text)=>{
        console.log(text);*/
    cy.get('.msg-container> .text-container > span').invoke('text').then((text)=>{
        console.log(text);
    }).then((text)=>{

        /*if(cy.get('[class="text-container"]').children().invoke('text').should('match', new RegExp(`${text}`))){
            cy.addTestContext(`颱風資料詳細內容：${text}`);
            cy.screenshot('3-3_無颱風資訊',{overwrite:true})
            cy.addTestContext('--------------------------------------------------------------')
            cy.addTestContext('截圖對照：')
            cy.addTestContext({
                title: '3-3_無颱風資訊',
                value: './screenshots/3_pub.cy.js/3-3_無颱風資訊.png'
            })

        }else{*/

            cy.get('.main-block-options__btn__menu').click()
            cy.screenshot('3-3_颱風打點之前',{overwrite:true})
            cy.wait(6000)
            cy.screenshot('3-3_颱風打點之後',{overwrite:true})
            cy.addTestContext('截圖對照：')
            cy.addTestContext({
                title: '3-3_颱風打點之前',
                value: './screenshots/pub.cy.js/3-3_颱風打點之前.png'
            })
            cy.addTestContext({
                title: '3-3_颱風打點之後',
                value: './screenshots/pub.cy.js/3-3_颱風打點之後.png'
            })
          
        //}
    })
  });
  it('4_氣象觀測>地面氣象觀測', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    /*
    1. 點擊觀測頁籤。
    2. 勾選氣象觀測>地面氣象觀測。
    3. 確認表格是否有顯示。
    4. 點擊表格第一個測站的風向數值，畫面彈出時序圖。
    5. 點擊下載按鈕儲存時序圖。
    6. 點擊表格第一個測站其他氣象資料，確認時序圖視窗的氣象變數與時序圖有跟著變化並點擊下載圖示儲存圖片。
    */

    cy.addTestContext('測試步驟：')
    cy.addTestContext('1. 點擊觀測頁籤。')
    cy.addTestContext('2. 勾選氣象觀測>地面氣象觀測。')
    cy.addTestContext('3. 確認表格是否有顯示。')
    cy.addTestContext('4. 點擊表格第一個測站的風向數值，畫面彈出時序圖。')
    cy.addTestContext('5. 點擊下載按鈕儲存時序圖。')
    cy.addTestContext('6. 點擊表格第一個測站其他氣象資料，確認時序圖視窗的氣象變數與時序圖有跟著變化並點擊下載圖示儲存圖片。')
    cy.addTestContext('-----------------------------------------------------------------------------------------')

    cy.visit('https://61.56.11.201/pub/')

    cy.syswindow_close()

    //cy.qpe_menu_open().click()
    cy.get('.main-block-options__content > .row > :nth-child(3)').click();
    cy.get('.monitor_treeview > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
    cy.close_menu().click()
    cy.get('#monitor-datatable').children().should('be.visible').then(()=>{
        cy.wait(4000)
        cy.screenshot('4-3_顯示表格',{overwrite:true})
    })
    
    cy.get(':nth-child(1) > :nth-child(5) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_0風向',{overwrite:true}).wait(1000)
    cy.get('#tsgraph-download').click()
    cy.get(':nth-child(1) > :nth-child(6) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_1平均風',{overwrite:true}).wait(1000)
    cy.get('#tsgraph-download').click()
    cy.get(':nth-child(1) > :nth-child(7) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_2瞬間風',{overwrite:true}).wait(1000)
    cy.get('#tsgraph-download').click()
    cy.get(':nth-child(1) > :nth-child(9) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_3溫度',{overwrite:true}).wait(1000)
    cy.get('#tsgraph-download').click()
    cy.get(':nth-child(1) > :nth-child(10) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_4相對溼度',{overwrite:true}).wait(1000)
    cy.get('#tsgraph-download').click()
    cy.get(':nth-child(1) > :nth-child(11) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_5氣壓',{overwrite:true}).wait(1000)
    cy.get('#tsgraph-download').click()
    cy.get(':nth-child(1) > :nth-child(12) > .links').click();
    cy.wait(3000)
    cy.screenshot('4-6_6雨量',{overwrite:true}).wait(1000)
    cy.addTestContext('截圖對照：')
    cy.addTestContext({
            title: '4-3_顯示表格',
            value: './screenshots/pub.cy.js/4-3_顯示表格.png',
      })
      cy.addTestContext({
            title: '4-6_0風向',
            value: './screenshots/pub.cy.js/4-6_0風向.png'
      })
      cy.addTestContext({
            title: '4-6_1平均風',
            value: './screenshots/pub.cy.js/4-6_1平均風.png',
      })
      cy.addTestContext({
            title: '4-6_2瞬間風',
            value: './screenshots/pub.cy.js/4-6_2瞬間風.png',
      })
      cy.addTestContext({
            title: '4-6_3溫度',
            value: './screenshots/pub.cy.js/4-6_3溫度.png',
      })
      cy.addTestContext({
            title: '4-6_4相對溼度',
            value: './screenshots/pub.cy.js/4-6_4相對溼度.png',
      })
      cy.addTestContext({
            title: '4-6_5氣壓',
            value: './screenshots/pub.cy.js/4-6_5氣壓.png',
      })
      cy.addTestContext({
            title: '4-6_6雨量',
            value: './screenshots/pub.cy.js/4-6_6雨量.png',
      })
  });
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
        value: './screenshots/pub.cy.js/5-4_等待視窗英文.png'
    })
    cy.addTestContext({
        title: '5-5_overlays頁簽英文',
        value: './screenshots/pub.cy.js/5-5_overlays頁簽英文.png'
    })
    cy.addTestContext({
        title: '5-6_sitting頁簽英文',
        value: './screenshots/pub.cy.js/5-6_sitting頁簽英文.png'
    })
    cy.addTestContext({
        title: '5-11_1切換時間前',
        value: './screenshots/pub.cy.js/5-11_1切換時間前.png'
    })
    cy.addTestContext({
        title: '5-11_2切換時間後',
        value: './screenshots/pub.cy.js/5-11_2切換時間後.png'
    })
    cy.addTestContext({
        title: '5-12_1中文切換時間前',
        value: './screenshots/pub.cy.js/5-12_1中文切換時間前.png'
    })
    cy.addTestContext({
        title: '5-12_1中文切換時間後',
        value: './screenshots/pub.cy.js/5-12_1中文切換時間後.png'
    })
    cy.addTestContext({
        title: '5-12_3中文設定',
        value: './screenshots/pub.cy.js/5-12_3中文設定.png'
    })
        cy.addTestContext({
        title: '5-12_3中文底圖',
        value: './screenshots/pub.cy.js/5-12_3中文底圖.png'
    })
        cy.addTestContext({
        title: '5-12_3中文預報和觀測',
        value: './screenshots/pub.cy.js/5-12_3中文預報和觀測.png'
    })


  });
  
it('6_0地圖>雷達觀測', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.addTestContext('測試步驟：')
  cy.addTestContext('1. 點選雷達觀測全部項目')
  cy.addTestContext('------------------------------------------------')


  cy.visit('https://61.56.11.201/pub/')
  cy.syswindow_close()

  cy.get('.display-ctrl__btn').as('display_image');
  cy.get('#map_btn_tool_container > :nth-child(7) > .map-btn > .map-btn-text').as('save_image');
  //cy.get('.main-block-options__btn__menu--mobile > .tooltip--self-made > .hide-menu-btn__content > .v-btn__content > .v-icon').as('qpe_menu');
 
      //地圖雷達觀測
      //cy.qpe_menu_open().click();.wait(1000);
      cy.get('@display_image').click()
      cy.get('.main-block-options__btn__menu').click()
      cy.screenshot('6_0_1雷達觀測',{overwrite:true})
      
      cy.qpe_menu_open().click();
      cy.get('[class="v-treeview theme--light"]').children().eq(0).click();
      cy.get('#map_obs > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
      cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
      .children('.v-slider__tick')
      .eq(1).click();
      cy.get('@display_image').click().wait(1000)
      cy.get('.main-block-options__btn__menu').click()
      cy.screenshot('6_0_2定量降雨3hour',{overwrite:true})
                                                                               
      cy.qpe_menu_open().click();
      cy.get('[class="v-treeview theme--light"]').children().eq(0).click();
      cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
      .children('.v-slider__tick')
      .eq(2).click()
      cy.get('@display_image').click().wait(1000)
      cy.get('.main-block-options__btn__menu').click()
      cy.screenshot('6_0_3定量降雨6hour',{overwrite:true})
      
      cy.qpe_menu_open().click();
      cy.get('[class="v-treeview theme--light"]').children().eq(0).click();
      cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
      .children('.v-slider__tick')
      .eq(3).click()
      cy.get('@display_image').click()
      cy.close_menu().click().wait(1000)
      cy.get('.main-block-options__btn__menu').click({force:true})
      cy.screenshot('6_0_4定量降雨12hour',{overwrite:true})
      
      cy.qpe_menu_open().click();
      cy.get('[class="v-treeview theme--light"]').children().eq(0).click();
      cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
      .children('.v-slider__tick')
      .eq(4).click()
      cy.get('@display_image').click()
      cy.close_menu().click().wait(1000)
      cy.get('.main-block-options__btn__menu').click({force:true})
      cy.screenshot('6_0_5定量降雨24hour',{overwrite:true})
      
      cy.qpe_menu_open().click();
      cy.get('[class="v-treeview theme--light"]').children().eq(0).click();
      cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
      .children('.v-slider__tick')
      .eq(5).click()
      cy.get('@display_image').click()
      cy.close_menu().click().wait(1000)
      cy.get('.main-block-options__btn__menu').click({force:true})
      cy.screenshot('6_0_6定量降雨72hour',{overwrite:true})
   
  //------------------------------------------------------------------
  cy.addTestContext('截圖對照：')
  cy.addTestContext({
    title: '6_0_1雷達觀測',
    value: './screenshots/pub.cy.js/6_0_1雷達觀測.png',
  })
  cy.addTestContext({
        title: '6_0_2定量降雨3hour',
        value: './screenshots/pub.cy.js/6_0_2定量降雨3hour.png'
  })
  cy.addTestContext({
        title: '6_0_3定量降雨6hour',
        value: './screenshots/pub.cy.js/6_0_3定量降雨6hour.png',
  })
  cy.addTestContext({
        title: '6_0_4定量降雨12hour',
        value: './screenshots/pub.cy.js6_0_4定量降雨12hour.png',
  })
  cy.addTestContext({
        title: '6_0_5定量降雨24hour',
        value: './screenshots/pub.cy.js/6_0_5定量降雨24hour.png',
  })
  cy.addTestContext({
        title: '6_0_6定量降雨72hour',
        value: './screenshots/pub.cy.js/6_0_6定量降雨72hour.png',
  })
    });


    it('6_1地圖>地面觀測', () => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.addTestContext('測試步驟：')
      cy.addTestContext('1. 點選地面觀測全部項目')
      cy.addTestContext('------------------------------------------------')
      //------------------------------------------------------------------
      //地面觀測--
      cy.addTestContext('截圖對照：')
        cy.visit('https://61.56.11.201/pub/');
        cy.syswindow_close()
        cy.wait(5000)
          cy.wait(5000).then(()=>{
              cy.delserch()
              //cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__toggle').click();
              cy.get('[class="v-treeview theme--light"]').children().eq(1).click();
              cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_1地面氣象站',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_1地面氣象站',
                  value:'./screenshots/pub.cy.js/6-1_1地面氣象站.png'
                })
              })
              cy.get('.main-block-options__btn__menu').click();
              cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  
              cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_2自動氣象站',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_1地面氣象站',
                  value:'./screenshots/pub.cy.js/6-1_1地面氣象站.png'
                })
              })
              cy.qpe_menu_open().click();
              cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  
              cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(3) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_3自動雨量站',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_3自動雨量站',
                  value:'./screenshots/pub.cy.js/6-1_3自動雨量站.png'
                })
              })
              cy.qpe_menu_open().click();
              cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(3) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  
              cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(4) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_4累積雨量分布圖',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_4累積雨量分布圖',
                  value:'./screenshots/pub.cy.js/6-1_4累積雨量分布圖.png'
                })
              })
  
              cy.qpe_menu_open().click();
              cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
              .children('.v-slider__tick').eq(1).click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_5累積雨量3hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_5累積雨量3hour',
                  value:'./screenshots/pub.cy.js/6-1_5累積雨量3hour.png'
                })
              })
              
              cy.qpe_menu_open().click();
              cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
              .children('.v-slider__tick').eq(2).click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_6累積雨量6hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_6累積雨量6hour',
                  value:'./screenshots/pub.cy.js/6-1_6累積雨量6hour.png'
                })
              })
  
              cy.qpe_menu_open().click();
              cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
              .children('.v-slider__tick').eq(3).click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_7累積雨量12hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_7累積雨量12hour',
                  value:'./screenshots/pub.cy.js/6-1_7累積雨量12hour.png'
                })
              })
  
              cy.qpe_menu_open().click();
              cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
              .children('.v-slider__tick').eq(4).click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_8累積雨量24hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_8累積雨量24hour',
                  value:'./screenshots/pub.cy.js/6-1_8累積雨量24hour.png'
                })
              })
              
              cy.qpe_menu_open().click();
              cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(4) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
              cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(5) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_9縣市最大雨量1hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_9縣市最大雨量1hour',
                  value:'./screenshots/pub.cy.js/6-1_9縣市最大雨量1hour.png'
                })
              })
              
              cy.qpe_menu_open().click();
              cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
              .children('.v-slider__tick').eq(1).click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_10縣市最大雨量3hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_10縣市最大雨量3hour',
                  value:'./screenshots/pub.cy.js/6-1_10縣市最大雨量3hour.png'
                })
              })
  
              cy.qpe_menu_open().click();
              cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
              .children('.v-slider__tick').eq(2).click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_11縣市最大雨量6hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_11縣市最大雨量6hour',
                  value:'./screenshots/pub.cy.js/6-1_11縣市最大雨量6hour.png'
                })
              })
  
              cy.qpe_menu_open().click();
              cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
              .children('.v-slider__tick').eq(3).click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_12縣市最大雨量12hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_12縣市最大雨量12hour',
                  value:'./screenshots/pub.cy.js/6-1_12縣市最大雨量12hour.png'
                })
              })
  
              cy.qpe_menu_open().click();
              cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
              .children('.v-slider__tick').eq(4).click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(1000)
              cy.screenshot('6-1_13縣市最大雨量24hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_13縣市最大雨量24hour',
                  value:'./screenshots/pub.cy.js/6-1_13縣市最大雨量24hour.png'
                })
              })
  
              cy.qpe_menu_open().click();
              cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(5) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
              cy.get(':nth-child(2) > .v-treeview-node__children > :nth-child(6) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(10000)
              cy.screenshot('6-1_14鄉鎮最大雨量1hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_14鄉鎮最大雨量1hour',
                  value:'./screenshots/pub.cy.js/6-1_14鄉鎮最大雨量1hour.png'
                })
              })
  
            
              cy.qpe_menu_open().click();
              cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
              .children('.v-slider__tick').eq(1).click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(10000)
              cy.screenshot('6-1_15鄉鎮最大雨量3hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_15鄉鎮最大雨量3hour',
                  value:'./screenshots/pub.cy.js/6-1_15鄉鎮最大雨量3hour.png'
                })
              })
  
              cy.qpe_menu_open().click();
              cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
              .children('.v-slider__tick').eq(2).click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(10000)
              cy.screenshot('6-1_16鄉鎮最大雨量3hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_16鄉鎮最大雨量3hour',
                  value:'./screenshots/pub.cy.js/6-1_16鄉鎮最大雨量3hour.png'
                })
              })
  
              cy.qpe_menu_open().click();
              cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
              .children('.v-slider__tick').eq(3).click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(10000)
              cy.screenshot('6-1_17鄉鎮最大雨量3hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_17鄉鎮最大雨量3hour',
                  value:'./screenshots/pub.cy.js/6-1_17鄉鎮最大雨量3hour.png'
                })
              })
  
              cy.qpe_menu_open().click();
              cy.get('[class="v-slider__ticks-container v-slider__ticks-container--always-show"]')
              .children('.v-slider__tick').eq(4).click();
              cy.get('.display-ctrl__btn').click();
              cy.close_menu().click().wait(10000)
              cy.screenshot('6-1_18鄉鎮最大雨量3hour',{overwrite:true}).then(()=>{
                cy.addTestContext({
                  title:'6-1_18鄉鎮最大雨量3hour',
                  value:'./screenshots/pub.cy.js/6-1_18鄉鎮最大雨量3hour.png'
                })
              })
            })
          //-----------------------------------------------------------------------------------------
        });
  
  

        it('6_2地圖>衛星產品', () => {
          cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          cy.addTestContext('測試步驟：')
          cy.addTestContext('1. 點選衛星產品全部項目')
          cy.addTestContext('------------------------------------------------')
          cy.addTestContext('截圖對照：')
            cy.visit('https://61.56.11.201/pub/');
            cy.syswindow_close()
              //衛星產品
              cy.log('parper next test').wait(2000)
              cy.wait(5000).then(()=>{
      
                cy.delserch()
                cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__toggle').click();
                cy.get('[class="v-treeview theme--light"]').children().eq(2).click();
                cy.get(':nth-child(3) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
                cy.get('.display-ctrl__btn').click();
                cy.close_menu().click().wait(1000)
                cy.screenshot('6-2_1縣市最大雨量24hour',{overwrite:true}).then(()=>{
                  cy.addTestContext({
                    title:'6-2_1縣市最大雨量24hour',
                    value:'./screenshots/pub.cy.js/6-2_1縣市最大雨量24hour.png'
                  })
                })
      
                cy.qpe_menu_open().click();
                cy.get(':nth-child(3) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
                cy.get(':nth-child(3) > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
                cy.get('.display-ctrl__btn').click();
                cy.close_menu().click().wait(1000)
                cy.screenshot('6-2_2縣市最大雨量24hour',{overwrite:true}).then(()=>{
                  cy.addTestContext({
                    title:'6-2_2縣市最大雨量24hour',
                    value:'./screenshots/pub.cy.js/6-2_2縣市最大雨量24hour.png'
                  })
                })
              })
      
              //-----------------------------------------------------------------------------------------
            });
      
            it('6_4地圖>颱風資訊', () => {
              cy.on('uncaught:exception', (err, runnable) => {
                return false;
              });
              cy.addTestContext('測試步驟：')
              cy.addTestContext('1. 點選颱風資訊全部項目')
              cy.addTestContext('------------------------------------------------')
              cy.addTestContext('截圖對照：')
            
              describe('6-4地圖>迴圈颱風資訊測試',()=>{
                  cy.visit('https://61.56.11.201/pub/');
                  cy.syswindow_close()
                });
            
                    //颱風資訊
                    cy.log('parper next test').wait(2000)
                    cy.wait(5000);
                    cy.delserch()
                    cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(4) > .v-treeview-node__root > .v-treeview-node__toggle').click();
                    cy.get('[class="v-treeview theme--light"]').children().eq(4).click();
                    cy.get(':nth-child(5) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
                    cy.get('.display-ctrl__btn').click();
                    cy.close_menu().click().wait(1000)
                    cy.screenshot('6-4_1颱風路徑資訊',{overwrite:true}).then(()=>{
                      cy.addTestContext({
                        title:'6-4_1颱風路徑資訊',
                        value:'./screenshots/pub.cy.js/6-4_1颱風路徑資訊.png'
                      })
                    })
            
                    //---------------------------------------------------------------------------------------
            
                  });
            
                  it('6_5地圖>雷達定量降雨預報', () => {
                    cy.on('uncaught:exception', (err, runnable) => {
                      return false;
                    });
                    cy.addTestContext('測試步驟：')
                    cy.addTestContext('1. 點選雷達定量降雨預報全部項目')
                    cy.addTestContext('------------------------------------------------')
                    cy.addTestContext('截圖對照：')
                  
                    describe('6-5地圖>迴圈雷達定量降雨預報測試',()=>{
                        cy.visit('https://61.56.11.201/pub/');
                        cy.syswindow_close()
                      });
                          //雷達定量降雨
                          cy.log('parper next test').wait(2000)
                          cy.wait(5000);
                          cy.delserch()
                          cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(5) > .v-treeview-node__root > .v-treeview-node__toggle').click();
                          cy.get('[class="v-treeview theme--light"]').children().eq(5).click();
                          cy.get(':nth-child(6) > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
                          cy.get('.display-ctrl__btn').click();
                          cy.close_menu().click().wait(1000)
                          cy.screenshot('6-5_1未來1小時雨量預報',{overwrite:true}).then(()=>{
                            cy.addTestContext({
                              title:'6-5_1未來1小時雨量預報',
                              value:'./screenshots/pub.cy.js/6-5_1未來1小時雨量預報.png'
                            })
                          })
                  
                          cy.qpe_menu_open().click().wait(1000);
                          cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(5) > .v-treeview-node__root > .v-treeview-node__toggle').click();
                          cy.get('[class="v-treeview theme--light"]').children().eq(5).click();
                          cy.get(':nth-child(6) > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
                          cy.get('.display-ctrl__btn').click();
                          cy.close_menu().click().wait(1000)
                          cy.screenshot('6-5_2未來1小時回波預報',{overwrite:true}).then(()=>{
                            cy.addTestContext({
                              title:'6-5_2未來1小時回波預報',
                              value:'./screenshots/pub.cy.js/6-5_2未來1小時回波預報.png'
                            })
                          })
                  
                        });
                  
})