import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ShowEntriesProps = typeof __propDef.props;
export type ShowEntriesEvents = typeof __propDef.events;
export type ShowEntriesSlots = typeof __propDef.slots;
export default class ShowEntries extends SvelteComponentTyped<ShowEntriesProps, ShowEntriesEvents, ShowEntriesSlots> {
}
export {};
