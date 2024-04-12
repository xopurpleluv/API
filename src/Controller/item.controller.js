const ItemArquive = require("../Model/arquive.model");

async function getAllItens(req,res) {
    try {
        let allItens = await ItemArquive.find();
        res.status(200).json(allItens)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

async function getItem(req,res) {
    let id = req.params.id;
    try {
        let item = await ItemArquive.findById(id)
        res.status(200).json(item)
    } catch (error) {
        res.status(500),json({message: error})
    }
}

