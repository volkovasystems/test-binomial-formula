"use strict";

const called = require( "called" );
const { promises: fs } = require( "fs" );
const path = require( "path" );

const localSystemEnvironmentSetting = (
	async	function localSystemEnvironmentSetting( option, callback ){
				option = (
						option
					||	{ }
				);

				callback = called( callback );

				const localSystemEnvironmentSettingFilePath = (
					path.resolve(
						SETTING_DIRECTORY_PATH,
						"local-system-environment-setting.js"
					)
				);

				let localSystemEnvironmentSettingData = undefined;
				try{
					localSystemEnvironmentSettingData = (
							JSON.parse(
								await fs.readFile( localSystemEnvironmentSettingFilePath )
							)
						||	undefined
					);
				}
				catch( error ){
					throw	(
								new Error( "undetermined local system environment setting file" )
							);
				}

				if(
						typeof localSystemEnvironmentSettingData == "object"
					&&	localSystemEnvironmentSettingData !== null
				){
					return	localSystemEnvironmentSettingData;
				}
				else{
					return	{ };
				}
			}
);

module.exports = localSystemEnvironmentSetting;
