
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
          value: './screenshots/6_0pub.cy.js/6_0_1雷達觀測.png',
        })
        cy.addTestContext({
              title: '6_0_2定量降雨3hour',
              value: './screenshots/6_0pub.cy.js/6_0_2定量降雨3hour.png'
        })
        cy.addTestContext({
              title: '6_0_3定量降雨6hour',
              value: './screenshots/6_0pub.cy.js/6_0_3定量降雨6hour.png',
        })
        cy.addTestContext({
              title: '6_0_4定量降雨12hour',
              value: './screenshots/6_0pub.cy.js/6_0_4定量降雨12hour.png',
        })
        cy.addTestContext({
              title: '6_0_5定量降雨24hour',
              value: './screenshots/6_0pub.cy.js/6_0_5定量降雨24hour.png',
        })
        cy.addTestContext({
              title: '6_0_6定量降雨72hour',
              value: './screenshots/6_0pub.cy.js/6_0_6定量降雨72hour.png',
        })
          });


