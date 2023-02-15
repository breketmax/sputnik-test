import { fetchRandomPhoto } from './ActionCreator';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IRandomPhoto } from '../../types/ICollection';

interface IRndPhoto extends IRandomPhoto {
  isRndPhotoLoading: boolean
  isRndPhotoFullfield: boolean
  isRndPhotoError: string
}

const initialState: IRndPhoto = {
  id: '',
  description: null,
  urls: {
    full: '',
    raw: '',
    regular: '',
    small: '',
    small_s3: '',
    thumb: '',
  },
  alt_description: null,
  user: {
    portfolio_url: '',
    username: '',
  },
  isRndPhotoLoading: false,
  isRndPhotoFullfield: false,
  isRndPhotoError: '',
};

const rndPhotoSlice = createSlice({
  initialState,
  name: 'randomPhoto',
  reducers: {},
  extraReducers (builder) {
    builder.addCase(fetchRandomPhoto.pending, (state) => {
      state.isRndPhotoLoading = true;
      state.isRndPhotoError = '';
      state.isRndPhotoFullfield = false;
    });
    builder.addCase(
      fetchRandomPhoto.fulfilled,
      (state, action: PayloadAction<IRandomPhoto>) => {
        state.alt_description = action.payload.alt_description;
        state.description = action.payload.description;
        state.id = action.payload.id;
        state.urls = action.payload.urls;
        state.user = action.payload.user;
        state.isRndPhotoLoading = false;
        state.isRndPhotoError = '';
        state.isRndPhotoFullfield = true;
      }
    );
    builder.addCase(fetchRandomPhoto.rejected, (state, action) => {
      state.isRndPhotoLoading = false;
      state.isRndPhotoError = action.payload ?? '';
      state.isRndPhotoFullfield = false;
    });
  },
});

export default rndPhotoSlice.reducer;
