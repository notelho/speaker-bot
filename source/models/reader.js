module.exports = class Reader {

    constructor() {

        this._src = null

    }

    read() {

        let readedFromFile = [
            { timing: { minute: 0, hour: [12, 14, 16, 18, 20, 22, 00, 02] }, message: 'evento do reino' },
            { timing: { minute: 30, hour: [13, 17, 23], }, message: 'World Boss' },
            { timing: { minute: 00, hour: 22, dayOfWeek: [2, 4] }, message: 'gvg' },
            { timing: { minute: 30, hour: [17, 23], dayOfWeek: [2, 4, 6] }, message: 'duelo das ruinas' },
            { timing: { minute: 30, hour: 21, dayOfWeek: [1, 3, 5, 7], }, message: 'baile da guild' },
        ]

        this._src = readedFromFile

        return this
    }

    src() {
        return this._src
    }

}