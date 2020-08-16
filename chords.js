const thatRainyDay = [
    // G major 7
    ['0:0:0', 'G1']
    ['0:0:0', 'D2'], 
    ['0:0:0', 'F#2'], 
    ['0:0:0', 'B2'], 
    ['0:0:0', 'D3'],
    // E7b5
    ['0:2:0', 'E2'],
    ['0:2:0', 'G#2'],
    ['0:2:0', 'A#2'],
    ['0:2:0', 'D3'],
    ['0:2:0', 'A#3'],
    // C 6/9 
    ['1:0:0', 'A1'],
    ['1:0:0', 'E2'],
    ['1:0:0', 'G2'],
    ['1:0:0', 'C3'],
    ['1:0:0', 'D3'],
    // Cdim
    ['1:2:0', 'D2'],
    ['1:2:0', 'F#2'],
    ['1:2:0', 'C3'],
    ['1:2:0', 'D#3'],
    ['1:2:0', 'F#3'],
    ['1:2:0', 'C4'],
]

const thatRainyDayGuitarPattern = [
    ['0:1:0', 'G2'],
    ['0:1:2', 'D2'],
    ['0:1:3', 'D3'],
    ['2:1:0', 'A2'],
    ['2:1:1', 'G2'],
    ['2:1:2', 'A2'],
    ['2:1:3', 'D3']
]

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


const samples = {
    'A0': 'https://github.com/nbrosowsky/tonejs-instruments/tree/master/samples/piano/A0.mp3',
    'A1': 'https://github.com/nbrosowsky/tonejs-instruments/tree/master/samples/piano/A1.mp3',
    'A2': 'https://github.com/nbrosowsky/tonejs-instruments/tree/master/samples/piano/A2.mp3',
    'A3': 'https://github.com/nbrosowsky/tonejs-instruments/tree/master/samples/piano/A3.mp3',
    'A4': 'https://github.com/nbrosowsky/tonejs-instruments/tree/master/samples/piano/A4.mp3'
}


viz = new mm.PianoRollCanvasVisualizer(result, document.getElementById('canvas'));
vizPlayer = new mm.Player(false, {
    run: (note) => { viz.redraw(note); },
    stop: () => { console.log('done') }
});
const startButton = document.getElementById('playsample');
startButton.addEventListener('click', () => vizPlayer.start(result));