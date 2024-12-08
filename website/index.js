const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://5qph39anq3.execute-api.us-east-1.amazonaws.com/dev");
    let data = await response.json();
    counter.innerHTML = `${data} Views`;
}

updateCounter();