
// GUITAR PLAYER

let guitarPart = new Tone.Part((time, note) => {
    guitarSampler.triggerAttackRelease(note, 4.0, time);
}, guitarPatterns[guitarSelected]).start();
guitarPart.loop = true;
guitarPart.loopStart = 0;
let guitarLoopLength = '8';
guitarPart.loopEnd = guitarLoopLength;

// CHORD PLAYER

let chordPart = new Tone.Part((time, note) => {
    chordSampler.triggerAttackRelease(note, 2.0, time);
}, chordPatterns[chordsSelected]).start();
chordPart.loop = true;
chordPart.loopStart = 0;
chordPart.loopEnd = '8'

// DRUM PLAYER

let drumPart = new Tone.Part((time, drum) => {
    drumPlayers.player(drum).start(time);
}, drumPatterns[drumsSelected]).start();
drumPart.loop = true;
drumPart.loopStart = 0;
drumPart.loopEnd = '8';

// NATURE SOUNDS PLAYER

let naturePart = new Tone.Part((time, effect) => {
    natureSampler.player(effect).start(time);
}, naturePatterns[natureSoundsSelected]).start();
naturePart.loop = true;
naturePart.loopStart = 0;
naturePart.loopEnd = '16';

// RANDOM TALKING PLAYER

let talkingPart = new Tone.Part((time, effect) => {
    talkingSampler.player(effect).start(time);
}, talkingPatterns[talkingSelected]).start();
talkingPart.loop = true;
talkingPart.loopStart = 0;
talkingPart.loopEnd = '32';

let startButton = document.getElementById("start");
startButton.onclick = async () => {
    await Tone.loaded().then(() => {
        Tone.start();
    });
    Tone.Transport.bpm.value = 90;
    Tone.Transport.start();
    Tone.context.lookAhead = 0.5;
    if (aiSelected === "true") {
        Tone.Transport.scheduleRepeat(
            function (time) {
                generateNewSolo();
            },
            "8:0:0",
            "8:0:0"
        );
    }
    
};

stopButton.onclick = async () => {
    Tone.Transport.stop();
};







// MAGENTA STUFF

let improvRNN = new music_rnn.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/chord_pitches_improv');
let improvRNNLoaded = improvRNN.initialize();

const generateNewSolo = async () => {
    await improvRNNLoaded;

    let sixteenthNoteTicks = Tone.Time('16n').toTicks();

    let original = {
        notes: guitarPatterns[guitarSelected].map(([time, note]) => ({
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
