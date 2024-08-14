import styles from "./button.module.scss"
import Link from "next/link";

type ButtonProps = {children: React.ReactNode, className?: string, id?: string, onClick?: React.MouseEventHandler<HTMLButtonElement> }

type ButtonPropsLink = { href: string } & Omit<ButtonProps, | "onClick">
export function RoundedButton({ children, className, ...props }: ButtonProps) {
    return <button className={`${styles.buttonRounded} ${className || ""}`} {...props}>
        {children}
    </button>
}

export function RoundedLinkButton({ children, className,  ...props }: ButtonPropsLink) {
    return <Link className={`${styles.buttonRoundedLink} ${className || ""}`} {...props}>
        {children}
    </Link>
}