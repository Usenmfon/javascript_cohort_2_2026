let btns = document.getElementsByTagName('button');
let soundEle = document.getElementsByTagName('p')[0]

let increaseBtn = btns[0]
let decreaseBtn = btns[1]

let volume = 0;
soundEle.textContent = volume;

increaseBtn.addEventListener('click', function(){
    increaseVolumeCheck(volume);
})

decreaseBtn.addEventListener('click', function(){
    decreaseVolumeCheck(volume);
})

function increaseVolumeCheck(currentVolume)
{
    if(currentVolume >= 20)
    {
        increaseBtn.disabled = true;
        soundEle.textContent = 20;
    }else{
        increaseBtn.disabled = false;
        soundEle.textContent = ++volume;
        decreaseBtn.disabled = false;
    }
}


function decreaseVolumeCheck(currentVolume)
{
    if(currentVolume <= 0)
    {
        decreaseBtn.disabled = true;
        soundEle.textContent = 0;
    }else{
        decreaseBtn.disabled = false;
        soundEle.textContent = --volume;
        increaseBtn.disabled = false;
    }
}