// BASS

// let bassSampler = new Tone.Sampler({
//     urls: {
//         'A1': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/contrabass/A1.mp3',
//     },
//     volume: -2
// }).toDestination();


// RANDOM TALKING

let talkingSampler = new Tone.Players({
    urls: {
        her: 'assets/herquote.mp3'
    },
    volume: +3
}).toDestination();

// NATURE SOUNDS

let natureSampler = new Tone.Players({
    urls: {
        rain: 'assets/rain.wav'
    },
    volume: -6
}).toDestination();

// PIANOS

let chordSampler = new Tone.Sampler({
    urls: {
        'A0': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/piano/A0.mp3',
        'A1': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/piano/A1.mp3',
        'A2': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/piano/A2.mp3',
        'A3': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/piano/A3.mp3',
        'A4': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/piano/A4.mp3'
    },
    volume: -5
}).toDestination();


// DRUMS
let drumPlayers = new Tone.Players({
    kick: 'https://teropa.info/ext-assets/drumkit/kick.mp3',
    hatClosed: 'https://teropa.info/ext-assets/drumkit/hatClosed.mp3',
    hatOpen: 'https://teropa.info/ext-assets/drumkit/hatOpen2.mp3',
    snare: 'https://teropa.info/ext-assets/drumkit/snare3.mp3',
    tomLow: 'https://teropa.info/ext-assets/drumkit/tomLow.mp3',
    tomMid: 'https://teropa.info/ext-assets/drumkit/tomMid.mp3',
    tomHigh: 'https://teropa.info/ext-assets/drumkit/tomHigh.mp3',
    ride: 'https://teropa.info/ext-assets/drumkit/ride.mp3',
    crash: 'https://teropa.info/ext-assets/drumkit/hatOpen.mp3',
}).toDestination();


// BASS needs work

// const thatRainyDayBassPattern = [
//     ['0:0:0', 'G0'],
//     ['1:0:0', 'E0'],
//     ['2:0:0', 'A0'],
//     ['3:0:0', 'D0'],
// ]
// CHORDS

const thatRainyDayChordPattern = [
    ['0:0:0', 'G1'],
    ['0:0:1', 'D2'],
    ['0:0:2', 'F#2'],
    ['0:0:3', 'B2'],
    ['0:0:4', 'D3'],
    ['0:1:0', 'G1'],
    ['0:1:0', 'D2'],
    ['0:1:0', 'F#2'],
    ['0:1:0', 'B2'],
    ['0:1:0', 'D3'],
    ['1:0:0', 'E2'],
    ['1:0:1', 'G#2'],
    ['1:0:2', 'A#2'],
    ['1:0:3', 'D3'],
    ['1:0:4', 'A#3'],
    ['2:0:0', 'A1'],
    ['2:0:1', 'E2'],
    ['2:0:2', 'G2'],
    ['2:0:3', 'C3'],
    ['2:0:4', 'D3'],
    ['2:1:0', 'A1'],
    ['2:1:0', 'E2'],
    ['2:1:0', 'G2'],
    ['2:1:0', 'C3'],
    ['2:1:0', 'D3'],
    ['3:0:0', 'D2'],
    ['3:0:0', 'C4'],
    ['3:0:1', 'F#2'],
    ['3:0:2', 'C3'],
    ['3:0:3', 'D#3'],
    ['3:0:4', 'F#3'],
    ['3:2:0', 'G4'],
]


// DRUM LOOPS
let drumPattern = [
    ['0:0:0', 'kick'],
    ['0:1:0', 'hatClosed'],
    ['0:1:2', 'kick'],
    ['0:2:0', 'kick'],
    ['0:3:0', 'hatClosed'],
    ['1:0:0', 'kick'],
    ['1:1:0', 'hatClosed'],
    ['1:2:0', 'kick'],
    ['1:2:3', 'snare'],
    ['1:3:0', 'hatClosed'],
    ['1:3:2', 'kick'],
    ['1:3:2', 'crash'],
    ['2:0:0', 'kick'],
    ['2:1:0', 'hatClosed'],
    ['2:1:2', 'kick'],
    ['2:2:0', 'kick'],
    ['2:3:0', 'hatClosed'],
    ['3:0:0', 'kick'],
    ['3:1:0', 'hatClosed'],
    ['3:2:0', 'kick'],
    ['3:2:3', 'kick'],
    ['3:3:0', 'hatClosed'],
    ['3:3:2', 'kick'],
    ['3:3:2', 'snare'],
];

// NATURE SOUNDS LOOP

const natureLoop = [
    ['0:0:0', 'rain']
];


// RANDOM TALKING LOOP

const talkingLoop = [
    ['4:0:0', 'her']
];

// BASS PLAYER

// let bassPart = new Tone.Part((time, note) => {
//     bassSampler.triggerAttackRelease(note, 4.0, time);
// }, thatRainyDayBassPattern).start();
// bassPart.loop = true;
// bassPart.loopStart = 0;
// bassPart.loopEnd = '8'

// CHORD PLAYER

let chordPart = new Tone.Part((time, note) => {
    chordSampler.triggerAttackRelease(note, 2.0, time);
}, thatRainyDayChordPattern).start();
chordPart.loop = true;
chordPart.loopStart = 0;
chordPart.loopEnd = '8'

// DRUM PLAYER

let drumPart = new Tone.Part((time, drum) => {
    drumPlayers.player(drum).start(time);
}, drumPattern).start();
drumPart.loop = true;
drumPart.loopStart = 0;
drumPart.loopEnd = '8';

// NATURE SOUNDS PLAYER

let naturePart = new Tone.Part((time, effect) => {
    natureSampler.player(effect).start(time);
}, natureLoop).start();
naturePart.loop = true;
naturePart.loopStart = 0;
naturePart.loopEnd = '16';

// RANDOM TALKING PLAYER

let talkingPart = new Tone.Part((time, effect) => {
    talkingSampler.player(effect).start(time);
}, talkingLoop).start();
talkingPart.loop = true;
talkingPart.loopStart = 0;
talkingPart.loopEnd = '32';

document.getElementById('start').onclick = async () => {
    await Tone.loaded().then(() => {
        Tone.start();
    });
    Tone.Transport.bpm.value = 90;
    Tone.Transport.start();
};

document.getElementById('stop').onclick = async () => {
    Tone.Transport.stop();
};