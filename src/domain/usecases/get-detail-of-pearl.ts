import IUseCase from "@/domain/usecases/type";
import { IProduct } from "../entities/products";

export class GetDetailOfPearl implements IUseCase<string, Promise<{
    data: IProduct
}>>{
    async execute(id?: string): Promise<{
        data: IProduct
    }> {
        try{
            const result = await fetch(`/api/product/${id}`)
            const response = await result.json();
            const data = await response;
            return data;
        }catch(error: any){
            return error;
        }
    }

}