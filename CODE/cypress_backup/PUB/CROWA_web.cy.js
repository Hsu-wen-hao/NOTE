it('test', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    cy.visit('https://crowa.cwb.gov.tw/api/web/weather_graphs/graph');

    cy.get('.time-slider').then($element =>{
        const {x , y} = $element[0].getBoundingClientRect();
        console.log(`Element position: x= ${x},y=${y}`)
        cy.log(`Element position: x= ${x},y=${y}`)
        cy.get('body')
        .trigger('mousedown',{button:0,screenX: 611,screenY:730})
        .trigger('mousemove',{button:0,screenX: 711,screenY:730})
        .trigger('mouseup')
        
        cy.window().then((win) =>{
            const {innerWidth,innerHeight} = win;
            cy.log(`Window size:${innerHeight},${innerWidth}`)
    
            const screenwight = win.innerWidth;
            const screenheight = win.innerHeight;
    
            cy.trigger('mousemove',{
                button:0,
                clientX:screenwight/2,
                clientY:screenheight/2,
            })
    
        })
    })

    
    cy.get('.application--wrap > :nth-child(1)')


});