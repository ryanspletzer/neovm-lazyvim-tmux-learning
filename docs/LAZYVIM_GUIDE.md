# LazyVim Guide

LazyVim is a Neovim configuration that transforms Neovim into a modern IDE-like experience. This guide will help you understand and use its features.

## Table of Contents
- [What is LazyVim?](#what-is-lazyvim)
- [Key Concepts](#key-concepts)
- [Essential Keybindings](#essential-keybindings)
- [File Navigation](#file-navigation)
- [LSP Features](#lsp-features)
- [Code Editing](#code-editing)
- [Plugin Management](#plugin-management)
- [Customization](#customization)

## What is LazyVim?

LazyVim is a pre-configured Neovim setup that includes:
- **Plugin Manager**: Lazy.nvim for efficient plugin management
- **LSP Support**: Language Server Protocol for intelligent code features
- **Treesitter**: Better syntax highlighting and code understanding
- **Fuzzy Finding**: Quick file and text search
- **Git Integration**: Built-in git operations
- **Beautiful UI**: Modern, polished interface

### Why LazyVim?
- **Batteries Included**: Works out of the box
- **Fast**: Lazy-loading plugins for quick startup
- **Modern**: Uses latest Neovim features
- **Extensible**: Easy to customize
- **Well-maintained**: Active community and updates

## Key Concepts

### Leader Key
The leader key is your gateway to most commands. In this configuration:
- **Leader**: `Space`
- **Local Leader**: `\`

Press `Space` and wait a moment to see available commands!

### Which-Key
LazyVim shows you available keybindings after you press the leader key. This makes discovery easy - just press `Space` and explore!

## Essential Keybindings

### General
```
Space        - Leader key (wait to see options)
:            - Command mode
/            - Search in file
?            - Search backwards
Esc          - Clear search highlight / return to normal mode
Ctrl+s       - Save file (works in any mode!)
```

### File Operations
```
Space + f + f    - Find files (fuzzy finder)
Space + f + r    - Recent files
Space + f + n    - New file
Space + /        - Search in current file (live grep)
Space + ,        - Switch between buffers
Space + `        - Switch to last buffer
```

### Window Management
```
Ctrl+h           - Go to left window
Ctrl+j           - Go to lower window
Ctrl+k           - Go to upper window
Ctrl+l           - Go to right window

Space + w + w    - Switch windows
Space + w + d    - Delete window
Space + w + -    - Split window horizontally
Space + w + |    - Split window vertically

Ctrl+Up          - Increase window height
Ctrl+Down        - Decrease window height
Ctrl+Left        - Decrease window width
Ctrl+Right       - Increase window width
```

### Buffer Management
```
Shift+h          - Previous buffer
Shift+l          - Next buffer
Space + b + b    - Switch to other buffer
[b               - Previous buffer (alternative)
]b               - Next buffer (alternative)
```

### Tab Management
```
Space + <tab> + <tab>    - New tab
Space + <tab> + ]        - Next tab
Space + <tab> + [        - Previous tab
Space + <tab> + d        - Close tab
Space + <tab> + f        - First tab
Space + <tab> + l        - Last tab
```

### Line Operations
```
Alt+j            - Move line down
Alt+k            - Move line up
```

In visual mode:
```
Alt+j            - Move selected lines down
Alt+k            - Move selected lines up
```

## File Navigation

### Telescope (Fuzzy Finder)
Telescope is your main tool for finding files and content.

```
Space + f + f    - Find files
Space + f + r    - Recent files
Space + f + g    - Git files
Space + /        - Live grep (search in files)
Space + s + g    - Live grep (alternative)
Space + s + w    - Search current word
```

**Tips**:
- Start typing to filter results
- Use arrow keys or `Ctrl+j/k` to navigate
- Press `Enter` to open
- Press `Esc` to cancel

### File Explorer
```
Space + e        - Toggle file explorer
```

In the file explorer:
- `j/k` - Navigate up/down
- `l` or `Enter` - Open file/folder
- `h` - Go to parent directory
- `a` - Create new file/folder
- `r` - Rename
- `d` - Delete
- `y` - Copy
- `x` - Cut
- `p` - Paste
- `?` - Show help

## LSP Features

Language Server Protocol provides intelligent code features. For TypeScript, these work automatically!

### Navigation
```
g + d            - Go to definition
g + r            - Go to references
g + I            - Go to implementation
g + D            - Go to declaration
K                - Show hover documentation
```

### Code Actions
```
Space + c + a    - Code actions
Space + c + r    - Rename symbol
Space + c + f    - Format file/selection
```

### Diagnostics (Errors and Warnings)
```
Space + x + x    - Show diagnostics list
[d               - Previous diagnostic
]d               - Next diagnostic
Space + c + d    - Line diagnostics
```

### Symbols
```
Space + s + s    - Document symbols
Space + s + S    - Workspace symbols
```

## Code Editing

### Auto-completion
As you type, you'll see completion suggestions automatically:
- `Ctrl+n` - Next suggestion
- `Ctrl+p` - Previous suggestion
- `Enter` - Accept suggestion
- `Ctrl+e` - Close completion menu

### Comments
```
g + c + c        - Toggle comment on current line
```

In visual mode:
```
g + c            - Toggle comment on selection
```

### Indentation
```
>                - Indent (in visual mode)
<                - Unindent (in visual mode)
>>               - Indent current line
<<               - Unindent current line
==               - Auto-indent current line
```

### Multiple Cursors / Search
```
*                - Search for word under cursor
#                - Search for word under cursor (backwards)
n                - Next search result
N                - Previous search result
```

## Plugin Management

LazyVim uses Lazy.nvim for plugin management.

### Opening Plugin Manager
```
Space + l        - Open Lazy plugin manager
```

In the Lazy interface:
- `I` - Install missing plugins
- `U` - Update plugins
- `S` - Sync (install missing, update existing)
- `C` - Check for updates
- `X` - Clean (remove unused plugins)
- `q` - Close

### Checking Plugin Status
The plugin manager shows:
- Installed plugins
- Lazy-loaded plugins
- Loading times
- Available updates

## Git Integration

LazyVim includes git integration for common operations.

### Git Signs (in gutter)
Shows git changes next to line numbers:
- `+` Green - Added lines
- `~` Yellow - Changed lines
- `-` Red - Deleted lines

### Git Commands
```
Space + g + g    - Open lazygit (if installed)
Space + g + s    - Git status
Space + g + b    - Git blame
[c               - Previous git change
]c               - Next git change
```

### Git Hunks (Changes)
```
Space + g + h + s    - Stage hunk
Space + g + h + r    - Reset hunk
Space + g + h + p    - Preview hunk
```

## Terminal

### Toggle Terminal
```
Space + f + t    - Toggle floating terminal
Ctrl+/           - Toggle terminal (alternative)
```

In terminal mode:
- `Ctrl+\` - Exit terminal mode (back to normal mode)
- Type `exit` - Close terminal

### Running Commands
You can run shell commands directly:
```
:!npm run build      - Run npm build
:!npm run dev        - Run dev server
```

## Search and Replace

### In Current File
```
/pattern         - Search forward
?pattern         - Search backward
n                - Next match
N                - Previous match

:%s/old/new/g    - Replace all in file
:%s/old/new/gc   - Replace with confirmation
```

### Across Files (with Telescope)
```
Space + s + g    - Live grep across files
Space + s + w    - Search word under cursor
```

## Customization

### Configuration Files
Your LazyVim configuration is in `.config/nvim/`:
```
.config/nvim/
├── init.lua                 # Entry point
└── lua/
    ├── config/
    │   ├── options.lua      # Vim options
    │   ├── keymaps.lua      # Custom keybindings
    │   └── autocmds.lua     # Auto commands
    └── plugins/
        └── typescript.lua   # TypeScript config
```

### Adding Custom Keybindings
Edit `.config/nvim/lua/config/keymaps.lua`:
```lua
local map = vim.keymap.set

-- Example: Add a custom keybinding
map("n", "<leader>hw", function()
  print("Hello World!")
end, { desc = "Print Hello World" })
```

### Adding Plugins
Create a new file in `.config/nvim/lua/plugins/`:
```lua
-- Example: .config/nvim/lua/plugins/my-plugin.lua
return {
  "username/plugin-name",
  config = function()
    -- Plugin configuration here
  end,
}
```

Then restart Neovim and run `:Lazy sync`

### Changing Options
Edit `.config/nvim/lua/config/options.lua`:
```lua
local opt = vim.opt

opt.number = true          -- Show line numbers
opt.relativenumber = true  -- Show relative line numbers
opt.tabstop = 2            -- Tab width
-- Add your own options
```

## TypeScript Development

This configuration includes special support for TypeScript:

### Features
- **Syntax Highlighting**: Via Treesitter
- **Auto-completion**: Intelligent suggestions
- **Type Checking**: Real-time error detection
- **Go to Definition**: Jump to source
- **Rename Refactoring**: Safely rename symbols
- **Auto-imports**: Automatic import suggestions

### TypeScript-Specific Commands
```
g + d            - Go to type definition
K                - Show type information
Space + c + r    - Rename symbol
Space + c + a    - Code actions (auto-fix, organize imports)
Space + c + f    - Format code
```

### Building and Running
From Neovim:
```
:!npm run build      - Build TypeScript
:!npm run dev        - Build and run
:!npm run watch      - Watch mode
```

Or use the integrated terminal:
```
Space + f + t        - Open terminal
npm run dev          - Run your commands
```

## Quick Reference

### Most Used Commands
```
Space + f + f        - Find files
Space + /            - Search in files
Space + e            - File explorer
Ctrl+s               - Save
g + d                - Go to definition
K                    - Show documentation
Space + c + a        - Code actions
Space + x + x        - Show errors
Space + l            - Plugin manager
```

## Tips and Tricks

### 1. Discover Commands
Press `Space` and wait - Which-Key will show you all available commands!

### 2. Learn One Feature at a Time
Don't try to memorize everything. Focus on:
1. File navigation (Space + f + f)
2. Search (Space + /)
3. LSP features (g + d, K)
4. Then gradually add more

### 3. Use Hover Documentation
Press `K` on any symbol to see its documentation. This is incredibly useful for learning APIs!

### 4. Code Actions Are Powerful
Press `Space + c + a` to see available code actions like:
- Auto-fix errors
- Organize imports
- Add missing imports
- Generate code

### 5. Integrated Terminal
Use `Space + f + t` to open a terminal within Neovim. Great for running builds and tests!

### 6. Git Integration
Stage and review changes without leaving Neovim. Check the gutter for change indicators.

### 7. Format on Save
LazyVim can auto-format on save. Check your options!

## Practice Exercises

### Exercise 1: File Navigation
1. Press `Space + f + f` to open file finder
2. Type `index` to find the TypeScript file
3. Press Enter to open it

### Exercise 2: LSP Features
1. Open `src/index.ts`
2. Put cursor on `createGreeting`
3. Press `g + d` to go to definition
4. Press `K` to see documentation

### Exercise 3: Code Actions
1. Create a TypeScript error (e.g., use undefined variable)
2. Put cursor on the error
3. Press `Space + c + a` to see code actions
4. Choose a fix

### Exercise 4: Search and Replace
1. Press `Space + /` to search
2. Type a word to find
3. Navigate through results
4. Try replacing with `:%s/old/new/g`

### Exercise 5: Terminal Integration
1. Press `Space + f + t` to open terminal
2. Run `npm run build`
3. See the output
4. Close with `exit`

## Next Steps

Once comfortable with LazyVim:
1. Explore more plugins in `:Lazy`
2. Customize your keybindings
3. Add language support for other languages
4. Try different color schemes
5. Join the LazyVim community

## Additional Resources

- [LazyVim Documentation](https://www.lazyvim.org/)
- [Lazy.nvim Plugin Manager](https://github.com/folke/lazy.nvim)
- [Telescope Documentation](https://github.com/nvim-telescope/telescope.nvim)
- [LSP Documentation](https://neovim.io/doc/user/lsp.html)

---

Happy coding with LazyVim! 🚀 Remember to press `Space` and explore the available commands!
