# This script configures the server to serve the TCA backend and frontend deployment through HTTP.
# !NOTE! This script was developed on Windows, and assumes the target server is running Ubuntu@18.0.4

if [ $# -ne 3 ]; then
    echo "Usage: $0 <remote_host_ip> <desired server port> <remote host ssh key path (e.g. ~/.ssh/tca-ssh.pem)>"
    exit 1
fi

SERVER=$1
SERVER_PORT=$2
SSH_KEY_PATH=$3

# CONFIGURE THESE AS DESIRED (be cautious)
SERVER_USER='ubuntu'

MYSQL_USER="tca-prod"
MYSQL_DATABASE="tca_db"
MYSQL_PASSWORD="db_pw"

# DO NOT EDIT, we use a systemctl process to run the node backend
SYSTEMCTL_CONFIG="[Unit]\nDescription=tca-backend\nAfter=multi-user.target\n\n[Service]\nExecStart=/usr/bin/node /home/ubuntu/tca-backend/build/app.js\nRestart=always\nRestartSec=10\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=tca-backend\nUser=ubuntu\nEnvironmentFile=/home/ubuntu/tca-backend/prod.env\n\n[Install]\nWantedBy=multi-user.target"

# DO NOT EDIT
ENV_CONFIG="TOKEN_SECRET=$(openssl rand -hex 128)\nRESET_PASSWORD_TOKEN_SECRET=$(openssl rand -hex 128)\nMYSQL_HOST=localhost\nMYSQL_USER=$MYSQL_USER\nMYSQL_PASSWORD=$MYSQL_PASSWORD\nSERVER_PORT=$SERVER_PORT\nSERVER_URL=$SERVER"

# DO NOT EDIT, we use nginx to reverse proxy port 80 requests to the node server port
NGINX_CONFIG='server {\n    listen 80;\n    client_max_body_size 10M;\n\n    location / {\n        proxy_set_header   X-Forwarded-For $remote_addr;\n        proxy_set_header   Host $http_host;\n        proxy_pass         http://localhost'":$SERVER_PORT;\n    }\n}"

echo -e "\n   Install necessary libraries"
ssh -i $SSH_KEY_PATH  $SERVER_USER@$SERVER "sudo apt update
sudo apt install -y nodejs
sudo apt install -y npm
sudo mkdir -p tca-backend
echo -e \"$ENV_CONFIG\" | sudo tee -i tca-backend/prod.env > /dev/null
"

echo -e "\n   Run deploy script"
sh deploy.sh $SERVER $SERVER_PORT $SSH_KEY_PATH

echo -e "\n   SETUP NGINX & server systemctl processes"
ssh -i $SSH_KEY_PATH  $SERVER_USER@$SERVER "
sudo apt install -y nginx
echo -e \"$SYSTEMCTL_CONFIG\" | sudo tee -i /etc/systemd/system/tca-backend.service > /dev/null
sudo rm /etc/nginx/sites-enabled/default
echo -e '$NGINX_CONFIG' | sudo tee -i /etc/nginx/sites-available/node > /dev/null
sudo ln -s /etc/nginx/sites-available/node /etc/nginx/sites-enabled/node
sudo systemctl enable nginx.service
sudo systemctl enable tca-backend.service
sudo systemctl daemon-reload 
sudo systemctl restart tca-backend.service
sudo systemctl restart nginx.service"


echo -e "\n   SETUP MYSQL" 
ssh -i $SSH_KEY_PATH  $SERVER_USER@$SERVER "
sudo apt install -y mysql-server
sudo systemctl enable mysql.service
sudo systemctl start mysql.service
"
ssh -i $SSH_KEY_PATH $SERVER_USER@$SERVER "
sudo mysql -u root -e \"CREATE USER IF NOT EXISTS '$MYSQL_USER'@'localhost' IDENTIFIED BY '$MYSQL_PASSWORD';\"
sudo mysql -u root -e \"CREATE DATABASE IF NOT EXISTS $MYSQL_DATABASE;\"
sudo mysql -u root -e \"GRANT ALL PRIVILEGES ON $MYSQL_DATABASE.* TO '$MYSQL_USER'@'localhost';\"
sudo mysql -u root -e \"CREATE TABLE IF NOT EXISTS $MYSQL_DATABASE.routes (route_id INT AUTO_INCREMENT PRIMARY KEY, owner_id INT, patient_id VARCHAR(255), organization_id INT, total_vibration INT, avg_temperature TINYINT, avg_noise TINYINT, avg_vibration TINYINT, avg_velocity SMALLINT, avg_pressure MEDIUMINT, start_time_s BIGINT, end_time_s BIGINT)\"
sudo mysql -u root -e \"CREATE TABLE IF NOT EXISTS $MYSQL_DATABASE.segments (segment_id INT AUTO_INCREMENT PRIMARY KEY, route_id INT, start_time_s BIGINT, end_time_s BIGINT, segment_type enum('road', 'aerial', 'boat'))\"
sudo mysql -u root -e \"CREATE TABLE IF NOT EXISTS $MYSQL_DATABASE.route_measurement_data_points (route_data_point_id INT AUTO_INCREMENT PRIMARY KEY, route_id INT, segment_id INT, time_s BIGINT, velocity_kmps MEDIUMINT, noise_db TINYINT, vibration FLOAT(7,4), temperature_celsius TINYINT, pressure_pascals MEDIUMINT, annotation TEXT, latitude FLOAT(9,5), longitude FLOAT(9,5))\"
sudo mysql -u root -e \"CREATE TABLE IF NOT EXISTS $MYSQL_DATABASE.users (user_id INT AUTO_INCREMENT PRIMARY KEY, full_name VARCHAR(255), email VARCHAR(320), password VARCHAR(255), organization_id INT, organization_permission ENUM('admin', 'owner', 'member'))\"
"

echo -e "\n   Done! Server $SERVER is configured for deployment"
