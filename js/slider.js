
// const slides = [
// 	'./img/01.jpg',
// 	'./img/02.jpg',
// 	'./img/03.jpg',
// 	'./img/04.jpg',
// 	'./img/05.jpg',
// ]

const app = new Vue({
    el: '#root',
    data: {
		// classeSlide: 'slide',
		// classeActive: 'active',

		slides: [
			'./img/01.jpg',
			'./img/02.jpg',
			'./img/03.jpg',
			'./img/04.jpg',
			'./img/05.jpg',
		]
    },
    methods: {
       
    }
})

console.log(app.slides)