"use strict";

const called = require( "called" );
const { promises: fs } = require( "fs" );
const path = require( "path" );

const stagingSystemInternalSetting = (
	async	function stagingSystemInternalSetting( option, callback ){
				option = (
						option
					||	{ }
				);

				callback = called( callback );

				const stagingSystemInternalSettingFilePath = (
					path.resolve(
						SETTING_DIRECTORY_PATH,
						"staging-system-internal-setting.js"
					)
				);

				let stagingSystemInternalSettingData = undefined;
				try{
					stagingSystemInternalSettingData = (
							JSON.parse(
								await fs.readFile( stagingSystemInternalSettingFilePath )
							)
						||	undefined
					);
				}
				catch( error ){
					throw	(
								new Error( "undetermined staging system internal setting file" )
							);
				}

				if(
						typeof stagingSystemInternalSettingData == "object"
					&&	stagingSystemInternalSettingData !== null
				){
					return	stagingSystemInternalSettingData;
				}
				else{
					return	{ };
				}
			}
);

module.exports = stagingSystemInternalSetting;
