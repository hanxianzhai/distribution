import { gql } from 'apollo-server-express'
import * as db from '../database'

export const typeDefs = gql`
    extend type Query {
        distribution_data_directories: [Distribution_data_directory]
        distribution_data_directory(id: ID!): Distribution_data_directory
    }

    type Distribution_data_directory {
        id: ID!
        pid: Int
        name: String
        description: String
        manual_version: String
    }
`;

export const resolvers = {
    Query: {
        distribution_data_directories: async () => db.distribution_data_directories.findAll(),
        distribution_data_directory: async (obj, args, context, info) =>
            db.distribution_data_directories.findByPk(args.id),
    },
};
