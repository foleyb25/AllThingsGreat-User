module.exports.cron = {
    myFirstJob: {
      schedule: '*/90 * * * *',
      onTick: async function () {

        var startTime = '23:00:00';
        var endTime = '10:00:00';

        currentDate = new Date()   

        startDate = new Date(currentDate.getTime());
        startDate.setHours(startTime.split(":")[0]);
        startDate.setMinutes(startTime.split(":")[1]);
        startDate.setSeconds(startTime.split(":")[2]);

        endDate = new Date(currentDate.getTime());
        endDate.setHours(endTime.split(":")[0]);
        endDate.setMinutes(endTime.split(":")[1]);
        endDate.setSeconds(endTime.split(":")[2]);

        valid = startDate < currentDate && endDate > currentDate

        console.log('You will see this every 90th minute past every hour');
        console.log(`Also, sails object is available as this, e.g. ${this.config.environment}`);

        if (valid) {
          console.log('Lets call the sportsfeed API, we are between 10am and 11pm')
          // const status = await sails.helpers.getscores("MLB");
        } else {
          sails.log.info('Eh...Its too late and most likely no sports are on. Lets skip the API call to sportsfeed.')
        }
        
      }
    }
  };