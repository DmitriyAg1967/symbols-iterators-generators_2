import Team from './team';
import Person from './person';

const person1 = new Person();
const person2 = new Person();
const person3 = new Person();

const team = new Team('Reya');
team.add(person1);
team.add(person2);
team.add(person3);

console.log(team);

const generator  = team[Symbol.iterator]();
console.log(generator .next());
console.log(generator .next());
console.log(generator .next());
console.log(generator .next());

for (const unit of team) {
  console.log(unit);
}
