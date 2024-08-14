import styles from "@/domain/presentation/pages/favorite/favorite.module.scss";
import Card from "@/domain/presentation/components/card";
import ImageClient from "@/domain/presentation/components/images";
import fontStyles from "@/domain/presentation/styles/fonts.module.scss";
import Link from "next/link";
import { Badge } from "@/domain/presentation/components/badges";
import { GetListsOfFavoritesPearl } from "@/domain/usecases/get-lists-of-favorite-pearl";
import FavoriteProduct from "@/domain/presentation/pages/favorite/favorite-product";

export default async function Favorite() {

    return (
        <>
            <Badge title="Favorite" type="secondary"/>
            <div className={styles.favorite__wrapper}>
            <FavoriteProduct/>
        </div>
        </>
    );
}
