"use strict";
// Spielfeldobjekt
function Spielfeld(width, height, fast) {
  this.width = width;
  this.height = height;
  this.fast = fast;

  var spielfeldTable = document.createElement("table");
  this.spielfeldTable = spielfeldTable;

  var spielStartButton = document.createElement("button");
  this.spielStartButton = spielStartButton;

  var counter = document.createElement("p");
  this.counter = counter;

  var points = 0;
  this.points = points;

  this.draw = function () {
    var fragment = document.createDocumentFragment();
    // Start-Button
    spielStartButton.textContent = "Start";
    spielStartButton.style.marginLeft = "auto";
    spielStartButton.style.marginRight = "auto";
    spielStartButton.style.marginBottom = "2em";
    fragment.appendChild(spielStartButton);

    // Spielfeld-Table
    for (let i = 0; i < height; i++) {
      var row = document.createElement("tr");
      spielfeldTable.appendChild(row);
      for (let i = 0; i < width; i++) {
        var column = document.createElement("td");
        column.setAttribute(
          "style",
          "border: 2px solid gray;" +
            "border-collapse: collapse;" +
            "width: 75px; height: 75px"
        );
        row.appendChild(column);
      }
    }
    spielfeldTable.setAttribute(
      "style",
      "border: 2px solid gray;" + "margin: auto;" + "border-collapse: collapse;"
    );
    fragment.appendChild(spielfeldTable);

    counter.textContent = "0";
    counter.setAttribute(
      "style",
      "width: 22px;" +
        "margin:auto;" +
        "margin-top: 1em;" +
        "border: 2px solid gray;" +
        "padding:1em;"
    );
    fragment.appendChild(counter);

    document.getElementById("hopps").appendChild(fragment);
  };

  this.reDrawPoints = function () {
    counter.textContent = this.points;
    document.getElementById("hopps").replaceChild(counter, counter);
  };
}

// X-Button-Objekt
function Target(spiel, speed) {
  var xButton = document.createElement("button");
  this.xButton = xButton;
  xButton.addEventListener("click", function () {
    if (!clicked) {
      spiel.points++;
      console.log("Aktuelle Punktzahl:" + spiel.points);
      spiel.reDrawPoints();
      xButton.style.backgroundColor = "red";
      let flash = window.setTimeout(function () {
        xButton.style.backgroundColor = "lightgrey";
      }, 100);
    }
    clicked = true;
  });
  var clicked = false;
  this.clicked = clicked;

  this.placeTarget = function () {
    xButton.textContent = "X";
    xButton.setAttribute(
      "style",
      "background-color: lightgrey;" +
        "border: none;" +
        "font-weight:bold;" +
        "margin: 0px;" +
        "width:50px;height:50px"
    );
    var randomCell =
      spiel.spielfeldTable.rows[parseInt(Math.random() * spiel.height)].cells[
        parseInt(Math.random() * spiel.width)
      ];
    randomCell.appendChild(xButton);
    var timeOut = window.setTimeout(function () {
      randomCell.removeChild(xButton);
    }, speed);
  };
}

// Spiellogik
function GameLogic(spiel) {
  var speed;
  this.speed = speed;

  this.start = function () {
    if (spiel.fast) {
      speed = 500;
    } else {
      speed = 2000;
    }
    var timer = window.setInterval(function () {
      var trgt = new Target(spiel, speed);
      trgt.placeTarget();
    }, speed);
    var endGame = window.setTimeout(function () {
      window.clearTimeout(timer);
    }, 15000);
  };
}

export function main() {
  // on load Einstellungen
  var fragment = document.createDocumentFragment();

  var inputDiv = document.createElement("div");
  inputDiv.id = "inputDiv";

  // Zeilen
  var widthSpan = document.createElement("span");
  widthSpan.appendChild(document.createTextNode("Anzahl Zeilen:"));
  inputDiv.appendChild(widthSpan);
  var widthInput = document.createElement("input");
  widthInput.type = "number";
  widthInput.min = 3;
  widthInput.max = 15;
  widthInput.value = 4;
  inputDiv.appendChild(widthInput);

  // Spalten
  var heightSpan = document.createElement("span");
  heightSpan.appendChild(document.createTextNode("Anzahl Zeilen:"));
  inputDiv.appendChild(heightSpan);
  var heightInput = document.createElement("input");
  heightInput.type = "number";
  heightInput.min = 3;
  heightInput.max = 15;
  heightInput.value = 4;
  inputDiv.appendChild(heightInput);

  fragment.appendChild(inputDiv);

  // Speed
  var buttonDiv = document.createElement("div");
  buttonDiv.id = "buttonDiv";
  var fast = false;
  var speedButton = document.createElement("button");
  speedButton.addEventListener("click", function () {
    // set speed und beschriftung Ã¤ndern
    if (fast) {
      fast = false;
      speedButton.textContent = "langsam";
    } else {
      fast = true;
      speedButton.textContent = "schnell";
    }
  });
  speedButton.appendChild(document.createTextNode("langsam"));
  buttonDiv.appendChild(speedButton);

  // Go
  var goButton = document.createElement("button");
  goButton.addEventListener("click", function () {
    // clear window
    while (document.getElementById("hopps").hasChildNodes()) {
      document
        .getElementById("hopps")
        .removeChild(document.getElementById("hopps").firstChild);
    }

    // spiel starten
    var width = widthInput.value;
    var height = heightInput.value;
    var spiel = new Spielfeld(width, height, fast);
    var game = new GameLogic(spiel);
    spiel.draw();
    spiel.spielStartButton.addEventListener("click", function () {
      game.start();
    });
  });
  goButton.appendChild(document.createTextNode("Start"));
  buttonDiv.appendChild(goButton);

  fragment.appendChild(buttonDiv);

  // Stylen und an body anhÃ¤ngen
  // stylen muss ausfallen, is nicht mit nextjs kompatibel
  var sArray = document.styleSheets;
  // sArray[0].insertRule("body { text-align: center;display: grid; }", 0);
  // sArray[0].insertRule("#inputDiv { padding: 1em; grid-row 1 }", 1);
  // sArray[0].insertRule("#buttonDiv { padding: 1em; grid-row: 2 }", 2);
  // sArray[0].insertRule("button { background-color: red; margin: 1em; }", 3);
  // sArray[0].insertRule("span { margin: 1em }", 4);
  document.getElementById("hopps").appendChild(fragment);
}
