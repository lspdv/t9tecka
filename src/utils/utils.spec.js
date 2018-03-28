import { convertNumbersToLetters }  from './utils';

describe('convertNumbersToLetters', () => {
  test('separates numbers to string and converts them to matching letters combinations', () => {
    expect(convertNumbersToLetters('22')).toEqual([ [ 'aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc' ] ])
    expect(convertNumbersToLetters('544')).toEqual(
      [["jgg","jgh","jgi","jhg","jhh","jhi","jig","jih","jii",
      "kgg","kgh","kgi","khg","khh","khi","kig","kih","kii",
      "lgg","lgh","lgi","lhg","lhh","lhi","lig","lih","lii"]])
    expect(convertNumbersToLetters('8378')).toEqual([[
      "tdpt","tdpu","tdpv","tdqt","tdqu","tdqv","tdrt","tdru","tdrv",
      "tdst","tdsu","tdsv","tept","tepu","tepv","teqt","tequ","teqv",
      "tert","teru","terv","test","tesu","tesv","tfpt","tfpu","tfpv",
      "tfqt","tfqu","tfqv","tfrt","tfru","tfrv","tfst","tfsu","tfsv",
      "udpt","udpu","udpv","udqt","udqu","udqv","udrt","udru","udrv",
      "udst","udsu","udsv","uept","uepu","uepv","ueqt","uequ","ueqv",
      "uert","ueru","uerv","uest","uesu","uesv","ufpt","ufpu","ufpv",
      "ufqt","ufqu","ufqv","ufrt","ufru","ufrv","ufst","ufsu","ufsv",
      "vdpt","vdpu","vdpv","vdqt","vdqu","vdqv","vdrt","vdru","vdrv",
      "vdst","vdsu","vdsv","vept","vepu","vepv","veqt","vequ","veqv",
      "vert","veru","verv","vest","vesu","vesv","vfpt","vfpu","vfpv",
      "vfqt","vfqu","vfqv","vfrt","vfru","vfrv","vfst","vfsu","vfsv"
    ]])

  });
});
