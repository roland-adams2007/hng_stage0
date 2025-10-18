const Profile = require("../models/Profile")

const getProfile = async function (req, res) {
    const getFact = await Profile.getCatFacts();
    const timestamp = new Date().toISOString();
    if (!getFact.success) {
        res.status(500).json({
            status: "error",
            user: {
                email: null,
                name: null,
                stack: null,
            },
            timestamp: timestamp,
            fact: null
        })
        return;
    }

    res.status(200).json({
        status: 'success',
        user: {
            email: "adamsrolly7@gmail.com",
            name: "Roland  Adams",
            stack: "NodeJs/Express",
        },
        timestamp: timestamp,
        fact: getFact.message
    })

}

module.exports = { getProfile }