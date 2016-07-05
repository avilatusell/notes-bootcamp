// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function Maxnumber(a, b, c) {
    var max = a;
    if (a < b) {
        if (b < c) {
            max = c;
        } else {
            max = b;
        }
    } else {
        if (a <= c) {
            max = c;
        } else {
            max = a;
        }
    }
    return max;
}
