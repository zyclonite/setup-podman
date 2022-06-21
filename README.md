# Setup Podman Action

<p align="center">
  <a href="https://github.com/zyclonite/setup-podman/actions"><img alt="javscript-action status" src="https://github.com/zyclonite/setup-podman/workflows/units-test/badge.svg"></a>
</p>

Use this action install the latest Podman and Buildah binaries.:rocket:

## Usage

You can now consume the action by referencing the v1 branch

```yaml
uses: zyclonite/setup-podman@v1
with:
  podman: 4.1.1
  buildah: 1.26.1
  arch: amd64
```

See the [actions tab](https://github.com/zyclonite/setup-podman/actions) for runs of this action! :rocket:
