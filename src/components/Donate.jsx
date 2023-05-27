import { useState } from "react"
import { categories } from "../assets/data"
const Donate=()=>{
    const [category,setCategory]=useState("a+")
    const [first,setFirst]=useState("")
    const [last,setLast]=useState("")
    const [age,setAge]=useState("")
    const [gender,setGender]=useState("male")
    const submitHandler=(e)=>{
        e.preventDefault();
        
    }

    const categories=[
        {
            type:"A+",
            value:"a+"
        },
        {
            type:"A-",
            value:"a-"
        },
        {
            type:"B+",
            value:"b+"
        },
        {
            type:"B-",
            value:"b-"
        },
        {
            type:"AB+",
            value:"ab+"
        },
        {
            type:"AB-",
            value:"aB-"
        },
        {
            type:"O+",
            value:"o+"
        },
        {
            type:"O-",
            value:"o-"
        },
    
    
    ]
    

    
    return (
        <div className="container mt-10 bg-stone-200 text-rose-600 drop-shadow-xl rounded-2xl mx-auto p-4 h-full">
            <h1 className="text-5xl text-center font-bold">Donate Blood</h1>
            <div className="grid grid-cols-2 items-center">
                <form onSubmit={submitHandler} className="col-span-1 grid grid-cols-1 justify-center gap-2 px-10 py-2">
                    <div className="w-full flex flex-col gap-3">
                        <label className="text-3xl">First Name</label>
                        <input type="text" value={first} onChange={(e)=>setFirst(e.target.value)} className='p-4 rounded-xl'/>
                    </div>
                    <div className="w-full flex flex-col gap-3">
                        <label className="text-3xl">Last Name</label>
                        <input type="text" value={last} onChange={(e)=>setLast(e.target.value)} className='p-4 rounded-xl'/>
                    </div>

                    <div className="w-full flex flex-col gap-3">
                        <label className="text-3xl">Gender</label>
                        <span><input type="radio" className="p-4 rounded-xl m-2" value="male"checked={gender==="male"?true:false} onChange={()=>setGender("male")}/>Male</span>
                        <span><input type="radio" className="p-4 rounded-xl m-2" value="female" checked={gender==="female"?true:false} onChange={()=>setGender("female")}/>Female</span>
                    </div>
                    <div className="w-full flex flex-col gap-3">
                        <label className="text-3xl">Age</label>
                        <input type="text" value={age} onChange={(e)=>setFirst(e.target.value)} className='p-4 rounded-xl'/>
                    </div>
                    <div className="w-full flex flex-col gap-3">
                        <label className="text-3xl">Type Of Blood Group</label>
                        <select onChange={(e)=>setCategory(e.target.value)} className="p-4 rounded">
                      {
                        categories.map((category,idx)=>
                         <option key={idx} value={category.value}>{category.type}</option>
                        )
                      }
                        </select>

                    </div>
                    <button className="bg-rose-600 text-stone-200 p-4 rounded-xl text-3xl mt-2">Donate!</button>
                </form>
               <div className="col-span-1 grid grid-rows-5">
                <h1 className="text-3xl row-span-2">Selected Blood Type</h1>
                <div className="flex row-span-2 items-center bg-rose-200 drop-shadow-xl rounded-full">

                </div>



               </div>
            </div>

        </div>
    )
}
export default Donate