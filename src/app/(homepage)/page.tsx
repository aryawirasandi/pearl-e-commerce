
import type {Metadata} from "next";
import Card from "@/domain/presentation/components/card";
import {GetListsOfPearl} from "@/domain/usecases/get-lists-of-pearl";
import Link from "next/link";
import ImageClient from "@/domain/presentation/components/images";
import styles from "@/domain/presentation/pages/home/home.module.scss"
import fontStyles from "@/domain/presentation/styles/fonts.module.scss"
import { Badge } from "@/domain/presentation/components/badges";
export const metadata: Metadata = {
    title: "Catalogs",
    description: "Get lists of catalogs here!",
};


export default async function Home() {
  const result = (await new GetListsOfPearl().execute());
  return (
    <>
    <Badge title="Recomendation"/>
    <div className={styles.home__wrapper}>
        {result && result.data.map((item) => {
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
  );
}
