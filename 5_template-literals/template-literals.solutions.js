// 1. Build this madlibs function out so that it makes use of all the given arguments.
const madlib = (noun, adjective, number, verb, adverb) => {
  return `Those ${number} ${adjective} ${noun}s are ${verb}ing ${adverb}!`
};

// 2. We can also use ${} to contain small javascript snippets.  Let's find a user's birth year and wish them a happy nth birthday!
const birthdayWishes = (name, birthYear) => {
  return `Happy ${2021 - birthYear}th birthday, ${name}!`
}