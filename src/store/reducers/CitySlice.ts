import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ICity, type IGeoItem } from '../../types/ICity'
import { fetchCoords } from './ActionCreator'

const initialState: ICity = {
  name: '',
  lat: 0,
  lon: 0,
  isLoading: false,
  isFullfield: false,
  isError: ''
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCityName (state, action: PayloadAction<string>) {
      state.name = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCoords.fulfilled,
      (state, action: PayloadAction<IGeoItem>) => {
        state.lat = action.payload.lat
        state.lon = action.payload.lon
        state.name = action.payload.name
        state.isFullfield = true
        state.isError = 'false'
        state.isLoading = false
      }
    )
    builder.addCase(fetchCoords.pending, (state) => {
      state.isError = ''
      state.isLoading = true
      state.isFullfield = false
    })
    builder.addCase(fetchCoords.rejected, (state, action) => {
      state.lat = initialState.lat
      state.lon = initialState.lon
      state.name = initialState.name
      state.isFullfield = false
      state.isError = action.payload ?? ''
      state.isLoading = false
    })
  }
})

export default citySlice.reducer
export const { setCityName } = citySlice.actions
