/* Slider */

const slider = document.querySelector('.reviews__card-mobile'),
    slides = Array.from(document.querySelectorAll('.reviews__card-item')).slice(4)
const btns = Array.from(document.querySelectorAll('.reviews__card-pgn-btn'))

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0

for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${i * 20 + "px"})`
}

btns[0].classList.add('btnactive')


slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())

    // Touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)

    // Mouse events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
})

// Disable context menu
window.oncontextmenu = function (event) {
    event.preventDefault()
    event.stopPropagation()
    return false
}

function touchStart(index) {
    return function (event) {
        currentIndex = index
        startPos = getPositionX(event)
        isDragging = true

        animationID = requestAnimationFrame(animation)
        slider.classList.add('grabbing')
    }
}

function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)

    const movedBy = currentTranslate - prevTranslate

    if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

    setPositionByIndex()

    btns[currentIndex].classList.add('btnactive')

    if (currentIndex != 0) {
        btns[currentIndex - 1].classList.remove('btnactive')
    }
    if (currentIndex != btns.length - 1) {
        btns[currentIndex + 1].classList.remove('btnactive')
    }

    slider.classList.remove('grabbing')
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition - startPos
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
    currentTranslate = currentIndex * - 300
    prevTranslate = currentTranslate
    setSliderPosition()
}



/* FAQ */

var acc = document.getElementsByClassName("faq__accordion-item");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var answer = this.nextElementSibling;
        var image = this.lastChild

        if (answer.style.height) {
            answer.style.height = null;
            answer.style.border = null
            image.style.transform = 'rotate(0)';
        } else {
            answer.style.height = "60px";
            answer.style.border = "1px solid #31548E";
            image.style.transform = 'rotate(180deg)';
        }
    });
}

window.addEventListener('load', () => {
    arr[0].classList.toggle("active");
    var answer = arr[0].nextElementSibling;
    var image = arr[0].lastChild

    if (answer.style.height) {
        answer.style.height = null;
        answer.style.border = null
        image.style.transform = 'rotate(0)';

    } else {
        answer.style.height = "60px";
        answer.style.border = "1px solid #31548E";
        image.style.transform = 'rotate(180deg)';
    }
});


var seeAll = document.querySelector(".seeAll");
var arr = [...acc]

function seeAllFaq() {
    const newArr = arr.slice(1)

    if (arr[0].classList.contains("active")) {
        newArr.map((item) => {
            item.classList.toggle('active')
            let answers = item.nextElementSibling;
            let img = item.lastChild

            if (answers.style.height) {
                answers.style.height = null;
                answers.style.border = null
                img.style.transform = 'rotate(0)';
            } else {
                answers.style.height = "60px";
                answers.style.border = "1px solid #31548E";
                img.style.transform = 'rotate(180deg)';
            }
        })
    } else {
        arr.map(item => {
            item.classList.toggle('active')
            let answers = item.nextElementSibling;
            let img = item.lastChild

            if (answers.style.height) {
                answers.style.height = null;
                answers.style.border = null
                img.style.transform = 'rotate(0)';
            } else {
                answers.style.height = "60px";
                answers.style.border = "1px solid #31548E";
                img.style.transform = 'rotate(180deg)';
            }
        })
    }

    let seeAllImg = seeAll.lastChild.previousSibling
    if (seeAllImg.style.transform == 'rotate(0deg)') {
        seeAllImg.style.transform = 'rotate(180deg)'
    } else {
        seeAllImg.style.transform = 'rotate(0)'
    }
}