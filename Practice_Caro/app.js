let board = [];
let data = "";
for (i = 0; i < 5; i++) {
    board[i] = [0, 0, 0, 0, 0];
}
for (i = 0; i < 5; i++) {
    data += "<br/>";
    for (j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
document.getElementById("caro").innerHTML = data;

function changevalue() {
    let positionX = +prompt("Nhập vị trí dòng: ");
    let positionY = +prompt("Nhập vị trí cột: ");
    console.log(positionY, positionX);
    data = "";
    board[positionX - 1][positionY -1] = "X";
    for (i = 0; i < 5; i++) {
        data += "<br/>";
        for (j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;";
        }
    }
    document.getElementById("caro").innerHTML = data;
}