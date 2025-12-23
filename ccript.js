const tree = document.getElementById('tree');

const btn = document.getElementById('partyBtn');

const audio = document.getElementById('xmasSound');

let isParty = false;

partyBtn.addEventListener("click", () => {
  tree.classList.toggle("party");

  // 音楽 再生 / 停止
  if (sound.paused) {
    sound.currentTime = 0; 
    sound.play();
  } else {
    sound.pause();
  }
});

btn.addEventListener('click',async () =>{
    isParty =!isParty;

    if(isParty) {
        tree.classList.add('party');

        btn.textContent = '🎵 演出停止';

        try {
            audio.currentTime = 0;

            await audio.onplay();
            
          } catch (e) {
            console.warn('Audio play was blocked:',e);
          } 
        
    } else {
        tree.classList.remove('party');

        btn.textContent = '✨ クリック演出';

        audio.onpause();
        audio.currentTime = 0;
    }
});

const snowBtn = document.getElementById("snowBtn");

snowBtn.addEventListener("click", () => {
  document.body.classList.toggle("snowing");
});