#!/usr/bin/env node

// inspired by https://github.com/vercel/next.js/blob/0355e5f63f87db489f36db8d814958cb4c2b828b/packages/create-next-app/helpers/examples.ts#L71
import * as PackageManager from '@expo/package-manager'
import chalk from 'chalk'
import Commander from 'commander'
import fs, { createWriteStream } from 'fs'
import got from 'got'
import { tmpdir } from 'os'
import path, { join } from 'path'
import prompts from 'prompts'
import { Stream } from 'stream'
import tar from 'tar'
import { promisify } from 'util'
import validateProjectName from 'validate-npm-package-name'

import packageJson from './package.json'
const pipeline = promisify(Stream.pipeline)

type RepoInfo = {
  username: string
  name: string
  branch: string
  filePath: string
}

let projectPath: string = ''

const program = new Commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(
    `${chalk.green('<project-directory>')} [options]
  
Example usage:

${chalk.blueBright(`npx ${packageJson.name} twitter-clone`)}`
  )
  .action((name) => {
    projectPath = name
  })
  .option(
    '--use-npm',
    `
  Explicitly tell the CLI to bootstrap the app using npm
`
  )
  //   .option(
  //     '--use-pnpm',
  //     `
  //   Explicitly tell the CLI to bootstrap the app using pnpm
  // `
  //   )
  // .option(
  //   `-t, --template <template>`,
  //   'Options are just `blank`, `with-tailwind`, `with-custom-font`. The default is `blank`'
  // )
  .allowUnknownOption()
  .parse(process.argv)

const packageManager = program.useNpm
  ? 'npm'
  : program.usePnpm
  ? 'pnpm'
  : 'yarn'

async function downloadTar(url: string) {
  const tempFile = join(
    tmpdir(),
    `universal-medusa-csa-example.temp-${Date.now()}`
  )
  await pipeline(got.stream(url), createWriteStream(tempFile))
  return tempFile
}

async function downloadAndExtractExample(
  root: string,
  name = 'blank'
): Promise<void> {
  if (name === '__internal-testing-retry') {
    throw new Error('This is an internal example for testing the CLI.')
  }

  const tempFile = await downloadTar(
    `https://medusa-universal.ngrok.io/uma2.tar`
  )
  // const tempFile = await downloadTar(
  //     `https://codeload.github.com/bidah/universal-medusa/tar.gz/master`
  // )

  // const result = await pipeline(
  //   got.stream('https://codeload.github.com/nandorojo/solito/tar.gz/master'),
  //   tar.extract({ cwd: root, strip: 3 }, [
  //     `solito-master/example-monorepos/${name}`,
  //   ])
  // )

  // return result
  await tar.x({
    file: tempFile,
    cwd: root,
  })

  fs.unlinkSync(tempFile)
}

