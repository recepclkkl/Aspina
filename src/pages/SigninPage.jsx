import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom"; // v5 için
import { toast } from "react-toastify";
import { loginUser } from "../store/clientActions"; // thunk action

function SigninPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const { email, password, remember } = data;

    try {
      const result = await dispatch(loginUser({ email, password }, remember));

      if (result.success) {
        toast.success("Giriş başarılı!");

        if (location.state?.from === "/signup") {
          history.push("/"); // signup’tan gelindiyse anasayfa
        } else if (location.state?.from) {
          history.push(location.state.from); // başka bir sayfadan gelindiyse o sayfaya
        } else {
          history.push("/"); // fallback: anasayfa
        }
      } else {
        toast.error(result.message || "Giriş başarısız! Bilgilerinizi kontrol edin.");
      }
    } catch (error) {
      toast.error("Giriş sırasında bir hata oluştu.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-[600px] flex justify-center items-center">
      <form
        className="w-[320px] relative flex flex-col gap-[15px] justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-montserrat font-[700] text-[24px] font-bold text-center">
          Giriş Yap
        </h1>

        {/* Email */}
        <div className="w-full flex flex-col">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email adresiniz"
            {...register("email", { 
              required: "Email gerekli",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Geçerli bir email giriniz"
              }
            })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="w-full flex flex-col">
          <label>Şifre:</label>
          <input
            type="password"
            placeholder="Şifreniz"
            {...register("password", { required: "Şifre gerekli" })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        {/* Remember Me */}
        <div className="w-full flex items-center gap-2">
          <input type="checkbox" {...register("remember")} />
          <label>Beni Hatırla</label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
        </button>
      </form>
    </div>
  );
}

export default SigninPage;
