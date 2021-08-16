// targeting the elements
const depositButton = document.getElementById("deposit-btn")
const withdrawButton = document.getElementById("withdraw-btn")
// balance 



// depositButton.addEventListener("click", function () {
//     const depositInput = document.getElementById("deposit-input")
//     const depositValue = parseFloat(depositInput.value)

//     const depositTotal = document.getElementById("deposit-total")
//     const depositTotalValue = parseFloat(depositTotal.innerText);
//     const depositAmount = depositTotalValue + depositValue
//     depositTotal.innerText = depositAmount

//     // update balance
//     const balanceTotal = document.getElementById("balance-total")
//     const balanceTotalValue = parseFloat(balanceTotal.innerText)
//     const balanceAmount = balanceTotalValue + depositValue
//     balanceTotal.innerText = balanceAmount

//     // clear input field
//     depositInput.value = ""
// })



depositButton.addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input")
    const depositValue = parseFloat(depositInput.value)

    const depositTotal = document.getElementById("deposit-total")
    const depositTotalValue = parseFloat(depositTotal.innerText);
    const depositAmount = depositTotalValue + depositValue
    if (depositValue > 0) {
        depositTotal.innerText = depositAmount
    } else {
        alert("Please Give Amount You Want to Deposit")
    }

    // update balance
    const balanceTotal = document.getElementById("balance-total")
    const balanceTotalValue = parseFloat(balanceTotal.innerText)
    const balanceAmount = balanceTotalValue + depositValue
    if (depositValue > 0) {
        balanceTotal.innerText = balanceAmount
    }
    // clear input field
    depositInput.value = ""
})



withdrawButton.addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input")
    const withdrawValue = parseFloat(withdrawInput.value)

    const withdrawTotal = document.getElementById("withdraw-total")
    const withdrawTotalValue = parseFloat(withdrawTotal.innerText)

    const withdrawAmount = withdrawTotalValue + withdrawValue
    if (withdrawValue > 0) {
        withdrawTotal.innerText = withdrawAmount
    } else {
        alert("Please Give Amount You Want to Withdraw")
    }

    // update balance
    const balanceTotal = document.getElementById("balance-total")
    const balanceTotalValue = parseFloat(balanceTotal.innerText)
    const balanceAmount = balanceTotalValue - withdrawValue
    if (withdrawValue > 0) {
        balanceTotal.innerText = balanceAmount
    }

    // clear input field
    withdrawInput.value = ""

})


