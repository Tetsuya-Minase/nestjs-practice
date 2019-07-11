import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: join(__dirname, 'src/interfaces/controller/graphql/graphql.ts'),
    outputAs: 'class',
});
