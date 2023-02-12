import { fetchAPOD } from './ActionCreator';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IAPOD } from './../../types/IAPOD';
const initialState: IAPOD = {
  date: '',
  explanation: '',
  hdurl: '',
  media_type: '',
  service_version: '',
  title: '',
  url: '',
  isAPODLoading: false,
  isAPODFullfield: false,
  isAPODError: '',
};

const APODSlice = createSlice({
  name: 'APODSlice',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder.addCase(fetchAPOD.pending, (state) => {
      state.isAPODLoading = true;
      state.isAPODError = '';
      state.isAPODFullfield = false;
    });
    builder.addCase(
      fetchAPOD.fulfilled,
      (state, action: PayloadAction<IAPOD>) => {
        state.date = action.payload.date;
        state.explanation = action.payload.explanation;
        state.hdurl = action.payload.hdurl;
        state.media_type = action.payload.media_type;
        state.service_version = action.payload.service_version;
        state.title = action.payload.title;
        state.url = action.payload.url;
        state.isAPODError = '';
        state.isAPODFullfield = true;
        state.isAPODLoading = false;
      }
    );
    builder.addCase(fetchAPOD.rejected, (state, action) => {
      state.isAPODError = action.payload ?? '';
      state.isAPODFullfield = false;
      state.isAPODLoading = false;
    });
  },
});

export default APODSlice.reducer;
