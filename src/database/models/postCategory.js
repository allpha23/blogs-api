module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory',{
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
  }, { timestamps: false });

  postCategory.associate = (models) => {    
    models.BlogPost.belongsToMany(models.Category, {
      foreignkey: 'postId',
      otherKey: 'categoryId',
      through: postCategory,
      as: 'categories',
    });
    models.Category.belongsToMany(models.BlogPost, {
      foreignkey: 'categoryId',
      otherKey: 'postId',
      through: postCategory,
      as: 'posts',
    });
  };

  return postCategory;
};