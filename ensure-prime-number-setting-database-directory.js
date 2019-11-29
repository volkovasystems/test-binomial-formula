"use strict";

const called = require( "called" );
const fs = require( "fs" );
const path = require( "path" );

const PRIME_NUMBER_SETTING_DATABASE_PATH = "./prime-number-setting-database";

const ensurePrimeNumberSettingDatabaseDirectory = (
	function ensurePrimeNumberSettingDatabaseDirectory( option, callback ){
		option = (
				option
			||	{ }
		);

		callback = called( callback );

		const primeNumberSettingDatabaseDirectoryPath = (
			path.resolve(
				__dirname,
				PRIME_NUMBER_SETTING_DATABASE_PATH
			)
		);

		fs
		.stat(
			primeNumberSettingDatabaseDirectoryPath,
			function( error, statistic ){
				if(
					error instanceof Error
				){
					fs
					.mkdir(
						primeNumberSettingDatabaseDirectoryPath,
						function( error ){
							fs
							.stat(
								primeNumberSettingDatabaseDirectoryPath,
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
										option.primeNumberSettingDatabaseDirectoryPath = (
											primeNumberSettingDatabaseDirectoryPath
										);
										option.primeNumberSettingDatabaseDirectoryStatistic = statistic;

										callback(
											undefined,
											primeNumberSettingDatabaseDirectoryPath,
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
					option.primeNumberSettingDatabaseDirectoryPath = primeNumberSettingDatabaseDirectoryPath;
					option.primeNumberSettingDatabaseDirectoryStatistic = statistic;

					callback(
						undefined,
						primeNumberSettingDatabaseDirectoryPath,
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

module.exports = ensurePrimeNumberSettingDatabaseDirectory;
