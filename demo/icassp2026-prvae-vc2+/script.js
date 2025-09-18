const spkname2id = { p294: '5', p334: '6', p303: '7', p360: '8' };

var audio = undefined;

var clean_src = '5';
var clean_tgt = '5';
var noisy_src = '5';
var noisy_tgt = '5';

const WAV_NAME = ['001', '002', '007'];

const clean_src_sel = document.querySelector('#clean-src-selector');
clean_src_sel.addEventListener('change', (event) => {
  clean_src = event.target.value;
});

const clean_tgt_sel = document.querySelector('#clean-tgt-selector');
clean_tgt_sel.addEventListener('change', (event) => {
  clean_tgt = event.target.value;
});

const noisy_src_sel = document.querySelector('#noisy-src-selector');
clean_src_sel.addEventListener('change', (event) => {
  noisy_src = event.target.value;
});

const noisy_tgt_sel = document.querySelector('#noisy-tgt-selector');
clean_tgt_sel.addEventListener('change', (event) => {
  noisy_tgt = event.target.value;
});

function play(type, model, idx, snr = 0) {
  if (audio !== undefined) audio.pause();

  if (type == 'clean') {
    const src = clean_src;
    const tgt = clean_tgt;

    audio = new Audio(
      `../../assets/demo/icassp2026_prvae-vc2+/${type}/${model}/${src}-${tgt}/${WAV_NAME[idx]}.wav`
    );
  }
  if (type == 'noisy') {
    const src = noisy_src;
    const tgt = noisy_tgt;

    audio = new Audio(
      `../../assets/demo/icassp2026_prvae-vc2+/${type}/${model}/${snr}/${src}-${tgt}/${WAV_NAME[idx]}.wav`
    );
  }

  audio.play();
}
