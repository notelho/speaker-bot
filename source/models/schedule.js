const schedule = require('node-schedule')
const rxjs = require('rxjs')
const EventNow = require('./event-now')
const EventSoon = require('./event-soon')
const ScheduleCreator = require('./schedule-creator')
const ScheduleDestroyer = require('./schedule-destroyer')

module.exports = class Schedule {

    constructor() {

        this._events = []

        this._onEvent = new rxjs.Subject()
        this._onReboot = new rxjs.Subject()

        this._scheduleCreator = new ScheduleCreator()
        this._scheduleDestroyer = new ScheduleDestroyer()
        this._scheduleFilter = new ScheduleFilter()

        this._rebooter()
    }

    create() {
        const events = this._scheduleFilter.run()
        const schedules = this._scheduleCreator.run(events, this._onEvent)
        this.events.push(schedules)
    }

    destroy() {
        this._scheduleDestroyer.run(this._events)
        this._events = []
    }

    _rebooter() {
        let rule = new schedule.RecurrenceRule()
        rule['minute'] = process.env.REBOOT_MINUTE
        rule['hour'] = process.env.REBOOT_HOUR
        schedule.scheduleJob('reboot', rebootRule, () => this.reboot.next())
    }

    get reboot() {
        return this._onReboot
    }

    get event() {
        return this._onEvent
    }

}