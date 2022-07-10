import { cardData } from "../../../mocks/cardData";
import { InitialTrailersState, TrailersActions, TrailersAction } from "../types/TrailersTypes";

const [defaultBanner] = cardData;

const defaultState: InitialTrailersState = {
    banner: `${defaultBanner["backdrop_path"]}`
};

export const trailerReducer = (state: InitialTrailersState = defaultState, action: TrailersAction) => {
    switch (action.type) {
        case TrailersActions.CHANGE_BACKGROUND:
            return {...state, banner: action.payload};
        default:
            return state;
    }
};