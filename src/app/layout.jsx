import "@/globals.css";
import { Poppins } from "next/font/google";
import DevNotice from "@/components/landing/InDevelopment.jsx";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "BitElements",
  description: "React UI components library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased relative`}>
        {children}
        "use client"
        <DevNotice />
      </body>
    </html>
  );
}

