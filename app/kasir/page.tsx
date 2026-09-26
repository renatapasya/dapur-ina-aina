"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import PaymentSuccess from "@/components/PaymentSuccess";


export default function KasirPage(){


const [menus,setMenus]=useState<any[]>([]);
const [cart,setCart]=useState<any[]>([]);
const [showPayment,setShowPayment]=useState(false);
const [payment,setPayment]=useState("cash");
const [showSuccess,setShowSuccess]=useState(false);
const [successTotal,setSuccessTotal]=useState(0);


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





function tambahMenu(menu:any){


const exist=cart.find(
item=>item.id_menu===menu.id_menu
);



if(exist){


setCart(

cart.map(item=>

item.id_menu===menu.id_menu

?

{
...item,
jumlah:item.jumlah+1
}

:item

)

);



}else{


setCart([

...cart,

{
...menu,
jumlah:1
}

]);


}



}




function kurangMenu(id:string){


setCart(

cart.map(item=>

item.id_menu===id

?

{
...item,
jumlah:item.jumlah>1
?
item.jumlah-1
:
1
}

:item

)

);



}





function hapusMenu(id:string){


setCart(

cart.filter(
item=>item.id_menu!==id
)

);


}





const total=cart.reduce(

(sum,item)=>

sum+(Number(item.harga)*item.jumlah),

0

);







async function prosesBayar(){



const userId=
"9a617b28-1b0d-4ede-a8eb-c54c138129d0";



const {data:pesanan,error}=await supabase

.from("pesanan")

.insert({

id_user:userId,

tanggal_pesanan:new Date(),

status:"selesai",

total_harga:total

})

.select()

.single();




if(error){

alert("Gagal transaksi");
return;

}




for(const item of cart){


await supabase

.from("detail_pesanan")

.insert({

id_pesanan:pesanan.id_pesanan,

id_menu:item.id_menu,

jumlah:item.jumlah,

subtotal:Number(item.harga)*item.jumlah

});


}




await supabase

.from("pembayaran")

.insert({

id_pesanan:pesanan.id_pesanan,

metode_pembayaran:payment,

total_bayar:total,

tanggal_bayar:new Date()

});




setSuccessTotal(total);

setCart([]);

setShowPayment(false);

setShowSuccess(true);

}






const kategori=[

"Appetizer",
"Main Course",
"Beverage"

];






return(

<main className="
min-h-screen
bg-[#F7F2EA]
p-8
">


<Navbar role="Kasir"/>



<div className="
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-10
">



<div className="
bg-[#FFFDF8]
border
border-[#E8D8C8]
rounded-xl
p-8
">



<h1 className="
text-3xl
font-serif
text-[#7A3E1D]
mb-8
">

MENU RESTORAN

</h1>

{
kategori.map(k=>(


<div
key={k}
className="mb-10"
>


<h2 className="
text-xl
font-serif
tracking-[0.2em]
text-[#7A3E1D]
border-b
border-[#B87333]
pb-3
mb-5
">

{k.toUpperCase()}

</h2>




{

menus
.filter(
menu=>menu.kategori?.nama_kategori===k
)
.map(menu=>(


<div

key={menu.id_menu}

className="
flex
justify-between
items-center
border-b
border-[#E8D8C8]
py-6
"

>


<div className="flex-1">


<div className="
flex
justify-between
gap-5
">


<h3 className="
uppercase
font-semibold
text-[#3B2418]
">

{menu.nama_menu}

</h3>



<p className="
text-[#B87333]
font-medium
">

Rp {Number(menu.harga)
.toLocaleString("id-ID")}

</p>


</div>




<p className="
text-sm
text-gray-500
mt-2
">

{menu.deskripsi}

</p>


</div>





<button

onClick={()=>tambahMenu(menu)}

className="
ml-5
border
border-[#7A3E1D]
text-[#7A3E1D]
px-4
py-2
rounded
text-xs
tracking-widest
hover:bg-[#7A3E1D]
hover:text-white
transition
"

>

ADD

</button>



</div>


))


}


</div>


))


}



</div>








<div className="
bg-[#FFFDF8]
border
border-[#E8D8C8]
rounded-xl
p-8
h-fit
">


<h1 className="
text-3xl
font-serif
text-[#7A3E1D]
mb-8
">

PESANAN

</h1>





{

cart.length===0

?

<p className="text-gray-500">
Belum ada pesanan
</p>


:


cart.map(item=>(


<div

key={item.id_menu}

className="
border-b
border-[#E8D8C8]
py-5
flex
justify-between
"

>


<div>


<p className="
font-semibold
uppercase
text-sm
">

{item.nama_menu}

</p>




<div className="
flex
items-center
gap-3
mt-3
">


<button

onClick={()=>kurangMenu(item.id_menu)}

className="
border
px-3
"

>
-
</button>



<span>
{item.jumlah}
</span>



<button

onClick={()=>tambahMenu(item)}

className="
bg-[#7A3E1D]
text-white
px-3
"

>
+
</button>


</div>


</div>






<div className="text-right">


<p className="text-[#B87333]">

Rp {(item.harga*item.jumlah)
.toLocaleString("id-ID")}

</p>



<button

onClick={()=>hapusMenu(item.id_menu)}

className="
text-red-600
text-sm
"

>

Hapus

</button>


</div>



</div>


))


}







<div className="
border-t
mt-8
pt-6
">


<div className="
flex
justify-between
text-xl
font-bold
">


<span>
TOTAL
</span>


<span className="text-[#7A3E1D]">

Rp {total.toLocaleString("id-ID")}

</span>


</div>





<button

onClick={()=>setShowPayment(true)}

className="
mt-6
w-full
bg-[#B87333]
text-white
py-4
tracking-widest
"

>

BAYAR

</button>



</div>





</div>




</div>









{
showPayment && (


<div className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
">


<div className="
bg-[#FFFDF8]
rounded-xl
p-8
w-96
">



<h2 className="
text-2xl
font-serif
text-[#7A3E1D]
mb-5
">

PEMBAYARAN

</h2>





<p>

Total:

<b>
Rp {total.toLocaleString("id-ID")}
</b>

</p>






<select

value={payment}

onChange={(e)=>setPayment(e.target.value)}

className="
w-full
border
p-3
mt-5
"

>


<option value="cash">
Cash
</option>


<option value="qris">
QRIS
</option>


</select>







<button

onClick={prosesBayar}

className="
w-full
bg-[#7A3E1D]
text-white
py-3
mt-5
"

>

KONFIRMASI

</button>




<button

onClick={()=>setShowPayment(false)}

className="
w-full
border
py-3
mt-3
"

>

BATAL

</button>



</div>


</div>


)


}


{
showSuccess && (

<PaymentSuccess

total={successTotal}

method={payment}

onClose={()=>setShowSuccess(false)}


/>

)

}

</main>


);


}