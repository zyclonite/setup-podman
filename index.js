const core = require('@actions/core');
const io = require('@actions/io');
const path = require('path');

main().catch(err => {
  core.setFailed(err.message);
})

async function main() {
  checkPlatform();

  let arch = core.getInput('arch');
  arch = arch == null ? 'amd64' : arch;
  core.info(`Architecture set to ${arch}`);
  core.setOutput('arch', arch);

  let podman = core.getInput('podman');
  podman = podman == null ? '4.1.1' : podman;
  core.info(`Podman version set to ${podman}`);
  core.setOutput('podman', podman);

  let buildah = core.getInput('buildah');
  buildah = buildah == null ? '1.26.2' : buildah;
  core.info(`Buildah version set to ${buildah}`);
  core.setOutput('buildah', buildah);

  const options = {recursive: false, force: true};
  await io.cp(path.join(__dirname, '../bin/podman', podman, arch, "podman"), "/usr/local/bin", options);
  await io.cp(path.join(__dirname, '../bin/buildah', buildah, arch, "buildah"), "/usr/local/bin", options);
}

function checkPlatform() {
  if (process.platform !== 'linux')
    throw new Error(
      '@zyclonite/setup-podman only supports Ubuntu Linux at this time'
    )
}
