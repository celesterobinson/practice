var name = "Celeste";
var welcome = `Howdy ${name}, please check your order:`;

var sign = "Montague House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById("greeting");
el.textContent = welcome;

var elSign = document.getElementById("userSign");
elSign.textContent = sign;

var elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

var elSubtotal = document.getElementById("subTotal");
elSubtotal.textContent = `$${subTotal}`;

var elShipping = document.getElementById("shipping");
elShipping.textContent = `$${shipping}`;

var elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = `$${grandTotal}`;