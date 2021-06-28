const { mondly: Mondly } = require('../models');

module.exports = {
    update: async (req, res, next) => {
        const lang = req.body.lang;
        await Mondly.update(req.body.formState, { where: { lang } })
            .then(function () {
                return res.send('success');
            }).catch(function (err) {
                err.statusCode = 400
                return res.send(err);
            });
    },

    get: async (req, res, next) => {
        const { lang } = req.query;
        const mondlies = await Mondly.findAll({ where: { lang }, attributes: { exclude: ['id'] } });
        return res.send(mondlies);
    }
}