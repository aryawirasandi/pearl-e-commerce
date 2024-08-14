"use client";

import {ReactNode} from "react";
import "@/domain/presentation/styles/variables.module.scss"
import Navbar from "@/domain/presentation/components/navbar";
import styles from "@/domain/presentation/components/main-layout/main-layout.module.scss"
type MainLayoutProps = {
    children: ReactNode
}
const MainLayout = ({children}: MainLayoutProps) => {
    return <main className={styles.mainLayout}>
        <Navbar/>
        {children}
    </main>
}

export default MainLayout;