/**
 * Prints a triangle to the console
 *      #
 *      ##
 *      ###
 *      ####
 *      #####
 *      ######
 * Using a loop(while/for)
 */
// TODO:
// print # character vertically while appending one characte horizontary.

for (let i = 0; i <= 5; i++){
    for(let j = 0; j <= i; j++) {
        console.log("#");
    }
}