import Footer from "@/components/common/Footer/Footer";
import NavBar from "@/components/common/NavBar";

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
