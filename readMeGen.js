function readGen(ans) {
    function license(lic) {
        return lic == 'MIT' ?
            '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]' :
            lic == 'ISC' ?
            '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]' :
            lic == 'GNU' ?
            '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]' :
            lic == 'Apache' ?
            '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]' :
            '';
    };

    return `
    # ${ans.title}
    ----------------------------------------------------------------
    ## Licenses:
    ${license(ans.licenses)}
    ----------------------------------------------------------------    
    ## Description:
    ${ans.description}
    ----------------------------------------------------------------
    ## Table Of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    ----------------------------------------------------------------
    ## Installation:
    ${ans.installation}
    ----------------------------------------------------------------
    ## Usage:
    ${ans.usage}
    ----------------------------------------------------------------
    ## Credits:
    ${ans.contribution}
    ----------------------------------------------------------------
    ## Testing:
    ${ans.testing}
    ---------------------------------------------------------------- 
    
    ### Questions
    [GitHub](https://github.com/${ans.github})
    For any additional questions please contact me at ${ans.email}
    `

};

module.exports = readGen;
