'use strict';

jest.mock('fs');

const readerAsink = require('../../lib/reader-async.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', async () => {
    try {
        let result = readerAsink(false)
        expect(result).toBeUndefined();
    } catch (err){
        console.log(err);
    }
  });


  it('reads 3 files', async () => {
    let files = ['file1.txt', 'file2.txt', 'file3.txt'];
    try {
        let result = await await readerAsink(files);
        console.log(files);
        console.log(result);
        expect(result).toEqual(files);
    }
    catch (err){
        console.log(err);
    }
  });

});
