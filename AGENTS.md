# Neovim + LazyVim + tmux Learning Project

## Purpose

This is a hands-on learning repo for mastering Neovim, LazyVim, and tmux.
The user is a beginner with these tools and will frequently ask
"how do I do X?" questions.
Answers should reference the **actual keybindings and configs in this repo**,
not generic defaults.

## Current Workspace Layout

- **tmux** session with two panes:
  left pane = Neovim/LazyVim, right pane = Claude Code
- macOS, iTerm2

## Key Configuration Details

### tmux (`~/.tmux.conf`)

| Setting | Value |
| ------- | ----- |
| Prefix | `Ctrl+a` (rebound from default `Ctrl+b`) |
| Vertical split | `prefix` then `\|` |
| Horizontal split | `prefix` then `-` |
| Claude Code layout | `prefix` then `C` (60/40 split) |
| Pane navigation (no prefix) | `Alt+Arrow` keys |
| Pane navigation (with prefix) | `h/j/k/l` (vim-style) |
| **Cross-pane navigation** | `Ctrl+h/j/k/l` (works across Neovim AND tmux) |
| Resize panes (prefix) | `prefix` then `H/J/K/L` (repeatable) |
| **Cross-pane resize** | `Ctrl+Shift+Arrow` (works across Neovim AND tmux) |
| Reorder windows | `Ctrl+Alt+Left/Right` |
| Kill pane | `prefix` then `x` (no confirmation) |
| Reload config | `prefix` then `r` |
| Copy mode | vi keys (`v` to select, `y` to yank) |
| Session save | automatic every 15 min (tmux-continuum) |
| Session restore | automatic on tmux start (tmux-resurrect) |
| Mouse | enabled |
| Base index | 1 (windows and panes start at 1) |
| Scrollback | 50,000 lines |
| Focus events | on (triggers Neovim file reload) |
| Window names | auto-rename to current directory |

### Neovim/LazyVim (`~/.config/nvim/`)

#### Core Settings

| Setting | Value |
| ------- | ----- |
| Leader key | `Space` |
| Local leader | `\` |
| Colorscheme | tokyonight |
| Line numbers | relative |
| Tab/indent | 2 spaces |
| Mouse | enabled |
| Clipboard | synced with system (`unnamedplus`) |
| Auto-reload | files reload when changed externally |

#### Navigation and Editing

| Action | Keys |
| ------ | ---- |
| Window/pane nav | `Ctrl+h/j/k/l` (crosses into tmux panes) |
| Resize panes | `Ctrl+Shift+Arrow` (crosses into tmux panes) |
| Move lines | `Alt+h/j/k/l` (mini.move, all directions) |
| Buffer prev/next | `Shift+h` / `Shift+l` |
| Save | `Ctrl+s` |
| Find files | `Space f f` |
| File explorer (neo-tree) | `Space e` |
| File explorer (mini.files) | `Space e` (lightweight alternative) |
| Search in project | `Space /` |
| Go to definition | `gd` |
| Hover docs | `K` |
| Inline rename | `Space c r` (inc-rename with preview) |
| Plugin manager | `Space l` |
| Quit all | `Space q q` |
| Split below | `Space -` |
| Split right | `Space \|` |

#### Surround (mini.surround)

| Action | Keys |
| ------ | ---- |
| Add surround | `sa` + motion + char (e.g. `saiw"`) |
| Delete surround | `sd` + char (e.g. `sd"`) |
| Replace surround | `sr` + old + new (e.g. `sr"'`) |

#### Yank History (yanky)

| Action | Keys |
| ------ | ---- |
| Cycle forward | `]p` after paste |
| Cycle backward | `[p` after paste |

#### Claude Code Integration

| Action | Keys |
| ------ | ---- |
| Toggle Claude Code | `Space a c` |
| Focus Claude Code | `Space a f` |
| Resume Claude | `Space a r` |
| Continue Claude | `Space a C` |
| Add current buffer | `Space a b` |
| Send selection | `Space a s` (visual mode) |
| Add file from explorer | `Space a s` (in file tree) |
| Accept diff | `Space a a` |
| Deny diff | `Space a d` |

### TypeScript Project

- Entry point: `src/index.ts`
- Build: `npm run build`
- Run: `npm run dev`
- Watch: `npm run watch`
- Uses stock `tsconfig.json`, outputs to `dist/`

## Important Behaviors

- **Files auto-reload** when Claude Code (or any external tool) edits them.
  Neovim shows "File changed on disk. Buffer reloaded." notification.
- **`Ctrl+h/j/k/l` navigation** works seamlessly across Neovim splits
  AND tmux panes thanks to tmux.nvim on both sides.
- **Sessions persist** across tmux restarts via tmux-resurrect/continuum.
- **`Ctrl+h/j/k/l` in Snacks picker** is disabled so navigation
  still works when a picker popup is open.

## Answering Style for This Repo

- When the user asks how to do something,
  give the **exact keystrokes** using the bindings above
- Use notation like `Ctrl+a` then `|` for tmux sequences
  (prefix, release, then next key)
- Use `Space f f` style for LazyVim leader sequences
- Mention which tool context the command applies to
  (tmux, Neovim normal mode, Neovim insert mode, terminal, etc.)
- Keep answers practical and short;
  the user is learning by doing, not reading essays

## Learning Resources in Repo

- `docs/NEOVIM_GUIDE.md` -- Neovim commands and modes
- `docs/LAZYVIM_GUIDE.md` -- LazyVim plugin features
- `docs/TMUX_GUIDE.md` -- tmux reference
- `docs/POWER_USER_GUIDE.md` -- power-user config walkthrough
- `QUICKSTART.md` -- 5-minute setup walkthrough
