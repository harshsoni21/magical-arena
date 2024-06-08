class Player {

    constructor(name, health, strength, attack) {
        this.name = name
        this.health = health
        this.strength = strength
        this.attack = attack
    }

    isAlive(){
        return this.health > 0
    }

    rollDice(){
        return Math.floor(Math.random() * 6) + 1
    }

    performAttack(){
        return this.attack * this.rollDice()
    }

    performDefense(){
        return this.strength * this.rollDice()
    }

    receiveDamage(damage){
        this.health = Math.max(0,this.health - damage)
    }

}

module.exports = Player