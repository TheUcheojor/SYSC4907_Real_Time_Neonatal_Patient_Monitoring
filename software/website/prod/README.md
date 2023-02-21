### TO DEPLOY REACT APP IN AWS AMPLIFY

Amplify is nice as it auto deploys each time changes are pushed to main. In retrospect, could have possibly also deployed the backend in Amplify. The steps for Amplify deployment are quite straightforward.

1. Choose github repo and branch to deploy on
2. configure the deployment script. An example is shown below.

version: 1
frontend:
phases:
preBuild:
commands: - pwd - cd software/website - npm ci - export REACT_APP_SERVER_URL="https://100.25.144.98" - export REACT_APP_SERVER_PORT=443
build:
commands: - npm run build
artifacts:
baseDirectory: software/website/build
files: - '**/\*'
cache:
paths: - node_modules/**/\*

in backend `npm run tsc`

in website `npm run build`

move web build folder into backend build folder then from backend

scp -i C:\Users\Ryan\.ssh\tca-ssh.pem -r C:\Users\Ryan\School\4thYear\Project\SYSC4907_Real_Time_Neonatal_Patient_Monitoring\software\backend\src\build ubuntu@44.200.39.8:/home/ubuntu/SYSC4907_Real_Time_Neonatal_Patient_Monitoring/software/backend/src/

setup nginx reverse proxy to forward port 80 traffic to node server port 

server {
    listen 80;

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         "http://localhost:3001";
    }
}