# Quick Start Guide

Get up and running with this Neovim, LazyVim, and tmux learning project in 5 minutes!

## Prerequisites Check

Before you start, make sure you have:
- ✅ Node.js (v18+): `node --version`
- ✅ Neovim (v0.9+): `nvim --version`
- ✅ tmux (v3.0+): `tmux -V`
- ✅ Git: `git --version`

If any are missing, install them first!

## 5-Minute Setup

### Step 1: Install Dependencies (30 seconds)
```bash
cd neovm-lazyvim-tmux-learning
npm install
```

### Step 2: Test TypeScript Project (30 seconds)
```bash
npm run dev
```

You should see:
```
==================================================
Hello, Developer!
...
==================================================
```

### Step 3: Set Up LazyVim (2 minutes)

**Option A - Symlink (Recommended for learning):**
```bash
# This links the config to your Neovim directory
ln -s $(pwd)/.config/nvim ~/.config/nvim
```

**Option B - Copy (If you have existing config):**
```bash
# Backup your existing config first!
mv ~/.config/nvim ~/.config/nvim.backup

# Copy this config
cp -r .config/nvim ~/.config/nvim
```

### Step 4: Set Up tmux (30 seconds)

```bash
# Symlink the config
ln -s $(pwd)/.tmux.conf ~/.tmux.conf

# Or copy it
cp .tmux.conf ~/.tmux.conf
```

### Step 5: Start Learning! (1 minute)

```bash
# Start a tmux session
tmux new -s learning

# Split the terminal vertically
# Press: Ctrl+a then |

# Left pane: Open Neovim with the TypeScript file
nvim src/index.ts

# Right pane: Run watch mode
# Navigate to right pane: Alt+Right
npm run watch

# Now edit on the left, see builds on the right!
```

## First Tasks Checklist

Complete these to verify everything works:

### ✅ TypeScript
- [ ] Run `npm run build`
- [ ] Run `npm run dev`
- [ ] Edit `src/index.ts` and change "Developer" to your name
- [ ] Run again to see your changes

### ✅ Neovim
- [ ] Open a file: `nvim src/index.ts`
- [ ] Enter insert mode: Press `i`
- [ ] Make a change
- [ ] Save and quit: Press `Esc`, then type `:wq` and press `Enter`

### ✅ LazyVim
- [ ] Open Neovim: `nvim`
- [ ] Press `Space` and wait - see the command menu!
- [ ] Press `Space + f + f` to find files
- [ ] Open the TypeScript file
- [ ] Try `g + d` on a function name (go to definition)

### ✅ tmux
- [ ] Start tmux: `tmux new -s test`
- [ ] Split vertically: `Ctrl+a` then `|`
- [ ] Navigate panes: `Alt+Left` and `Alt+Right`
- [ ] Detach: `Ctrl+a` then `d`
- [ ] Reattach: `tmux attach -t test`

## What to Do Next

### Day 1: Neovim Basics
1. Run `vimtutor` in your terminal (30-minute interactive tutorial)
2. Read [docs/NEOVIM_GUIDE.md](docs/NEOVIM_GUIDE.md)
3. Practice basic movements: `h`, `j`, `k`, `l`
4. Edit the TypeScript file using only Neovim

### Day 2: LazyVim Features
1. Read [docs/LAZYVIM_GUIDE.md](docs/LAZYVIM_GUIDE.md)
2. Learn file navigation: `Space + f + f`
3. Try search: `Space + /`
4. Use LSP features: `g + d` (go to definition), `K` (hover docs)

### Day 3: tmux Fundamentals
1. Read [docs/TMUX_GUIDE.md](docs/TMUX_GUIDE.md)
2. Create named sessions
3. Practice pane splitting and navigation
4. Set up your ideal development layout

### Day 4-7: Integration
1. Combine all three tools in your workflow
2. Customize configurations to your preferences
3. Build a small TypeScript project
4. Add your own keybindings and plugins

## Typical Development Workflow

Here's how you might use all three tools together:

```bash
# 1. Start tmux with a project session
tmux new -s myproject

# 2. Split your workspace
Ctrl+a then |     # Split vertically
Ctrl+a then -     # Split right pane horizontally (in right pane)

# 3. Set up your panes
# Left pane: Neovim for editing
nvim src/index.ts

# Top right: Development server
Ctrl+a then l     # Navigate to right
npm run watch

# Bottom right: Git/commands
Ctrl+a then j     # Navigate down
git status

# 4. Work and then detach when done
Ctrl+a then d

# 5. Come back later
tmux attach -t myproject
```

