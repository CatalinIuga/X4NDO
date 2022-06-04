var XorO = 'img/X.png';

var game = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false };

var players = { p1: "player 1", p2: "player 2" };
var turn = players['p1'];
console.log(turn);

function change() {
    if (XorO == 'img/X.png') {
        XorO = 'img/O.png'
        turn = players['p2'];
    }
    else {
        XorO = 'img/X.png'
        turn = players['p1'];
    }
}

function draw(object) {
    if (document.getElementById(object.id).readOnly == false) {
        document.getElementById(object.id).src = XorO;
        document.getElementById(object.id).readOnly = true;
        console.log(document.getElementById(object.id).src, turn)
        change();
    }
}

function gamestate() {

}