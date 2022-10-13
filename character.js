class Character {
constructor(name) {
    this.dexterity = [];
    this.perception = [];
    this.knowledge = [];
    this.strength = [];
    this.mechanical = [];
    this.technical = [];
}
    add_skill(category, s) {
        category.push(s);
    }

    remove_skill(category, n) {
    let place = -1;
    for (let i = 0; i < category.length; i++) {
        if (category[i].name == n) {
            place = i;
        }
    }
    console.log("Place: " + place);
    let arr1 = category.splice(place, 1); let arr2 = category.splice(place + 1, category.size - place + 1);
    category = [arr1, arr2];
    }

    display_skills() {
    console.log("Dexterity:");
    for (let i = 0; i < this.dexterity.length; i++) {
        let s = this.dexterity[i];
        console.log(s.name + ", Base: " + s.base + " Bonus: " + s.bonus + " Total: " + s.total);
    }
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


let grant = new Character("Grant");
grant.add_skill(grant.dexterity, new skill("Blaster", 2, 1));
grant.add_skill(grant.mechanical, new skill("Robots", 4, 2));
grant.add_skill(grant.dexterity, new skill("Knife", 5, 1));
grant.add_skill(grant.dexterity, new skill("Drawing", 2, 7));
grant.add_skill(grant.dexterity, new skill("Sword", 6, 9));
grant.add_skill(grant.dexterity, new skill("Lightsaber", 3, 5));
grant.display_skills();
grant.remove_skill(grant.dexterity, "Blaster");
grant.display_skills();