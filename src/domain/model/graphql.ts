
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class FeedData {
    title: string;
    description: string;
    link: string;
}

export abstract class IQuery {
    abstract getFeedData(): FeedData[] | Promise<FeedData[]>;
}
