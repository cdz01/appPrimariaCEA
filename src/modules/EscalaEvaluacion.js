function getEscala (pts) {
    if (pts >= 19) return 'A';
    if (pts >= 16 && pts <= 18) return 'B';
    if (pts >= 13 && pts <= 15) return 'C';
    if (pts >= 10 && pts <= 12) return 'D';
    if (pts >= 0 && pts <= 9) return 'E';
}

export {
    getEscala
}