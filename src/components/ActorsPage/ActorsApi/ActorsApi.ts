import { api } from "../../../shared/api/api";
import { Endpoints } from "./constants/Endpoints";

export const getActors = async () => {
  const { data } = await api.get(Endpoints.ACTORS);
  return data;
};
