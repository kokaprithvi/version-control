import { Octokit } from "https://esm.sh/octokit";

// Create an Octokit instance
const octokit = new Octokit({
    auth: "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", 
});


// Function to retrieve file contents
export async function run(e) {
    try {
        // Retrieve file contents
        const response = await octokit.rest.repos.getContent({
            owner: "TextInc",
            repo: "test_doc",
            path: "example.xml"
        });

        // Decode content from base64 using atob
        const content = await atob(response.data.content);
        console.log(`Type of content: ${typeof content}`);
        // Output file contents
        console.log(content);
    } catch (error) {
        console.error("Error:", error);
    }
};