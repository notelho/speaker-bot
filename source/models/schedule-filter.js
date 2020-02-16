const schedule = require('node-schedule')
const events = require('../resources/events')

module.exports = class ScheduleFilter {

    constructor() { }

    run() {

        let weekday = new Date().getDay()

        console.log(weekday);

        for (let event of events) {





        }

        // filtrar os events de acordo com dia da semana, e devolver as dates

    }

}