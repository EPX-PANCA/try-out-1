const {User} = require("../db/models");
require('dotenv').config();

const response = {
    status: true,
    message: "Data OK",
    data: [],
  };

  class UserController {

    static async saveUser(req, res) {
        const { body } = req;
    
        try {
          const save = await User.create({
          full_name:body.full_name,
          username:body.username,
          email:body.email,
          phone_number:body.phone_number,
          salt:body.salt,
          password:body.password,
          role:body.role
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
    
    
      static async updateUser(req, res) {
        const { id } = req.params;
        const { body } = req;
        try {
          const a = await User.findByPk(id)
          if(a == undefined) throw new Error("id not found")
             await User.update({
             full_name:body.full_name,
             username:body.username,
             email:body.email,
             phone_number:body.phone_number,
             salt:body.salt,
             password:body.password,
             role:body.role
          },{where:{id:id}});
          response.message = `sukses update data user dengan id : ${id}`;
          response.data =  await User.findByPk(id);
          res.status(201).json(response);
        } catch (error) {
          response.status = false;
          response.message = error.message;
          response.data = [];
          res.status(400).json(response);
        }
      }
    
      static async getUser(req, res) {
        const { id } = req.params;
        const userdetail = await User.findByPk(id);
        try {
          if (!userdetail) throw new Error("User not found")
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
    
      static async getUserAll(req, res) {
        const userdetail = await User.findAll({});
        try {
          if (!userdetail) throw new Error("User not found")
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
    
      static async deleteUser(req, res) {
        const { id } = req.params;
        try {
          const a = await User.findByPk(id)
          if(a == undefined) throw new Error("id not found")
          await User.destroy({where:{id:id}})
          response.message = `sukses hapus data user dengan id : ${id}`;
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
  
  
  
  
  module.exports = UserController;
  