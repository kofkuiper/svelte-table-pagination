import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        allDataLength: number;
        filteredDataLength: number;
        startEntries: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ShowEntriesDetailsProps = typeof __propDef.props;
export type ShowEntriesDetailsEvents = typeof __propDef.events;
export type ShowEntriesDetailsSlots = typeof __propDef.slots;
export default class ShowEntriesDetails extends SvelteComponentTyped<ShowEntriesDetailsProps, ShowEntriesDetailsEvents, ShowEntriesDetailsSlots> {
}
export {};
