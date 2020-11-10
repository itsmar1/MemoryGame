document.querySelector('.control-buttons span').onclick = function(){

    let yourName = prompt("What's Your Name?");

    if ( yourName == null || yourName == "" ) {
        document.querySelector('.name span').innerHTML = 'Unknown';
    }
    else {
        document.querySelector('.name span').innerHTML = yourName;
    }

    document.querySelector('.control-buttons').remove();
}

var duration = 1000;

var blocksContainer = document.querySelector('.memory-game-blocks');

var blocks = Array.from(blocksContainer.children);

var orderRange = [...Array(blocks.length).keys()];
// Another method to create range of keys
//var orderRangee = Array.from(Array(blocks.length).keys());
console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);

// Add order CSS property the game
blocks.forEach( (block, index) => {
    
    block.style.order = orderRange[index];

    block.addEventListener('click', function(){
        flipBlock(block);
    });
});

function flipBlock(selectedBlock) {

    selectedBlock.classList.add('is-flipped');

    // Collect all flipped cards 
    let allFlippedBlocks = blocks.filter( flipped => flipped.classList.contains('is-flipped'));

    if ( allFlippedBlocks.length === 2) {
        
        // stop clicking funtion
        stopClicking();
        // Check matched block funtion
        checkMatchedBlocks(...allFlippedBlocks);
    }
}


// Check matched blocks function
function checkMatchedBlocks(firstBlock, secondBlock){

    let tries = document.querySelector('.info-container .tries span');

    if ( firstBlock.dataset.fruit === secondBlock.dataset.fruit ){

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

        document.querySelector('#success').play();
    }
    else{
        tries.innerHTML = parseInt(tries.innerHTML) + 1;

        setTimeout( () => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, duration);

        document.querySelector('#fail').play();
        
    }
}


// Stop Clicking Function
function stopClicking() {

    document.querySelector('.memory-game-blocks').classList.add('no-clicking');

    setTimeout( () => {
        document.querySelector('.memory-game-blocks').classList.remove('no-clicking');
    }, duration);

}


// Create Shuffle function 
function shuffle(array) {

    // get the current index
    let current = array.length,
        random,
        temp;


    while ( current > 0 ) {

        // get a random number
        random = Math.floor(Math.random() * current );

        current--;
        
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;

    }

    return array;
    
}










