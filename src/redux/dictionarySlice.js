import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    english: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ],
    cyrillic: [
        'а',
        'б',
        'в',
        'г',
        'д',
        'е',
        'ё',
        'ж',
        'з',
        'и',
        'й',
        'к',
        'л',
        'м',
        'н',
        'о',
        'п',
        'р',
        'с',
        'т',
        'у',
        'ф',
        'х',
        'ц',
        'ч',
        'ш',
        'щ',
        'ъ',
        'ы',
        'ь',
        'э',
        'ю',
        'я',
        'А',
        'Б',
        'В',
        'Г',
        'Д',
        'Е',
        'Ё',
        'Ж',
        'З',
        'И',
        'Й',
        'К',
        'Л',
        'М',
        'Н',
        'О',
        'П',
        'Р',
        'С',
        'Т',
        'У',
        'Ф',
        'Х',
        'Ц',
        'Ч',
        'Ш',
        'Щ',
        'Ъ',
        'Ы',
        'Ь',
        'Э',
        'Ю',
        'Я',
    ],
    japanese: [],
    special: [
        `!`,
        `@`,
        `#`,
        `$`,
        `%`,
        `^`,
        `&`,
        `*`,
        `+`,
        `~`,
        '`',
        `;`,
        `,`,
        `'`,
        `"`,
        `|`,
        `/`,
    ],
};

export const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {},
});

export const {} = dictionarySlice.actions;

export default dictionarySlice.reducer;

//     special: [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `+`, `~`, '`', `[`, `]`, `;`, `?`, `,`, `'`, `"`, `№`, `|`, `/`, '{', '}'],
