const schedule = require('node-schedule')

module.exports = class ScheduleCreator {

    constructor() {
        this._serial = null
    }

    run(schedules, context) {

        this._serial = 0
        let keys = []

        for (let events of schedules) {
            for (let event of events) {

                const key = this.serial()
                const date = event.schedule
                const callback = () => context.next(event)

                schedule.scheduleJob(key, date, callback)

                keys.push(key)
            }
        }

        return keys
    }

    serial() {
        return `job-${++this._serial}`
    }

}