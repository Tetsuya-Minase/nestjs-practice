import {HttpModule, Module} from '@nestjs/common';
import {RssController} from './interfaces/controller/rss.controller';
import {RssParseService} from './application/usecase/rss-parse.service';
import {RssRepository} from './application/repository/rss-repository';
import {RssRepositoryImpl} from './interfaces/request/rss-repository-impl';
import {RssRequest} from './infrastructure/rss-request';

@Module({
    imports: [HttpModule],
    controllers: [RssController],
    providers: [
        RssParseService,
        RssRequest,
        {
            provide: 'RssRepository',
            useClass: RssRepositoryImpl,
        },
    ],
})
export class AppModule {
}
