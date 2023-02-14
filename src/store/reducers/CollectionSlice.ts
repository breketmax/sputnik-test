import { type ICollection } from './../../types/ICollection';
import { fetchCollections } from './ActionCreator';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ICollectionSlice {
  collection: ICollection[]
  isCollectionLoading: boolean
  isCollectionrError: string
  isCollectionFullfield: boolean
}

const initialState: ICollectionSlice = {
  collection: [],
  isCollectionLoading: false,
  isCollectionrError: '',
  isCollectionFullfield: false,
};

const CollectionSlice = createSlice({
  name: 'collectionSlice',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder.addCase(fetchCollections.pending, (state) => {
      state.isCollectionLoading = true;
      state.isCollectionrError = '';
      state.isCollectionFullfield = false;
    });
    builder.addCase(
      fetchCollections.fulfilled,
      (state, action: PayloadAction<ICollection[]>) => {
        state.collection = action.payload;
        state.isCollectionLoading = false;
        state.isCollectionrError = '';
        state.isCollectionFullfield = true;
      }
    );
    builder.addCase(fetchCollections.rejected, (state, action) => {
      state.collection = [];
      state.isCollectionLoading = false;
      state.isCollectionrError = action.payload ?? '';
      state.isCollectionFullfield = false;
    });
  },
});

export default CollectionSlice.reducer;
