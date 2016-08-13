(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(()=>{

	var state= {
		"celebs": require('./content.js')
	}

	var imagePath = '../images/';
	var appContainer = document.getElementById('appContainer');
	var buttonContainer = document.getElementById('ndi-btn-container');
	var panelContainer = document.getElementById('ndi-panel-container');


	function headShotTemplate(){
		return state.celebs.map(function(celeb, index){
			return  `
				<div id="celeb${index}" class="ndi-btn" data-index="${index}">
					<div class="ndi-btn-image" style="background-image:url('${imagePath}${celeb.image}')"></div>
					<div class="ndi-btn-name-holder">
						<div class="ndi-btn-name">${celeb.name}</div>
						<div class="ndi-credentials">${celeb.occupation}</div>
					</div>
				</div>
			`
		}).join('')
	}


	function panelTemplate(index){
		return  `
			<div id="panel${index}" class="ndi-panel">
				<div class="ndi-panel-image" style="background-image:url('${imagePath}${state.celebs[index].image}')"></div>
				<div class="ndi-panel-text-holder">
					<div class="ndi-panel-name">${state.celebs[index].name}</div>
					<div class="ndi-panel-text">${state.celebs[index].quote}</div>
				</div>
				<div id="ndiCloseBtn" class="ndi-panel-close-icon" style="background-image:url('${imagePath}nav_small_close.svg')"></div>
			</div>
		`
	}


	function renderTemplate(into, content){
		into.innerHTML = content
	}

	delegate('#appContainer', 'click', '.ndi-btn', ()=>{
		let index = closest(event.target, '.ndi-btn').getAttribute('data-index');
		console.log(index);
		renderTemplate( panelContainer, panelTemplate(index) )
	} );

	delegate('#appContainer', 'click', '#ndiCloseBtn', ()=>{
		renderTemplate(panelContainer, '');
	} );


	renderTemplate( buttonContainer, headShotTemplate() )



})()
},{"./content.js":2}],2:[function(require,module,exports){

var celebs = [
	{
		"name": "First title",
		"image": "4x3.jpg",
		"occupation": "Current job",
		"firstJob": "First job",
		"quote": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate recusandae ut impedit perspiciatis, dolore eum, voluptatem deleniti expedita nobis nesciunt qui, corrupti soluta! Unde, nemo eligendi eum, ea vel quo?"
	},
	{
		"name": "Second title",
		"image": "4x3.jpg",
		"occupation": "Current job",
		"firstJob": "First job",
		"quote": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate recusandae ut impedit perspiciatis, dolore eum, voluptatem deleniti expedita nobis nesciunt qui, corrupti soluta! Unde, nemo eligendi eum, ea vel quo?"
	},
	{
		"name": "Third title",
		"image": "4x3.jpg",
		"occupation": "Current job",
		"firstJob": "First job",
		"quote": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate recusandae ut impedit perspiciatis, dolore eum, voluptatem deleniti expedita nobis nesciunt qui, corrupti soluta! Unde, nemo eligendi eum, ea vel quo?"
	},
	{
		"name": "Fourth title",
		"image": "4x3.jpg",
		"occupation": "Current job",
		"firstJob": "First job",
		"quote": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate recusandae ut impedit perspiciatis, dolore eum, voluptatem deleniti expedita nobis nesciunt qui, corrupti soluta! Unde, nemo eligendi eum, ea vel quo?"
	}
	
]

module.exports = celebs
},{}]},{},[1,2]);
