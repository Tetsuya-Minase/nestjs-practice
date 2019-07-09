export interface RssRepository {
    fetchData(): Promise<string>;
}
