class MyEntities {
    getAllTabs(){
        return cy.get('#tabs')
    }

    get costsTabButton(){
        return cy.get('#costs')
    }
    
    getToolBar() {
        return cy.get('#childtoolbar')
    }
}
export default new MyEntities()
