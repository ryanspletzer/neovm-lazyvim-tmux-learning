# Neovim Guide for Beginners

Welcome to your Neovim learning journey! This guide will help you master the basics and become productive with Neovim.

## Table of Contents
- [What is Neovim?](#what-is-neovim)
- [Understanding Modes](#understanding-modes)
- [Basic Navigation](#basic-navigation)
- [Editing Text](#editing-text)
- [Working with Files](#working-with-files)
- [Visual Mode](#visual-mode)
- [Search and Replace](#search-and-replace)
- [Essential Commands](#essential-commands)
- [Practice Exercises](#practice-exercises)

## What is Neovim?

Neovim is a modern, extensible text editor based on Vim. It's designed for efficiency, allowing you to edit text without using a mouse. The learning curve is steep, but the productivity gains are worth it!

### Why Neovim?
- **Speed**: Edit at the speed of thought once you master it
- **Keyboard-centric**: No need to reach for the mouse
- **Extensible**: Powerful plugin ecosystem
- **Universal**: Available on all platforms
- **Modern**: Built-in LSP, Lua support, and more

## Understanding Modes

Neovim has different modes for different tasks. This is one of its most important concepts!

### Normal Mode
- **Purpose**: Navigate and execute commands
- **How to enter**: Press `Esc` from any other mode
- **What you can do**: Move cursor, delete, copy, paste, etc.
- **Default mode**: Neovim starts in Normal mode

### Insert Mode
- **Purpose**: Type and insert text
- **How to enter**: Press `i`, `a`, `o`, or other insert commands
- **What you can do**: Type text like a normal editor
- **How to exit**: Press `Esc` to return to Normal mode

### Visual Mode
- **Purpose**: Select text
- **How to enter**: Press `v` (character), `V` (line), or `Ctrl+v` (block)
- **What you can do**: Select text to copy, delete, or modify
- **How to exit**: Press `Esc`

### Command Mode
- **Purpose**: Execute commands
- **How to enter**: Press `:` from Normal mode
- **What you can do**: Save, quit, search, replace, etc.
- **How to execute**: Press `Enter`

## Basic Navigation

### Moving the Cursor (Normal Mode)

#### Basic Movement
```
h - Move left
j - Move down
k - Move up
l - Move right
```

**Mnemonic**: Think of `j` looking like a down arrow!

#### Word Movement
```
w  - Jump to start of next word
b  - Jump to start of previous word
e  - Jump to end of word
W  - Jump to start of next WORD (space-separated)
B  - Jump to start of previous WORD
```

#### Line Movement
```
0  - Jump to start of line
^  - Jump to first non-blank character
$  - Jump to end of line
g_ - Jump to last non-blank character
```

#### Screen Movement
```
H  - Jump to top of screen
M  - Jump to middle of screen
L  - Jump to bottom of screen
gg - Jump to first line of file
G  - Jump to last line of file
10G or :10 - Jump to line 10
```

#### Scrolling
```
Ctrl+u - Scroll up half page
Ctrl+d - Scroll down half page
Ctrl+b - Scroll up full page
Ctrl+f - Scroll down full page
zz     - Center screen on cursor
```

## Editing Text

### Entering Insert Mode
```
i  - Insert before cursor
a  - Insert after cursor
I  - Insert at beginning of line
A  - Insert at end of line
o  - Open new line below and insert
O  - Open new line above and insert
```

### Deleting Text (Normal Mode)
```
x   - Delete character under cursor
X   - Delete character before cursor
dd  - Delete entire line
dw  - Delete word
d$  - Delete to end of line
d0  - Delete to beginning of line
D   - Delete to end of line (same as d$)
```

### Changing Text (Normal Mode)
```
r   - Replace single character
R   - Enter replace mode
cw  - Change word (delete and enter insert mode)
cc  - Change entire line
c$  - Change to end of line
C   - Change to end of line (same as c$)
s   - Substitute character (delete and insert)
S   - Substitute line (delete line and insert)
```

### Copying and Pasting
```
yy  - Yank (copy) line
yw  - Yank word
y$  - Yank to end of line
p   - Paste after cursor
P   - Paste before cursor
```

### Undo and Redo
```
u       - Undo
Ctrl+r  - Redo
```

## Working with Files

### Opening Files
```
:e filename     - Edit a file
:e .            - Open file explorer
:find filename  - Find and open file
```

### Saving and Quitting
```
:w              - Save (write)
:w filename     - Save as filename
:wq or :x       - Save and quit
:q              - Quit
:q!             - Quit without saving
:qa             - Quit all windows
:wqa            - Save all and quit
```

### Buffers
```
:ls or :buffers - List all buffers
:b N            - Go to buffer N
:bn             - Next buffer
:bp             - Previous buffer
:bd             - Delete (close) buffer
```

## Visual Mode

Visual mode allows you to select text before performing operations.

### Entering Visual Mode
```
v       - Character-wise visual mode
V       - Line-wise visual mode
Ctrl+v  - Block-wise visual mode
```

### Operations in Visual Mode
After selecting text:
```
d or x  - Delete selection
y       - Yank (copy) selection
c       - Change selection (delete and enter insert mode)
>       - Indent selection
<       - Unindent selection
~       - Toggle case
u       - Make lowercase
U       - Make uppercase
```

## Search and Replace

### Searching
```
/pattern    - Search forward for pattern
?pattern    - Search backward for pattern
n           - Go to next match
N           - Go to previous match
*           - Search for word under cursor (forward)
#           - Search for word under cursor (backward)
:noh        - Clear search highlighting
```

### Find and Replace
```
:s/old/new/         - Replace first occurrence in line
:s/old/new/g        - Replace all occurrences in line
:%s/old/new/g       - Replace all occurrences in file
:%s/old/new/gc      - Replace all with confirmation
:10,20s/old/new/g   - Replace in lines 10-20
```

## Essential Commands

### Repeating Commands
```
.   - Repeat last change
@@  - Repeat last macro
```

### Jumping
```
%   - Jump to matching bracket/parenthesis
``  - Jump back to previous position
Ctrl+o - Jump to older position
Ctrl+i - Jump to newer position
```

### Indentation
```
>>  - Indent line
<<  - Unindent line
==  - Auto-indent line
```

### Text Objects
Combine with operations (d, c, y, etc.):
```
iw  - Inner word
aw  - A word (including space)
is  - Inner sentence
as  - A sentence
ip  - Inner paragraph
ap  - A paragraph
i(  - Inside parentheses
a(  - Around parentheses
i"  - Inside quotes
a"  - Around quotes
it  - Inside tag
at  - Around tag
```

Examples:
- `daw` - Delete a word
- `ci"` - Change inside quotes
- `yap` - Yank a paragraph
- `di(` - Delete inside parentheses

### Macros
```
q{letter}   - Start recording macro into register {letter}
q           - Stop recording
@{letter}   - Execute macro from register {letter}
@@          - Repeat last macro
```

## Practice Exercises

### Exercise 1: Basic Movement
1. Open this file in Neovim: `nvim docs/NEOVIM_GUIDE.md`
2. Practice moving with `h`, `j`, `k`, `l`
3. Jump to the top with `gg`, to the bottom with `G`
4. Try moving by words with `w` and `b`

### Exercise 2: Insert and Edit
1. Press `o` to create a new line
2. Type some text
3. Press `Esc` to return to normal mode
4. Press `dd` to delete the line
5. Press `u` to undo

### Exercise 3: Visual Selection
1. Press `v` to enter visual mode
2. Move cursor to select text
3. Press `y` to copy
4. Move cursor elsewhere
5. Press `p` to paste

### Exercise 4: Search and Replace
1. Type `/hello` and press Enter to search
2. Press `n` to find next occurrence
3. Try `:%s/old/new/g` to replace text

### Exercise 5: Edit Your TypeScript File
1. Open `src/index.ts`
2. Change "Developer" to your name
3. Add a new function
4. Save with `:w`
5. Build and run with `:!npm run dev`

## Tips for Learning

1. **Start with vimtutor**: Run `vimtutor` in your terminal for an interactive 30-minute tutorial
2. **One command at a time**: Don't try to learn everything at once
3. **Use cheat sheets**: Keep a reference handy
4. **Practice daily**: Even 10 minutes a day helps build muscle memory
5. **Don't use arrow keys**: Force yourself to use h,j,k,l
6. **Stay in normal mode**: Only enter insert mode when you need to type
7. **Think in commands**: Combine operators with motions (like `d3w` to delete 3 words)

## Common Patterns

### Efficient Editing Patterns
```
ciw         - Change inner word
diw         - Delete inner word
yiw         - Yank inner word
ci"         - Change inside quotes
di(         - Delete inside parentheses
vip         - Select paragraph
dap         - Delete around paragraph
```

### Line Operations
```
dd          - Delete line
yy          - Copy line
cc          - Change line
==          - Auto-indent line
>>          - Indent line
<<          - Unindent line
```

### Quick Fixes
```
u           - Undo
Ctrl+r      - Redo
.           - Repeat last change
```

## Next Steps

Once you're comfortable with these basics:
1. Learn about registers (`:help registers`)
2. Explore marks (`:help mark`)
3. Master text objects (`:help text-objects`)
4. Check out the LazyVim guide for IDE-like features
5. Create your own custom keybindings

## Additional Resources

- Run `:help` in Neovim for built-in documentation
- Try `:Tutor` for an interactive tutorial
- Visit [OpenVim](https://www.openvim.com/) for interactive practice
- Check out [Vim Adventures](https://vim-adventures.com/) for gamified learning

---

Remember: Neovim has a learning curve, but it's worth it! Be patient with yourself and practice regularly. 🚀
