import BroadCastChannel from 'broadcast-channel';
const channel = new BroadcastChannel('my-channel');


const isLogged = () : boolean => {
    return localStorage.getItem('token') ? true : false;
}

const logout = () => {
    localStorage.clear();
    channel.postMessage({type : 'LOGOUT'})
    window.location.href = window.location.origin + "/";
}

const  login = () => {
    let token = 'hellomynameistoken!';
    localStorage.setItem('token',token);
    channel.postMessage({type : 'LOGIN'})
    window.location.href = window.location.origin + "/admin";
}

const logoutFromAllTabs = () => {
    channel.onmessage = event => {
        if(event.data.type === "LOGOUT"){
            logout();
           return channel.close();
        }

        if(event.data.type === "LOGIN") {
            login();
            return channel.close();
        }
    }
}

export default {
    login,
    logout,
    isLogged,
    logoutFromAllTabs
}