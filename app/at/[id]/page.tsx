import { redirect } from "next/navigation";
import ATProvider from "./component/ATProvider";
import ImageCarousel from "./component/ImageCarousel";
import Info from "./component/Info";
import { ATWrapperStyle } from "./style.css";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export default async function Page({ params }: { params: { id: string } }) {

    const exists = await prisma.spot.findUnique({
      where: {
        id: params.id
      }
    })
    console.log(exists)
    if (!exists) redirect(`/error/404`)
  

    return (
        <ATProvider id={params.id} className={ATWrapperStyle}>
            <ImageCarousel/>
            <Info/>
        </ATProvider>
    )
}