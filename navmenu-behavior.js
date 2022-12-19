
// Comportamiento del navbar en moviles y tablets
const toggleBtn = document.querySelector('.toggle-button')
const navmenuContainer = document.querySelector('.navmenu__container')

toggleBtn.addEventListener('click', () => navmenuContainer.classList.toggle('opened') )


// asignar un alto minimo al cuerpo del sitio
const myHeader = document.querySelector('header')
const myBody = document.querySelector('main')
const myFooter = document.querySelector('footer')


myBody.style.minHeight = `${document.documentElement.scrollHeight - myHeader.scrollHeight - myFooter.scrollHeight -40}px`