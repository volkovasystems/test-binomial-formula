"use strict";

const harden = require( "harden" );
const path = require( "path" );

const libraryDirectoryPath = function libraryDirectoryPath( ){
	return	(
				path.resolve( "../library" )
			);
};

harden( "LIBRARY_DIRECTORY_PATH", libraryDirectoryPath( ) );

module.exports = libraryDirectoryPath;
