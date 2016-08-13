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
			`//end template
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
		`//end template
	}

	function renderTemplate(into, content){
		into.innerHTML = content
	}



	// render popup container with relevant content when thumbnail clicked
	delegate('#appContainer', 'click', '.ndi-btn', ()=>{
		let index = closest(event.target, '.ndi-btn').getAttribute('data-index');
		renderTemplate( panelContainer, panelTemplate(index) )
		panelContainer.style.display = 'block'
	} );

	// render popup container with no content when closeBtn clicked
	delegate('#appContainer', 'click', '#ndiCloseBtn', ()=>{
		renderTemplate(panelContainer, '');
		panelContainer.style.display = 'none'
	} );

	// render initial state
	renderTemplate( buttonContainer, headShotTemplate() )



})()