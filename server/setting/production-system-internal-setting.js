"use strict";

const called = require( "called" );
const { promises: fs } = require( "fs" );
const path = require( "path" );

const productionSystemInternalSetting = (
	async	function productionSystemInternalSetting( option, callback ){
				option = (
						option
					||	{ }
				);

				callback = called( callback );

				const productionSystemInternalSettingFilePath = (
					path.resolve(
						SETTING_DIRECTORY_PATH,
						"production-system-internal-setting.js"
					)
				);

				let productionSystemInternalSettingData = undefined;
				try{
					productionSystemInternalSettingData = (
							JSON.parse(
								await fs.readFile( productionSystemInternalSettingFilePath )
							)
						||	undefined
					);
				}
				catch( error ){
					throw	(
								new Error( "undetermined production system internal setting file" )
							);
				}

				if(
						typeof productionSystemInternalSettingData == "object"
					&&	productionSystemInternalSettingData !== null
				){
					return	productionSystemInternalSettingData;
				}
				else{
					return	{ };
				}
			}
);

module.exports = productionSystemInternalSetting;
