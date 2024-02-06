class DisplayInfo {
    static displayTable = (data) => {
        const columnWidths = data.reduce((acc, row) => {
            row.forEach((cell, columnIndex) => {
                acc[columnIndex] = Math.max(acc[columnIndex] || 0, String(cell).length);
            });
            return acc;
        }, []);

        const separator = '+' + columnWidths.map(width => '-'.repeat(width + 3)).join('+') + '+';

        console.log(separator);
        data.forEach(row => {
            const cells = row.map((cell, columnIndex) => {
                const paddedCell = String(cell).padEnd(columnWidths[columnIndex]);
                return `| ${paddedCell} `;
            });
            console.log(cells.join('|') + '|');
            console.log(separator);
        });
    };

    static displayMenu = (moves) => {
        console.log('Available moves: ');
        moves.map((move, index) => console.log(`${index + 1} - ${move}`));
        console.log('0 - exit');
        console.log('? - help');
    };
}

module.exports = DisplayInfo;
