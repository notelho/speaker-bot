const schedule = require('node-schedule')

module.exports = class Event {

    constructor(timing, message) {
        this._timing = timing
        this._message = message
    }

    getSchedule() {

        let scheduleEvent = new schedule.RecurrenceRule()

        for (let attr in this._timing)
            scheduleEvent[attr] = this._timing[attr]

        return scheduleEvent
    }

    getDate() {

    }

    getMessage() {

    }

    getData() {

    }

}