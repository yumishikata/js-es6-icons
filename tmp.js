 $(function() {
	var icons = [
		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		}
	];
	const colore = [
		'orange',
		'green',
		'blue'
	]
	const container = $('.icons');
	colorIcons(icons, colore);
	print(icons, container);
});

//FUNCTIONS 

function print(array, container) {
	container.html('');
	array.forEach((element) => {
		const {name , prefix, family, color} = element;
		
		const insertHTML = 
		`
		<div>
			<i class= " ${family} ${prefix}${name}" style='color: ${color}'></i>
			<div class="nome">${name.toUpperCase()}</div>
		</div>
		`
	
		container.append(insertHTML);
	});	
} 

function colorIcons(icons, colors){
	const types = [];
	icons.forEach((element) => {
		if(!types.includes(element.type)){
			types.push(element.type);
		}
	});
	const coloredArray = icons.map((element) => {
		const indexType = types.indexOf(element.type);
		if(indexType!= -1) {
			element.color = colors[indexType];
		}
		return element;
	});
	return coloredArray;
}