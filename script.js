const containerEl = document.querySelector('.container');

function createDivs() {
    let num = 0;
    for (let i = 0; i < arguments.length; i++) {
        num += arguments[i];
        const containerEl = document.createElement('div');
    }
    return createDivs;
}

