import express from 'express';
import {
  createCrypto,
  getAllCryptos,
  getNewListings,
  getTopGainers,
} from '../controllers/cryptoController.js';

const router = express.Router();

router.get('/', getAllCryptos);
router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);
router.post('/', createCrypto);

export default router;
