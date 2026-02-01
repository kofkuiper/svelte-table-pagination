import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
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
