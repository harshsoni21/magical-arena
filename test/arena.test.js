// test/arena.test.js
const assert = require('assert');
const Player = require('../player');
const Arena = require('../arena');

describe('Player', () => {
    it('should create a player with given attributes', () => {
        const player = new Player('Test Player', 100, 10, 5);
        assert.strictEqual(player.name, 'Test Player');
        assert.strictEqual(player.health, 100);
        assert.strictEqual(player.strength, 10);
        assert.strictEqual(player.attack, 5);
    });

    it('should roll a dice and return a value between 1 and 6', () => {
        const player = new Player('Test Player', 100, 10, 5);
        const roll = player.rollDice();
        assert(roll >= 1 && roll <= 6);
    });

    it('should calculate attack damage', () => {
        const player = new Player('Test Player', 100, 10, 5);
        const damage = player.performAttack();
        assert(damage >= 5 && damage <= 30); // attack (5) * dice roll (1-6)
    });

    it('should calculate defense value', () => {
        const player = new Player('Test Player', 100, 10, 5);
        const defense = player.performDefense();
        assert(defense >= 10 && defense <= 60); // strength (10) * dice roll (1-6)
    });

    it('should reduce health correctly when receiving damage', () => {
        const player = new Player('Test Player', 100, 10, 5);
        player.receiveDamage(30);
        assert.strictEqual(player.health, 70);
        player.receiveDamage(80);
        assert.strictEqual(player.health, 0);
    });
});

describe('Arena', () => {
    it('should determine the winner correctly', () => {
        const playerA = new Player('Player A', 50, 5, 10);
        const playerB = new Player('Player B', 100, 10, 5);
        const arena = new Arena(playerA, playerB);
        const winner = arena.startFight();
        assert(winner.isAlive());
    });
});
