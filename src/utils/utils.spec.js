import { convertNumbersToLetters, searchForWordsInDictionary }  from './utils';

const resultConvertNumbersToLetters ={
  firstResult:[[ "aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc" ]],
  secondResult: [["jgg","jgh","jgi","jhg","jhh","jhi","jig","jih","jii", "kgg","kgh","kgi","khg","khh","khi","kig","kih","kii",
                "lgg","lgh","lgi","lhg","lhh","lhi","lig","lih","lii"]],
  thirdResult: [[
  "tdpt","tdpu","tdpv","tdqt","tdqu","tdqv","tdrt","tdru","tdrv", "tdst","tdsu","tdsv","tept","tepu","tepv","teqt","tequ","teqv",
  "tert","teru","terv","test","tesu","tesv","tfpt","tfpu","tfpv", "tfqt","tfqu","tfqv","tfrt","tfru","tfrv","tfst","tfsu","tfsv",
  "udpt","udpu","udpv","udqt","udqu","udqv","udrt","udru","udrv", "udst","udsu","udsv","uept","uepu","uepv","ueqt","uequ","ueqv",
  "uert","ueru","uerv","uest","uesu","uesv","ufpt","ufpu","ufpv", "ufqt","ufqu","ufqv","ufrt","ufru","ufrv","ufst","ufsu","ufsv",
  "vdpt","vdpu","vdpv","vdqt","vdqu","vdqv","vdrt","vdru","vdrv", "vdst","vdsu","vdsv","vept","vepu","vepv","veqt","vequ","veqv",
  "vert","veru","verv","vest","vesu","vesv","vfpt","vfpu","vfpv", "vfqt","vfqu","vfqv","vfrt","vfru","vfrv","vfst","vfsu","vfsv"
  ]],
  noMatchingWordsArray: [["jjg","jjh","jji","jkg","jkh","jki","jlg","jlh","jli","kjg","kjh","kji","kkg","kkh","kki","klg","klh","kli","ljg","ljh","lji","lkg","lkh","lki","llg","llh","lli"]]
};

describe('convertNumbersToLetters', () => {
  test('separates numbers to string and converts them to matching letters combinations', () => {
    expect(convertNumbersToLetters("22")).toEqual(resultConvertNumbersToLetters.firstResult)
    expect(convertNumbersToLetters("544")).toEqual(resultConvertNumbersToLetters.secondResult)
    expect(convertNumbersToLetters("8378")).toEqual(resultConvertNumbersToLetters.thirdResult)

  });
});

describe('searchForWordsInDictionary', () => {
  test('separates numbers to string and converts them to matching letters combinations', () => {
    expect(searchForWordsInDictionary(resultConvertNumbersToLetters.firstResult)).toEqual([ "ba", "ca"])
    expect(searchForWordsInDictionary(resultConvertNumbersToLetters.secondResult)).toEqual(
      ["jig"])
    expect(searchForWordsInDictionary(resultConvertNumbersToLetters.thirdResult)).toEqual(['test', 'vert', 'vest'])
    expect(searchForWordsInDictionary(resultConvertNumbersToLetters.noMatchingWordsArray)).toEqual(
      ["No matching words."])
  });
});
