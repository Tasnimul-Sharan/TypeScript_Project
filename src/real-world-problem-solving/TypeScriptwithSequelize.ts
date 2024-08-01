// 10. TypeScript with Sequelize
// Problem You want to use Sequelize with TypeScript to interact with a SQL database.

import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

class User extends Model {
  public id!: number;
  public name!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize,
  }
);

sequelize.sync({ force: true }).then(() => {
  User.create({ name: "Alice" }).then((user) => {
    console.log(user.toJSON());
  });
});
