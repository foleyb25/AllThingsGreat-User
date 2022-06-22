module.exports.cron = {
    myFirstJob: {
      schedule: '*/15 */1 * * *',
      onTick: async function () {
        console.log('You will see this every day at 6pm');
        console.log(`Also, sails object is available as this, e.g. ${this.config.environment}`);
        const status = await sails.helpers.getscores("MLB");
      }
    }
  };