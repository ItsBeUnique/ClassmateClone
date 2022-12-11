const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {

const triggerBottom = window.innerHeight /5 * 4

boxes.forEach(box => { const boxTop = box.getBoundingClientRect().top

if (boxTop < triggerBottom) {

box.classList.add('show')

} else { box.classList.remove('show')

}

})
}
let i=document.getElementById('letsgo');
function gototop() {
    window.scrollTo({
       top :0,
       behavior : 'smooth'

    })
}

function change(){
    // location.href("terms-conditions.html");
    // window.history.pushState('new','title','terms-conditions.html');
}

