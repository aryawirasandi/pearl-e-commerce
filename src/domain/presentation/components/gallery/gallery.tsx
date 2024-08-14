import {ReactNode} from "react";
import styles from "./gallery.module.scss"
type GalleryProps = {
    children: ReactNode;
    className?: string;
    url?: string | undefined;
}

export default function Gallery({ children, url, className}: GalleryProps) {
    if (url) {
        return <div className={`${styles.gallery} ${className || ""}`} style={{
            backgroundImage: `url("${url}")`,
        }}>
            {children}
        </div>
    }
    return <div className={`${styles.gallery} ${className}`}>
        {children}
    </div>
}