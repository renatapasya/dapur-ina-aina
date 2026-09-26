import "./globals.css";

import {
  Cormorant_Garamond,
  Lato
} from "next/font/google";



const cormorant = Cormorant_Garamond({

  subsets:["latin"],

  weight:[
    "400",
    "500",
    "600",
    "700"
  ],

  variable:"--font-brand",

});





const lato = Lato({

  subsets:["latin"],

  weight:[
    "400",
    "700"
  ],

  variable:"--font-body",

});





export const metadata = {

  title:"Dapur Ina Aina",

  description:
  "Sistem Informasi Restoran Dapur Ina Aina",

};





export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html lang="id">


<body

className={`
${cormorant.variable}
${lato.variable}
antialiased
`}

>


{children}


</body>


</html>


);


}