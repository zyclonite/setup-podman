# Setup Podman Action

<p align="center">
  <a href="https://github.com/zyclonite/setup-podman/actions"><img alt="javscript-action status" src="https://github.com/zyclonite/setup-podman/workflows/units-test/badge.svg"></a>
</p>

Use this action install the latest Podman and Buildah binaries.:rocket:

## Usage

You can now consume the action by referencing the v2 branch

```yaml
uses: zyclonite/setup-podman@v2
with:
  podman: 5.4.0
  buildah: 1.30.0
  arch: amd64
```

See the [actions tab](https://github.com/zyclonite/setup-podman/actions) for runs of this action! :rocket:
