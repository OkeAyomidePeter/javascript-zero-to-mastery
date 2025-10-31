# JavaScript Zero to Mastery (Progressing into TypeScript)

This repository contains 100 progressively challenging JavaScript projects. The goal is to help learners move beyond passive tutorials and build practical software with real-world patterns. Each project is organized in its own numbered folder and includes a detailed `README.md` for clarity.

The first phase uses JavaScript to build fundamentals: variables, control flow, functions, DOM interaction, asynchronous programming, and simple data structures. Later projects transition into TypeScript to introduce typing, interfaces, generics, and compile-time safety. This shift reflects how modern production environments evolve.

All code in this repository is thoroughly commented and annotated to support problem-solving over memorization. The intent is to teach practical thinking, encourage exploration, and help break out of “tutorial hell” by showing how real projects are structured and improved.

Video walkthroughs may be added when a project benefits from visual explanation or maps cleanly to real-world use cases.

## Structure

js-ts-zero-to-mastery/
001-basic-calculator/
002-unit-converter/
003-random-password-generator/
...
060-typescript-transition-starts/
...
100-advanced-grid-simulation/


Each project includes:
- A problem description
- Requirements and constraints
- Implementation notes
- Common pitfalls
- Fully commented source code
- Suggested extensions

## Who This Is For

- Beginners who want hands-on practice
- Developers returning to JavaScript
- Anyone curious about transitioning into TypeScript
- Learners who need examples of clean code habits

## Contributing

Contributions are welcome. Suggested improvements:
- Additional comments or clarifications
- TypeScript refinements
- Tests
- README enhancements

Open a pull request or file an issue if you find bugs, typos, or broken examples.

## License

This repository is free and open source for personal, educational, and commercial use. Content may be copied, modified, and redistributed as long as attribution to the repository is maintained.

Permission is granted to use, share, and adapt the material without restriction. No warranties are provided. Software is provided “as-is.”

## Disclaimer

This repository is for educational purposes only. It does not provide guarantees of correctness, performance, or security. Use your own judgment when applying these examples in production environments.

## Roadmap

- Add optional video walkthroughs for complex projects
- Demonstrate TypeScript tooling and build pipelines
- Introduce testing coverage demonstrations
- Add prompts for self-reflection after each build

## Goals

- Build by doing, not watching
- Understand JavaScript fundamentals before typing systems
- Develop confidence in reading, writing, and refactoring code
- Learn how static typing reduces bugs at scale
- Gain technical range from simple scripts to full applications

Move forward only when the concepts feel comfortable. Consistency matters more than speed.


Here is a simple, beginner-friendly `README.md` you can use:

```md
# Installing Node.js (Beginner Guide)

This guide explains how to install Node.js on macOS, Linux, or Windows. Node.js lets you run JavaScript outside the browser and comes bundled with npm (Node Package Manager).

---

## Check if Node.js is Already Installed

Open your terminal or command prompt and run:

```

node -v

```

If you see a version number, Node.js is already installed.

---

## Windows Installation

1. Visit the official Node.js downloads page:
   https://nodejs.org

2. Download the **LTS** (Long Term Support) Windows installer.

3. Run the installer.
   - Keep default settings.
   - Ensure "Add to PATH" is checked.

4. After installation, open **Command Prompt** and run:
```

node -v
npm -v

```

5. If both commands return versions, the installation worked.

---

## macOS Installation

### Option 1: Official Installer (Beginner Friendly)

1. Go to:
https://nodejs.org

2. Download the **LTS** macOS installer (.pkg).

3. Run the installer and keep default settings.

4. Verify installation in Terminal:
```

node -v
npm -v

```

### Option 2: Homebrew (Recommended if you already use it)

Install Homebrew:
```

/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"

```

Then install Node:
```

brew install node

```

---

## Linux Installation

### Debian / Ubuntu
Open your terminal and run:
```

sudo apt update
sudo apt install nodejs npm

```

Check versions:
```

node -v
npm -v

```

### Fedora
```

sudo dnf install nodejs

```

### Arch
```

sudo pacman -S nodejs npm

```

If your distribution is not listed, check the official docs:
https://nodejs.org/en/download/package-manager

---

## Updating Node.js

Over time you may want to update Node. Visit:
https://nodejs.org

Or use your package manager (Homebrew, apt, pacman, etc.).

---

## Uninstalling Node.js

If you need to remove Node:

**Windows**
Use "Add or Remove Programs" and uninstall Node.js.

**macOS**
Delete the directories shown in the official docs:
https://nodejs.org/en/docs

**Linux**
Remove through your package manager. Example (Ubuntu):
```

sudo apt remove nodejs npm

```

---

## Next Steps

After installation you can create your first JavaScript file:

```

console.log("Hello from Node");

```

Run it:
```

node yourfile.js

```

---

Node.js official installation documentation:
https://nodejs.org/en/docs

Happy coding.
```
