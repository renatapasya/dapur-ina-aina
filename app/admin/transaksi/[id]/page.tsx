"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import PrintButton from "@/components/PrintButton";

export default function DetailTransaksi(){


const params = useParams();

const id = params.id as string;


const [detail,setDetail]=useState<any[]>([]);
const [pesanan,setPesanan]=useState<any>(null);
const [pembayaran,setPembayaran]=useState<any>(null);





async function loadData(){


const {data:pesananData,error}=await supabase

.from("pesanan")

.select("*")

.eq("id_pesanan",id)

.single();



if(error){

console.log(error);

}



setPesanan(pesananData);







const {data:detailData}=await supabase

.from("detail_pesanan")

.select(`

*,

menu(
nama_menu,
harga
)

`)

.eq("id_pesanan",id);



setDetail(detailData || []);







const {data:pembayaranData}=await supabase

.from("pembayaran")

.select("*")

.eq("id_pesanan",id)

.single();



setPembayaran(pembayaranData);



}






useEffect(()=>{


if(id){

loadData();

}


},[id]);








return(


<main className="
min-h-screen
bg-[#F7F2EA]
p-8
">



<Navbar role="Admin"/>





<div className="
max-w-4xl
mx-auto
">





<div className="
bg-[#FFFDF8]
border
border-[#E8D8C8]
rounded-xl
p-10
">





<p className="
text-[#B87333]
tracking-[0.5em]
text-xs
text-center
mb-5
">

✦ TRANSACTION DETAIL ✦

</p>





<h1 className="
text-4xl
font-serif
text-[#7A3E1D]
text-center
">

DAPUR INA AINA

</h1>



<p className="
text-xs
tracking-[0.4em]
text-center
text-[#7A3E1D]
mt-3
mb-10
">

JIMBARAN BALI

</p>








<div className="
border-t
border-b
border-[#E8D8C8]
py-6
mb-8
">



<div className="
flex
justify-between
mb-3
">

<span>
Tanggal
</span>


<span>

{
pesanan &&
new Date(
pesanan.tanggal_pesanan
).toLocaleString("id-ID")
}

</span>


</div>






<div className="
flex
justify-between
">


<span>
Status
</span>


<span className="
text-green-700
font-semibold
">

{pesanan?.status}

</span>


</div>


</div>







<h2 className="
text-2xl
font-serif
text-[#7A3E1D]
mb-5
">

ORDER ITEM

</h2>








{

detail.map(item=>(


<div

key={item.id_detail}

className="
flex
justify-between
border-b
border-[#E8D8C8]
py-4
"


>


<div>


<p className="
font-semibold
uppercase
">

{item.menu?.nama_menu}

</p>



<p className="
text-sm
text-gray-500
">

Qty : {item.jumlah}

</p>


</div>





<p className="text-[#B87333]">

Rp {Number(item.subtotal)
.toLocaleString("id-ID")}

</p>



</div>


))


}









<div className="
mt-8
bg-[#F7F2EA]
rounded-lg
p-6
">



<div className="
flex
justify-between
mb-4
">

<span>
Payment
</span>


<span className="
uppercase
font-semibold
text-[#B87333]
">

{pembayaran?.metode_pembayaran}

</span>


</div>





<div className="
flex
justify-between
text-xl
font-bold
">

<span>
TOTAL
</span>


<span className="
text-[#7A3E1D]
">

Rp {pesanan?.total_harga?.toLocaleString("id-ID")}

</span>


</div>




</div>






<PrintButton/>

<Link

href="/admin"

className="
block
text-center
mt-8
border
border-[#7A3E1D]
text-[#7A3E1D]
py-3
rounded-lg
"

>

BACK TO ADMIN

</Link>






</div>





</div>






</main>


);


}