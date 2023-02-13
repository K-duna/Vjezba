const dateElement = document.querySelector("#date");
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString();

// function displayTime () {
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
    
//     dateElement.innerHTML = `${today} ${hours}h ${minutes}m ${seconds}s`;

// }
// displayTime()
