export default class Team {
    constructor(name) {
        this.name = name;
        this.members = new Set();
    }

    add(member) {
        if (this.members.has(member)) {
            throw new Error('Такой персонаж уже есть');
        }
        this.members.add(member)
    }

    *[Symbol.iterator]() {
        const team_array = Array.from(this.members);
        for (let i = 0; i <= team_array.length; i++) {
            yield team_array[i];
        }
    }
}
