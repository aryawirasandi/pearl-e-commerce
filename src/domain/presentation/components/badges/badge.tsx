"use client"
import styles from "./badge.module.scss"
type BadgeProps = {
    title: string;
    type?: "primary" | "secondary"
}
export function Badge({ title, type = "primary" }: BadgeProps){
   switch (type) {
    case "primary":
        return <div className={styles.badge__primary}> {title} </div> 
    case "secondary":
        return <div className={styles.badge__secondary}>{title}</div>
    default:
        return <div className={styles.badge__primary}> {title} </div> 
   }   
}