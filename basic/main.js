const addOnListner = document.querySelector('.addOn');
const boxsHolders = document.querySelectorAll('.box');


//event Listner

addOnListner.addEventListener('dragstart', dragStart);
addOnListner.addEventListener('dragend', dragEnd);

//Loop through the  box and call events handler functions
for(const elem of boxsHolders){
    elem.addEventListener('dragover', dragOver);
    elem.addEventListener('dragenter', dragEnter);
    elem.addEventListener('dragleave', dragLeave);
    elem.addEventListener('drop', dragDrop);
}

//Drag functions

function dragStart(){
this.className += ' hold-pull';
setTimeout(()=>(this.className = 'invisible'),0)
}
function dragEnd(){
 this.className =' addOn'
}

function dragOver(e){
    e.preventDefault();
    console.log('over');

}

function dragEnter(e){
    e.preventDefault()
    this.className += ' hovered'
    console.log('enter');

}

function dragLeave(){
    this.className = 'box'
    console.log('leave');

}
function dragDrop(){
    this.className = 'box';
    this.append(addOnListner)
    console.log('drop');

}