import {Injectable} from '@nestjs/common';
import {FeedDataEntity} from '../../domain/model/feed-data-entity';
import {parseString} from 'xml2js';

@Injectable()
export class RssParseService {

    public parseRss(value: string): Promise<FeedDataEntity[]> {
        return new Promise<FeedDataEntity[]>((resolve, reject) => {
            parseString(value, async (err: Error, data) => {
                if (err) {
                    reject(err);
                }
                const feedDataEntityList = data.feed.entry.map(e => {
                    return FeedDataEntity.initialize(e.title[0], e.summary[0]._, e.link[0].$.href);
                });
                resolve(feedDataEntityList);
            });
        });
    }
}
