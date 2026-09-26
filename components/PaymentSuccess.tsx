"use client";

interface PaymentSuccessProps {

  total:number;
  method:string;
  onClose:()=>void;

}



export default function PaymentSuccess({
  total,
  method,
  onClose
}:PaymentSuccessProps){



return(

<div className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-50
">


<div className="
bg-[#FFFDF8]
w-96
rounded-xl
p-10
text-center
border
border-[#E8D8C8]
shadow-xl
">



<p className="
text-[#B87333]
tracking-[0.5em]
text-xs
mb-5
">

✦ THANK YOU ✦

</p>





<h1 className="
text-3xl
font-serif
text-[#7A3E1D]
">

DAPUR INA AINA

</h1>



<p className="
text-xs
tracking-[0.4em]
text-[#7A3E1D]
mt-3
mb-8
">

JIMBARAN BALI

</p>





<div className="
border-t
border-b
border-[#E8D8C8]
py-6
mb-6
">


<p className="
text-gray-500
text-sm
">

ORDER COMPLETED

</p>



<p className="
text-4xl
font-serif
text-[#7A3E1D]
mt-3
">

Rp {total.toLocaleString("id-ID")}

</p>


</div>





<div className="
flex
justify-between
text-sm
mb-8
">


<span>
Payment
</span>


<span className="
font-semibold
uppercase
text-[#B87333]
">

{method}

</span>


</div>







<div className="
flex
gap-3
">


<button

onClick={()=>window.print()}

className="
w-full
border
border-[#7A3E1D]
text-[#7A3E1D]
py-4
rounded-lg
tracking-[0.3em]
"

>

PRINT

</button>




<button

onClick={onClose}

className="
w-full
bg-[#7A3E1D]
text-white
py-4
rounded-lg
tracking-[0.3em]
"

>

DONE

</button>



</div>






<p className="
text-xs
text-gray-400
mt-6
">

Thank you for dining with us

</p>





</div>


</div>


);


}