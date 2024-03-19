
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const electroProductModel = require("../models/electroProduct");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {

    res.render("index");
});


router.post('/elecronicPoductForm', async (req, res) => {


    var { editId } = req.body;
    if (!editId) {
        const productData = new electroProductModel({
            Pro_name: req.body.Pro_name,
            price: req.body.price,
            brand: req.body.brand,
            description: req.body.description,
            color: req.body.color
        })

        await productData.save();


    } else {

        await electroProductModel.findByIdAndUpdate(editId, {
            Pro_name: req.body.Pro_name,
            price: req.body.price,
            brand: req.body.brand,
            description: req.body.description,
            color: req.body.color
        })
        console.log("Edit Done..");
    }


    res.redirect("/views");
});

router.get('/views', async (req, res) => {
    const ElecProducts = await electroProductModel.find({});
    res.render('views', { ElecProducts });
    console.log("viwes Done...");
});

router.get("/deleteproduct/:id", async (req, res) => {
    const id = req.params.id;
    await electroProductModel.deleteOne({ _id: id });
    res.redirect("/views");
    console.log("delet done....");
});


router.get("/editproduct/:id", async (req, res) => {
    const id = req.params.id;
    const singleElecProduct = await electroProductModel.findById(id);
    res.render("edit", { singleElecProduct });

})




module.exports = router;