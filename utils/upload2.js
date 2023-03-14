const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const upload = async () => {
  try {
    const file = fs.createReadStream('./myfile.txt');
    const title = 'My file';

    const form = new FormData();
    form.append('title', title);
    form.append('file', file);

    const resp = await axios.post('http://localhost:3000/upload', form, {
      headers: {
        ...form.getHeaders(),
      },
    });

    if (resp.status === 200) {
      return 'Upload complete';
    }
  } catch (err) {
    return new Error(err.message);
  }
};

upload().then((resp) => console.log(resp));
