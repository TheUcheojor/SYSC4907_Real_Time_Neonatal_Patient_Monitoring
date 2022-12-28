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

export class DatabaseService {
  /**
   * The database
   */
  private static database: SQLiteDatabase;

  /**
   * The dataBaseService instance, following a singleton model
   */
  private static dataBaseService: DatabaseService;

  /**
   * The database name
   */
  static readonly DATABASE_NAME = "TCA.db";

  /**
   * The DatabaseService private constructor
   */
  private constructor() {}

  public static getDatabaseService(): DatabaseService {
    if (DatabaseService.dataBaseService == undefined) {
      return new DatabaseService();
    }

    return DatabaseService.dataBaseService;
  }

  private async setUpDatabase() {
    database = await openDatabase({
      name: DatabaseService.DATABASE_NAME,
      location: "default",
    });
  }
}
