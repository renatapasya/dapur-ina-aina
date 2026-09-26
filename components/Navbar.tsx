"use client";

import Link from "next/link";


interface NavbarProps {
  role:string;
}



export default function Navbar({role}:NavbarProps){


return (

<nav className="
w-full
bg-[#FFFDF8]
border-b
border-[#E8D8C8]
px-8
py-5
mb-8
">


<div className="
max-w-7xl
mx-auto
flex
justify-between
items-center
">



<div>


<p className="
text-[#B87333]
text-xs
tracking-[0.5em]
mb-2
">

✦ BALI DINING EXPERIENCE ✦

</p>



<h1 className="
text-3xl
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
gap-3
mt-2
">


<div className="
w-10
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
w-10
h-px
bg-[#B87333]
"/>


</div>


</div>







<div className="
flex
items-center
gap-6
">


<div className="
text-right
">


<p className="
text-xs
tracking-[0.3em]
text-gray-400
">

ROLE

</p>



<p className="
text-sm
font-semibold
text-[#7A3E1D]
tracking-widest
">

{role.toUpperCase()}

</p>


</div>






<Link

href="/login"

className="
border
border-[#7A3E1D]
text-[#7A3E1D]
px-5
py-2
rounded-lg
text-xs
tracking-[0.3em]
hover:bg-[#7A3E1D]
hover:text-white
transition
"

>

LOGOUT

</Link>




</div>




</div>


</nav>


);


}