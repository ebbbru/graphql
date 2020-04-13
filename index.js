import {mergeTypes} from "merge-graphql-schemas";
import User from "./User";
import Game from "./game";

const typeDefs = [User, game];

export default mergeTypes(typeDefs, {all: true});