const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://yrjpu545z3vvl5l6k7sov4ftju0fmejl.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `${data} Views`;
}

updateCounter();