#!/bin/bash

echo -e "\n  Lets build the backend deployment..."

cd ../../backend/src 
npm i
npm run tsc

echo -e "\n Now, lets build the frontend deployment..."

cd ../../website
npm i
npm run build

echo -e "\n  Copy the frontend deployment into the backend..."
cp prod/frontendBuild ../backend/prod/build
scp -i C:/Users/Ryan/.ssh/tca-ssh.pem -r C:/Users/Ryan/School/4thYear/Project/SYSC4907_Real_Time_Neonatal_Patient_Monitoring/software/backend/prod/build ubuntu@44.200.39.8:/home/ubuntu/SYSC4907_Real_Time_Neonatal_Patient_Monitoring/software/backend/

echo -e "\n  SSH into instance and restart instance..."
ssh -i C:/Users/Ryan/.ssh/tca-ssh.pem  ubuntu@ec2-44-200-39-8.compute-1.amazonaws.com 'sudo systemctl daemon-reload && sudo systemctl restart tca-backend.service'

echo -e "\n  Done! Frontend and Backend deployed on EC2 instance."