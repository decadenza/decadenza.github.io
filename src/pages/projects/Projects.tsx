import style from './Projects.module.css';
import Icon from '../../components/icon/Icon';
import ImageGallery from '../../components/imageGallery/ImageGallery';
import { ICONS } from '../../constants';

export default function Services() {
    return (<div className={style.container}>

        <article>
            <header>
                <h1><Icon icon={ICONS.DIAGRAM} />Projects</h1>
                Some of my work is in the public domain. I like to give back to the open source community when I can.
            </header>

            <h3>🥂 ProsecCoAP - A CoAP client/server library for Arduino</h3>
            I believe the CoAP protocol has a future in embedded applications, so I developed <a target="_blank" href="https://github.com/decadenza/ProsecCoAP">ProsecCoAP</a> for fast development on Arduino platform.
            The library is available on <a target="_blank" href="https://github.com/decadenza/ProsecCoAP"><Icon icon={ICONS.GITHUB} />GitHub</a> and is also published
            through the Arduino Library Manager
            and PlatformIO.
            <br />
            <br />

            <h3>Stereo vision library</h3>
            During my research work I've collected all the code I needed into a Python library. This is no longer actively maintained
            but contains an invaluable set of functions for stereo vision and 3D reconstruction.
            The library is available on <a target="_blank" href="https://github.com/decadenza/SimpleStereo"><Icon icon={ICONS.GITHUB} />GitHub</a>.
            In particular, I'm particularly proud of a novel stereo rectification algorithm, also available as <a href="https://github.com/decadenza/DirectStereoRectification" target="_blank">standalone
                repository</a> and related <a target="_blank" href="https://doi.org/10.1007/978-3-031-10464-0_33">published paper</a>.
            <br />
            <br />

            <h3>Old Style Digital Clock</h3>
            Just for fun, I've designed a digital clock based on a Pierce oscillator, USB power and USB charging ports.
            It uses no microcontrollers.
            The KiCAD project is available <a target="_blank" href="https://github.com/decadenza/OldStyleDigitalClock">here</a>.
            <ImageGallery>
                <img src="https://raw.githubusercontent.com/decadenza/OldStyleDigitalClock/main/img/clock_pcb.jpg" alt="Old Style Digital Clock PCB" />
                <img src="https://raw.githubusercontent.com/decadenza/OldStyleDigitalClock/main/img/clock_final.jpg" alt="Old Style Digital Clock" />
            </ImageGallery>

        </article>





    </div>
    );

}