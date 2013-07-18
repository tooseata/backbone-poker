
// Data Structure Examples 
var straightFlush = [{Suite : 'Clubs', Card : 6}, {Suite : 'Clubs', Card : 7}, {Suite : 'Clubs', Card : 8},{Suite : 'Clubs', Card : 9}, {Suite : 'Clubs', Card : 10}];
var flush = [{Suite : 'Diamond', Card : 9}, {Suite : 'Diamond', Card : 10}, {Suite : 'Diamond', Card : 2},{Suite : 'Diamond', Card : 3}, {Suite : 'Hearts', Card : 9}];
var fourOfKind = [{Suite : 'Diamond', Card : 12}, {Suite : 'Clubs', Card : 12}, {Suite : 'Hearts', Card : 12},{Suite : 'Spade', Card : 12}, {Suite : 'Diamond', Card : 7}];
var fullHouse = [{Suite : 'Diamond', Card : 10}, {Suite : 'Clubs', Card : 10}, {Suite : 'Hearts', Card : 10},{Suite : 'Clubs', Card : 7}, {Suite : 'Diamond', Card : 7}];
var twoPair = [{Suite : 'Diamond', Card : 12}, {Suite : 'Clubs', Card : 12}, {Suite : 'Hearts', Card : 11},{Suite : 'Hearts', Card : 11}, {Suite : 'Diamond', Card : 7}];


// var gameHands = [straightFlush,fourOfAKind,fullHouse]
// var gameHands1 = [straightFlush1,straightFlush2]

// TODO
var poker = function (hands) {
  return _.max(hands,function(hand){
  return hand.Card;
});
};

var highestCard = function (hand) {
  return _.max(hand,function(hand){
    return hand.Card;
  });
};

// Return a list of ranks, sorted with a higher first
var card_ranks = function (hand){
  
// Write a function to handle a wheel straight by returning [5,4,3,2,1] from [14,5,4,3,2] #TODO
// Take in an array of object and returns an a sorted array for all the card values.
  return _.pluck(hand, 'Card').sort(function(a,b){
    return b-a;
  });
};

// straight(ranks): returns True if the hand is a straight.

var straight = function (ranks){
  isUnique = _.uniq(ranks, true);
    if(isUnique.length === 5){
      if(_.max(ranks) - _.min(ranks) === 4){
        return true;
        }
    }
    return false;
};


// straight([9,8,7,6,5]) === true
// straight([9,8,2,1,5]) === false


// Return True is all the cards have the same suit 
var flush = function (hand){

var arrayOfSuites = _.pluck(hand, 'Suite');
var isFlush = _.uniq(arrayOfSuites);

  if(isFlush.length === 1){
    return true;
  }
  return false;
};

// flush(straightFlush) == true
// flush(fourOfAKind) == false


// Return the first rank that this hand has exactly n of
// Return null is there is no n of a kind in the hand
var kind = function(n, ranks){
  var numOccurance = _.countBy(ranks);
  var results = [];
  var values = Object.keys(numOccurance).map(function (key) {
    if (numOccurance[key] === n){
      results.push(parseInt(key));
    }
  });

  if(results.length >= 1){
    return results;
  } else {
    return false;
  }
};

// kind(4, fourOfKind) === 12 // 12 is the number of the card that has four mataches
// kind(1, fourOfKind) === 7 // number left over

// If two pair return the corresponding ranks as a array. Rank the cards from highest to lowest
// Return false is no pair
var two_pair = function(ranks){
  var result = kind(2,ranks);
  if (result){
    result.sort(function(a,b){
      return b-a;
    });
    return result;
  }
  return false;
};

// two_pair(twoPair)  = [12,11]
// two_pair(straightFlush) = none

var hand_rank =  function (hand) {
// Return a data structure.
// The first element of the returned result represents the rank order.
// The second element of is designed to break ties between similar groupings
// Nine diffent types of hands. From straight flush at the top to high card at the bottom.
// Number the types of hands from 0 to 8, where 8 is a straight flush

// This returns cards in max order as array
var ranks = card_ranks(hand);
var results;
var higestCard;

// Straight Flush. Rank 8
if (straight(ranks) && flush(hand)){
  highestCard = highestCard(ranks);
  results = [];
    results[0] = 8;
    results[1] = highestCard;
  return results;
  }

// Four of a Kind. Rank 7
else if (kind(4, ranks)){
  results = [];
  results[0] = 7;
  results[1] = kind(4,ranks);
  results[2] = kind(1,ranks);
  return results;
}

// Full House
else if (kind(3, ranks) && kind(2, ranks)){
  results = [];
  results[0] = 6;
  results[1] = kind(3,ranks);
  results[2] = kind(2,ranks);
  return results;
}

// Flush
else if (flush(rank)){
  results = [];
  results[0] = 5;
  results[1] = ranks;
  return results;
}

// Stright
else if (straight(rank)){
  higestCard = highestCard(ranks);
  results = [];
  results[0] = 4;
  results[1] = higestCard;
  return results;
}

// Three of a kind
else if (kind(3, rank)){
  higestCard = highestCard(ranks);
  results = [];
  results[0] = 3;
  results[1] = kind(3, ranks);
  results[2] = ranks;
  return results;
}

// Two Pairs
else if (two_pair(rank)){
  results = [];
  results[0] = 2;
  results[1] = two_pair(ranks);
  results[2] = ranks;
  return results;
}

// One of a Kind
else if (kind(2, rank)){
  results = [];
  results[0] = 1;
  results[1] = kind(2, ranks);
  results[2] = ranks;
  return results;
}

// One of a Kind
else {
  results = [];
  results[0] = 1;
  results[1] = ranks;
  return results;
}

} //End of cardrank function;





