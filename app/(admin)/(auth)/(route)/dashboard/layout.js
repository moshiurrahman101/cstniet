import Providers from "@/data/Provider";
import DashboardSidebar from "./_components/DashboardSidebar";
import "@/app/globals.css";
import Header from "./_components/Header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Dashboard",
  description: "CST going to be fire!",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="">
              <div className="md:w-64 fixed hidden md:block">
                <DashboardSidebar />
              </div>
              <div className="md:ml-64">
                <Header />
                {children}
              </div>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
