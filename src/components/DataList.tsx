import React, {Dispatch, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../services/api/dataThunk"

const DataList: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const data = useSelector((state: any) => state.data.data.products)
    const status = useSelector((state: any) => state.data.status);
    const error = useSelector((state: any) => state.data.error);

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    console.log(data)
    return (
        <>
            <h6>Data List</h6>
            <ul>
                {data && data.map((i: any, index: any) => (
                    <li key={index}>{i.title}</li>
                ))}
            </ul>
        </>
    )
}
export default DataList;