module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory',{
    postId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    categoryId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
  }, { timestamps: false });

  postCategory.associate = (models) => {    
    models.BlogPost.belongsToMany(models.category, {
      foreignkey: 'postId',
      otherKey: 'categoryId',
      through: postCategory,
      as: 'categories',
    });
    models.Category.belongsToMany(models.blogPost, {
      foreignkey: 'categoryId',
      otherKey: 'postId',
      through: postCategory,
      as: 'posts',
    });
  };

  return postCategory;
};