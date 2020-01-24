import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { PlayerCard } from './PlayerCard';

export const Players = () => {

    //Get Players from Back end save on redux state and use hooks to fetch

    const players = useSelector(state => state.players)
    const [filterPlayers, setFilterPlayers] = useState(players)

    const changeHandler = (e) => {
        e.preventDefault()
        setFilterPlayers(players.filter(player => player.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    //Map over players and create Player card per player
    return (
        <div>
            <form>
                <TextField style={{marginTop: '1rem'}}
                    id="outlined-helperText"
                    label="Search-Player"
                    variant="outlined"
                    onChange={changeHandler}
                />
            </form>
            {filterPlayers.length > 0 ? filterPlayers.map((player, index) => <PlayerCard player={player} key={index} />) : players.map((player, index) => <PlayerCard player={player} key={index} />)}
        </div>
    )
}

