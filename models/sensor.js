'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sensor = sequelize.define('Sensor', {
    data: DataTypes.STRING
  }, {});
  Sensor.associate = function(models) {
    // associations can be defined here
  };
  return Sensor;
};