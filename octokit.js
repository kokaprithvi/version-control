import { Octokit } from "https://esm.sh/octokit";

function encodeBase64(content) {
  return btoa(unescape(encodeURIComponent(content)));
}

export async function run(e){
  const selectedFile = encodeBase64(document.getElementById("file-upload").files[0]);

  const octokit = new Octokit({
    auth: "",
  });

  try {
    const response = await octokit.rest.repos.createOrUpdateFileContents({
      owner: 'kokaprithvi',
      repo: 'version-control',
      path: '',
      message: 'file uploaded with octokit',
      committer: {
        name: 'kokaprithvi',
        email: 'kokaprithvi01@outlook.com'
      },
      content: selectedFile,
    });
    console.log(response);
  } catch (err) {
      console.log(`Error caught: ${err}`)
  };
};
