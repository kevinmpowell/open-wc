// import traverse from '@babel/traverse';
import { Parser as CmParser } from './commonmark/index.js';
import { processJs } from './processJs.js';
import { processStories } from './processStories.js';
// import { HtmlRenderer } from './HtmlRenderer.js';

export class Parser {
  constructor() {
    this.cmParser = new CmParser();
    // this.options = {
    //   defaultProcessors: [
    //     processJs,
    //     processStories
    //   ]
    // }
  }

  parse(source) {
    let data = {
      mdAst: this.cmParser.parse(source),
    };
    data = processJs(data);
    data = processStories(data);

    // const jsAst = parseJs(data.jsCode, { sourceType: 'module' });
    // traverse(jsAst, {
    //   ImportDeclaration(path) {
    //     path.scope.rename(path.node.specifiers[0].local.name, 'IngInput');
    //     path.node.specifiers[0].imported.name = 'IngInput';
    //     path.node.source.value = 'ing-web/forms.js';
    //   }
    // });

    // const output = generate(jsAst, { /* options */ });
    // console.log(output);
    // const renderer = new HtmlRenderer();

    // const html = renderer.render(data.mdAst);

    return data;
  }
}