import styles from "@/domain/presentation/pages/detail/detail.module.scss"
import { RoundedButton } from "../../components/button"
import { Love } from "../../components/icons"
export default function Liked(){
    return (
        <>
            <RoundedButton className={`${styles.detail__loved} ${styles.detail__lovedActive}`}>
                <Love color="white"/>
            </RoundedButton>
        </>
    )
}