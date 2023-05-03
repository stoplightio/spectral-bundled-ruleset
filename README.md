# Use npm hosted ruleset without unpkg

This repository helps you create and distribute custom rulesets that extend existing rulesets hosted on npm, without needing access to unpkg. The bundled ruleset can be used with Spectral CLI, Studio Web, and the VS Code Extension.

## Steps to create a custom bundled ruleset

1. **Add rules and extended rulesets**: Modify the `ruleset.ts` file in this repository to import the default spectral and spectral wasp rulesets, or any other rulesets of your choice. You can also add custom rules as per the Spectral documentation [here](https://meta.stoplight.io/docs/spectral/README.md).

2. Bundle the ruleset: Use webpack to create a bundled ruleset.mjs file in the dist directory. The webpack configuration is already defined in this repository. Run the following command: `yarn build`

3. Create a Spectral file: Create a new .spectral.yml file with the following content:

```
description: ""
formats:
  - "oas2"
  - "oas3"
  - "oas3.0"
  - "oas3.1"
aliases: {}
rules: {}
extends:
  - "{url to the ruleset.mjs file}"
functionsDir: "functions"
```

Replace {url to the ruleset.mjs file} with the actual URL to your bundled ruleset.mjs file. This Spectral file can be used across different environments.

5. To Enable in Stoplight Platform: Import the custom .spectral.yml file into a style guide in the Stoplight Platform and publish it. The published style guide can be enabled for all projects within the platform.

*Note:* The github repo needs to be public for this to work seamlessly as the token expires. 
