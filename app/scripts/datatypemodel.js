/*
 * Tyler Deans
 * February 21, 2016
 */



function DatatypeModel(_simModel) {
    // save a link to the model
    this.simModel = _simModel;
}

// generates a card suit randomly
function getCardSuit() {
    var suit = "";
    randNum = getRandomInt(1, 5);

    if (randNum == 1) {
        suit = "Club";
    } else if (randNum == 2) {
        suit = "Diamond";
    } else if (randNum == 3) {
        suit = "Heart";
    } else {
        suit = "Spade";
    }
    return suit;
}

// generates a card rank (face or number) randomly
function getCardRank() {
    var type = "";
    randNum = getRandomInt(1, 6);

    if (randNum == 1) {
        type = "Jack";
    } else if (randNum == 2) {
        type = "Queen";
    } else if (randNum == 3) {
        type = "King";
    } else if (randNum = 4) {
        type = "Ace";
    } else {
        type = "Num of int";
    }
    return type;
}


DatatypeModel.prototype.randomDatatypeExpression = function() {
    var cardSuit = getCardSuit();
    var cardRank = getCardRank();
    var answer = 0;
    // datatype question saved in this.datatype string
    this.datatypeString = "<pre>datatype suit = Club | Diamond | Heart | Spade\n";
    this.datatypeString += "datatype rank = Jack | Queen | King | Ace | Num of int\n";
    this.datatypeString += "datatype cardType = Card of suit * rank\n\n";

    this.datatypeString += "val my_card = Card(" + cardSuit + ", " + cardRank + ")\n";

    this.datatypeString += "fun mystery (c : cardType) =\n";
    this.datatypeString += "	case c of\n";
    this.datatypeString += "		  Card(Spade, _) => 1\n";
    this.datatypeString += "		| Card(_, Ace) => 2\n";
    this.datatypeString += "		| Card(Heart, _) => 3\n";
    this.datatypeString += "		| Card(_, Jack) => 4\n";
    this.datatypeString += "		| Card(_, _) => 5\n\n";
    this.datatypeString += "val ans = mystery(my_card)</pre>";

    // finds the answer based on the value of cardSuit and cardRank
    if (cardSuit === "Spade") {
        answer = "1";
    } else if (cardRank === "Ace") {
        answer = "2";
    } else if (cardSuit === "Heart") {
        answer = "3";
    } else if (cardRank === "Jack") {
        answer = "4";
    } else {
        answer = "5";
    }

    return answer;
}

DatatypeModel.prototype.getDatatypeExpression = function() {
    return this.datatypeString;
}