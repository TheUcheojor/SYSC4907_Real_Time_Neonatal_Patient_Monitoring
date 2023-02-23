# This script builds the backend and frontend deployment. Then bundles them together and sends them to the specified remote server. Afterwhich, restarts the systemctl process running the deployment.

if [ $# -ne 3 ]; then
    echo "Usage: $0 <remote_host_ip> <server_port> <remote host ssh key path>"
    echo "      e.g.: $0 100.200.300.400 3001 ~/.ssh/tca-ssh.pem"
    exit 1
fi

SERVER=$1
SSH_KEY_PATH=$3

# CONFIGURE THESE AS DESIRED (be cautious)
SERVER_USER='ubuntu'

# frontend deployment code gets compiled statically, therefore the environment variables need to be set here
export REACT_APP_SERVER_URL=http://$SERVER
export REACT_APP_SERVER_PORT=$2

echo -e "\n  Lets build the backend deployment..."
cd ../backend/src 
rm -rf ../build
npm run tsc --noEmitOnError
# copy package.json so that we can execute dependency installation on server
cp package.json ../build

echo -e "\n Now, lets build the frontend deployment..."
cd ../../website
rm -rf frontendBuild
npm run build

echo -e "\n  Copy the frontend deployment into the backend..."
cp -r frontendBuild ../backend/build

echo -e "\n  Copy the deployment to the server..."
ssh -i $SSH_KEY_PATH $SERVER_USER@$SERVER 'sudo mkdir -p tca-backend
sudo rm -rf tca-backend/build
'
scp -q -i $SSH_KEY_PATH -r ../backend/build $SERVER_USER@$SERVER:/tmp
ssh -i $SSH_KEY_PATH $SERVER_USER@$SERVER 'sudo mv /tmp/build /home/ubuntu/tca-backend/build'

echo -e "\n  SSH into instance, install backend dependencies, then restart instance..."
ssh -i $SSH_KEY_PATH $SERVER_USER@$SERVER 'cd tca-backend/build
npm i --omit=dev
sudo systemctl restart tca-backend.service'

echo -e "\n  Done! Frontend and Backend deployed on EC2 instance."