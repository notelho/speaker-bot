const schedule = require('node-schedule')
const EventNow = require('./event-now')
const EventSoon = require('./event-soon')

module.exports = class ScheduleCreator {

    constructor() { }

    run(events, emitter) {

        // pra cada event cria enviando o date e o nome

        // const schedules = [
        //     new EventNow(timing, name),
        //     new EventSoon(timing, name)
        // ]

        for (let j = 0; j < events.length; j++) {

            const key = `job-${i}${j}`
            const jobSchedule = events[j].getSchedule()
            const callback = () => emitter.next(events[j])

            schedule.scheduleJob(key, jobSchedule, callback)
        }

        return events
    }

}