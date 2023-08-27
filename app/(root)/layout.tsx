import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import { checkSubscription } from "@/lib/subscription";


interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout = async ({ children } : RootLayoutProps) => {

    const isPro = await checkSubscription();

    return(
        <div className="h-full">
                <NavBar isPro={isPro} />
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
