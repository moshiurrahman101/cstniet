import { Poppins } from "next/font/google";
import "../globals.css";
import ResponsiveNav from "../components/Navigation/ResponsiveNav";
import Providers from "@/data/Provider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "CST::NIET",
  description:
    "Welcome to Department of Computer Science & Technology - NIET Dhaka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <div>
            <ResponsiveNav />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
