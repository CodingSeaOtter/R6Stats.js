const https                                                           = require('https');
const {APP_IDS, HTTP_USER_AGENT, REGEX_HTTP_HEADER_JSON_CONTENT_TYPE} = require('./constants.js');

const getHeadersForRequest = (token, additional_headers = {}) => {
    return Object.assign({
        'User-Agent'   : HTTP_USER_AGENT,
        'Ubi-AppId'    : APP_IDS.api,
        'Content-Type' : 'application/json; charset=UTF-8',
        'Authorization': token
    }, additional_headers);
};

const getResponse = (request) => {
    return new Promise((resolve, reject) => {
        if (request.res) {
            return resolve(request.res);
        }

        request.on('response', resolve);
    });
};

const readResponse = (response) => {
    return new Promise((resolve, reject) => {
        const {statusCode: status_code, headers: {'content-type': content_type}} = response;

        if (!REGEX_HTTP_HEADER_JSON_CONTENT_TYPE.test(content_type)) {
            //TODO Better Error
            return reject(new Error('InvalidContentType: ' + content_type));
        }

        let raw_body = '';

        response.setEncoding('utf8');
        response.on('data', chunk => {
            raw_body += chunk;
        });
        response.on('error', error => reject(error));
        response.on('end', () => {
            let body;
            try {
                body = JSON.parse(raw_body);

                if (status_code !== 200) {
                    switch (status_code) {
                        case 429:
                            return reject(new Error('RateLimit: ' + body.message));
                        case 400:
                            return reject(new Error('BadRequest: ' + body.message || body.errorCode));
                    }

                    switch (body.errorCode) {
                        case 1:
                            return reject(new Error(`MissingHeader(${status_code}/${body.errorCode}): ${body.message}`));
                        case 2:
                            return reject(new Error(`MissingCredentials(${status_code}/${body.errorCode}): ${body.message}`));
                        case 3:
                            return reject(new Error(`InvalidCredentials(${status_code}/${body.errorCode}): ${body.message}`));
                        case 1100:
                        case 1101:
                            return reject(new Error(`RateLimit(${status_code}/${body.errorCode}): ${body.message}`));
                        default:
                            return reject(new Error(`FuckIfIKnow(${status_code}/${body.errorCode}): ${body.message}`));
                    }
                }

                return resolve(body);
            } catch (e) {
                return reject(e);
            }
        });
    });
};

const sendPostData = (request, body) => {
    return new Promise((resolve, reject) => {
        try {
            request.write(body);

            return resolve(request);
        } catch (e) {
            return reject(e);
        }
    });
};

const finalizeRequest = (request) => {
    return new Promise((resolve, reject) => {
        try {
            request.end();
        } catch (e) {
            return reject(e);
        }

        return resolve(request);
    });
};

const request = (url, options = {}) => {
    console.log('Requesting:', url);
    return new Promise(resolve => {
        return resolve(https.request(url, options));
    });
};

const get = ({url, token, headers = {}}) => {
    return request(url, {
        method : 'GET',
        headers: getHeadersForRequest(token, headers)
    }).then(request => {
        return finalizeRequest(request);
    }).then(request => {
        return getResponse(request);
    }).then(response => {
        return readResponse(response);
    });
};

const post     = ({url, token, headers = {}, body}) => {
    if (typeof body !== 'string') {
        body = JSON.stringify(body, null, 2);
    }

    headers = Object.assign({
        'Content-Length': Buffer.byteLength(body)
    }, headers);

    return request(url, {
        method : 'POST',
        headers: getHeadersForRequest(token, headers)
    }).then(request => {
        return sendPostData(request, body);
    }).then(request => {
        return finalizeRequest(request);
    }).then(request => {
        return getResponse(request);
    }).then(response => {
        return readResponse(response);
    });
};
module.exports = {
    get,
    post
};