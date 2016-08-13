(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {

	var state = {
		"celebs": require('./content.js')

	};

	var imagePath = '../images/';
	var appContainer = document.getElementById('appContainer');
	var buttonContainer = document.getElementById('ndi-btn-container');
	var panelContainer = document.getElementById('ndi-panel-container');

	function headShotTemplate() {
		return state.celebs.map(function (celeb, index) {
			return '\n\t\t\t\t<div id="celeb' + index + '" class="ndi-btn">\n\t\t\t\t\t<div class="ndi-btn-image" style="background-image:url(\'' + imagePath + celeb.image + '\')"></div>\n\t\t\t\t\t<div class="ndi-btn-name-holder">\n\t\t\t\t\t\t<div class="ndi-btn-name">' + celeb.name + '</div>\n\t\t\t\t\t\t<div class="ndi-credentials">' + celeb.occupation + '</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t';
		}).join('');
	}

	function panelTemplate(index) {
		return '\n\t\t\t<div id="panel' + index + '" class="ndi-panel">\n\t\t\t\t\t<div class="ndi-panel-image" style="background-image:url(\'' + imagePath + state.celebs[index].image + '\')"></div>\n\t\t\t\t\t<div class="ndi-panel-text-holder">\n\t\t\t\t\t\t\t<div class="ndi-panel-name">' + state.celebs[index].name + '</div>\n\t\t\t\t\t\t\t<div class="ndi-panel-text">' + state.celebs[index].quote + '</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="ndi-panel-close-icon" style="background-image:url(\'' + imagePath + 'nav_small_close.svg\')"></div>\n\t\t\t</div>\n\t\t';
	}

	function renderTemplate(into, content) {
		into.innerHTML = content;
	}

	renderTemplate(buttonContainer, headShotTemplate());
	renderTemplate(panelContainer, panelTemplate(0));
})();

},{"./content.js":2}],2:[function(require,module,exports){
"use strict";

var celebs = [{
	"name": "Name Here",
	"image": "4x3.jpg",
	"occupation": "Current job",
	"firstJob": "First job",
	"quote": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate recusandae ut impedit perspiciatis, dolore eum, voluptatem deleniti expedita nobis nesciunt qui, corrupti soluta! Unde, nemo eligendi eum, ea vel quo?"
}, {
	"name": "Name Here",
	"image": "4x3.jpg",
	"occupation": "Current job",
	"firstJob": "First job",
	"quote": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate recusandae ut impedit perspiciatis, dolore eum, voluptatem deleniti expedita nobis nesciunt qui, corrupti soluta! Unde, nemo eligendi eum, ea vel quo?"
}, {
	"name": "Name Here",
	"image": "4x3.jpg",
	"occupation": "Current job",
	"firstJob": "First job",
	"quote": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate recusandae ut impedit perspiciatis, dolore eum, voluptatem deleniti expedita nobis nesciunt qui, corrupti soluta! Unde, nemo eligendi eum, ea vel quo?"
}, {
	"name": "Name Here",
	"image": "4x3.jpg",
	"occupation": "Current job",
	"firstJob": "First job",
	"quote": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate recusandae ut impedit perspiciatis, dolore eum, voluptatem deleniti expedita nobis nesciunt qui, corrupti soluta! Unde, nemo eligendi eum, ea vel quo?"
}];

module.exports = celebs;

},{}]},{},[1]);