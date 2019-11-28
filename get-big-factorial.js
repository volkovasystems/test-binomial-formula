"use strict";

const getBigFactorial = function getBigFactorial( bigNumber ){
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
								Math.floor( Math.sqrt( bigNumber ) )
							)
							.join( )
							.split( "," )
						)
						.map(
							( value ) => (
									( BigInt( value ) + 1n )
								+	(
											BigInt( Math.floor( Math.sqrt( bigNumber ) ) )
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
								bigNumber % Math.floor( Math.sqrt( bigNumber ) )
							)
							.join( )
							.split( "," )
						)
						.map(
							( value ) => (
									(
										value > 0
									)
								?	(
												( BigInt( value ) + 1n )
											+	(
														BigInt( Math.floor( Math.sqrt( bigNumber ) ) )
													*	BigInt( Math.floor( Math.sqrt( bigNumber ) ) )
												)
									)
								:	0n
							)
						)
					]
					.filter(
						( value ) => (
							value > 0n
						)
					)
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
};

export default getBigFactorial;
