import style from './Services.module.css';
import Icon from '../../components/icon/Icon';
import { ICONS } from '../../constants';
import EmailRevealer from "../../components/emailRevealer/EmailRevealer";

export default function Services() {

    return (<div className={style.container}>

        <article>
            <header><h1><Icon icon={ICONS.WRENCH} />Services</h1></header>
            I'd be happy to offer my services around software, particularly in areas like:
            <ul>
                <li>Embedded software and IoT product development.</li>
                <li>Custom development of websites, APIs and cloud services.</li>
                <li>DevOps and Agile/Scrum training.</li>
                <li>Support for research activities and related custom software.</li>
            </ul>

            The first step is to drop me an email <EmailRevealer /> or
            connect with me on <a target="_blank" href="https://www.linkedin.com/in/pasquale-lafiosca/">
                <Icon icon={ICONS.LINKEDIN} />LinkedIn</a>!
        </article>





    </div>
    );

}