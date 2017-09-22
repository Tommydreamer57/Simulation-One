module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, price} = req.body;
        dbInstance.create_product([name, price])
        .then(() => res.status(200).send([name, price]))
        .catch(() => res.status(500).send())
    },

    getShelves: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_shevles()
        .then((shelves) => res.status(200).send())
        .catch(() => res.status(500).send())
        },

    getBin: (req, res, next) => {
        const dbInstance =req.app.get('db')
    }
}