import express,{ Router,Request, Response } from 'express';
import { ProductRepo } from '../../repositories/product-repo';



// declare route
export const productRoute = Router();
export const productSearchRoute = Router();

// Create(C)
productRoute.post("/",async (req:Request,res:Response):Promise<any> => {
    try {
        const reqBody = req.body
        const result = await ProductRepo.create(reqBody)
        return res.status(201).json({status:"success","message":"success",result:result});
    } catch (e:any) {
        console.log("prisma",e)
        if(e.code == 'P2002'){
            return res.status(400).json({status:"error",message:"Unique Constrain!"})
        }
        return res.status(500).json({status:"error",message:"Internal server error!"})
    }
});

// Read One Prodct by Id(R)
productRoute.get('/:id',async (req:Request,res:Response) => {
    try {
        const {id} = req.params;
        const result = await ProductRepo.selectById(id)
        if (result) {
            res.status(200).json({"message":"success",result:result});
        }else{
            res.status(400).json({"message":"Not Found!"})
        }
    } catch (e) {
        console.log("error",e);
        res.status(500).json({"message":"Internal server error!"})
    }
});

// update one product By id(U)
productRoute.put('/:id',async (req:Request,res:Response) => {
    try {
        const {id} = req.params;
        const reqBody = req.body
        const search = await ProductRepo.selectById(id)
        if (search) {
            const updateData = {...search,...reqBody,updatedAt:new Date().toISOString()}
            const result = await ProductRepo.update(id,updateData)
            res.status(200).json({"message":"success",result:result});
        }else{
            res.status(400).json({"message":"Not Found or Already deleted!"})
        } 
    } catch (e) {
        console.log("error",e);
        res.status(500).json({"message":"Internal server error!"})
    }
})

// delete one product by id(D)
productRoute.delete("/:id",async (req:Request, res:Response) => {
    try{
        const {id} = req.params;
        const search = await ProductRepo.selectById(id)
        if (search) {
            const result = await ProductRepo.remove(id)
            res.status(200).json({"message":"success",result:result});
        }else{
            res.status(404).json({"message":"Not Found or Already deleted!"})
        } 
    }catch(e){
        console.log("error",e);
        res.status(500).json({"message":"Internal server error!"})
    }
});


// Read One Prodct by Id(R)
productRoute.get('/',async (req:Request,res:Response) => {
    try{
        const getAllProduct = await ProductRepo.findMany()
        if(!getAllProduct){
             res.status(404).json({"message":"Not Found"})
        }
        res.status(200).json({"message":"success",result:getAllProduct});
    }catch(e){
        console.log("error",e);
        res.status(500).json({"message":"Internal server error!"})
    }
});


// Read One Prodct by Id(R)
productSearchRoute.get('/all',async (req:Request,res:Response) => {
    try{
        const getAllProduct = await ProductRepo.findMany()
        if(!getAllProduct){
             res.status(404).json({"message":"Not Found"})
        }
        res.status(200).json({"message":"success",result:getAllProduct});
    }catch(e){
        console.log("error",e);
        res.status(500).json({"message":"Internal server error!"})
    }
});

// Read One Prodct by Id(R)
productSearchRoute.get('/specific_query',async (req:Request,res:Response) => {
    try{
        const getAllProduct = await ProductRepo.findMany()
        if(!getAllProduct){
             res.status(404).json({"message":"Not Found"})
        }
        res.status(200).json({"message":"success",result:getAllProduct});
    }catch(e){
        console.log("error",e);
        res.status(500).json({"message":"Internal server error!"})
    }
});

