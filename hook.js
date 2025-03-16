//HOOK: creamos un array de imagenes que irán apareciendo aleatoriamente en el hook de la web
export const imgsHook = [
  './assets/img/00Hook.png',
  './assets/img/01Hook.png',
  './assets/img/02Hook.png'
]
//HOOK: Hacemos que aparezcan las imagenes mediante método random
export const printHook = (imgsHook) => {
  const sectionHook = document.querySelector('#hook')
  const imgHookContainer = document.createElement('div')
  const h1Hook = document.createElement('h1')
  const imgHook = document.createElement('img')

  sectionHook.appendChild(imgHookContainer)
  imgHookContainer.appendChild(h1Hook)
  imgHookContainer.appendChild(imgHook)

  let randomImg = Math.floor(Math.random() * imgsHook.length)
  const selectedImg = imgsHook[randomImg]
  imgHook.src = selectedImg

  //HOOK: Introducimos el texto de h1
  h1Hook.textContent = 'Are you a Sneaker Lover?'
  h1Hook.classList.add('h1Hook')
}
printHook(imgsHook)
