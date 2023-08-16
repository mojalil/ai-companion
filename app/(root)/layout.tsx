'use client';

import NavBar from "@/components/NavBar";

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout = ({ children } : RootLayoutProps) => {
    return(
        <div className="h-full">
                <NavBar />

            <main className="md:pl-20 pt-16 h-full">
                {children}
            </main>
        </div>
    )
}

export default RootLayout; 
