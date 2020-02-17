const schedule = require('node-schedule')

module.exports = class ScheduleDestroyer {

    constructor() { }

    run(keys) {

        for (let key of keys)
            schedule.scheduledJobs[key].cancel()

    }

}