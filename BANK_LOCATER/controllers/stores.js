// const { count } = require('../models/Store');
// const Store = require('../models/Store');
// // it will get all the stores 

// exports.getStores = async (req, res, next) => {
//     try{
//         const stores = await Store.find();

//         return res.status(200).json({
//             success: true, 
//             count:  stores.length,
//             data: stores 
//         });

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({error:'server error'});
//     }
    
// };


// // TO create a store



// exports.addStore = async (req, res, next) => {
//     try{
        
//         const store = await Store.create(req.body);
//         return res.status(200).json({
//             success:true,
//             data:store
//      });
       

//     } catch (err) {
//         console.error(err);
//         if(err.code === 11000) {
//             return res.status(400).json({error:'This store already exist'})

//         }
//         res.status(500).json({error:'server error'});
//     }
    
// };