export interface ActorsState {
  actors: Actor[];
  isFetching: boolean;
  error: string;
}

export interface Actor {
  id: number;
  name: string;
  known_for: Film[];
  profile_path: string;
}

export interface Film {
  media_type: string;
  original_title: string;
  original_name: string;
}
