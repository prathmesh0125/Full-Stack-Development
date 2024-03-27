"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
function insertUserIntoTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://practice_owner:HN5Z3aOhJpcU@ep-still-wildflower-a5ggcrcb.us-east-2.aws.neon.tech/practice?sslmode=require",
        });
        try {
            yield client.connect();
            const insertUserQuery = `
      INSERT INTO users1 (username, email, password)
      VALUES ('madara', 'madara@123', 'mongikyo')
    `;
            const result = yield client.query(insertUserQuery);
            console.log("Insertion success", result);
        }
        catch (err) {
            console.error("Error during insertion:", err);
        }
        finally {
            yield client.end();
        }
    });
}
insertUserIntoTable();
