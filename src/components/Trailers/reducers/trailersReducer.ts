import { cardData } from "../../../mocks/cardData";
import { InitialTrailersState, TrailersActions, TreilersAction } from "../types/TrailersTypes";


const defaultState: InitialTrailersState = {
    banner: `${cardData[0]["backdrop_path"]}`
};

export const treilerReducer = (state = defaultState, action: TreilersAction) => {
    switch (action.type) {
        case TrailersActions.CHANGE_BACKGROUND:
            return {...state, banner: action.payload};
        default:
            return state;
    }
};