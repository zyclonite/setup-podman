https://github.com/actions/virtual-environments
-----------------------------------------------


podman run --rm -it --arch amd64 ubuntu:24.04 bash
apt update
apt -y upgrade
apt -y install make podman runc golang buildah bats btrfs-progs git libapparmor-dev libdevmapper-dev libglib2.0-dev libgpgme-dev libseccomp-dev libselinux1-dev go-md2man libbtrfs-dev libprotobuf-dev libprotobuf-c-dev libsystemd-dev
git clone https://github.com/containers/buildah /src/buildah
cd /src/buildah
git checkout v1.30.0
make all SECURITYTAGS="apparmor seccomp"

git clone https://github.com/containers/podman /src/podman
cd /src/podman
git checkout v5.4.0
make BUILDTAGS="apparmor seccomp"

podman cp caba60b12272:/src/buildah/bin/buildah .
podman cp caba60b12272:/src/podman/bin/podman .
