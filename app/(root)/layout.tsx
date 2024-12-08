import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";

const HomeLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className="flex flex-col min-h-screen ">
    <Header /> 
     <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
     
  );
}
