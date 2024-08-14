import IUseCase from "@/domain/usecases/type";
import {ICatalogs} from "@/domain/entities/products";

export class GetListsOfFavoritesPearl implements IUseCase<any, Promise<{
    data: ICatalogs
}>>{
    async execute(favorite?: boolean): Promise<{
        data: ICatalogs
    }> {
       try{
           const result = await fetch(`/api/products/favorite`)
           const response = await result.json();
           const data = await response;
           return data;
       }catch(error: any){
           return error;
       }
    }

}