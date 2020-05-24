class ResponseBuilder {
  constructor ({ headers } = {}) {
    this._statusCode = 200
    this._headers = headers || undefined
  }

  status (code) {
    this._statusCode = code
    return this
  }

  headers (headers) {
    this._headers = {
      ...this._headers || {},
      ...headers
    }
    return this
  }

  json (responseBody) {
    return {
      statusCode: this._statusCode,
      body: JSON.stringify(responseBody || {}),
      headers: this._headers || undefined
    }
  }

  base64 (responseBody) {
    return {
      statusCode: this._statusCode,
      body: Buffer.from(responseBody).toString('base64'),
      headers: this._headers,
      isBase64Encoded: true
    }
  }
}

module.exports = ResponseBuilder
