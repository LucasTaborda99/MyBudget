// SELECT ELEMENTS
const balanceE1 = document.querySelector(".balance .value");
const incomeTotalE1 = document.querySelector(".income-total");
const outcomeTotalE1 = document.querySelector(".outcome-total");
const incomeE1 = document.querySelector("#income");
const expenseE1 = document.querySelector("#expense");
const allE1 = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#outcome .list");
const allList = document.querySelector("#all .list");

// SELECT BUTTONS
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

// SELECT INPUTS
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

// VARIABLES
let ENTRY_LIST = [];
let balance = 0, income = 0, outcome = 0;

const DELETE = "delete", EDIT = "edit";

// EVENT LISTENERS
expenseBtn.addEventListener("click", function(){
    show(expenseE1);
    hide( [incomeE1, allE1] );
    active(expenseBtn);
    inactive( [incomeBtn, allBtn] );
})
incomeBtn.addEventListener("click", function(){
    show(incomeE1);
    hide( [expenseE1, allE1] );
    active(incomeBtn);
    inactive( [expenseBtn, allBtn]);
})
allBtn.addEventListener("click", function(){
    show(allE1);
    hide( [incomeE1, expenseE1] );
    active(allBtn);
    inactive( [incomeBtn, expenseBtn] );
})

// HELPERS

