import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Recipe Search",
  description: "Search for recipes by ingredients",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
