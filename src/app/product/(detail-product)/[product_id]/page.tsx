import type {Metadata} from "next";
import Gallery from "@/domain/presentation/components/gallery/gallery";
import {RoundedButton} from "@/domain/presentation/components/button";
import styles from "@/domain/presentation/pages/detail/detail.module.scss"
import {Vector} from "@/domain/presentation/components/icons";
import Link from "next/link";
import Card from "@/domain/presentation/components/card";
import ImageClient from "@/domain/presentation/components/images";
import fontStyles from "@/domain/presentation/styles/fonts.module.scss";
import {Counter} from "@/domain/presentation/pages/detail/counter";
import { GetDetailOfPearl } from "@/domain/usecases/get-detail-of-pearl";
import { redirect } from "next/navigation";
import { Badge } from "@/domain/presentation/components/badges";

export const metadata: Metadata = {
    title: "Catalog Detail",
    description: "Get detail of catalog here!",
};


type ProductDetailProps = {
    params : {
        product_id: string
    }
}

export default async function Page({ params } : ProductDetailProps){
    const { data: result} = (await new GetDetailOfPearl().execute(params.product_id));
    if(!result){
        redirect("/")
    }else{
        return <>
            <div className={styles.detail} >
            <div className={styles.detail__images}>
                <Gallery url={`${result.image_url}`}>
                    <Link href="/">
                        <RoundedButton className={styles.detail__vector}>
                            <Vector/>
                        </RoundedButton>
                    </Link>
                </Gallery>
                <div className={styles.detail__descriptionDesktop}>
                    <h2 className={styles.detail__heading}>
                        {result.name}
                    </h2>
                    <p className={styles.detail__price}>
                        Rp {result.price}
                    </p>
                    <p className={styles.detail__descriptionText}>
                        {result.details.description}
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
                        {result.details.variants.map((item) => {
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
                    {result.name}
                </h2>
                <p className={styles.detail__price}>
                    Rp {result.price}
                </p>
                <p className={styles.detail__descriptionText}>
                    {result.details.description}
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
                        {result.details.variants.map((item) => {
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
        </>
    }
}