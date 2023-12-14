import { connect } from "mongoose";

export const startConnection = async({ uri,database }) => {
    try {
      const db = await connect(uri, {
        dbname: database,
      });

      console.log(`connected to ${db.connection.name} database`);
    } catch (error) {
        console.log(error);
    }
};