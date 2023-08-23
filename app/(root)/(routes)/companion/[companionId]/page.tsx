import CompanionForm from "@/components/CompanionForm"
import prismadb from "@/lib/prismadb"
import { auth, redirectToSignIn } from "@clerk/nextjs"

interface CompanionPageProps {
    params: {
        companionId: string
    }
}

const CompanionPage = async ({params} : CompanionPageProps ) => {
    const {userId} = auth();
    // TODO: Check subscription status

    if(!userId){
        return redirectToSignIn()
    }
    

    const companion = await prismadb.companion.findUnique({
        where: {
            userId: userId,
            id: params.companionId
        }
    })

    const categories = await prismadb.category.findMany()


    return (
        <div>
            <CompanionForm
            initialData={companion}
            categories={categories}
            
            />
        </div>
    )
}

export default CompanionPage