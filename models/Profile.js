const axios = require('axios');
const Profile = {
    getCatFacts: async function () {
        try {
            const response = await axios.get("https://catfact.ninja/fact");
            return { success: true, message: response.data.fact };
        } catch (error) {
            return { success: false, message: 'Unable to connect to catfact' };
        }
    }
};
module.exports = Profile;