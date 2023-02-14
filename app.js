

const observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
        
        if (e.isIntersecting) {
            e.target.classList.add('show');
        } else {
            e.target.classList.remove('show');
        }
    });
})


const hiddenElements = document.querySelectorAll('.hidden');

// console.log(hiddenElements);
hiddenElements.forEach((el) => observer.observe(el));
document.getElementById("myAudio").volume = 0.5;