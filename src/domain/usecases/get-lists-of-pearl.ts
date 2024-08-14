import IUseCase from "@/domain/usecases/type";
import {ICatalogs} from "@/domain/entities/products";

export class GetListsOfPearl implements IUseCase<any, Promise<{
    data: ICatalogs
}>>{
    async execute(): Promise<{
        data: ICatalogs
    }> {
       try{
           const result = await fetch(`/api/products`)
           const response = await result.json();
           const data = await response;
           return data;
       }catch(error: any){
           return error;
       }
    }

}