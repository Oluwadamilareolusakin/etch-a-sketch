const creatediv = (numberofdivs,container) =>{
    let w = Math.floor(window.innerWidth/(numberofdivs));
    let h = Math.floor(window.innerHeight/(numberofdivs));
    let div = document.createElement('div');
    div.classList.add('child-div');
    //Remove 2px from the width and height to accomodate for the borders.
    div.setAttribute('style', `Height:${h-2}px; Width:${w-2}px; background:rgba(0,0,0,0);`);
    container.appendChild(div);
    return oldcontainer = container;
}

const drawGrid = (numberofdivs,container) =>{
    let x =0;
    while(x < numberofdivs){
        for(i=numberofdivs; i > 0; i--){
            creatediv(numberofdivs,container);
        }
        x++
    }
    
}

const resetGrid = (e) =>{
    if(e.target.id !== 'reset') return;
    while(oldcontainer.firstChild){
        oldcontainer.firstChild.remove();
    }
    let custom = document.getElementById('custom')
    let numberofdivs= parseInt(prompt("Enter a measurement for your sketch pad, e.g 64x64"));
    drawGrid(numberofdivs,custom);
    const divs = document.querySelectorAll('.child-div');
    divs.forEach(div => div.addEventListener('mouseover',draw));
    
}


const changeColor = (e) =>{
    if(e.target.className !== 'color-control') return;
    if(e.target.id==='black'){
        hex = '#000000'
    } else if(e.target.id === 'random'){
        hex = '#'
        for(let i = 0; i < 6; i++){
            let colorvalue = Math.random().toString(16)
            hex+=colorvalue;
        }
    }
    return color = hex;
}

const draw = (e) =>{
    e.target.style.background = color
}

document.addEventListener("DOMContentLoaded",()=>{
    const reset = document.querySelector('#reset')
    reset.addEventListener('click',resetGrid);
    const divs = document.querySelectorAll('.child-div');
    divs.forEach(div => div.addEventListener('mouseover',draw));
    const colorbuttons = document.querySelectorAll('.color-control');
    colorbuttons.forEach(button=> button.addEventListener('click',changeColor));
    return color = '#000000'
})
    
const defaultcontainer = document.getElementById('default');
drawGrid(50,defaultcontainer);