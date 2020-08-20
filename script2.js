// ************************************
//           Constants
// ************************************

const uiLoadingScreen = document.getElementById('loading');
const startButton = document.getElementById('start');
const loadingScreen = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');
const stopButton = document.getElementById('stop');

// ************************************
//           Instruments
// ************************************

const chordSampler = new Tone.Sampler({
    urls: {
        'A0': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/piano/A0.mp3',
        'A1': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/piano/A1.mp3',
        'A2': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/piano/A2.mp3',
        'A3': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/piano/A3.mp3',
        'A4': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/piano/A4.mp3'
    }
}).toDestination();

const guitarSampler = new Tone.Sampler({
    urls: {
        'A1': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-acoustic/A1.mp3',
        'A2': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-acoustic/A2.mp3',
        'A3': 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-acoustic/A3.mp3',
    }
}).toDestination();

const drumPlayers = new Tone.Players({
    urls: {
        kick: 'assets/tero-kick.mp3',
        kick2: 'assets/kick2.wav',
        hatClosed: 'assets/tero-hatClosed.mp3',
        hatClosed2: 'assets/tero-hatClosed2.mp3',
        hatOpen: 'https://teropa.info/ext-assets/drumkit/hatOpen2.mp3',
        snare: 'assets/snare.wav',
        snare2: 'assets/tero-snare2.mp3',
        snare3: 'assets/tero-snare3.mp3',
        tomLow: 'https://teropa.info/ext-assets/drumkit/tomLow.mp3',
        tomMid: 'https://teropa.info/ext-assets/drumkit/tomMid.mp3',
        tomHigh: 'https://teropa.info/ext-assets/drumkit/tomHigh.mp3',
        ride: 'https://teropa.info/ext-assets/drumkit/ride.mp3',
        crash: 'https://teropa.info/ext-assets/drumkit/hatOpen.mp3',
        sticks: 'assets/sticks.wav',
    },
    volume: -12
}).toDestination();

const naturePlayers = new Tone.Players({
    urls: {
        rain: 'assets/rain.wav',
        storm: 'assets/storm.wav',
        vinyl: 'assets/vinyl.wav',
        birds: 'assets/louderbirds.wav'
    }
}).toDestination();

const talkingPlayers = new Tone.Players({
    urls: {
        her: 'assets/herquote.mp3', //very quiet file
        exmachina: 'assets/exmachinaquote.mp3', //way too loud now
    }
}).toDestination();



