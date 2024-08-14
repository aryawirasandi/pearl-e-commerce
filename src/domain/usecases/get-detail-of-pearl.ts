import IUseCase from "@/domain/usecases/type";
import { IProduct } from "../entities/products";

export class GetDetailOfPearl implements IUseCase<string, Promise<{
    data: IProduct
}>>{
    private baseUrl = process.env.BASE_URL;
    async execute(id?: string): Promise<{
        data: IProduct
    }> {
        try{
            const result = await fetch(`${this.baseUrl}/api/product/${id}`)
            const response = await result.json();
            const data = await response;
            return data;
        }catch(error: any){
            return error;
        }
    }

}