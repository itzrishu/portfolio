declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: any[];
    words: any[];
    lines: any[];
    revert(): void;
  }
}
