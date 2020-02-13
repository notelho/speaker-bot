const schedule = require('node-schedule')
const rxjs = require('rxjs')
const Event = require('./event')

module.exports = class Schedule {

    constructor() {
        this._events = []
        this._atEvent = new rxjs.Subject()
    }

    atEvent() {
        this._atEvent
    }

    create(timing, message) {

        let event = new Event(timing, message)

        let scheduleEvent = event.getSchedule()

        schedule.scheduleJob(scheduleEvent, () => this._run(event))

        this._events.push(event)

    }

    _run(event) {

        // logs

        // tratamento event pra informação

        // next 

    }

}