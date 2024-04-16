// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from "https://esm.sh/octokit";

export async function run(e) {
const octokit = new Octokit({
    auth: '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'
  })
  //Tries to send request out
   try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/compare/{basehead}', {
        owner: 'kokaprithvi',
        repo: 'version-control',
        basehead: 'kokaprithvi:be7476414e6dd8574ec398f3ad6412c2a31db30a...kokaprithvi:333140e0847ec09bfa4a5332425faa5b30586458',
        headers: {
          "Accept": "application/vnd.github.diff", 
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
    console.log(response);
  } 
  catch (err) {
      console.error(`Error caught: ${err}`);
  }
}
