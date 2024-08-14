import { redirect } from "next/navigation";
import {catalogs} from "@/app/api/data";
import DetailProduct from "@/domain/presentation/pages/detail/detail-product";


type ProductDetailProps = {
    params : {
        product_id: string
    }
}

export function generateMetadata({ params }: ProductDetailProps ){
    const filtered = catalogs.filter(catalog => catalog.id === params.product_id)[0];
    return {
        title: filtered.name,
        description: filtered.details.description,
    }
}

export default async function Page({ params } : ProductDetailProps){
    const filtered = catalogs.filter(catalog => catalog.id === params.product_id)
    if(filtered.length == 0){
        redirect("/")
    }else{
        return <DetailProduct id={params.product_id}/>
    }
}