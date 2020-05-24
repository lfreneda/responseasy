<div align="center">
  <h1>ResponsEasy</h1>
  <div><code>npm install responseasy --save</code></div>
  <br>
  <p>
    :ok_hand: An easy, simple and elegant http response builder for aws lambda functions with proxy integration.
  </p>
  <p>

[![Field Control ♥](https://img.shields.io/badge/Field%20Control-%20%20%20%20%20%20♥-blue.svg)](https://github.com/FieldControl)
[![Maintainability](https://api.codeclimate.com/v1/badges/f4fc8522bcc99c398576/maintainability)](https://codeclimate.com/github/lfreneda/responseasy/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f4fc8522bcc99c398576/test_coverage)](https://codeclimate.com/github/lfreneda/responseasy/test_coverage)

  </p>

  <p>
    Built with ❤
  </p>
</div>

---

## Why

When working with pure [aws lambda functions and proxy integration](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html) is always necessary to JSON.stringify payload, manipulate headers, status code and formatting response, which is verbose and nothing clean.

ResponsEasy is an easy, simple and elegant http response builder for aws lambda functions with proxy integration.

## Installation

This package is intended for server side use only.

```
npm install responseasy --save
```

## Usage

Initializing ResponsEasy with default headers:

```js
const res = require('responseasy')({
  headers: { // <-- Default headers 
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-store'
  }
})
```

Returning `200 - OK` using named getter `ok`:

```js
const response = res.ok.json({ name: 'Luiz' })
/*
    {
        statusCode: 200,
        body: '{"name":"Luiz"}',
        headers: {
            'X-Content-Type-Options': 'nosniff',
            'X-XSS-Protection': '1; mode=block',
            Pragma: 'no-cache',
            'Cache-Control': 'no-store'
        }
    }
*/
```

Returning `400 - Bad Request` using named getter `badRequest`:

```js
const response = res.badRequest.json({ error: true })
/*
    {
        statusCode: 400,
        body: '{"error":true}',
        headers: {
            'X-Content-Type-Options': 'nosniff',
            'X-XSS-Protection': '1; mode=block',
            Pragma: 'no-cache',
            'Cache-Control': 'no-store'
        }
    }
*/
```

Returning by a custom status code:

```js
const response = res.status(202).json({ id: '1863b459-bebb-4d18-9de5-b6ea857f1627' })
/*
    {
        statusCode: 202,
        body: '{"id":"1863b459-bebb-4d18-9de5-b6ea857f1627"}',
        headers: {
            'X-Content-Type-Options': 'nosniff',
            'X-XSS-Protection': '1; mode=block',
            Pragma: 'no-cache',
            'Cache-Control': 'no-store'
        }
    }
*/
```

<div align="right">
  <a href="https://github.com/lfreneda/responseasy/blob/master/test/responsEasy.spec.js" target="_blank">see all examples</a>
</div>

<div align="center">
  <br/>
  <br/>
</div>

<div align="center">
  <p>
    <sub>
      Made with ❤
    </sub>
  </p> 
</div>