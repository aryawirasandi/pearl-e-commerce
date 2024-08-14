import Image from "next/image";
import styles from "./images.module.scss"

type ImageClientProps = {
    src: string;
    width: number;
    height: number;
    alt: string;
}
export default function ImageClient(props: ImageClientProps){
    return <Image className={styles.images} {...props}/>
}