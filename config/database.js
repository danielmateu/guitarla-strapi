module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ce48a3pgp3jocddr2qn0-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_g8up'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Hym0thVrHOozbzZwOCfcpCEVG1CNpwKZ'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
