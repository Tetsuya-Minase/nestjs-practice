import {Controller, Get, Inject} from '@nestjs/common';
import {RssParseService} from '../../../application/usecase/rss-parse.service';
import {RssRepository} from '../../../application/repository/rss-repository';
import {FeedResponse} from '../../../domain/model/feed-response';

@Controller('/rss')
export class RssController {
    constructor(
        private readonly rssParseService: RssParseService,
        @Inject('RssRepository') private readonly rssRepository: RssRepository,
    ) {
    }

    @Get()
    public async getRss(): Promise<FeedResponse> {
        const data = await this.rssRepository.fetchData();
        const feedDataList = await this.rssParseService.parseRss(data);
        return FeedResponse.initialize(feedDataList);
    }
}
