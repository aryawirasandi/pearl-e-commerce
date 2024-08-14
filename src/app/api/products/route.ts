import {catalogs} from "@/app/api/data";

export const GET = () => {
    return Response.json({
        data: catalogs
    })
}