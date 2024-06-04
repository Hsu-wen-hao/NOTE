// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-mochawesome-reporter/register';
//import'mochawesome/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')


Cypress.Commands.add('syswindow_close',  { previous: '' } ,()=>{
  cy.get('body').then($body => {
    if ($body.find('.notifications-card > .v-tabs > .v-item-group > .v-slide-group__wrapper > .v-slide-group__content').length > 0) {
      cy.get('.notifications-tabs__close-btn').click();
    }
  });
} );


Cypress.Commands.add('qpe_menu_open',  { previous: 'QPETRA_login' } , () => {
  cy.get('.main-block-options__btn__menu')
  });
  Cypress.Commands.add('dispaly_image',  { previous: 'get' } ,()=>{
    //cy.get('.main-block-options__btn__menu--mobile').click()
    cy.get('.display-ctrl__btn > .v-btn__content').click()
  } );
  Cypress.Commands.add('qpe_menu_close', () => {
    //cy.get('.main-block-options__btn__menu > #qpe-tooltip > .tooltip--self-made > .v-btn > .v-btn__content > .v-icon').click();
    cy.get('.main-block-options__btn__menu').click();
  });
  Cypress.Commands.add('qpe_map', () => {
    cy.get('.main-block-options__content > .row > :nth-child(2)');
  });
  Cypress.Commands.add('map_radar', () => {
    cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(1) > .v-treeview-node__root').click();
  });
  Cypress.Commands.add('map_observation', () => {
    cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(2) > .v-treeview-node__root').click();
  });
  Cypress.Commands.add('map_stellite', () => {
    cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(3) > .v-treeview-node__root').click();
  });
  Cypress.Commands.add('map_lightning', () => {
    cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(4) > .v-treeview-node__root').click();
  });
  Cypress.Commands.add('map_typhoon', () => {
    cy.get('#map_obs > #main-treeview > .v-treeview > :nth-child(5) > .v-treeview-node__root').click();
  });
  Cypress.Commands.add('map_rbn', () => {
    cy.get('.v-treeview > :nth-child(6) > .v-treeview-node__root');
  });
  Cypress.Commands.add('qpe_obs', () => {
    cy.get('.main-block-options__content > .row > :nth-child(3)');
  });
  Cypress.Commands.add('qpe_lang', () => {
    cy.get('.row > :nth-child(4)');
  });
  Cypress.Commands.add('qpe_about', () => {
    cy.get('.row > :nth-child(5)');
  });
  //定量降雨估算
  Cypress.Commands.add('QRE', () => {
    cy.get('#map_obs > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .checkbox-position > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
  });
  //定量降雨估算下方
  Cypress.Commands.add('hous_slider',()=>{
    cy.get('.v-slider__ticks-container')
  })
  //地面氣象站
  Cypress.Commands.add('floor_station',()=>{
  cy.get('#map_obs > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(1) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
  })
  //自動氣象站
  Cypress.Commands.add('auto_station',()=>{
    cy.get('#map_obs > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(2) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')    })
  //自動雨量站
  Cypress.Commands.add('auto_rain_station',()=>{
    cy.get('#map_obs > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(3) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')    })
  //類積雨量分布圖
  Cypress.Commands.add('rain_station',()=>{
    cy.get('#map_obs > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(4) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
    })
  //縣市最大雨量圖
  Cypress.Commands.add('twon_bigrain_station',()=>{
    cy.get('#map_obs > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(5) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
    })
  //鄉鎮最大雨量圖
  Cypress.Commands.add('bigrain_station',()=>{
    cy.get('#map_obs > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(6) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
    })
  Cypress.Commands.add('close_menu',()=>{
    //cy.get('.main-block-options__btn__menu > #qpe-tooltip > .tooltip--self-made > .v-btn')
    cy.get('.main-block-options__btn__menu')
  } );
  Cypress.Commands.add('delserch', ()=>{
    //推測是舊版cy.get('#product_menu > .menu-ctrl > .icon-container > :nth-child(2) > .tooltip--self-made > .v-icon').click()
    cy.get('#product_menu > .menu-ctrl > .icon-container > :nth-child(2) > [aria-haspopup="true"]').click()
  });
  //--------------------------------------------------------------
  //TRA全域相關
  //登入資訊
  Cypress.Commands.add('QPETRA_login',()=>{
    const username = 'iisia01'
    const password = 'Ieie@98765432'
    describe('login test',()=>{
        cy.visit('https://61.56.11.201/TRA/');
        cy.get('#id_username').type(username)
        cy.get('#id_password').type(password)
        cy.get('.btn').click()
    })
})
Cypress.Commands.add('TRA_inside_menu',  { previous: '' } ,()=>{
  cy.get('[class="v-treeview theme--light"]')
  .children('')
} );
Cypress.Commands.add('TRA_ouside_menu',  { previous: '' } ,()=>{
  cy.get('[class="row no-gutters justify-center align-content-space-around"]')
  .children('')
} );
Cypress.Commands.add('TRA_top_menu',  { previous: '' } , ()=>{
  cy.get('[class="v-slide-group__content v-tabs-bar__content"]')
  .children('')
});
Cypress.Commands.add('TRA_map_inside_children',  { previous: '' } ,()=>{
  cy.get('[class="v-treeview-node__children"]').children()
} );
Cypress.Commands.add('TRA_inside_menu_close',  { previous: '' } ,()=>{
  cy.get('[class="v-treeview-node v-treeview-node--click"]')
  .children()
} );
Cypress.Commands.add('TRA_photo_galley_time',  { previous: '' } ,()=>{
  cy.get('#atlas-tra > .v-input')
} );


//TRA地圖-設定相關
Cypress.Commands.add('setting_menu_inside',  { previous: '' } ,(number)=>{ 
cy.get(`#time-choose > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(${number}) > .v-treeview-node__root > .v-treeview-node__content > .checkbox-position > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple`)
.click()
cy.get(`#time-choose > #main-treeview > .v-treeview > [aria-expanded="true"] > .v-treeview-node__children > :nth-child(${number}) > .v-treeview-node__root > .v-treeview-node__content > .checkbox-position > .v-input__control`)
.click()
});
Cypress.Commands.add('setting_menu_inside_year',  { previous: '' } ,()=>{
  cy.get('.case-search > :nth-child(1) > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
} );
Cypress.Commands.add('setting_menu_inside_event',  { previous: '' } ,()=>{
  cy.get('.case-search > :nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
} );
Cypress.Commands.add('setting_menu_inside_choice_years_and_event',  { previous: 'get' } ,(input,number)=>{
  return cy.get(`[aria-labelledby="${input}-list-item-${number}"]`)
} );
Cypress.Commands.add('setting_menu_event_UI_menu',  { previous: '' } , ()=>{
  cy.get('.case-search__selector-btn')
});
Cypress.Commands.add('event_UI_pop_action',  { previous: 'get' } ,(row)=>{
  return cy.get(`:nth-child(${row}) > :nth-child(12) > .v-icon`)
} );


//TRA圖輯相關
Cypress.Commands.add('image_time_down_menu',  { previous: '' } ,(input)=>{
  cy.get('.multiple-chart__control > .v-select > .v-input__control > .v-input__slot').click()
  cy.get(`[aria-labelledby="${input}-list-item-403"]`).click()
} );



//TRA監測相關
Cypress.Commands.add('control_time_table',  { previous: '' } ,(row , column)=>{
    return cy.get(`tbody > :nth-child(${row}) > :nth-child(${column})`).click()
} );

Cypress.Commands.add('choice_table',  { previous: '' } ,(row,column)=>{
  cy.get(`tbody > :nth-child(${row}) > :nth-child(${column})`).click()
} );
//這是menu外層CSS
//cy.get('.monitor_treeview > #main-treeview > .v-treeview > :nth-child(1) > :nth-child(1)')
//這是menu內層css
//
Cypress.Commands.add('control_funtion_table',  { previous: 'TRA_ouside_menu' } ,(outside,inside)=>{
  cy.get(`.monitor_treeview > #main-treeview > .v-treeview > :nth-child(${outside}) > .v-treeview-node__children > :nth-child(${inside}) > .v-treeview-node__root > .v-treeview-node__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple`)
} );
Cypress.Commands.add('config_table_image',  { previous: '' } , (row , column)=>{
  cy.get(`:nth-child(${row}) > :nth-child(${column}) > #img_id_for_selector > .v-image__image`,{force:true})
});


