const btn2 = document.getElementById("btn2");
const btn1 = document.getElementById("btn1");
const body = document.body;
const container = document.querySelector(".container");
const targetElement = document.body.firstElementChild.firstChild.nextElementSibling.nextElementSibling;

btn1.addEventListener("click", () => {
    const audio = new Audio("yay.mp3");
    const audio2 = new Audio("cheer.mp3");
    audio.play();
    audio2.play();

    for(let i=0;i<10;i++){

    const img1 = document.createElement("img");
    img1.src = "k2.jpeg";
    img1.className = "animated-img";
    img1.style.left = `${Math.random() * window.innerWidth}px`;
    img1.style.top = `${Math.random() * window.innerHeight}px`;
    body.appendChild(img1);

    const img2 = document.createElement("img");
    img2.src = "k3.jpeg";
    img2.className = "animated-img";
    img2.style.left = `${Math.random()*window.innerWidth}px`;
    img2.style.top = `${Math.random()*window.innerHeight}px`;
    body.appendChild(img2);

    const img3 = document.createElement("img");
    img3.src = "k4.jpeg";
    img3.className = "animated-img";
    img3.style.left = `${Math.random()*window.innerWidth}px`;
    img3.style.top = `${Math.random()*window.innerHeight}px`;
    body.appendChild(img3);

    const img4 = document.createElement("img");
    img4.src = "k5.jpeg";
    img4.className = "animated-img";
    img4.style.left = `${Math.random()*window.innerWidth}px`;
    img4.style.top = `${Math.random()*window.innerHeight}px`;
    body.appendChild(img4);

    const img5 = document.createElement("img")
    img5.src = "sparkle.png";
    img5.className = "sparkle";
    img5.style.left = `${Math.random()*window.innerWidth}px`;
    img5.style.top = `${Math.random()*window.innerHeight}px`;
    body.appendChild(img5);

    const img6 = document.createElement("img")
    img6.src = "heart.png";
    img6.className = "animated-img";
    img6.style.left = `${Math.random()*window.innerWidth}px`;
    img6.style.top = `${Math.random()*window.innerHeight}px`;
    body.appendChild(img6);

    setTimeout(() => {
        img1.remove();
    }, 3000);  
}
    if (targetElement && targetElement.tagName === "IMG") {
        targetElement.src = "khappy.jpeg"; 
    }   
});


btn2.addEventListener("mouseover", () => {
    btn2.style.position = "absolute";
    const x = Math.random() * (window.innerWidth - btn2.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn2.offsetHeight)

    
    btn2.style.left = `${x}px`;
    btn2.style.top = `${y}px`;
});

// btn2.addEventListener("mouseover", (event) => {
//     const containerHeight = container.getBoundingClientRect().height;
//     const containerWidth = container.getBoundingClientRect().width;
//     const btnHeight = btnNo.getBoundingClientRect().height;
//     const btnWidth = btnNo.getBoundingClientRect().width;
//     const btnTop = btnNo.getBoundingClientRect().top;
//     const btnLeft = btnNo.getBoundingClientRect().left;
  
//     let newTop = btnTop;
//     let newLeft = btnLeft;
//     while (Math.abs(newTop - btnTop) < containerHeight / 3) {
//       newTop = getRandomNumber(0, containerHeight - btnHeight);
//     }
// );


// btn2.addEventListener("mouseover", () => {
//     btn2.style.position = "absolute";

//     btn2.style.top = Math.floor(Math.random() * 90 + 5) + "%";
//     btn2.style.left = Math.floor(Math.random() * 90 + 5) + "%";

// });
