const WHITE_KEY = ['z','x','c','v','b','n','m'];
const BLACK_KEY = ['s','d','f','g','h','j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKey = document.querySelectorAll('.key.black');
keys.forEach(key => {
    key.addEventListener('click', () => onPlaySound(key));
});

keys.forEach(key => {
    key.addEventListener('click', () => onPlaySound(key));
});

document.addEventListener('keydown', event =>{
    const keyboard = event.key;
    const whitekeyIndex = WHITE_KEY.indexOf(keyboard);
    const blackkeyIndex = BLACK_KEY.indexOf(keyboard);

    if(!event.repeat){
        if(whitekeyIndex > -1){
            onPlaySound(whiteKeys[whitekeyIndex]);
        }
        if(blackkeyIndex >-1){
            onPlaySound(blackKey[blackkeyIndex]);
        }
    }
});


function onPlaySound(key){
    const audioKey = document.getElementById(key.dataset.notes);
    audioKey.currentTime = 0;
    audioKey.play();
    key.classList.add('active'); 
    audioKey.addEventListener('ended',  () =>{
        key.classList.remove('active');
    });
}
