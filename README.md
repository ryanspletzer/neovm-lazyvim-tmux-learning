# Neovim, LazyVim & tmux Learning Project

A hands-on learning environment for mastering Neovim, LazyVim, and tmux with a TypeScript hello world project.

## 📚 Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [What's Included](#whats-included)
- [Learning Resources](#learning-resources)
- [Common Commands](#common-commands)
- [Tips for Beginners](#tips-for-beginners)

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Neovim](https://neovim.io/) (v0.9.0 or later)
- [tmux](https://github.com/tmux/tmux) (v3.0 or later)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd neovm-lazyvim-tmux-learning
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Set up LazyVim configuration:**
   ```bash
   # The .config/nvim directory contains LazyVim configuration
   # Symlink it to your Neovim config location (or copy it)
   
   # For Linux/macOS:
   ln -s $(pwd)/.config/nvim ~/.config/nvim
   
   # Or copy it:
   cp -r .config/nvim ~/.config/nvim
   ```

4. **Set up tmux configuration:**
   ```bash
   # Symlink or copy the tmux config
   ln -s $(pwd)/.tmux.conf ~/.tmux.conf
   
   # Or copy it:
   cp .tmux.conf ~/.tmux.conf
   ```

5. **Run the TypeScript hello world:**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
.
├── .config/
│   └── nvim/                 # LazyVim/Neovim configuration
│       ├── init.lua         # Main initialization file
│       └── lua/
│           ├── config/      # Core configuration
│           │   ├── options.lua    # Vim options
│           │   ├── keymaps.lua    # Key mappings
│           │   ├── autocmds.lua   # Auto commands
│           │   └── lazy.lua       # Lazy.nvim setup
│           └── plugins/     # Plugin configurations
│               └── typescript.lua # TypeScript support
├── src/
│   └── index.ts             # TypeScript hello world
├── docs/                    # Learning guides and cheat sheets
│   ├── NEOVIM_GUIDE.md
│   ├── LAZYVIM_GUIDE.md
│   └── TMUX_GUIDE.md
├── .tmux.conf               # tmux configuration
├── package.json             # Node.js project config
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🎯 What's Included

### TypeScript Project
- ✅ Basic TypeScript hello world application
- ✅ Configured build and run scripts
- ✅ TypeScript compiler configuration
- ✅ Example code with interfaces and functions

### LazyVim Configuration
- ✅ Modern Neovim setup with LazyVim
- ✅ TypeScript/JavaScript language support
- ✅ LSP (Language Server Protocol) configuration
- ✅ Treesitter for syntax highlighting
- ✅ Sensible defaults and keybindings
- ✅ Auto-completion and formatting

### tmux Configuration
- ✅ Beginner-friendly prefix key (Ctrl+a)
- ✅ Mouse support enabled
- ✅ Intuitive pane splitting (| and -)
- ✅ Vim-style navigation
- ✅ Visual improvements and status bar
- ✅ Copy mode with vi keybindings

## 📖 Learning Resources

### Neovim Basics
Check out the [Neovim Guide](docs/NEOVIM_GUIDE.md) for:
- Essential Neovim commands
- Navigation and editing
- Modes (Normal, Insert, Visual, Command)
- Working with files and buffers

### LazyVim Features
Check out the [LazyVim Guide](docs/LAZYVIM_GUIDE.md) for:
- Plugin management with Lazy.nvim
- Using the file explorer
- Finding files and text
- LSP features (go to definition, find references, etc.)
- Code completion and snippets

### tmux Essentials
Check out the [tmux Guide](docs/TMUX_GUIDE.md) for:
- Creating and managing sessions
- Splitting panes and windows
- Navigation between panes
- Copy mode and scrollback
- Customization options

## 🔧 Common Commands

### TypeScript Project Commands

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Run the application
npm run start

# Build and run in one command
npm run dev

# Watch for changes (auto-rebuild)
npm run watch
```

### Neovim Commands (from terminal)

```bash
# Open Neovim
nvim

# Open a specific file
nvim src/index.ts

# Open Neovim with file at specific line
nvim +10 src/index.ts
```

### tmux Commands (from terminal)

```bash
# Start a new tmux session
tmux

# Start a named session
tmux new -s mysession

# List sessions
tmux ls

# Attach to a session
tmux attach -t mysession

# Kill a session
tmux kill-session -t mysession
```

### Key Bindings Quick Reference

#### Neovim (inside Neovim)
- `Space` - Leader key for most commands
- `:q` - Quit
- `:w` - Save file
- `i` - Enter insert mode
- `Esc` - Return to normal mode
- `Space + f + f` - Find files
- `Space + /` - Search in file

#### tmux (prefix is Ctrl+a)
- `Ctrl+a` then `|` - Split pane vertically
- `Ctrl+a` then `-` - Split pane horizontally
- `Ctrl+a` then arrow keys - Navigate panes
- `Ctrl+a` then `c` - Create new window
- `Ctrl+a` then `d` - Detach from session
- `Ctrl+a` then `r` - Reload config

## 💡 Tips for Beginners

### Getting Started with Neovim
1. **Start with vimtutor:** Run `nvimtutor` in your terminal for an interactive tutorial
2. **Learn modes:** Understanding Normal, Insert, and Visual modes is crucial
3. **Master basic movement:** h, j, k, l for left, down, up, right
4. **Use Space as leader:** Most LazyVim commands start with Space
5. **Don't try to learn everything:** Focus on one feature at a time

### Getting Started with tmux
1. **Remember the prefix:** Ctrl+a is your gateway to tmux commands
2. **Start simple:** Begin with just splitting panes
3. **Use mouse mode:** It's enabled by default to help you learn
4. **Name your sessions:** Makes it easier to find and attach to them
5. **Experiment safely:** tmux sessions persist, so you can always detach and come back

### Workflow Tips
1. **Use tmux for project organization:** One session per project
2. **Split your workspace:**
   - Left pane: Neovim for editing
   - Right top: Running application
   - Right bottom: Terminal for git commands
3. **Learn incrementally:** Master one tool before moving to the next
4. **Customize gradually:** Start with defaults, adjust as you identify needs
5. **Practice daily:** Consistent practice builds muscle memory

## 🎓 Learning Path

### Week 1: Neovim Basics
- [ ] Complete vimtutor
- [ ] Practice basic navigation (h, j, k, l, w, b)
- [ ] Learn insert mode (i, a, o)
- [ ] Practice saving and quitting (:w, :q, :wq)
- [ ] Edit the TypeScript file using basic commands

### Week 2: LazyVim Features
- [ ] Explore file navigation (Space + f + f)
- [ ] Use fuzzy finding (Space + /)
- [ ] Try LSP features (gd for go to definition)
- [ ] Practice code completion
- [ ] Learn about plugins (Space + l)

### Week 3: tmux Fundamentals
- [ ] Create and name sessions
- [ ] Practice splitting panes
- [ ] Navigate between panes
- [ ] Create multiple windows
- [ ] Learn to detach and reattach

### Week 4: Integration
- [ ] Set up a complete development workflow
- [ ] Customize your configuration
- [ ] Explore additional plugins
- [ ] Create your own keybindings
- [ ] Build something new!

## 🔗 External Resources

### Official Documentation
- [Neovim Documentation](https://neovim.io/doc/)
- [LazyVim Documentation](https://www.lazyvim.org/)
- [tmux Manual](https://man.openbsd.org/tmux.1)

### Video Tutorials
- [ThePrimeagen - Vim Movements](https://www.youtube.com/watch?v=H3o4l4GVLW0)
- [Josean Martinez - Neovim Setup](https://www.youtube.com/watch?v=vdn_pKJUda8)
- [Dreams of Code - tmux Guide](https://www.youtube.com/watch?v=DzNmUNvnB04)

### Interactive Learning
- [Vim Adventures](https://vim-adventures.com/) - Game to learn Vim
- [OpenVim Tutorial](https://www.openvim.com/) - Interactive tutorial

## 🤝 Contributing

Feel free to customize this project for your learning needs! Add your own:
- Code examples
- Plugin configurations
- Custom keybindings
- Documentation improvements

## 📝 License

MIT

---

**Happy Learning!** Remember: Everyone starts as a beginner. Take your time, practice regularly, and don't get discouraged. You've got this! 🚀