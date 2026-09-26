"use client";


export default function PrintButton(){


function printPage(){

window.print();

}


return(

<button

onClick={printPage}

className="
w-full
mt-5
bg-[#7A3E1D]
text-white
py-3
rounded-lg
tracking-widest
"

>

PRINT RECEIPT

</button>


);


}