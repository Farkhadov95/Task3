var { AsciiTable3, AlignmentEnum } = require('ascii-table3');



class DisplayInfo {
    static displayTable = (data) => {
        var table =
            new AsciiTable3()
                .setHeading('Move:', 'Beats:')
                .setAlign(3, AlignmentEnum.CENTER)
                .addRowMatrix(data);

        console.log(table.toString());
    };

    static displayMenu = (moves) => {
        console.log('Available moves: ');
        moves.map((move, index) => console.log(`${index + 1} - ${move}`));
        console.log('0 - exit');
        console.log('? - help');
    };
}

module.exports = DisplayInfo;
