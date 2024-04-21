
import useFetch from "../../hooks/useFetch"
import { NurseType } from "../../types/nurseTypes/nurseType"
import { Link } from "react-router-dom"
// TEST
const Test = () => {
    const { data, loading } = useFetch("/api/nurse")
    return (
        <>
            {loading ? (
                <div>loading...</div>
            ) : (
                data?.map((nurse: NurseType, index: number) => (
                    <>
                        <Link to={`/nurse/${nurse.userId}`}>
                            <div className="flex gap-10">
                                Nurse {index + 1}:
                                <h1>
                                    {nurse.firstName} {nurse.lastName}
                                </h1>
                                <h2>{nurse.gender}</h2>
                            </div>
                        </Link>
                    </>
                ))
            )}
        </>
    )
}

export default Test
