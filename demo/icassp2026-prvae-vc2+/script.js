const spkname2id = { p294: '5', p334: '6', p303: '7', p360: '8' };
const id2spkname = [
  'p252',
  'p261',
  'p241',
  'p238',
  'p243',
  'p294',
  'p334',
  'p303',
  'p360',
  'p330',
];

var audio = undefined;

var clean_src = '0';
var clean_tgt = '7';
var noisy_src = '0';
var noisy_tgt = '7';

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
noisy_src_sel.addEventListener('change', (event) => {
  noisy_src = event.target.value;
});

const noisy_tgt_sel = document.querySelector('#noisy-tgt-selector');
noisy_tgt_sel.addEventListener('change', (event) => {
  noisy_tgt = event.target.value;
});

function play(type, model, idx, snr = 0) {
  if (audio !== undefined) audio.pause();

  if (type == 'clean') {
    const src = clean_src;
    const tgt = clean_tgt;

    if (model == 'X') {
      const id = id2spkname[parseInt(tgt)];
      audio = new Audio(
        `../../assets/demo/icassp2026_prvae-vc2+/${type}/${model}/${id}/${WAV_NAME[idx]}.wav`
      );
    } else if (model == 'src') {
      const id = id2spkname[parseInt(src)];
      audio = new Audio(
        `../../assets/demo/icassp2026_prvae-vc2+/${type}/X/${id}/${WAV_NAME[idx]}.wav`
      );
    } else {
      audio = new Audio(
        `../../assets/demo/icassp2026_prvae-vc2+/${type}/${model}/${src}-${tgt}/${WAV_NAME[idx]}.wav`
      );
    }
  }

  if (type == 'noisy') {
    const src = noisy_src;
    const tgt = noisy_tgt;

    if (model == 'tgt') {
      const id = id2spkname[parseInt(tgt)];
      audio = new Audio(
        `../../assets/demo/icassp2026_prvae-vc2+/clean/X/${id}/${WAV_NAME[idx]}.wav`
      );
    } else if (model == 'X') {
      const id = id2spkname[parseInt(src)];
      audio = new Audio(
        `../../assets/demo/icassp2026_prvae-vc2+/${type}/N${model}/${snr}/${id}/${WAV_NAME[idx]}.wav`
      );
    } else {
      audio = new Audio(
        `../../assets/demo/icassp2026_prvae-vc2+/${type}/N${model}/${snr}/${src}-${tgt}/${WAV_NAME[idx]}.wav`
      );
    }
  }

  audio.play();
}
