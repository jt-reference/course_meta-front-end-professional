# Diff Commands

Diff is used to make compoarisons against fileson your local repo.

It can also be sued against commits and against branches.

To use the _diff_ command, enter: _git diff HEAD <\FILENAME>_

minus symbols tell you what the script was. plus symbols tell you what it is now.

In addition to individual files, you can also make comparisons against previous commits.

## To Compare Commits

Use the command: _git log_ to display a history of commits.

You can also use the _pretty_ flag so that each one is shown on one line

The entire command is: _git log --pretty=oneline_

Each commit will have it's own ID.

Perform a _diff_ command to compare the differences on the commits by entering: _git diff <\COMMIT ID>_

## To Compare Branches

If you type command: _git branch_ it will display all of the branches that are available in the repo.

You can then use the _git diff_ command to pass in your main branch, followed by your feature branch as your second option: ie, _git diff main feature/testing-branches_

This will display all of the changes that have occurred between the two.
