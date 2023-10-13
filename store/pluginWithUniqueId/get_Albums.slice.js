import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const PluginWithUniqueId_get_test_list = createAsyncThunk(
  "get_Albums/PluginWithUniqueId_get_test_list",
  async payload => {
    const response = await apiService.PluginWithUniqueId_get_test_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const get_AlbumsSlice = createSlice({
  name: "get_Albums",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(PluginWithUniqueId_get_test_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(PluginWithUniqueId_get_test_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(PluginWithUniqueId_get_test_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default { PluginWithUniqueId_get_test_list, slice: get_AlbumsSlice }
