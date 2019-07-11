import {HttpModule, Module} from '@nestjs/common';
import {RssController} from './interfaces/controller/rest/rss.controller';
import {RssParseService} from './application/usecase/rss-parse.service';
import {RssRepository} from './application/repository/rss-repository';
import {RssRepositoryImpl} from './interfaces/request/rss-repository-impl';
import {RssRequest} from './infrastructure/rss-request';
import {GraphQLModule} from '@nestjs/graphql';
import {RssResolver} from './interfaces/controller/graphql/rss.resolver';
import {RssGuard} from './interfaces/controller/graphql/rss.guard';

@Module({
    imports: [
        HttpModule,
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            installSubscriptionHandlers: true,
        }),
    ],
    controllers: [RssController],
    providers: [
        RssParseService,
        RssRequest,
        {
            provide: 'RssRepository',
            useClass: RssRepositoryImpl,
        },
        RssResolver,
        RssGuard,
    ],
})
export class AppModule {
}
