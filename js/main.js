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

var timing = 1000;

var blocksContainer = document.querySelector('.memory-game-blocks');

var blocks = Array.from(blocksContainer.children);

var orderRange = [...Array(blocks.length).keys()];
// Another method to create range of keys
var orderRangee = Array.from(Array(blocks.length).keys());


// Add order CSS property the game
blocks.forEach( (block, index) => {
    
    block.style.order = index;
});








