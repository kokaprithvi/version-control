import { Octokit } from "https://esm.sh/octokit";

export async function run(e) {
  const uploadedFile = document.getElementById("file-upload").files[0];

  // Function to convert file to base64
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result
        .replace('data:', '')
        .replace(/^.+,/, '');
      resolve(base64String);
    };
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });

  const contentBase64 = await toBase64(uploadedFile); 
  
  //Uses GitHub API to give permission to repositories.
  const octokit = new Octokit({
    auth: "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", 
  });

  //Try/Catch, logs the error if createOrUpdate fails.
  try {
    const response = await octokit.rest.repos.createOrUpdateFileContents({
      owner: 'kokaprithvi',
      repo: 'version-control',
      path: uploadedFile.name, 
      branch: 'comparingCommit',
      message: 'file uploaded with octokit',
      committer: {
        name: 'kokaprithvi',
        email: 'kokaprithvi01@outlook.com'
      },
      author: {
        name: 'kokaprithvi',
        email: 'kokaprithvi01@outlook.com'
      },
      content: contentBase64,
    });
    console.log(response);
  } catch (err) {
      console.error(`Error caught: ${err}`);
  }
}
