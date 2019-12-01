"use strict";

const called = require( "called" );
const { promises: fs } = require( "fs" );
const path = require( "path" );

const globalSystemInternalSetting = (
	async	function globalSystemInternalSetting( option, callback ){
				option = (
						option
					||	{ }
				);

				callback = called( callback );

				const globalSystemInternalSettingFilePath = (
					path.resolve(
						SETTING_DIRECTORY_PATH,
						"global-system-internal-setting.js"
					)
				);

				let globalSystemInternalSettingData = undefined;
				try{
					globalSystemInternalSettingData = (
							JSON.parse(
								await fs.readFile( globalSystemInternalSettingFilePath )
							)
						||	undefined
					);
				}
				catch( error ){
					throw	(
								new Error( "undetermined global system internal setting file" )
							);
				}

				if(
						typeof globalSystemInternalSettingData == "object"
					&&	globalSystemInternalSettingData !== null
				){
					return	globalSystemInternalSettingData;
				}
				else{
					return	{ };
				}
			}
);

module.exports = globalSystemInternalSetting;
