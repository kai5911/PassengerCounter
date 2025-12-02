let countEl1 = document.getElementById("countone-el")
let countEl2 = document.getElementById("counttwo-el")
let historyEl = document.getElementById("history-el")
let count1 = 0
let count2 = 0

function incrementOne() {
  count1 = count1 + 1
  countEl1.innerText = count1
}

function incrementTwo() {
  count2 = count2 + 1
  countEl2.innerText = count2
}

function minusOne() {
  count1 = count1 - 1
  countEl1.innerText = count1
}

function minusTwo() {
  count2 = count2 - 1
  countEl2.innerText = count2
}

function save() {
  let score = "  |  " + count1 + " - " + count2 + "  |  "
  historyEl.textContent += score
  countEl1.textContent = 0
  countEl2.textContent = 0
  count1 = 0
  count2 = 0
}
