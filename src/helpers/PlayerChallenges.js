export const usePlayerChallenges = (results) => {

    //Get total amount played for from all results
    const amountPlayedFor = results.reduce(function (accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue.pot
    }, 0)

    // Sort function to get most challenges/challengers
    function mode(arr) {
        return arr.sort((a, b) =>
            arr.filter(v => v === a).length
            - arr.filter(v => v === b).length
        ).pop();
    }

    //Double loop to get player name, then check player name against times challenged (Expensive)
    const mostChallengedPlayer = (results) => {
        let test = []
        for (let i = 0; i < results.length; i++) {
            const name = results[i].challenger
            for (let k = 0; k < results.length; k++) {
                if (results[k].challenger === name) {
                    test.push(name)

                }
            }
        }
        return mode(test)
    }

    //Double loop to get player name, then check player name against times issued challenge (Expensive)
    const mostChallengesPlayer = (results) => {
        let test = []
        for (let i = 0; i < results.length; i++) {
            const name = results[i].challenged
            for (let k = 0; k < results.length; k++) {
                if (results[k].challenged === name) {
                    test.push(name)

                }
            }
        }
        return mode(test)
    }
    return {
        mostChallengedPlayer,
        amountPlayedFor,
        mostChallengesPlayer
    }
}