import { useState } from 'react';
import { GENERAL } from '../../constants';
import decodeAscii from '../../utils/data'
import style from './EmailRevealer.module.css';

export default function EmailRevealer() {
    const [revealed, setRevealed] = useState(false);

    if (revealed) {
        const email = `${decodeAscii(GENERAL.EMAIL)}`;
        return <a href={`mailto:${email}`}>
            {email}
        </a>
    }
    else {
        return (
            <span
                className={style.revealer}
                onClick={() => setRevealed(true)}
            >
                (click to reveal email address)
            </span>
        );
    }
}