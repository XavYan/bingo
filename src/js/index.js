const createCard = () => {
    const list = _.range(1,91);
    return _.shuffle(list).splice(0,15);
};

const showCard = (element, card) => {
    const divCard = document.querySelector(element);
    divCard.innerHTML = "";
    card.forEach(e => {
        divCard.innerHTML += `<div class="card-number number${e}">${e}</div>`;
    });
}

const newNumber = () => {
    let number = numberList.pop();
    const elements = document.querySelectorAll('.number' + number);

    document.querySelector('.bingo-number').textContent = number;
    document.querySelector('.numberList' + number).classList.add('labeled');

    elements.forEach(element => {
        element.classList.add("labeled");
        _.pull(playerCard, number);
        _.pull(cpuCard, number);
    });
    checkWinner();
}

const checkWinner = () => {
    if (playerCard.length === 0) {
        document.querySelector('.bingo button').disabled = true;
        alert("Has ganado!!");
    } else if (cpuCard.length === 0) {
        document.querySelector('.bingo button').disabled = true;
        alert("Has perdido!!");
    }
}

let numberList = _.shuffle(_.range(1, 91));
let playerCard = createCard();
let cpuCard = createCard();

showCard('.player-card', playerCard);
showCard('.cpu-card', cpuCard);

const divList = document.querySelector('.number-list');

divList.innerHTML = "";
_.range(1, 91).forEach (element => {
    divList.innerHTML += `<div class="numberList${element}">${element}</div>`;
});

document.querySelector('.bingo button').addEventListener('click', newNumber);