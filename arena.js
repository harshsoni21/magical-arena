const Player = require('./Player.js')

class Arena{
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    startFight(){
        let attacker, defender
        if(this.player1.health < this.player2.health){
            attacker = this.player1
            defender = this.player2
        }else{
            attacker = this.player2
            defender = this.player1
        }

        while(attacker.isAlive() && defender.isAlive()){
            this.attack(attacker, defender)
            if(!defender.isAlive()) break
            [attacker, defender] = [defender, attacker]
        }

        return attacker.isAlive() ? attacker : defender

    }

    attack(attacker, defender){
        const attackDamage = attacker.performAttack()
        const defensValue = defender.performDefense()
        const damage = Math.max(0, attackDamage - defensValue)
        defender.receiveDamage(damage)
        console.log(`${attacker.name} attacks ${defender.name}: Damage = ${damage}, ${defender.name} Health = ${defender.health}`)
    }

}

module.exports = Arena
