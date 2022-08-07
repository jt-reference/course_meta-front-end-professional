# Feature Branching

Before creating a new branch, always ensure you have the latest code by running a: _git pull_ command from the remote repo

Next, create the new branch by running: _git checkout -b feature"my-new-feature_ - the -b flag along with the checkout action creates the new branch.

To add new content, typically add a README.md file first by running: _git add ._ and _git add README.md_

Next, commit the new file with a message about the new branch by running: _git commit -m 'chore: created new branch with new README file'_

The file is now added to the local branch and you still need to push the file to the remote repo by running: _git push -u origin feature/my-new-feature_.

The changes will now be pushed to the repo on GitHub.

The next actions are to get the feature reviewed as part of a _pull request_.
