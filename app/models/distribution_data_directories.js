/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('distribution_data_directories', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		pid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '-1'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		manual_version: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		update_time: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'distribution_data_directories',
		timestamps: false
	});
};
