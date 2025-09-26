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

// Login için thunk
export const loginUser = (credentials, remember = false) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/login", credentials);

      // 1. User bilgilerini store'a yaz
      dispatch(setUser(res.data.user));

      // 2. Token sakla
      if (remember) {
        localStorage.setItem("token", res.data.token);
      } else {
        sessionStorage.setItem("token", res.data.token);
      }

      return { success: true, user: res.data.user };
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, message: "Giriş başarısız! Bilgileri kontrol edin." };
    }
  };
};

// Normal action creators
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
