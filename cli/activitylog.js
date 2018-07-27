var inquirer = require('inquirer');
var PythonShell = require('python-shell');


inquirer
    .prompt([{
        type: 'list',
        name: 'clientType',
        message: 'activitylog cli - main menu',
        choices: ['start', 'read']
    }])
    .then(answers => {
        // If the user wants to read a file
        if (answers.clientType === 'start') {
          // Options
          var options = {
              pythonOptions: ['-u'], // get print results in real-time
              args: [0]
          };

          PythonShell.run('../activitylog.py', options, function (err, results) {
              if (err) throw err;
              // results is an array consisting of messages collected during execution
              console.log('results: %j', results);
          });
        }
        else {
            inquirer
                .prompt([{
                    type: 'list',
                    name: 'readOptions',
                    message: 'What would you like to do?',
                    choices: ['View all logfiles', 'Print logfile(s)']
                }])
                .then(answers => {
                    if (answers.readOptions === 'View all logfiles') {
                        // Get all logfiles (by commit)

                        // Options
                        var options = {
                            pythonOptions: ['-u'], // get print results in real-time
                            args: ['print']
                        };

                        PythonShell.run('../activitylog.py', options, function (err, results) {
                            if (err) throw err;
                            // results is an array consisting of messages collected during execution
                            console.log('results: %j', results);
                        });
                    } else if (answers.readOptions === 'Print logfile(s)') {
                        // Print logs
                        inquirer
                            .prompt([{
                                type: 'list',
                                name: 'printOption',
                                message: 'What would you like to print?',
                                choices: ['Single commit', 'Previous [n] commits']
                            }])
                            .then(answers => {
                              if (answers.printOption === 'Single commit') {
                                inquirer
                                    .prompt([{
                                        type: 'input',
                                        name: 'commitNumber',
                                        message: 'Enter commit number:'
                                    }])
                                    .then(answers => {
                                      // Python with commit number
                                      // Options
                                      var options = {
                                          pythonOptions: ['-u'], // get print results in real-time
                                          args: ['commit', answers.commitNumber]
                                      };

                                      PythonShell.run('../activitylog.py', options, function (err, results) {
                                          if (err) throw err;
                                          // results is an array consisting of messages collected during execution
                                          console.log('results: %j', results);
                                      });
                                    })
                              }
                              else {
                                inquirer
                                    .prompt([{
                                        type: 'input',
                                        name: 'previousN',
                                        message: 'How many previous records would you like?'
                                    }])
                                    .then(answers => {
                                      // Python with previous records
                                      // Options
                                      var options = {
                                          pythonOptions: ['-u'], // get print results in real-time
                                          args: ['print', answers.previousN]
                                      };

                                      PythonShell.run('../activitylog.py', options, function (err, results) {
                                          if (err) throw err;
                                          // results is an array consisting of messages collected during execution
                                          console.log('results: %j', results);
                                      });
                                    })
                              }
                            })
                          }
                        });
                      }
                    })
