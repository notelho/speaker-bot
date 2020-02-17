const messages = require('../resources/messages')
const schedule = require('node-schedule')
const moment = require('moment')

module.exports = class Event {

    constructor(name, time, type, gap) {

        this._name = name
        this._time = time
        this._type = type
        this._gap = gap

        this._message = messages[type](name)

    }

    get schedule() {
        let hour = this._time.hour
        let minute = this._time.minute
        let date = new Date()

        date.setHours(hour, minute, 0, 0)

        if (this._gap !== 0)
            return new Date(date.getTime() - (1000 * 60 * (this._gap * -1)))

        return date
    }

    get isAfter() {

        const now = new Date().getTime()
        const schedule = this.schedule.getTime()

        return now < schedule
    }

    get gap() {
        return this._gap
    }

    get message() {
        return this._message
    }

    get timing() {
        return this._timing
    }

    get name() {
        return this._name
    }

    get type() {
        return this._type
    }

}