
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
	activeSlide: 0,

		slides: [
			'./img/01.jpg',
			'./img/02.jpg',
			'./img/03.jpg',
			'./img/04.jpg',
			'./img/05.jpg',
		]
    },
    methods: {
      nextSlide() {
		this.activeSlide++
		if(this.activeSlide >= this.slides.length) {
			this.activeSlide = 0
		}
	  },

	  prevSlide() {
		this.activeSlide--	
		if(this.activeSlide < 0) {
			this.activeSlide = 4
		}	
	  }
    }
})

