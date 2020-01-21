import React from 'react';
import { useSelector } from 'react-redux';
import { PlayerCard } from './PlayerCard';
import { Loader } from '../display/Loader';

export const Players = () => {

    //Get Players from Back end save on redux state and use hooks to fetch

    const players = useSelector(state => state.players)
    
    //Map over players and create Player card per player
    if (!players) {
        return <Loader />
    }
    return (
        <div>
            {players.map((player,index) => <PlayerCard player={player} key={index} />)}
        </div>
    )
}

