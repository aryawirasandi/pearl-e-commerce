"use client"

import styles from "./card.module.scss"
import {ReactNode} from "react";

type propsCard = {
    children: ReactNode,
    className?: string,
    shadowed?: boolean
}

export default function Card({ children, className, shadowed = false} : propsCard ){
    return <div className={`${styles.card} ${shadowed ? styles.card__shadow : "" } ${className || ""}`}>
        {children}
    </div>
}