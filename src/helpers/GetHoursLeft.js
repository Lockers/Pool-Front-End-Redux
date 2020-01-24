import React from 'react'

export const useGetHoursLeft = (player) => {

    if (!player) {
        return <h1>loading</h1>
    }
    const hours = (player) => {
        let hours = 0
        if(player.results.length > 0)
        if (player.name === player.results.slice(-1)[0].challenged || player.name === player.results.slice(-1)[0].challenger) {
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
        }
        return hours
    }
    return { hours }
}
