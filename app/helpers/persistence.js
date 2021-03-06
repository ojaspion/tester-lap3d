const returnObject = require('./returnObject')

module.exports = Model => ({
    create: res => (data) =>
        Model.create(data)
            .then(returnObject.sucessCreate(res))
            .catch(returnObject.error(res)),

    update: res => query => mod =>
        Model.update(query, mod)
            .then(returnObject.returnUpdate(res))
            .catch(returnObject.error(res)),

    findOne: res => (query, mod) =>
        Model.findOne(query, mod)
            .then(returnObject.findSuccess(res))
            .catch(returnObject.error(res)),

    findAll: res => (query, mod) =>
        Model.find(query, mod)
            .then(returnObject.findAllSuccess(res))
            .catch(returnObject.error(res)),

    remove: res => (query) =>
        Model.remove(query)
            .then(returnObject.deleteSucess(res))
            .catch(returnObject.error(res))
})
