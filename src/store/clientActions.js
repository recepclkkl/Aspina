// src/redux/clientAction.js
import instance from "../api/axios";

// Roller için thunk
export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/roles");
      dispatch(setRoles(res.data)); // API’den gelen veriyi store’a kaydet
    } catch (error) {
      console.error("Rol verileri alınırken hata:", error);
    }
  };
};

export const loginUser = (credentials, remember = false) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/login", credentials);

      // burada res.data.user yerine res.data kullan
      dispatch(setUser(res.data));

      const storage = remember ? localStorage : sessionStorage;
      storage.setItem("token", res.data.token);
      storage.setItem("user", JSON.stringify(res.data));

      return { success: true, user: res.data };
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, message: "Giriş başarısız! Bilgileri kontrol edin." };
    }
  };
};



export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");

  dispatch(clearUser());
};

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles,
});

export const setTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});

export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});

export const clearUser = () => ({
  type: "CLEAR_USER",
});
