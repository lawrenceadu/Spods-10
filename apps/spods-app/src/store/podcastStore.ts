import { EpisodeInterface, GenreInterface, PodcastInterface } from '@spods/interfaces'; // prettier-ignore
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SliceState = {
  genres: GenreInterface[] | [];
  podcasts: PodcastInterface[] | [];
  episodes: EpisodeInterface[] | [];
};

const initialState = {
  genres: [],
  podcasts: [],
  episodes: [],
} as SliceState;

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    populate: (state, action: PayloadAction<SliceState>) => {
      state.genres = action.payload.genres;
      state.podcasts = action.payload.podcasts;
      state.episodes = action.payload.episodes;
    },
  },
});

export const { populate } = podcastSlice.actions;

export default podcastSlice.reducer;
