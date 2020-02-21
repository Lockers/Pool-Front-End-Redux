import { useSelector } from 'react-redux';

export const usePopulateLeague = () => {
    //Builds data to use in league table. Columns for labels and createData populates with data
    const columns = [
        { id: 'leaguePosition', label: 'Pos', minWidth: 50, align: 'center' },
        { id: 'name', label: 'Name', minWidth: 100, align: 'center' },
        { id: 'played', label: 'P', minWidth: 50, align: 'center' },
        { id: 'won', label: 'W', minWidth: 50, align: 'center' },
        { id: 'daysLeft', label: 'Deadline (Days)', maxWidth: 25, align: 'center' },
    ];

    function createData(leaguePosition, name, played, won, challengable, daysLeft) {
        return { leaguePosition, name, played, won, challengable, daysLeft};
    }

    const players = useSelector(state => state.players)

    const rows = []
    
    //Gets date from last result to calculate days left for challenge.. set at 30 to count down
    players.map(player => {
        if (player.results.length > 0) {
            let days = 0
            const time = new Date(player.results.slice(-1)[0].date).getTime();
            const now = new Date().getTime();
            const daysLeft = now - time;

            const sum = 30 - (daysLeft / (60 * 60 * 24 * 1000))
            days = Math.ceil(sum)
            return rows.push(createData(player.leaguePosition, player.name, player.played, player.won, player.challengable, days))
        }

        const time = new Date(player.createdAt).getTime();
        const now = new Date().getTime();
        const daysLeft = now - time;

        const sum = 30 - (daysLeft / (60 * 60 * 24 * 1000))
        let days = Math.ceil(sum)
        if (isNaN(days)) {
            days = 0;
        }
        return rows.push(createData(player.leaguePosition, player.name, player.played, player.won, player.challengable, days))
    })

    return { rows, columns }
}