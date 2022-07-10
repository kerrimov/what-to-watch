import { Card } from "../../../CardContainer/types/Card";

export const getTrailersData = (data: Array<Card>) => (
    data.slice(0,4)
);