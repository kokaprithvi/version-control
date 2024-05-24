import { Octokit } from "https://esm.sh/octokit";

// Use environment variable for authentication if running in a secure environment
const authToken = ""; // This should be securely stored and accessed

const octokit = new Octokit({
    auth: authToken
});

const contents = {
    content1: null,
    content2: null,
};

// Function to retrieve file contents
export async function fetchFile1() {
    const path = document.getElementById('path1').value;
    const sha = document.getElementById('sha1').value;

    try {
        const response = await octokit.rest.repos.getContent({
            owner: "TextInc",
            repo: "test_doc",
            path: path,
            ref: sha // Use 'ref' instead of 'commitHash'
        });

        // Decode content from base64
        const content = atob(response.data.content);
        contents.content1 = content;
        
        document.getElementById('first-file').innerText = "Fetched File: " + response.data.path;

        // Output file contents
        console.log(`Type of content: ${typeof content}`);
        console.log(content);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Function to retrieve file contents
export async function fetchFile2() {
    const path = document.getElementById('path2').value;
    const sha = document.getElementById('sha2').value;

    try {
        const response = await octokit.rest.repos.getContent({
            owner: "TextInc",
            repo: "test_doc",
            path: path,
            ref: sha // Use 'ref' instead of 'commitHash'
        });

        // Decode content from base64
        const content = atob(response.data.content);
        contents.content2 = content;
        
        document.getElementById('second-file').innerText = "Fetched File: " + response.data.path;

        // Output file contents
        console.log(`Type of content: ${typeof content}`);
        console.log(content);
    } catch (error) {
        console.error("Error:", error);
    }
}

//Function to get difference between 2 commits
export async function getDiff() {
    if (contents.content1 === null || contents.content2 === null) {
        console.error('Both files must be fetched before comparing.');
        return;
    }

    const body = {
        'left': contents.content1,
        'right': contents.content2,
        'diff_level': 'word',
    };

    try {
        const response = await fetch('https://api.diffchecker.com/public/text?output_type=html&email=kokaprithvi01@outlook.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            const diffHTML = await response.text();
            renderDiff(diffHTML);
        } else {
            console.error('Failed to fetch diff:', response.statusText);
        }
    } catch (error) {
        console.error('Error caught:', error);
    }
}

// Function to parse data and render it in the doc viewer.
export function renderDiff(html) {
    document.getElementById('teiViewer').innerHTML = html;
    console.log(html);
}

