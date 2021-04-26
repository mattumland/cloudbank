describe('Cloudbank Home Page', () => {

  beforeEach(() => {
    cy
      .visit('http://localhost:3000')
  })

  it('Should display a fully loaded header', () => {
    cy
      .get('h1').contains('CLOUDBANK')
      .get('.nav-bar').should('be.visible')
      .get('.btn')
      .should(($btn) => {
        expect($btn).to.have.length(13)
        expect($btn, 'first').to.contain('SAVED')
        expect($btn, 'second').to.contain('THE BELL')
        expect($btn, 'third').to.contain('FLOOR 1')
        expect($btn, 'fourth').to.contain('FLOOR 2')
        expect($btn, 'thirteenth').to.contain('FLOOR 6')
      })
    });

  it('Should allow visitors to change pages by clicking on a header button', () => {
    cy.get('[data-cy=floor1]').click()
    cy.url().should('include', 'http://localhost:3000/floor1')
  })
})

describe('Cloudbank Floor Page', () => {
  beforeEach(() => {
    cy
      .visit('http://localhost:3000/floor1')
  })

  it('Should display the title of the floor', () => {
    cy
      .get('.floor-title').contains('Reception & Habitation')
  })

  it('Should display a sidebar with encounters', () => {
    cy.get('.encounter-list-title').contains('ENCOUNTER LIST')
    cy.get('[data-cy=sidebar')
    .should(($sidebar) => {
      expect($sidebar).to.have.length(5)
      expect($sidebar, 'first').to.contain('1d10 Troubleshooter')
      expect($sidebar, 'second').to.contain('1d5 Forgotten Android')
      expect($sidebar, 'third').to.contain('Distorted corporate muzak plays over the intercom')
      expect($sidebar, 'fourth').to.contain('A Security Android')
      expect($sidebar, 'fifth').to.contain('A Diver')
    })
  })
})

describe('Cloudbank Saved Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/floor1')
    cy.get('[data-cy=save]').click();
    cy.get('[data-cy=savedTab]').click();
  })

  it('Should show saved encounters on the saved tab', () => {
    cy.get('.encounter-container')
  })

  it('Should allow users to delete a saved encounter', () => {
    cy.get('[data-cy=delete]').click();
    cy.get('.saved-message').contains('No encounters have been saved')
  })

  it('Should show a message if there are no saved encounters', () => {
    cy.get('[data-cy=delete]').click();
    cy.get('.saved-message').contains('No encounters have been saved')
  })

})

describe('Async Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/test')
  })

  it('Should display Pechetti when a specific ID is fetched', () => {
    cy.get('[data-cy=singleName').contains('Pechetti');
  })

  it('Should fetch a random name when tags are added to an encounter', () => {
    cy.get('[data-cy=randomName').should('be.visible');
  })

  it(`Should display a default name ('Mummy') if a fetch fails`, () => {
    cy.intercept('http://stapi.co/api/v1/rest/character?uid=CHMA0000021696', {})
    cy.get('[data-cy=singleName').contains('Mummy');
  })

  it(`Should display an name when given a character object`, () => {
    cy.intercept('http://stapi.co/api/v1/rest/character?uid=CHMA0000021696', { fixture: 'alt_character.json' })
    cy.get('[data-cy=singleName').contains('Eddie Newsom');
  })
})
