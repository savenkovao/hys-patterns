import { AdvertisementBlock, AdvertisementConfig } from "../typings";

export class Advertisement implements AdvertisementConfig {
    constructor(
        public block: AdvertisementBlock,
        public content: string
    ) {
        this.content = `Advertisement: ${ content }. Sponsored by: Ololo 777`;
    }
}
