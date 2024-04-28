import { useRecoilValue } from "recoil";
import { atDataState } from "../../recoil";
import { GetATData } from "@/app/_common/query/get/useGetAT";

type Props = {
    className?: any;
    style?: any;
}

const Info = ({
    className, style
}: Props) => {

    // const at = useRecoilValue(atDataState)

    return (
        <div className={className} style={style}>

        </div>
    )
}

export default Info