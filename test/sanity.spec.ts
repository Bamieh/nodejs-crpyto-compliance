/// <reference path="typings/globals.d.ts" />
import * as cryptoComplianceReviewTools from '../src';

describe('Sanity Check', function() {
  it('exports review tools', function() {
    expect(cryptoComplianceReviewTools).to.be.an("object")
  })
})