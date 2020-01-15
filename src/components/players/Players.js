import React, { useEffect  }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayers } from '../../actions/Actions';
import { PlayerCard } from './PlayerCard';

export const Players = () => {

    //Get Players from Back end save on redux state and use hooks to fetch

    const players = useSelector(state => state.players)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getPlayers())
    }, [dispatch])
    
    //Map over players and create Player card per player
    
    return (
        <div>
            {players.map(player => <PlayerCard player={player} />)}
        </div>
    )
}

