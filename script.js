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