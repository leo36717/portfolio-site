let circleProgress1 = document.querySelector(".skill1"),
    progressValue1 = document.querySelector(".value1");

let circleProgress2 = document.querySelector(".skill2"),
    progressValue2 = document.querySelector(".value2");

let circleProgress3 = document.querySelector(".skill3"),
    progressValue3 = document.querySelector(".value3");


let progressStartValue1 = 0,
    progressEndValue1 = 50,
    speed1 = 3;

let progressStartValue2 = 0,
    progressEndValue2 = 20,
    speed2 = 3;

let progressStartValue3 = 0,
    progressEndValue3 = 60,
    speed3 = 3;


cycle(circleProgress1, progressValue1, progressStartValue1, progressEndValue1, speed1);
cycle(circleProgress2, progressValue2, progressStartValue2, progressEndValue2, speed2);
cycle(circleProgress3, progressValue3, progressStartValue3, progressEndValue3, speed3);

function cycle(circleAnim, progressAnim, progressStartValue, progressEndValue, speed) {
    let progress = setInterval(() => {
        progressStartValue++;
    
        progressAnim.textContent = `${progressStartValue}%`;
        circleAnim.style.background = `conic-gradient(#e68369 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
    
        if (progressStartValue === progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}


window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

