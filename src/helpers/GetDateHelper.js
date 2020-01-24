import { useSelector } from 'react-redux';

export const usePopulateLeague = () => {
    //Builds data to use in league table. Columns for labels and createData populates with data
    const columns = [
        { id: 'leaguePosition', label: 'Pos', minWidth: 50 },
        { id: 'name', label: 'Name', minWidth: 100 },
        { id: 'played', label: 'P', minWidth: 50 },
        { id: 'won', label: 'W', minWidth: 50, align: 'right' },
        { id: 'lost', label: 'L', minWidth: 50, align: 'right' },
        { id: 'daysLeft', label: 'Days Left', minWidth: 50, align: 'right' },
        { id: 'hours', label: 'Challenge', minWidth: 50, align: 'right' }
    ];

    function createData(leaguePosition, name, played, won, lost, challengable, daysLeft, hours) {
        return { leaguePosition, name, played, won, lost, challengable, daysLeft, hours };
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

            if (player.name === player.results.slice(-1)[0].challenged || player.name === player.results.slice(-1)[0].challenger) {
                let hours = 0
                const time = new Date(player.results.slice(-1)[0].date).getTime();
                const now = new Date().getTime();
                const timeleft = now - time;
                hours = (timeleft / (1000 * 60 * 60)).toFixed(1);
                 if (hours < 48) {
                     hours = Math.ceil((48 - hours) + 24)
                }
                if (hours > 48) {
                    hours = 0
                }
                return rows.push(createData(player.leaguePosition, player.name, player.played, player.won, player.lost, player.challengable, days, hours))
            }

        }
        const time = new Date(player.createdAt).getTime();
        const now = new Date().getTime();
        const daysLeft = now - time;

        const sum = 30 - (daysLeft / (60 * 60 * 24 * 1000))
        let days = Math.ceil(sum)
        if (isNaN(days)) {
            days = 0;
        }

        return rows.push(createData(player.leaguePosition, player.name, player.played, player.won, player.lost, player.challengable, days, 0))

    })

    return { rows, columns }
}