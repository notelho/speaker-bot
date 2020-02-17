const week = require('./week')

const events = [

    {
        name: 'Trilha da revelação',
        times: [
            { hour: 23, minute: 00 },
            { hour: 23, minute: 30 },
        ],
        days: [
            week.SUNDAY,
            week.MONDAY,
            week.WEDNESDAY,
            week.FRIDAY,
        ]
    },

    {
        name: 'Torre celestial',
        times: [
            { hour: 12, minute: 00 },
        ],
        days: [
            week.SATURDAY,
        ]
    }

]

module.exports = events