import React, { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import bg from "../assets/Vector 8.png";
import request from "../axios";
import useTokenStore from "../token.zustand";
import { useNavigate } from "react-router-dom";
import back from "../assets/Group 47.svg";
import OTPInput from "react-otp-input";
import { toast } from "react-toastify";

interface TimerType {
  style?: string;
}

const SmsPage: React.FC = () => {

  const Timer: React.FC<TimerType> = ({ style }) => {
    const [seconds, setSeconds] = useState(20);
    useEffect(() => {
      const intervalId = setInterval(() => {
        setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
  
      if (seconds == 0) {
        toast.warning("Sms qayta yuborildi", { autoClose: 1500 });
        setSeconds(20);
      }
  
      return () => clearInterval(intervalId);
    }, [seconds]);
  
    return <span className={style}> {seconds} </span>;
  };


  const [otp, setOtp] = useState("");
  const set = useTokenStore((state) => state.setToken);
  const navigate = useNavigate();

  const handleLogin = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    request
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email: "john@mail.com",
        password: "changeme",
      })
      .then((response) => {
        set(response.data.access_token);
        localStorage.setItem("token", response.data.access_token);
        navigate("/");
      });
  };

  return (
    <MainLayout>
      <div className="w-[100vw] h-[100vh] bg-[#ffb53e] flex justify-center items-center">
        <div className="rounded-3xl bg-[white] pb-[44px] mt-48">
          <div className="text-center bg-[#FCA311CC] px-[129px]">
            Подтверждение номера
          </div>
          <img className="mb-[50px]" src={bg} alt="" />

          <form
            onSubmit={(e) => handleLogin(e)}
            className="flex max-w-[350px] mx-auto flex-col gap-[20px]"
          >
            <button onClick={() => navigate("/")}>
              <img src={back} alt="" />
            </button>
            <p className="text-[#999999] font-bold text-[14px]">
              Введите код из СМС
            </p>
            <p className="text-[12px] text-[#999999] font-normal">
              Получить повторный код можно через
              <Timer style={"font-medium"} />
              сек
            </p>

            <OTPInput
              value={otp}
              onChange={setOtp}
              inputStyle={{
                borderBottom: "1px solid #999999",
                width: "40px",
                fontSize: "48px",
                fontWeight: 500,
                color: "#999999",
              }}
              containerStyle={{
                display: "flex",
                gap: "35px",
                justifyContent: "center",
              }}
              numInputs={5}
              renderInput={(props) => <input id="otp-children" {...props} />}
            />

            <button type="submit" className="w-full bg-[#FCA311] py-3 px-[153px] rounded-[5px] font-medium">
              Войти
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default SmsPage;
