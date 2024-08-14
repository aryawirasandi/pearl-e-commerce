import styles from "@/domain/presentation/pages/favorite/favorite.module.scss";
import Card from "@/domain/presentation/components/card";
import ImageClient from "@/domain/presentation/components/images";
import fontStyles from "@/domain/presentation/styles/fonts.module.scss";
import Link from "next/link";
import { Badge } from "@/domain/presentation/components/badges";
import { GetListsOfFavoritesPearl } from "@/domain/usecases/get-lists-of-favorite-pearl";

export default async function Favorite() {
    const result = (await new GetListsOfFavoritesPearl().execute());
    return (
        <>
            <Badge title="Favorite" type="secondary"/>
            <div className={styles.favorite__wrapper}>
            {result && result.data.map((item) => {
                return <>
                    <Link href={`/product/${item.id}`}>
                        <Card key={item.id} shadowed>
                            <ImageClient src={item.image_url} alt="earring" width={150} height={280}/>
                            <div className={styles.favorite__cardDescription}>
                                <p>{item.name}</p>
                                <p className={fontStyles.Bold}>Rp {item.price}</p>
                            </div>
                        </Card>
                    </Link>
                </>
            })}
        </div>
        </>
    );
}
