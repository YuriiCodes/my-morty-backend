import Bank from "./Bank.js";
import BankService from "./BankService.mjs";

class BankController {
    async create(req, res) {
        res.set('Access-Control-Allow-Origin', '*');

        console.log('create')
        console.log(req.body)
        try {
            const bank = await BankService.create(req.body)
            console.log(bank)
            res.json(bank);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getAll(req, res) {
        res.set('Access-Control-Allow-Origin', '*');
        try {
            const banks = await BankService.getAll();
            return res.json(banks);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getOne(req, res) {
        res.set('Access-Control-Allow-Origin', '*');

        try {
            const bank = await BankService.getOne(req.params.id);
            return res.json(bank)
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async update(req, res) {
        res.set('Access-Control-Allow-Origin', '*');
        console.log(req.body);
        try {
            const bank = req.body;
            if (!bank._id)
                return res.status(400).json({message: "Missing id"});
            const updatedBank = await BankService.update(bank);
            return res.json(updatedBank);
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async delete(req, res) {
        res.set('Access-Control-Allow-Origin', '*');

        try {
            const id = req.params.id;
            if (!id)
                return res.status(400).json({message: "Missing id"});

            if(id ==="625ef01d6e187a99202d531b")
                return res.status(400).json({message: "You can't delete the default bank"});

            const deletedBank = await BankService.delete(id);
            return res.json(deletedBank);

        } catch (err) {
            return res.status(500).json(err)
        }
    }
}

export default new BankController();