import { TrailersActions } from "../../types/TrailersTypes";

export const changeBackground = (img: string) => ({ 
    type: TrailersActions.CHANGE_BACKGROUND,
    payload: img,
});