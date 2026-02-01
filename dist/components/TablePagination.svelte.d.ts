import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        onClick: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TablePaginationProps = typeof __propDef.props;
export type TablePaginationEvents = typeof __propDef.events;
export type TablePaginationSlots = typeof __propDef.slots;
export default class TablePagination extends SvelteComponentTyped<TablePaginationProps, TablePaginationEvents, TablePaginationSlots> {
}
export {};
