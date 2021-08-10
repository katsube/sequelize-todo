'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    // テーブルの関連付け
    static associate(models) {
      Task.belongsTo(models.Category, {
        foreignKey: 'categoryId',  // デフォルト値なので未指定でも可
        targetKey: 'id'            // 〃
      })
    }
  };
  Task.init({
    title: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};