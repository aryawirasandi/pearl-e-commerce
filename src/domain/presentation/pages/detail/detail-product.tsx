"use client";
import styles from "@/domain/presentation/pages/detail/detail.module.scss";
import Gallery from "@/domain/presentation/components/gallery/gallery";
import Link from "next/link";
import {RoundedButton} from "@/domain/presentation/components/button";
import {Vector} from "@/domain/presentation/components/icons";
import {Counter} from "@/domain/presentation/pages/detail/counter";
import Card from "@/domain/presentation/components/card";
import ImageClient from "@/domain/presentation/components/images";
import fontStyles from "@/domain/presentation/styles/fonts.module.scss";
import {GetDetailOfPearl} from "@/domain/usecases/get-detail-of-pearl";
import {useEffect, useState} from "react";
import {ICatalogs, IProduct} from "@/domain/entities/products";
import {GetListsOfPearl} from "@/domain/usecases/get-lists-of-pearl";

export default function DetailProduct({ id }: { id: string}) {
    const [detailProduct, setDetailProduct] = useState<IProduct>({
        details: {
            description: "",
            variants: []
        }, favorite: false, id: "", image_url: "", name: "", price: 0
    });

    useEffect(() => {
        async function getProducts(){
            const result = await new GetDetailOfPearl().execute(id);
            setDetailProduct({...result.data});
        }
        getProducts();
    }, [id]);

    return <div className={styles.detail}>
        <div className={styles.detail__images}>
            <Gallery url={`${detailProduct.image_url}`}>
                <Link href="/">
                    <RoundedButton className={styles.detail__vector}>
                        <Vector/>
                    </RoundedButton>
                </Link>
            </Gallery>
            <div className={styles.detail__descriptionDesktop}>
                <h2 className={styles.detail__heading}>
                    {detailProduct.name}
                </h2>
                <p className={styles.detail__price}>
                    Rp {detailProduct.price}
                </p>
                <p className={styles.detail__descriptionText}>
                    {detailProduct.details.description}
                </p>
                <div className={styles.detail__quantity}>
                    <p>Quantity</p>
                    <div className={styles.detail__quantityAction}>
                        <Counter/>
                    </div>
                </div>
                <div className={styles.detail__recomendation}>
                    <h2>Variant Product</h2>
                    <div className={styles.detail__recomendationList}>
                        {detailProduct.details.variants.map((item) => {
                            return <>
                                <div className={styles.detail__recomendationItem}>
                                    <Card className={styles.detail__recomendationCard} key={item.variant_id}>
                                        <ImageClient src="/assets/images/catalogs/earring.png" alt="earring" width={150}
                                                     height={280}/>
                                        <div className={styles.detail__cardDescription}>
                                            <p>{item.variant_name}</p>
                                            <p className={fontStyles.Bold}>Rp {item.price}</p>
                                        </div>
                                    </Card>
                                </div>
                            </>
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.detail__description}>
            <h2 className={styles.detail__heading}>
                {detailProduct.name}
            </h2>
            <p className={styles.detail__price}>
                Rp {detailProduct.price}
            </p>
            <p className={styles.detail__descriptionText}>
                {detailProduct.details.description}
            </p>
            <div className={styles.detail__quantity}>
                <p>Quantity</p>
                <div className={styles.detail__quantityAction}>
                    <Counter/>
                </div>
            </div>
            <div className={styles.detail__recomendation}>
                <h2>Variant Product</h2>
                <div className={styles.detail__recomendationList}>
                    {detailProduct.details.variants.map((item) => {
                        return <>
                            <div className={styles.detail__recomendationItem}>
                                <Card className={styles.detail__recomendationCard} key={item.variant_id}>
                                    <ImageClient src="/assets/images/catalogs/earring.png" alt="earring" width={150}
                                                 height={280}/>
                                    <div className={styles.detail__cardDescription}>
                                        <p>{item.variant_name}</p>
                                        <p className={fontStyles.Bold}>Rp {item.price}</p>
                                    </div>
                                </Card>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    </div>
}