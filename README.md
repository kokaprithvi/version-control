# Version Control Web Application: TextInc

## The purpose of this project is to allow users to view textual differences between two documents. The documents can be either in PDF or TEI format. Users can also retrieve previously submitted documents that are stored on Github. Submissions must be approved by admin.

### Site Functionality
The website has a homepage with the title of our web application, a search page that allows the user to access documents from different GitHub repositories in a PDF viewer and also a button that converts documents from PDFS to TEI format, an upload page where the user can upload files to a GitHub repository and also sends an email notifciation to a specified email address when this file is uploaded, a diffchecker page that compares two different commits/versions of the same file and visualizes any word/spelling differences between them by highlighting the lines and keywords.


#### Technologies included are: 
  - Brevo API - to trigger an email notification to admin when a file has been uploaded for submission.
  - Octokit API - to fetch file contents on GitHub, upload files to a repository on GitHub.
  - PDF.Co API - to convert pdf files to XML.

##### How to Install and Run the Project:
For octokit implementation to work (fetchFile1(), fetchFile2(), and run())
  Uses Octokit API. Octokit API Tokens must be retrieved through GitHub. API Tokens can be generated through developers settings.
For email notification to work (emailNotif() on gitsubmit.html)
  Uses Brevo API. Account must be made with a valid sender email attached to Brevo account. 

###### PDF to XML TEI

For converting PDF to XML on teiviewer.html a api key is needed from pdf.co

