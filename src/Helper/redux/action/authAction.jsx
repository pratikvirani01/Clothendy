// src/redux/actions/userActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await API.get("/users"); // Adjust route as needed
  return response.data;
});
