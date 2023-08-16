'use client';

import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";


interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout = ({ children } : RootLayoutProps) => {
    return(
        <div className="h-full">
                <NavBar />
                <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
                    <Sidebar />
                </div>
            <main className="md:pl-20 pt-16 h-full">
                {children}
            </main>
        </div>
    )
}

export default RootLayout; 
