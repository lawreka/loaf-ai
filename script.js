// ************************************
//           Constants
// ************************************

const uiLoadingScreen = document.getElementById('loading');
const startButton = document.getElementById('start');
const loadingScreen = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');
const stopButton = document.getElementById('stop');
const toneWaves = new Tone.Waveform;

// ************************************
//           Instruments
// ************************************

const chordSampler = new Tone.Sampler({
    urls: {
        'A0': 'assets/piano/piano-A0.mp3',
        'A1': 'assets/piano/piano-A1.mp3',
        'A2': 'assets/piano/piano-A2.mp3',
        'A3': 'assets/piano/piano-A3.mp3',
        'A4': 'assets/piano/piano-A4.mp3',
        'A5': 'assets/piano/piano-A5.mp3',
        'A6': 'assets/piano/piano-A6.mp3'
    }
});

const guitarSampler = new Tone.Sampler({
    urls: {
        'A1': 'assets/guitar/guitar-A1.mp3',
        'A2': 'assets/guitar/guitar-A2.mp3',
        'A3': 'assets/guitar/guitar-A3.mp3',
        'C4': 'assets/guitar/guitar-C4.mp3'
    }
});

const drumPlayers = new Tone.Players({
    urls: {
        heart: 'assets/drums/hunterHeartbeat.wav',
        star: 'assets/drums/star.wav',
        indigo: 'assets/drums/indigo.wav',
    }
});

const naturePlayers = new Tone.Players({
    urls: {
        rain: 'assets/nature/rain.wav',
        storm: 'assets/nature/longerstorm.wav',
        waves: 'assets/nature/quietwaves.wav'
    }
});

const talkingPlayers = new Tone.Players({
    urls: {
        her: 'assets/talking/herquote.mp3',
        exmachina: 'assets/talking/exmachinaquotevocalslouder.wav',
        irobot: 'assets/talking/irobotquotelouder.wav',
        vinyl: 'assets/talking/vinyl.wav'
    }
});



// ************************************
//             Effects
// ************************************

const chordsVol = new Tone.Volume(-8);
const chordsReverb = new Tone.Reverb(1.5, 0.01, 0.8);
chordSampler.chain(chordsVol, chordsReverb, Tone.Destination);

const drumsVol = new Tone.Volume(-5);
drumPlayers.chain(drumsVol, Tone.Destination);

const natureVol = new Tone.Volume(-5);
naturePlayers.chain(natureVol, Tone.Destination);

const talkingVol = new Tone.Volume(-5);
talkingPlayers.chain(talkingVol, Tone.Destination);

const guitarVol = new Tone.Volume(-5);
const guitarReverb = new Tone.Reverb(1.5, 0.01, 0.2);
guitarSampler.chain(guitarVol, guitarReverb, Tone.Destination);

// ************************************
//            Patterns
// ************************************


const chordPatterns = {
    rainyDay: [
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
        ['3:2:0', 'G4']
    ],
    juniper: [
        ['0:0:0', 'D2'],
        ['0:0:0', 'F2'],
        ['0:0:0', 'A2'],
        ['0:0:0', 'C3'],
        ['1:0:0', 'G2'],
        ['1:0:0', 'B2'],
        ['1:0:0', 'D3'],
        ['1:0:0', 'F3'],
        ['2:0:0', 'C2'],
        ['2:0:0', 'E2'],
        ['2:0:0', 'G3'],
        ['2:0:0', 'B2'],
        ['3:0:0', 'D#2'],
        ['3:0:0', 'F#2'],
        ['3:0:0', 'A2'],
        ['3:0:0', 'C3'],
    ],
    jade: [
        ['0:0:0', 'E2'],
        ['0:0:1', 'G2'],
        ['0:0:2', 'B2'],
        ['0:0:3', 'C3'],
        ['0:1:0', 'E3'],
        ['0:1:1', 'G3'],
        ['1:0:0', 'A1'],
        ['1:0:1', 'C2'],
        ['1:0:2', 'E2'],
        ['1:0:3', 'G2'],
        ['1:1:0', 'A2'],
        ['1:1:1', 'C3'],
        ['2:0:0', 'D2'],
        ['2:0:1', 'F2'],
        ['2:0:2', 'A2'],
        ['2:0:3', 'C3'],
        ['2:1:0', 'D3'],
        ['2:1:1', 'F3'],
        ['3:0:1', 'E2'],
        ['3:0:2', 'G2'],
        ['3:0:3', 'B2'],
        ['3:1:0', 'D3'],
    ]
};

const drumPatterns = {
    heart: [
        ['0:0:0', 'heart']
    ],
    star: [
        ['0:0:0', 'star']
    ],
    indigo: [
        ['0:0:0', 'indigo']
    ]
};

