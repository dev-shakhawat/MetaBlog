import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import notificationSlice from "./slices/notificationSlice";
import postSlice from "./slices/postSlice";

export default configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
    user: userSlice,
    notify: notificationSlice,
    post  : postSlice
  },
});
