import { useState } from "react"
export default function CheckEligibility() {
    const [select, setSelect] = useState("Select Benefits")
    console.log(select)
    return (
        <div className="h-[60vh]">
            <div className="flex justify-center items-center">
                <h>Check Eligibility</h>
            </div>
            <form>
                <div className="m-[15px]">
                    <label>Name:</label><br />
                    <input type="text" placeholder="Name" /><br />
                </div>
                <div className="m-[15px]">
                    <label>Email Id:</label><br />
                    <input type="text" placeholder="Email Id" />
                </div>
            </form>
            <div className="m-[15px]">
                <label>Select the type of Benefits you are looking for:</label><br />
                <select onChange={(e) => setSelect(e.target.value)}>
                    <option>{select}</option>
                    <option>Scholarship</option>
                    <option>Job</option>
                    <option>Internship</option>
                    <option>Government Schemes</option>
                    <option>Other Benefits</option>
                </select>
            </div>
            {/* Conditional Rendering */}
            {select === "Scholarship" && (
                <div>
                    <form >
                        <div className="m-[15px]">
                            <label>College</label><br />
                            <input type="text" placeholder="College Name"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>Year</label><br />
                            <input type="text" placeholder="Year"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>Branch</label><br />
                            <input type="text" placeholder="Branch"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>Family Income</label><br />
                            <input type="text" placeholder="Family Income"></input>
                        </div>
                    </form>
                </div>
            )}
            {select === "Job" && (
                <div>
                    <form>
                        <div className="m-[15px]">
                            <label>Skills</label><br />
                            <input type="text" placeholder="Skills"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>Description of any Project(If any)</label><br />
                            <input type="text" placeholder="Description of any project"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>LinkedIn</label><br />
                            <input type="text" placeholder="LinkedIn"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>Github</label><br />
                            <input type="text" placeholder="Github"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>Experience(if any):</label><br />
                            <input type="text" placeholder="Experience"></input>
                        </div>
                    </form>
                </div>
            )}
            {select === "Internship" && (
                <div>
                    <form>
                        <div className="m-[15px]">
                            <label>Skills</label><br />
                            <input type="text" placeholder="Skills"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>Description of any Project(If any)</label><br />
                            <input type="text" placeholder="Description of any project"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>LinkedIn</label><br />
                            <input type="text" placeholder="LinkedIn"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>Github</label><br />
                            <input type="text" placeholder="Github"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>Experience(if any):</label><br />
                            <input type="text" placeholder="Experience"></input>
                        </div>
                    </form>
                </div>
            )}
            {select === "Government Schemes" && (
                <div>
                    <form>
                        <div className="m-[15px]">
                            <label>Category</label><br />
                            <input type="text" placeholder="Category"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>Aadhar Number</label><br />
                            <input type="text" placeholder="Aadhar Number"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>Gender</label><br />
                            <input type="text" placeholder="Gender"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label>Family Income</label><br />
                            <input type="text" placeholder="Family Income"></input>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}