'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    // テーブルの関連付け
    static associate(models) {
      Task.belongsTo(models.Category, {
        foreignKey: 'categoryId',  // デフォルト値なので未指定でも可
        targetKey: 'id'            // 〃
      })
    }

    /**
     * タスク一覧を返却
     *
     * @static
     * @returns {array|false}
     * @memberof Task
     */
    static async getAll(){
      try{
        const tasks = await this.findAll({
          include: 'Category',
          attributes: ['id', 'title', 'done', 'Category.name'],
          order: [
            ['id', 'ASC']
          ]
        })
        return(tasks)
      }
      catch(e){
        console.error(e)
        return(false)
      }
    }

    /**
     * タスクを追加
     *
     * @static
     * @param {object} value - {title:'task name', category:1}
     * @returns {object|false}
     * @memberof Task
     */
    static async add(value){
      try{
        const task = await this.create({
          title: value.title,
          categoryId: value.category,
        })
        return(task)
      }
      catch(e){
        console.error(e)
        return(false)
      }
    }

    /**
     * ステータスを変更する
     *
     * @static
     * @param {number} id
     * @param {boolean} [flag=true]
     * @returns {boolean}
     * @memberof Task
     */
    static async done(id, flag=true){
      try{
        await this.update({done: flag}, {
          where:{
            id
          }
        })
        return(true)
      }
      catch(e){
        console.error(e)
        return(false)
      }
    }

    /**
     * タスクを物理削除
     *
     * @static
     * @param {number} id
     * @returns {boolean}
     * @memberof Task
     */
    static async remove(id){
      try{
        await this.destroy({
          where:{
            id
          }
        })
        return(true)
      }
      catch(e){
        console.error(e)
        return(false)
      }
    }
  }

  Task.init({
    title: DataTypes.STRING,
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Task',
  });

  return Task;
}