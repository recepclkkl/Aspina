import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import instance from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../store/clientActions";

function SignupPage() {
  const dispatch = useDispatch();

  // Redux store'dan roller
  const roles = useSelector((state) => state.client.roles);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role_id: "3", // Müşteri varsayılan
    },
  });

  useEffect(() => {
    if (!roles.length) {
      dispatch(fetchRoles());
    }
  }, [dispatch, roles.length]);

  const selectedRoleId = watch("role_id");
  const selectedRole = roles.find((role) => role.id === Number(selectedRoleId));

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      let payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
      };
      if (selectedRole?.code === "store") {
        payload.store = {
          name: data.store_name,
          phone: data.phone,
          tax_no: data.tax_no,
          bank_account: data.bank_account,
        };
      }
      const response = await instance.post("/signup", payload);
      console.log("Kayıt başarılı:", response.data);
      alert("Kayıt başarılı! Lütfen giriş yapın.");
      window.history.back();
    } catch (error) {
      console.error("Kayıt hatası:", error);
      alert("Kayıt sırasında bir hata oluştu.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-screen h-[600px] flex justify-center items-center">
      <div className="w-[350px] flex flex-col items-center gap-[20px]">
        <h1 className="font-montserrat font-[700] text-[24px] font-bold text-center">
          Signup Sayfası
        </h1>

        <form
          className="relative w-full flex flex-col gap-[10px] items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
          <div className="w-full flex flex-row items-center justify-between">
            <label className="font-montserrat font-[700]">Ad:</label>
            <input
              className="font-montserrat rounded-[5px] border border-gray-300 text-[20px]"
              placeholder="Adınız"
              {...register("name", {
                required: "Adınız gerekli",
                minLength: { value: 3, message: "Adınız en az 3 karakter olmalı" },
              })}
              type="text"
            />
            <span className="absolute left-[360px] w-[200px] h-[20px] text-[16px] text-[#FF0000]">
              {errors.name && <p>{errors.name.message}</p>}
            </span>
          </div>

          {/* Email */}
          <div className="w-full flex flex-row items-center justify-between">
            <label className="font-montserrat font-[700]">Email:</label>
            <input
              className="font-montserrat rounded-[5px] border border-gray-300 text-[20px]"
              placeholder="Email adresinizi girin"
              {...register("email", {
                required: "Email gerekli",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Geçerli bir email giriniz",
                },
              })}
              type="email"
            />
            <span className="absolute left-[360px] w-[200px] h-[20px] text-[16px] text-[#FF0000]">
              {errors.email && <p>{errors.email.message}</p>}
            </span>
          </div>

          {/* Password */}
          <div className="w-full flex flex-row items-center justify-between">
            <label className="font-montserrat font-[700]">Şifre:</label>
            <input
              className="font-montserrat rounded-[5px] border border-gray-300 text-[20px]"
              placeholder="En az 8 karakter"
              {...register("password", {
                required: "Şifre gerekli",
                minLength: { value: 8, message: "Şifre en az 8 karakter olmalı" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.]).{8,}$/,
                  message:
                    "Şifre en az 8 karakter, büyük/küçük harf, rakam ve özel karakter içermeli",
                },
              })}
              type="password"
            />
            <span className="absolute left-[360px] w-[200px] h-[20px] text-[16px] text-[#FF0000]">
              {errors.password && <p>{errors.password.message}</p>}
            </span>
          </div>

          {/* Password Confirm */}
          <div className="w-full flex flex-row items-center justify-between">
            <label className="font-montserrat font-[700]">Şifre Tekrar:</label>
            <input
              className="font-montserrat rounded-[5px] border border-gray-300 text-[20px]"
              placeholder="Şifreyi tekrar girin"
              {...register("passwordConfirm", {
                required: "Şifre tekrarı gerekli",
                validate: (value) =>
                  value === watch("password") || "Şifreler eşleşmiyor",
              })}
              type="password"
            />
            <span className="absolute left-[360px] w-[200px] h-[20px] text-[16px] text-[#FF0000]">
              {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
            </span>
          </div>

          {/* Role */}
          <div className="w-full flex flex-row items-center justify-end gap-[10px]">
            <label className="font-montserrat font-[700]">Rol Seç:</label>
            <select {...register("role_id")}>
              <option value="" disabled>
                Seçiniz...
              </option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          {/* Store Fields */}
          {selectedRole?.code === "store" && (
            <div className="w-full flex flex-col gap-[10px] mt-[20px]">
              <input
                placeholder="Mağaza İsmi"
                {...register("store_name", { required: true, minLength: 2 })}
              />
              <input
                placeholder="Telefon (10 hane)"
                {...register("phone", {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
              />
              <input
                placeholder="Vergi No (TXXXXVXXXXXX)"
                {...register("tax_no", {
                  required: true,
                  pattern: /^T\d{4}V\d{6}$/,
                })}
              />
              <input
                placeholder="Bank Account (IBAN, TR ile başlar)"
                {...register("bank_account", {
                  required: true,
                  pattern: /^TR\d{24}$/,
                })}
              />
            </div>
          )}

          <button type="submit" disabled={submitting}>
            {submitting ? "Gönderiliyor..." : "Kayıt Ol"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
