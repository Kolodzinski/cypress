import MyEntities from  "../../../../support/pageObjects/MyEntities";
import {userData, web} from "../../../variables/settings";
import {CreateUser} from "../../testSteps/testMethods";
///<reference types="cypress" />

describe('Tool MyEntities', () => {
    beforeEach(() => {
      CreateUser(web, userData)
    }),
   
   it('MyEntities - Navigation Tabs', () => {
        cy.visit(web + '/tool/MyEntities')
        MyEntities.getToolBar().children().should('have.length', 6)
         MyEntities.getAllTabs().children().should('have.length', 4)

    })
})
