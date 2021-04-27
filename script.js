const toggle = document.querySelector('.toggle')

const navUl = document.querySelector('.header__nav')
const changeToggle = document.getElementById('toggle')

function show() {
    navUl.classList.toggle('show')
}
/*...control toggle button */
const toggleElement = toggle.firstElementChild
function toggleEffect () {
    toggle.addEventListener('click', ()=>{
        show()
        if (changeToggle.classList.contains('bx-menu')) {
            changeToggle.classList.toggle('bx-x')
        } 
    })
}
/*...control navlist items */
const navList = document.querySelectorAll('.header__list')
function navEffect () {
  navList.forEach((list) => list.classList.remove('actives'))
   this.classList.add('actives')
   show()
   toggleElement.innerHTML = `<h2><i id= 'toggle' class='bx bx-menu  bx-spin-hover'></i></h2>`
}
navList.forEach(list => list.addEventListener('click', navEffect ))

toggleEffect()


const inputColor = document.querySelector('input[type= color]')

const styleVariable = '--style-color'


inputColor.addEventListener('change', (e) => {
  
    const newColor = e.target.value
    document.documentElement.style.setProperty(styleVariable, newColor)

 
    localStorage.setItem('colorPicked', newColor)

   
}) 
if (localStorage != null) {
        const storedColor = localStorage.getItem('colorPicked')
        
        document.documentElement.style.setProperty(styleVariable, storedColor)
     }


     const scroller = document.querySelector('.scroll-up')
    const rootElement = document.documentElement
     
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
       
     scroller.addEventListener('click',(e) => {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
          })
         
     })
