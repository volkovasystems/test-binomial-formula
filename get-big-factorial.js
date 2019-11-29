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

		let result = 1n;
		while(
			bigNumber > 0
		){
			result *= BigInt( bigNumber-- );
		}

		return	result;
	}
);

export default getBigFactorial;
