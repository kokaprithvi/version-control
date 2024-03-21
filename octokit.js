import { Octokit } from "https://esm.sh/octokit";

function encodeBase64(content) {
  return btoa(unescape(encodeURIComponent(content)));
}

export async function run(e){
  const uploadedFile = document.getElementById("file-upload").files[0];
  const fileReader = new FileReader();
  const content = { base64Encode: "" };
  fileReader.onloadend = () => {
    content.base64Encode = fileReader.result
        .replace('data:', '')
        .replace(/^.+,/, '');
  };
  fileReader.readAsDataURL(uploadedFile);

  const octokit = new Octokit({
    auth: "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",
  });
  
  try {
    const response = await octokit.rest.repos.createOrUpdateFileContents({
      owner: 'kokaprithvi',
      repo: 'version-control',
      path: `${uploadedFile.name}`,
      branch: 'newUpload',
      message: 'file uploaded with octokit',
      committer: {
        name: 'kokaprithvi',
        email: 'kokaprithvi01@outlook.com'
      },
      author: {
        name: 'kokaprithvi',
        email: 'kokaprithvi01@outlook.com'
      },
      content: content.base64Encode,
    });
    console.log(response);
  } catch (err) {
      console.log(`Error caught: ${err}`)
  };
  
};
