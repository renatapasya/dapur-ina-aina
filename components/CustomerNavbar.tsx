"use client";

import Link from "next/link";


export default function CustomerNavbar(){


return(

<nav className="
fixed
top-0
w-full
bg-[#FFFDF8]/90
backdrop-blur
border-b
border-[#E8D8C8]
z-50
">


<div className="
max-w-7xl
mx-auto
px-8
py-5
flex
justify-between
items-center
">





<div>


<h1 className="
font-serif
text-2xl
text-[#7A3E1D]
">

DAPUR INA AINA

</h1>


<p className="
text-[10px]
tracking-[0.5em]
text-[#B87333]
">

JIMBARAN BALI

</p>


</div>







<div className="
flex
items-center
gap-8
text-sm
tracking-widest
">



<a href="/">
HOME
</a>


<a href="#menu">
MENU
</a>


<a href="#contact">
CONTACT
</a>




<Link

href="/login"

className="
border
border-[#7A3E1D]
px-5
py-2
rounded-lg
text-[#7A3E1D]
"

>

LOGIN

</Link>




</div>





</div>


</nav>


);


}