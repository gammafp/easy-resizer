const clearName = (letters: string) => {
    const chars: any = {
        á: 'a',
        é: 'e',
        í: 'i',
        ó: 'o',
        ú: 'u',
        ñ: 'n',
        ' ': '_',
        ',': '',
        ';': '',
        '&': '',
        '/': '',
    };
    return letters
        .toString()
        .toLowerCase()
        .replace(/[áéíóúñ&;,// ]/g, (m: string) => chars[m])
        // .split(/(.png|.gif)/)[0]
        .trim()
        .trimLeft()
        .trimRight()
        .trimEnd();
};

export default clearName;
