var currentLetter = "";
var clickCount = 0;
var gameOn = true;


$(".col-4").click((e) => {
    if (gameOn) {
        let clickprogression = [];
        let boxes = $(".box");
        if ($(e.target).text() === "") {
            clickCount++;
            if (clickCount % 2 === 0) {
                currentLetter = "O";
            } else {
                currentLetter = "X";
            }
            $(e.target).text(currentLetter);
            for (x of boxes) {
                clickprogression.push($(x).text())
            };
            console.log(clickprogression);
            checkWinner(clickprogression);
        }
    }
})

const winnerText = (winner) => {
    $("h2").css("color", "green");
    $("h2").text(`The winner is player ${winner}`);
    gameOn = false;
}


const checkWinner = (arr) => {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            continue;
        }
        if (i < 3 && arr[i] == arr[i + 3] && arr[i] == arr[i + 6]) {
            winnerText(arr[i]);
        }
        else if ((i == 0 | i == 3 | i == 6) && arr[i] == arr[i + 1] && arr[i] == arr[i + 2]) {
            winnerText(arr[i])
        }
        else if (i == 0 || i == 2) {
            switch (i) {
                case 0:
                    if (arr[i] == arr[4] && arr[i] == arr[8]) {
                        winnerText(arr[i]);
                    }
                    break;
                case 2:
                    if (arr[i] == arr[4] && arr[i] == arr[6]) {
                        winnerText(arr[i]);
                    }
                    break;
                default:
                    break;
            }
        }
        else {
            continue;
        }

    }
    let filledUp = arr.every((x) => x != "");
    if (filledUp && gameOn) {
        $("h2").css("color", "red");
        $("h2").text("It is a DRAW");
        gameOn = false;
    }
};

$(".btn").click(() => {
    currentLetter = "";
    clickCount = 0;
    gameOn = true;
    $("h2").text("");
    for (x of $(".box")) {
        $(x).text("");
    }

})

