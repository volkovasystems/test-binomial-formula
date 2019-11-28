"use strict";

const getBigFactorial = (
	function getBigFactorial( bigNumber ){
		/*;
			@note:
				This will handle zero factorial which
				is the same to one factorial.
			@end-note
		*/
		bigNumber = (
				bigNumber
			||	1
		);

		return	(
					Object
					.keys(
						Array(
							Math.floor( Math.sqrt( bigNumber ) )
						)
						.join( )
						.split( "," )
					)
					.map(
						( value ) => (
							BigInt( value ) + 1n
						)
					)
					.map(
						( pageIndexValue ) => (
							Object
							.keys(
								Array(
									Math.floor(
											bigNumber
										/	Math.floor( Math.sqrt( bigNumber ) )
									)
								)
								.join( )
								.split( "," )
							)
							.map(
								( value ) => (
										( BigInt( value ) + 1n )
									+	(
												BigInt(
													Math.floor(
															bigNumber
														/	Math.floor( Math.sqrt( bigNumber ) )
													)
												)
											*	( pageIndexValue - 1n )
										)
								)
							)
						)
					)
					.concat(
						[
							Object
							.keys(
								Array(
										bigNumber
									-	(
												Math.floor( Math.sqrt( bigNumber ) )
											*	Math.floor(
														bigNumber
													/	Math.floor( Math.sqrt( bigNumber ) )
												)
										)
								)
								.join( )
								.split( "," )
							)
							.slice(
								Number(
										(
												bigNumber
											-	(
														Math.floor( Math.sqrt( bigNumber ) )
													*	Math.floor(
																bigNumber
															/	Math.floor( Math.sqrt( bigNumber ) )
														)
												)
										)
									===	0
								)
							)
							.map(
								( value ) => (
										( BigInt( value ) + 1n )
									+	(
												BigInt( Math.floor( Math.sqrt( bigNumber ) ) )
											*	BigInt(
													Math.floor(
															bigNumber
														/	Math.floor( Math.sqrt( bigNumber ) )
													)
												)
										)
								)
							)
						]
					)
					.filter(
						( list ) => (
							list.length > 0
						)
					)
					.map(
						( list ) => (
							list
							.reduce(
								( result, value ) => (
									result * value
								),
								1n
							)
						)
					)
					.reduce(
						( result, value ) => (
							result * value
						),
						1n
					)
				);
	}
);

export default getBigFactorial;
