import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./bootstrap-client";
import "./globals.css";
import Navbar from "../shared/components/Navbar";

export const metadata = {
  title: "Apartment Listing App",
  description: "View and add apartments easily",
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
        <BootstrapClient />
        <main className="container my-4">{children}</main>
      </body>
    </html>
  );
}
