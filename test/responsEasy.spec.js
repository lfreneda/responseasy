/* eslint-disable
    no-undef,
    sonarjs/no-duplicate-string
*/
const res = require('../src/responsEasy')({
  headers: {
    'X-Content-Type-Options': 'nosniff'
  }
})

describe('ResponsEasy', () => {
  it('given responseasy with custom status should return response as expected', () => {
    const response = res.status(200).json({
      name: 'Freneda'
    })
    expect(response).toEqual({
      statusCode: 200,
      body: '{"name":"Freneda"}',
      headers: {
        'X-Content-Type-Options': 'nosniff'
      }
    })
  })

  const testCases = [
    { name: 'continue', expectedCode: 100 },
    { name: 'switchingProtocols', expectedCode: 101 },
    { name: 'processing', expectedCode: 102 },
    { name: 'ok', expectedCode: 200 },
    { name: 'created', expectedCode: 201 },
    { name: 'accepted', expectedCode: 202 },
    { name: 'nonAuthoritativeInformation', expectedCode: 203 },
    { name: 'noContent', expectedCode: 204 },
    { name: 'resetContent', expectedCode: 205 },
    { name: 'partialContent', expectedCode: 206 },
    { name: 'multiStatus', expectedCode: 207 },
    { name: 'alreadyReported', expectedCode: 208 },
    { name: 'imUsed', expectedCode: 226 },
    { name: 'multipleChoices', expectedCode: 300 },
    { name: 'movedPermanently', expectedCode: 301 },
    { name: 'found', expectedCode: 302 },
    { name: 'seeOther', expectedCode: 303 },
    { name: 'notModified', expectedCode: 304 },
    { name: 'useProxy', expectedCode: 305 },
    { name: 'temporaryRedirect', expectedCode: 307 },
    { name: 'permanentRedirect', expectedCode: 308 },
    { name: 'badRequest', expectedCode: 400 },
    { name: 'unauthorized', expectedCode: 401 },
    { name: 'paymentRequired', expectedCode: 402 },
    { name: 'forbidden', expectedCode: 403 },
    { name: 'notFound', expectedCode: 404 },
    { name: 'methodNotAllowed', expectedCode: 405 },
    { name: 'notAcceptable', expectedCode: 406 },
    { name: 'proxyAuthenticationRequired', expectedCode: 407 },
    { name: 'requestTimeout', expectedCode: 408 },
    { name: 'conflict', expectedCode: 409 },
    { name: 'gone', expectedCode: 410 },
    { name: 'lengthRequired', expectedCode: 411 },
    { name: 'preconditionFailed', expectedCode: 412 },
    { name: 'payloadTooLarge', expectedCode: 413 },
    { name: 'requestURITooLong', expectedCode: 414 },
    { name: 'unsupportedMediaType', expectedCode: 415 },
    { name: 'requestedRangeNotSatisfiable', expectedCode: 416 },
    { name: 'expectationFailed', expectedCode: 417 },
    { name: 'misdirectedRequest', expectedCode: 421 },
    { name: 'unprocessableEntity', expectedCode: 422 },
    { name: 'locked', expectedCode: 423 },
    { name: 'failedDependency', expectedCode: 424 },
    { name: 'upgradeRequired', expectedCode: 426 },
    { name: 'preconditionRequired', expectedCode: 428 },
    { name: 'tooManyRequests', expectedCode: 429 },
    { name: 'requestHeaderFieldsTooLarge', expectedCode: 431 },
    { name: 'connectionClosedWithoutResponse', expectedCode: 444 },
    { name: 'unavailableForLegalReasons', expectedCode: 451 },
    { name: 'clientClosedRequest', expectedCode: 499 },
    { name: 'internalServerError', expectedCode: 500 },
    { name: 'notImplemented', expectedCode: 501 },
    { name: 'badGateway', expectedCode: 502 },
    { name: 'serviceUnavailable', expectedCode: 503 },
    { name: 'gatewayTimeout', expectedCode: 504 },
    { name: 'httpVersionNotSupported', expectedCode: 505 },
    { name: 'variantAlsoNegotiates', expectedCode: 506 },
    { name: 'insufficientStorage', expectedCode: 507 },
    { name: 'loopDetected', expectedCode: 508 },
    { name: 'notExtended', expectedCode: 510 },
    { name: 'networkAuthenticationRequired', expectedCode: 511 },
    { name: 'networkConnectTimeoutError', expectedCode: 599 }
  ]
  for (const testCase of testCases) {
    it(`given responseasy for ${testCase.name} should return ${testCase.expectedCode} as expected`, () => {
      const response = res[testCase.name].json({
        name: testCase.name
      })
      expect(response).toEqual({
        statusCode: testCase.expectedCode,
        body: `{"name":"${testCase.name}"}`,
        headers: {
          'X-Content-Type-Options': 'nosniff'
        }
      })
    })
  }
})
