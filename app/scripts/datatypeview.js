/*
* Tyler Deans
* February 5, 2016
*/


function OptionView(_simView) {
	// keep a link to the view
	this.simView = _simView;
}


/*
	draws expressions for the option view
*/

OptionView.prototype.drawOptionExpression = function(_option) {
	
	$( '#optionDiv').append( _option.optionString );
}
