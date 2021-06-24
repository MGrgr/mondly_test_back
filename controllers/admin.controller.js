const { mondly: Mondly } = require('../models');

module.exports = {
    update: async (req, res, next) => {
        Mondly.update(req.body, { where: { id: 1 }})
            .then(function () {
                return res.send('success').code(200);
            }).catch(function (err) {
                return res.send(err).code(400);
            });
    },

    get: async (req, res, next) => {
        const mondlies =  await Mondly.findAll();
        return res.send(mondlies);
    }
}