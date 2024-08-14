import { useMemo } from "react"

export function Home() {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22 10.498C22 9.288 21.19 7.738 20.2 7.048L14.02 2.718C12.62 1.738 10.37 1.788 9.02 2.838L3.63 7.038C2.73 7.738 2 9.228 2 10.358V17.768C2 20.088 3.89 21.988 6.21 21.988H17.79C20.11 21.988 22 20.088 22 17.778V14.678M12 17.988V14.988"
            stroke="#1D182A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

}

export function Love({ color = "black" }: { color?: "black" | "white"}) {
    const picked = useMemo(() => { 
        if(color == "black"){
            return "#272727"
        }else{
            return "#FFF"
        }
    }, [color])
    return <svg width="24" height="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.7266 2.31466C14.3133 2.97466 14.6666 3.84133 14.6666 4.79466C14.6666 9.46133 10.3466 12.2147 8.41325 12.8813C8.18658 12.9613 7.81325 12.9613 7.58658 12.8813C5.65325 12.2147 1.33325 9.46133 1.33325 4.79466C1.33325 2.73466 2.99325 1.06799 5.03992 1.06799C6.25325 1.06799 7.32658 1.65466 7.99992 2.56133C8.34244 2.09858 8.78857 1.72248 9.30258 1.46316C9.81659 1.20383 10.3842 1.0685 10.9599 1.06799"
            stroke={picked} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}

export function Vector() {
    return <svg width="16" height="16" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.46004 4.29336L1.71337 6.04003C1.20004 6.55336 1.20004 7.39336 1.71337 7.90669L6.06004 12.2534M6.06004 1.69336L5.3667 2.38669"
            stroke="#272727" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>
}

export function Minus() {
    return <svg width="10" height="10" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.66667 1H9M1 1H4.77333" stroke="#272727" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
    </svg>


}

export function Plus() {
    return <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 9V1M7.66667 5H9M1 5H4.77333" stroke="#272727" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
    </svg>
}

export function Cart() {
    return <svg width="24" height="24" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.99988 5.11336V4.4667C3.99988 2.9667 5.20655 1.49336 6.70655 1.35336C7.12333 1.31242 7.54407 1.35918 7.94169 1.49066C8.33931 1.62213 8.70499 1.8354 9.01521 2.11673C9.32543 2.39806 9.57332 2.74123 9.7429 3.12414C9.91249 3.50706 10 3.92124 9.99988 4.34003V5.26003M1.53988 11.04L1.69322 12.2867C1.83988 13.5934 2.31988 14.6667 4.99988 14.6667H8.99988C11.6799 14.6667 12.1599 13.5934 12.2999 12.2867L12.7999 8.2867C12.9799 6.66003 12.5132 5.33336 9.66655 5.33336H4.33322C1.48655 5.33336 1.01988 6.66003 1.19988 8.2867"
            stroke="#272727" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

}