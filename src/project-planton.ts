import * as os from 'os';
import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';
import * as fs from "fs";

export async function getProjectPlanton(version: string): Promise<string | Error> {
  const cliName = `project-planton`;
  const binaryName = `project-planton-${version}-${os.platform()}`;
  const binaryPath = tc.find("project-planton", version, os.arch());

  if (binaryPath !== '') {
    core.info(`Found in cache @ ${binaryPath}`);
    return binaryPath;
  }

  core.info(`Resolving the download URL for the current platform...`);

  const downloadURL = `https://storage.googleapis.com/project-planton-downloads/cli/${version}/${binaryName}`;

  core.info(`Downloading project-planton cli from '${downloadURL}' ...`);

  const downloadedPath = await tc.downloadTool(downloadURL);

  // Change permissions of the downloaded binary file to be executable
  fs.chmodSync(downloadedPath, '755');

  const cachedDir = await tc.cacheFile(downloadedPath, cliName, cliName, version, os.arch());

  core.info(`Successfully cached downloaded project-planton cli in '${cachedDir}' directory`)

  return cachedDir;
}
