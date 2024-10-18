const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Movie = sequelize.define('Movie', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    genre: {
      type: DataTypes.STRING
    },
    duration: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.STRING
    },
    releaseYear: {
      type: DataTypes.INTEGER
    },
    thumbnailUrl: {
      type: DataTypes.STRING
    },
    videoUrl: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: true
  });

  return Movie;
};