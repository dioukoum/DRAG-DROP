let itemSrc = null;
function drag(event) {
  itemSrc = event.target.src;
  document.querySelector(".graphic").classList.add("drag");
  document.querySelector(".graphic2").classList.add("drag");
  document.querySelector(".graphic3").classList.add("drag");
  document.querySelector(".graphic4").classList.add("drag");
  document.querySelector(".graphic5").classList.add("drag");
  document.querySelector(".graphic6").classList.add("drag");
  document.querySelector(".graphic7").classList.add("drag");
}
function drop(event) {
  let img = document.createElement("img");
  img.src = itemSrc;
  document.querySelector(".graphic").innerHTML = "";
  document.querySelector(".graphic").appendChild(img);
  document.querySelector(".graphic").classList.remove("drag");
  document.querySelector(".graphic2").classList.remove("drag");
  document.querySelector(".graphic3").classList.remove("drag");
  document.querySelector(".graphic4").classList.remove("drag");
  document.querySelector(".graphic5").classList.remove("drag");
  document.querySelector(".graphic6").classList.remove("drag");
  document.querySelector(".graphic7").classList.remove("drag");
}
function drop2(event) {
  let img = document.createElement("img");
  img.src = itemSrc;
  document.querySelector(".graphic2").innerHTML = "";
  document.querySelector(".graphic2").appendChild(img);
  document.querySelector(".graphic").classList.remove("drag");
  document.querySelector(".graphic2").classList.remove("drag");
  document.querySelector(".graphic3").classList.remove("drag");
  document.querySelector(".graphic4").classList.remove("drag");
  document.querySelector(".graphic5").classList.remove("drag");
  document.querySelector(".graphic6").classList.remove("drag");
  document.querySelector(".graphic7").classList.remove("drag");
}
function drop3(event) {
  let img = document.createElement("img");
  img.src = itemSrc;
  document.querySelector(".graphic3").innerHTML = "";
  document.querySelector(".graphic3").appendChild(img);
  document.querySelector(".graphic").classList.remove("drag");
  document.querySelector(".graphic2").classList.remove("drag");
  document.querySelector(".graphic3").classList.remove("drag");
  document.querySelector(".graphic4").classList.remove("drag");
  document.querySelector(".graphic5").classList.remove("drag");
  document.querySelector(".graphic6").classList.remove("drag");
  document.querySelector(".graphic7").classList.remove("drag");
}
function drop4(event) {
  let img = document.createElement("img");
  img.src = itemSrc;
  document.querySelector(".graphic4").innerHTML = "";
  document.querySelector(".graphic4").appendChild(img);
  document.querySelector(".graphic").classList.remove("drag");
  document.querySelector(".graphic2").classList.remove("drag");
  document.querySelector(".graphic3").classList.remove("drag");
  document.querySelector(".graphic4").classList.remove("drag");
  document.querySelector(".graphic5").classList.remove("drag");
  document.querySelector(".graphic6").classList.remove("drag");
  document.querySelector(".graphic7").classList.remove("drag");
}
function drop5(event) {
  let img = document.createElement("img");
  img.src = itemSrc;
  document.querySelector(".graphic5").innerHTML = "";
  document.querySelector(".graphic5").appendChild(img);
  document.querySelector(".graphic").classList.remove("drag");
  document.querySelector(".graphic2").classList.remove("drag");
  document.querySelector(".graphic3").classList.remove("drag");
  document.querySelector(".graphic4").classList.remove("drag");
  document.querySelector(".graphic5").classList.remove("drag");
  document.querySelector(".graphic6").classList.remove("drag");
  document.querySelector(".graphic7").classList.remove("drag");
}
function drop6(event) {
  let img = document.createElement("img");
  img.src = itemSrc;
  document.querySelector(".graphic6").innerHTML = "";
  document.querySelector(".graphic6").appendChild(img);
  document.querySelector(".graphic").classList.remove("drag");
  document.querySelector(".graphic2").classList.remove("drag");
  document.querySelector(".graphic3").classList.remove("drag");
  document.querySelector(".graphic4").classList.remove("drag");
  document.querySelector(".graphic5").classList.remove("drag");
  document.querySelector(".graphic6").classList.remove("drag");
  document.querySelector(".graphic7").classList.remove("drag");
}
function drop7(event) {
  let img = document.createElement("img");
  img.src = itemSrc;
  document.querySelector(".graphic7").innerHTML = "";
  document.querySelector(".graphic7").appendChild(img);
  document.querySelector(".graphic").classList.remove("drag");
  document.querySelector(".graphic2").classList.remove("drag");
  document.querySelector(".graphic3").classList.remove("drag");
  document.querySelector(".graphic4").classList.remove("drag");
  document.querySelector(".graphic5").classList.remove("drag");
  document.querySelector(".graphic6").classList.remove("drag");
  document.querySelector(".graphic7").classList.remove("drag");
}
function allowDrop(event) {
  event.preventDefault();
}

document.querySelector(".graphic").addEventListener("dblclick", (e) => {
  document.querySelector(".graphic").innerHTML = "";
});
document.querySelector(".graphic2").addEventListener("dblclick", (e) => {
  document.querySelector(".graphic2").innerHTML = "";
});
document.querySelector(".graphic3").addEventListener("dblclick", (e) => {
  document.querySelector(".graphic3").innerHTML = "";
});
document.querySelector(".graphic4").addEventListener("dblclick", (e) => {
  document.querySelector(".graphic4").innerHTML = "";
});
document.querySelector(".graphic5").addEventListener("dblclick", (e) => {
  document.querySelector(".graphic5").innerHTML = "";
});
document.querySelector(".graphic6").addEventListener("dblclick", (e) => {
  document.querySelector(".graphic6").innerHTML = "";
});
document.querySelector(".graphic7").addEventListener("dblclick", (e) => {
  document.querySelector(".graphic7").innerHTML = "";
});
