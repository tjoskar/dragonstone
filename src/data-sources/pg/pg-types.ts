export interface PgShow {
  id: number;
  airs_first: string | null;
  airs_time: string | null;
  airs_day: number | null;
  ended: boolean;
  genre: string[];
  external_id_imdb: string | null;
  external_id_tvdb: number;
  language: string | null;
  lastupdated: number;
  name: string;
  network: string | null;
  overview: string | null;
  runtime: number;
}

export interface PgTitle {
  id: number;
  name: string;
  external_id_tvdb: number;
  lastupdated: number;
  followers: number;
}

export interface PgEpisode {
  show_id: number;
  name: string;
  external_id_tvdb: number;
  episodenumber: number;
  first_aired: string;
  overview: string | null;
  lastupdated: number;
}

export interface PgWatchedEpisode {
  episodenumber: number;
  show_id: number;
  user_id: number;
  time: number;
  type: 0 | 1 | 2 | 3 | 4;
}

export interface PgUser {
  id: number;
  firebase_id: string;
  name: string;
  api_key: string;
}

export interface PgFollowing {
  id: number;
  user_id: number;
  show_id: number;
}
