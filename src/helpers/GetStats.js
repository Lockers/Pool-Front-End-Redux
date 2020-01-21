export const useGetStats = (results) => {
    // Get venues played and set to format for pie chart ({name: '', value: 1}) 
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

    const getChallengesWon = (results) => {
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
    return {
        getStats,
        getChallengesWon
    }
}