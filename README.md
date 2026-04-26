# Bookmarklet

[![CI](../../../actions/workflows/ci.yaml/badge.svg?label=CI&logo=forgejo&logoColor=white&style=flat-square)](../../../actions?workflow=ci.yaml)

A Template for Creating Web Browser Bookmarks with React.JS.

## Get Started

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://codeberg.org/stefankuehnel/bookmarklet.git
   cd bookmarklet
   ```

2. **Install dependencies:**

   ```bash
   task install
   ```

3. **Initialize project:**

   ```bash
   task init --interactive
   ```

4. **Run the development server:**

   ```bash
   task dev
   ```

5. **Open your browser:**

   Navigate to `http://localhost:3000` to see the bookmarklet in action.

## Usage

To use the bookmarklet, follow these steps:

1. **Copy Bookmarklet Code**:
   - Visit `<DEPLOYMENT_URL>/dist/bookmarklet.js`
   - Copy the code displayed.

2. **Create Browser Bookmark**:
   - Create a bookmark in your browser.
   - Paste the JavaScript code you copied earlier into the URL or Location field.
   - Save the bookmark with a recognizable name, such as "bookmarklet".

Once the bookmarklet is set up, you can use it on any web page:

1. **Navigate to the desired page**: Go to the web page where you want to use the bookmarklet.
2. **Run the bookmarklet**: Click on the bookmark you created earlier. The bookmarklet will execute the JavaScript code on the current page, performing its intended function.

> [!NOTE]
> The bookmarklet may not work on all websites, especially those with strict Content Security Policies (CSP). [Learn more](https://bugzilla.mozilla.org/show_bug.cgi?id=866522)

## Development

This project uses [Task](https://taskfile.dev) as a task runner.

### Available Tasks

```bash
# Run default tasks (build)
task

# Initialize project
task init

# Install dependencies
task install

# Run development server
task dev

# Build the project
task build

# Deploy the project
task deploy

# Format code
task format

# Clean project artifacts
task clean
```

## Documentation

Below you will find a list of documentation for tools used in this project.

- **React**: A JavaScript Library for Building User Interfaces - [Docs](https://react.dev)
- **Nix**: Nix Package Manager - [Docs](https://wiki.nixos.org/wiki/Nix)
- **Nix Flakes**: An Experimental Feature for Managing Dependencies of Nix Projects - [Docs](https://wiki.nixos.org/wiki/Flakes)
- **Task**: A Task Runner / Build Tool written in Go - [Docs](https://taskfile.dev/)
- **Forgejo Actions**: Automation and Execution of Software Development Workflows - [Docs](https://forgejo.org/docs/latest/user/actions/reference/)

## Found a Bug?

Thank you for your message! Please fill out a [bug report](../../../issues/new?assignees=&labels=&template=bug_report.md&title=).

## License

This project is licensed under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.txt).
