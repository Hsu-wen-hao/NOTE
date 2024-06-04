describe('1.預報與觀測>地面觀測>自動雨量站',()=>{ 
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
                value: './screenshots/3_pub.cy.js/3-3_颱風打點之前.png'
            })
            cy.addTestContext({
                title: '3-3_颱風打點之後',
                value: './screenshots/3_pub.cy.js/3-3_颱風打點之後.png'
            })
          
        //}
    })
  });
})