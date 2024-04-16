import requests

def get_commit_date(repo_owner, repo_name, file_path, branch='master'):
    url = f'https://api.github.com/repos/{repo_owner}/{repo_name}/commits?path={file_path}&sha={branch}'
    response = requests.get(url)
    if response.status_code == 200:
        commit_info = response.json()[0]  # Assuming the first commit is the most recent one
        return commit_info['commit']['author']['date']
    else:
        print(f"Failed to retrieve commit date. Status code: {response.status_code}")
        return None

# Example usage
repo_owner = 'owner_username'
repo_name = 'repository_name'
file_path = 'path/to/your/file.txt'
commit_date = get_commit_date(repo_owner, repo_name, file_path)

if commit_date:
    print(f"The commit date of {file_path} is: {commit_date}")

"diff_url": "https://github.com/octocat/Hello-World/pull/1347.diff"
