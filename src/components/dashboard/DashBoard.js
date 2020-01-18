import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVenueStats } from '../../actions/Actions';
import  PieChart  from '../display/DonutChart';

export const DashBoard = () => {

    const stats = useSelector(state => state.stats)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVenueStats())
    }, [dispatch])
    console.log(stats)
    if (!stats) {
        return <h1>Loader</h1>
    }
    return (
        <div>
        <div>
            Venues Used
            <PieChart stats={stats} />
        </div>
        <div>
            Venues Used
            <PieChart stats={stats} />
            </div>
        </div>
    )
}