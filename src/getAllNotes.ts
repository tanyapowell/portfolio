/* eslint-disable @typescript-eslint/no-explicit-any */
function importAll(r: any) {
    return r.keys().map((fileName: any) => ({
        link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
        module: r(fileName),
    }));
}

export const notes = importAll(require.context('./pages/notes/', true, /\.mdx$/));
