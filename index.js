require('dotenv').config()

const events = require('./source/resources/events')

const Schedule = require('./source/models/schedule')
const Client = require('./source/models/client')

const client = new Client()
const schedule = new Schedule()

var eventSubscription
var rebootSubscription

function connect() {

    client.connect(process.env.CHANNEL_ID)

        .subscribe(
            () => start(),
            () => error())

    client.login(process.env.TOKEN_BOT)

}

function start() {

    eventSubscription = schedule.event.subscribe(event => send(event))

    rebootSubscription = schedule.reboot.subscribe(event => {

        console.log('a inscrição funciono pelomenos');


        reboot(event)
    })

    for (let event of events)
        schedule.create(event.timing, event.name)

    about()

}

function error() {

    console.log('something goes wrong');

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

function reboot() {

    console.log('reboot')

    client.send('reboot')

    schedule.destroy()

    eventSubscription.unsubscribe()
    rebootSubscription.unsubscribe()

    eventSubscription = null
    rebootSubscription = null

    start()

}

connect()