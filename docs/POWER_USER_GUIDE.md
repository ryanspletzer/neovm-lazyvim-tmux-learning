# Power-User Config Guide

This guide documents the power-user configuration layered on top of the
stock LazyVim starter and basic tmux config.
Each section explains what was added, why, and the exact keystrokes.

## Table of Contents

- [Phase 1: tmux Full Config](#phase-1-tmux-full-config)
- [Phase 2: Seamless Neovim-tmux Navigation](#phase-2-seamless-neovim-tmux-navigation)
- [Phase 3: Claude Code Neovim Plugin](#phase-3-claude-code-neovim-plugin)
- [Phase 4: File Detection and Auto-Reload](#phase-4-file-detection-and-auto-reload)
- [Phase 5: LazyVim Extras](#phase-5-lazyvim-extras)
- [Common Workflows](#common-workflows)
- [Manual Setup Steps](#manual-setup-steps)
- [Cheat Sheet](#cheat-sheet)

## Phase 1: tmux Full Config

**File:** `~/.tmux.conf`

**Why:** The starter config had only scrollback and vi mode keys.
A full config eliminates friction points:
no prefix rebind, no split shortcuts, no mouse, no clipboard integration,
no session persistence.

### What Changed

**Core settings:**

- **Prefix** rebound from `Ctrl+b` to `Ctrl+a` (easier to reach)
- **Mouse** enabled (click panes, scroll, select text)
- **Base index** set to 1 (windows/panes start at 1, not 0)
- **Escape time** set to 0 (no delay switching vim modes)
- **Focus events** on (tells Neovim when the terminal regains focus,
  triggering file reload)
- **Clipboard** integration via `set-clipboard on`
- **Scrollback** increased to 50,000 lines
  (useful for long Claude Code output)
- **Auto-rename** windows show current directory name
- **Extended keys** enabled for modifier key sequences

**Terminal type:**

- Changed from `screen-256color` to `tmux-256color`
  with undercurl support.
  This gives Neovim proper diagnostic squiggly underlines
  instead of plain underlines.

**Key bindings:**

| Binding | Action |
| ------- | ------ |
| `prefix` then `\|` | Vertical split (keeps current path) |
| `prefix` then `-` | Horizontal split (keeps current path) |
| `prefix` then `c` | New window (keeps current path) |
| `prefix` then `x` | Kill pane (no confirmation prompt) |
| `prefix` then `C` | 60/40 Claude Code layout |
| `prefix` then `r` | Reload tmux config |
| `Ctrl+Alt+Left/Right` | Reorder windows |
| `Alt+Arrow` | Navigate panes (no prefix) |
| `prefix` then `h/j/k/l` | Navigate panes (vim-style) |
| `prefix` then `H/J/K/L` | Resize panes (repeatable) |

**Copy mode:** vi keys with `v` to select, `y` to yank.
tmux-yank plugin copies to macOS system clipboard.

**TPM plugins installed:**

| Plugin | Purpose |
| ------ | ------- |
| `tmux-plugins/tpm` | Plugin manager |
| `aserowy/tmux.nvim` | Seamless Neovim/tmux navigation |
| `tmux-plugins/tmux-resurrect` | Save/restore sessions |
| `tmux-plugins/tmux-continuum` | Auto-save every 15 min |
| `tmux-plugins/tmux-yank` | macOS clipboard in copy mode |

## Phase 2: Seamless Neovim-tmux Navigation

**Files:**

- `~/.config/nvim/lua/plugins/tmux.lua`
- `~/.config/nvim/lua/plugins/snacks.lua`
- tmux.nvim settings in `~/.tmux.conf`

**Why:** Without this, `Ctrl+h/j/k/l` only moves between Neovim splits.
When you hit the edge of Neovim, nothing happens.
With tmux.nvim on both sides (Neovim plugin + tmux plugin),
the same keys seamlessly cross between Neovim and tmux panes.

### How It Works

The `aserowy/tmux.nvim` plugin runs in both Neovim (Lua plugin)
and tmux (TPM plugin).
When you press `Ctrl+l` at the rightmost Neovim split,
the plugin detects there's no more Neovim split to the right
and tells tmux to move to the next pane.

### Navigation Keys

| Keys | Action |
| ---- | ------ |
| `Ctrl+h` | Move left (Neovim split or tmux pane) |
| `Ctrl+j` | Move down |
| `Ctrl+k` | Move up |
| `Ctrl+l` | Move right |
| `Ctrl+Shift+Left` | Resize left (5 cells) |
| `Ctrl+Shift+Down` | Resize down |
| `Ctrl+Shift+Up` | Resize up |
| `Ctrl+Shift+Right` | Resize right |

### Snacks Picker Override

LazyVim's Snacks picker normally binds `Ctrl+h/j/k/l` inside its
popup windows.
The `snacks.lua` plugin disables those bindings so that
tmux navigation still works when a picker is open.

## Phase 3: Claude Code Neovim Plugin

**File:** `~/.config/nvim/lua/plugins/claudecode.lua`

**Why:** Without this, switching between Neovim and Claude Code
means clicking tmux panes or using tmux prefix keys.
The plugin lets you toggle a Claude Code terminal inside Neovim,
send selections directly, and manage diffs.

### How the Plugin Works

The `coder/claudecode.nvim` plugin opens Claude Code
in a Neovim terminal.
It provides commands for common Claude Code operations,
all under the `Space a` prefix.

### Keybindings

All keys start with `Space a` (leader + a for "AI"):

| Keys | Action |
| ---- | ------ |
| `Space a c` | Toggle Claude Code terminal |
| `Space a f` | Focus Claude Code (bring to front) |
| `Space a r` | Resume previous Claude conversation |
| `Space a C` | Continue Claude (with `--continue` flag) |
| `Space a b` | Add current buffer to Claude context |
| `Space a s` | Send visual selection to Claude |
| `Space a s` | Add file from explorer (when in file tree) |
| `Space a a` | Accept a diff from Claude |
| `Space a d` | Deny a diff from Claude |

### Typical Flow

1. Open a file in Neovim
2. `Space a c` to open Claude Code
3. Ask Claude to make changes
4. Claude edits the file; Neovim auto-reloads (Phase 4)
5. Review the diff: `Space a a` to accept, `Space a d` to deny
6. Select code with `v` then `Space a s` to send a snippet to Claude

## Phase 4: File Detection and Auto-Reload

**Files:**

- `~/.config/nvim/lua/config/autocmds.lua`
- `~/.config/nvim/lua/config/options.lua`

**Why:** When Claude Code edits a file that's open in Neovim,
you need Neovim to detect the change and reload automatically.
Without this, you'd see stale content and risk overwriting
Claude's changes.

### What Was Added

**options.lua:**

- `vim.opt.autoread = true` --
  Neovim automatically reads the file when it detects a change
- `vim.opt.clipboard = "unnamedplus"` --
  system clipboard integration (yank goes to macOS clipboard)

**autocmds.lua:**

- **`FocusGained` + `BufEnter` -> `checktime`** --
  every time you switch to Neovim (from tmux, from another app),
  it checks all open buffers for changes
- **`FileChangedShellPost` -> notification** --
  when a buffer is reloaded, you see
  "File changed on disk. Buffer reloaded."

### How the Chain Works

1. Claude Code writes to `src/index.ts`
2. You press `Ctrl+h` to switch back to Neovim
3. tmux sends a `FocusGained` event (because `focus-events` is on)
4. Neovim runs `checktime`, sees the file changed
5. `autoread` reloads the buffer
6. `FileChangedShellPost` fires, showing the notification

## Phase 5: LazyVim Extras

**File:** `~/.config/nvim/lua/config/lazy.lua`

**Why:** LazyVim has a curated set of "extras" --
pre-configured plugin bundles you opt into.
These add editing superpowers without manual plugin configuration.

### Extras Added

#### `lang.markdown`

Markdown preview and enhanced rendering.
Useful for reading/editing the docs in this repo.

#### `coding.mini-surround`

Quickly add, delete, or replace surrounding characters
(quotes, brackets, tags).

| Keys | Action | Example |
| ---- | ------ | ------- |
| `sa` + motion + char | Add surround | `saiw"` wraps word in `"` |
| `sd` + char | Delete surround | `sd"` removes surrounding `"` |
| `sr` + old + new | Replace surround | `sr"'` changes `"` to `'` |

#### `coding.yanky`

Yank history ring -- cycle through previous yanks after pasting.

| Keys | Action |
| ---- | ------ |
| `p` | Paste (normal) |
| `]p` | Cycle to next yank in history |
| `[p` | Cycle to previous yank in history |

#### `editor.mini-files`

Lightweight file explorer that opens in a floating window.
Faster than neo-tree for quick file operations.

#### `editor.mini-move`

Move lines or visual blocks in any direction with `Alt` keys.

| Keys | Action |
| ---- | ------ |
| `Alt+h` | Move selection left |
| `Alt+j` | Move selection down |
| `Alt+k` | Move selection up |
| `Alt+l` | Move selection right |

#### `editor.inc-rename`

Inline rename with live preview.
Shows all occurrences updating as you type the new name.

| Keys | Action |
| ---- | ------ |
| `Space c r` | Start inline rename |

#### `ai.claudecode`

LazyVim's built-in Claude Code integration extra.
Works alongside our custom `claudecode.lua` plugin config.

### Extras Kept from Before

- `lang.typescript` -- TypeScript LSP, treesitter, etc.
- `lang.json` -- JSON LSP and formatting
- `ui.mini-animate` -- smooth scrolling and cursor animations

### Extras Deferred for Later

- `linting.eslint` -- when the project needs linting
- `formatting.prettier` -- when formatting is needed
- `test.core` + `dap.core` -- when writing tests
- `coding.blink` -- alternative completion engine (evaluate later)

## Common Workflows

### Navigate Between Neovim and Claude Code

```text
Neovim (left pane)          Claude Code (right pane)
+-------------------+       +-------------------+
|                   |       |                   |
|   editing code    | Ctrl+l|   claude code     |
|                   | ----> |                   |
|                   | <---- |                   |
|                   | Ctrl+h|                   |
+-------------------+       +-------------------+
```

1. Edit code in Neovim
2. `Ctrl+l` to jump to Claude Code pane
3. Type your prompt
4. `Ctrl+h` to jump back to Neovim
5. File auto-reloads with Claude's changes

### Send Code to Claude

1. In Neovim, visually select code (`v` then motion keys)
2. `Space a s` to send the selection to Claude
3. Claude receives the code with context

### Create a Claude Code Layout

1. Start in a single pane
2. `Ctrl+a` then `C` -- creates a 60/40 split
3. Left pane stays with Neovim, right pane is ready for Claude Code
4. Run `claude` in the right pane

### Resize Panes

- **Keyboard:** `Ctrl+Shift+Arrow` (works in both Neovim and tmux)
- **Prefix:** `Ctrl+a` then `H/J/K/L` (repeatable, 5 cells per press)
- **Mouse:** drag the pane border

### Save and Restore Sessions

Sessions auto-save every 15 minutes via tmux-continuum.
On tmux restart, tmux-resurrect restores your layout.

- **Manual save:** `Ctrl+a` then `Ctrl+s`
- **Manual restore:** `Ctrl+a` then `Ctrl+r`

### Surround Operations

```text
Hello world        saiw"    "Hello" world      (add quotes around word)
"Hello" world      sd"      Hello world        (delete surrounding quotes)
"Hello" world      sr"'     'Hello' world      (replace " with ')
<div>text</div>    sd>      text               (delete surrounding tag)
```

### Yank and Cycle

1. Yank several things: `yiw` on word1, `yiw` on word2, `yiw` on word3
2. Paste with `p` -- pastes word3
3. `[p` -- changes paste to word2
4. `[p` -- changes paste to word1

## Manual Setup Steps

These steps must be performed once, outside of Neovim:

### 1. Install TPM (tmux Plugin Manager)

```bash
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
```

### 2. Reload tmux Config

```bash
# From inside tmux:
# Ctrl+a then r

# Or from the command line:
tmux source-file ~/.tmux.conf
```

### 3. Install TPM Plugins

Inside tmux, press `Ctrl+a` then `I` (capital I).
TPM will clone and install all plugins.
You should see a message when it's done.

### 4. Install Neovim Plugins

Open Neovim. Lazy.nvim will automatically detect new plugins
and install them on first launch.
If prompted, press `Enter` to continue.

To manually sync plugins: open Neovim and run `:Lazy sync`.

### 5. Verify

- `Ctrl+h/j/k/l` navigates across Neovim splits and tmux panes
- `Ctrl+Shift+Arrow` resizes across both
- `Space a c` in Neovim toggles Claude Code
- Edit a file externally; Neovim shows "File changed on disk"
- `saiw"` wraps a word in quotes

## Cheat Sheet

### tmux (prefix = `Ctrl+a`)

```text
SPLITS AND WINDOWS
  prefix |           Vertical split
  prefix -           Horizontal split
  prefix C           Claude Code 60/40 layout
  prefix c           New window
  prefix x           Kill pane
  Ctrl+Alt+Left      Move window left
  Ctrl+Alt+Right     Move window right

NAVIGATION (seamless with Neovim)
  Ctrl+h/j/k/l       Move between panes (no prefix!)
  Alt+Arrow           Move between panes (no prefix)
  prefix h/j/k/l     Move between panes (with prefix)

RESIZE
  Ctrl+Shift+Arrow    Resize (seamless with Neovim)
  prefix H/J/K/L      Resize (repeatable, 5 cells)

SESSIONS
  prefix Ctrl+s       Save session
  prefix Ctrl+r       Restore session
  prefix d             Detach
  prefix s             Session list

COPY MODE
  prefix [             Enter copy mode
  v                    Start selection
  y                    Yank (copies to macOS clipboard)
  prefix ]             Paste

CONFIG
  prefix r             Reload config
  prefix I             Install TPM plugins
```

### Neovim/LazyVim (leader = `Space`)

```text
NAVIGATION
  Ctrl+h/j/k/l        Move between splits/tmux panes
  Ctrl+Shift+Arrow     Resize splits/tmux panes
  Shift+h / Shift+l    Previous/next buffer
  Space f f            Find files
  Space /              Search in project
  Space e              File explorer

EDITING
  sa + motion + char   Add surround (e.g. saiw")
  sd + char            Delete surround (e.g. sd")
  sr + old + new       Replace surround (e.g. sr"')
  Alt+h/j/k/l          Move lines/blocks
  Space c r            Inline rename
  gd                   Go to definition
  K                    Hover docs

YANK
  p                    Paste
  ]p / [p              Cycle yank history

CLAUDE CODE
  Space a c            Toggle Claude Code
  Space a f            Focus Claude Code
  Space a r            Resume Claude
  Space a C            Continue Claude
  Space a b            Add buffer to context
  Space a s            Send selection (visual mode)
  Space a a            Accept diff
  Space a d            Deny diff
```
