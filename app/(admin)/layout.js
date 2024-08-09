import Providers from "@/data/Provider";

export const metadata = {
  title: "Dashboard",
  description: "CST going to be fire!",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
