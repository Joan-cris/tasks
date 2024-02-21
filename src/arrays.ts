/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((tripleVal: number): number => tripleVal * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intArr = numbers.map((str) => parseInt(str));
    return intArr.map((str) => (isNaN(str) ? 0 : str));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const a = [...amounts];
    const newNum = a.map((x) => (x.startsWith("$") ? x.slice(1) : x));
    return stringsToIntegers(newNum);
};

/**
 * Consume an array of messages and return a new list of the messages.
 * However, any string that ends in "!" should be made uppercase.
 * Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return (
        messages
            //filters messages with question marks
            .filter((message) => !message.endsWith("?"))
            .map((message) =>
                message.endsWith("!") ? message.toUpperCase() : message
            )
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    //filters only words less than 4 letters long, check length
    return words.filter((word) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const c = colors.filter(
        //checks if all colors are in the array
        (color) => color !== "red" && color !== "blue" && color !== "green"
    );
    //checks if array is empty
    if (colors.length == 0) {
        return true;
    } else if (c.length == 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //add numbers, set to 0, produce sum
    const val = addends.reduce((total, num) => total + num, 0);
    let sum;
    //empty array
    if (val == 0) {
        sum = "0";
    } else {
        //non-empty array, add values separated by "+" in string
        sum = addends.join("+");
    }
    return val + "=" + sum;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    let nNum = false;
    const result: number[] = [];

    for (let i = 0; i < values.length; i++) {
        if (values[i] < 0 && !nNum) {
            //if there is a first negative
            nNum = true;
            //Insert sum of values and negative number
            result.push(values[i]);
            result.push(sum);
        } else {
            //sum plus the values in the array
            sum += values[i];
            result.push(values[i]);
        }
    }
    //No negatives in array
    if (!nNum) {
        result.push(sum);
    }
    return result;
}
