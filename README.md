# GitHub Action to Install `project-planton` cli

This [Action] installs the `project-planton` CLI in your GitHub Actions pipelines.

After `install-project-planton-cli-action` is run, the `project-planton` command is available to other Actions in the pipeline's
`PATH`. You can also use the `project-planton` command directly inside of workflow steps.

## Usage

Here's an example usage of `install-project-planton-cli-action`:

```yaml
steps:
  # Run `git checkout`
  - uses: actions/checkout@v3
  # Install the `project-planton` CLI
  - uses: plantoncloud/install-project-planton-cli-action@main
  # Ensure that `project-planton` is installed
  - run: project-planton version
```

## Configuration

### Input

You can configure `install-project-planton-cli-action` with these parameters:

| Parameter      | Description                                                |
|:---------------|:-----------------------------------------------------------|
| `version`      | The version of the [`project-planton` CLI] to install      |

> These parameters are derived from [`action.yml`](./action.yml). <br>

#### Version

If `version` is unspecified, the latest version of `project-planton` is installed:

```yaml
steps:
  - uses: actions/checkout@v3
  # Installs latest
  - uses: plantoncloud/install-project-planton-cli-action@main
  - run: project-planton version
```

Use the `version` parameter to pin to a specific version:

```yaml
steps:
  - uses: actions/checkout@v3
  # Installs version v0.0.65
  - uses: plantoncloud/install-project-planton-cli-action@main
    with:
      version: v0.0.65
  # Should output v0.0.65
  - run: project-planton version
```

[action]: https://docs.github.com/actions