const guitarPatterns = {
    rainyDay: [
        ["0:1:0", "G3"],
        ["0:1:2", "D3"],
        ["0:1:3", "D4"],
        ["2:1:0", "A3"],
        ["2:1:1", "G3"],
        ["2:1:2", "A3"],
        ["2:1:3", "D4"],
    ],
    juniper: [
        ['0:1:0', 'D3'],
        ['0:1:1', 'C3'],
        ['0:1:2', 'D3'],
        ['1:1:0', 'B3'],
        ['1:1:2', 'F3'],
        ['2:1:0', 'G3'],
        ['2:2:1', 'C3'],
        ['2:2:2', 'D3'],
        ['2:2:3', 'E3'],
        ['3:0:0', 'D#3'],
        ['3:1:0', 'C3'],
        ['3:2:0', 'D#3'],
    ],
    jade: [
        ['0:0:0', 'B3'],
        ['0:0:1', 'G3'],
        ['0:1:0', 'E3'],
        ['0:3:3', 'D3'],
        ['1:0:0', 'C3'],
        ['1:3:3', 'D3'],
        ['2:0:0', 'C3'],
        ['2:0:1', 'D3'],
        ['2:0:2', 'C3'],
        ['2:0:3', 'D3'],
        ['2:1:0', 'F3'],
        ['3:1:0', 'A3'],
        ['3:2:0', 'C4']
    ]
};

const guitarChords = {
    rainyDay: ['G7', 'E7', 'C6', 'Cdim'],
    juniper: ['Dm7', 'G7', 'Cmaj7', 'Ebdim7'],
    jade: ['Cmaj7', 'Am7', 'Dm7', 'Em7']
}

const naturePatterns = {
    rain: [
        ['0:0:0', 'rain']
    ],
    storm: [
        ['0:0:0', 'storm']
    ],
    waves: [
        ['0:0:0', 'waves']
    ]
};

const talkingPatterns = {
    her: [['4:0:0', 'her'], ['4:0:0', 'vinyl']],
    exmachina: [['4:0:0', 'exmachina'], ['4:0:0', 'vinyl']],
    irobot: [['4:0:0', 'irobot'], ['4:0:0', 'vinyl']]
};

const patternDefaults = {
    chords: 'rainyDay',
    guitar: 'rainyDay',
    drums: 'heart',
    nature: 'rain',
    talking: 'her'
};

// ************************************
//              RNN
// ************************************

let improvRNN = new music_rnn.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/chord_pitches_improv');
let improvRNNLoaded = improvRNN.initialize();

const generateSamples = async (guitarPart) => {
    const samples = [];
    for (let i = 0; i < 20; i++) {
        const sample = await generateNewSolo(guitarPart);
        samples.push(sample);
    }
    return samples;
    
}

