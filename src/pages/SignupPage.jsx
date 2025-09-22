import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import instance from "../api/axios";

function SignupPage() {
  const [roles, setRoles] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
  defaultValues: {
    role_id: "3",
  },
}

  );

  useEffect(() => {
    instance
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error("Roller alınamadı!", error);
      });
  }, []);

  const selectedRoleId = watch("role_id");
  const selectedRole = roles.find((role) => role.id === Number(selectedRoleId));

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async(data) => {
    try{
        setSubmitting(true);
        let payload={
            name:data.name,
            email:data.email,
            password:data.password,
            role_id:data.role_id,
        };
        if(selectedRole?.code==="store"){
            payload.store={
                store_name:data.store_name,
                store_phone:data.store_phone,
                store_tax_no:data.store_tax_no,
                bank_account:data.bank_account,
            };
        }
        const response=await instance.post("/signup",payload);

        console.log("Kayıt başarılı:",response.data);
        alert("Kayıt başarılı! Lütfen giriş yapın.");
        window.history.back();
    }catch(error){
        console.error("Kayıt hatası:",error);
        alert("Kayıt sırasında bir hata oluştu.");
    }finally{
        setSubmitting(false);
    }
    
  };

  return (
    <div className="w-screen h-[600px] flex justify-center items-center">
        <div className="w-full flex flex-col items-center gap-[20px]">
            <h1>Signup Sayfası</h1>

            <form className="w-[400px] flex flex-col gap-[10px] items-center" onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="w-[270px] flex flex-row items-center justify-between">
                    <label>Ad:</label>
                    <input placeholder="Adınızı girin"
                        {...register("name", { required: true, minLength: 3 })}
                        type="text"
                    />
                    {errors.name && <p>İsim en az 3 karakter olmalı</p>}
                </div>

                {/* Email */}
                <div className="w-[270px] flex flex-row items-center justify-between">
                    <label>Email:</label>
                    <input placeholder="Email adresinizi girin"
                        {...register("email", {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        })}
                        type="email"
                    />
                    {errors.email && <p>Geçerli bir email giriniz</p>}
                </div>

                {/* Password */}
                <div className="w-[270px] flex flex-row items-center justify-between">
                    <label>Şifre:</label>
                    <input placeholder="En az 8 karakter"
                        {...register("password", {required: true, minLength: 8, pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.]).{8,}$/,})}
                        type="password"
                    />
                    {errors.password && (<p>Şifre en az 8 karakter, büyük/küçük harf, rakam ve özel karakter içermeli</p>
                    )}
                </div>

                {/* Password Confirm */}
                <div className="w-[270px] flex flex-row items-center justify-between">
                    <label>Şifre Tekrar:</label>
                    <input placeholder="Şifreyi tekrar girin"
                        {...register("passwordConfirm", {
                        validate: (value) =>
                            value === watch("password") || "Şifreler eşleşmiyor",
                        })}
                        type="password"
                    />
                    {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
                </div>

                {/* Role */}
                <div className="w-[270px] flex flex-row items-center justify-between">
                    <label>Rol Seç:</label>
                    <select {...register("role_id", { required: true })}>
                        <option value="" disabled>Seçiniz...</option>
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                    {errors.role_id && <p>Bir rol seçmelisiniz</p>}
                </div>


                {selectedRole?.code === "store" && (
            <>
            <div className="w-[600px] h-[130px] items-center justify-center flex flex-col mt-[20px] mb-[10px] gap-[20px]">
                <div className="w-[340px] flex flex-row items-center justify-between ">
                    <label>Mağaza İsmi:</label>
                    <input
                        {...register("store_name", { required: true, minLength: 2 })}
                        type="text"
                    />
                    {errors.store_name && <p>Mağaza adı en az 2 karakter olmalı</p>}
                </div>

                <div className="w-[340px] flex flex-row items-center justify-between">
                    <label>Mağaza Telefonu:</label>
                    <input
                        {...register("store_phone", {
                        required: true,
                        pattern: /^[0-9]{10}$/,
                        })}
                        type="text"
                    />
                    {errors.store_phone && (
                        <p>Geçerli bir telefon numarası giriniz (10 haneli)</p>
                    )}
                </div>

                <div className="w-[340px] flex flex-row items-center justify-between">
                    <label>Vergi Numarası:</label>
                    <input
                        {...register("store_tax_no", {
                        required: true,
                        pattern: /^T\d{4}V\d{6}$/,
                        })}
                        type="text"
                    />
                    {errors.store_tax_no && (
                        <p>Vergi numarası 10 haneli ve "TxxxxVxxxxxx" formatında olmalı</p>
                    )}
                </div>

                <div className="w-[340px] flex flex-row items-center justify-between">
                    <label>Bank Account (IBAN)</label>
                    <input
                        {...register("bank_account", {
                        required: true,
                        pattern: /^TR\d{24}$/,
                        })}
                        type="text"
                    />
                    {errors.bank_account && (
                        <p>Geçerli bir IBAN giriniz (TR ile başlayan 26 hane)</p>
                    )}
                </div>
            </div>
            </>
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
