# API Github
Fetching the user data of a provided user from Github API

## Instructions for use
Follow the above instructions

### Instalation
```
    npm install gtinoco-project-1b-api-github
```

### Use
```javascript
    const apiG =  require('gtinoco-project-1b-api-github');

    apiG.fetchUserData('genarot').then(
        resp => resp.console.log('The response', resp);
        )
        .catch(_err => console.log('error',_err);)
```
