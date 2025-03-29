<p align="center" style="color: #343a40">
  <img
    src="https://raw.githubusercontent.com/brionmario/mastering-react-login/483094d7245bac786559330fb5f0c1f72ff54d81/Group%20126%20(1).png" alt="Banner" width="auto"
  >
</p>
<p align="center" style="font-size: 1.2rem;">
  This repository contains the materials used in my "Mastering Secure Login Mechanisms for React Apps" workshop.
</p>

<div align="center">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License"></a>
  <br>
  <br>
</div>

<br>

## Slides

Grab the slides for the workshop from Slideshare.

- [Mastering Secure Login Mechanisms for React Apps](https://www.slideshare.net/slideshow/mastering-secure-login-mechanisms-for-react-apps-pdf/277294877)

## Try out the demo applications

### Prerequisite Software

To tryout the sample on a local environment, make sure you have the following set of tools on your local machine:

* [Git](https://git-scm.com/downloads) - Open source distributed version control system. For install instructions, refer [this](https://www.atlassian.com/git/tutorials/install-git).
* [Node.js](https://nodejs.org/en/download/) - JavaScript runtime with npm. For install instructions, refer [this](https://nodejs.org/en/download/package-manager/) (`v18 or higher`).
* `Optional` -> [pnpm](https://pnpm.io/) - Alternate npm client for faster package installs. (`v9 or higher`)

### Setting up the Source Code

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the repository.
2. Clone your fork to the local machine.

Replace `<github username>` with your own username.

```shell
git clone https://github.com/<github username>/mastering-react-login.git
```

3. Optional: Set the original repo as the upstream remote.

```shell
git remote add upstream https://github.com/brionmario/mastering-react-login.git
```

### Setting up Asgardeo

Go to the [Asgardeo Console](https://console.asgardeo.io) and sign in.

### Create a SPA Client Application on Asgardeo

1. Click on the **Applications** tab on the left sidebar.
2. Click on the **New Application** button.
3. Select **Single Page Application* as the application type.
4. Give a name to the application and add authorized redirect URLs (In the default case: https://localhost:5173) and click **Create**.
5. Save the `Client ID` generated for the application.

### Applications

#### CodeFit.ai

Go inside [codefit.ai](./codefit.ai/) folder to check out the application we demo during the workshop.

#### Hack Server

The hack server we used during the workshop is available at [hack-server](./hack-server/) folder.

## License
This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
