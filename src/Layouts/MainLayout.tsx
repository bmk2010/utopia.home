import Header from "./components/Header";
import Footer from "./components/Footer";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation()
  
  return (
    <div className="max-w-[1920px] w-full">
      <Header />
      {children}
      {location.pathname !== '/login' && location.pathname !== '/login/sms' && <Footer />}
    </div>
  );
};

export default MainLayout;
