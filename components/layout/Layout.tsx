import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/SEO";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <LocalBusinessSchema />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
