---
title: Integration Tests
keywords:
  - VSTeam
  - Integration Tests
  - DevOps
  - Azure DevOps
---

If you want to run the integration test with Pester, then make sure you use an organization that has nothing important included.
That the tests run you need to prepare some things

## Prerequisites

- Install SonarQube extension

## Environment variables

Set the following Environment variables.

- `$env:ACCT = VSTS` Account Name or full TFS URL including collection
- `$env:API_VERSION = TFS2017` or TFS2018 / AzD2019 for on-prem versions, or VSTS for the Service variant, depending on the value used for ACCT
- `$env:EMAIL` = Email of user to remove and re-add to account
- `$env:PAT` = Personal Access token of ACCT