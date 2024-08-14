import {catalogs} from "@/app/api/data";

type Params = {
    params: {
        id: string
    }
}

export const GET = async (request:Request, { params } : Params ) => {
    const result = catalogs.filter(item => item.id === params.id)[0]
    return Response.json({
        data: result
    })
}