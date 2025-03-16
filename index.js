//HOOK: importamos la funcion
import { printHook } from './hook.js'

//Array de Sneakers
const sneakers = [
  {
    id: 1,
    img: './assets/img/Air Max 1.png',
    stars: 4,
    brand: 'Nike Original',
    model: 'Air Max 1',
    price: 120,
    color: ['#FFFFFF', '#767248'],
    stock: 15
  },
  {
    id: 2,
    img: './assets/img/NB 9060.png',
    stars: 3,
    brand: 'New Balance',
    model: 'NB 9060',
    price: 80,
    color: ['#A2B2C6', '#4F647F'],
    stock: 10
  },
  {
    id: 3,
    img: './assets/img/Nike Revolution.png',
    stars: 4,
    brand: 'Nike Original ',
    model: 'Nike Revolution',
    price: 90,
    color: ['#BAC7D6', '#3E5F9A'],
    stock: 20
  },
  {
    id: 4,
    img: './assets/img/Forum Buckle.png',
    stars: 5,
    brand: 'Adidas Original',
    model: 'Forum Buckle',
    price: 100,
    color: ['#ACBECC', '#7AAED7', '#FFFFFF'],
    stock: 0
  },
  {
    id: 5,
    img: './assets/img/Campus.png',
    stars: 4,
    brand: 'Adidas Original ',
    model: 'Campus',
    price: 120,
    color: ['#2D5547', '#FFFFFF'],
    stock: 30
  },
  {
    id: 6,
    img: './assets/img/NB 327.png',
    stars: 3,
    brand: 'New Balance',
    model: 'NB 327',
    price: 120,
    color: ['#2E7159', '#859284', '#FFFFFF'],
    stock: 0
  },
  {
    id: 7,
    img: './assets/img/Dunk Low.png',
    stars: 5,
    brand: 'Nike Original',
    model: 'Dunk Low',
    price: 100,
    color: ['#62C2B2', '#FFFFFF'],
    stock: 18
  },
  {
    id: 8,
    img: './assets/img/Gazelle.png',
    stars: 4,
    brand: 'Adidas Original',
    model: 'Gazelle',
    price: 90,
    color: ['#FC94A9', '#506590'],
    stock: 8
  },
  {
    id: 9,
    img: './assets/img/Air Max SC.png',
    stars: 4,
    brand: 'Nike Original',
    model: 'Air Max SC',
    price: 150,
    color: ['#746F57', '#484435', '#FFFFFF'],
    stock: 14
  },
  {
    id: 10,
    img: './assets/img/Handball Spezial.png',
    stars: 2,
    brand: 'Adidas Original ',
    model: 'Handball Spezial',
    price: 120,
    color: ['#010101', '#E6BBC1'],
    stock: 16
  },
  {
    id: 11,
    img: './assets/img/Air Force.png',
    stars: 5,
    brand: 'Nike Original ',
    model: 'Air Force',
    price: 130,
    color: ['#E06C58', '#FFFFFF'],
    stock: 22
  },
  {
    id: 12,
    img: './assets/img/NB 9060_b.png',
    stars: 4,
    brand: 'New Balance',
    model: 'NB 9060',
    price: 100,
    color: ['#431F23', '#714037', '#213327'],
    stock: 0
  },
  {
    id: 13,
    img: './assets/img/NB 480.png',
    stars: 3,
    brand: 'New Balance',
    model: 'NB 480',
    price: 150,
    color: ['#EA4509', '#FFFFFF'],
    stock: 9
  },
  {
    id: 14,
    img: './assets/img/Full Force Low.png',
    stars: 5,
    brand: 'Nike Original',
    model: 'Full Force Low',
    price: 70,
    color: ['#FFFFFF', '#7185BF', '#2C2B2F'],
    stock: 0
  },
  {
    id: 15,
    img: './assets/img/Air Max SC_b.png',
    stars: 3,
    brand: 'Nike Original ',
    model: 'Air Max SC',
    price: 160,
    color: ['#A1A0A7', '#48484B', '#D8574B'],
    stock: 28
  },
  {
    id: 16,
    img: './assets/img/Handball Spezial_b.png',
    stars: 4,
    brand: 'Adidas Original',
    model: 'Handball Spezial',
    price: 140,
    color: ['#C5BFB6', '#D42938'],
    stock: 7
  }
]

