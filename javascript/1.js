var canvas = new fabric.Canvas('canvas', {
    selectable: false
});

var text;

function initialize() {
    var container = document.getElementById("container");

    canvas.setHeight(container.clientHeight);
    canvas.setWidth(container.clientWidth);

    text = new fabric.Text('experiencia', {
        left: 200,
        top: 300
    });
    canvas.add(text);
};

function loadImages() {

    fabric.Image.fromURL('../images/1/cao.png', function(img) {
        img.set('id', 'cao');
        img.setLeft(100);
        img.setTop(50);
        img.scale(0.3);
        canvas.add(img);
    });

    fabric.Image.fromURL('../images/1/camelo.png', function(img) {
        img.setLeft(250);
        img.setTop(50);
        img.scale(0.2);
        canvas.add(img);
    });

    fabric.Image.fromURL('../images/1/gato.png', function(img) {
        img.setLeft(450);
        img.setTop(50);
        img.scale(0.35);
        canvas.add(img);
    });
};

var count = 0;

canvas.on('mouse:down', function(o) {
    console.log(o.target);
    if (o.target && o.target.id === "cao") {
        text.setText(count++);
    };
    canvas.rendarall();
});

/* Application Controller
------------------------------------------------ */
var App = function() {
    "use strict";

    return {
        //main function
        init: function() {
            initialize();
            loadImages();
        }
    };
}();
