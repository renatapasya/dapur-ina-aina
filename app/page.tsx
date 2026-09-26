"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import CustomerNavbar from "@/components/CustomerNavbar";
import { motion } from "framer-motion";


export default function Home(){


const [menus,setMenus]=useState<any[]>([]);



async function loadMenu(){


const {data,error}=await supabase

.from("menu")

.select(`
*,
kategori(
nama_kategori
)
`)

.order("created_at",{ascending:false});



if(error){

console.log(error);

return;

}


setMenus(data || []);


}





useEffect(()=>{

loadMenu();

},[]);






const kategori=[

"Appetizer",
"Main Course",
"Beverage"

];






return(

<main className="
min-h-screen
bg-[#F7F2EA]
">



<CustomerNavbar/>







<motion.section

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
duration:1
}}

className="
min-h-screen
flex
items-center
justify-center
px-8
pt-24
"



>



<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
text-center
max-w-4xl
"

>





<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:0.3
}}

className="
text-[#B87333]
tracking-[0.6em]
text-sm
mb-6
"

>

✦ BALI DINING EXPERIENCE ✦

</motion.p>







<h1 className="
text-7xl
font-serif
text-[#7A3E1D]
mb-6
">

DAPUR INA AINA

</h1>







<p className="
text-xs
tracking-[0.6em]
text-[#7A3E1D]
mb-8
">

JIMBARAN BALI

</p>







<p className="
text-gray-600
text-lg
max-w-2xl
mx-auto
leading-relaxed
">

Experience authentic Indonesian cuisine
with a modern touch, crafted with passion
and served in the heart of Bali.

</p>







<div className="
flex
justify-center
gap-5
mt-10
">





<motion.a

href="#menu"

whileHover={{
scale:1.05
}}

className="
bg-[#7A3E1D]
text-white
px-8
py-4
rounded-lg
tracking-widest
"

>

VIEW MENU

</motion.a>







<motion.a

href="#contact"

whileHover={{
scale:1.05
}}

className="
border
border-[#7A3E1D]
text-[#7A3E1D]
px-8
py-4
rounded-lg
tracking-widest
"

>

RESERVATION

</motion.a>






</div>





</motion.div>





</motion.section>









<section

id="menu"

className="
px-8
py-20
max-w-7xl
mx-auto
"


>


<motion.h2

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.7
}}

className="
text-5xl
font-serif
text-[#7A3E1D]
text-center
mb-16
"

>

OUR MENU

</motion.h2>

{

kategori.map(k=>(


<motion.div

key={k}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.7
}}

viewport={{
once:true
}}

className="
mb-16
"

>


<h3 className="
text-2xl
font-serif
text-[#7A3E1D]
border-b
border-[#B87333]
pb-3
mb-8
tracking-widest
">

{k.toUpperCase()}

</h3>






<div className="
grid
md:grid-cols-2
gap-8
">





{

menus

.filter(
menu=>menu.kategori?.nama_kategori===k
)

.map(menu=>(



<motion.div

key={menu.id_menu}

whileHover={{
y:-8
}}

transition={{
duration:0.3
}}

className="
bg-[#FFFDF8]
border
border-[#E8D8C8]
rounded-xl
p-6
shadow-sm
"

>



<div className="
flex
justify-between
gap-5
">


<h4 className="
font-semibold
uppercase
">

{menu.nama_menu}

</h4>




<p className="
text-[#B87333]
font-semibold
">

Rp {Number(menu.harga)
.toLocaleString("id-ID")}

</p>




</div>





<p className="
text-gray-500
text-sm
mt-3
">

{menu.deskripsi}

</p>





</motion.div>



))


}



</div>






</motion.div>



))


}




</section>









<motion.section

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
bg-[#FFFDF8]
py-20
px-8
"

>


<div className="
max-w-4xl
mx-auto
text-center
">



<p className="
text-[#B87333]
tracking-[0.5em]
text-sm
">

OUR STORY

</p>





<h2 className="
text-4xl
font-serif
text-[#7A3E1D]
my-8
">

WE SERVE WITH LOVE

</h2>





<p className="
text-gray-600
leading-relaxed
">

Dapur Ina Aina brings Indonesian culinary
heritage with elegant presentation.
Every dish is prepared with carefully selected
ingredients to create an unforgettable dining
experience in Jimbaran Bali.

</p>



</div>


</motion.section>









<motion.section

id="contact"

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

className="
py-20
text-center
px-8
"

>


<h2 className="
text-4xl
font-serif
text-[#7A3E1D]
mb-8
">

VISIT US

</h2>





<p className="text-gray-600 mb-3">

Jimbaran, Bali

</p>




<p className="text-gray-600 mb-3">

Opening Hours 10.00 - 22.00

</p>




<p className="text-gray-600 mb-3">

Email:
contact@dapurinaaina.com

</p>




<p className="text-gray-600 mb-5">

Phone:
+62 812-3456-7890

</p>





<p className="
text-[#B87333]
tracking-widest
">

RESERVATION AVAILABLE

</p>



</motion.section>









<footer className="
bg-[#7A3E1D]
text-white
text-center
py-8
">


<p className="
tracking-[0.3em]
text-sm
">

© 2026 DAPUR INA AINA

</p>



<p className="
text-xs
tracking-[0.4em]
mt-3
opacity-80
">

BY RENATA PASYA

</p>



</footer>






</main>


);


}