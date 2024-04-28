import ATProvider from "./component/ATProvider";
import ImageCarousel from "./component/ImageCarousel";
import Info from "./component/Info";
import { ATWrapperStyle } from "./style.css";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <ATProvider id={params.id} className={ATWrapperStyle}>
            <ImageCarousel/>
            <Info/>
        </ATProvider>
    )
}