export class FeedDataEntity {
    private title: string;
    private description: string;
    private url: string;

    public static initialize(title: string, description: string, url: string) {
        const feedDataEntity = new FeedDataEntity();
        feedDataEntity.title = title;
        feedDataEntity.description = description;
        feedDataEntity.url = url;
        return feedDataEntity;
    }

    public getTitle(): string {
        return this.title;
    }
    public getDesctiption(): string {
        return this.description;
    }
    public getUrl(): string {
        return this.url;
    }
}
