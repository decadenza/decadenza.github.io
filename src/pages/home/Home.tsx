import style from './Home.module.css';
import Icon from '../../components/icon/Icon';
import ImageGallery from '../../components/imageGallery/ImageGallery';
import { ICONS } from '../../constants';

export default function Home() {
    return (<div className={style.container}>
        <article>
            <header>
                <h1><Icon icon={ICONS.HOME} />About</h1>
            </header>
            Hello, I am Pasquale Lafiosca (often known as Paco), an Engineer, DIY lover, passioned about science and technology.
            <br />
            My background is quite diverse (and I like it in this way!).
            At a glance, I have:
            <ul>
                <li>worked in different roles as Software Engineer and Scrum Facilitator;</li>
                <li>guest lectured about Cybersecurity as Visiting Fellow at Cranfield University;</li>
                <li>been a Ph.D. researcher in Transport Systems, with the project: <i>Visual-based Automated Aircraft Inspections for 3D Skin Damage</i> (<a target="_blank" href="https://drive.google.com/file/d/1qodpXYH9iBRo8CFW9u9wIOGvZpGWM-dH/view?usp=drive_link">video</a>);</li>
                <li>trained and served for many years as financial Police Inspector in Italian antimafia.</li>
            </ul>

            I'm currently working as Software System Engineer, building the control system for calorimeters used in the battery and chemical market.<br />
            <br />
            I'm always on the lookout for new opportunities to learn and grow, interesting challenges and networking.
            In my spare time, I volunteer with the <a target="_blank" href="https://www.bedfordrepaircafe.co.uk/">Bedford
                Repair Café</a>,
            where I help people to repair their broken items and reduce waste, and I also enjoy tinkering with electronics and DIY.
            <br />
            <br />
            When it's sunny and I'm not looking at a screen, I also enjoy beekeeping. Admittedly sometimes the situation
            becomes less than pleasant, but still worth it.
            <ImageGallery imageFlexBasis="25%">
                <img src="/img/bee1.jpg" alt="Beekeeping with the smoker" />
                <img src="/img/bee2.jpg" alt="Bees with queen cell" />
            </ImageGallery>

            <br />
            Connect with me on <a target="_blank" href="https://www.linkedin.com/in/pasquale-lafiosca/"><Icon icon={ICONS.LINKEDIN} />LinkedIn
            </a> and share your story!
        </article>







    </div>
    );

}