## Common Questions

### Q: Can I use this with my existing Neovim config?
**A:** It's recommended to try this config separately first. You can:
- Use a different Neovim directory for learning
- Or merge configs once you understand them

### Q: What if I make a mistake in Neovim?
**A:** Press `u` to undo! Or `:q!` to quit without saving.

### Q: How do I exit tmux?
**A:** Type `exit` in all panes, or `Ctrl+a then d` to detach (session keeps running).

### Q: Can I use my mouse?
**A:** Yes! Mouse support is enabled in both Neovim and tmux.

### Q: What if a command doesn't work?
**A:** Check the guides in the `docs/` folder for detailed help.

## Getting Help

### Neovim Help
```
:help              # Open help
:help x            # Help for command 'x'
:Tutor             # Interactive tutorial
```

### tmux Help
```
Ctrl+a then ?      # Show all keybindings
man tmux           # Manual page
```

### LazyVim Help
```
Space              # Wait to see command menu
Space + l          # Open plugin manager
:help lazyvim      # LazyVim documentation
```

## Troubleshooting

### TypeScript won't compile
```bash
# Check Node.js version
node --version    # Should be v18+

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Neovim config not loading
```bash
# Check Neovim can find config
nvim --version
# Check config location
ls -la ~/.config/nvim

# Re-symlink if needed
ln -sf $(pwd)/.config/nvim ~/.config/nvim
```

### tmux prefix not working
- Remember: Press `Ctrl+a`, **release**, then press next key
- Not: Hold `Ctrl+a` + other key

### Colors look wrong
```bash
# Check terminal supports 256 colors
echo $TERM

# Should show: screen-256color or xterm-256color
```

## Project Structure

```
.
├── .config/nvim/           # LazyVim configuration
│   ├── init.lua           # Entry point
│   └── lua/
│       ├── config/        # Core settings
│       └── plugins/       # Plugin configs
├── docs/                  # Learning guides
│   ├── NEOVIM_GUIDE.md   # Neovim tutorial
│   ├── LAZYVIM_GUIDE.md  # LazyVim features
│   └── TMUX_GUIDE.md     # tmux reference
├── src/                   # TypeScript code
│   └── index.ts          # Hello world
├── .tmux.conf            # tmux configuration
├── package.json          # Node.js config
├── tsconfig.json         # TypeScript config
└── README.md             # Main documentation
```

## Essential Commands Reference

### TypeScript
```bash
npm run build      # Compile
npm run start      # Run compiled code
npm run dev        # Build and run
npm run watch      # Watch for changes
```

### Neovim
```
nvim file.ts       # Open file
i                  # Insert mode
Esc                # Normal mode
:w                 # Save
:q                 # Quit
:wq                # Save and quit
```

### LazyVim
```
Space + f + f      # Find files
Space + /          # Search in file
Space + e          # File explorer
g + d              # Go to definition
K                  # Show documentation
```

### tmux
```
tmux new -s name   # New session
Ctrl+a then |      # Split vertical
Ctrl+a then -      # Split horizontal
Ctrl+a then d      # Detach
Alt+Arrow          # Navigate panes
```

## Resources

- 📖 [Neovim Guide](docs/NEOVIM_GUIDE.md) - Complete Neovim tutorial
- 📖 [LazyVim Guide](docs/LAZYVIM_GUIDE.md) - LazyVim features and tips
- 📖 [tmux Guide](docs/TMUX_GUIDE.md) - tmux comprehensive guide
- 📖 [README.md](README.md) - Project overview and learning path

## Ready to Start?

1. ✅ Dependencies installed (`npm install`)
2. ✅ TypeScript working (`npm run dev`)
3. ✅ Neovim config linked
4. ✅ tmux config linked
5. ✅ Opened this guide

**You're ready! Start with the Day 1 tasks above.** 🚀

---

**Remember:** Learning these tools takes time. Be patient with yourself, practice daily, and don't try to learn everything at once. Focus on one tool at a time, and gradually integrate them into your workflow.

**Happy Learning!** 🎉
