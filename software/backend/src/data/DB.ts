import mysql from 'mysql'

class DB {
    dbName: string;
    dbPassword: string;
    establishedConnection: any;

    constructor(dbName, dbPassword) {
      this.establishedConnection = null;
      this.dbName = dbName;
      this.dbPassword = dbPassword;
    }
  
    private connection() {
      return new Promise((resolve, reject) => {
        resolve(mysql.createConnection({
          host: "localhost",
          user: "root",
          password: this.dbPassword,
          database: this.dbName,
        }))
      })
    }
  
    connect() {
      if (!this.establishedConnection) {
        this.establishedConnection = this.connection().then((res: any) => {
          res.connect(function(err) {
            if (err) {
              console.log(err);
              this.dropConnection();
              throw err;
            }
            
            console.log(res.state, "connected")
          })
        });
      }
    }
  
    dropConnection() {
      if (this.establishedConnection) {
        this.establishedConnection.then(res => {
          res.end();
          console.log(res.state, 'connection dropped');
        });
        
        this.establishedConnection = null;
      }
    }
  }

  export default DB;