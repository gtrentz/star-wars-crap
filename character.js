class Character {
constructor(name) {
    this.dexterity = [];
    this.perception = [];
    this.knowledge = [];
    this.strength = [];
    this.mechanical = [];
    this.technical = [];
}
}

class skill {
    constructor(name, base, bonus) {
        this.name = name;
        this.base = base;
        this.bonus = bonus;
        this.total = base + bonus;
    }
}

class force_skill {
    constructor(name, num_powers) {
        this.name = name;
        this.powers = num_powers();
    }
}

function add_skill(category, s) {
    category.add(s);
}

const grant = new Character("Grant");