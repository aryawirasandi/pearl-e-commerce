import styles from "@/domain/presentation/pages/favorite/favorite.module.scss";
import Card from "@/domain/presentation/components/card";
import ImageClient from "@/domain/presentation/components/images";
import fontStyles from "@/domain/presentation/styles/fonts.module.scss";
import Link from "next/link";
import { Badge } from "@/domain/presentation/components/badges";

export default async function Favorite() {
    return (
        <>
            <Badge title="Favorite" type="secondary"/>
            <div className={styles.favorite__wrapper}>
            {[1,2,3,4,5].map((index) => {
                return <>
                    <Link href="/product/123">
                        <Card key={index} shadowed>
                            <ImageClient src="/assets/images/catalogs/earring.png" alt="earring" width={150} height={280}/>
                            <div className={styles.favorite__cardDescription}>
                                <p>Lorem Ipsum</p>
                                <p className={fontStyles.Bold}>Rp 100.000</p>
                            </div>
                        </Card>
                    </Link>
                </>
            })}
        </div>
        </>
    );
}
