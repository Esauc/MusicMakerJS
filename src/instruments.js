

/* SYNTH */
//var synth = new Tone.PolySynth(Tone.Synth).toDestination();
var synth = new Tone.PolySynth(Tone.Synth).toDestination();

/*
 KICK
 */
var kick = new Tone.MembraneSynth({
	'envelope' : {
		'sustain' : 0,
		'attack' : 0.001,
		'decay' : 0.1
	},
	'octaves' : 10
}).toDestination();

/*
 SNARE
 */
var snare = new Tone.NoiseSynth({
	'volume' : -5,
	'envelope' : {
		'attack' : 0.001,
		'decay' : 0.2,
		'sustain' : 0
	},
	'filterEnvelope' : {
		'attack' : 0.001,
		'decay' : 0.1,
		'sustain' : 0
	}
}).toDestination();

/**
 *  PIANO
 */
var piano = new Tone.PolySynth(Tone.Synth, {
	'volume' : -8,
	'oscillator' : {
		'partials' : [1, 2, 1],
	},
	'portamento' : 0.05
}).toDestination();


/*
 BASS
 */
var bass = new Tone.PolySynth(Tone.Synth, {
	'volume' : -10,
	'envelope' : {
		'attack' : 0.5,
		'decay' : 0.1
	},
	'filterEnvelope' : {
		'attack' : 0.2,
		'decay' : 0.1,
		'sustain' : 0.8,
		'baseFrequency' : 200
	}
}).toDestination();



// Construct scale array
const pentatonic = ['B#', 'D', 'F', 'G', 'A'];
const octave = 3; // base octave
const octaveoffset = 4;

let gridHeight = 16;
const scale = Array(gridHeight);

for (let i = 0; i < gridHeight; i += 1) 
{
      scale[i] = pentatonic[i % pentatonic.length]
        + (octave + Math.floor((i + octaveoffset) / pentatonic.length));
}
this.scale = scale.reverse(); // higher notes at lower y values, near the top