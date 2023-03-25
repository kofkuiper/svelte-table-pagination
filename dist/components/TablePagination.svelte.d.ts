import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        tableColumns: Array<string>;
        tableBody: Array<any>;
        searchableColumns: Array<boolean>;
        sortableColumns: Array<boolean>;
        isActionColumns: Array<boolean>;
        actionsHtml: Array<any>;
    };
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
