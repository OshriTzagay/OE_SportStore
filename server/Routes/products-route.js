const ProductCRUD = require('../Controllers/products-ctrls');
const ProductRouter = require('express').Router();

ProductRouter.get('/',ProductCRUD.Get);
ProductRouter.get('/:name',ProductCRUD.GetByName);
ProductRouter.get('/type/:type',ProductCRUD.GetByProductType);
ProductRouter.post('/',ProductCRUD.Add);
ProductRouter.put('/:id',ProductCRUD.Update);
ProductRouter.delete('/:id',ProductCRUD.Delete);

module.exports = ProductRouter;

