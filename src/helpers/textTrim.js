export const textTrim = (title) => {

    const shortened = title.split(" ");
    const newTitle = `${shortened[0]} ${shortened[1]}`;
    return newTitle;
};