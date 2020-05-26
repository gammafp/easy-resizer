import nextId from 'react-id-generator';

const generateId = (value = ''): string => {
    let i = 10;
    let out = Math.random();
    while (--i) {
        out += Math.random() * (1000 - 100) + 100 + Date.now();
    }
    const pref = value !== '' ? `${value}_` : ``;

    return nextId(`${pref}${Math.round(out).toString(32)}`);
};

export default generateId;
