
import type {Metadata} from "next";
import { Badge } from "@/domain/presentation/components/badges";
import Product from "@/domain/presentation/pages/home/product";
export const metadata: Metadata = {
    title: "Catalogs",
    description: "Get lists of catalogs here!",
};


export default async function Home() {
  return (
    <>
        <Badge title="Recomendation"/>
        <Product/>
    </>
  );
}
