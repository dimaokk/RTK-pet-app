import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";

// export const fetchUser = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.userFetching());
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(userSlice.actions.userFetchingSucces(response.data));
//   } catch (e: any) {
//     dispatch(userSlice.actions.userFetchingError(e.message));
//   }
// };

export const fetchUser = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error users");
    }
  }
);
