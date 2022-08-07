# Git Blame

To run a git blame, enter the command: _git blame <\FILENAME>_

Git will return a list of all changes on the file.

Each line will start with a commit ID/HASH and then include the author, the date, the time when the change was made, the exact line number where the change occurred, and the actual content of the change.

The **ID** is a refernce ID of the commit. The same ID might appear in several lines. This happens when a single commit has been made by the same developer.

The **author** is the person who created the commit.

The **timestamp** is the date and time when the changes were committed.

The **line number** represents the location in the file or the exaft line where the changes were made.

The **content** is the code that was added to the file.

---

## To abbreviate output of the content, you can use a flags

Type _git blame_ followed by the flag _-L_, then specify the starting number and the ending line number, followed by the file name.

Here's the command: _git blame -L <\startinglinenumber,endinglinenumber> <\FILENAME>_

Ex: _git blame -L 5,15 setup.py_

This will give you a smaller subset starting at line 5 and ending at line 15.

---

Remember, _git blame_ will display the point where the file was changed. _git log_ will tell you the detail of the change.
