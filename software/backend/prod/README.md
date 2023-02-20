### TO DEPLOY NODE APP IN UBUNTU EC2

1. pull repo
2. We need to create a system process that automatically starts the backend server. Run `sudo vim /etc/systemd/system/tca-backend.service`, add the following to file

[Unit]
Description=tca-backend
After=multi-user.target

[Service]
ExecStart=/usr/bin/node /home/ubuntu/SYSC4907_Real_Time_Neonatal_Patient_Monitoring/software/backend/src/build/app.js
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=YourAppName
User=ubuntu
EnvironmentFile=/home/ubuntu/app.env

[Install]
WantedBy=multi-user.target

3. We want to use custom environment variables at the path specified in the service config. Run `sudo vim /home/ubuntu/app.env`. Add required environment variables. An example is shown below

TOKEN_SECRET= 128 byte string
RESET_PASSWORD_TOKEN_SECRET= 128 byte string
MYSQL_HOST= mysql ip
MYSQL_USER= mysql user
MYSQL_PASSWORD= mysql password
SERVER_PORT=3001

4. We want to transpile the Typescript code to Javascript code. This is the code that will be run by node in the system service. Run `cd backend/src` then run `npm run tsc`, this outputs the JS code into the build folder.
5. The service is now ready to run. Run `systemctl enable tca-backend.service`, this sets the service to automatically start on boot.
6. To start the service (without rebooting), run `systemctl start tca-backend.service`.
   https://www.youtube.com/watch?v=oHAQ3TzUTro

### TO DEPLOY DB IN UBUNTU EC2

1. install mysql
2. start mysql
3. add users for connection
4. change mysql config bind address to 0.0.0.0, this allows the mysql server to listen to all external ips
   https://www.youtube.com/watch?v=N9DwaThhpsg

\*\*ensure all port are open for connection
