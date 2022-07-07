const prompt = require("prompt-sync")({ sigint: true });
class PacMan {
    constructor() {
        this.board = [
            ['P', 'o', 'o'],
            ['o', 'X', 'o'],
            ['o', 'o', 'Y'],
        ]
        // this.previousPosition = [0, 0];
        this.currentPosition = [0, 0]; // (x, y)
        // console.log(this.board[1][1])
    }
    
    mvRight() {
        if (this.currentPosition[0] + 1 < this.board[0].length ) {
            if (this.currentPosition[0] + 1 === this.board[1][1]){
                this.updateMap(this.currentPosition, 'P');
                this.currentPosition[0]++;
                this.updateMap(this.currentPosition, 'X');
            } 
        //     else {
        //         this.updateMap(this.currentPosition, 'o');
        //         this.currentPosition[0]++;
        //         this.updateMap(this.currentPosition, 'P');
        // } 
        }
    }

    mvLeft() {
        if (this.currentPosition[0] - 1 >= 0) {
            this.updateMap(this.currentPosition, 'o');
            this.currentPosition[0]--;
            this.updateMap(this.currentPosition, 'P');        
        }
    }

    mvUp() {
        if (this.currentPosition[1] - 1 >= 0) {
            this.updateMap(this.currentPosition, 'o');
            this.currentPosition[1]--;
            this.updateMap(this.currentPosition, 'P');   
        }
    }

    // board.length มีค่าเท่ากับ board[0].length(แกน x ซึ่งเท่ากับ 3)
    mvDown() {
        if (this.currentPosition[1] + 1 < this.board.length) { 
            this.updateMap(this.currentPosition, 'o');
            this.currentPosition[1]++;
            this.updateMap(this.currentPosition, 'P');
        } 
    }
    // position = [x, y] symbol = สัญญลักษณ์ที่จะ Update
    updateMap(position, symbol) {
        // const [x, y] = this.currentPosition;
        const x = position[0];
        const y = position[1];
        if (this.board[y][x]==='Y') {
            throw Error('You are Dead')   
        } 
        this.board[y][x] = symbol
    }
    // hitRock() {
    //     if (this.updateMap())
    // }
    
    printBoard() {
        console.log(this.board.map(y => y.join('')).join('\n'))
    }
}

const pacman = new PacMan();

while (true) {
    const input = prompt('Which Way (l, r, u, d): ');
    try{
        switch (input) {
            case 'l':
                pacman.mvLeft();
                break;
            case 'r':
                pacman.mvRight();
                break;
            case 'u':
                pacman.mvUp();
                break;
            case 'd':
                pacman.mvDown();
                break;
        }
    pacman.printBoard();
    } catch (e){
        console.log(e);
        // console.clear();
        break;
        
    }
    // console.log('currentPosition', pacman.currentPosition);

}
// pacman.printBoard();
// console.log('currentPosition before move', pacman.currentPosition);
// pacman.mvRight();

// const board = [
//     ['x', 'x', 'x'],
//     ['x', 'x', 'x'],
//     ['x', 'x', 'x'],
//   ];
  
//   // Not working
//   const newBoard = [...board];
//   const newBoard2 = [board[0], board[1], board[2]];
  
//   // Working
//   const newBoard3 = [...board.map((y) => [...y])];
//   const newBoard4 = [];
//   for (let i = 0; i < board.length; i++) {
//     const row = board[i];
//     console.log(i, row === board[i]);
//     newBoard4.push([...row]);
//   }
//   const newBoard5 = [];
//   for (let i = 0; i < board.length; i++) {
//     const row = [];
//     for (let j = 0; j < board[i].length; j++) {
//       row[j] = board[i][j];
//     }
//     newBoard5.push(row);
//   }
//   const newBoard6 = [];
//   for (const row of board) {
//     const newRow = [];
//     for (const char of row) {
//       newRow.push(char);
//     }
//     newBoard6.push(newRow);
//   }
  
//   function printBoard(inputBoard) {
//     console.log(inputBoard.map((row) => row.join('')).join('\n'));
//   }
  
//   console.log('board === newBoard ', board === newBoard);
//   console.log('newBoard', board[0] === newBoard[0]);
//   printBoard(newBoard);
//   console.log('newBoard2', board[0] === newBoard2[0]);
//   printBoard(newBoard2);
//   console.log('newBoard3', board[0] === newBoard3[0]);
//   printBoard(newBoard3);
//   console.log('newBoard4', board[0] === newBoard4[0]);
//   printBoard(newBoard4);
//   console.log('newBoard5', board[0] === newBoard5[0]);
//   printBoard(newBoard5);
//   console.log('newBoard6', board[0] === newBoard6[0]);
//   printBoard(newBoard6);
  
//   board[0][0] = 'O';
//   console.log('board === newBoard ', board === newBoard);
//   console.log('newBoard', board[0] === newBoard[0]);
//   printBoard(newBoard);
//   console.log('newBoard2', board[0] === newBoard2[0]);
//   printBoard(newBoard2);
//   console.log('newBoard3', board[0] === newBoard3[0]);
//   printBoard(newBoard3);
//   console.log('newBoard4', board[0] === newBoard4[0]);
//   printBoard(newBoard4);
//   console.log('newBoard5', board[0] === newBoard5[0]);
//   printBoard(newBoard5);
//   console.log('newBoard6', board[0] === newBoard6[0]);
//   printBoard(newBoard6);
  
//   const a = ['a', 'b', 'c'];
//   const b = a;