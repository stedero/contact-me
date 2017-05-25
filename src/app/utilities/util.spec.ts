import { TestBed } from '@angular/core/testing';
import { Util } from './util'

describe('Slugifier', () => {

  it('multiword mixed case', () => {
    expect(Util.slugify('Kaas met Gaten')).toEqual('kaas-met-gaten');
  });

  it('leading and trailing spaces', () => {
    expect(Util.slugify('     Kaas met Gaten    ')).toEqual('kaas-met-gaten');
  });

  it('multiple spaces', () => {
    expect(Util.slugify('Kaas      met     Gaten')).toEqual('kaas-met-gaten');
  });

  it('undefined', () => {
    expect(Util.slugify(undefined)).toEqual('');
  });

  it('spaces only', () => {
    expect(Util.slugify('             ')).toEqual('');
  });

});
