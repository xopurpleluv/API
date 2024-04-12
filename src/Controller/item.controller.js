const ItemArquive = require("../Model/arquive.model");

async function getItem(req,res) {
    let id = req.params.id;
    try {
        let item = await ItemArquive.findById(id)
        res.status(200).json(item)
    } catch (error) {
        res.status(500),json({message: error})
    }
}

async function getAllItens(req,res) {
    try {
        let allItens = await ItemArquive.find();
        res.status(200).json(allItens)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

async function createItem(req,res) {
    const newItem = new ItemArquive({
        item_name: req.body.item_name,
        item_description: req.body.item_description,
        item_date_creation: req.body.item_date_creation,
    });

    try {
        let nItem = await newItem.save();
        res.status(200).json(nItem)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

async function updateItem(req,res) {
    try {
        let itemUpdated = await ItemArquive.updateOne(
            {_id: req.params.id}, {
            $set: {
                item_name: req.body.item_name,
                item_description: req.body.item_description,
                item_date_creation: req.body.item_date_creation,
            }
        })
        res.status(200).json(itemUpdated)
    } catch (error) {
        res.status(500).json({ message: error})
    }
}

async function deleteItem(req,res) {
    let id = req.params.id;
    try {
        await ItemArquive.findByIdAndDelete(id)
    } catch (error) {
        res.status(500).json({ message: error})
    }
}