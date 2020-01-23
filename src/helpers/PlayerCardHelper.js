

export const usePlayerCardHelper = () => {

    //Get for of player by checking if they won, and then adding a W or L to array.. then return that array with last 6 results as W or L
    const getForm = (array, props) => {
        const newArray = []

        array.forEach(lel => {
            if (lel.challenger === props.player.name) {
                if (lel.challengerScore > lel.challengedScore)
                    newArray.push('W')
                else if (lel.challengedScore > lel.challengerScore)
                    newArray.push('L')
            }
            if (lel.challenged === props.player.name) {
                if (lel.challengedScore > lel.challengerScore)
                    newArray.push('W')
                else if (lel.challengerScore > lel.challengedScore)
                    newArray.push('L')
            }
        })

        return newArray.slice(0, 6).reverse()

    }
    return {
        getForm,
    }
}
