let btnAccelerare = document.querySelector('.accelerare'),
	btnFrinare = document.querySelector('.frinare'),
	model = document.querySelector('.model'),
	culoare = document.querySelector('.culoare'),
	anFabricare = document.querySelector('.anFabricare'),
	selectMasina = document.querySelector('.selectMasina'),
	descriereMasine = document.querySelector('.descriereMasineiSelectate'),
	afiseazaMasinaSelectata = document.querySelector('.card-masina-selectata'),
	afiseazaMasinaInfoDescrisa = document.querySelector('.afiseazaInformatiiMasinaDorita'),
	btnIncarcare = document.querySelector('.incarcare'),
	btnRadioElectric = document.querySelector('#electric'),
	btnRadioFuel = document.querySelector('#fuel'),
	baterie = document.querySelector('#baterie'),
	vitezaMaxima = document.querySelector('#viteza-maxima'),
	descriereMasina = document.querySelector('.card-masina-selectata'),
	textAcelereaza = document.querySelector('.accelereaza')
	

class Masina {
	constructor(model, culoare, anFabricare, vitezaMaxima){
		this.model = model;
		this.culoare = culoare;
		this.anFabricare = anFabricare;
		this.viteza = 0;
		this.vitezaMaxima = vitezaMaxima;
	}
	
	accelereaza(){
		this.viteza += 10;
	}
	frineaza() {
		this.viteza -= 10;
	}
	descriere() {
		return `${this.model} ${this.culoare}, fabricat in ${this.anFabricare} merge cu ${this.vitezaMaxima} km/h`
	}
}
class MasinaElectrica extends Masina {
	constructor(model, culoare, anFabricare, vitezaMaxima, baterie) {
		super(model, culoare, anFabricare, vitezaMaxima)
		this.baterie = baterie;
		this.viteza = 0	
	}
	accelereaza() {
		this.viteza += 10;
		this.baterie -= 5
	}
	frineaza() {
		this.viteza -=10;
	}
	incarcare() {
		this.baterie >= 100 ? this.baterie = 100 : this.baterie +=10	
	}
	descriere() {
		return `${this.model} ${this.culoare}, fabricat in ${this.anFabricare} merge cu ${this.vitezaMaxima} km/h si are ${this.baterie}% baterie`
	}

}
let masinaElectrica = '';
let masina = '';
afiseazaMasinaInfoDescrisa.addEventListener('click', function(){
	if (btnRadioElectric.checked) {
		masinaElectrica = new MasinaElectrica(model.value, culoare.value, anFabricare.value, vitezaMaxima.value, Number(baterie.value))
		descriereMasina.textContent = masinaElectrica.descriere();
	} else {
		masina = new Masina(model.value, culoare.value, anFabricare.value, vitezaMaxima.value)
		descriereMasina.textContent = masina.descriere();
	}
})
btnAccelerare.addEventListener('click', function() {
	if (btnRadioElectric.checked) {
		masinaElectrica.accelereaza();
		textAcelereaza.textContent = `La moment masina accelereaza cu ${masinaElectrica.viteza}km/h, baterie: ${masinaElectrica.baterie}%`
	} else {
		masina.accelereaza();
		textAcelereaza.textContent = `La moment masina accelereaza cu ${masina.viteza}km/h`;
	}
})
btnFrinare.addEventListener('click', function(){
	if (btnRadioElectric.checked) {
		masinaElectrica.frineaza();
		textAcelereaza.textContent = `La moment masina accelereaza cu ${masinaElectrica.viteza}km/h, baterie: ${masinaElectrica.baterie}%`
	} else {
		masina.frineaza();
		textAcelereaza.textContent = `La moment masina accelereaza cu ${masina.viteza}km/h`;
	}
})
btnIncarcare.addEventListener('click', function() {
	if (btnRadioElectric.checked) {
		masinaElectrica.incarcare();
		textAcelereaza.textContent = `La moment masina accelereaza cu ${masinaElectrica.viteza}km/h, baterie: ${masinaElectrica.baterie}%`
	} 
})




let carData = ''
fetch('https://raw.githubusercontent.com/itemsapi/itemsapi-example-data/master/items/cars.json')
.then(response => response.json())
.then(data => {
  const car1 = {data};
  
  car1.data.forEach(car => {
	  const option = document.createElement('option');
	  option.value = car.title
	  option.text = car.title
	  selectMasina.add(option);
	   carData = car
  });
  afiseazaMasinaSelectata.addEventListener('click', function() {
	console.log('click');
	 for(let i = 0; i < car1.data.length; i++){
		let  datOfCar = car1.data[i];
		if (datOfCar.title == selectMasina.value) {
			console.log(datOfCar);
		}
	
	}
	
	
	

});
})
.catch(error => {
  console.error('Eroare:', error);
});
const modelCar = 'camry';
const url = 'https://api.api-ninjas.com/v1/cars?model=' + modelCar;
const headers = {
  'X-Api-Key': 'M6UECGdbZUGWjWxiDZc7ug==cdEBb8Yb0FFOBoiZ'
};
fetch(url, { headers })
  .then(response => {
	if (response.ok) {
	  return response.json();
	} else {
	  throw new Error('Error: ' + response.status);
	}
  })
  .then(data => {
	console.log(data);
  })
  .catch(error => {
	console.error(error);
  });

	

	  