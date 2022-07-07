const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor() {
        this.board = [
            ['*', '░', 'O'],
            ['░', 'O', '░'],
            ['░', '^', '░'],]

        this.playerPosition = [0, 0];
    }

    mvRight() {
        if (this.playerPosition[0] + 1 < this.board[0].length) {
            this.updateField(this.playerPosition, '*');
            this.playerPosition[0]++;
            this.updateField(this.playerPosition, '*');
        } else {
            console.log('You lose!!! You fell down a hole.')
            throw Error()
        }
    }

    mvLeft() {
        if (this.playerPosition[0] - 1 >= 0) {
            this.updateField(this.playerPosition, '*');
            this.playerPosition[0]--;
            this.updateField(this.playerPosition, '*');
        } else {
            console.log('You lose!!! You fell down a hole.')
            throw Error()
        }
    }

    mvUp() {
        if (this.playerPosition[1] - 1 >= 0) {
            this.updateField(this.playerPosition, '*');
            this.playerPosition[1]--;
            this.updateField(this.playerPosition, '*');
        } else {
            console.log('You lose!!! You fell down a hole.')
            throw Error()
        }
    }

    // board.length มีค่าเท่ากับ board[0].length(แกน x ซึ่งเท่ากับ 3)
    mvDown() {
        if (this.playerPosition[1] + 1 < this.board.length) {
            this.updateField(this.playerPosition, '*');
            this.playerPosition[1]++;
            this.updateField(this.playerPosition, '*');
        } else {
            console.log('You lose!!! You fell down a hole.')
            throw Error()
        }
    }


    updateField(position, Character) {
        const x = position[0];
        const y = position[1];
        switch (this.board[y][x]) {
            case '^':
                console.log('Congrat!! You found hat bro')
                break;
        }
        this.board[y][x] = Character


    }

    print() {
        console.log(this.board.map((r) => r.join('')).join('\n'));
    }
}

// const myField = new Field([
//     ['*', '░', 'O'],
//     ['░', 'O', '░'],
//     ['░', '^', '░'],
// ]);


const player = new Field()

while (true) {
    const input = prompt('Which way? (w, a, s, d): ');
    try {
        if (input === 'w') {
            player.mvUp();
        } else if (input === 'a') {
            player.mvLeft();
        } else if (input === 's') {
            player.mvDown();
        } else if (input === 'd') {
            player.mvRight();
        } else {
            console.log(`Invalid input ${input}`);
        }
    player.print();
    } catch (error) {
        console.log(error);
        // console.clear();
        break;
        // console.log(this.playerPosition)
        

    }
}





























// for (let i=0; i<10; i++) {
//     const x=Math.floor(Math.random()*4);
//     console.log(x);
// }