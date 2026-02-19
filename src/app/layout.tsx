import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Georgia | Portfolio",
  description: "CS + embedded + education tools. I like hard problems and clean UX.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-5xl px-5 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
