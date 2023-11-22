const animationPath = document.querySelectorAll('.animation-path')
const buttons = document.querySelectorAll('.btn')

//const removeActiveClass = (selector) => selector.forEach(item => {
//    item.classList.remove('active')
//})
//removeActiveClass(buttons)
 function removeActiveClass() {
    buttons.forEach (item => {
        item.classList.remove('active')
    })
 }
 //removeActiveClass()

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    removeActiveClass()
    btn.classList.add('active') 
})
})

animationPath.forEach(path => {
    console.log(path);
})