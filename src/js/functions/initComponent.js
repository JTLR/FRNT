export function initComponent(mod, elem, component) {
    if (mod && mod.default) {
        return new mod.default(elem);
    } else if (mod) {
        return new mod(elem);
    } else {
        throw new Error(`${component} component not found`);
    }
}
