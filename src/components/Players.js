import React, { useEffect  }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayers } from '../actions/Actions';
import { PlayerCard } from './PlayerCard';

export const Players = () => {
    const players = useSelector(state => state.players)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getPlayers())
    }, [dispatch])
    
    return (
        <div>
            {players.map(player => <PlayerCard player={player} />)}
        </div>
    )
}

