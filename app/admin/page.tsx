"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";


export default function AdminPage(){


const [menus,setMenus]=useState<any[]>([]);
const [pesanan,setPesanan]=useState<any[]>([]);
const [pendapatan,setPendapatan]=useState(0);




async function loadData(){


const {data:menuData}=await supabase

.from("menu")

.select(`
*,
kategori(
nama_kategori
)
`)

.order("created_at",{ascending:false});


setMenus(menuData || []);





const {data:pesananData}=await supabase

.from("pesanan")

.select("*")

.order("tanggal_pesanan",{ascending:false});


setPesanan(pesananData || []);




const total=(pesananData || [])
.reduce(

(sum,item)=>
sum + Number(item.total_harga),

0

);


setPendapatan(total);



}





useEffect(()=>{

loadData();

},[]);





async function hapusMenu(id:string){


const yakin=confirm(
"Hapus menu?"
);


if(!yakin)return;



await supabase

.from("menu")

.delete()

.eq("id_menu",id);



loadData();


}





return(


<main className="
min-h-screen
bg-[#F7F2EA]
p-8
">



<Navbar role="Admin"/>




<div className="
max-w-7xl
mx-auto
">






<h2 className="
text-3xl
font-serif
text-[#7A3E1D]
mb-8
">

ADMINISTRATION

</h2>








<div className="
grid
md:grid-cols-3
gap-6
mb-10
">



<div className="
bg-[#FFFDF8]
border
border-[#E8D8C8]
rounded-xl
p-6
">


<p className="text-gray-500">

Total Menu

</p>


<h3 className="
text-4xl
font-serif
text-[#7A3E1D]
mt-3
">

{menus.length}

</h3>


</div>





<div className="
bg-[#FFFDF8]
border
border-[#E8D8C8]
rounded-xl
p-6
">


<p className="text-gray-500">

Total Pesanan

</p>


<h3 className="
text-4xl
font-serif
text-[#7A3E1D]
mt-3
">

{pesanan.length}

</h3>


</div>





<div className="
bg-[#FFFDF8]
border
border-[#E8D8C8]
rounded-xl
p-6
">


<p className="text-gray-500">

Pendapatan

</p>


<h3 className="
text-2xl
font-serif
text-[#7A3E1D]
mt-4
">

Rp {pendapatan.toLocaleString("id-ID")}

</h3>


</div>


</div>









<div className="
bg-[#FFFDF8]
border
border-[#E8D8C8]
rounded-xl
p-8
mb-10
">





<div className="
flex
justify-between
items-center
mb-8
">


<h2 className="
text-3xl
font-serif
text-[#7A3E1D]
">

MENU MANAGEMENT

</h2>



<Link

href="/admin/menu/tambah"

className="
bg-[#7A3E1D]
text-white
px-5
py-3
rounded-lg
"

>

+ TAMBAH MENU

</Link>



</div>








<table className="w-full">


<thead>

<tr className="border-b text-left">

<th className="py-4">
Menu
</th>

<th>
Kategori
</th>

<th>
Harga
</th>

<th>
Stok
</th>

<th>
Aksi
</th>


</tr>


</thead>






<tbody>


{

menus.map(menu=>(


<tr

key={menu.id_menu}

className="border-b"


>


<td className="py-5 font-semibold">

{menu.nama_menu}

</td>



<td>

{menu.kategori?.nama_kategori || "-"}

</td>



<td className="text-[#B87333]">

Rp {Number(menu.harga)
.toLocaleString("id-ID")}

</td>



<td>

{menu.stok}

</td>



<td>


<button

onClick={()=>hapusMenu(menu.id_menu)}

className="
text-red-600
"

>

Hapus

</button>


</td>


</tr>


))


}


</tbody>


</table>





</div>









<div className="
bg-[#FFFDF8]
border
border-[#E8D8C8]
rounded-xl
p-8
">



<h2 className="
text-3xl
font-serif
text-[#7A3E1D]
mb-8
">

TRANSACTION HISTORY

</h2>







<table className="w-full">


<thead>


<tr className="border-b text-left">


<th className="py-4">
Tanggal
</th>


<th>
Total
</th>


<th>
Status
</th>


<th>
Detail
</th>


</tr>


</thead>







<tbody>


{

pesanan.map(item=>(


<tr

key={item.id_pesanan}

className="border-b"


>


<td className="py-5">

{
new Date(
item.tanggal_pesanan
).toLocaleString("id-ID")
}

</td>




<td className="text-[#B87333]">

Rp {Number(item.total_harga)
.toLocaleString("id-ID")}

</td>





<td>

<span className="
text-green-700
font-semibold
">

{item.status}

</span>


</td>






<td>


<Link

href={`/admin/transaksi/${item.id_pesanan}`}

className="
text-[#7A3E1D]
underline
"

>

Lihat Detail

</Link>



</td>






</tr>


))


}


</tbody>


</table>





</div>








</div>



</main>


);


}