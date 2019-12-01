"use strict";

const called = require( "called" );
const { promises: fs } = require( "fs" );
const path = require( "path" );

const globalSystemEnvironmentSetting = (
	async	function globalSystemEnvironmentSetting( option, callback ){
				option = (
						option
					||	{ }
				);

				callback = called( callback );

				const globalSystemEnvironmentSettingFilePath = (
					path.resolve(
						SETTING_DIRECTORY_PATH,
						"global-system-environment-setting.js"
					)
				);

				let globalSystemEnvironmentSettingData = undefined;
				try{
					globalSystemEnvironmentSettingData = (
							JSON.parse(
								await fs.readFile( globalSystemEnvironmentSettingFilePath )
							)
						||	undefined
					);
				}
				catch( error ){
					throw	(
								new Error( "undetermined global system environment setting file" )
							);
				}

				if(
						typeof globalSystemEnvironmentSettingData == "object"
					&&	globalSystemEnvironmentSettingData !== null
				){
					return	globalSystemEnvironmentSettingData;
				}
				else{
					return	{ };
				}
			}
);

module.exports = globalSystemEnvironmentSetting;
