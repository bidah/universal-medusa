import { getCurrentOs } from '../get-current-os'
import { Ora } from 'ora'
import postgresClient from '../../postgres-client'

export async function getDbClientAndCredentials({
  dbName = '',
  dbUrl = '',
}): Promise<{
  client: pg.Client
  dbConnectionString: string
}> {
  async function getForDbUrl(dbUrl: string): Promise<{
    client: pg.Client
    dbConnectionString: string
  }> {
    let client!: pg.Client

    try {
      client = await postgresClient({
        connectionString: dbUrl,
      })
    } catch (e) {
      console.error(
        chalk.red(
          `Couldn't connect to PostgreSQL using the database URL you passed. Make sure it's correct and try again.`
        )
      )
    }

    return {
      client,
      dbConnectionString: dbUrl,
    }
  }
  async function getForDbName(dbName: string): Promise<{
    client: pg.Client
    dbConnectionString: string
  }> {
    let client!: pg.Client
    let postgresUsername = 'postgres'
    let postgresPassword = ''

    try {
      client = await postgresClient({
        user: postgresUsername,
        password: postgresPassword,
      })
    } catch (e) {
      // ask for the user's postgres credentials
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'postgresUsername',
          message: 'Enter your Postgres username',
          default: 'postgres',
          validate: (input) => {
            return typeof input === 'string' && input.length > 0
          },
        },
        {
          type: 'password',
          name: 'postgresPassword',
          message: 'Enter your Postgres password',
        },
      ])

      postgresUsername = answers.postgresUsername
      postgresPassword = answers.postgresPassword

      try {
        client = await postgresClient({
          user: postgresUsername,
          password: postgresPassword,
        })
      } catch (e) {
        console.error(
          chalk.red(
            `Couldn't connect to PostgreSQL. Make sure you have PostgreSQL installed and the credentials you provided are correct.${EOL}${EOL}You can learn how to install PostgreSQL here: https://docs.medusajs.com/development/backend/prepare-environment?os=${getCurrentOs()}#postgresql${EOL}${EOL}If you keep running into this issue despite having PostgreSQL installed, please check out our troubleshooting guidelines: https://docs.medusajs.com/troubleshooting/database-error`
          )
        )
      }
    }

    // format connection string
    const dbConnectionString = formatConnectionString({
      user: postgresUsername,
      password: postgresPassword,
      host: client!.host,
      db: dbName,
    })

    return {
      client,
      dbConnectionString,
    }
  }
  if (dbName) {
    return await getForDbName(dbName)
  } else {
    return await getForDbUrl(dbUrl)
  }
}

export async function runCreateDb({
  client,
  dbName,
  spinner,
  resolvedProjectPath,
}: {
  client: pg.Client
  dbName: string
  spinner: Ora
  resolvedProjectPath: string
}) {
  async function createDb({ client, db }: CreateDbOptions) {
    await client.query(`CREATE DATABASE "${db}"`)
  }

  // create postgres database
  try {
    await createDb({
      client,
      db: dbName,
    })

    const envFile = path.join(
      resolvedProjectPath,
      'apps/medusa-store/.env.template'
    )
    const envConfig = fs.readFileSync(envFile, 'utf8')
    const updatedEnvConfig =
      envConfig + `\nPOSTGRES_URL=postgres://localhost/${dbName}\n`
    fs.writeFileSync(envFile, updatedEnvConfig)

    spinner.succeed(`Database ${dbName} created successfully.`)
    spinner.succeed(
      `Added database var POSTGRES_URL to .env file successfully. `
    )
  } catch (error) {
    spinner.fail(`Failed to create database ${dbName}.`)
    throw error
  }
}
