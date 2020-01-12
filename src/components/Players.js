import React, { useEffect  }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayers } from '../actions/Actions';

export const Players = (props) => {
    const players = useSelector(state => state.players)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getPlayers())
    }, [dispatch])
    
    
    console.log(players)
    return (
        <div></div>
    )
}

