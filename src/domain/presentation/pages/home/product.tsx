"use client"
import styles from "@/domain/presentation/pages/home/home.module.scss";
import Link from "next/link";
import Card from "@/domain/presentation/components/card";
import ImageClient from "@/domain/presentation/components/images";
import fontStyles from "@/domain/presentation/styles/fonts.module.scss";
import {GetListsOfPearl} from "@/domain/usecases/get-lists-of-pearl";
import {useEffect, useState} from "react";
import {ICatalogs} from "@/domain/entities/products";

export default function Product(){
    const [products, setProducts] = useState<ICatalogs>([]);

    useEffect(() => {
        async function getProducts(){
            const result = await new GetListsOfPearl().execute();
            setProducts([...result.data]);
        }
        getProducts();
    }, []);

    return <>
        <div className={styles.home__wrapper}>
            {products && products.map((item) => {
                return <>
                    <Link href={`/product/${item.id}`}>
                        <Card key={item.id} shadowed>
                            <ImageClient src={item.image_url} alt="earring" width={150} height={280}/>
                            <div className={styles.home__cardDescription}>
                                <p>{item.name}</p>
                                <p className={fontStyles.Bold}>Rp {item.price}</p>
                            </div>
                        </Card>
                    </Link>
                </>
            })}
        </div>
    </>
}