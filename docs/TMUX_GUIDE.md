# tmux Guide for Beginners

tmux (terminal multiplexer) allows you to manage multiple terminal sessions from a single window. This guide will help you master tmux fundamentals.

## Table of Contents
- [What is tmux?](#what-is-tmux)
- [Core Concepts](#core-concepts)
- [Getting Started](#getting-started)
- [Sessions](#sessions)
- [Windows](#windows)
- [Panes](#panes)
- [Copy Mode](#copy-mode)
- [Configuration](#configuration)
- [Common Workflows](#common-workflows)

## What is tmux?

tmux is a terminal multiplexer that lets you:
- Run multiple programs in one terminal
- Keep programs running when you disconnect
- Split your terminal into multiple panes
- Switch between different projects easily
- Share your terminal with others

### Why tmux?
- **Persistence**: Sessions survive disconnections
- **Organization**: One session per project
- **Productivity**: Multiple panes and windows
- **Remote Work**: Essential for SSH sessions
- **Customization**: Highly configurable

## Core Concepts

### Sessions
A session is a collection of windows. Think of it as a workspace for a project.
- Example: One session for a web project, another for scripts

### Windows
Windows are like tabs in a browser. Each window fills the entire terminal.
- Example: One window for editing, another for running tests

### Panes
Panes split a window into multiple sections, each running a different command.
- Example: Left pane for Neovim, right pane for npm commands

### Prefix Key
The prefix key is your gateway to tmux commands. In this configuration:
- **Prefix**: `Ctrl+a`

Press `Ctrl+a`, release, then press another key to execute commands.

## Getting Started

### Starting tmux
```bash
# Start a new session
tmux

# Start a named session (recommended)
tmux new -s myproject

# Start with a specific name
tmux new -s frontend-dev
```

### Detaching and Attaching
```bash
# Detach from session (inside tmux)
Ctrl+a then d

# List sessions
tmux ls

# Attach to a session
tmux attach -t myproject

# Attach to last session
tmux attach

# Kill a session
tmux kill-session -t myproject
```

### First Steps
1. Start tmux: `tmux new -s learning`
2. Run a command: `echo "Hello tmux!"`
3. Detach: Press `Ctrl+a` then `d`
4. Re-attach: `tmux attach -t learning`
5. See your command still running!

## Sessions

Sessions are tmux's top-level organization unit.

### Session Commands
```bash
# Create new session
tmux new -s session-name

# List all sessions
tmux ls
# Or inside tmux: Ctrl+a then s

# Rename current session
Ctrl+a then $

# Switch between sessions (inside tmux)
Ctrl+a then s    # Show session list
# Use arrow keys to select, Enter to switch

# Detach from session
Ctrl+a then d

# Kill current session
tmux kill-session

# Kill specific session
tmux kill-session -t session-name
```

### Session Naming Best Practices
Use descriptive names for your sessions:
```bash
tmux new -s frontend          # For frontend work
tmux new -s api-server        # For backend API
tmux new -s scripts           # For running scripts
tmux new -s learning-project  # For this project!
```

## Windows

Windows are like tabs - each fills the entire terminal.

### Window Commands
```
Ctrl+a then c      - Create new window
Ctrl+a then ,      - Rename current window
Ctrl+a then &      - Kill current window (with confirmation)
Ctrl+a then n      - Next window
Ctrl+a then p      - Previous window
Ctrl+a then 0-9    - Switch to window 0-9
Ctrl+a then w      - List windows (interactive)
Ctrl+a then f      - Find window by name
```

### Window Navigation
```
Ctrl+a then 0      - Go to window 0
Ctrl+a then 1      - Go to window 1
Ctrl+a then 2      - Go to window 2
...and so on
```

### Practical Window Usage
Example session layout:
1. Window 0: "editor" - Running Neovim
2. Window 1: "server" - Running npm run dev
3. Window 2: "git" - For git commands
4. Window 3: "test" - Running tests

## Panes

Panes split a window into multiple sections - the most powerful tmux feature!

### Creating Panes
```
Ctrl+a then |      - Split vertically (left|right)
Ctrl+a then -      - Split horizontally (top-bottom)
```

### Navigating Panes
```
Ctrl+a then h      - Go to left pane
Ctrl+a then j      - Go to bottom pane
Ctrl+a then k      - Go to top pane
Ctrl+a then l      - Go to right pane

Alt+Left           - Go to left pane (no prefix needed!)
Alt+Right          - Go to right pane
Alt+Up             - Go to top pane
Alt+Down           - Go to bottom pane
```

### Resizing Panes
```
Ctrl+a then H      - Resize pane left
Ctrl+a then J      - Resize pane down
Ctrl+a then K      - Resize pane up
Ctrl+a then L      - Resize pane right
```

Hold the last key to resize more:
- `Ctrl+a then H H H H` - Resize left multiple times

### Pane Management
```
Ctrl+a then x      - Kill current pane
Ctrl+a then z      - Zoom pane (toggle fullscreen)
Ctrl+a then q      - Show pane numbers
Ctrl+a then o      - Switch to next pane
Ctrl+a then {      - Move pane left
Ctrl+a then }      - Move pane right
Ctrl+a then Space  - Toggle pane layouts
```

### Common Pane Layouts

#### Two Panes Side-by-Side
```
+----------+----------+
|          |          |
|  Editor  |  Server  |
|          |          |
+----------+----------+
```
Create: `Ctrl+a then |`

#### Three Panes
```
+----------+----------+
|          |  Server  |
|  Editor  +----------+
|          |   Git    |
+----------+----------+
```
Create:
1. `Ctrl+a then |` (split vertically)
2. `Ctrl+a then -` (split right pane horizontally)

#### Four Panes
```
+----------+----------+
|          |          |
|  Editor  |  Server  |
+----------+----------+
|   Git    |  Tests   |
+----------+----------+
```
Create:
1. `Ctrl+a then |` (split vertically)
2. `Ctrl+a then -` (split left horizontally)
3. `Ctrl+a then l` (go to right pane)
4. `Ctrl+a then -` (split right horizontally)

## Copy Mode

Copy mode allows you to scroll through terminal output and copy text.

### Entering Copy Mode
```
Ctrl+a then [      - Enter copy mode
```

### Navigation in Copy Mode
```
h, j, k, l         - Move cursor
w, b               - Move by word
g, G               - Go to top/bottom
Ctrl+u, Ctrl+d     - Scroll up/down
/                  - Search forward
?                  - Search backward
n                  - Next search result
```

### Copying Text (Vi Mode)
```
v                  - Start selection
y                  - Copy selection
Enter              - Copy selection and exit
Esc or q           - Exit copy mode
```

### Pasting
```
Ctrl+a then ]      - Paste copied text
```

### Scrolling
The mouse is enabled in this configuration, so you can:
- Scroll with mouse wheel
- Click to switch panes
- Drag to select and copy text

## Configuration

### Config File Location
The tmux configuration is in `.tmux.conf`

### Key Configuration Highlights

#### Mouse Support (Enabled)
```bash
set -g mouse on
```
You can click and scroll with the mouse!

#### Prefix Key
```bash
set -g prefix C-a      # Changed from default Ctrl+b
```

#### Split Panes
```bash
bind | split-window -h   # Vertical split
bind - split-window -v   # Horizontal split
```

#### Starting Index
```bash
set -g base-index 1        # Windows start at 1, not 0
```

### Reloading Configuration
After editing `.tmux.conf`:
```
Ctrl+a then r      - Reload configuration
```

### Customizing Your Config
Edit `.tmux.conf` to customize:
```bash
# Example customizations:

# Change status bar color
set -g status-style 'bg=colour234 fg=colour137'

# Set history limit
set -g history-limit 10000

# Change prefix (if you want)
set -g prefix C-b
```

## Common Workflows

### Workflow 1: Web Development
```
Session: "webapp"

Window 0: "editor"
+------------------------+
|                        |
|    Neovim             |
|    editing code       |
|                        |
+------------------------+

Window 1: "dev"
+----------+-------------+
| npm run  |   Browser   |
|   dev    |   output    |
+----------+-------------+
| git      |   tests     |
+----------+-------------+
```

**Setup:**
1. `tmux new -s webapp`
2. Window 0: Run `nvim`
3. `Ctrl+a then c` (new window)
4. `Ctrl+a then |` (split vertically)
5. Left: `npm run dev`
6. `Ctrl+a then l` then `Ctrl+a then -` (split right pane)
7. Configure as needed

### Workflow 2: This Learning Project
```
Session: "learning"

+------------------+------------------+
|                  |                  |
|   Neovim         |  npm run dev    |
|   src/index.ts   |  (watch mode)   |
|                  |                  |
+------------------+------------------+
```

**Setup:**
```bash
# Start session
tmux new -s learning

# Split vertically
Ctrl+a then |

# Left pane: Open Neovim
nvim src/index.ts

# Right pane: Run watch mode
Ctrl+a then l
npm run watch

# Now edit on left, see changes on right!
```

### Workflow 3: SSH Remote Development
```bash
# On remote server
tmux new -s remote-dev

# Do your work...
# Connection drops! No problem.

# Reconnect and reattach
ssh user@server
tmux attach -t remote-dev
# Everything is still there!
```

## Quick Reference Cheat Sheet

### Essential Commands
```
tmux new -s name       Start new session
tmux ls               List sessions
tmux attach -t name   Attach to session

Ctrl+a then c         New window
Ctrl+a then |         Split vertical
Ctrl+a then -         Split horizontal
Ctrl+a then d         Detach

Alt+Arrow            Navigate panes (no prefix!)
Ctrl+a then arrow    Navigate panes (with prefix)

Ctrl+a then [        Copy mode
Ctrl+a then ]        Paste

Ctrl+a then r        Reload config
Ctrl+a then ?        Show all keybindings
```

### Most Used Keybindings
```
Prefix = Ctrl+a

Sessions:
  d     - Detach from session
  $     - Rename session
  s     - Session list

Windows:
  c     - Create window
  ,     - Rename window
  n     - Next window
  p     - Previous window
  0-9   - Switch to window

Panes:
  |     - Split vertical
  -     - Split horizontal
  h/j/k/l - Navigate panes (vim style)
  H/J/K/L - Resize panes
  x     - Kill pane
  z     - Zoom pane
  q     - Show pane numbers

Other:
  [     - Copy mode
  ]     - Paste
  r     - Reload config
  ?     - Show keybindings
```

## Practice Exercises

### Exercise 1: Create Your First Session
```bash
1. tmux new -s practice
2. Observe the status bar at the bottom
3. Type some commands
4. Ctrl+a then d (detach)
5. tmux attach -t practice (reattach)
```

### Exercise 2: Split Panes
```bash
1. tmux new -s splits
2. Ctrl+a then | (split vertically)
3. Ctrl+a then - (split right pane horizontally)
4. Alt+Arrow keys (navigate around)
5. Try Ctrl+a then z (zoom a pane)
```

### Exercise 3: Multiple Windows
```bash
1. tmux new -s windows
2. Ctrl+a then c (new window)
3. Ctrl+a then c (another window)
4. Ctrl+a then , (rename window)
5. Ctrl+a then 0 (go to window 0)
6. Ctrl+a then n (next window)
```

### Exercise 4: Copy Mode
```bash
1. Run: ls -la / (to get output)
2. Ctrl+a then [ (enter copy mode)
3. Use h,j,k,l to navigate
4. v to select, y to copy
5. Ctrl+a then ] to paste
```

### Exercise 5: Development Workflow
```bash
1. tmux new -s devproject
2. Ctrl+a then | (split)
3. Left pane: nvim src/index.ts
4. Right pane: npm run watch
5. Edit code, see changes immediately!
```

## Tips and Tricks

### 1. Name Everything
Always use descriptive names:
```bash
tmux new -s project-name      # Not just 'tmux'
Ctrl+a then , "descriptive"   # Rename windows
```

### 2. One Session Per Project
Keep projects separate:
```bash
tmux new -s frontend
tmux new -s backend
tmux new -s scripts
```

### 3. Mouse Mode is Your Friend
While learning, mouse mode helps you:
- Click to switch panes
- Scroll to view history
- Select text to copy

### 4. Zoom When Needed
`Ctrl+a then z` - Temporarily maximize a pane, zoom again to restore

### 5. Kill vs. Detach
- **Detach** (`Ctrl+a then d`): Session keeps running
- **Kill** (`Ctrl+a then x`): Terminates the pane/window

### 6. Copy Mode for Reading Logs
Use copy mode to scroll through long outputs:
```bash
npm run build    # Lots of output
Ctrl+a then [    # Enter copy mode
# Now scroll and search freely
```

### 7. Status Bar Information
Look at the bottom:
- `[session-name]` - Current session
- `0:window-name` - Window index and name
- `*` - Active window

## Troubleshooting

### Problem: Prefix Not Working
- Make sure you press and release `Ctrl+a`, then press the next key
- Check if another program is intercepting the key

### Problem: Can't See Mouse Cursor
- Mouse mode is on, try clicking
- Or navigate with keyboard: `Ctrl+a then arrow`

### Problem: Weird Colors in Neovim
- Ensure 256 color support: `set -g default-terminal "screen-256color"`
- This is already configured in `.tmux.conf`

### Problem: Lost Session
```bash
# List all sessions
tmux ls

# Attach to any session
tmux attach -t session-name
```

### Problem: Pane Too Small
```bash
# Resize panes
Ctrl+a then H/J/K/L

# Or try different layout
Ctrl+a then Space
```

## Next Steps

Once comfortable with tmux:
1. Explore tmux plugins (TPM - tmux Plugin Manager)
2. Learn about tmux scripting
3. Create custom layouts
4. Try pair programming with tmux
5. Integrate with tools like tmuxinator

## Additional Resources

- [tmux Manual](https://man.openbsd.org/tmux)
- [tmux Cheat Sheet](https://tmuxcheatsheet.com/)
- [The Tao of tmux](https://leanpub.com/the-tao-of-tmux/read)
- [Awesome tmux](https://github.com/rothgar/awesome-tmux)

---

Master tmux and you'll never want to work without it! 🚀
Practice daily and it will become second nature.
