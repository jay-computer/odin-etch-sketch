function swag(e) {
    console.log(this.classList);
    this.classList.remove('off');
    console.log(this.classList);
    this.classList.add('on');
}


// initialize the playboard and its cells
const playboard = document.querySelector(".playboard");
for(let i = 0; i < 256; i = i + 1) {
    const wawa = document.createElement('div');
    wawa.classList.add('off');
    
    playboard.appendChild(wawa);
}

//add event listener to see if the user clicked on a cell
const cells = Array.from(document.querySelectorAll('.off'));
cells.forEach(cell => cell.addEventListener('click', swag));
//window.addEventListener('keydown', );