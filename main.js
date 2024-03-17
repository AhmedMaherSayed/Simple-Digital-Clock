let element = document.querySelector("#digits");
let myTime = () => {
    let date = new Date();
    let currentTime = date.toLocaleTimeString();
    element.innerHTML = currentTime;
};

setInterval(myTime, 1000);
