"use strict";

import getBigBinomialCoefficient from "./get-big-binomial-coefficient.js";

const checkBigPrimeNumber = (
	function checkBigPrimeNumber( bigNumber ){
		/*;
			@note:
				This will use the Agrawal-Kayal-Saxena (AKS) primality test
				which states that a number p is prime if and only if all the coefficients
				of the polynomial expansion of (x-1)^p - (x^p-1) are divisible by p.
			@end-note
		*/

		let limit = bigNumber;
		while(
				limit > 0

			&&	(
					(
							getBigBinomialCoefficient( bigNumber, --limit )
						%	BigInt( bigNumber )
					)
					=== 0n
				)
		){

		}

		return	(
						bigNumber > 1

					&&	limit === 0
					/*
					&&	Object
						.keys(
							Array(
								Math.floor( Math.sqrt( bigNumber ) )
							)
							.join( )
							.split( "," )
						)
						.map(
							( value ) => (
								parseInt( value ) + 1
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
											( parseInt( value ) + 1 )
										+	(
													(
														Math.floor(
																bigNumber
															/	Math.floor( Math.sqrt( bigNumber ) )
														)
													)
												*	( pageIndexValue - 1 )
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
											( parseInt( value ) + 1 )
										+	(
													( Math.floor( Math.sqrt( bigNumber ) ) )
												*	(
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
						.every(
							( list ) => (
								list
								.every(
									( limit ) => (
										(
												getBigBinomialCoefficient( bigNumber, limit )
											%	BigInt( bigNumber )
										)
										=== 0n
									)
								)
							)
						)
					*/
					/*
					&&	Object
						.keys(
							Array( bigNumber )
							.join( )
							.split( "," )
						)
						.slice( 1 )
						.every(
							( limit ) => (
								(
										getBigBinomialCoefficient( bigNumber, limit )
									%	BigInt( bigNumber )
								)
								=== 0n
							)
						)
					*/
				);
	}
);

export default checkBigPrimeNumber;
