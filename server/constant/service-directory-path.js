"use strict";

const harden = require( "harden" );
const path = require( "path" );

const serviceDirectoryPath = function serviceDirectoryPath( ){
	return	(
				path.resolve( "../service" )
			);
};

harden( "SERVICE_DIRECTORY_PATH", serviceDirectoryPath( ) );

module.exports = serviceDirectoryPath;
