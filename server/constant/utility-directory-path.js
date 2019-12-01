"use strict";

const harden = require( "harden" );
const path = require( "path" );

const utilityDirectoryPath = function utilityDirectoryPath( ){
	return	(
				path.resolve( "../utility" )
			);
};

harden( "UTILITY_DIRECTORY_PATH", utilityDirectoryPath( ) );

module.exports = utilityDirectoryPath;
