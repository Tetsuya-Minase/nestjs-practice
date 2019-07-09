import {RssRepository} from '../../application/repository/rss-repository';
import {RssRequest} from '../../infrastructure/rss-request';
import {Injectable} from '@nestjs/common';
import {FeedDataEntity} from '../../domain/model/feed-data-entity';
import {map} from 'rxjs/operators';
import {RssParseService} from '../../application/usecase/rss-parse.service';

@Injectable()
export class RssRepositoryImpl implements RssRepository {
    private rssUrl = 'https://minase-program.hatenablog.com/feed';

    constructor(
        private readonly request: RssRequest,
    ) {
    }

    public async fetchData(): Promise<string> {
        return  await this.request.get(this.rssUrl).toPromise();
    }
}
