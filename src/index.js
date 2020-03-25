import "./styles.css";
import $ from "jquery";
import html2canvas from "html2canvas";
import Canvas2Image from "./canvas2image";

const myHeading = document.querySelector(".title");
myHeading.textContent = "Logo Builder";
var sentences = ["Made in", " Freedom", "Cocoa", "Chocolate","Worksite"];
var sentenceList = document.querySelector("#sentences-id");

for (var i = 0; i < sentences.length; i++) {
  console.log(sentences[i]);
  var sentence = document.createElement("div");
  sentence.id = "sentence_" + i;
  sentence.draggable = "true";
  sentence.ondragstart = drag;
  sentence.ondrop = drop;
  sentence.ondragover = allowDrop;
  sentence.innerHTML = sentences[i];
  sentence.classList.add("sentences-id");
  sentenceList.append(sentence);
}

function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("Text", event.target.id);
}
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}

$(function() {
  $("#btnSave").click(function() {
    var canva = document.querySelector("#img-out");
    var context = document.querySelector("canvas");
    html2canvas(document.querySelector("#logo-badge")).then(function(canvas) {
     canva.appendChild(canvas);   
    });
  });
});
