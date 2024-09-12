import "./globals.css";
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sorveteria Next Flavour",
  description: "NextJS project",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
