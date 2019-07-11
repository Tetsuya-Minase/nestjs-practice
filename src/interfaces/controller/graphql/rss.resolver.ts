import {Args, Query, ResolveProperty, Resolver, Parent} from '@nestjs/graphql';
import {Inject, UseGuards} from '@nestjs/common';
import {RssGuard} from './rss.guard';
import {FeedData, IQuery} from '../../../domain/model/graphql';
import {RssParseService} from '../../../application/usecase/rss-parse.service';
import {RssRepository} from '../../../application/repository/rss-repository';
import {FeedResponse} from '../../../domain/model/feed-response';

@Resolver('FeedData')
export class RssResolver extends IQuery {

    constructor(
        private readonly rssParseService: RssParseService,
        @Inject('RssRepository') private readonly  rssRespository: RssRepository
    ) {
        super();
    }

    @Query()
    @UseGuards(RssGuard)
    public async getFeedData(): Promise<FeedData[]> {
        const data = await this.rssRespository.fetchData();
        const feedDataList = await this.rssParseService.parseRss(data);
        return feedDataList.map(f => {
            return {
                title: f.getTitle(),
                description: f.getDesctiption(),
                link: f.getUrl(),
            };
        });
    }
}
