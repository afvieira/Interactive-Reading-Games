fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
fabric.Object.prototype.transparentCorners = false;

var canvas = new fabric.Canvas('canvas', {
    selection: false
});

var answers = {
    1: 1,
    2: 3,
    3: 2,
    4: 2
};

var canvasHeight,
    canvasWidth;

function initialize() {
    var container = document.getElementById("container");
    canvasHeight = container.clientHeight;
    canvasWidth = container.clientWidth;

    canvas.setHeight(canvasHeight);
    canvas.setWidth(canvasWidth);
};

function loadImagesAndSounds() {
    fabric.Image.fromURL('../images/1/cao.png', function(img) {
        canvas.add(img.set({
            left: 150,
            top: 100,
            selectable: false
        }).scale(0.4));

        img.on('mousedown', function() {
            var audio = $("#audio_cao")[0];
            audio.play();
        });

        positionGroup(
            document.getElementById('btn_1_minus'),
            document.getElementById('btn_1_plus'),
            document.getElementById('btn_1_Valid'),
            document.getElementById('txt_1_num'),
            img);
    });

    fabric.Image.fromURL('../images/1/camelo.png', function(img) {
        canvas.add(img.set({
            left: 450,
            top: 100,
            selectable: false
        }).scale(0.15));

        img.on('mousedown', function() {
            var audio = $("#audio_camelo")[0];
            audio.play();
        });

        positionGroup(
            document.getElementById('btn_2_minus'),
            document.getElementById('btn_2_plus'),
            document.getElementById('btn_2_Valid'),
            document.getElementById('txt_2_num'),
            img);
    });

    fabric.Image.fromURL('../images/1/gato.png', function(img) {
        canvas.add(img.set({
            left: 150,
            top: 300,
            selectable: false
        }).scale(0.3));

        img.on('mousedown', function() {
            var audio = $("#audio_gato")[0];
            audio.play();
        });

        positionGroup(
            document.getElementById('btn_3_minus'),
            document.getElementById('btn_3_plus'),
            document.getElementById('btn_3_Valid'),
            document.getElementById('txt_3_num'),
            img);
    });

    fabric.Image.fromURL('../images/1/urso.png', function(img) {
        canvas.add(img.set({
            left: 450,
            top: 300,
            selectable: false
        }).scale(0.3));

        img.on('mousedown', function() {
            var audio = $("#audio_urso")[0];
            audio.play();
        });

        positionGroup(
            document.getElementById('btn_4_minus'),
            document.getElementById('btn_4_plus'),
            document.getElementById('btn_4_Valid'),
            document.getElementById('txt_4_num'),
            img);
    });
};

function positionGroup(btn_minus, btn_plus, btn_valid, txt_num, img) {
    btn_minus.style.width = 30;
    btn_minus.style.position = "absolute";
    btn_minus.style.left = img.left - img.currentWidth / 2;
    btn_minus.style.top = img.top + img.currentHeight / 2;

    btn_plus.style.width = 30;
    btn_plus.style.position = "absolute";
    btn_plus.style.left = img.left + img.currentWidth / 2 - 30;
    btn_plus.style.top = img.top + img.currentHeight / 2;

    btn_valid.style.width = img.currentWidth;
    btn_valid.style.position = "absolute";
    btn_valid.style.left = img.left - img.currentWidth / 2;
    btn_valid.style.top = img.top + img.currentHeight / 2 + 20;

    txt_num.style.width = img.currentWidth - 60;
    txt_num.style.position = "absolute";
    txt_num.style.left = img.left - img.currentWidth / 2 + 30;
    txt_num.style.top = img.top + img.currentHeight / 2;
}

/* Button Events
------------------------------------------------ */
$('#btn_1_plus').click(function(e) {
    var num = parseInt($('#txt_1_num').val());
    if (num < 5) {
        num += 1;
        $('#txt_1_num').val(num);
    };
});
$('#btn_2_plus').click(function(e) {
    var num = parseInt($('#txt_2_num').val());
    if (num < 5) {
        num += 1;
        $('#txt_2_num').val(num);
    };
});
$('#btn_3_plus').click(function(e) {
    var num = parseInt($('#txt_3_num').val());
    if (num < 5) {
        num += 1;
        $('#txt_3_num').val(num);
    };
});
$('#btn_4_plus').click(function(e) {
    var num = parseInt($('#txt_4_num').val());
    if (num < 5) {
        num += 1;
        $('#txt_4_num').val(num);
    };
});

$('#btn_1_minus').click(function(e) {
    var num = parseInt($('#txt_1_num').val());
    if (num > 1) {
        num -= 1;
        $('#txt_1_num').val(num);
    };
});
$('#btn_2_minus').click(function(e) {
    var num = parseInt($('#txt_2_num').val());
    if (num > 1) {
        num -= 1;
        $('#txt_2_num').val(num);
    };
});
$('#btn_3_minus').click(function(e) {
    var num = parseInt($('#txt_3_num').val());
    if (num > 1) {
        num -= 1;
        $('#txt_3_num').val(num);
    };
});
$('#btn_4_minus').click(function(e) {
    var num = parseInt($('#txt_4_num').val());
    if (num > 1) {
        num -= 1;
        $('#txt_4_num').val(num);
    };
});

$('#btn_1_Valid').click(function(e) {
    var num = parseInt($('#txt_1_num').val());
    showAnswer(num, 1);
});
$('#btn_2_Valid').click(function(e) {
    var num = parseInt($('#txt_2_num').val());
    showAnswer(num, 2);
});
$('#btn_3_Valid').click(function(e) {
    var num = parseInt($('#txt_3_num').val());
    showAnswer(num, 3);
});
$('#btn_4_Valid').click(function(e) {
    var num = parseInt($('#txt_4_num').val());
    showAnswer(num, 4);
});

function showAnswer(num, img_num) {
    if (num == answers[img_num]) {
        alert("ACERTOU");
    } else {
        alert("FALHOU");
    };
}

/* Application Controller
------------------------------------------------ */

canvas.on('mouse:down', function(evt) {
    console.log("position: X:" + evt.e.offsetX + " Y:" + evt.e.offsetY);
});

/* Application Controller
------------------------------------------------ */
var App = function() {
    "use strict";

    return {
        //main function
        init: function() {
            initialize();
            loadImagesAndSounds();
        }
    };
}();
