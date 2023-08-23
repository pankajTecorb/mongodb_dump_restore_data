const { exec } = require('child_process');

// Replace these values with your Atlas connection string and desired backup directory
const atlasConnectionString = 'mongodb+srv://tecorb:kumartec123@tecorb.juv3dbp.mongodb.net/';
const atlasConnectionStringSecond = 'mongodb+srv://imule:imule@cluster0-rekgb.mongodb.net/saloon';
const backupDirectory = './database';


const command = `mongodump --uri="${atlasConnectionStringSecond}" --out="${backupDirectory}"`;
const sotrecomman = `mongorestore --uri="${atlasConnectionString}" "${backupDirectory}"`

exec(sotrecomman, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing mongodump: ${error}`);
  } else {
    console.log('Backup completed successfully.');
  }
});

