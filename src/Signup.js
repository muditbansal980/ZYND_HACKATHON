
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {

    const [Display, setDisplay] = useState("Choose Role");
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const [email,setemail]=useState("");
    const [role,setrole]=useState("")
    const [income,setincome]=useState("")
    const [college,setcollege]=useState("")

    const handleSubmit = async () => {
    const res = await fetch("http://localhost:9000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            role: role,
            income:income,
            college:college
        })
    });

    const data = await res.json();
    console.log(data);
};
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] gap-[20px] ">
            <div className="flex flex-col justify-center items-center gap-[20px] bg-[purple] text-[white] pb-[20px] rounded-[10px]">
                <h1 className="w-[100%] bg-[#898af3] flex justify-center items-center p-[10px] rounded-tl-[10px] rounded-tr-[10px] text-[32px] font-bold">Sign Up</h1>
                <div className="flex flex-col gap-[20px] p-[20px]">
                    <input onChange={(e)=>setusername(e.target.value)} type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Username" />
                    <input onChange={(e)=>setpassword(e.target.value)} type="password" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Password" />
                    <input onChange={(e)=>setemail(e.target.value)} type="email" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Email" />
                    <select  onChange={(e)=>{setrole(e.target.value);setDisplay(e.target.value)}} className="outline-none border-b-[1px] border-white text-[20px] p-[10px]">

                        <option value="" disabled selected className="">Choose Role</option>
                        <option onChange={(e)=>setrole(e.target.value)} value="Student" className="bg-[white] text-[black]">Student</option>
                    </select>
                    {Display === "Student" && (
                        <div className="flex flex-col gap-[20px]">
                            <input  onChange={(e)=>setincome(e.target.value)}type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Income"></input>
                            <input  onChange={(e)=>setcollege(e.target.value)}type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="College/School Name"></input>
                        </div>
                    )}

                </div>
                <NavLink to="/Home" ><button onClick={handleSubmit} className="bg-[#898af3] p-[10px] rounded-[10px]">Register</button></NavLink>
                <p>Already have an account? <NavLink to="/Login" className="underline">Login</NavLink></p>
            </div>

        </div>
    )
}