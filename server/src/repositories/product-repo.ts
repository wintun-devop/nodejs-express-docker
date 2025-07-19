import { prisma } from "../utils/prismaSingletone";
export namespace ProductRepo {
     // create
    export const create = async (product:any) =>{
      return await prisma.$primary().product.create({
      data: {
          ...product,
      },
      });
    }
    // update
    export const update= async (id: string, product: any)=> {
    // console.log(id, product);
    return await prisma.$primary().product.update({
        where: {
        id,
        },
        data: {
        ...product,
        },
      });
    };
    // delete
    export const remove = async (id: string) =>{
    return await prisma.$primary().product.delete({
    where: {
        id: id,
      },
     });
    };
    // get a single row by unique id
    export const selectById = async (id: string) =>{
      return await prisma.$replica().product.findFirst({
        where: {
          id: id,
        },
      });
    };
    // get a single row by email
    export const selectByModel = async (model: string) =>{
      return await prisma.$replica().product.findFirst({
        where: {
            model: model,
        },
      });
    };
    // find all
    export const findMany =async () => {
      return await prisma.$replica().product.findMany({
      });
    };
    // delete many and insert many with transaction
    export const deleteInsertProduct = async (data:any[]) => {
      return prisma.$transaction([
        prisma.product.deleteMany({}),
        prisma.product.createMany({data}),
      ])
    };

    // upsert with transaction
    export const  upsertProduct = async (data: any[]) => {
      return prisma.$transaction(async (prismaTransaction:any) => {
        const promises = data.map((item) =>
          prismaTransaction.product.upsert({
            where: { model: item.model },
            update: item,
            create: item
          }));
        return Promise.all(promises);
      },
      { timeout: 150000 }
    )};
}