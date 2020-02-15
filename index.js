require('dotenv').config()

const events = require('./source/resources/events')

const Schedule = require('./source/models/schedule')
const Client = require('./source/models/client')

const client = new Client()
const schedule = new Schedule()

function connect() {

    client.connect(process.env.CHANNEL_ID)

        .subscribe(() => start())

    client.login(process.env.TOKEN_BOT)

}

function start() {

    schedule.event.subscribe(event => run(event))

    for (let event of events)
        schedule.create(event.timing, event.name)

    const about = [
        '```',
        'This bot was created by lsabela & ×AZ× Xuliana',
        'and will alert about game events sending messages at time',
        `and ${schedule.gap.time} ${schedule.gap.unity} before of registered events.`,
        'To change the time or add events, speak to one of the managers.',
        '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)',
        '```',
    ]

    // let res = about.join('\n')

    let res = about[5]
    console.log(res)
    client.send(res)

}

function run(event) {

    console.log(event);

}

connect()