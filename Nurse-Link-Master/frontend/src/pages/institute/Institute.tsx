import { useParams } from "react-router"

const Institute = () => {
    const { userId } = useParams()
    return (
        <div>
            Institute
            <div>{userId}</div>
        </div>
    )
}

export default Institute
