// GUITAR ON TOP, IMPROV

let guitarSampler = new Tone.Sampler({
    urls: {
        'A1': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-acoustic/A1.mp3',
        'A2': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-acoustic/A2.mp3',
        'A3': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-acoustic/A3.mp3',
    }
}).toDestination();


// RANDOM TALKING

let talkingSampler = new Tone.Players({
    urls: {
        her: 'assets/herquote.mp3', //very quiet file
        exmachina: 'assets/exmachinaquote.mp3', //way too loud now
    },
    volume: -12
}).toDestination();

// NATURE SOUNDS

let natureSampler = new Tone.Players({
    urls: {
        rain: 'assets/rain.wav'
    },
    volume: -12
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
    volume: -6
}).toDestination();


// DRUMS
let drumPlayers = new Tone.Players({
    urls: {
        kick: 'https://teropa.info/ext-assets/drumkit/kick.mp3',
        hatClosed: 'https://teropa.info/ext-assets/drumkit/hatClosed.mp3',
        hatOpen: 'https://teropa.info/ext-assets/drumkit/hatOpen2.mp3',
        snare: 'https://teropa.info/ext-assets/drumkit/snare3.mp3',
        tomLow: 'https://teropa.info/ext-assets/drumkit/tomLow.mp3',
        tomMid: 'https://teropa.info/ext-assets/drumkit/tomMid.mp3',
        tomHigh: 'https://teropa.info/ext-assets/drumkit/tomHigh.mp3',
        ride: 'https://teropa.info/ext-assets/drumkit/ride.mp3',
        crash: 'https://teropa.info/ext-assets/drumkit/hatOpen.mp3',
    },
    volume: -12
}).toDestination();


// GUITAR PATTERN

const thatRainyDayGuitarPattern = [
    ['0:1:0', 'G3'],
    ['0:1:2', 'D3'],
    ['0:1:3', 'D4'],
    ['2:1:0', 'A3'],
    ['2:1:1', 'G3'],
    ['2:1:2', 'A3'],
    ['2:1:3', 'D4']
]


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
    ['4:0:0', 'exmachina']
];

// BASS PLAYER

let guitarPart = new Tone.Part((time, note) => {
    guitarSampler.triggerAttackRelease(note, 4.0, time);
}, thatRainyDayGuitarPattern).start();
guitarPart.loop = true;
guitarPart.loopStart = 0;
let guitarLoopLength = '8';
guitarPart.loopEnd = guitarLoopLength;

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
    Tone.context.lookAhead = 0.5;
    Tone.Transport.scheduleRepeat(function (time) {
        generateNewSolo();
    }, "8:0:0", "8:0:0");
};

document.getElementById('stop').onclick = async () => {
    Tone.Transport.stop();
};







// MAGENTA STUFF

let improvRNN = new music_rnn.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/chord_pitches_improv');
let improvRNNLoaded = improvRNN.initialize();

const generateNewSolo = async () => {
    await improvRNNLoaded;

    let sixteenthNoteTicks = Tone.Time('16n').toTicks();

    let original = {
        notes: thatRainyDayGuitarPattern.map(([time, note]) => ({
            pitch: Tone.Frequency(note).toMidi(),
            quantizedStartStep: Tone.Time(time).toTicks() / sixteenthNoteTicks,
            quantizedEndStep: Tone.Time(time).toTicks() / sixteenthNoteTicks +1
        })),
        totalQuantizedSteps: 32,
        quantizationInfo: { stepsPerQuarter: 4 }
    }

    let steps = 64;
    let temperature = 1.1;
    let chordProgression = ['G7', 'E7', 'C6', 'Cdim']

    let result = await improvRNN.continueSequence(original, steps, temperature, chordProgression);
    
    let newPart = convertNotesToTone(result.notes);
    console.log(newPart);
    guitarPart.clear();
    guitarLoopLength = '16';

    for (let i = 0; i < newPart.length; i++) {
        guitarPart.at(newPart[i][0], newPart[i][1]);
    }
}

const convertNotesToTone = (notes) => {
    let newPattern = []
    for (let i = 0; i < notes.length; i++) {
        let toneTime = Tone.Time(notes[i].quantizedStartStep / 8).toBarsBeatsSixteenths();
        let toneNote = Tone.Frequency(notes[i].pitch, 'midi').toNote();
        newPattern.push([toneTime, toneNote]);
    }
    return newPattern;
}