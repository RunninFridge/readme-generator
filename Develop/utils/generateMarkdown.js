//Basic layout was taken off google.
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  ![license](https://img.shields.io/badge/license-${data.license}-brightgreen)
  ## Table of Contents
  - [Description](#descripton)
  - [Installation](#install)
  - [Usage](#use)
  - [Contribution](#credits)
  - [Testing](#testing)

  ## Description:
  ${data.descripton}
  ## Installation:
  ${data.install}
  ## Usage:
  ${data.use}
  ## License:
  ${data.license}
  ## Contribution:
  ${data.credits}
  ## Testing:
  ${data.test}
  ## Contact information:
    -Github Username: ${data.git}
    -Email: ${data.email}`
}

module.exports = generateMarkdown