async function run() {
  console.log(chalk.bold('🧑‍🎤 Creating universal medusa app...'))
  if (typeof projectPath === 'string') {
    projectPath = projectPath.trim()
  }
  if (!projectPath) {
    const res = await prompts({
      type: 'text',
      name: 'path',
      message: 'What is your project named?',
      initial: 'my-universal-medusa-app',
      validate: (name) => {
        const validation = validateNpmName(path.basename(path.resolve(name)))
        if (validation.valid) {
          return true
        }
        return 'Invalid project name: ' + validation.problems![0]
      },
    })

    if (typeof res.path === 'string') {
      projectPath = res.path.trim()
    }
  }

  if (!projectPath) {
    console.log()
    console.log('Please specify the project directory:')
    console.log(
      `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
    )
    console.log()
    console.log('For example:')
    console.log(
      `  ${chalk.cyan(program.name())} ${chalk.green(
        'my-universal-medusa-app'
      )}`
    )
    console.log()
    console.log(
      `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
    )
    process.exit(1)
  }

  const resolvedProjectPath = path.resolve(process.cwd(), projectPath)
  const projectName = path.basename(resolvedProjectPath)

  const { valid, problems } = validateNpmName(projectName)
  if (!valid) {
    console.error(
      `Could not create a project called ${chalk.red(
        `"${projectName}"`
      )} because of npm naming restrictions:`
    )

    problems!.forEach((p) => console.error(`    ${chalk.red.bold('*')} ${p}`))
    process.exit(1)
  }

  if (fs.existsSync(resolvedProjectPath)) {
    console.log()
    console.log(
      chalk.red('🚨 [solito] error'),
      `You tried to make a project called ${chalk.underline(
        chalk.blueBright(projectName)
      )}, but a folder with that name already exists: 
${chalk.blueBright(resolvedProjectPath)}

${chalk.bold(chalk.red(`Please pick a different project name 🥸`))}`
    )
    console.log()
    console.log()
    process.exit(1)
  }
  console.log()
  console.log(
    `Creating a new universal medusa app in ${chalk.blueBright(projectName)}...`
  )
  fs.mkdirSync(resolvedProjectPath)
  console.log(chalk.green(`${projectName} folder created.`))

  try {
    console.log(`Copying codebase into ${chalk.blueBright(projectName)}...`)
    console.log()
    await downloadAndExtractExample(resolvedProjectPath, program.template)
    console.log(`Downloaded codebase into ${chalk.blueBright(projectName)}...`)
    console.log()
    console.log(chalk.green(`${projectName} created!`))
  } catch (e) {
    console.error('[universal medusa] Failed to download\n\n', e)

    process.exit(1)
  }

  const useYarn = packageManager === 'yarn'

  console.log('Installing packages. This might take a couple of minutes.')
  console.log()
  try {
    await installDependenciesAsync(
      resolvedProjectPath,
      useYarn ? 'yarn' : 'npm'
    )
    // await install(resolvedProjectPath, null, { packageManager, isOnline })
  } catch (e: any) {
    console.error(
      '[universal medusa] error installing node_modules with ' +
        packageManager +
        '\n',
      e?.message
    )
    process.exit(1)
  }

  console.log('Removing extra folders. This might take a couple of seconds.')
  console.log()
  try {
    await removeDirectories(resolvedProjectPath)
  } catch (e: any) {
    console.error(
      '[universal medusa] error removing extra folders from monorepo',
      e?.message
    )
    process.exit(1)
  }

  //

  console.log(
    `${chalk.green('Success!')} Created ${projectName} at ${projectPath}`
  )
  console.log('Inside that directory, you can run several commands:')
  console.log()
  console.log(chalk.cyan(`  ${packageManager} ${useYarn ? '' : 'run '}web`))
  console.log('    Starts the development server for the Next.js site.')
  console.log()
  console.log(chalk.cyan(`  ${packageManager} ${useYarn ? '' : 'run '}native`))
  console.log('    Starts the metro bundler for Expo app')
  console.log()
  console.log(chalk.cyan(`  ${packageManager} ${useYarn ? '' : 'run '}medusa`))
  console.log('    Starts the development server for the Medusa backend')
  console.log()
  console.log('We suggest that you begin with medusa configuration:')
  console.log('Create postgres db named `medusastore` and then seed db:')
  console.log()
  console.log(chalk.cyan('  cd'), projectName)
  console.log(
    `  ${chalk.cyan(`${packageManager} ${useYarn ? '' : 'run '}medusa:seed`)}`
  )
  console.log()
}

run()

function validateNpmName(name: string): {
  valid: boolean
  problems?: string[]
} {
  const nameValidation = validateProjectName(name)
  if (nameValidation.validForNewPackages) {
    return { valid: true }
  }

  return {
    valid: false,
    problems: [
      ...(nameValidation.errors || []),
      ...(nameValidation.warnings || []),
    ],
  }
}

export async function installDependenciesAsync(
  projectRoot: string,
  packageManager: 'yarn' | 'npm'
) {
  const options = { cwd: projectRoot }
  if (packageManager === 'yarn') {
    const yarn = new PackageManager.YarnPackageManager(options)
    await yarn.installAsync()
  } else {
    await new PackageManager.NpmPackageManager(options).installAsync()
  }
}

export async function removeDirectories(rootDir: string) {
  try {
    // Remove 'docs' and 'create-universal-medusa-app' directories
    fs.rmdirSync(path.join(rootDir, '/apps/docs'), { recursive: true })
    fs.rmdirSync(path.join(rootDir, '/apps/create-universal-medusa-app'), {
      recursive: true,
    })
  } catch (e) {
    console.error('Error while removing directories:', e)
  }
}

export async function removeDirectoriesAsync(rootDir: string) {
  try {
    // Remove 'docs' and 'create-universal-medusa-app' directories
    await fs.promises.rmdir(path.join(rootDir, 'docs'), { recursive: true })
    await fs.promises.rmdir(path.join(rootDir, 'create-universal-medusa-app'), {
      recursive: true,
    })
  } catch (e) {
    console.error('Error while removing directories:', e)
  }
}
