export interface Card {
    "id": number;
    "poster_path": string;
    "original_title": string;
    "release_date": string;
    "vote_average": number;
};

export interface InitialCardsState {
    cards: Array<Card>,
    status: null | boolean
};

export interface PayloadCards {
    payload: Array<Card>
};