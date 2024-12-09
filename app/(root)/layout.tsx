import { Afacad } from "next/font/google";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
const AfacadFont = Afacad({
  subsets: ["latin"],
  display: "swap",
});
const HomeLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className={`${AfacadFont} flex flex-col min-h-screen`}>
    <Header /> 
     <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
     
  );
}
export default HomeLayout;