const rxjs = require('rxjs')
const discord = require("discord.js")

module.exports = class Client {

    constructor() {
        this._channel = null
        this._connected = false
        this._onconnect = new rxjs.Subject()
        this._client = new discord.Client()
    }

    connect(channelId) {

        this._client.on('ready', () => {

            this._channel = this._client.channels.find(channel => channel.id === channelId)
            this._connected = true
            this._onconnect.next()

        })

        return this._onconnect
    }

    isConnected() {
        return this._connected
    }

    login(token) {
        return this._client.login(token)
    }

    send(message) {
        this._channel.send(message)
    }

}