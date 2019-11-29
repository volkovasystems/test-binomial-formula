"use strict";

const called = require( "called" );
const fs = require( "fs" );
const path = require( "path" );

const PRIME_NUMBER_DATABASE_PATH = "./prime-number-database";

const ensurePrimeNumberDatabaseDirectory = (
	function ensurePrimeNumberDatabaseDirectory( option, callback ){
		option = (
				option
			||	{ }
		);

		callback = called( callback );

		const primeNumberDatabaseDirectoryPath = (
			path.resolve(
				__dirname,
				PRIME_NUMBER_DATABASE_PATH
			)
		);

		fs
		.stat(
			primeNumberDatabaseDirectoryPath,
			function( error, statistic ){
				if(
					error instanceof Error
				){
					fs
					.mkdir(
						primeNumberDatabaseDirectoryPath,
						function( error ){
							fs
							.stat(
								primeNumberDatabaseDirectoryPath,
								function( error, statistic ){
									if(
										error instanceof Error
									){
										callback(
											error,
											undefined,
											option
										);
									}
									else if(
										statistic instanceof fs.Stats
									){
										option.primeNumberDatabaseDirectoryPath = primeNumberDatabaseDirectoryPath;
										option.primeNumberDatabaseDirectoryStatistic = statistic;

										callback(
											undefined,
											primeNumberDatabaseDirectoryPath,
											option
										);
									}
									else{
										callback(
											true,
											undefined,
											option
										);
									}
								}
							)
						}
					);
				}
				else if(
					statistic instanceof fs.Stats
				){
					option.primeNumberDatabaseDirectoryPath = primeNumberDatabaseDirectoryPath;
					option.primeNumberDatabaseDirectoryStatistic = statistic;

					callback(
						undefined,
						primeNumberDatabaseDirectoryPath,
						option
					);
				}
				else{
					callback(
						true,
						undefined,
						option
					);
				}
			}
		);
	}
);

module.exports = ensurePrimeNumberDatabaseDirectory;
