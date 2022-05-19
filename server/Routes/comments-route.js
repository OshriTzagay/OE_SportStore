const commentCRUD = require('../Controllers/comment-ctrls');
const commentRouter = require('express').Router();

commentRouter.get('/',commentCRUD.Get);
commentRouter.get('/:id',commentCRUD.GetById);
commentRouter.get('/ProductId/:id',commentCRUD.GetByProduct);
commentRouter.post('/',commentCRUD.Add);
commentRouter.put('/:id',commentCRUD.Update);
commentRouter.delete('/:id',commentCRUD.Delete);

module.exports = commentRouter;