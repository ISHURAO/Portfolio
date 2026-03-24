// backend/routes/projects.js
const router  = require('express').Router();
const Project = require('../models/Project');

router.get('/',    async (_,res) => { try { res.json(await Project.find().sort({order:1,createdAt:-1})); } catch(e){res.status(500).json({error:e.message})} });
router.post('/',   async (req,res) => { try { res.status(201).json(await Project.create(req.body)); } catch(e){res.status(400).json({error:e.message})} });
router.put('/:id', async (req,res) => { try { const p=await Project.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true}); if(!p)return res.status(404).json({error:'Not found'}); res.json(p); } catch(e){res.status(400).json({error:e.message})} });
router.delete('/:id', async (req,res) => { try { await Project.findByIdAndDelete(req.params.id); res.json({success:true}); } catch(e){res.status(500).json({error:e.message})} });

module.exports = router;
