import style from "./NavBar.module.css"
import { GENERAL, ICONS } from "../../constants"
import { NavLink } from 'react-router-dom';
import Icon from "../icon/Icon"

const MENU_ITEMS = [
    { icon: ICONS.HOME, label: 'Home', href: '/' },
    { icon: ICONS.DIAGRAM, label: 'My Projects', href: '/projects' },
    { icon: ICONS.WRENCH, label: 'Services', href: '/services' },
];

export default function Navbar() {
    return (
        <header className={style.container}>
            <nav>
                <ul>
                    <li>
                        <a href="/" className={style.brand}>
                            <img src="/img/logo.svg" alt="Brand logo" className={style.brandLogo} />
                            <span>{GENERAL.APP_NAME}</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    {MENU_ITEMS.map((item) => (
                        <li key={item.label}>
                            <NavLink
                                to={item.href}
                                className={({ isActive }) => (isActive ? style.activeLink : '')}
                            >
                                {item.icon && <Icon icon={item.icon} />} {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}