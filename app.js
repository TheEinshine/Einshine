

const observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
        
        if (e.isIntersecting) {
            e.target.classList.add('show');
        } else {
            e.target.classList.remove('show');
        }
    });
})

const audio = document.getElementById('myAudio');
console.log(audio);
setTimeout(()=>{
audio.play();
},2000)

const hiddenElements = document.querySelectorAll('.hidden');

// console.log(hiddenElements);
hiddenElements.forEach((el) => observer.observe(el));
document.getElementById("myAudio").volume = 0.5;