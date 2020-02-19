const verifyAuthentication = (store) => (next) => (action) => {
    if (!action.disconnect && !store.getState().authedUser){
        window.location.href = '/';
        return alert("Ops. It seems your session has expired");  
    }
    return next(action);
}

export default verifyAuthentication;