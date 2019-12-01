"use strict";

const called = require( "called" );
const { promises: fs } = require( "fs" );
const path = require( "path" );

const developmentSystemEnvironmentSetting = (
	async	function developmentSystemEnvironmentSetting( option, callback ){
				option = (
						option
					||	{ }
				);

				callback = called( callback );

				const developmentSystemEnvironmentSettingFilePath = (
					path.resolve(
						SETTING_DIRECTORY_PATH,
						"development-system-environment-setting.js"
					)
				);

				let developmentSystemEnvironmentSettingData = undefined;
				try{
					developmentSystemEnvironmentSettingData = (
							JSON.parse(
								await fs.readFile( developmentSystemEnvironmentSettingFilePath )
							)
						||	undefined
					);
				}
				catch( error ){
					throw	(
								new Error( "undetermined development system environment setting file" )
							);
				}

				if(
						typeof developmentSystemEnvironmentSettingData == "object"
					&&	developmentSystemEnvironmentSettingData !== null
				){
					return	developmentSystemEnvironmentSettingData;
				}
				else{
					return	{ };
				}
			}
);

module.exports = developmentSystemEnvironmentSetting;
