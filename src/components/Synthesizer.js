import React from 'react';
import Container from '@material-ui/core/Container';
import './Synthesizer.scss'
import * as Tone from "tone";


export default function Keyboard() {
    const synth = new Tone.Synth().toDestination();

    async function playNote(note) {
        synth.triggerAttackRelease(`${note}`, "8n");
    }

    return (
        <Container maxWidth='lg' style={{ marginTop: '20px', display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <div id="keyboard">
            <div className="key white c" onClick={() => playNote("c3")}></div>
            <div className="key black c_sharp" onClick={() => playNote("c#3")}></div>
            <div className="key white d" onClick={() => playNote("d3")}></div>
            <div className="key black d_sharp" onClick={() => playNote("d#3")}></div>
            <div className="key white e" onClick={() => playNote("e3")}></div>
            <div className="key white f" onClick={() => playNote("f3")}></div>
            <div className="key black f_sharp" onClick={() => playNote("f#3")}></div>
            <div className="key white g" onClick={() => playNote("g3")}></div>
            <div className="key black g_sharp" onClick={() => playNote("g#3")}></div>
            <div className="key white a" onClick={() => playNote("a3")}></div>
            <div className="key black a_sharp" onClick={() => playNote("a#3")}></div>
            <div className="key white b" onClick={() => playNote("b3")}></div>
            <div className="key white c" onClick={() => playNote("c4")}></div>
            <div className="key black c_sharp" onClick={() => playNote("c#4")}></div>
            <div className="key white d" onClick={() => playNote("d4")}></div>
            <div className="key black d_sharp" onClick={() => playNote("d#4")}></div>
            <div className="key white e" onClick={() => playNote("e4")}></div>
            <div className="key white f" onClick={() => playNote("f4")}></div>
            <div className="key black f_sharp" onClick={() => playNote("f#4")}></div>
            <div className="key white g" onClick={() => playNote("g4")}></div>
            <div className="key black g_sharp" onClick={() => playNote("g#4")}></div>
            <div className="key white a" onClick={() => playNote("a4")}></div>
            <div className="key black a_sharp" onClick={() => playNote("a#4")}></div>
            <div className="key white b" onClick={() => playNote("b4")}></div>
            <div className="key white c" onClick={() => playNote("c5")}></div>
        </div>
        </Container>
        
    );
}
