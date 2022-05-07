"use strict";

export function main(document){
    console.log('loading colorpicker script')

    // Startparameter und Farbpalette festlegen
    var rows = 25;
    var columns = 25;
    var numCols = 3;
    var colorMap = new Map();
    var palette = [
        "black", "maroon", "green", "navy",
        "gray", "red", "lime", "blue",
        "silver", "olive", "teal", "purple",
        "white", "yellow", "aqua", "fuchsia"
    ];
    var fragment = document.createDocumentFragment();

    // -- Start der HTML-Erstellung --
    var mainBody = document.getElementById("main");
    mainBody.setAttribute("style", "text-align: center;");

    var spielfeld = document.createElement("div");

    mainBody.appendChild(spielfeld);

    var btnDiv = document.createElement("div");
    mainBody.appendChild(btnDiv);

    var incrWidthBtn = document.createElement("button");
    incrWidthBtn.setAttribute("style", 
        "padding: 1em;" + 
        "text-align: center;"
    );
    btnDiv.appendChild(incrWidthBtn);
    incrWidthBtn.appendChild(document.createTextNode("+5 columns"));

    var decrWidthBtn = document.createElement("button");
    decrWidthBtn.setAttribute("style", 
        "padding: 1em;" + 
        "text-align: center;"
    );
    btnDiv.appendChild(decrWidthBtn);
    decrWidthBtn.appendChild(document.createTextNode("-5 columns"));

    var incrHeighthBtn = document.createElement("button");
    incrHeighthBtn.setAttribute("style", 
        "padding: 1em;" + 
        "text-align: center;"
    );
    btnDiv.appendChild(incrHeighthBtn);
    incrHeighthBtn.appendChild(document.createTextNode("+5 rows"));

    var decrHeightBtn = document.createElement("button");
    decrHeightBtn.setAttribute("style", 
        "padding: 1em;" + 
        "text-align: center;"
    );
    btnDiv.appendChild(decrHeightBtn);
    decrHeightBtn.appendChild(document.createTextNode("-5 rows"));

    var colDiv = document.createElement("div");
    colDiv.setAttribute("style",
        "display:grid;" + 
        "grid-template-columns: auto auto;" +
        "grid-template-rows: auto;" +
        "margin: auto;" +
        "width: 300px"
    );
    mainBody.appendChild(colDiv);

    var sliderText = document.createElement("p");
    sliderText.appendChild(document.createTextNode("Number of Colors:"));
    sliderText.setAttribute("style", 
        "padding: 1em;" +
        "grid-column: 1 / span 1;"
    );
    colDiv.appendChild(sliderText);

    var colSlider = document.createElement("input");
    colSlider.type = "range";
    colSlider.min = "2";
    colSlider.max  = palette.length - 1;
    colSlider.value = numCols;
    colSlider.class = "slider";
    colSlider.setAttribute("style",
        "padding: 1em;" + 
        "grid-column: 2 / span 1;"
    );
    colDiv.appendChild(colSlider);

    var colNumDiv = document.createElement("div");
    colNumDiv.setAttribute("style",
        "display:grid;" + 
        "grid-template-columns: " + "auto ".repeat(numCols * 2) +
        "grid-template-rows: auto;" +
        "margin: auto;" +
        "text-align: center" + 
        "vertical-align: bottom"
    );
    mainBody.appendChild(colNumDiv);

    // -- Ende der HTML-Erstellung --

    drawField();

    function drawField() {

        numCols = parseInt(colSlider.value);
        // Spielfeld in AbhÃ¤ngigkeit der Breite und HÃ¶he stylen
        spielfeld.setAttribute("style", 
            "text-align: center;" +
            "padding: 1em;" +
            "display: grid;" +
            "margin: auto; width: " + (columns * 10) + "px;" +
            "grid-template-columns:" + "auto ".repeat(columns) + ";" +
            "grid-template-rows:" + "auto ".repeat(rows) + ";"
        );
       
        // Divs erstellen und stylen
        for (let i = 0; i < rows * columns; i++) {
            var div = document.createElement("div");
            let divColNumber = Math.floor(Math.random() * numCols);
            div.setAttribute("style", 
                "background-color:" + palette[divColNumber] + ";" +
                "height:10px;width:10px;" +
                "grid-column:" + (i % columns + 1) + " / span 1;" + 
                "grid-row:auto;"
            );
            div.addEventListener("click", swapColors);
            fragment.appendChild(div);
        }
            
        spielfeld.appendChild(fragment);
        drawColorList();
    }

    function drawColorList() {
        // Farben zÃ¤hlen und anzeigen
        for (let i = 0; i < numCols + 1; i++) {
            colorMap.set(palette[i], spielfeld.querySelectorAll("[style*=" + palette[i] + "]").length);            
        }

        for (let i = 0; i < numCols + 1; i++) {
            var colExample = document.createElement("div");
            colExample.setAttribute("style",
                "background-color:" + palette[i] + ";" + 
                "height:10px;width:20px;" + 
                "outline: 1px solid black;" +
                "grid-column:" + (i * 2 + 1) + 
                "vertical-align: bottom"
            );
            var colNum = document.createElement("p");
            colNum.setAttribute("style",
                "grid-column:" + (i * 2 + 2) + ";" +
                "font-family: sans-serif;" + 
                "font-size:10px;" +
                "margin-top: 0em;" +
                "margin-right: 1em;" +
                "margin-left: 0.5em"
            );
            colNum.appendChild(document.createTextNode(":" + colorMap.get(palette[i])));
            colNumDiv.style.width = (50 * numCols) + "px"; 
            colNumDiv.appendChild(colExample);
            colNumDiv.appendChild(colNum);
        }
    }

    function clearNode(node) {
        while (node.hasChildNodes()) {
            node.removeChild(node.firstChild);
        }
    }
   

    function swapColors() {
        let unusedColor = findKeyByValue(colorMap, 0);
        let selectedColor = this.style["background-color"];
        let selectedDivs = spielfeld.querySelectorAll("[style*=" + selectedColor + "]");
        for (let i = 0; i < selectedDivs.length; i++) {
            selectedDivs[i].style.backgroundColor = unusedColor;            
        }
        clearNode(colNumDiv);
        drawColorList();
    }

    function findKeyByValue(map, value) {
        for (const key of map.keys()) {
            if (map.get(key) === value) {
                return key;
            }
        }
    }

    // EventListener fÃ¼r die Buttons und den Slider

    incrWidthBtn.addEventListener("click", function(){
        columns += 5;
        clearNode(spielfeld);
        clearNode(colNumDiv);
        drawField();
    });

    incrHeighthBtn.addEventListener("click", function(){
        rows += 5;
        clearNode(spielfeld);
        clearNode(colNumDiv);
        drawField();
    });

    decrWidthBtn.addEventListener("click", function(){
        columns -= 5;
        clearNode(spielfeld);
        clearNode(colNumDiv);
        drawField();
    });

    decrHeightBtn.addEventListener("click", function(){
        rows -= 5;
        clearNode(spielfeld);
        clearNode(colNumDiv);
        drawField();
    });

    colSlider.addEventListener("mouseup",function() {
        clearNode(spielfeld);
        clearNode(colNumDiv);
        drawField();
    });
 }; 