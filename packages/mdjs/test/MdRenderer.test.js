/* eslint-disable no-template-curly-in-string */

import chai from 'chai';
import fs from 'fs';
import { Parser } from '../src/commonmark/index.js';
import { MdRenderer } from '../src/MdRenderer.js';

const { expect } = chai;

describe('MdRenderer', () => {
  it('can handle headlines', () => {
    const input = `
# Component
This component is so nice.
## Features
[using a search](http://google.com)
`.trim();
    const parser = new Parser();
    const renderer = new MdRenderer();
    const mdAst = parser.parse(input);

    expect(renderer.render(mdAst)).to.equal(input);
  });

  it('works with the example MdRendererInput.md', () => {
    const input = fs.readFileSync('./test/MdRendererInput.md', 'utf-8');
    const parser = new Parser();
    const renderer = new MdRenderer();
    const mdAst = parser.parse(input);

    expect(renderer.render(mdAst)).to.equal(input.trim());
  });
});
