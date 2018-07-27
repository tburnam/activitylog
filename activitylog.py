# Activity Log
import sys

def activityLogRunner():
    print("activitylog runner")

    # Creates .activitylog folder (if it doesn't exist already)

    # Reads most recent commit from .git folder, and creates first
    # <commit_number>.activitylog file (if it doesn't exist already)

    # Listens to directory

    # On .git update (only on new commit):
    # Create a new activitylog file

    # On file/folder create
    # add to current log

    # On file/folder delete
    # add to current log

    # On file modification
    # add to current log

    # On file save
    # add to current log on last save (handle duplicate modifcation/saves)


def activityLogReader(args):
    print("activitylog reader")
    print(args)
    # Looks for .activitylog folder

    # Reads arguments from users:
    # print = prints all commits (logfile names w/o the .logfile)
    # prev <int> = print the last <int> activity log files
    # commit <id> = print the activitylog for the <id> commit (<id>.activitylog)
    # (optional 2nd + 3rd argument) write <filename> = given either -n or -c, write results to <filename>



# Run
if (sys.argv[1] == '0'):
    activityLogRunner()
else:
    activityLogReader(sys.argv)
