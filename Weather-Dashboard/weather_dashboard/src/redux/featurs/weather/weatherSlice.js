import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeather",
  async (cityName) => {
    const apikey = "b2e8585fa372120bb9a5743a50984feb";

    const response = await fetch(
      // `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`
    );
    const data = await response.json()
    return data
  }
);

const initialState = {
  weatherData: [],
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "Weather",
  initialState,
  reducers: {
    clearWeatherData: (state)=>{
        state.weatherData = []
    }
  },
  extraReducers: (builder) => {
    builder
     .addCase(fetchWeatherData.pending, (state)=>{
        state.loading = true,
        state.error = null
     })
     .addCase(fetchWeatherData.fulfilled, (state, action)=>{
        state.loading = false,
        state.weatherData.push(action.payload)
     })
     .addCase(fetchWeatherData.rejected, (state, action)=>{
        state.loading = false,
        state.error = action.error.message
     })
  }
});



export const {clearWeatherData} = weatherSlice.actions;
export default weatherSlice.reducer;

