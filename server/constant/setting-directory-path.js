"use strict";

const harden = require( "harden" );
const path = require( "path" );

const settingDirectoryPath = function settingDirectoryPath( ){
	return	(
				path.resolve( "../../setting" )
			);
};

harden( "SETTING_DIRECTORY_PATH", settingDirectoryPath( ) );

module.exports = settingDirectoryPath;
