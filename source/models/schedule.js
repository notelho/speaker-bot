const rxjs = require('rxjs')
const schedule = require('node-schedule')
const ScheduleReader = require('./schedule-reader')
const ScheduleCreator = require('./schedule-creator')
const ScheduleDestroyer = require('./schedule-destroyer')

module.exports = class Schedule {

    constructor() {
        this._keys = []
        this._emitter = new rxjs.Subject()
        this._scheduleReader = new ScheduleReader()
        this._scheduleCreator = new ScheduleCreator()
        this._scheduleDestroyer = new ScheduleDestroyer()

        let
            rule = new schedule.RecurrenceRule(),
            minute = parseInt(process.env.REBOOT_MINUTE),
            hour = parseInt(process.env.REBOOT_HOUR)

        rule['minute'] = minute
        rule['hour'] = hour

        schedule.scheduleJob('reboot', rule, () => this.reboot())
    }

    create() {
        const events = this._scheduleReader.run()
        const keys = this._scheduleCreator.run(events, this)
        this._keys = keys
    }

    reboot() {
        this._scheduleDestroyer.run(this._keys)
        this._keys = []
        this.create()
    }

    next(params) {
        this._emitter.next(params)
    }

    get event() {
        return this._emitter
    }

}