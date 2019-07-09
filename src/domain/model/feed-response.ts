import {FeedDataEntity} from './feed-data-entity';

export class FeedResponse {
    private feedDataList: FeedDataEntity[];

    public static initialize(value: FeedDataEntity[]): FeedResponse {
        const feedResponse = new FeedResponse();
        feedResponse.setFeedDataList([...value]);
        return feedResponse;
    }
    public getFeedDataList() {
        return this.feedDataList;
    }
    public setFeedDataList(value: FeedDataEntity[]) {
        this.feedDataList = [...value];
    }
}
