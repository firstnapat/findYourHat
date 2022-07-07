// const prompt = require('prompt-sync')({ sigint: true });

// const hat = '^';
// const hole = 'O';
// const fieldCharacter = '░';
// const pathCharacter = '*';
// const fieldRandom = ['░', 'O', '^']
// class Field {
//     constructor() {
//         this.field = [
//             ['*', '░', 'O'],
//             ['░', 'O', '░'],
//             ['░', '^', '░'],]

//         this.playerPosition = [0, 0];
//         // this.inputField = [[inputField]];
//     }

// // เอาไปใส่ class ยังไงวะะะะะะะะะะะะะะะะะะะ
//     // generateField(height, width) {
//     //     const newField = []
//     //     const fieldRandom = ['░', 'O', '^']
//     //     newField[0][1] = hat;
//     //     for (let i = 0; i < height; i++) {
//     //         newField.push([])
//     //         for (let j = 0; j < width; j++) {
//     //             var item = fieldRandom[Math.floor(Math.random()*fieldRandom.length)];
//     //             newField[i].push(item)
//     //         }
//     //     } return newField;
//     // }
   
//     mvRight() {
//         if (this.playerPosition[0] + 1 < this.field[0].length) {
//             this.updateField(this.playerPosition, '*');
//             this.playerPosition[0]++;
//             this.updateField(this.playerPosition, '*');
//         } else {
//             console.log('You lose!!! move outside the field.')
//             throw Error()
//         }
//     }

//     mvLeft() {
//         if (this.playerPosition[0] - 1 >= 0) {
//             this.updateField(this.playerPosition, '*');
//             this.playerPosition[0]--;
//             this.updateField(this.playerPosition, '*');
//         } else {
//             console.log('You lose!!! move outside the field.')
//             throw Error()
//         }
//     }

//     mvUp() {
//         if (this.playerPosition[1] - 1 >= 0) {
//             this.updateField(this.playerPosition, '*');
//             this.playerPosition[1]--;
//             this.updateField(this.playerPosition, '*');
//         } else {
//             console.log('You lose!!! move outside the field.')
//             throw Error()
//         }
//     }

//     // field.length มีค่าเท่ากับ field[0].length(แกน x ซึ่งเท่ากับ 3)
//     mvDown() {
//         if (this.playerPosition[1] + 1 < this.field.length) {
//             this.updateField(this.playerPosition, '*');
//             this.playerPosition[1]++;
//             this.updateField(this.playerPosition, '*');
//         } else {
//             console.log('You lose!!! move outside the field.')
//             throw Error()
//         }
//     }

//     updateField(position, Character) {
//         const x = position[0];
//         const y = position[1];
//         switch (this.field[y][x]) {
//             case '^':
//                 throw Error('Congrat!! You found hat bro')

//             case 'O':
//                 throw Error('You lose!! falling in a hole.')
//         }
//         this.field[y][x] = Character
//     }

//     print() {
//         console.log(this.field.map((r) => r.join('')).join('\n'));
//     }
// }

// // const myField = new Field([
// //     ['*', '░', 'O'],
// //     ['░', 'O', '░'],
// //     ['░', '^', '░'],
// //   ]);


// const player = new Field()

// while (true) {
//     const input = prompt('Which way? (w, a, s, d): ');
//     try {
//         if (input === 'w') {
//             player.mvUp();
//         } else if (input === 'a') {
//             player.mvLeft();
//         } else if (input === 's') {
//             player.mvDown();
//         } else if (input === 'd') {
//             player.mvRight();
//         } else {
//             console.log(`Invalid input please enter new value : ${input}`);
//         }
//         player.print();
//     } catch (e) {
//         console.log(e);
//         break;
//     }
// }


// // const blankarray = []
// // const fieldRandom = ['░', 'O', '^']
// // for (let i = 0; i < 5; i++) {
// //     blankarray.push([])
// //     for (let j = 0; j <5; j++) {
// //         var item = fieldRandom[Math.floor(Math.random()*fieldRandom.length)];
// //         blankarray[i].push(item)
// //     }
// // } console.log(blankarray[0][0] = '*') ;
// // console.log(blankarray)

// // console.log(blankarray.map((r) => r.join('')).join('\n'));


// // // inputField = []
// // // for (let i=0; i<1; i++) {
// // //     const x=Math.floor((Math.random()*3) + 5);
// // //     const y=Math.floor((Math.random()*3) + 5);
// // //     inputField.push(x, y)
// // //     // console.log(x);
// // //     // console.log(y);
// // // }
// // // console.log(inputField)
const height = 5
const width = 5

var field = []
const fieldRandom = ['░']
// const fieldRandom = ['░','O','^']

for (let i = 0; i < height; i++) {
    field.push([])
    field[0][0] = '*'
    for (let j = 0; j < width; j++) {
        var item = fieldRandom[Math.floor(Math.random()*fieldRandom.length)];
        field[i].push(item)
    }
} field[0][0] = '*';
console.log(field);