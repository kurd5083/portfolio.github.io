let worksSliders = document.querySelector('.worksSliders');
let worksSlide = document.querySelectorAll('.worksSlide');
let currentIndex = 0;
function updateSliderPosition(index, elem) {
    elem.style.transform = `translateX(-${index * 100}%)`;
}

const sliderArrowNext = document.querySelector('.sliderArrowNext');
sliderArrowNext.addEventListener('click', () => {
    currentIndex < worksSlide.length - 1 ? currentIndex++ : currentIndex = 0;
    updateSliderPosition(currentIndex, worksSliders);
});
const sliderArrowPrev = document.querySelector('.sliderArrowPrev');
sliderArrowPrev.addEventListener('click', () => {
    currentIndex > 0 ? currentIndex-- : currentIndex = worksSlide.length - 1;
    updateSliderPosition(currentIndex, worksSliders);
});
let skillSliders = document.querySelector('.skillSliders');
let skillsPanel = document.querySelectorAll('.skillsPanel');
let skillCurrentIndex = 0;

function clickDot(item, elem) {
    for(let i = 0; i < item.length; i++){
        item[i].addEventListener('click', function(){
            skillCurrentIndex = i;
            updateSliderPosition(skillCurrentIndex, elem);
        })
    }
}
clickDot(skillsPanel, skillSliders);
