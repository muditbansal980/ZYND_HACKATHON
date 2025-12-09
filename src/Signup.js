// import Home from "./components/Home"
import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function SignUp() {
    const [Display, setDisplay] = useState("Choose Role");
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] gap-[20px] ">
            <div className="flex flex-col justify-center items-center gap-[20px] bg-[purple] text-[white] pb-[20px] rounded-[10px]">
                <h1 className="w-[100%] bg-[#898af3] flex justify-center items-center p-[10px] rounded-tl-[10px] rounded-tr-[10px] text-[32px] font-bold">Sign Up</h1>
                <div className="flex flex-col gap-[20px] p-[20px]">
                    <input type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Username" />
                    <input type="password" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Password" />
                    <input type="email" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Email" />
                    <select className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" onChange={(e) => setDisplay(e.target.value)} >
                        <option>{Display}</option>
                        <option value="" disabled selected className="">Choose Role</option>
                        <option value="Student" className="bg-[white] text-[black]">Student</option>
                    </select>
                    {Display === "Student" && (
                        <div className="flex flex-col gap-[20px]">
                            <input type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Income"></input>
                            <input type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="College/School Name"></input>
                        </div>
                    )}

                </div>
                <NavLink to="/Home" ><button className="bg-[#898af3] p-[10px] rounded-[10px]">Register</button></NavLink>
            </div>

        </div>
    )
}