const core = require('@actions/core');
//const {exec} = require('@actions/exec');
const wait = require('./wait');

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const ms = core.getInput('milliseconds');
  core.info(`Waiting ${ms} milliseconds ...`);

  core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
  await wait(parseInt(ms));
  core.info((new Date()).toTimeString());

  core.setOutput('time', new Date().toTimeString());

  //await exec(path.join(__dirname, 'shell-script'), [arg1, arg2])
  //process.env.RUNNER_TEMP
}

function checkPlatform() {
  if (process.platform !== 'linux')
    throw new Error(
      '@zyclonite/setup-podman only supports Ubuntu Linux at this time'
    )
}
