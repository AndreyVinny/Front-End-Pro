const block =  document.querySelector(`.block`);
const moveRun = 10;

document.onkeydown = e => {
    
    if (window.innerWidth >= block.offsetLeft+100){
        if (e.keyCode === 39) {
            block.style.left = !block.style.left ? `${moveRun}px` : `${parseInt(block.style.left)+moveRun}px`
        }
    } else {
        if (e.keyCode === 39) {
            block.style.left = `${parseInt(block.style.left)-moveRun*2}px`;
            boom();
            setTimeout(boomOff, 1100)
        }
    }

    if (block.offsetLeft >= 0){
        if (e.keyCode === 37) {
            block.style.left = !block.style.left ? `-${moveRun}px` : `${parseInt(block.style.left)-moveRun}px`
        }
    } else {
        if (e.keyCode === 37) {
            block.style.left = `${parseInt(block.style.left)+moveRun*2}px`;
            boom();
            setTimeout(boomOff, 1100)
        }
    }

    if (block.offsetTop > 3){
        if (e.keyCode === 38) {
            block.style.top = !block.style.top ? `-${moveRun}px` : `${parseInt(block.style.top)-moveRun}px`
        }
    } else {
        if (e.keyCode === 38) {
            block.style.top = `${parseInt(block.style.top)+moveRun*2}px`;
            boom();
            setTimeout(boomOff, 1100)
        } 
    }

    if (window.innerHeight > block.offsetTop+105){
        if (e.keyCode === 40) {
            block.style.top = !block.style.top ? `${moveRun}px` : `${parseInt(block.style.top)+moveRun}px`
        }
    } else {
        if (e.keyCode === 40) {
            block.style.top = `${parseInt(block.style.top)-moveRun*2}px`;
            boom();
            setTimeout(boomOff, 1100)
        } 
    }
   
    boom = () => {
        block.innerHTML = "<p class='boom'>BOOM!!!</p>";
    }

    boomOff = () => {
    block.innerHTML = "<p></p>";
    }      

    if (e.keyCode === 32){
        block.classList.add(`move`);
        setTimeout(()=>block.classList.remove(`move`),300)
    }

    if (e.keyCode === 17){
        block.classList.add(`animtion`);
        setTimeout(()=>block.classList.remove(`animtion`),500)
    }

}




