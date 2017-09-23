module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {product, price} = req.body;
        dbInstance.create_product([product, price])
        .then(() => res.status(200).send([product, price]))
        .catch(() => res.status(500).send())
    },

    // getShelves: (req, res, next) => {
    //     const dbInstance = req.app.get('db')

    //     dbInstance.get_shevles()
    //     .then((shelves) => res.status(200).send(shevles))
    //     .catch(() => res.status(500).send())
    //     },
        
    getProduct: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {params} = req;

        dbInstance.get_product(params.id)
        .then((product) => res.status(200).send(product))
        .catch(() => res.status(500).send())
    },
        
    getBin: (req, res, next) => {
        const dbInstance =req.app.get('db')
        const {params} = req;

        dbInstance.get_bins(params.shelf)
        .then((bin) => res.status(200).send(bin))
        .catch(() => res.send(500).send())
    },

    update: (req,res, next) => {
        const dbInstance = req.app.get('db')
        const {params, query} = req;

        dbInstance.update_product([params.id, query.product, query.price])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    },

    delete: (req, res, next) => {
        dbInstance = req.app.get('db')
        const {params} = req;

        dbInstance.delete_product([params.id])
        .then(()=> res.status(200).send())
        .catch(()=> res.status(500).send());

    }
}