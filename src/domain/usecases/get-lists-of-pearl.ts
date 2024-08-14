import IUseCase from "@/domain/usecases/type";
import {ICatalogs} from "@/domain/entities/products";

export class GetListsOfPearl implements IUseCase<any, Promise<{
    data: ICatalogs
}>>{
    private baseUrl = process.env.BASE_URL;
    async execute(): Promise<{
        data: ICatalogs
    }> {
       try{
           const result = await fetch(`${this.baseUrl}/api/products`)
           const response = await result.json();
           const data = await response;
           return data;
       }catch(error: any){
           return error;
       }
    }

}