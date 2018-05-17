import superagent from 'superagent';

import { API_URL } from 'constants/api';

export function postAttempt({ emailAddress, password }) {
    return new Promise((resolve, reject) => {
        superagent.post(`${API_URL}/login`)
            .send({
                emailAddress,
                password
            })
            .end((err, res) => {
                if(err) {
                    reject(err);
                } else if (res.statusCode != 200) {
                    reject(err || `unsupported status code: ${res.statusCode}`);
                } else if (res.statusCode == 200) {
                    resolve(res.body);
                } else {
                    reject('unknown error');
                }
            });
    });
}

export default {
    postAttempt
}
