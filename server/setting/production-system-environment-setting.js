"use strict";

const called = require( "called" );
const { promises: fs } = require( "fs" );
const path = require( "path" );

const productionSystemEnvironmentSetting = (
	async	function productionSystemEnvironmentSetting( option, callback ){
				option = (
						option
					||	{ }
				);

				callback = called( callback );

				const productionSystemEnvironmentSettingFilePath = (
					path.resolve(
						SETTING_DIRECTORY_PATH,
						"production-system-environment-setting.js"
					)
				);

				let productionSystemEnvironmentSettingData = undefined;
				try{
					productionSystemEnvironmentSettingData = (
							JSON.parse(
								await fs.readFile( productionSystemEnvironmentSettingFilePath )
							)
						||	undefined
					);
				}
				catch( error ){
					throw	(
								new Error( "undetermined production system environment setting file" )
							);
				}

				if(
						typeof productionSystemEnvironmentSettingData == "object"
					&&	productionSystemEnvironmentSettingData !== null
				){
					return	productionSystemEnvironmentSettingData;
				}
				else{
					return	{ };
				}
			}
);

module.exports = productionSystemEnvironmentSetting;
