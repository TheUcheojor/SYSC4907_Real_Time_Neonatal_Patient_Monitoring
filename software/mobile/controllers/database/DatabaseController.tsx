/**
 * Author: Paul Okenne
 * File: database-service
 * Purpose: Provides database-related functionalities
 */
import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from "react-native-sqlite-storage";

export class DatabaseController {
  /**
   * The database
   */
  private database!: SQLiteDatabase;

  /**
   * The dataBaseController instance, following a singleton model
   */
  private static dataBaseController: DatabaseController;

  /**
   * The database name
   */
  static readonly DATABASE_NAME = "TCA.db";

  /**
   * The DatabaseController private constructor
   */
  private constructor() {}

  public static async getConfiguredDatabaseController(): Promise<DatabaseController> {
    if (DatabaseController.dataBaseController == undefined) {
      const newDatabaseController: DatabaseController =
        new DatabaseController();
      await newDatabaseController.setUpDatabase();

      return newDatabaseController;
    }

    return DatabaseController.dataBaseController;
  }

  private async setUpDatabase() {
    this.database = await openDatabase({
      name: DatabaseController.DATABASE_NAME,
      location: "default",
    });
  }
}
