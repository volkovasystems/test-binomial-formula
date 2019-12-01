"use strict";

const path = require( "path" );

const loadUtility = (
	function loadUtility( utilityModulePath ){
		return	(
					require(
						path.resolve(
							UTILITY_DIRECTORY_PATH,
							utilityModulePath
						)
					)
				);
	}
);

harden( "LOAD_UTILITY", loadUtility );

module.exports = loadUtility;
