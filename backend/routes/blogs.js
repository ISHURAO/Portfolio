// backend/routes/blogs.js
const router = require('express').Router();
const Blog   = require('../models/Blog');

router.get('/',    async (_,res) => { try { res.json(await Blog.find({published:true}).sort({createdAt:-1})); } catch(e){res.status(500).json({error:e.message})} });
router.post('/',   async (req,res) => { try { res.status(201).json(await Blog.create(req.body)); } catch(e){res.status(400).json({error:e.message})} });
router.put('/:id', async (req,res) => { try { res.json(await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})); } catch(e){res.status(400).json({error:e.message})} });
router.delete('/:id', async (req,res) => { try { await Blog.findByIdAndDelete(req.params.id); res.json({success:true}); } catch(e){res.status(500).json({error:e.message})} });

module.exports = router;
