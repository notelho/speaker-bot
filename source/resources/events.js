const week = require('./week')

const events = [

    {
        name: 'Evento de teste',
        times: [
            { hour: 10, minute: 00 },
            { hour: 10, minute: 30 },
            { hour: 11, minute: 00 },
            { hour: 11, minute: 30 },
            { hour: 12, minute: 00 },
            { hour: 12, minute: 30 },
            { hour: 14, minute: 00 },
            { hour: 14, minute: 30 },
            { hour: 16, minute: 00 },
            { hour: 16, minute: 30 },
            { hour: 18, minute: 00 },
            { hour: 18, minute: 30 },
            { hour: 20, minute: 00 },
            { hour: 20, minute: 30 },
            { hour: 22, minute: 00 },
            { hour: 22, minute: 30 }, 
            { hour: 23, minute: 45 },
            { hour: 23, minute: 46 },
            { hour: 00, minute: 10 },
            { hour: 00, minute: 20 },
        ],
        days: [
            week.SUNDAY,
            week.MONDAY,
            week.TUESDAY,
            week.WEDNESDAY,
            week.THURSDAY,
            week.FRIDAY,
            week.SATURDAY,
        ]
    },

]

module.exports = events 