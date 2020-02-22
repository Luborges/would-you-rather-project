const verifyAuthentication = (store) => (next) => (action) => {
    if (!action.disconnect && !store.getState().authedUser && action.type.indexOf('loading-bar')===-1) {
        try {

            return alert("Ops. It seems your session has expired");
        }
        finally{
            //window.location.href = '/';
        }
    }
    return next(action);
}

export default verifyAuthentication;