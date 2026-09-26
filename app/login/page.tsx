"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage(){


const router = useRouter();


const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



function login(){



if(
email==="admin@dapurinaaina.com" &&
password==="admin123"
){

router.push("/admin");

return;

}




if(
email==="kasir@dapurinaaina.com" &&
password==="kasir123"
){

router.push("/kasir");

return;

}



alert("Email atau password salah");


}




return(



<main className="
min-h-screen
bg-[#F7F2EA]
flex
items-center
justify-center
p-8
">



<div className="
bg-[#FFFDF8]
border
border-[#E8D8C8]
rounded-xl
shadow-sm
w-full
max-w-md
p-10
">






<div className="
text-center
mb-10
">



<p className="
text-[#B87333]
tracking-[0.5em]
text-xs
mb-4
">

✦ BALI DINING EXPERIENCE ✦

</p>





<h1 className="
text-4xl
font-serif
font-semibold
text-[#7A3E1D]
tracking-wide
">

DAPUR INA AINA

</h1>





<div className="
flex
items-center
justify-center
gap-4
mt-5
">


<div className="
w-12
h-px
bg-[#B87333]
"/>


<p className="
text-xs
tracking-[0.4em]
text-[#7A3E1D]
">

JIMBARAN BALI

</p>


<div className="
w-12
h-px
bg-[#B87333]
"/>


</div>



</div>









<div className="
space-y-5
">



<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
w-full
bg-[#FBF5EE]
border
border-[#D8BFA8]
px-5
py-4
rounded-lg
outline-none
focus:border-[#7A3E1D]
"

/>







<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
bg-[#FBF5EE]
border
border-[#D8BFA8]
px-5
py-4
rounded-lg
outline-none
focus:border-[#7A3E1D]
"

/>








<button

onClick={login}

className="
w-full
bg-[#7A3E1D]
hover:bg-[#5E2D16]
text-white
py-4
rounded-lg
tracking-[0.3em]
text-sm
transition
"

>

MASUK

</button>






</div>





<p className="
text-center
text-xs
text-gray-400
mt-8
">

Luxury Restaurant Management System

</p>




</div>


</main>


);


}