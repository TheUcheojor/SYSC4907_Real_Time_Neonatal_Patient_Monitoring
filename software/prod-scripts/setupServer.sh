# This script configures the server to serve the TCA backend and frontend deployment through HTTP.
# !NOTE! This script was developed on Windows, and assumes the target server is running Ubuntu@18.0.4

# CONFIGURE THESE BEFORE RUNNING
SERVER_USER='ubuntu' # ubuntu ec2 instance
SERVER='ec2-3-230-125-189.compute-1.amazonaws.com'
TOKEN_SECRET="128 byte random string"
RESET_PASSWORD_TOKEN_SECRET="128 byte random string"
MYSQL_HOST="54.146.72.169"
MYSQL_USER="tca-backend"
MYSQL_PASSWORD="SYSC4907ROX"
SERVER_PORT="3001"
SERVER_URL="3.230.125.189"

# DO NOT EDIT, we use a systemctl process to run the node backend
SYSTEMCTL_CONFIG="[Unit]\nDescription=tca-backend\nAfter=multi-user.target\n\n[Service]\nExecStart=/usr/bin/node /home/ubuntu/tca-backend/build/app.js\nRestart=always\nRestartSec=10\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=tca-backend\nUser=ubuntu\nEnvironmentFile=/home/ubuntu/tca-backend/prod.env\n\n[Install]\nWantedBy=multi-user.target"

# DO NOT EDIT
ENV_CONFIG="TOKEN_SECRET=$TOKEN_SECRET\nRESET_PASSWORD_TOKEN_SECRET=$RESET_PASSWORD_TOKEN_SECRET\nMYSQL_HOST=$MYSQL_HOST\nMYSQL_USER=$MYSQL_USER\nMYSQL_PASSWORD=$MYSQL_PASSWORD\nSERVER_PORT=$SERVER_PORT\nSERVER_URL=$SERVER_URL"

# DO NOT EDIT, we use nginx to reverse proxy port 80 requests to the node server port
SERVER_PORT="3001"
NGINX_CONFIG='server {\n    listen 80;\n    server_name 127.0.0.1;\n\n    location / {\n        proxy_set_header   X-Forwarded-For \$remote_addr;\n        proxy_set_header   Host \$http_host;\n        proxy_pass         \"http://localhost:3001\";\n    }\n}'

sh deploy.sh
ssh -i C:/Users/Ryan/.ssh/tca-ssh.pem  $SERVER_USER@$SERVER "echo -e \"$SYSTEMCTL_CONFIG\" | sudo tee -i /etc/systemd/system/tca-backend.service > /dev/null
echo -e \"$ENV_CONFIG\" | sudo tee -i tca-backend/prod.env > /dev/null
sudo apt-get update
sudo apt-get install -y nginx
sudo rm /etc/nginx/sites-enabled/default
echo -e \"$NGINX_CONFIG\" | sudo tee -i /etc/nginx/sites-available/node > /dev/null
sudo ln -s /etc/nginx/sites-available/node /etc/nginx/sites-enabled/node
sudo systemctl enable nginx.service
sudo systemctl enable tca-backend.service
sudo systemctl daemon-reload 
sudo systemctl restart tca-backend.service
sudo systemctl restart nginx.service"

echo "Done! Server $SERVER is configured for deployment"
