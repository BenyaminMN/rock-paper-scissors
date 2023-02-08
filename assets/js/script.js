let pointsUser = 0;
let pointsPC = 0;

let instructions = document.querySelector("#instructions");
let containerPointsUser = document.querySelector("#points-user");
let containerPointsPC = document.querySelector("#points-computer");
let message = document.querySelector("#message");
let containerWinPoint= document.querySelector("#win-point");
let chooseWeapon = document.querySelector("#choose-weapon");

let containerChoiceUser = document.querySelector("#choice-user");
let containerChoicePC = document.querySelector("#choice-computer");

let buttonsWeapons = document.querySelectorAll(".weapon");
buttonsWeapons.forEach(button => {
    button.addEventListener("click", startTurn);
});

function startTurn(e) {

    let choicePC = Math.floor(Math.random() * 3);
    let choiceUser = e.currentTarget.id;

    // rock => 0
    // paper => 1
    // scissor => 2

    if(choicePC === 0) {
        choicePC = "rock🧱"
    } else if (choicePC === 1) {
        choicePC = "paper📋"
    } else if (choicePC === 2) {
        choicePC = "scissor✂️"
    }

    // rock wins over scissor
    // scissor wins over paper
    // paper wins over rock
    // if you choose the same as the computer it is a draw

    if (
        (choiceUser === "rock🧱" && choicePC === "scissor✂️")
        (choiceUser === "scissor✂️" && choicePC === "paper📋")
        (choiceUser === "paper📋" && choicePC === "rock🧱")
    ) {
        winUser();
    } else if (
        (choiceUser === "rock🧱" && choicePC === "scissor✂️")
        (choiceUser === "scissor✂️" && choicePC === "paper📋")
        (choiceUser === "paper📋" && choicePC === "rock🧱")
    ) {
        winPC();
    } else {
        draw();        
    }

    message.classList.remove("disabled");
    containerChoiceUser.innerText = choiceUser;
    containerChoicePC.innerText = choicePC;

    if (pointsUser === 5) {

        if (pointsUser === 5) {
            instructions.innerText = "🔥 You won! 🔥"
        }

        if (pointsPC === 5) {
            instructions.innerText = "😭 The computer won! 😭"
        }

        chooseWeapon.classList.add("disabled");
        restart.classList.remove("disabled");
        restart.addEventListener("click", restartGame);
    }
}

function winUser() {
    pointsUser++;
    containerPointsUser.innerText = pointsUser;
    containerWinPoint.innerText = "You won a point! 🔥"
}

function winPC() {
    pointsPC++;
    containerPointsPC.innerText = pointsUser;
    containerWinPoint.innerText = "The computer won a point! 😭"
}

function draw() {
    containerWinPoint.innerText = "Draw! 😱"
}

function restartGame() {
    restart.classList.add("disabled");
    chooseWeapon.classList.remove("disabled");
    message.classList.add("disabled");

    pointsUser = 0;
    pointsPC = 0;

    containerPointsUser = pointsUser;
    containerPointsPC = pointsPC;

    instructions.innerText = "First to get 5 points wins."
}

