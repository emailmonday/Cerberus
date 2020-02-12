# run-script-os

You will be able to use OS specific operations in npm scripts.

## Who would want this?
If you have experienced the pain of trying to make npm scripts usable across different operating system, this package is for you! Looking at you `rm` and `del`!

## Installation
`npm install --save-dev run-script-os`

## Usage

Set `run-script-os` (or `run-os`) as the value of the npm script field that you want different functionality per OS. In the example below, we set `test`, but it can be any npm script. It also uses `pre` and `post` commands (explained more below).

Then create OS specific scripts. In the example below, you can see:

* `test:win32`
* `test:linux:darwin`
* `test:default`

Those can have OS specific logic.

`package.json`
```
{
  ...
  "scripts": {
    ...
    "test": "run-script-os",
    "test:win32": "echo 'del whatever you want in Windows 32/64'",
    "test:darwin:linux": "echo 'You can combine OS tags and rm all the things!'",
    "test:default": "echo 'This will run on any platform that does not have its own script'"
    ...
  },
  ...
}
```

**Windows Output:**
```
> npm test
del whatever you want in Windows 32/64
```

**macOS and Linux Output:**
```
> npm test
You can combine OS tags and rm all the things!
```

### Aliases

You can use the following aliases:

* `:windows` - Alias for win32
* `:macos` - Alias for darwin
* `:nix` - This will run on anything considered to be a *nix OS (aix, darwin, freebsd, linux, openbsd, sunos, android)
* `:default` - This will run if no platform-specific scripts are found

### Override detection settings for linux-based shells on Windows

By default, run-script-os will detect cygwin/git bash as Windows. If you would rather your platform be detected as Linux under these environments:

Set environment variable:

```
RUN_OS_WINBASH_IS_LINUX=true
```

### NPM Scripts Order
When you call a script like `npm test`, npm will first call `pretest` if it exists. It will then call `test`, which, if you are using `run-script-os`, it will then call `npm run test:YOUR OS`, which in turn will call `pretest:YOUR OS` before actually running `test:YOUR OS`. Then `posttest:YOUR OS` will run, and then after that `posttest` will finally execute.

There is an example showing `pre` and `post` commands found in the [`package.json` of this repository](https://github.com/charlesguse/run-script-os/blob/master/package.json).

OS Options: `darwin`, `freebsd`, `linux`, `sunos`, `win32`

More information can be found in [Node's `process.platform`](https://nodejs.org/api/process.html#process_process_platform) and [Node's `os.platform()`](https://nodejs.org/api/os.html#os_os_platform).
