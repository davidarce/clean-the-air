import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const sqliteConnectionOptions: SqliteConnectionOptions = {
  type: "sqlite",
  database: 'database.sql',
  synchronize: true,
};

const development = {
  apiBasePath: "https://api.openaq.org/v2/",
  typeOrmConfig: sqliteConnectionOptions,
};

export default development;
