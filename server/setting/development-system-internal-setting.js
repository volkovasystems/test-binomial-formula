"use strict";

const called = require( "called" );
const { promises: fs } = require( "fs" );
const path = require( "path" );

const developmentSystemInternalSetting = (
	async	function developmentSystemInternalSetting( option, callback ){
				option = (
						option
					||	{ }
				);

				callback = called( callback );

				const developmentSystemInternalSettingFilePath = (
					path.resolve(
						SETTING_DIRECTORY_PATH,
						"development-system-internal-setting.js"
					)
				);

				let developmentSystemInternalSettingData = undefined;
				try{
					developmentSystemInternalSettingData = (
							JSON.parse(
								await fs.readFile( developmentSystemInternalSettingFilePath )
							)
						||	undefined
					);
				}
				catch( error ){
					throw	(
								new Error( "undetermined development system internal setting file" )
							);
				}

				if(
						typeof developmentSystemInternalSettingData == "object"
					&&	developmentSystemInternalSettingData !== null
				){
					return	developmentSystemInternalSettingData;
				}
				else{
					return	{ };
				}
			}
);

module.exports = developmentSystemInternalSetting;
