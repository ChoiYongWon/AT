import IconButton from "@/app/_common/component/IconButton"
import Link from "next/link"

const CancelButton = () => {

    return (
        <Link href={"/profile"} prefetch scroll={false}>
            <IconButton size="34px" type="cancel"/>
        </Link>
    )
        
}

export default CancelButton