

export const useGetStats = (results) => {
    // Get venues or rulesets played and set to format for pie chart ({name: '', value: 1}) 
    const getStats = (stat) => {

        let stats = []
        let count = 0
        stat.forEach(item => {
            count = 0
            results.forEach(result => {
                if (item === result.venue) {
                    count = count + 1
                }
                if (item === result.ruleset) {
                    count = count + 1
                }
            })
            stats.push({ name: item, value: count })
        })
        return stats
    }

    const getIndividualStats = (player, stat) => {
        let stats = []
        let count = 0
        stat.forEach(item => {
            console.log(item)
            player.results.forEach(result => {
                if (item === result.venue) {
                    count = count + 1
                }
                if (item === result.ruleset) {
                    count = count + 1
                }
            })
            stats.push({ name: item, value: count })
            count = 0
        })
        return stats
    }

    // Use results to loop over and return whether challengers or challenged player won
    const getChallengesWon = (results) => {
        console.log(results.name)
        if (results.name) {
            let data = []
            let counter = 0
            let counter1 = 0
            results.results.forEach(result => {
                if (result.challenger === results.name) {
                    if (result.challengerScore > result.challengedScore) {
                        data = [
                            { name: 'Challenger won', value: counter = counter + 1 },
                            { name: 'Challenged won', value: counter1}
                        ]
                    }
                }
                if (result.challenged === results.name) {
                    if (result.challengedScore > result.challengerScore) {
                        data = [
                            { name: 'Challenger won', value: counter},
                            { name: 'Challenged won', value: counter1 = counter1 + 1 }
                        ]
                    }
                }
                })
            return data

        }
        let data = []
        let counter = 0
        results.forEach(result => {
            if (result.challengerScore > result.challengedScore) {
                data = [
                    { name: 'Challenger Won', value: counter = counter + 1 },
                    { name: 'Challenged Won', value: results.length - counter }
                ]
            }

        })
        return data
    }
    // Get amount Played for total
    const amountPlayedFor = results.reduce(function (accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue.pot
    }, 0)

    const getHighestChallenger = (players) => {
        let count = 0
        let data = []
        players.forEach(player => {
            player.results.forEach(result => {
                if (player.name === result.challenger) {
                    count = count + 1
                    const name = player.name
                    data.push({ name: name, count: count })
                }
            })
            count = 0;
            return data
        })
        data.sort(compareValues('count', 'desc'))
        return data[0]
    }

    function compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }

    const getMostChallenged = (players) => {
        let count = 0
        let data = []
        players.forEach(player => {
            player.results.forEach(result => {
                if (player.name === result.challenged) {
                    count = count + 1
                    const name = player.name
                    data.push({ name: name, count: count })
                }
            })
            count = 0;
            return data
        })
        data.sort(compareValues('count', 'desc'))
        return data[0]
    }

    // const max = getmostChallengedPlayer(players)
    return {
        getStats,
        getChallengesWon,
        amountPlayedFor,
        getHighestChallenger,
        getMostChallenged,
        getIndividualStats
    }
}