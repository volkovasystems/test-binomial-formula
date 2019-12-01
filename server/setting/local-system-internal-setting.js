"use strict";

const called = require( "called" );
const { promises: fs } = require( "fs" );
const path = require( "path" );

const localSystemInternalSetting = (
	async	function localSystemInternalSetting( option, callback ){
				option = (
						option
					||	{ }
				);

				callback = called( callback );

				const localSystemInternalSettingFilePath = (
					path.resolve(
						SETTING_DIRECTORY_PATH,
						"local-system-internal-setting.js"
					)
				);

				let localSystemInternalSettingData = undefined;
				try{
					localSystemInternalSettingData = (
							JSON.parse(
								await fs.readFile( localSystemInternalSettingFilePath )
							)
						||	undefined
					);
				}
				catch( error ){
					throw	(
								new Error( "undetermined local system internal setting file" )
							);
				}

				if(
						typeof localSystemInternalSettingData == "object"
					&&	localSystemInternalSettingData !== null
				){
					return	localSystemInternalSettingData;
				}
				else{
					return	{ };
				}
			}
);

module.exports = localSystemInternalSetting;
