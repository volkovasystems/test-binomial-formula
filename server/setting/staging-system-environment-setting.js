"use strict";

const called = require( "called" );
const { promises: fs } = require( "fs" );
const path = require( "path" );

const stagingSystemEnvironmentSetting = (
	async	function stagingSystemEnvironmentSetting( option, callback ){
				option = (
						option
					||	{ }
				);

				callback = called( callback );

				const stagingSystemEnvironmentSettingFilePath = (
					path.resolve(
						SETTING_DIRECTORY_PATH,
						"staging-system-environment-setting.js"
					)
				);

				let stagingSystemEnvironmentSettingData = undefined;
				try{
					stagingSystemEnvironmentSettingData = (
							JSON.parse(
								await fs.readFile( stagingSystemEnvironmentSettingFilePath )
							)
						||	undefined
					);
				}
				catch( error ){
					throw	(
								new Error( "undetermined staging system environment setting file" )
							);
				}

				if(
						typeof stagingSystemEnvironmentSettingData == "object"
					&&	stagingSystemEnvironmentSettingData !== null
				){
					return	stagingSystemEnvironmentSettingData;
				}
				else{
					return	{ };
				}
			}
);

module.exports = stagingSystemEnvironmentSetting;
