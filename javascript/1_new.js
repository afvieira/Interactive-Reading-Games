fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
fabric.Object.prototype.transparentCorners = false;

//Variáveis globais
var canvasHeight,
  canvasWidth,
  canvas,
  divBtns;

var images = {
  "cao": "../images/1/cao.png",
  "camelo": "../images/1/camelo.png",
  "gato": "../images/1/gato.png",
  "urso": "../images/1/urso.png",
};

var answers = {
  "cao": 1,
  "camelo": 3,
  "gato": 2,
  "urso": 2
};

// $.each(answers, function(key, value) {
//   // $("#test").append("<li>key: " + key + " value: " + value + "</li>");
//   $("#test").append("<li>resposta " + key + ": " + value + "</li>");
// });

function initialize() {
  canvas = new fabric.Canvas('canvas', {
    selection: false,
    hoverCursor: 'pointer'
  });

  canvasHeight = $('#container')[0].clientHeight;
  canvasWidth = $('#container')[0].clientWidth;

  canvas.setHeight(canvasHeight);
  canvas.setWidth(canvasWidth);
};

function loadButtons() {
  var span, num;
  var colors = ['blue', 'red', 'green', 'yellow']

  divBtns = $(document.createElement('div'));
  $(divBtns).attr({
    id: 'buttons'
  });

  for (var i = 0; i < 5; i++) {
    span = $(document.createElement('span'));
    num = $(document.createElement('i'));
    $(span).attr({
      id: 'btn_' + (i + 1),
      class: 'btn-' + colors[i % colors.length] + ' btn',
      value: (i + 1)
    });

    // $(num).attr({
    //   class: 'btn-label'
    // });

    $(num).append(i + 1);
    $(num).appendTo(span);
    $(span).appendTo(divBtns)
  };

  $(divBtns).appendTo($('#container'));

  $(divBtns)[0].style.position = "absolute";
  $(divBtns)[0].style.left = (canvasWidth / 2) - ($(divBtns)[0].offsetWidth / 2);
  $(divBtns)[0].style.top = canvasHeight / 2 + 20;
};

function loadImage(imageURL) {
  fabric.Image.fromURL(imageURL, function(img) {
    canvas.add(img.set({
      left: canvasWidth / 2,
      top: canvasHeight / 2 - 100,
      hasControls: false,
      hasBorders: false,
      lockMovementX: true,
      lockMovementY: true,
      opacity: 0.9
    }).scale(0.5));
  });
};

$('body').on('click', '#buttons .btn', function() {
  coise($(this));
});

function coise(btn) {
  asd = btn.get();
  alert(btn.get());
};

function loadImagesAndSounds() {
  fabric.Image.fromURL('../images/1/cao.png', function(img) {
    canvas.add(img.set({
      left: 150,
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
      $('#btn_1_minus'),
      $('#btn_1_plus'),
      $('#btn_1_Valid'),
      $('#txt_1_num'),
      img);
  });

  fabric.Image.fromURL('../images/1/camelo.png', function(img) {
    canvas.add(img.set({
      left: 450,
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
      $('#btn_2_minus'),
      $('#btn_2_plus'),
      $('#btn_2_Valid'),
      $('#txt_2_num'),
      img);
  });

  fabric.Image.fromURL('../images/1/gato.png', function(img) {
    canvas.add(img.set({
      left: 150,
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
      $('#btn_3_minus'),
      $('#btn_3_plus'),
      $('#btn_3_Valid'),
      $('#txt_3_num'),
      img);
  });

  fabric.Image.fromURL('../images/1/urso.png', function(img) {
    canvas.add(img.set({
      left: 450,
      top: 300,
      hasControls: false,
      hasBorders: false,
      lockMovementX: true,
      lockMovementY: true,
      opacity: 0.9
    }).scale(0.3));

    img.on('mousedown', function() {
      var audio = $("#audio_urso")[0];
      audio.play();
    });

    positionGroup(
      $('#btn_4_minus'),
      $('#btn_4_plus'),
      $('#btn_4_Valid'),
      $('#txt_4_num'),
      img);
  });
};

function positionGroup(btn_minus, btn_plus, btn_valid, txt_num, img) {
  btn_minus[0].style.width = 30;
  btn_minus[0].style.position = "absolute";
  btn_minus[0].style.left = img.left - img.currentWidth / 2;
  btn_minus[0].style.top = img.top + img.currentHeight / 2;

  btn_plus[0].style.width = 30;
  btn_plus[0].style.position = "absolute";
  btn_plus[0].style.left = img.left + img.currentWidth / 2 - 30;
  btn_plus[0].style.top = img.top + img.currentHeight / 2;

  btn_valid[0].style.width = img.currentWidth;
  btn_valid[0].style.position = "absolute";
  btn_valid[0].style.left = img.left - img.currentWidth / 2;
  btn_valid[0].style.top = img.top + img.currentHeight / 2 + 20;

  txt_num[0].style.width = img.currentWidth - 60;
  txt_num[0].style.position = "absolute";
  txt_num[0].style.left = img.left - img.currentWidth / 2 + 30;
  txt_num[0].style.top = img.top + img.currentHeight / 2;
}

function loadEvents() {

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
      loadButtons();
      loadImage(images["cao"]);
      //loadImagesAndSounds();
      loadEvents();
    }
  };
}();
