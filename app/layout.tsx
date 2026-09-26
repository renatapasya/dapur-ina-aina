import "./globals.css";

import {
  Cormorant_Garamond,
  Lato,
} from "next/font/google";


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700"
  ],
  variable: "--font-brand",
});


const lato = Lato({
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "700"
  ],
  variable: "--font-body",
});


export const metadata = {
  title: "Dapur Ina Aina",
  description: "Luxury Indonesian Dining Experience in Jimbaran Bali",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html 
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${cormorant.variable}
          ${lato.variable}
          antialiased
        `}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}