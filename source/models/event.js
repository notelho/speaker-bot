const schedule = require('node-schedule')

module.exports = class Event {

    constructor(timing, name, type) {
        this._timing = timing
        this._name = name
        this._type = type
        this._messages = {
            "now": `${this._name} already started! Go now!!!`,
            'soon': `${this._name} will start in 5 minutes! Get ready!`
        }
    }

    getSchedule() {

        let scheduleEvent = new schedule.RecurrenceRule()

        for (let attr in this._timing)
            scheduleEvent[attr] = this._timing[attr]

        return scheduleEvent

    }

    get message() {
        return this._messages[this._type]
    }

    get timing() {
        return this._timing
    }

    get name() {
        return this._name
    }

}