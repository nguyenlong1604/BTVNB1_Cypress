import CustomerLoginUI from "../page/CustomerLoginUI";
import Withdrawal from "../../fixtures/Withdrawal.json";

//import Orange from "../../fixtures/Orange.json";

const Bank = new CustomerLoginUI()

describe("Bank", () => {

    it("TC1", () => {
        //login
        cy.visit(Bank.getURL);
        Bank.getCustomerLogin.click();
        Bank.getYourName.should("be.visible").should("be.enabled").select('Harry Potter');
        Bank.getLogin.click();
        //Withdrawal
        Bank.getWithDrawl.click();
        cy.inputText(Bank.getInputAmount, Withdrawal.data_amount.amount);
        Bank.getSubmitAmount.click();
        //Transactions
        Bank.getStartDate
        
    })

    
})
