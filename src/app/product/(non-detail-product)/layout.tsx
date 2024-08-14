import {ReactNode} from "react";
import MainLayout from "@/domain/presentation/components/main-layout";

export default function Layout({ children }: { children: ReactNode }) {
    return <>
        <MainLayout>
            {children}
        </MainLayout>
    </>
}