const rxjs = require('rxjs')
const discord = require("discord.js")
const client = new discord.Client()

module.exports = class Client {

    constructor() {
        this._channel = null
        this._onconnect = null
        this._connected = false
    }

    onConnect() {
        return this._onconnect
    }

    connect(channelId) {

        this._onconnect = new rxjs.BehaviorSubject(false)

        client.on('ready', function () {
            this._channel = client.channels.find(channel => channel.id === channelId)
            this._connected = true
            this._onconnect.next(true)
        })

        return this._onconnect
    }

    async login(token) {
        if (this._connected)
            return client.login(token)
        else
            throw new Error('Not Connected yet')

    }

    send(message) {
        if (this._connected)
            return this._channel.send(message)
        else
            throw new Error('Not Connected yet')
    }

}