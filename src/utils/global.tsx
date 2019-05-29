const addGlobal = {
    maskStatus: false
};
const global = Object.assign(window, addGlobal);
console.log('global', global);
export default global;