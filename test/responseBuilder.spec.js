/* eslint-disable
    no-undef,
    sonarjs/no-duplicate-string
*/
const ResponseBuilder = require('../src/responseBuilder')

describe('ResponseBuilder', () => {
  it('Given response builder instance status code should be set to 200 as default', () => {
    const responseBuilder = new ResponseBuilder()
    expect(responseBuilder._statusCode).toBe(200)
  })

  it('Given response builder instance default headers should be set as expected', () => {
    const responseBuilder = new ResponseBuilder({
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block'
      }
    })
    expect(responseBuilder._headers).toEqual({
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block'
    })
  })

  it('Given response builder json with status set should return response as expected', () => {
    const responseBuilder = new ResponseBuilder({
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block'
      }
    })

    const response = responseBuilder.status(200).json()
    expect(response).toEqual({
      statusCode: 200,
      body: '{}',
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block'
      }
    })
  })

  it('Given response builder json with status and body set should return response as expected', () => {
    const responseBuilder = new ResponseBuilder({
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block'
      }
    })

    const response = responseBuilder.status(200).json({
      name: 'Luiz Freneda'
    })
    expect(response).toEqual({
      statusCode: 200,
      body: '{"name":"Luiz Freneda"}',
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block'
      }
    })
  })

  it('Given response builder json with status, additional headers, and body set should return response as expected', () => {
    const responseBuilder = new ResponseBuilder({
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block'
      }
    })

    const response = responseBuilder.status(200).headers({
      'Cache-Control': 'no-store'
    }).json({
      name: 'Luiz Freneda'
    })
    expect(response).toEqual({
      statusCode: 200,
      body: '{"name":"Luiz Freneda"}',
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block',
        'Cache-Control': 'no-store'
      }
    })
  })

  it('Given response builder base64 with status, additional headers, and body set should return response as expected', () => {
    const responseBuilder = new ResponseBuilder({
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block'
      }
    })

    const response = responseBuilder.status(200).headers({
      'Content-Type': 'image/png'
    }).base64('responseasy<3')

    expect(response).toEqual({
      statusCode: 200,
      body: 'cmVzcG9uc2Vhc3k8Mw==',
      isBase64Encoded: true,
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block',
        'Content-Type': 'image/png'
      }
    })
  })
})
