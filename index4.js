//named export - multiple can be used
export const name = "React";

export const getName = () => {
    return name;
};

//default export - only one can be used
export default () => {
    return name;
};