export const extractObjectPath = <ObjectPath extends object>(
    obj: ObjectPath
): ObjectPath => {
    const result = {} as ObjectPath;

    const recursivePathCalculation = (
        source: any,
        rootPath: string[] = [],
        target: any = result
    ) => {
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                const path = rootPath.slice();
                path.push(key);

                const value = source[key];
                if (value !== null && typeof value === "object") {
                    recursivePathCalculation(value, path, (target[key] = {}));
                } else {
                    target[key] = path.join(".");
                }
            }
        }
    };
    recursivePathCalculation(obj);

    return result;
};
