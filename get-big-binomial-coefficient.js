"use strict";

import getBigFactorial from "./get-big-factorial.js";

const getBigBinomialCoefficient = (
	function getBigBinomialCoefficient( length, limit ){
		return	(
						getBigFactorial( length )
					/	(
								getBigFactorial( length - limit )
							*	getBigFactorial( limit )
						)
				);
	}
);

export default getBigBinomialCoefficient;
