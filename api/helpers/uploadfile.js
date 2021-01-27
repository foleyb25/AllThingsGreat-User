module.exports = {
  friendlyName: 'Uploadfile',
  description: 'Uploadfile something.',

  inputs: {
    file: {
      type: 'ref',
      description: 'The file I want to upload to AWS S3'
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

    badUpload: {
      description: 'Upload failed.'
    }

  },


  fn: async function (inputs, exits) {
    console.log("Trying to upload file with helper method..")

    const file = inputs.file

    // perform file upload
    const options = {
        adapter: require('skipper-better-s3'),
        key: 'AKIAJTQC6AKYM2EIHIOA',
        secret: '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',
        bucket: 'fullstacksocial-bucket',
        s3params: { ACL: 'public-read' }
    }

    file.upload(options, async (err, files) => {
        if (err) { 
          throw('uploadFailed')
        }

        const fileUrl = files[0].extra.Location
        return exits.success(fileUrl)
    })

  }


};

