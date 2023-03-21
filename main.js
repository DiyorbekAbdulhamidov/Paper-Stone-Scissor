const btn =  document.querySelector("button")
const elements = document.querySelectorAll(".elements")
const oyinlar = document.querySelectorAll(".oyinlar")
const youch = document.querySelector(".youch")
const compch = document.querySelector(".compch")
const info = document.querySelector(".info")


const randomIndex = Math.floor(Math.random() * oyinlar.length);
const randomElement = oyinlar[randomIndex];

btn.addEventListener('click', () => {
    location.reload();
});

oyinlar.forEach(oyin => {
    oyin.addEventListener('click', () => {
        youch.innerText = `You choose: ${oyin.innerText}`
        compch.innerText = `Computer choose: ${randomElement.innerText}`
        setTimeout(() => {
            location.reload();
        }, 12000);
        ys =  youch.innerText.split(' ');
        cs = compch.innerText.split(' ');
        if(ys[2] == cs[2]) info.innerText = "Durrang!"
        else if(ys[2] > cs[2]) info.innerText = "You win!"
        else info.innerText = "You lose!"
    })
});
