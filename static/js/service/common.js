let url_prefix = "http://" + window.location.host;
if (axios) {
    axios.defaults.withCredentials = true;
    axios.defaults.crossDomain = true;
    axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
}