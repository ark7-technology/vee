import { ProgContext, VeeVisitor } from './grammar';

VeeVisitor.prototype.visitProg = (ctx: ProgContext) => {
  return 'result';
  // if (!ctx) {
  // return '';
  // }
  // if (ctx.children) {
  // return ctx.children.map((child) => {
  // if (child.children && child.children.length != 0) {
  // return child.accept(this);
  // } else {
  // return child.getText();
  // }
  // });
  // }
};
