const schedule = require('node-schedule')
const Event = require('./event')

module.exports = class EventNow extends Event {

    constructor(timing, name) {
        super(timing, name)
    }

    get schedule() {

        // let scheduleEvent = new schedule.RecurrenceRule()

        // for (let attr in this._timing)
        //     scheduleEvent[attr] = this._timing[attr]

        // return scheduleEvent

    }

    get message() {
        return `${this._name} already started! Go now!!!`
    }

}