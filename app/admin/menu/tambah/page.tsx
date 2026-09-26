"use client";


import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";



export default function TambahMenu(){


const router=useRouter();


const [kategori,setKategori]=useState<any[]>([]);



const [form,setForm]=useState({

nama_menu:"",
harga:"",
stok:"",
deskripsi:"",
id_kategori:""

});






useEffect(()=>{


async function loadKategori(){


const {data}=await supabase

.from("kategori")

.select("*");


setKategori(data || []);


}


loadKategori();


},[]);








function handleChange(e:any){


setForm({

...form,

[e.target.name]:e.target.value

});


}







async function simpan(){



const {error}=await supabase

.from("menu")

.insert({

nama_menu:form.nama_menu,

harga:Number(form.harga),

stok:Number(form.stok),

deskripsi:form.deskripsi,

id_kategori:form.id_kategori

});






if(error){

console.log(error);

alert("Gagal menyimpan menu");

return;

}




alert("Menu berhasil ditambahkan");


router.push("/admin");


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
max-w-xl
w-full
bg-[#FFFDF8]
border
border-[#E8D8C8]
rounded-xl
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
text-[#7A3E1D]
">

DAPUR INA AINA

</h1>





<p className="
tracking-[0.4em]
text-xs
text-[#7A3E1D]
mt-4
">

JIMBARAN BALI

</p>



</div>










<h2 className="
text-2xl
font-serif
text-[#7A3E1D]
mb-8
text-center
">

ADD NEW MENU

</h2>









<div className="
space-y-5
">







<input

name="nama_menu"

placeholder="Nama Menu"

value={form.nama_menu}

onChange={handleChange}

className="
w-full
bg-[#FBF5EE]
border
border-[#D8BFA8]
p-4
rounded-lg
outline-none
"


/>







<input

name="harga"

type="number"

placeholder="Harga"

value={form.harga}

onChange={handleChange}

className="
w-full
bg-[#FBF5EE]
border
border-[#D8BFA8]
p-4
rounded-lg
outline-none
"


/>







<input

name="stok"

type="number"

placeholder="Stok"

value={form.stok}

onChange={handleChange}

className="
w-full
bg-[#FBF5EE]
border
border-[#D8BFA8]
p-4
rounded-lg
outline-none
"


/>








<select

name="id_kategori"

value={form.id_kategori}

onChange={handleChange}

className="
w-full
bg-[#FBF5EE]
border
border-[#D8BFA8]
p-4
rounded-lg
"


>


<option value="">
Pilih Kategori
</option>



{

kategori.map(item=>(


<option

key={item.id_kategori}

value={item.id_kategori}

>

{item.nama_kategori}

</option>


))


}



</select>









<textarea

name="deskripsi"

placeholder="Deskripsi Menu"

value={form.deskripsi}

onChange={handleChange}

rows={5}

className="
w-full
bg-[#FBF5EE]
border
border-[#D8BFA8]
p-4
rounded-lg
resize-none
"


/>









<button

onClick={simpan}

className="
w-full
bg-[#7A3E1D]
hover:bg-[#5E2D16]
text-white
py-4
rounded-lg
tracking-[0.3em]
transition
"


>

SAVE MENU

</button>








<button

onClick={()=>router.push("/admin")}

className="
w-full
border
border-[#7A3E1D]
text-[#7A3E1D]
py-3
rounded-lg
mt-3
"

>

BACK

</button>






</div>







</div>


</main>


);



}