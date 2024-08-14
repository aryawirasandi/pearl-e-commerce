import styles from "@/domain/presentation/pages/cart/cart.module.scss";
import Card from "@/domain/presentation/components/card";
import ImageClient from "@/domain/presentation/components/images";
import fontStyles from "@/domain/presentation/styles/fonts.module.scss";
import Link from "next/link";

export default async function Cart() {
    return (
        <div className={styles.cart__wrapper}>
            {[1,2,3,4,5].map((index) => {
                return <>
                    <Link href="/product/123">
                        <Card key={index} shadowed>
                            <ImageClient src="/assets/images/catalogs/earring.png" alt="earring" width={150} height={280}/>
                            <div className={styles.cart__cardDescription}>
                                <p>Lorem Ipsum</p>
                                <p className={fontStyles.Bold}>Rp 100.000</p>
                            </div>
                        </Card>
                    </Link>
                </>
            })}
        </div>
    );
}
