"use client";

import {useEffect, useState} from "react";
import {ICatalogs} from "@/domain/entities/products";
import {GetListsOfFavoritesPearl} from "@/domain/usecases/get-lists-of-favorite-pearl";
import Link from "next/link";
import Card from "@/domain/presentation/components/card";
import ImageClient from "@/domain/presentation/components/images";
import styles from "@/domain/presentation/pages/favorite/favorite.module.scss";
import fontStyles from "@/domain/presentation/styles/fonts.module.scss";

export default function FavoriteProduct(){
    const [products, setProducts] = useState<ICatalogs>([]);

    useEffect(() => {
        async function getProducts(){
            const result = await new GetListsOfFavoritesPearl().execute();
            setProducts([...result.data]);
        }
        getProducts();
    }, []);
    return <>
        {products && products.map((item) => {
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
    </>
}