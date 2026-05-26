class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let str of strs) {
            encoded += str.length + "#" + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        let size = str.length;
        while (i < size) {
            let j = i;
            while (j < str.length && str[j] !== "#") j++;

            let length = Number(str.slice(i, j));

            let word = str.slice(j + 1, j + 1 + length);

            result.push(word);

            i = j + 1 + length;
        }

        return result;
    }
}
