var state= {
	// 'celebs' is an array of information about each celeb
	"celebs":[
		{
			"name": "Celeb name",
			"image": "image.jpg",
			"occupation": "Current job",
			"quote": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate recusandae ut impedit perspiciatis, dolore eum, voluptatem deleniti expedita nobis nesciunt qui, corrupti soluta! Unde, nemo eligendi eum, ea vel quo?"

		},
		{
			"name": "Celeb name",
			"image": "image.jpg",
			"occupation": "Current job",
			"quote": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate recusandae ut impedit perspiciatis, dolore eum, voluptatem deleniti expedita nobis nesciunt qui, corrupti soluta! Unde, nemo eligendi eum, ea vel quo?"

		},
		{
			"name": "Celeb name",
			"image": "image.jpg",
			"occupation": "Current job",
			"quote": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate recusandae ut impedit perspiciatis, dolore eum, voluptatem deleniti expedita nobis nesciunt qui, corrupti soluta! Unde, nemo eligendi eum, ea vel quo?"

		}
	]
}

var imagePath = './images/';

var appContainer = document.getElementById('appContainer');

var buttonContainer = document.getElementById('ndi-btn-container');

var panelContainer = document.getElementById('ndi-panel-container');


function headShotTemplate(){
	return state.celebs.map(function(celeb, index){
		return  `
			<div id="celeb${index}" class="ndi-btn">
				<div class="ndi-btn-image" style="backgroundImage:${imagePath}${celeb.image}"></div>
				<div class="ndi-btn-name-holder">
					<div class="ndi-btn-name">${celeb.name}</div>
					<div class="ndi-credentials">${celeb.occupation}</div>
				</div>
			</div>
		`
	}).join('')
}


function panelTemplate(index){
	//return state.celebs.map(function(celeb, index){
		return  `
			<div id="panel${index}" class="ndi-panel">
					<div class="ndi-panel-image" style="backgroundImage:${imagePath}${state.celebs[index].image}"></div>
					<div class="ndi-panel-text-holder">
							<div class="ndi-panel-name">${state.celebs[index].name}</div>
							<div class="ndi-panel-text">${state.celebs[index].quote}</div>
					</div>
					<div class="ndi-panel-close-icon"></div>
			</div>
		`
	//}).join('')
}



// function that will apply the template to a DOM element
function renderTemplate(into, content){
	into.innerHTML = content
}

renderTemplate( buttonContainer, headShotTemplate() )

renderTemplate( panelContainer, panelTemplate(0) )
