const URL = "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login";
const CUSTOMER_LOGIN = "button[ng-click='customer()']";
const DDL_YOURNAME = "#userSelect";
const LOGIN = "button[type='submit']";
const WITHDRAWAL = "button[ng-click='withdrawl()']";
const INPUT_AMOUNT = "input[ng-model='amount']";
const SUBMIT_AMOUNT = "button[type='submit']";
const INPUT_START = "input[ng-model='startDate']";
const INPUT_END = "input[ng-model='end']";


export default class CustomerLogin {
    get getURL() {
        return URL
    }

    get getCustomerLogin() {
        return cy.get(CUSTOMER_LOGIN)
    }
    get getYourName() {
        return cy.get(DDL_YOURNAME)
    }

    get getLogin() {
        return cy.get(LOGIN)
    }

    get getWithDrawl() {
        return cy.get(WITHDRAWAL)
    }

    get getInputAmount () {
        return cy.get(INPUT_AMOUNT)
    }

    get getSubmitAmount () {
        return cy.get(SUBMIT_AMOUNT)
    }
    get getStartDate () {
        return cy.get(INPUT_START)
    }

    get getStartEnd () {
        return cy.get(INPUT_END)
    }
}