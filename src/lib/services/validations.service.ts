export function validateTablePaginationProps(
    tableColumns: Array<string>,
    searchableColumns: Array<boolean>,
    sortableColumns: Array<boolean>,
    isActionColumns: Array<boolean>,
    actionsHtml: Array<any>) {
    validateSearchableColumnsLength(tableColumns, searchableColumns)
    validateSortableColumnsLength(tableColumns, sortableColumns)
    validateIsActionsIsEqToActionsHTML(tableColumns, isActionColumns, actionsHtml)
    validateIsActionsLength(tableColumns, isActionColumns)
    validateActionsHTMLLength(tableColumns, actionsHtml)
}

function validateSearchableColumnsLength(tableColumns: Array<string>, searchableColumns: Array<boolean>) {
    if (searchableColumns.length != tableColumns.length) {
        throw new Error(`searchableColumns prop must have a length equal to tableColumns prop. Ex. searchableColumns = [${getExSortableArray(tableColumns.length)}]`);
    }
}

function validateSortableColumnsLength(tableColumns: Array<string>, sortableColumns: Array<boolean>) {
    if (sortableColumns.length != tableColumns.length) {
        throw new Error(`sortableColumns prop must have a length equal to tableColumns prop. Ex. sortableColumns = [${getExSearchableArray(tableColumns.length)}]`);
    }
}

function validateIsActionsIsEqToActionsHTML(tableColumns: Array<string>, isActionColumns: Array<boolean>, actionsHtml: Array<any>) {
    isActionColumns.forEach((isAction, index) => {
        if (
            (isAction && actionsHtml[index].length <= 0) ||
            (actionsHtml[index].length >= 1 && !isAction)
        ) {
            throw new Error(`isActionColumns prop must have values equal to actionsHtml prop. Ex. isAction = [${getExIsActionArray(tableColumns.length)}] and actionsHtml = [${getExActionArray(tableColumns.length)}]`);
        }
    });
}

function validateIsActionsLength(tableColumns: Array<string>, isActionColumns: Array<boolean>) {
    if (isActionColumns.length != tableColumns.length) {
        throw new Error(`isActionColumns prop must have a length equal to tableColumns prop. Ex. isActionColumns = [${getExIsActionArray(tableColumns.length)}]`);
    }
}

function validateActionsHTMLLength(tableColumns: Array<string>, actionsHtml: Array<boolean>) {
    if (actionsHtml.length != tableColumns.length) {
        throw new Error(`actionsHtml prop must have a length equal to tableColumns prop. Ex. actionsHtml = [${getExActionArray(tableColumns.length)}]`);
    }
}

function getExSortableArray(tableColumnsLength: number) {
    return Array.from({ length: tableColumnsLength }, (_, i) => true)
}

function getExSearchableArray(tableColumnsLength: number) {
    return Array.from({ length: tableColumnsLength }, (_, i) => true)
}

function getExIsActionArray(tableColumnsLength: number) {
    return Array.from(
        { length: tableColumnsLength - 1 },
        (_, i) => false
    ).concat(true)
}

function getExActionArray(tableColumnsLength: number) {
    return Array.from(
        { length: tableColumnsLength - 1 },
        (_, i) => [""]
    ).concat([
        [
            `<button type="button" class="btn" id="my-button-#id">MyButton</button>`,
        ],
    ])
}