import CompanionForm from "@/components/CompanionForm"
import prismadb from "@/lib/prismadb"

interface CompanionPageProps {
    params: {
        companionId: string
    }
}

const CompanionPage = async ({params} : CompanionPageProps ) => {
    // TODO: Check subscription status

    const companion = await prismadb.companion.findUnique({
        where: {
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