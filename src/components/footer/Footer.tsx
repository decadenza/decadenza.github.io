import { GENERAL } from "../../constants"
import Icon from "../../components/icon/Icon"
import { ICONS } from "../../constants"
import EmailRevealer from "../emailRevealer/EmailRevealer"

export default function Footer() {
    return <footer>
        <div>&copy; 2026 {GENERAL.MY_NAME}</div>
        <address>
            <EmailRevealer /><br />
            <h4>
                <a target="_blank" href="https://www.linkedin.com/in/pasquale-lafiosca/"><Icon icon={ICONS.LINKEDIN} /></a>
                <a target="_blank" href="https://github.com/decadenza/"><Icon icon={ICONS.GITHUB} /></a>
                <a target="_blank" href="https://scholar.google.com/citations?user=0pup5JUAAAAJ"><Icon icon={ICONS.GOOGLE_SCHOLAR} /></a>
            </h4>
        </address>
    </footer>
}