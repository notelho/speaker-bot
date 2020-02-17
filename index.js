require('dotenv').config()

const Schedule = require('./source/models/schedule')
const Client = require('./source/models/client')

const client = new Client()
const schedule = new Schedule()

function connect() {

    client.connect(process.env.CHANNEL_ID)

        .subscribe(
            () => start(),
            () => error())

    client.login(process.env.TOKEN_BOT)

}

function start() {

    eventSubscription = schedule.event.subscribe(event => send(event))

    schedule.create()

    about()

}

function error() {

    console.log('error');

}

function send(event) {

    console.log(event.message)
    client.send('event')
    client.send(event.message)

}

function about() {

    const about = [
        '```',
        'This bot was created by lsabela & ×AZ× Xuliana',
        'and will alert about game events sending messages at time',
        `and 5 minutes before of registered events.`,
        'To change the time or add events, speak to one of the managers.',
        '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)',
        '```',
    ]

    // let res = about.join('\n')

    let res = about[5]
    console.log(res)
    client.send(res)

}


connect()