function numberPyramid(n) {
    let current = 1;

    for (let i = 1; i <= n; i++) {

        let line = "";

        // 1) Leading spaces (manually with loops)
        for (let s = 1; s <= (n - i) * 2; s++) {        
            line += " ";
        }

        // 2) Increasing numbers
        let start = current;             // store starting number of row
        for (let k = 0; k < i; k++) {
            line += current;
            if (k < i - 1) line += " ";  // add space between numbers
            current++;
        }

        // 3) Decreasing numbers (no reverse, no array)
        let end = current - 2;           // last printed number (current already moved ahead)
        for (let d = 0; d < i - 1; d++) {
            line += " ";
            line += (end - d);
        }

        console.log(line);
    }
}

numberPyramid(4);
