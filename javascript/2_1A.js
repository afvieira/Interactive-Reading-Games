fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
fabric.Object.prototype.transparentCorners = false;

var canvas = new fabric.Canvas('canvas', {
  selection: false,
  hoverCursor: 'pointer'
});

var answers = {
  1: 'X',
  2: 'X',
  3: 'V',
  4: 'V'
};

var canvasHeight,
  canvasWidth;

function initialize() {
  var container = $('#container')[0];
  canvasHeight = container.clientHeight;
  canvasWidth = container.clientWidth;

  canvas.setHeight(canvasHeight);
  canvas.setWidth(canvasWidth);
};

function loadImagesAndSounds() {
  fabric.Image.fromURL('../images/2_1A/speaker.png', function(img) {
    canvas.add(img.set({
      left: 50,
      top: 50,
      hasControls: false,
      hasBorders: false,
      lockMovementX: true,
      lockMovementY: true,
      opacity: 0.9
    }).scale(0.07));

    img.on('mousedown', function() {
      var audio = $("#audio_silaba")[0];
      audio.play();
    });
  });

  fabric.Image.fromURL('../images/2_1A/cao.png', function(img) {
    canvas.add(img.set({
      left: 200,
      top: 100,
      hasControls: false,
      hasBorders: false,
      lockMovementX: true,
      lockMovementY: true,
      opacity: 0.9
    }).scale(0.4));

    img.on('mousedown', function() {
      var audio = $("#audio_cao")[0];
      audio.play();
    });

    positionGroup(
      $('#btn_1_X'),
      $('#btn_1_V'),
      img);
  });

  fabric.Image.fromURL('../images/2_1A/camelo.png', function(img) {
    canvas.add(img.set({
      left: 500,
      top: 100,
      hasControls: false,
      hasBorders: false,
      lockMovementX: true,
      lockMovementY: true,
      opacity: 0.9
    }).scale(0.15));

    img.on('mousedown', function() {
      var audio = $("#audio_camelo")[0];
      audio.play();
    });

    positionGroup(
      $('#btn_2_X'),
      $('#btn_2_V'),
      img);
  });

  fabric.Image.fromURL('../images/2_1A/gato.png', function(img) {
    canvas.add(img.set({
      left: 200,
      top: 300,
      hasControls: false,
      hasBorders: false,
      lockMovementX: true,
      lockMovementY: true,
      opacity: 0.9
    }).scale(0.3));

    img.on('mousedown', function() {
      var audio = $("#audio_gato")[0];
      audio.play();
    });

    positionGroup(
      $('#btn_3_X'),
      $('#btn_3_V'),
      img);
  });

  fabric.Image.fromURL('../images/2_1A/galinha.png', function(img) {
    canvas.add(img.set({
      left: 500,
      top: 300,
      hasControls: false,
      hasBorders: false,
      lockMovementX: true,
      lockMovementY: true,
      opacity: 0.9
    }).scale(0.3));

    img.on('mousedown', function() {
      var audio = $("#audio_galinha")[0];
      audio.play();
    });

    positionGroup(
      $('#btn_4_X'),
      $('#btn_4_V'),
      img);
  });
};

function positionGroup(btn_V, btn_X, img) {
  btn_X[0].style.width = 30;
  btn_X[0].style.position = "absolute";
  btn_X[0].style.left = img.left - img.currentWidth / 2;
  btn_X[0].style.top = img.top + img.currentHeight / 2;

  btn_V[0].style.width = 30;
  btn_V[0].style.position = "absolute";
  btn_V[0].style.left = img.left + img.currentWidth / 2 - 30;
  btn_V[0].style.top = img.top + img.currentHeight / 2;
}

function loadEvents() {

  /* Button Events
  ------------------------------------------------ */
  $('#btn_1_V').click(function(e) {
    showAnswer($(this).val(), 1);
  });
  $('#btn_2_V').click(function(e) {
    showAnswer($(this).val(), 2);
  });
  $('#btn_3_V').click(function(e) {
    showAnswer($(this).val(), 3);
  });
  $('#btn_4_V').click(function(e) {
    showAnswer($(this).val(), 4);
  });

  $('#btn_1_X').click(function(e) {
    showAnswer($(this).val(), 1);
  });
  $('#btn_2_X').click(function(e) {
    showAnswer($(this).val(), 2);
  });
  $('#btn_3_X').click(function(e) {
    showAnswer($(this).val(), 3);
  });
  $('#btn_4_X').click(function(e) {
    showAnswer($(this).val(), 4);
  });


  function showAnswer(val, img_num) {
    if (val == answers[img_num]) {
      alert("ACERTOU");
    } else {
      alert("FALHOU");
    };
  };
  /* Events on canvas
  ------------------------------------------------ */
  canvas.on({
    'mouse:over': function(evt) {
      evt.target.setOpacity(1);
      canvas.renderAll();
    },
    'mouse:out': function(evt) {
      evt.target.setOpacity(0.9);
      canvas.renderAll();
    },
    'mouse:down': function(evt) {
      console.log("position: X:" + evt.e.offsetX + " Y:" + evt.e.offsetY);
    }
  });
};

/* Application Controller
------------------------------------------------ */
var App = function() {
  "use strict";

  return {
    //main function
    init: function() {
      initialize();
      loadImagesAndSounds();
      loadEvents();
    }
  };
}();
