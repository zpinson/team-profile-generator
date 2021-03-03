// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Choice = require("inquirer/lib/objects/choice");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

// const members = [];
// const idArray = [];

function menu () {
   function createManager () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'what is the team manager name?',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return 'please enter at least one character'
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'please inter manager  id',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return 'please enter a valid id'
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'please enter manager email address',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return 'please enter a valid email'
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'please enter manager office number',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return 'please enter a valid email'
            }
        },
        {
            type: 'list',
            name: 'choice',
            message: 'do you want to add',
            choices: ['engineer', 'intern', 'finish building my team'],
            
            
       
        },
         
    ]).then((inquirerResponses) => {
        if(inquirerResponses.choice === 'engineer'){
           createEngineer()
        }else if (inquirerResponses.choice === 'intern'){
            createIntern()
        }else{
console.log('generating your readme')
    }
})
} 
function createEngineer () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'what is the engineer name?',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return 'please enter at least one character'
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'please enter engineer id',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return 'please enter a valid id'
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'please enter engineer email address',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return 'please enter a valid email'
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'please enter engineer GitHub username',
            validate: answer => {
            if (answer !== '') {
                return true
            }
            return 'please enter a valid GitHub username'
        }
        },
        {
            type: 'list',
            name: 'choice',
            message: 'do you want to add',
            choices: ['engineer', 'intern', 'finish building my team'],
                
              
            
           
        },
        
    ]).then((inquirerResponses) => {
        if(inquirerResponses.choice === 'engineer'){
           createEngineer()
        }else if (inquirerResponses.choice === 'intern'){
            createIntern()
        }else{
console.log('generating your readme')
    }
})
    
} 

function createIntern () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'what is the intern name?',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return 'please enter at least one character'
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'please enter intern id',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return 'please enter a valid id'
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'please enter intern email address',
            validate: answer => {
                if (answer !== '') {
                    return true
                }
                return 'please enter a valid email'
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'please enter intern school name',
            validate: answer => {
            if (answer !== '') {
                return true
            }
            return 'please enter a valid school name'
        }
        },
        {
            type: 'list',
            name: 'choice',
            message: 'do you want to add',
            choices: ['engineer', 'intern', 'finish building my team'],
           
        }
        
    ]).then((inquirerResponses) => {
        if(inquirerResponses.choice === 'engineer'){
           createEngineer()
        }else if (inquirerResponses.choice === 'intern'){
            createIntern()
        }else{
console.log('generating your readme')
    }
})
} 
createManager()
}


    

menu();



// function init() {
//     inquirer.prompt(questionsManager).then((inquirerResponses) => {
//         if(questionsManager.choices === 'engineer'){
//             inquirer.prompt(questionEngineer)
//         }else if (questionsManager.choices === 'intern'){
//             inquirer.prompt(questionIntern)
//         }else{
// console.log('generating your readme')
//     writeToFile('README.md', generateMarkdown({ ...inquirerResponses}))
//         }
    
// })
// init();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
