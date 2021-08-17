function inputAmount(inputId) {
    const inputField = document.getElementById(inputId)
    const inputValue = parseFloat(inputField.value)
    inputField.value = ""
    return inputValue
}
function amountShow(totalId, inputValue) {
    const total = document.getElementById(totalId)
    const totalValue = parseFloat(total.innerText);
    const amount = totalValue + inputValue
    total.innerText = amount
}
function updateBalance(input, cal) {
    const balanceTotal = document.getElementById("balance-total")
    const balanceTotalValue = parseFloat(balanceTotal.innerText)
    if (cal) {
        balanceTotal.innerText = balanceTotalValue + input
    } else {
        balanceTotal.innerText = balanceTotalValue - input
    }
}
// deposit button event 
document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositInput = inputAmount("deposit-input")
    if (depositInput > 0) {
        amountShow("deposit-total", depositInput)
        updateBalance(depositInput, true)
    } else {
        alert("Please Give Input Value")
    }
})
// withdraw button event
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const balanceTotal = document.getElementById("balance-total")
    const balanceTotalValue = parseFloat(balanceTotal.innerText)
    const withdrawInput = inputAmount("withdraw-input")
    if (withdrawInput > 0 && withdrawInput <= balanceTotalValue) {
        amountShow("withdraw-total", withdrawInput)
        updateBalance(withdrawInput, false)
    } else if (withdrawInput > balanceTotalValue) {
        alert("You Don't Have Sufficient Balance")
    } else {
        alert("Please Give Input Value")
    }
})