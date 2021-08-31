/*
TEMPLATE LITERALS

Template literals are a useful tool that can greatly simplify string building.
First, let's look at the traditional way of building strings.

let x = 'Hello, ' + 'Greg' + '! Welcome to the arcade.'

That's not very easy to type.  Template literals make this much simpler.

We start by wrapping our text in backticks instead of single or double quotes.
We write all of the text we would like, and wrap any variables in ${}.

So the earlier example would look like this.

let x = `Hello, ${USERNAME}! Welcome to the arcade.`

Much simpler, right?  Let's dive in.
*/

// 1. Build this madlibs function out so that it makes use of all the given arguments.
const madlib = (noun, adjective, number, verb, adverb) => {

};


// 2. We can also use ${} to contain small javascript snippets.  Let's find a user's birth year and wish them a happy nth birthday!
const birthdayWishes = (name, birthYear) => {

}

/* 
TESTING AREA

We can call our functions below this line to test that they are working correctly.
*/