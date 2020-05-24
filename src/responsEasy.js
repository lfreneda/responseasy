const ResponseBuilder = require('./responseBuilder')

class ResponsEasy {
  constructor ({ headers }) {
    this.headers = headers || undefined
  }

  status (code) {
    return new ResponseBuilder().headers(this.headers).status(code)
  }

  get continue () {
    return this.status(100)
  }

  get switchingProtocols () {
    return this.status(101)
  }

  get processing () {
    return this.status(102)
  }

  get ok () {
    return this.status(200)
  }

  get created () {
    return this.status(201)
  }

  get accepted () {
    return this.status(202)
  }

  get nonAuthoritativeInformation () {
    return this.status(203)
  }

  get noContent () {
    return this.status(204)
  }

  get resetContent () {
    return this.status(205)
  }

  get partialContent () {
    return this.status(206)
  }

  get multiStatus () {
    return this.status(207)
  }

  get alreadyReported () {
    return this.status(208)
  }

  get imUsed () {
    return this.status(226)
  }

  get multipleChoices () {
    return this.status(300)
  }

  get movedPermanently () {
    return this.status(301)
  }

  get found () {
    return this.status(302)
  }

  get seeOther () {
    return this.status(303)
  }

  get notModified () {
    return this.status(304)
  }

  get useProxy () {
    return this.status(305)
  }

  get temporaryRedirect () {
    return this.status(307)
  }

  get permanentRedirect () {
    return this.status(308)
  }

  get badRequest () {
    return this.status(400)
  }

  get unauthorized () {
    return this.status(401)
  }

  get paymentRequired () {
    return this.status(402)
  }

  get forbidden () {
    return this.status(403)
  }

  get notFound () {
    return this.status(404)
  }

  get methodNotAllowed () {
    return this.status(405)
  }

  get notAcceptable () {
    return this.status(406)
  }

  get proxyAuthenticationRequired () {
    return this.status(407)
  }

  get requestTimeout () {
    return this.status(408)
  }

  get conflict () {
    return this.status(409)
  }

  get gone () {
    return this.status(410)
  }

  get lengthRequired () {
    return this.status(411)
  }

  get preconditionFailed () {
    return this.status(412)
  }

  get payloadTooLarge () {
    return this.status(413)
  }

  get requestURITooLong () {
    return this.status(414)
  }

  get unsupportedMediaType () {
    return this.status(415)
  }

  get requestedRangeNotSatisfiable () {
    return this.status(416)
  }

  get expectationFailed () {
    return this.status(417)
  }

  get misdirectedRequest () {
    return this.status(421)
  }

  get unprocessableEntity () {
    return this.status(422)
  }

  get locked () {
    return this.status(423)
  }

  get failedDependency () {
    return this.status(424)
  }

  get upgradeRequired () {
    return this.status(426)
  }

  get preconditionRequired () {
    return this.status(428)
  }

  get tooManyRequests () {
    return this.status(429)
  }

  get requestHeaderFieldsTooLarge () {
    return this.status(431)
  }

  get connectionClosedWithoutResponse () {
    return this.status(444)
  }

  get unavailableForLegalReasons () {
    return this.status(451)
  }

  get clientClosedRequest () {
    return this.status(499)
  }

  get internalServerError () {
    return this.status(500)
  }

  get notImplemented () {
    return this.status(501)
  }

  get badGateway () {
    return this.status(502)
  }

  get serviceUnavailable () {
    return this.status(503)
  }

  get gatewayTimeout () {
    return this.status(504)
  }

  get httpVersionNotSupported () {
    return this.status(505)
  }

  get variantAlsoNegotiates () {
    return this.status(506)
  }

  get insufficientStorage () {
    return this.status(507)
  }

  get loopDetected () {
    return this.status(508)
  }

  get notExtended () {
    return this.status(510)
  }

  get networkAuthenticationRequired () {
    return this.status(511)
  }

  get networkConnectTimeoutError () {
    return this.status(599)
  }
}

module.exports = ({ headers }) => {
  return new ResponsEasy({ headers })
}
