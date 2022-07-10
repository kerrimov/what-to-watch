export const enum TrailersActions {
    CHANGE_BACKGROUND = "CHANGE_BACKGROUND"
}

export interface InitialTrailersState {
    banner: string;
};

export interface TrailersAction {
    type: "CHANGE_BACKGROUND";
    payload: string;
};