//////MODAL - FILTROS
const modalFilters = document.querySelector('#filter')
//Boton
const btnModalOpen = document.createElement('button')
btnModalOpen.id = 'btnModal'
btnModalOpen.classList.add('nonactivebtn')
modalFilters.appendChild(btnModalOpen)
//Ventana Modal
const modal = document.createElement('div')
modal.classList.add('modal')
modalFilters.appendChild(modal)
//Eventos Modal
btnModalOpen.addEventListener('click', () => {
  modal.classList.toggle('active')
  modalFilters.classList.toggle('active')
  btnModalOpen.classList.toggle('activebtn')
  // modal.style.display = 'flex'
})

//Formulario - Filtros
const filterForm = document.createElement('form') //Formulario
filterForm.id = 'filterForm'
filterForm.classList.add('flex-container')

modal.appendChild(filterForm)

////////////////FILTRO DISPONIBILIDAD/////////////////////
//CREAMOS UN ARRAY de Elementos Filtrados por disponibilidad
const filterDisponibilidad = (selected) => {
  const stockState = []
  // console.log(selected)
  for (const sneaker of sneakers) {
    if (selected == 'disponible') {
      if (sneaker.stock > 0) {
        stockState.push(sneaker)
        console.log(stockState)
      }
    } else if (selected == 'agotado') {
      if (sneaker.stock === 0) {
        stockState.push(sneaker)
        console.log(stockState)
      }
    } else {
      stockState.push(sneaker)
    }
  }
  console.log(stockState)
  printSneakers(stockState)
}
//CREAMOS UN SELECT-DISPONIBILIDAD
const createSelectDisponibilidad = (sneakers) => {
  //Creacion elementos
  const selectDisp = document.createElement('select')
  selectDisp.id = 'availabSelect'
  filterForm.appendChild(selectDisp)
  const optone = document.createElement('option') //"Todos"
  optone.value = 'all'
  optone.textContent = 'Todos'
  selectDisp.appendChild(optone)
  const opttwo = document.createElement('option') //"Disponible"
  opttwo.value = 'availability'
  opttwo.textContent = 'Disponible'
  selectDisp.appendChild(opttwo)
  const optthree = document.createElement('option') //"Agotado"
  optthree.value = 'soldout'
  optthree.textContent = 'Agotado'
  selectDisp.appendChild(optthree)

  selectDisp.addEventListener('change', (event) => {
    // console.log(event.target.value) //esto nos muestra el valor seleccionado en el select
    if (event.target.value === 'availability') {
      console.log('disponible')
      filterDisponibilidad('disponible')
    } else if (event.target.value === 'soldout') {
      console.log('agotado')
      filterDisponibilidad('agotado')
    } else {
      console.log('Todos')
      filterDisponibilidad('todos')
    }
  })
}

////////////////FILTRO MODELOS/////////////////////
//CREAMOS UN ARRAY CON LOS MODELOS DE ZAPATILLAS SIN REPETIR
const MODELS = [] //creamos un array de modelos de zapatillas donde estos no se repitan.

let MODEL = '' //creamos una variable que sea la que filtre
//funcion para filtrar en select
const functionFilter = () => {
  const filtered = []
  for (const sneaker of sneakers) {
    if (MODEL.includes(sneaker.model)) {
      filtered.push(sneaker)
    }
  }
  console.log(filtered)
  printSneakers(filtered)
}
//funcion para rellenar el array MODELS
const fillModels = (sneakers) => {
  MODELS.splice(0) //limpia el array MODELS desde la posicion 0
  for (const sneaker of sneakers) {
    if (!MODELS.includes(sneaker.model)) {
      MODELS.push(sneaker.model)
    }
  }
}
fillModels(sneakers)

