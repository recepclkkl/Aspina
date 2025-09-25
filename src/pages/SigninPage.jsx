import { useForm } from "react-hook-form";
import instance from "../api/axios";
import { useState } from "react";

function SigninPage() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
    } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await instance.post("/login", {
        email: data.email,
        password: data.password,
      });

      localStorage.setItem("token", response.data.token); // token backend’den dönecek

      alert("Giriş başarılı!");
      window.location.href = "/"; // anasayfaya yönlendir
    } catch (error) { //hata varsa hata mesajını göster
      console.error("Login hatası:", error.response?.data || error.message);
      alert("Giriş başarısız! Bilgilerinizi kontrol edin.");
    } finally {
      setLoading(false); // yükleme durumunu sıfırlar
    }
  };

  return (
    <div className="w-screen h-[600px] flex justify-center items-center ">
      <form className="w-[320px] relative flex flex-col gap-[10px] justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-montserrat font-[700] text-[24px] font-bold text-center">Giriş Yap</h1>

        {/* Email */}
        <div className="w-full flex flex-row justify-between items-center ">
          <label className="font-montserrat font-[700]">Email:</label>
          <input
            className="w-[250px] font-montserrat rounded-[5px] border border-gray-300 rounded text-[20px]"
            type="email"
            placeholder="Email adresiniz"
            {...register("email", { 
                required: "Email gerekli",
                pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Geçerli bir email giriniz"},
             })}
          />
          <span  className="absolute left-[325px] w-[120px] h-[20px] text-[16px] text-[#FF0000]">
             {errors.email && <p className="text-[#FF0000]">{errors.email.message}</p>}
          </span>
          
          
        </div>

        {/* Password */}
        <div className="w-full flex flex-row justify-between items-center ">
          <label className="font-montserrat font-[700]">Şifre:</label>
          <input
            className="w-[250px] font-montserrat rounded-[5px] border border-gray-300 rounded text-[20px]"
            type="password"
            placeholder="Şifreniz"
            {...register("password", { 
                required:  "Şifre gerekli",
                pattern: { value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.]).{8,}$/, 
                message: "Şifre en az 8 karakter, büyük/küçük harf, rakam ve özel karakter içermeli" },
                })}
          />
            <span className="absolute left-[325px] w-[100px] h-[20px] text-[16px] text-[#FF0000]">
                {errors.password && errors.password?.message}
            </span>
          
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className=" w-[100px] bg-blue-500 text-white p-2 rounded"
        >
          {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
        </button>
      </form>
    </div>
  );
}

export default SigninPage;
