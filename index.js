// @ts-check

const core = require('@actions/core');

function verifyConditions() {
  core.setOutput("new-release-published", "false");
}

function generateNotes(_pluginConfig, { nextRelease }) {
  core.setOutput("new-release-published", "true");
  core.setOutput("new-release-version", nextRelease.version);
  core.setOutput("new-release-type", nextRelease.type);
  core.setOutput("new-release-head", nextRelease.head);
  core.setOutput("new-release-tag", nextRelease.tag);
  core.setOutput("new-release-channel", nextRelease.channel);
}

function prepare(_pluginConfig, { nextRelease }) {
  core.setOutput("new-release-notes", nextRelease.notes);
}

module.exports = {
  verifyConditions,
  generateNotes,
  prepare
};
