import "@/app/ui/global.css";
// import { inter } from "@/app/ui/fonts";
import { Inter, Lusitana } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lusitana",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lusitana.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
