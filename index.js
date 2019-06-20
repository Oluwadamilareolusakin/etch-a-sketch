let numberofdivs= parseInt(prompt("Enter a measurement for your sketch pad, e.g 64x64"));

const creatediv = (numberofdivs) =>{
    
    let w = window.innerWidth/(numberofdivs);
    let h = window.innerHeight/(numberofdivs);
    let div = document.createElement('div');
    div.classList.add('child-div');
    div.setAttribute('style', `border: 1px solid black;color:black; Height:${h}px; 
        Width:${w}px;padding:0; margin:0; background:rgba(0,0,0,0);`);
    let container = document.querySelector('div#main-container');
    
    container.append(div);
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
    let color = e.target.style.backgroundColor;
    console.log(color);
    //let r,g,b = 255;
    //r,g,b-=10;
    //e.target.setAttribute('style',`background: rgb(${r},${g},${b})`)

}

drawGird(numberofdivs);

document.addEventListener("DOMContentLoaded", ()=>{
    const divs = document.querySelectorAll('.child-div');
    divs.forEach(div => div.addEventListener('mouseover',draw));
})

