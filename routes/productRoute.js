const express = require("express")
const { addProduct, getProducts, updateProduct, deleteProduct, getFeaturedProducts, lessValueProducts, ratedProducts } = require("../controllers/productController")

const router = express.Router()

router.route('/addprod').post(addProduct)
router.route('/getprods').get(getProducts)
router.route('/getfeaturedprods').get(getFeaturedProducts)
router.route('/updateprod/:id').put(updateProduct)
router.route('/deleteprod/:id').delete(deleteProduct)
router.route('/lessvalueprods').get(lessValueProducts)
router.route('/ratedprods').get(ratedProducts)

module.exports = router
