const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const storeController = require('../controllers/StoreController');

// Do work here
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/stores/:id/edit', catchErrors(storeController.editStore))
router.get('/add', storeController.addStore);
router.post('/add',
    storeController.upload,
    catchErrors(storeController.resize),
    catchErrors(storeController.createStore)
);

router.post('/add/:id', 
storeController.upload,
catchErrors(storeController.resize),
catchErrors(storeController.updateStore));

router.get('/store/:slug', catchErrors(storeController.getStoreBySlug));

module.exports = router;
