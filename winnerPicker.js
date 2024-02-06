class WinnerPicker {
    static getWinnersList = (moves) => {
        const movesCount = args.length;
        const half = Math.floor(movesCount / 2);
        const winners = [['Move:', 'Beats:']];
        moves.forEach((move, index) => {
            const nextMoves = [move];
            for (let i = 1; i <= half; i++) {
                nextMoves.push(moves[(index + i) % movesCount]);
            }
            winners.push(nextMoves);
        });
        return winners;
    }

    static getWinner = (move, computerMove, winnersList) => {
        const userMoveArray = winnersList.find(array => array[0] === move);
        const computerMoveArray = winnersList.find(array => array[0] === computerMove);
        if (userMoveArray.includes(computerMove) && userMoveArray.indexOf(computerMove) !== 0) {
            console.log('You win!');
        } else if (computerMoveArray.includes(move) && computerMoveArray.indexOf(move) !== 0) {
            console.log('You lose!');
        } else {
            console.log('It is a draw');
        }
    }
}

module.exports = WinnerPicker;