const generateNewSolo = async (guitarPart) => {
    await improvRNNLoaded;

    let sixteenthNoteTicks = Tone.Time('16n').toTicks();

    let original = {
        notes: guitarPatterns[guitarPart].map(([time, note]) => ({
            pitch: Tone.Frequency(note).toMidi(),
            quantizedStartStep: Tone.Time(time).toTicks() / sixteenthNoteTicks,
            quantizedEndStep: Tone.Time(time).toTicks() / sixteenthNoteTicks + 1
        })),
        totalQuantizedSteps: 32,
        quantizationInfo: { stepsPerQuarter: 4 }
    }

    let steps = 64;
    let temperature = 1.1;
    let chordProgression = guitarChords[guitarPart];

    let result = await improvRNN.continueSequence(original, steps, temperature, chordProgression);

    let newPart = convertNotesToTone(result.notes);
    return newPart;
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


// ************************************
//            Storage
// ************************************

const loadSoundPreferences = () => {
    // get user preferences if they interacted with the form
    const chordsSelected = JSON.parse(localStorage.getItem('chords'));
    const drumsSelected = JSON.parse(localStorage.getItem('drums'));
    const natureSoundsSelected = JSON.parse(localStorage.getItem('nature'));
    const talkingSelected = JSON.parse(localStorage.getItem('talking'));
    const aiSelected = JSON.parse(localStorage.getItem('ai'));
    
    // use default form settings if not
    const chords = chordsSelected ? chordsSelected : patternDefaults.chords;
    const guitar = chords;
    const drums = drumsSelected ? drumsSelected : patternDefaults.drums;
    const nature = natureSoundsSelected ? natureSoundsSelected : patternDefaults.nature;
    const talking = talkingSelected ? talkingSelected : patternDefaults.talking;
    const ai = aiSelected ? aiSelected : 'true';

    const musicPrefsObject = { chords, guitar, drums, nature, talking, ai }

    return musicPrefsObject; 
}

// ************************************
//          Music Controls
// ************************************

const triggerSampleGeneration = async (guitarPart) => {
    const samples = await generateSamples(guitarPart);
    return samples;
};

const playingState = () => {
    disableForm();
    startButton.disabled = true;
};

// set up tone transport for selected loops
const loadLoops = (selectedPatterns) => {
    const { chords, drums, nature, talking } = selectedPatterns;

    let chordPart = new Tone.Part((time, note) => {
        chordSampler.triggerAttackRelease(note, 2.0, time);
    }, chordPatterns[chords]).start();
    chordPart.loop = true;
    chordPart.loopStart = 0;
    chordPart.loopEnd = '8';

    let drumPart = new Tone.Part((time, drum) => {
        drumPlayers.player(drum).start(time);
    }, drumPatterns[drums]).start();
    drumPart.loop = true;
    drumPart.loopStart = 0;
    drumPart.loopEnd = '8';

    let naturePart = new Tone.Part((time, effect) => {
        naturePlayers.player(effect).start(time);
    }, naturePatterns[nature]).start();
    naturePart.loop = true;
    naturePart.loopStart = 0;
    naturePart.loopEnd = '24';

    let talkingPart = new Tone.Part((time, effect) => {
        talkingPlayers.player(effect).start(time);
    }, talkingPatterns[talking]).start();
    talkingPart.loop = false;
}

// ************************************
//              UI
// ************************************

// Form input and local storage setters
const setChords = (input) => {
    localStorage.setItem('chords', JSON.stringify(input));
    localStorage.setItem('guitar', JSON.stringify(input));
};

const setDrums = (input) => {
    localStorage.setItem('drums', JSON.stringify(input));
}

const setNatureSounds = (input) => {
    localStorage.setItem('nature', JSON.stringify(input));
}

const setTalking = (input) => {
    localStorage.setItem('talking', JSON.stringify(input));
}

const setAI = (input) => {
    localStorage.setItem('ai', JSON.stringify(input));
}

//Form control while playing
const disableForm = () => {
    const formElements = document.getElementsByClassName('form-input');
    const formLabels = document.getElementsByClassName('form-heading');
    for (let i = 0; i < formElements.length; i++) {
        formElements[i].disabled = true;
    }
    for (let i = 0; i < formLabels.length; i++) {
        formLabels[i].classList.remove('enabled');
        formLabels[i].classList.add('disabled');
    }
}

// Loading screen animation 
const controlLoadingAnimation = (control) => {
    if (control === 'start') {
        loadingScreen.classList.remove('invisible');
        loadingScreen.classList.add('visible');
    }
    if (control === 'stop') {
        loadingScreen.classList.remove('visible');
        loadingScreen.classList.add('invisible');
    }
};



// Event Listeners

startButton.addEventListener('click', async () => {
    controlLoadingAnimation('start');
    const selections = await loadSoundPreferences();
    const { ai, guitar } = selections;
    let aiSolos;

    if (ai === 'true') {
        aiSolos = await triggerSampleGeneration(guitar);

        let guitarPart = new Tone.Part((time, note) => {
            guitarSampler.triggerAttackRelease(note, 4.0, time);
        }, guitarPatterns[guitar]).start();
        guitarPart.loop = true;
        guitarPart.loopStart = 0;
        let guitarLoopLength = '8';
        guitarPart.loopEnd = guitarLoopLength;

        let aiPartIndex = 0;

        Tone.Transport.scheduleRepeat(
            function (time) {
                if (aiPartIndex < aiSolos.length) {
                    const aiSoloPart = aiSolos[aiPartIndex];
                    guitarPart.clear();
                    guitarLoopLength = '16';
                    for (let i = 0; i < aiSoloPart.length; i++) {
                        guitarPart.at(aiSoloPart[i][0], aiSoloPart[i][1]);
                    }
                    aiPartIndex = aiPartIndex + 1;
                }
                console.log(aiPartIndex);
            },
            "8:0:0",
            "8:0:0"
        );
        
    }

    loadLoops(selections);

    await Tone.loaded().then(() => {
        Tone.start();
    });
    Tone.Transport.bpm.value = 90;
    Tone.Transport.start();
    Tone.context.lookAhead = 0.5;
    controlLoadingAnimation('stop');
    playingState();
});

stopButton.addEventListener('click', () => {
    Tone.Transport.stop();
    localStorage.clear();
    location.reload();

});


// ************************************
//              Visuals
// ************************************

const soloAnalyzer = new Tone.Waveform;

function setup() {
    const canvas = createCanvas(displayWidth, 50);
    canvas.parent('canvas');

    guitarSampler.connect(soloAnalyzer);
}

function windowResized() {
    resizeCanvas(displayWidth, 50);
}

function draw() {

    background('#080d22');

    const soloData = soloAnalyzer.getValue();
    const soloDataLength = soloData.length;

    strokeWeight(1);
    stroke(255);
    noFill();
    beginShape();
    for (var i = 0; i < soloDataLength; i++) {
        var x = map(i, 0, soloDataLength, 0, width);
        var y = map(soloData[i], -1, 1, -height / 2, height / 2);
        vertex(x, y + height / 2);
    }
    endShape();
}
