import { ICONS } from "../../constants"
import Icon from "../icon/Icon"
import style from "./Loading.module.css"

export default function Loading() {
    return <div className={style.container}><Icon className={style.spinner} icon={ICONS.LOADING} /></div>
}