//CREAMOS UN SELECT,RELLENAMOS CON EL ARRAY ANTERIOR y AÑADIMOS FUNCIONALIDAD
const createSelectModel = (sneakers) => {
  const filters = document.querySelector('#filter')
  // const filterContainer = document.createElement('div')
  // filters.appendChild(filterContainer)
  const selectModel = document.createElement('select')
  filterForm.appendChild(selectModel)

  for (const model of MODELS) {
    const option = document.createElement('option')
    option.value = model
    option.textContent = model

    selectModel.appendChild(option)
  }
  // filterContainer.appendChild(selectModel)
  selectModel.addEventListener('change', (event) => {
    //cuando nosotros hagamos un cambio en el select se ejecutará el codigo
    console.log(event.target.value) //esto nos muestra el valor seleccionado en el select. Le damos este valor a la variable MODEL
    MODEL = event.target.value
    functionFilter()
  })
}

////////////////FILTRO PRECIO/////////////////////
const filtePrice = (valor) => {
  const PRODUCTPRICE = []
  for (const sneaker of sneakers) {
    if (sneaker.price <= valor) {
      PRODUCTPRICE.push(sneaker)
    }
  }
  console.log(PRODUCTPRICE)
  printSneakers(PRODUCTPRICE)
}

const createFilterPrice = (sneakers) => {
  //Creacion elementos
  const inputPrice = document.createElement('input')
  inputPrice.type = 'text'
  inputPrice.id = 'inputPrice'
  inputPrice.name = 'textFilter'
  inputPrice.placeholder = 'Precio máximo'
  filterForm.appendChild(inputPrice)

  inputPrice.addEventListener('input', (event) => {
    const PRICE = event.target.value //string
    let NUMPRICE = parseInt(PRICE) //convertimos el valor a numero
    // console.log(typeof NUMPRICE)
    filtePrice(NUMPRICE)
  })
}

//PINTAMOS ZAPATILLAS
const printSneakers = (sneakers) => {
  const sectionSneakers = document.querySelector('#categories')
  sectionSneakers.innerHTML = '' //limpia

  for (const sneaker of sneakers) {
    const artSneakers = document.createElement('article')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const divInfo = document.createElement('div')
    const divStars = document.createElement('div')
    //Bucle para crear las entrellas
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      //Bucle para dar clases a las estrellas
      if (i <= sneaker.stars) {
        star.classList.add('fill')
      }
      divStars.appendChild(star)
    }
    const pbrand = document.createElement('p')
    const divModAndPrice = document.createElement('div')
    const model = document.createElement('h3')
    const price = document.createElement('p')
    const divColAndStock = document.createElement('div')

    //Bucle para crear las bolitas de colores
    const divColorContainer = document.createElement('div')
    divColorContainer.classList.add('flex-container', 'divColorContainer')
    divColAndStock.appendChild(divColorContainer)
    for (let i = 0; i < sneaker.color.length; i++) {
      const divColor = document.createElement('div')
      divColor.classList.add('color')
      divColorContainer.appendChild(divColor)
      // console.log(sneaker.color[i])
      divColor.style.backgroundColor = sneaker.color[i]
    }

    const stock = document.createElement('p')
    if (sneaker.stock == 0) {
      stock.classList.add('soldOut') //Creamos la clase para productos agotados
      stock.textContent = 'Agotado' //Texto agotado
    } else {
      stock.textContent = 'Disponible' //Texto disponibles
    }
    artSneakers.appendChild(divImg)
    divImg.classList.add('imgContainer')
    divImg.appendChild(img)
    img.src = sneaker.img
    divStars.classList.add('starsContainer', 'flex-container')
    artSneakers.appendChild(divInfo)
    divInfo.classList.add('infoContainer')
    divInfo.appendChild(divStars)
    divInfo.appendChild(pbrand)
    pbrand.classList.add('textBrand')
    pbrand.textContent = sneaker.brand
    divInfo.appendChild(divModAndPrice)
    divModAndPrice.classList.add('flex-container')
    divModAndPrice.classList.add('modAndPriceContainer')
    divModAndPrice.appendChild(model)
    model.textContent = sneaker.model
    divModAndPrice.appendChild(price)
    price.textContent = `${sneaker.price} €` //Sintaxis para €
    divInfo.appendChild(divColAndStock)
    divColAndStock.classList.add('flex-container', 'colAndStockContainer')
    divColAndStock.appendChild(stock)
    sectionSneakers.appendChild(artSneakers)
  }
}

printSneakers(sneakers)
createSelectDisponibilidad()
createSelectModel()

createFilterPrice()
