import { logger } from "react-native-logs";
import * as FileSystem from "expo-file-system";

export default logger.createLogger({
  transportOptions: {
    colors: {
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
      debug: "white",
    },
    FS: FileSystem,
    fileName: "../logs/logs.txt",
  },
});
