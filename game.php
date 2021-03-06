<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="game.css">
    <title>X4NDO</title>
</head>

<body class="body">
    <h1 name="title"></h1>
    <div class="game_area">
        <div class="row">
            <input class="top-left" id="1" type="image" onclick="draw(this)" src="img\empty.png">
            <input class="top-mid" id="2" type="image" onclick="draw(this)" src="img\empty.png">
            <input class="top-right" id="3" type="image" onclick="draw(this)" src="img\empty.png">
        </div>
        <div class="row">
            <input class="mid-left" id="4" type="image" onclick="draw(this)" src="img\empty.png">
            <input class="mid-mid" id="5" type="image" onclick="draw(this)" src="img\empty.png">
            <input class="mid-right" id="6" type="image" onclick="draw(this)" src="img\empty.png">
        </div>
        <div class="row">
            <input class="bot-left" id="7" type="image" onclick="draw(this)" src="img\empty.png">
            <input class="bot-mid" id="8" type="image" onclick="draw(this)" src="img\empty.png">
            <input class="bot-right" id="9" type="image" onclick="draw(this)" src="img\empty.png">
        </div>
    </div>
    <label id="game_status">player 1 starts</label>
    <button onclick="reset()">reset</button>
    <script src="/socket.io/socket.io.js"></script>
    <script>
        var socket = io();
    </script>
    <script src="game.js"></script>
</body>

</html>