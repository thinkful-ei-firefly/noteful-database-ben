function makeFolderArray() {
  return [
    {
      folder_name: '1st folder'
    },
    {
      folder_name: '2nd folder'
    }
  ];
}

function makeMaliciousFolder() {
  const maliciousFolder = {
    id: 911,
    folder_name: 'Naughty naughty very naughty <script>alert("xss");</script>'
  };
  const expectedFolder = {
    ...maliciousFolder,
    folder_name:
      'Naughty naughty very naughty &lt;script&gt;alert("xss");&lt;/script&gt;'
  };
  return {
    maliciousFolder,
    expectedFolder
  };
}

module.exports = {
  makeFolderArray,
  makeMaliciousFolder
};
