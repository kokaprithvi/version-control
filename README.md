# Version Control Web Application: TextInc

## The purpose of this project is to allow users to view textual differences between two documents. The documents can be either in PDF or TEI format. Users can also retrieve previously submitted documents that are stored on Github. Submissions must be approved by admin.

### Technologies included are: 
  - Brevo API - to trigger an email notification to admin when a file has been uploaded for submission.
  - Octokit API - to fetch file contents on GitHub, upload files to a repository on GitHub

## How to Install and Run the Project:
For octokit implementation to work (fetchFile1(), fetchFile2(), and run())
  Uses Octokit API. Octokit API Tokens must be retrieved through GitHub.
For email notification to work (emailNotif() on gitsubmit.html)
  Uses Brevo API. Account must be made with a valid sender email attached to Brevo account. 

## PDF to XML TEI

For converting PDF to XML on teiviewer.html a api key is needed from pdf.co

