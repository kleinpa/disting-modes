export interface Mode {
  hardware: string;
  id: string;
  name: string;
  tags: string[];
  image: string;
  documentation: string;
}

const modes: Mode[] = [
  {
    hardware: "distingmk4",
    id: "a1",
    name: "Precision Adder",
    tags: ["utility", "math"],
    image: "vo1t-distingmk4-a1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=20",
  },
  {
    hardware: "distingmk4",
    id: "a2",
    name: "Four Quadrant Multiplier",
    tags: ["utility", "math"],
    image: "vo1t-distingmk4-a2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=20",
  },
  {
    hardware: "distingmk4",
    id: "a3",
    name: "Full-wave Rectifier",
    tags: ["utility", "math"],
    image: "vo1t-distingmk4-a3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=21",
  },
  {
    hardware: "distingmk4",
    id: "a4",
    name: "Minimum/maximum",
    tags: ["utility", "math"],
    image: "vo1t-distingmk4-a4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=21",
  },
  {
    hardware: "distingmk4",
    id: "a5",
    name: "Linear/Exponential Converter",
    tags: ["utility", "math"],
    image: "vo1t-distingmk4-a5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=22",
  },
  {
    hardware: "distingmk4",
    id: "a6",
    name: "Quantizer",
    tags: ["quantizer", "midi"],
    image: "vo1t-distingmk4-a6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=22",
  },
  {
    hardware: "distingmk4",
    id: "a7",
    name: "Comparator",
    tags: ["utility", "math"],
    image: "vo1t-distingmk4-a7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=24",
  },
  {
    hardware: "distingmk4",
    id: "a8",
    name: "Dual Waveshaper",
    tags: ["effects"],
    image: "vo1t-distingmk4-a8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=24",
  },
  {
    hardware: "distingmk4",
    id: "b1",
    name: "Sample and Hold",
    tags: ["cv"],
    image: "vo1t-distingmk4-b1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=25",
  },
  {
    hardware: "distingmk4",
    id: "b2",
    name: "Slew Rate Limiter",
    tags: ["cv"],
    image: "vo1t-distingmk4-b2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=26",
  },
  {
    hardware: "distingmk4",
    id: "b3",
    name: "Pitch and Envelope Tracker",
    tags: ["cv"],
    image: "vo1t-distingmk4-b3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=26",
  },
  {
    hardware: "distingmk4",
    id: "b4",
    name: "Clockable Delay/Echo",
    tags: ["effects", "delay"],
    image: "vo1t-distingmk4-b4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=27",
  },
  {
    hardware: "distingmk4",
    id: "b5",
    name: "LFO",
    tags: ["lfo"],
    image: "vo1t-distingmk4-b5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=28",
  },
  {
    hardware: "distingmk4",
    id: "b6",
    name: "Clockable LFO",
    tags: ["lfo"],
    image: "vo1t-distingmk4-b6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=29",
  },
  {
    hardware: "distingmk4",
    id: "b7",
    name: "VCO with linear FM",
    tags: ["vco", "midi"],
    image: "vo1t-distingmk4-b7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=30",
  },
  {
    hardware: "distingmk4",
    id: "b8",
    name: "VCO with waveshaping",
    tags: ["vco", "midi"],
    image: "vo1t-distingmk4-b8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=31",
  },
  {
    hardware: "distingmk4",
    id: "c1",
    name: "Precision Adder (fractional offsets)",
    tags: ["utility", "math"],
    image: "vo1t-distingmk4-c1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=32",
  },
  {
    hardware: "distingmk4",
    id: "c2",
    name: "Voltage Controlled Delay Line",
    tags: ["effects", "delay"],
    image: "vo1t-distingmk4-c2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=32",
  },
  {
    hardware: "distingmk4",
    id: "c3",
    name: "Clockable Ping Pong Delay (Z feedback)",
    tags: ["effects", "delay"],
    image: "vo1t-distingmk4-c3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=33",
  },
  {
    hardware: "distingmk4",
    id: "c4",
    name: "Clockable Ping Pong Delay (Z input pan)",
    tags: ["effects", "delay"],
    image: "vo1t-distingmk4-c4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=34",
  },
  {
    hardware: "distingmk4",
    id: "c5",
    name: "Resonator",
    tags: ["filter"],
    image: "vo1t-distingmk4-c5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=34",
  },
  {
    hardware: "distingmk4",
    id: "c6",
    name: "Vocoder",
    tags: ["effects"],
    image: "vo1t-distingmk4-c6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=35",
  },
  {
    hardware: "distingmk4",
    id: "c7",
    name: "Phaser",
    tags: ["effects", "phaser"],
    image: "vo1t-distingmk4-c7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=36",
  },
  {
    hardware: "distingmk4",
    id: "c8",
    name: "Bit Crusher",
    tags: ["effects"],
    image: "vo1t-distingmk4-c8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=36",
  },
  {
    hardware: "distingmk4",
    id: "d1",
    name: "DJ Filter",
    tags: ["effects", "filter"],
    image: "vo1t-distingmk4-d1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=38",
  },
  {
    hardware: "distingmk4",
    id: "d2",
    name: "Tape Delay",
    tags: ["effects", "delay"],
    image: "vo1t-distingmk4-d2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=38",
  },
  {
    hardware: "distingmk4",
    id: "d3",
    name: "Waveform Animator",
    tags: ["effects", "filter"],
    image: "vo1t-distingmk4-d3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=39",
  },
  {
    hardware: "distingmk4",
    id: "d4",
    name: "State Variable Filter",
    tags: ["filter"],
    image: "vo1t-distingmk4-d4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=40",
  },
  {
    hardware: "distingmk4",
    id: "d5",
    name: "LP/HP Filter",
    tags: ["filter"],
    image: "vo1t-distingmk4-d5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=40",
  },
  {
    hardware: "distingmk4",
    id: "d6",
    name: "LP/BP Filter",
    tags: ["filter"],
    image: "vo1t-distingmk4-d6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=41",
  },
  {
    hardware: "distingmk4",
    id: "d7",
    name: "BP/HP Filter",
    tags: ["filter"],
    image: "vo1t-distingmk4-d7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=41",
  },
  {
    hardware: "distingmk4",
    id: "d8",
    name: "BP/Notch Filter",
    tags: ["filter"],
    image: "vo1t-distingmk4-d8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=41",
  },
  {
    hardware: "distingmk4",
    id: "e1",
    name: "AR Envelope",
    tags: ["envelope", "cv"],
    image: "vo1t-distingmk4-e1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=42",
  },
  {
    hardware: "distingmk4",
    id: "e2",
    name: "AR Envelope & VCA",
    tags: ["envelope", "cv"],
    image: "vo1t-distingmk4-e2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=43",
  },
  {
    hardware: "distingmk4",
    id: "e3",
    name: "Dual AR Envelope",
    tags: ["envelope", "cv"],
    image: "vo1t-distingmk4-e3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=44",
  },
  {
    hardware: "distingmk4",
    id: "e4",
    name: "Stereo Compressor",
    tags: ["utility", "compressor"],
    image: "vo1t-distingmk4-e4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=45",
  },
  {
    hardware: "distingmk4",
    id: "e5",
    name: "Side-chain Compressor",
    tags: ["utility", "compressor"],
    image: "vo1t-distingmk4-e5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=46",
  },
  {
    hardware: "distingmk4",
    id: "e6",
    name: "Mono Compressor",
    tags: ["utility", "compressor"],
    image: "vo1t-distingmk4-e6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=46",
  },
  {
    hardware: "distingmk4",
    id: "e7",
    name: "Euro to Buchla Converter",
    tags: ["utility", "buchla"],
    image: "vo1t-distingmk4-e7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=47",
  },
  {
    hardware: "distingmk4",
    id: "e8",
    name: "Buchla to Euro Converter",
    tags: ["utility", "buchla"],
    image: "vo1t-distingmk4-e8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=48",
  },
  {
    hardware: "distingmk4",
    id: "f1",
    name: "Clockable AD Envelope (with mute)",
    tags: ["envelope", "cv"],
    image: "vo1t-distingmk4-f1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=48",
  },
  {
    hardware: "distingmk4",
    id: "f2",
    name: "Clockable AD Envelope (with gate)",
    tags: ["envelope", "cv"],
    image: "vo1t-distingmk4-f2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=49",
  },
  {
    hardware: "distingmk4",
    id: "f3",
    name: "Clockable AD Envelope (with trigger) pp ",
    tags: ["envelope", "cv"],
    image: "vo1t-distingmk4-f3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=50",
  },
  {
    hardware: "distingmk4",
    id: "f4",
    name: "Clockable AD Envelope & VCA",
    tags: ["envelope", "cv"],
    image: "vo1t-distingmk4-f4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=51",
  },
  {
    hardware: "distingmk4",
    id: "f5",
    name: "Shift Register Random CVs",
    tags: ["cv", "sequencer", "random"],
    image: "vo1t-distingmk4-f5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=52",
  },
  {
    hardware: "distingmk4",
    id: "f6",
    name: "Shift Register Random Quantized CVs",
    tags: ["cv", "sequencer", "random", "midi"],
    image: "vo1t-distingmk4-f6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=53",
  },
  {
    hardware: "distingmk4",
    id: "f7",
    name: "Shift Register Random Triggers",
    tags: ["sequencer", "random"],
    image: "vo1t-distingmk4-f7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=54",
  },
  {
    hardware: "distingmk4",
    id: "f8",
    name: "Shift Register Random Dual Triggers",
    tags: ["sequencer", "random"],
    image: "vo1t-distingmk4-f8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=55",
  },
  {
    hardware: "distingmk4",
    id: "g1",
    name: "ES-1 Emulation",
    tags: ["utility", "silentway"],
    image: "vo1t-distingmk4-g1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=56",
  },
  {
    hardware: "distingmk4",
    id: "g2",
    name: "ES-2 Emulation",
    tags: ["utility", "silentway"],
    image: "vo1t-distingmk4-g2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=56",
  },
  {
    hardware: "distingmk4",
    id: "g3",
    name: "Pitch Reference",
    tags: ["utility", "tune"],
    image: "vo1t-distingmk4-g3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=57",
  },
  {
    hardware: "distingmk4",
    id: "g4",
    name: "Frequency Reference",
    tags: ["utility", "tune"],
    image: "vo1t-distingmk4-g4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=57",
  },
  {
    hardware: "distingmk4",
    id: "g5",
    name: "Tuner",
    tags: ["utility", "tune"],
    image: "vo1t-distingmk4-g5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=58",
  },
  {
    hardware: "distingmk4",
    id: "g6",
    name: "Clock",
    tags: ["clock", "midi"],
    image: "vo1t-distingmk4-g6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=58",
  },
  {
    hardware: "distingmk4",
    id: "g7",
    name: "MIDI/CV",
    tags: ["midi"],
    image: "vo1t-distingmk4-g7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=61",
  },
  {
    hardware: "distingmk4",
    id: "g8",
    name: "CV/MIDI",
    tags: ["midi"],
    image: "vo1t-distingmk4-g8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=62",
  },
  {
    hardware: "distingmk4",
    id: "h1",
    name: "Crossfade/Pan",
    tags: ["mix"],
    image: "vo1t-distingmk4-h1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=62",
  },
  {
    hardware: "distingmk4",
    id: "h2",
    name: "Dual Sample and Hold",
    tags: ["cv"],
    image: "vo1t-distingmk4-h2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=64",
  },
  {
    hardware: "distingmk4",
    id: "h3",
    name: "Dual Quantizer (Z scale)",
    tags: ["quantizer", "midi"],
    image: "vo1t-distingmk4-h3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=64",
  },
  {
    hardware: "distingmk4",
    id: "h4",
    name: "Dual Quantizer",
    tags: ["quantizer", "midi"],
    image: "vo1t-distingmk4-h4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=66",
  },
  {
    hardware: "distingmk4",
    id: "h5",
    name: "Dual Euclidean Patterns",
    tags: ["cv", "sequencer"],
    image: "vo1t-distingmk4-h5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=67",
  },
  {
    hardware: "distingmk4",
    id: "h6",
    name: "Dual Delayed Pulse Generator",
    tags: ["utility"],
    image: "vo1t-distingmk4-h6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=68",
  },
  {
    hardware: "distingmk4",
    id: "h7",
    name: "Noise",
    tags: ["noise", "voice"],
    image: "vo1t-distingmk4-h7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=69",
  },
  {
    hardware: "distingmk4",
    id: "h8",
    name: "Quantizer 2",
    tags: ["quantizer", "midi"],
    image: "vo1t-distingmk4-h8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=70",
  },
  {
    hardware: "distingmk4",
    id: "i1",
    name: "Audio Playback",
    tags: ["playback", "midi"],
    image: "vo1t-distingmk4-i1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=71",
  },
  {
    hardware: "distingmk4",
    id: "i2",
    name: "Clocked Audio Playback",
    tags: ["playback", "midi"],
    image: "vo1t-distingmk4-i2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=72",
  },
  {
    hardware: "distingmk4",
    id: "i3",
    name: "Audio Playback with V/Oct",
    tags: ["playback", "midi"],
    image: "vo1t-distingmk4-i3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=73",
  },
  {
    hardware: "distingmk4",
    id: "i4",
    name: "Audio Playback with Z Speed",
    tags: ["playback", "midi"],
    image: "vo1t-distingmk4-i4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=74",
  },
  {
    hardware: "distingmk4",
    id: "i5",
    name: "Audio Playback with Reverse",
    tags: ["playback", "midi"],
    image: "vo1t-distingmk4-i5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=75",
  },
  {
    hardware: "distingmk4",
    id: "i6",
    name: "Audio Playback with Scrub",
    tags: ["playback"],
    image: "vo1t-distingmk4-i6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=75",
  },
  {
    hardware: "distingmk4",
    id: "i7",
    name: "Dual Audio Playback",
    tags: ["playback", "midi"],
    image: "vo1t-distingmk4-i7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=76",
  },
  {
    hardware: "distingmk4",
    id: "i8",
    name: "Dual Audio Playback with Z Speed",
    tags: ["playback", "midi"],
    image: "vo1t-distingmk4-i8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=77",
  },
  {
    hardware: "distingmk4",
    id: "j1",
    name: "MIDI File Playback (Clocked)",
    tags: ["playback", "midi"],
    image: "vo1t-distingmk4-j1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=78",
  },
  {
    hardware: "distingmk4",
    id: "j2",
    name: "Multisample 2 Audio Playback",
    tags: ["playback", "voice", "midi"],
    image: "vo1t-distingmk4-j2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=78",
  },
  {
    hardware: "distingmk4",
    id: "j3",
    name: "MIDI File Playback (Free Running)",
    tags: ["midi", "midi"],
    image: "vo1t-distingmk4-j3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=79",
  },
  {
    hardware: "distingmk4",
    id: "j4",
    name: "Audio Playback with End CV",
    tags: ["playback", "midi"],
    image: "vo1t-distingmk4-j4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=80",
  },
  {
    hardware: "distingmk4",
    id: "j5",
    name: "Audio Recorder",
    tags: ["record"],
    image: "vo1t-distingmk4-j5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=81",
  },
  {
    hardware: "distingmk4",
    id: "j6",
    name: "Multisample Audio Playback",
    tags: ["playback", "midi"],
    image: "vo1t-distingmk4-j6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=82",
  },

  {
    hardware: "distingmk4",
    id: "j7",
    name: "Mono Audio Recorder",
    tags: ["record"],
    image: "vo1t-distingmk4-j7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=84",
  },
  {
    hardware: "distingmk4",
    id: "j8",
    name: "Audio Playback with Crossfade",
    tags: ["playback"],
    image: "vo1t-distingmk4-j8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=84",
  },
  {
    hardware: "distingmk4",
    id: "k1",
    name: "Wavetable VCO",
    tags: ["vco", "midi", "voice"],
    image: "vo1t-distingmk4-k1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=86",
  },

  {
    hardware: "distingmk4",
    id: "k2",
    name: "Clockable Wavetable LFO",
    tags: ["lfo"],
    image: "vo1t-distingmk4-k2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=88",
  },
  {
    hardware: "distingmk4",
    id: "k3",
    name: "Wavetable Waveshaper",
    tags: ["effects"],
    image: "vo1t-distingmk4-k3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=89",
  },
  {
    hardware: "distingmk4",
    id: "k4",
    name: "Clockable Wavetable Envelope",
    tags: ["envelope"],
    image: "vo1t-distingmk4-k4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=90",
  },
  {
    hardware: "distingmk4",
    id: "k5",
    name: "Programmable Quantizer",
    tags: ["quantizer", "scala"],
    image: "vo1t-distingmk4-k5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=91",
  },
  {
    hardware: "distingmk4",
    id: "k6",
    name: "Clockable SD Delay",
    tags: ["effects", "delay"],
    image: "vo1t-distingmk4-k6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=92",
  },
  {
    hardware: "distingmk4",
    id: "k7",
    name: "Stereo Clockable SD Delay",
    tags: ["effects", "delay"],
    image: "vo1t-distingmk4-k7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=93",
  },
  {
    hardware: "distingmk4",
    id: "k8",
    name: "Stereo Clockable SD Delay (Z clock)",
    tags: ["effects", "delay"],
    image: "vo1t-distingmk4-k8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=93",
  },
  {
    hardware: "distingmk4",
    id: "l1",
    name: "Stereo Reverb",
    tags: ["effects", "reverb", "stereo"],
    image: "vo1t-distingmk4-l1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=94",
  },
  {
    hardware: "distingmk4",
    id: "l2",
    name: "Mono-to-Stereo Reverb",
    tags: ["effects", "reverb", "stereo"],
    image: "vo1t-distingmk4-l2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=95",
  },
  {
    hardware: "distingmk4",
    id: "l3",
    name: "Dual Reverb",
    tags: ["effects", "reverb"],
    image: "vo1t-distingmk4-l3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=96",
  },
  {
    hardware: "distingmk4",
    id: "l4",
    name: "Dual Vowel Filter",
    tags: ["effects", "filter"],
    image: "vo1t-distingmk4-l4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=97",
  },
  {
    hardware: "distingmk4",
    id: "l5",
    name: "Stereo Chorus",
    tags: ["effects", "chorus", "stereo"],
    image: "vo1t-distingmk4-l5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=98",
  },
  {
    hardware: "distingmk4",
    id: "l6",
    name: "Mono Chorus",
    tags: ["effects", "chorus"],
    image: "vo1t-distingmk4-l6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=99",
  },
  {
    hardware: "distingmk4",
    id: "l7",
    name: "Mixer",
    tags: ["mix"],
    image: "vo1t-distingmk4-l7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=100",
  },
  {
    hardware: "distingmk4",
    id: "l8",
    name: "Gate",
    tags: ["gate"],
    image: "vo1t-distingmk4-l8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=100",
  },
  {
    hardware: "distingmk4",
    id: "m1",
    name: "Delayed LFO",
    tags: ["lfo"],
    image: "vo1t-distingmk4-m1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=101",
  },
  {
    hardware: "distingmk4",
    id: "m2",
    name: "Scaled LFO",
    tags: ["lfo"],
    image: "vo1t-distingmk4-m2.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=102",
  },
  {
    hardware: "distingmk4",
    id: "m3",
    name: "Logic",
    tags: ["utility", "logic"],
    image: "vo1t-distingmk4-m3.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=103",
  },
  {
    hardware: "distingmk4",
    id: "m4",
    name: "Half-wave Rectifier",
    tags: ["utility", "math"],
    image: "vo1t-distingmk4-m4.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=104",
  },
  {
    hardware: "distingmk4",
    id: "m5",
    name: "Stereo Filter",
    tags: ["filter", "stereo"],
    image: "vo1t-distingmk4-m5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=104",
  },
  {
    hardware: "distingmk4",
    id: "m6",
    name: "Stereo Tape Delay",
    tags: ["effects", "delay", "stereo"],
    image: "vo1t-distingmk4-m6.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=105",
  },
  {
    hardware: "distingmk4",
    id: "m7",
    name: "Granular Pitch Shifter",
    tags: ["granular"],
    image: "vo1t-distingmk4-m7.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=106",
  },
  // {
  //   hardware: "distingmk4",
  //   id: "m8",
  //   name: "Chaos",
  //   tags: ["chaos", "cv"],
  //   image: "vo1t-distingmk4-m8.png",
  //   documentation:
  //     "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=107",
  // },
  {
    hardware: "distingmk4",
    id: "n1",
    name: "Switch",
    tags: ["mix"],
    image: "vo1t-distingmk4-n1.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=108",
  },
  // {
  //   hardware: "distingmk4",
  //   id: "n2",
  //   name: "Rotary",
  //   tags: ["effects", "leslie"],
  //   image: "vo1t-distingmk4-n2.png",
  //   documentation:
  //     "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=109",
  // },
  {
    hardware: "distingmk4",
    id: "n5",
    name: "Pulsar VCO",
    tags: ["vco", "voice", "midi"],
    image: "vo1t-distingmk4-n5.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=110",
  },
  {
    hardware: "distingmk4",
    id: "n8",
    name: "Clockable SD Ping Pong",
    tags: ["effects", "delay", "stereo"],
    image: "vo1t-distingmk4-n8.png",
    documentation:
      "https://www.expert-sleepers.co.uk/downloads/manuals/disting_user_manual_4.20.pdf#page=111",
  },
];

export function GetModeById(id: string): Mode | undefined {
  return modes.find((x) => x.id === id);
}

export default modes;
