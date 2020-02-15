const schedule = require('node-schedule')
const rxjs = require('rxjs')
const Event = require('./event')

module.exports = class Schedule {

    constructor() {
        this._events = []
        this._gap = { time: 5, unity: 'minutes' }
        this._onEvent = new rxjs.Subject()
    }

    create(timing, name) {

        let event = new Event(timing, name)

        let scheduleEvent = event.getSchedule()

        // logs

        // tratamento event pra informação

        // next 


        schedule.scheduleJob(scheduleEvent, () => this._run(event))

        this._events.push(event)

    }

    get gap() {
        return this._gap
    }

    get event() {
        return this._onEvent
    }

}