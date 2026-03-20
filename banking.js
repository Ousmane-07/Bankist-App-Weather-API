// STATED CONSTANTS \\


const account1 = [500, -600, -400, 800]
const account2 = [-300, -100, 500, 623]
const account3 = [724, 681, -229, 444]

const accounts = [account1, account2, account3]

// DOM ELEMENTS \\

const movement = document.querySelector('.movement-container');

// RENDER \\

const displayMovements = function(acc) { 

    movement.innerHTML = '';

    acc.forEach((mov, i) => {
        
        const type = mov > 0 ? 'deposit' : 'withdraw'

        const html = `<div class="movement">
             <p class="${type}">${i + 1}:${type}</p>
             <p class="movement_balance">$${mov}</p>
            </div>`
        ;
        movement.insertAdjacentHTML('beforeend', html)
        
    })
}

displayMovements(accounts[0]);