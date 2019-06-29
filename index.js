function game(){
    this.color = '#000000';
    this.pixels = document.querySelectorAll('.babydiv')

    this.createDiv = (numberofdivs) =>{
       const div = document.createElement('div')
       const gridContainer = document.querySelector('div#grid-container');
       div.classList.add('babydiv')
       const w = gridContainer.offsetWidth / 50
       const h = gridContainer.offsetHeight / numberofdivs
       div.setAttribute('style', `width: ${w}px; height: ${w/2}px; float: left`)
       
       gridContainer.append(div)
    }

    this.changeColor = (e) =>{
        if(e.target.id !== 'change-color') return;
        hexCode = document.querySelector('#color-option').value
        if(hexCode.length === 7){
            this.setColor(hexCode)
        } else {
            return;
        }
    }
    this.setColor = (color) =>{
        this.color = color;
    }

    this.drawGrid = (numberofdivs) =>{
        for(let i = 0; i < numberofdivs; i++){
            this.createDiv(numberofdivs)
        }
    }

    this.draw = (e) =>{
        if(e.target.className !== 'babydiv') return;
        e.target.classList.add('.drawn')
        console.log('draw')
        e.target.style.background = this.color
    }

    this.clearGrid = (e) =>{
        if(e.target.id !== 'clear-grid') return;
        color = 'aquamarine';
        const pixels = document.querySelectorAll('.babydiv')
        pixels.forEach(pixel => pixel.style.background = color);
}

}


document.addEventListener("DOMContentLoaded", () => {
    const play = new game();
    play.drawGrid(2000);
    const pixels = document.querySelectorAll('.babydiv')
    pixels.forEach(pixel => pixel.addEventListener('mouseover', play.draw))
    pixels.forEach(pixel => pixel.addEventListener('touchmove', play.draw))
    const clearGrid = document.querySelector('#clear-grid');
    clearGrid.addEventListener('click', play.clearGrid)
    const changeColor = document.querySelector('#change-color');
    changeColor.addEventListener('click', play.changeColor)
});