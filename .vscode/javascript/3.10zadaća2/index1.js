const typeChecker = require("./index");

typeChecker.checkAndPrintType("Hello");
typeChecker.checkAndPrintType(42);
typeChecker.checkAndPrintType(true);
typeChecker.checkAndPrintType([1, 2, 3]);
typeChecker.checkAndPrintType({ name: "John" });
typeChecker.checkAndPrintType(null);
