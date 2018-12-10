/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var size_y = matrix.length;
    var rezero = new Array(size_y).fill('').map(n => new Array(size_y).fill(''));

    for(var i=0; i < size_y; i++) {            
        for(var j=0; j < size_y; j++)
            rezero[j][i] = matrix[size_y-i-1][j]; 
    }
    
    for(var i=0; i< size_y; i++) {
        for(var j=0; j < size_y; j++)
            matrix[i][j] = rezero[i][j];
    }
};

/*
 * clockwise rotate
 * first reverse up to down, then swap the symmetry 
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
*/

/*
 * anticlockwise rotate
 * first reverse left to right, then swap the symmetry
 * 1 2 3     3 2 1     3 6 9
 * 4 5 6  => 6 5 4  => 2 5 8
 * 7 8 9     9 8 7     1 4 7
*/