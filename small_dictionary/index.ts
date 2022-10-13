type Words = {
  [key: string]: string | string[];
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  // class를 type처럼 사용할 수 있다
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      if (word.extraDef !== undefined) {
        this.words[word.term] = [`${word.def}`, `${word.extraDef}`];
      } else {
        this.words[word.term] = word.def;
      }
    }
  }
  def(term: string) {
    return this.words[term];
  }

  // 단어 업데이트(전체 수정)
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      if (word.extraDef !== undefined) {
        this.words[word.term] = `${word.def}, ${word.extraDef}`;
      } else {
        this.words[word.term] = word.def;
      }
    }
  }

  // 단어 삭제

  del(term: string) {
    // console.log("term",term); kimchi
    // console.log("this.words",this.words[term]); 한국 음식
    if (this.words[term] !== undefined) {
      delete this.words[term];
    }
  }

  // 단어 추가 정의 삭제
  delExtraDef(term: string) {
    if (this.words[term][1] !== undefined) {
      if (typeof this.words[term] === "object") {
        this.words[term] = this.words[term].slice(0, 1).toString();
      }
    }
  }
}

class Word {
  constructor(public term: string, public def: string, public extraDef?: string) {}
}

const kimchi = new Word("kimchi", "한국 음식");
const seoul = new Word("seoul", "한국 수도", "1000만 도시");

const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
dict.add(seoul);
dict.def("seoul");
// dict.del("kimchi")
dict.delExtraDef("seoul");
