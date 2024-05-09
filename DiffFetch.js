import { Octokit } from "https://esm.sh/octokit";

// Create an Octokit instance
const octokit = new Octokit({
    auth: "" // Use environment variable for authentication
});

const contents = {
    content1: null,
    content2: null,
};


// contentObject of type:
// {
//   owner: "Example_Owner",
//   repo: "example_repo",
//   path: "example_path.xml",
//   ref: "example_ref",
// }
/*
{
    owner: "TextInc",
    repo: "test_doc",
    path: "A89.xml",
    ref: "39075fdb9fc8f42ba9eb70c5f395ed50617b8004" // Use 'ref' instead of 'commitHash'
}
export async function run(e, contentObject) {

}
*/

// Function to retrieve file contents
export async function fetchFile1(e) {
    try {
        // Retrieve file contents
        const response = await octokit.rest.repos.getContent({
            owner: "TextInc",
            repo: "test_doc",
            path: "A89.xml",
            ref: "8b1f18a97e20b921e3d0b8b67766f2b520535733" // Use 'ref' instead of 'commitHash'
        });

        // Decode content from base64 using Buffer
        // Decode content from base64 using atob
        const content = await atob(response.data.content);
        contents.content1 = content;
        
        document.getElementById('first-file').innerText = "Fetched File: A89.xml";

        // Output file contents
        console.log(`Type of content: ${typeof content}`);
        console.log(content);
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function fetchFile2(e) {
        try {
            // Retrieve file contents
            const response = await octokit.rest.repos.getContent({
                owner: "TextInc",
                repo: "test_doc",
                path: "A89.xml",
                ref: "39075fdb9fc8f42ba9eb70c5f395ed50617b8004" // Use 'ref' instead of 'commitHash'
            });

        // Decode content from base64 using Buffer
        // Decode content from base64 using atob
        const content = await atob(response.data.content);
        contents.content2 = content;

        document.getElementById('second-file').innerText = "Fetched File: A89.xml";

        // Output file contents
        console.log(`Type of content: ${typeof content}`);
        console.log(content);
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getDiff() {

    let contentsHasNull = false;

    for (const key in contents) {
        if (contents[key] === null) {
            contentsHasNull = true;
        }
    }

    if (!contentsHasNull) {
        const body = {
            'left': `${contents.content1}`,
            'right': `${contents.content2}`,
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
        };
    };
};

// Function to parse data and render it in the doc viewer.
export function renderDiff(html) {
    // Insert the rendered content into the viewer
    document.getElementById('teiViewer').innerHTML = html;

    console.log(html);
}

export function adjustZoom(zoomDelta) {
    const teiContentElement = document.getElementById('teiViewer');
    let currentFontSize = parseInt(window.getComputedStyle(teiContentElement).fontSize);
    currentFontSize += zoomDelta;
    console.log(currentFontSize);
    teiContentElement.style.fontSize = `${currentFontSize}px`;
}