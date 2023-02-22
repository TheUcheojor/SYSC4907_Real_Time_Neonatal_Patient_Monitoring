# This script builds the backend and frontend deployment. Then bundles them together and sends them to the specified remote server. Afterwhich, restarts the systemctl process running the deployment.

# CONFIGURE THESE BEFORE RUNNING
SERVER_USER='ubuntu'
SERVER='ec2-44-200-39-8.compute-1.amazonaws.com'

# frontend deployment code gets compiled statically, therefore the environment variables need to be set here
export REACT_APP_SERVER_URL=http://44.200.39.8
export REACT_APP_SERVER_PORT=3001

echo -e "\n  Lets build the backend deployment..."
cd ../backend/src 
rm -rf ../build
npm run tsc
# copy package.json so that we can execute dependency installation on server
cp package.json ../build

echo -e "\n Now, lets build the frontend deployment..."
cd ../../website
rm -rf frontendBuild
npm run build

echo -e "\n  Copy the frontend deployment into the backend..."
cp -r frontendBuild ../backend/build

echo -e "\n  Copy the deployment to the server..."
ssh -i C:/Users/Ryan/.ssh/tca-ssh.pem $SERVER_USER@$SERVER 'sudo mkdir -p tca-backend'
scp -q -i C:/Users/Ryan/.ssh/tca-ssh.pem -r C:/Users/Ryan/School/4thYear/Project/SYSC4907_Real_Time_Neonatal_Patient_Monitoring/software/backend/build ubuntu@44.200.39.8:/tmp
ssh -i C:/Users/Ryan/.ssh/tca-ssh.pem  $SERVER_USER@$SERVER 'sudo mv /tmp/build /home/ubuntu/tca-backend/build'

echo -e "\n  SSH into instance, install backend dependencies, then restart instance..."
ssh -i C:/Users/Ryan/.ssh/tca-ssh.pem  $SERVER_USER@$SERVER 'cd tca-backend/build
npm i --omit=dev 
sudo systemctl daemon-reload 
sudo systemctl restart tca-backend.service'

echo -e "\n  Done! Frontend and Backend deployed on EC2 instance."