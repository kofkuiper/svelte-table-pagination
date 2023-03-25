import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DemoTablePaginationProps = typeof __propDef.props;
export type DemoTablePaginationEvents = typeof __propDef.events;
export type DemoTablePaginationSlots = typeof __propDef.slots;
export default class DemoTablePagination extends SvelteComponentTyped<DemoTablePaginationProps, DemoTablePaginationEvents, DemoTablePaginationSlots> {
}
export {};
