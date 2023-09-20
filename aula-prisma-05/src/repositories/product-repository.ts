import prisma from "../database/database";
import { Product } from "@prisma/client";

const TABLE_NAME = "products";

type createProduct = Omit<Product, "id">

async function getProducts() {

  const produtos = await prisma.product.findMany();

  return produtos;
  
}

async function getProduct(id: number) {

  const produtos = await prisma.product.findFirst({
    where: {
      id
    }
  });

  return produtos;
}

async function createProduct(product: createProduct) {

  const produto = await prisma.product.create({
    data: product
  })

  console.log(produto);
  
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;