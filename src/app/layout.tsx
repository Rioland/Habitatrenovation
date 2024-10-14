import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "./global.css";
import Script from "next/script";
export const metadata = {
  title: "habitatrenovation",
  description: "Created by habitatrenovation",
  keywords: `habitatrenovation, doors, chairs ,
Home renovation,
Remodeling supplies,
Flooring materials,
Kitchen renovation,
Bath remodeling,
Wall tiles,
Door installation,
Trim supplies,
Cabinet installation,
Countertop materials,
Exterior doors,
Interior doors,
Wrought iron doors,
Fiberglass doors,
Porcelain tiles,
Vinyl flooring,
SPC flooring,
Wood flooring,
Shaker cabinets,
Kitchen design,
Free 3D kitchen design,
Affordable home remodeling,
Surplus building materials,
DIY home improvement,
Budget home renovation,
Home value increase,
Bathroom vanities,
Marble countertops,
Stone flooring,
MDF doors,
Prehung doors,
Tile grout,
Tile installation,
Home improvement store,
Home hardware,
Renovation supplies Texas,
Home renovation Pulaski WI,
Trim molding,
Wall panels,
Modern kitchen cabinets,
Kitchen remodeling ideas,
Home renovation financing,
Custom kitchen design,
Bath renovation tips,
Front door replacement,
Affordable flooring,
Prehung door installation,
Interior design ideas,
Renovation blog,
Home remodeling guide`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
        <Footer />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        
        />
      </body>
    </html>
  );
}
