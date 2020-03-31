const axios = require('axios')

/**
 * @description This function allows us to fetch the github data from a provided user
 * @example
 * user = genarot
 * @param {string} user
 */
exports.fetchUserData = async (user) => {
    const url = `https://api.github.com/users/${user}`;

    try {
        const data = await axios.get(url)

        return data.data;
    } catch (_err) {
        console.error(_err)
        return;
    }
}
