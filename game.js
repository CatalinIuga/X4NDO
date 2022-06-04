var XorO = 'img/X.png';
var game_end = false;
var winner_positions = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']];
var p1_pos = [];
var p2_pos = [];
var players = { p1: "player 1", p2: "player 2" };
var turn = players['p1'];

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
        if (turn == 'player 1')
            p1_pos.push(object.id);
        else
            p2_pos.push(object.id);
        document.getElementById(object.id).readOnly = true;
        gamestate();
        if (game_end == false)
            change();
    }

}

function end_game() {
    for (i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).readOnly = true;
    }
    game_end == true;
}

function gamestate() {
    let game_finished = false;
    let message = turn;
    winner_positions.forEach(solution => {
        if (p1_pos.length > 0) {
            game_finished = solution.every(element => {
                return p1_pos.includes(element);
            });
            if (game_finished == true) {
                message = turn + " WON! ";
                end_game();
            }
        }
        if (p2_pos.length > 0) {
            game_finished = solution.every(element => {
                return p2_pos.includes(element);
            });
            if (game_finished == true) {
                message = turn + " WON! ";
                end_game();
            }
        }
    });
    console.log(turn);
    document.getElementById('game_status').innerHTML = message;
}

function reset() {
    for (i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).readOnly = false;
        document.getElementById(i.toString()).src = 'img/empty.png';
    }
    XorO = 'img/X.png';
    game_end = false;
    winner_positions = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '8']];
    p1_pos = [];
    p2_pos = [];
    players = { p1: "player 1", p2: "player 2" };
    turn = players['p1'];
}