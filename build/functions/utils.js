export function defineRoutes(handler) {
    return (app, _, done) => {
        handler(app);
        done();
    };
}
