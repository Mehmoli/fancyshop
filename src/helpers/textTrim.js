export const textTrim = (title) => {
    const shortened = title.split(" ");
    return `${shortened[0]} ${shortened[1]}`;
};