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

console.log(orderRange);

