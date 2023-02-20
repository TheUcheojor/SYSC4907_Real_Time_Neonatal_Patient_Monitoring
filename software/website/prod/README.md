### TO DEPLOY REACT APP IN AWS AMPLIFY
Amplify is nice as it auto deploys each time changes are pushed to main. In retrospect, could have possibly also deployed the backend in Amplify. The steps for Amplify deployment are quite straightforward.

1. Choose github repo and branch to deploy on
2. configure the deployment script. An example is shown below.

version: 1
frontend:
  phases:
    preBuild:
      commands:
        - pwd
        - cd software/website
        - npm ci
        - export REACT_APP_SERVER_URL="https://100.25.144.98"
        - export REACT_APP_SERVER_PORT=443
    build:
      commands: 
        - npm run build
  artifacts:
    baseDirectory: software/website/build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*

