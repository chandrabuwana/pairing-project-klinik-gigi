'use strict';
module.exports = function(sequelize, DataTypes) {
  var Datadokter = sequelize.define('Datadokter', {
    nama: DataTypes.STRING,
    noizin: DataTypes.STRING,
    alamat: DataTypes.STRING,
    nik: DataTypes.STRING,
    email: DataTypes.STRING,
    tlp: DataTypes.STRING
  })

  Datadokter.associate = function(models) {
    // associations can be defined here
    Datadokter.belongsToMany(models.Datapasien, {through: 'Diagnosa',foreignKey: 'id_dokter'});
    //........
    Datadokter.hasMany(models.Diagnosa, {foreignKey: 'id_dokter', sourceKey: 'id'});
  }

  return Datadokter;
};
