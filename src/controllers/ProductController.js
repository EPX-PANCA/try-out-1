const {Product} = require("../db/models");
require('dotenv').config();

const response = {
    status: true,
    message: "Data OK",
    data: [],
  };

  class ProductController {

    static async saveProduct(req, res) {
        const { body } = req;
    
        try {
          const save = await Product.create({
            name:body.name,
            stock:body.stock,
            price:body.price,
            idUser:body.idUser,
          });
          response.message = "sukses simpan data";
          response.data = save;
          res.status(201).json(response);
        } catch (error) {
          response.status = false;
          response.message = error.message;
          res.status(400).json(response);
        }
      }
    
    
      static async updateProduct(req, res) {
        const { id } = req.params;
        const { body } = req;
        try {
          const a = await Product.findByPk(id)
          if(a == undefined) throw new Error("id not found")
             await Product.update({
             name:body.name,
             stock:body.stock,
             price:body.price,
             idUser:body.idUser,
          },{where:{id:id}});
          response.message = `sukses update data product dengan id : ${id}`;
          response.data =  await Product.findByPk(id);
          res.status(201).json(response);
        } catch (error) {
          response.status = false;
          response.message = error.message;
          response.data = [];
          res.status(400).json(response);
        }
      }
    
      static async getProduct(req, res) {
        const { id } = req.params;
        const userdetail = await Product.findByPk(id);
        try {
          if (!userdetail) throw new Error("Product not found")
          response.data = userdetail;
          response.status = "success";
          response.message = "Data found";
          res.json(response);
        } catch (error) {
          response.message = error.message;
          response.data = [];
          response.status = "fail";
          res.status(404).json(response);
        }
      }
    
      static async getProductAll(req, res) {
        const userdetail = await Product.findAll({});
        try {
          if (!userdetail) throw new Error("Product not found")
          response.data = userdetail;
          response.status = "success";
          response.message = "Data Found";
          res.json(response);
        } catch (error) {
          response.message = error.message;
          response.data = [];
          response.status = "fail";
          res.status(404).json(response);
        }
      }
    
      static async deleteProduct(req, res) {
        const { id } = req.params;
        try {
          const a = await Product.findByPk(id)
          if(a == undefined) throw new Error("id not found")
          await Product.destroy({where:{id:id}})
          response.message = `sukses hapus data product dengan id : ${id}`;
          response.data = [];
          res.status(201).json(response);
        } catch (error) {
          response.status = false;
          response.message = error.message;
          response.data = [];
          res.status(400).json(response);
        }
      }
  
  
  }
  
  
  
  
  module.exports = ProductController;
  