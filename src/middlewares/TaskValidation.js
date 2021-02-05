const TaskModel = require('../model/TaskModel');

const { isPast} = require('date-fns');

const TaskValidation = async(req, res, next) =>{

   const {macaddress,type,title,description,when} = req.body;

   if(!macaddress)
   return res.status(400).json({ error: 'macaddress is mandatory!'});
  
   else if(!type)
   return res.status(400).json({error: 'type is mandatory!'});

   else if(!title)
   return res.status(400).json({error: 'title is mandatory!'});

   else if(!description)
   return res.status(400).json({error: 'description is mandatory!'});

   else if(!when)
   return res.status(400).json({error: 'date and time are mandatory!'});

  

   else {
     let exists;

    if(req.params.id){
    //validation to verify id if exists and ingnore a task comparing with other tasks.
     exists = await TaskModel.findOne({
        '_id': {'$ne': req.params.id},
        'when': {'$eq': new Date(when)},
        'macaddress':{'$in': macaddress}
        
       });
    }
    else{
        if(isPast(new Date(when)))
        return res.status(400).json({ error: 'choose a future date and time!'});

    //validation to avoid duplicate task in the same day and time.
     exists = await TaskModel.findOne({
         'when': {'$eq': new Date(when)},
         'macaddress':{'$in': macaddress}
        });
    }

     if(exists) {
        return res.status(400).json({error: 'there is already a task on the same day and time!'}) 
    }
    next();
    }

}


module.exports = TaskValidation;