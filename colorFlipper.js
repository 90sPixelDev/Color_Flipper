const colorsSimple = ['white', 'yellow', 'green', 'blue', 'purple', 'pink', 'red', 'orange'];

let isSimple = true;
const btn = document.getElementById('color-btn');
const color = document.querySelector('.color');
const simpleBtn = document.getElementById('simple');
const hexBtn = document.getElementById('hex');

window.onload = () => {
    simpleBtn.style.color = 'red';
    simpleBtn.style['font-weight'] = '700';
}

simpleBtn.addEventListener('click', function() {
    isSimple = true;
    this.style.color = 'red';
    this.style['font-weight'] = '700';
    hexBtn.style.color = 'black';
    hexBtn.style['font-weight'] = '400';
})
hexBtn.addEventListener('click', function() {
    isSimple = false;
    this.style.color = 'red';
    this.style['font-weight'] = '700';
    simpleBtn.style.color = 'black';
    simpleBtn.style['font-weight'] = '400';
})

btn.addEventListener ('click', () => {
    if (isSimple) {
        const randomNum = Math.floor((Math.random() * 8));
        let colorType;
        
        isSimple ? colorType = colorsSimple : colorType = colorHex;
        
        color.textContent = colorType[randomNum];
        document.body.style.backgroundColor = colorType[randomNum];
        
        console.log(randomNum);
    }
    else {
        const hex = returnVal();

        color.textContent = hex;
        document.body.style.backgroundColor = hex;

        console.log(hex);
    }

})

const returnVal = () => {
    let hexBuild = '#';

    for (let i = 0; i < 6; i++) {
        let val;

        const num = Math.floor(Math.random() * 29);
        const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
        const letterIndex = Math.floor(Math.random() * 6);
        const letter = letters[letterIndex];
        
        const valType = Math.floor(Math.random() * 2)

        valType ? val = num : val = letter;
    
        hexBuild += val;
    }

    let hex = hexBuild;
    
    if (hex.length > 6) {
        hex = hexBuild.slice(0, 7);
    }

    return hex;
}


