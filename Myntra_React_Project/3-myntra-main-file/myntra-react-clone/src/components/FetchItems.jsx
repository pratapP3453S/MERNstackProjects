import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemSliceActions } from "../store/itemSlice";
import { fetchStatusSliceActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
    
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(fetchStatusSliceActions.markFetchingStarted());
        fetch("http://localhost:8080/items", {signal})
        .then((res) => res.json())
        .then(({items}) => {
            dispatch(fetchStatusSliceActions.markFetchDone());
            dispatch(fetchStatusSliceActions.markFetchingFinished());
            dispatch(itemSliceActions.addInitialItems(items[0]));
        }) 

        return () => {
            controller.abort(); 
        };

    },[fetchStatus])

    return <>
    </>
}
export default FetchItems;