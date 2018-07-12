import Http from "axios";
import Qs from "qs";
class Ajax {
    constructor() {
        this.http = Http;
    }
    get(url, pars, t) {
        return new Promise((resolve, reject) => {
            this.http
                .get(url, { params: pars, headers: { token: t } })
                .then(res => {
                    resolve(res.data);
                })
                .catch(res => {
                    reject(res.data);
                });
        });
    }
    post(url, pars, t) {
        return new Promise((resolve, reject) => {
            this.http
                .post(url, Qs.stringify(pars), {
                    headers: {
                        token: t,
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                .then(res => {
                    resolve(res.data);
                })
                .catch(res => {
                    reject(res.data);
                });
        });
    }
}

const http = new Ajax();
export default http;
