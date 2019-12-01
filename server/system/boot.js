"use strict";

const called = require( "called" );
const { promises: fs } = require( "fs" );
const path = require( "path" );

const database = require( "./database.js" );
const server = require( "./server.js" );

const boot =	(
					async	function boot( option, callback ){
								option = (
										option
									||	{ }
								);

								callback = called( called );

								const directoryPath = (
										option.directoryPath
									||	undefined
								);

								if(
										typeof directoryPath !== "string"
									||	directoryPath.length <= 0
								){
									throw	(
												new Error( "invalid boot directory path" )
											);
								}

								let directoryStatistic = undefined;
								try{
									directoryStatistic = await fs.stat( directoryPath );
								}
								catch( error ){
									throw	(
												new Error( "undetermined boot directory path" )
											);
								}

								if(
									directoryStatistic.isDirectory( ) === true
								){
									const moduleFileList = await fs.readdir( directoryPath );

									const moduleFileListLength = moduleFileList.length;

									let moduleFileListPath = undefined;
									for(
										let moduleFileListIndex = 0;
										moduleFileListIndex < moduleFileListLength;
										moduleFileListIndex++
									){
										moduleFileListPath = (
											path.resolve(
												directoryPath,
												moduleFileList[ moduleFileListIndex]
											)
										);

										try{
											require( moduleFileListPath );
										}
										catch( error ){
											throw	(
														new Error( "cannot load module file" )
													);
										}
									}
								}
								else{
									throw	(
												new Error( "invalid boot directory path" )
											);
								}
							}
				);

(
	async	function( ){
				try{
					await	boot(
								{
									"directoryPath": "../constant"
								}
							);
				}
				catch( error ){
					
				}

				try{
					await	boot(
								{
									"directoryPath": "../global"
								}
							);
				}
				catch( error ){

				}

				try{
					await	(
								database(
									{

									}
								)
							);
				}
				catch( error ){

				}

				try{
					await	(
								server(
									{

									}
								)
							);
				}
				catch( error ){

				}

				try{
					await	boot(
								{
									"directoryPath": "../service"
								}
							);
				}
				catch( error ){

				}
			}
)( )
