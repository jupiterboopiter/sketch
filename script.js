const containerEl = document.querySelector('.container');

let createDivs = "";
for (let i = 0; i < Array.length; i++) {
    createDivs += '<div class="box"></div>';
}

console.log(createDivs);