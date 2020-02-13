const Converter = require('./converter')
const path = require('path');
const XLSX = require('xlsx')

module.exports = class Reader {

    constructor() {

        this._src = null

        this._path = '../resources/'

        this._converter = new Converter()

    }

    read(name) {

        try {

            const dir = 'source/resources'

            const file = path.resolve(`${dir}/${name}`)

            const xlxs = XLSX.readFile(file)

            this._src = xlxs

            return this._converter.convert(xlxs)

        } catch (err) {

            throw err

        }

    }

    src() {
        return this._src
    }

}