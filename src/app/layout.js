import "./globals.css";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "HANUMANT WAREHOUSE",
  description: "HANUMANT Warehouse is a trusted name in the agricultural industry, specializing in the supply and export of high-quality products. Located in Merta City, the largest raw material mandi in India, we ensure the best quality guar products, spices, and agricultural commodities. Our expertise in processing and quality control allows us to deliver premium products to our clients worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
         <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <div className="fixed bottom-4 right-4 z-20">
        <Link
        href="https://wa.me/919999999999&text=Hey!%20Can%20I%20Get%20More%20Info%20On%20This?" // Replace with actual WhatsApp number
        target="_blank"
        className="fixed bottom-6 right-6 bg-primary-main text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </Link>
        {/* <Link href={'https://api.whatsapp.com/send?phone=+919876543210&text=Hey!%20Can%20I%20Get%20More%20Info%20On%20This?'} className="bg-primary-main text-white py-2 px-4 rounded-full flex items-center shadow-md">
          <i className="fas fa-comments mr-2" /> Click Here To Chat
        </Link> */}
      </div>
        {children}
      </body>
    </html>
  );
}
