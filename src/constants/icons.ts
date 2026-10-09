/**
 * Icon definitions and exports.
 * 
 * @module constants/icons
 */
//import type { IconDefinition, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
//import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faAngleLeft,
    faAngleRight,
    faAnglesLeft,
    faAnglesRight,
    faArrowDown,
    faArrowLeft,
    faArrowRight,
    faArrowRotateLeft,
    faArrowsRotate,
    faArrowsUpToLine,
    faArrowUp,
    faBars,
    faBolt,
    faBurst,
    faCheck,
    faCircle,
    faCircleCheck,
    faCircleExclamation,
    faCircleInfo,
    faCircleQuestion,
    faClock,
    faDatabase,
    faDiagramProject,
    faDoorOpen,
    faFile,
    faGear,
    faHourglassEnd,
    faHouse,
    faLock,
    faMagnifyingGlass,
    faMicroscope,
    faMoon,
    faPause,
    faPen,
    faPlay,
    faPlus,
    faPowerOff,
    faSliders,
    faSpinner,
    faSquareCheck,
    faSquareUpRight,
    faStop,
    faTrash,
    faTriangleExclamation,
    faWind,
    faWrench,
    faXmark,
} from '@fortawesome/free-solid-svg-icons'

import { faLinkedin, faGithub, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';

import {
    faSquare,
} from '@fortawesome/free-regular-svg-icons'

// NOTE: Custom icon may also be loaded from local SVG files.
// See https://docs.fontawesome.com/web/add-icons/upload-icons/icon-design

// SECTION Define custom icons and append them to the FontAwesome icon library.
// const customIsopersistent = {
//     prefix: "custom" as IconPrefix,
//     iconName: "isopersistent" as IconName,
//     icon: [
//         20, // Width extracted from your SVG's viewBox (e.g., viewBox="0 0 24 24")
//         20, // Height extracted from your SVG's viewBox
//         [], // ligatures (optional, usually empty for custom SVGs)
//         '', // unicode (optional, can be an empty string or unique identifier)
//         'M9.29297' // The 'd' attribute value from your SVG's <path> tag
//     ],
// } as IconDefinition;

// TODO Add other icons here, as needed..

// !SECTION

/**
 * SECTION Icon exports.
 * Associate our general actions to specific icons.
 */
export const ADD = faPlus;
export const ADJUST = faSliders;
export const ALERT = faCircleExclamation;
export const ARROW_DOWN = faArrowDown;
export const ARROW_LEFT = faArrowLeft;
export const ARROW_RIGHT = faArrowRight;
export const ARROW_UP = faArrowUp;
export const CANCEL = faXmark;
export const CHECKBOX_CHECKED = faSquareCheck;
export const CHECKBOX_UNCHECKED = faSquare;
export const CIRCLE = faCircle;
export const CLOCK = faClock;
export const CLOSE = faXmark;
export const DATA = faDatabase;
export const DIAGRAM = faDiagramProject;
export const DOCUMENT = faFile;
export const EDIT = faPen;
export const ERROR = faCircleExclamation;
export const EXTERNAL_LINK = faSquareUpRight;
export const FAILURE = faCircleExclamation;
export const GITHUB = faGithub;
export const GOOGLE_SCHOLAR = faGoogleScholar;
export const HEAT = faArrowsUpToLine;
export const HOME = faHouse;
export const IDLE = faHourglassEnd;
export const INFO = faCircleInfo;
export const INVALID = faXmark;
export const LINKEDIN = faLinkedin;
export const LOADING = faSpinner;
export const LOCKED = faLock;
export const LOGOUT = faDoorOpen;
export const MENU = faBars;
export const MICROSCOPE = faMicroscope;
export const OK = faCheck;
export const PAGE_FIRST = faAnglesLeft;
export const PAGE_LAST = faAnglesRight;
export const PAGE_NEXT = faAngleRight;
export const PAGE_PREVIOUS = faAngleLeft;
export const PAUSE = faPause;
export const PLAY = faPlay;
export const POWER = faBolt;
export const POWER_OFF = faPowerOff;
export const POWERING_OFF = faMoon;
export const REBOOT = faArrowRotateLeft;
export const REFRESH = faArrowsRotate;
export const SEARCH = faMagnifyingGlass; // Used for search bars.
export const SETTINGS = faGear;
export const STOP = faStop;
export const SUCCESS = faCircleCheck;
export const SUSPENDED = faStop;
export const TIME = faHourglassEnd;
export const TRACKING = faBurst;
export const TRASH = faTrash;
export const UNKNOWN = faCircleQuestion;
export const VALID = faCheck;
export const WAIT = faClock;
export const WARNING = faTriangleExclamation;
export const WIND = faWind;
export const WRENCH = faWrench;
// TODO: Add other icons with relatable names here...


// !SECTION