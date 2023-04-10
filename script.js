let btnAccelerare = document.querySelector('.accelerare'),
	btnFrinare = document.querySelector('.frinare'),
	model = document.querySelector('.model'),
	culoare = document.querySelector('.culoare'),
	anFabricare = document.querySelector('.anFabricare'),
	selectMasina = document.querySelector('.selectMasina'),
	descriereMasine = document.querySelector('.descriereMasineiSelectate'),
	afiseazaMasinaSelectata = document.querySelector('.afiseazamasinaSelectata'),
	afiseazaMasinaInfoDescrisa = document.querySelector('.afiseazaInformatiiMasinaDorita');

class Masina {
	constructor(model, culoare, anFabricare, vitezaMaxima){
		this.model = model;
		this.culoare = culoare;
		this.anFabricare = anFabricare;
		this.vitezaInitiala = 0;
		this.vitezaMaxima = vitezaMaxima;
	}
	accelereaza(){
		return this.vitezaInitiala += 10;
	}
	frineaza() {
		return this.vitezaInitiala -10;
	}
	descriere() {
		return `${this.model} ${this.culoare}, fabricat in ${this.anFabricare} merge cu ${this.vitezaMaxima} km/h`
	}
}

let ford = new Masina('Ford focus', 'rosu', 2019, 220);
let bmw = new Masina ('Bmw M5', 'neagru', 2023, 320);
let kia = new Masina ('Kia Ceed', 'albastru', 2020, 220);
let mercedes = new Masina ('Mercedes AMG', 'alb', 2023, 320);

afiseazaMasinaSelectata.addEventListener('click', function () {
	descriereMasine.textContent = `${selectMasina.value}.{descriere()`;
	
	if (selectMasina.value == 'ford') {
		textcontent = ford.descriere()
		descriereMasine.textContent = textcontent;
	} else if (selectMasina.value == 'bmw') {
		textcontent = bmw.descriere()
		descriereMasine.textContent = textcontent;
	} else if (selectMasina.value == 'kia') {
		textcontent = kia.descriere()
		descriereMasine.textContent = textcontent;
	} else {
		textcontent = mercedes.descriere()
		
	}
})

afiseazaMasinaInfoDescrisa.addEventListener('click', function(){
	let masina = new Masina(model.value, culoare.value, anFabricare.value, 220);
	descriereMasine.textContent = `${masina.descriere()}`;
})
btnAccelerare.addEventListener('click', function(){
	let textViteza = document.querySelector('.viteza');
	let masina = new Masina(model.value, culoare.value, anFabricare.value, 220);
	textViteza.textContent = `${masina.accelereaza()}`;
})