// ************************************
//             Effects
// ************************************




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
        ['0:0:0', 'D#2'],
        ['0:0:1', 'G2'],
        ['0:0:2', 'A#2'],
        ['0:0:3', 'D3'],
        ['0:1:0', 'G3'],
        ['0:1:1', 'A#2'],
        ['0:1:2', 'D3'],
        ['0:1:3', 'A#3'],
        ['0:2:0', 'G4'],
        ['1:0:0', 'D2'],
        ['1:0:1', 'F2'],
        ['1:0:2', 'A2'],
        ['1:0:3', 'C3'],
        ['1:1:0', 'A3'],
        ['1:1:1', 'C4'],
        ['2:0:0', 'D2'],
        ['2:0:1', 'F2'],
        ['2:0:2', 'A2'],
        ['2:0:3', 'A3'],
        ['2:1:0', 'C4'],
        ['2:1:1', 'E4'],
        ['2:1:2', 'C4'],
        ['2:1:3', 'A3'],
        ['3:0:0', 'C#2'],
        ['3:0:1', 'F2'],
        ['3:0:2', 'G#2'],
        ['3:0:3', 'C3'],
        ['3:1:0', 'F3'],
        ['3:1:1', 'C4'],
        ['3:2:0', 'C#2'],
        ['3:2:1', 'F2'],
        ['3:2:2', 'F3'],
        ['3:2:3', 'D#4'],
        ['3:3:0', 'G4'],
        ['3:3:1', 'A#2'],
        ['3:3:2', 'D#4'],
        ['3:3:3', 'G4']
    ],
    ghibli: [
        ['0:0:0', 'C2'],
        ['0:0:0', 'A2'],
        ['0:0:0', 'E3'],
        ['0:0:0', 'E4'],
        ['0:0:2', 'D4'],
        ['0:0:2', 'D3'],
        ['0:1:0', 'E4'],
        ['0:1:0', 'E3'],
        ['0:1:2', 'A3'],
        ['0:2:0', 'D2'],
        ['0:2:0', 'B2'],
        ['0:2:0', 'E3'],
        ['0:2:0', 'E4'],
        ['0:2:2', 'D4'],
        ['0:2:2', 'D3'],
        ['0:3:0', 'E4'],
        ['0:3:0', 'E3'],
        ['0:3:2', 'B3'],
        ['1:0:0', 'C2'],
        ['1:0:1', 'E2'],
        ['1:0:2', 'G2'],
        ['1:0:3', 'B2'],
        ['1:1:1', 'E2'],
        ['1:1:2', 'G2'],
        ['1:1:3', 'B2'],
        ['1:2:0', 'E3'],
        ['2:0:0', 'C2'],
        ['2:0:0', 'A2'],
        ['2:0:0', 'E3'],
        ['2:0:0', 'E4'],
        ['2:0:2', 'D4'],
        ['2:0:2', 'D3'],
        ['2:1:0', 'E4'],
        ['2:1:0', 'E3'],
        ['2:1:2', 'A3'],
        ['2:2:0', 'D2'],
        ['2:2:0', 'B2'],
        ['2:2:0', 'E3'],
        ['2:2:0', 'E4'],
        ['2:2:2', 'D4'],
        ['2:2:2', 'D3'],
        ['2:3:0', 'E4'],
        ['2:3:0', 'E3'],
        ['2:3:2', 'B3'],
        ['3:0:0', 'C3'],
        ['3:0:1', 'E3'],
        ['3:0:2', 'G3'],
        ['3:0:3', 'B3'],
        ['3:1:0', 'C3'],
        ['3:1:1', 'E3'],
        ['3:1:2', 'G3'],
        ['3:1:3', 'B3'],
        ['3:2:0', 'E4']
    ]
};

const drumPatterns = {
    shoals: [
        ["0:0:0", "kick"],
        ["0:1:0", "hatClosed"],
        ["0:1:2", "kick"],
        ["0:2:0", "kick"],
        ["0:3:0", "hatClosed"],
        ["1:0:0", "kick"],
        ["1:1:0", "hatClosed"],
        ["1:2:0", "kick"],
        ["1:2:3", "snare2"],
        ["1:3:0", "hatClosed"],
        ["1:3:2", "kick"],
        ["1:3:2", "crash"],
        ["2:0:0", "kick"],
        ["2:1:0", "hatClosed"],
        ["2:1:2", "kick"],
        ["2:2:0", "kick"],
        ["2:3:0", "hatClosed"],
        ["3:0:0", "kick"],
        ["3:1:0", "hatClosed"],
        ["3:2:0", "kick"],
        ["3:2:3", "kick"],
        ["3:3:0", "hatClosed"],
        ["3:3:2", "kick"],
        ["3:3:2", "snare2"]
    ],
    lounge: [
        ['0:0:0', 'kick2'],
        ['0:1:0', 'snare'],
        ['0:1:2', 'hatClosed'],
        ['0:2:2', 'kick2'],
        ['0:3:0', 'snare'],
        ['0:3:3', 'hatClosed'],
        ['1:0:0', 'kick2'],
        ['1:1:0', 'snare'],
        ['1:2:2', 'kick2'],
        ['1:2:3', 'hatClosed'],
        ['1:3:0', 'snare'],
        ['1:3:2', 'hatOpen'],
        ['2:0:0', 'kick2'],
        ['2:0:3', 'hatClosed'],
        ['2:1:0', 'snare'],
        ['2:1:2', 'hatClosed'],
        ['2:2:0', 'hatClosed'],
        ['2:2:2', 'kick2'],
        ['2:2:3', 'hatClosed'],
        ['2:3:0', 'snare'],
        ['2:3:1', 'hatClosed'],
        ['3:0:0', 'kick2'],
        ['3:1:0', 'snare'],
        ['3:2:2', 'kick2'],
        ['3:2:3', 'hatClosed'],
        ['3:3:0', 'snare']
    ],
    anton: [
        ['0:0:0', 'kick'],
        ['0:0:2', 'hatClosed'],
        ['0:1:0', 'kick'],
        ['0:2:2', 'hatClosed'],
        ['0:3:0', 'snare'],
        ['0:3:2', 'hatClosed'],
        ['1:0:2', 'hatClosed'],
        ['1:1:0', 'snare'],
        ['1:1:2', 'hatClosed2'],
        ['1:2:2', 'kick'],
        ['1:2:2', 'hatClosed'],
        ['1:3:0', 'snare'],
        ['1:3:2', 'hatClosed'],
        ['2:0:0', 'kick'],
        ['2:0:2', 'hatClosed'],
        ['2:1:0', 'kick'],
        ['2:2:2', 'hatClosed'],
        ['2:3:0', 'snare'],
        ['2:3:2', 'hatClosed'],
        ['3:0:2', 'hatClosed'],
        ['3:1:0', 'snare'],
        ['3:1:2', 'hatClosed2'],
        ['3:2:2', 'kick'],
        ['3:2:2', 'hatClosed'],
        ['3:3:0', 'snare'],
        ['3:3:2', 'hatClosed']
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
    ]
};

