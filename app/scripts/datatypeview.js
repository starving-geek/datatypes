/*
 * Tyler Deans
 * February 21, 2016
 */


function DatatypeView(_simView) {
    // keep a link to the view
    this.simView = _simView;
}


/*
	draws expressions for the option view
*/

DatatypeView.prototype.drawDatatypeExpression = function(_datatype) {

    $('#datatypeDiv').append(_datatype.datatypeString);
}