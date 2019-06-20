let numberofdivs= parseInt(prompt("Enter a measurement for your sketch pad, e.g 64x64"));

const creatediv = (numberofdivs) =>{
    let container = document.querySelector('div#main-container');
    let w = Math.floor(window.innerWidth/(numberofdivs));
    let h = Math.floor(window.innerHeight/(numberofdivs));
    let div = document.createElement('div');
    div.classList.add('child-div');
    //Remove 2px from the width and height to accomodate for the borders.
    div.setAttribute('style', `Height:${h-2}px; Width:${w-2}px; background:rgba(0,0,0,0);`);
    container.appendChild(div);
}

const drawGird = (numberofdivs) =>{
    let x =0;
    while(x < numberofdivs){
        for(i=numberofdivs; i > 0; i--){
            creatediv(numberofdivs);
        }
        x++
    }
    
}

const draw = (e) =>{
    let color =  e.target.style.background;
    a = color[11]+=.2;
    return e.target.style.background = `rgba(0,0,0,${a})`

}

drawGird(numberofdivs);

document.addEventListener("DOMContentLoaded", ()=>{
    const divs = document.querySelectorAll('.child-div');
    divs.forEach(div => div.addEventListener('mouseover',draw));
})

