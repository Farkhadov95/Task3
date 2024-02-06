const readline = require('readline');
const ComputerData = require('./computerData');
const Info = require('./displayInfo');
const WinnerPicker = require('./winnerPicker');

class Game {
    static start = async (moves) => {
        const movesCount = args.length;
        const uniqueMoves = new Set(moves);
        if (uniqueMoves.size !== movesCount) {
            console.error('Error: Moves must be unique.');
            return null;
        }

        const key = ComputerData.generateKey();
        const computerMove = ComputerData.getRandomMove(moves);
        const hmac = ComputerData.getHMAC(key, computerMove);
        const winners = WinnerPicker.getWinnersList(moves);

        console.log(`HMAC: ${hmac}`)
        Info.displayMenu(moves);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let userMove;
        while (true) {
            userMove = await new Promise(resolve => {
                rl.question('Enter your move: ', resolve);
            });

            if (userMove === '0') {
                console.log('Bye!');
                break;
            }

            if (userMove === '?') {
                Info.displayTable(winners);
            }

            let moveIndex = parseInt(userMove) - 1;
            if (!moves.includes(moves[moveIndex]) && userMove !== '0' && userMove !== '?') {
                console.log('Wrong move! Please, try again');
                Info.displayMenu(moves);
                continue;
            }

            if (moves.includes(moves[moveIndex])) {
                console.log(`Your move: ${moves[moveIndex]}`);
                console.log(`Computer move: ${computerMove}`);
                WinnerPicker.getWinner(moves[moveIndex], computerMove, winners);
                console.log('HMAC key: ' + key.toString('hex'));
                break;
            }
        }

        rl.close();
        return;
    }
}

args = process.argv.slice(2);
if (args.length < 3 || args.length % 2 === 0) {
    console.log('Error: You can pass only odd number of moves and more than one');
} else if (new Set(args).size !== args.length) {
    console.error('Error: Moves must be unique.');
    return null;
} else {
    Game.start(args);
}