import { useState } from "react";
import "./App.css";
import Logo from "./assets/—Pngtree—letter x logo_6074193.png";
import { AiOutlineMail } from "react-icons/ai";
import {BiLockAlt} from 'react-icons/bi'
import Toast from "./components/Toast";

function App() {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
     showResult(true); 
  };

  setTimeout(() =>{
    showResult(false)
  }, 5000);

  return (
    <div className="text-center mx-auto bg-white w-[380px] p-[20px] border border-t-2 border-t-[#FB4506] border-solid my-[60px]">
      <div className="">
        <div className="relative mx-auto flex flex-col bg-black  justify-center ">
          <img src={Logo} alt="" className=" h-[220px]" />
          <p className="text-[#F4D160] font-semibold  text-[28px] ">Xipdiagnostics</p>
          <h1 className=" text-[20px] text-white mb-8">Employees Portal</h1>
        </div>
        <div>
        {result ?  <Toast/> : null}
        </div>
        <form onSubmit={sendEmail} className=" mt-12 flex leading-10 flex-col ">
          <div className="flex">
            <span className=" px-4 border border-solid h-[3.2rem]  border-[#ccc] py-4 text-[#ccc]">
              <AiOutlineMail size={20} />
            </span>
            <input
              type="email"
              placeholder="Email"
              name=""
              id=""
              className="mb-6 focus:outline-none border  px-[12px] w-[100%] text-[#555] border-[#ccc] py-[5px] border-solid"
            />
          </div>
          <div className="flex">
            <span className=" px-4 border border-solid h-[3.2rem]  border-[#ccc] py-4 text-[#ccc]">
              <BiLockAlt size={20} />
            </span>
            <input
              type="password"
              placeholder="Password"
              name=""
              id=""
              className="mb-6 focus:outline-none border  px-[12px] w-[100%] text-[#555] border-[#ccc] py-[5px] border-solid"
            />
          </div>{" "}
          <div className="text-left flex mb-4 gap-2 ">
            <input type="checkbox" className="" />
            <span className="font-semibold">Always stay signed in</span>
          </div>
          <button  value="send" className="bg-[#F4D160] text-black font-semibold">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
