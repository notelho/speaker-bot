const schedule = require('node-schedule')

module.exports = class Event {

    constructor(timing, name) {
        this._timing = timing
        this._name = name
    }

    getSchedule() {

        let scheduleEvent = new schedule.RecurrenceRule()

        for (let attr in this._timing)
            scheduleEvent[attr] = this._timing[attr]

        return scheduleEvent

    }

    get timing() {
        return this._timing
    }

    get name() {
        return this._name
    }

}