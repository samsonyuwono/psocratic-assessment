export const SET_COOKIE = `${__filename}:SET_COOKIE`;

export function createCookieMiddleware(document) {
    return store => next => action => {
        if(action.type == SET_COOKIE) {
            document.cookie = `${action.key}=${action.value}`;
        }
        return next(action);
    }
}

export function setCookie({ key, value }) {
    return {
        key,
        type: SET_COOKIE,
        value
    }
}
