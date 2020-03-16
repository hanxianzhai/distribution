import { gql } from 'apollo-server-express'
import * as db from '../database'

export const typeDefs = gql`
    extend type Query {
        designer_data_directories: [Designer_data_directory]
        Designer_data_directory(id: ID!): Designer_data_directory
    }

    type Designer_data_directory {
        id: ID!
        pid: Int
        name: String
        desc: String
    }
`;

export const resolvers = {
    Query: {
        designer_data_directories: async () => db.designer_data_directories.findAll(),
        designer_data_directory: async (obj, args, context, info) =>
            db.designer_data_directories.findByPk(args.id),
    },
};