const naturePatterns = {
    rain: [
        ["0:0:0", "rain"],
        ["0:0:0", "vinyl"]
    ],
    storm: [
        ["0:0:0", "storm"],
        ["0:0:0", "vinyl"]
    ],
    birds: [
        ["0:0:0", "birds"],
        ["0:0:0", "vinyl"]
    ]
};

const talkingPatterns = {
    her: [["4:0:0", "her"]],
    exmachina: [['4:0:0', 'exmachina']]
};

const patternDefaults = {
    chords: 'rainyDay',
    guitar: 'rainyDay',
    drums: 'shoals',
    nature: 'rain',
    talking: 'her'
};

// ************************************
//              RNN
// ************************************


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
    const ai = aiSelected ? aiSelected : 'false';

    const musicPrefsObject = { chords, guitar, drums, nature, talkingSelected, ai }

    return musicPrefsObject; 
}

// ************************************
//          Music Controls
// ************************************

const loading = () => {
    const fakeLoadingTimeout = setTimeout(() => {
        loadingScreen.classList.remove('visible');
        loadingScreen.classList.add('invisible');
    }, 3000);
}

const playingState = () => {
    disableForm();
    startButton.disabled = true;
}

const resetUI = () => {
    enableForm();
    startButton.disabled = false;
}

// ************************************
//              UI
// ************************************

// Form input and storage of preferences
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

//Form control
const disableForm = () => {
    const formElements = document.getElementsByClassName('form-input');
    for (let i = 0; i < formElements.length; i++) {
        formElements[i].disabled = true;
    }
}

const enableForm = () => {
    const formElements = document.getElementsByClassName('form-input');
    for (let i = 0; i < formElements.length; i++) {
        formElements[i].disabled = false;
    }
}

// Loading screen animation 
const startLoadingAnimation = () => {
    let i = 0;
    const txt = 'L o a d i n g . . . ';
    const speed = 150;
    const typeWriter = () => {
            if (i < txt.length) {
                loadingText.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
            if (i === txt.length) {
                loadingText.innerHTML = '';
                i = 0;
            }
    }
    typeWriter();
}



// Event Listeners

startButton.addEventListener('click', () => {
    loadingScreen.classList.remove('invisible');
    loadingScreen.classList.add('visible');
    startLoadingAnimation();
    const selections = loadSoundPreferences();
    console.log(selections);
    loading();
    playingState();
    // retrieve settings from local storage and load them into the patterns
    // generate and concatenate samples from the AI
});

stopButton.addEventListener('click', () => {
    resetUI();
});
