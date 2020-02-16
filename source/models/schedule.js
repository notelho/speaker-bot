const schedule = require('node-schedule')
const rxjs = require('rxjs')
const Event = require('./event')

module.exports = class Schedule {

    constructor() {

        this._events = []
        this._gap = { time: 5, unity: 'minutes' }
        this._onEvent = new rxjs.Subject()
        this._onReboot = new rxjs.Subject()

        let rebootRule = new schedule.RecurrenceRule()

        rebootRule['minute'] = 56
        rebootRule['hour'] = 21

        schedule.scheduleJob('reboot', rebootRule, () => this._onReboot.next())

    }

    create(timing, name, self = this) {

        const events = [
            new Event(timing, name, 'now'),
            // new Event(timing, name, 'soon')
        ]

        for (let i = 0; i < events.length; i++) {

            const key = `job-${this._events.length}${i}`

            const jobSchedule = events[i].getSchedule()

            const callback = () => self.event.next(events[i])

            schedule.scheduleJob(key, jobSchedule, callback)

        }

        this._events.push(events)

    }

    destroy() {

        // console.log('destroy')

        // for (let i = 0; i < this._events.length; i++) {

        //     for (let j = 0; i < this._events[i].length; j++) {

        //         console.log(schedule.scheduledJobs[`job-${i}${j}`])

        //         schedule.scheduledJobs[`job-${i}${j}`].cancel()

        //         console.log(schedule.scheduledJobs[`job-${i}${j}`])

        //     }

        // }

        // this._events = []

    }

    get reboot() {

        console.log('alguem se increveu em');

        console.log(this._onReboot);


        return this._onReboot
    }

    get gap() {
        return this._gap
    }

    get event() {
        return this._onEvent
    }

}