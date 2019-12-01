"use strict";

const path = require( "path" );

const loadLibrary = (
	function loadLibrary( libraryModulePath ){
		return	(
					require(
						path.resolve(
							LIBRARY_DIRECTORY_PATH,
							libraryModulePath
						)
					)
				);
	}
);

harden( "LOAD_LIBRARY", loadLibrary );

module.exports = loadLibrary;
