"use strict";

import "@csstools/normalize.css";
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

import "./index.css";

import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";

import { until } from "async-es";

import getBigFactorial from "./get-big-factorial.js";
import getBigBinomialCoefficient from "./get-big-binomial-coefficient.js";
import checkBigPrimeNumber from "./check-big-prime-number.js";

const terminal = ( new Terminal( ) );
const fitAddon = ( new FitAddon( ) );
terminal.loadAddon( fitAddon );
terminal.open( document.getElementById( "terminal" ) );
fitAddon.fit( );

terminal.writeln( `get big factorial of 1: ${ getBigFactorial( 1 ) }` );
terminal.writeln( `get big factorial of 2: ${ getBigFactorial( 2 ) }` );
terminal.writeln( `get big factorial of 3: ${ getBigFactorial( 3 ) }` );
terminal.writeln( `get big factorial of 4: ${ getBigFactorial( 4 ) }` );
terminal.writeln( `get big factorial of 5: ${ getBigFactorial( 5 ) }` );
terminal.writeln( `get big factorial of 6: ${ getBigFactorial( 6 ) }` );
terminal.writeln( `get big factorial of 7: ${ getBigFactorial( 7 ) }` );
terminal.writeln( `get big factorial of 8: ${ getBigFactorial( 8 ) }` );
terminal.writeln( `get big factorial of 9: ${ getBigFactorial( 9 ) }` );
terminal.writeln( `get big factorial of 10: ${ getBigFactorial( 10 ) }` );
terminal.writeln( `get big factorial of 11: ${ getBigFactorial( 11 ) }` );
terminal.writeln( `get big factorial of 12: ${ getBigFactorial( 12 ) }` );
terminal.writeln( `get big factorial of 13: ${ getBigFactorial( 13 ) }` );
terminal.writeln( `get big factorial of 14: ${ getBigFactorial( 14 ) }` );
terminal.writeln( `get big factorial of 15: ${ getBigFactorial( 15 ) }` );

terminal.writeln( `get big binomial coefficient of 3,0: ${ getBigBinomialCoefficient( 3, 0 ) }` );
terminal.writeln( `get big binomial coefficient of 3,1: ${ getBigBinomialCoefficient( 3, 1 ) }` );
terminal.writeln( `get big binomial coefficient of 3,2: ${ getBigBinomialCoefficient( 3, 2 ) }` );
terminal.writeln( `get big binomial coefficient of 3,3: ${ getBigBinomialCoefficient( 3, 3 ) }` );

terminal.writeln( `check big prime number 1: ${ checkBigPrimeNumber( 1 ) }` );
terminal.writeln( `check big prime number 2: ${ checkBigPrimeNumber( 2 ) }` );
terminal.writeln( `check big prime number 3: ${ checkBigPrimeNumber( 3 ) }` );
terminal.writeln( `check big prime number 4: ${ checkBigPrimeNumber( 4 ) }` );
terminal.writeln( `check big prime number 5: ${ checkBigPrimeNumber( 5 ) }` );
terminal.writeln( `check big prime number 6: ${ checkBigPrimeNumber( 6 ) }` );
terminal.writeln( `check big prime number 7: ${ checkBigPrimeNumber( 7 ) }` );
terminal.writeln( `check big prime number 8: ${ checkBigPrimeNumber( 8 ) }` );
terminal.writeln( `check big prime number 9: ${ checkBigPrimeNumber( 9 ) }` );
terminal.writeln( `check big prime number 10: ${ checkBigPrimeNumber( 10 ) }` );
terminal.writeln( `check big prime number 11: ${ checkBigPrimeNumber( 11 ) }` );
terminal.writeln( `check big prime number 12: ${ checkBigPrimeNumber( 12 ) }` );
terminal.writeln( `check big prime number 13: ${ checkBigPrimeNumber( 13 ) }` );
terminal.writeln( `check big prime number 14: ${ checkBigPrimeNumber( 14 ) }` );
terminal.writeln( `check big prime number 15: ${ checkBigPrimeNumber( 15 ) }` );
terminal.writeln( `check big prime number 16: ${ checkBigPrimeNumber( 16 ) }` );
terminal.writeln( `check big prime number 17: ${ checkBigPrimeNumber( 17 ) }` );
terminal.writeln( `check big prime number 18: ${ checkBigPrimeNumber( 18 ) }` );
terminal.writeln( `check big prime number 19: ${ checkBigPrimeNumber( 19 ) }` );
terminal.writeln( `check big prime number 20: ${ checkBigPrimeNumber( 20 ) }` );

terminal.writeln( `get big binomial coefficient of 7001,7000: ${ getBigBinomialCoefficient( 7001, 7000 ) }` );
/*
terminal.writeln( `check big prime number 7001: ${ checkBigPrimeNumber( 7001 ) }` );*/

/*let index = 7000;
let intervalInstance = (
	setInterval(
		function( ){
			if(
				checkBigPrimeNumber( index++ ) === true
			){
				terminal.writeln( `prime number port: ${ index }` );

				clearInterval( intervalInstance );

				return;
			}
			else{
				terminal.write( `.` );
			}

			if(
				index >= 8000
			){
				clearInterval( intervalInstance );

				return;
			}
		},
		1000
	)
);*/
