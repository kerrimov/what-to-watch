import { api } from "../../../shared/api/api";


export const getActors = async () => {
    const  {data} = await api.get ("/person/popular")
    return data
}