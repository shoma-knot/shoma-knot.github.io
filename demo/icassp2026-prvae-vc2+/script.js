const spkname2id = { p294: '5', p334: '6', p303: '7', p360: '8' };

var clean_src = '5';
var clean_tgt = '5';

const WAV_NAME = ['001', '002', '007'];

const clean_src_sel = document.querySelector('#clean-src-selector');
clean_src_sel.addEventListener('change', (event) => {
  clean_src = event.target.value;
});

const clean_tgt_sel = document.querySelector('#clean-tgt-selector');
clean_tgt_sel.addEventListener('change', (event) => {
  clean_tgt = event.target.value;
});

function play(type, model, idx) {
  const src = type == 'clean' ? clean_src : 0;
  const tgt = type == 'clean' ? clean_tgt : 0;

  const audio = new Audio(
    `../../assets/demo/icassp2026_prvae-vc2+/${type}/${model}/${src}-${tgt}/${WAV_NAME[idx]}.wav`
  );
  audio.play();
}
