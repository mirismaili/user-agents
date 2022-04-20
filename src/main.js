/**
 * Created on 1401/2/1 (2022/4/21).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */

export function clientAgent (userAgent) {
  let browserAndVersion = 'UNKNOWN'
  for (const browser in patterns) {
    const match = userAgent.match(patterns[browser])
    if (match) {
      browserAndVersion = browser + (match[2] ?? '')
      break
    }
  }
  return browserAndVersion + ' ' + userAgent.match(/\(.+?\)/)?.[0]
}

const patterns = {
  Edge: /\b(Edg\w*)(\/\S+)/,           // Check Edge    before Chrome and Safari
  Opera: /\b(OPR)(\/\S+)/,             // Check Opera   before Chrome and Safari
  Vivaldi: /\b(Vivaldi)(\/\S+)/,       // Check Vivaldi before Chrome and Safari
  Yandex: /\b(YaBrowser)(\/\S+)/,      // Check Yandex  before Chrome and Safari
  Chrome: /\b(Chrome|CriOS)(\/\S+)/,   // Check Chrome  before Safari
  Firefox: /\b(Firefox|FxiOS)(\/\S+)/, // Check Firefox before Safari
  Safari: /\b(Safari)(\/\S+)/,
  IE: /\bMS(IE)( [^;]+)/,
  'IE 11': /\b(Trident)\//,
}

// // test:
// import assert from 'node:assert/strict'
// import userAgents from '../res/user-agents.json' assert {type: 'json'}
//
// for (const browser in userAgents)
//   for (const userAgent of userAgents[browser])
//     assert.equal(clientAgent(userAgent), browser + clientAgent(userAgent).slice(browser.length))
