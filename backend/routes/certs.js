// backend/routes/certs.js
const router = require('express').Router();
const Cert   = require('../models/Certificate');

router.get('/',    async (_,res) => { try { res.json(await Cert.find().sort({order:1,createdAt:-1})); } catch(e){res.status(500).json({error:e.message})} });
router.post('/',   async (req,res) => { try { res.status(201).json(await Cert.create(req.body)); } catch(e){res.status(400).json({error:e.message})} });
router.delete('/:id', async (req,res) => { try { await Cert.findByIdAndDelete(req.params.id); res.json({success:true}); } catch(e){res.status(500).json({error:e.message})} });

module.exports = router;
