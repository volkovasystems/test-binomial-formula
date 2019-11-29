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
				);
	}
);

export default checkBigPrimeNumber;
