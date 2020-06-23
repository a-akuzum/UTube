export const signup = user => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        date: { user }
    })
);

export const login = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        date: { user }
    })
);

export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE',
    })
);