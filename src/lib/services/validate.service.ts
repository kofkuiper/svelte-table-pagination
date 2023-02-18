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
        throw new Error(
            `searchableColumns prop must have a length equal to tableColumns prop. Ex. searchableColumns = [${Array.from(
                { length: tableColumns.length },
                (_, i) => true
            )}]
           `
        );
    }
}

function validateSortableColumnsLength(tableColumns: Array<string>, sortableColumns: Array<boolean>) {
    if (sortableColumns.length != tableColumns.length) {
        throw new Error(
            `sortableColumns prop must have a length equal to tableColumns prop. Ex. sortableColumns = [${Array.from(
                { length: tableColumns.length },
                (_, i) => true
            )}]
           `
        );
    }
}

function validateIsActionsIsEqToActionsHTML(tableColumns: Array<string>, isActionColumns: Array<boolean>, actionsHtml: Array<any>) {
    isActionColumns.forEach((isAction, index) => {
        if (
            (isAction && actionsHtml[index].length <= 0) ||
            (actionsHtml[index].length >= 1 && !isAction)
        ) {
            throw new Error(
                `isActionColumns prop must have values equal to actionsHtml prop. Ex. isAction = [${Array.from(
                    { length: tableColumns.length },
                    (_, i) => false
                ).concat(true)}] and actionsHtml = [${Array.from(
                    { length: tableColumns.length - 1 },
                    (_, i) => [""]
                ).concat([
                    [
                        `<button type="button" class="btn" id="my-button-#id">MyButton</button>`,
                    ],
                ])}]
               `
            );
        }
    });
}

function validateIsActionsLength(tableColumns: Array<string>, isActionColumns: Array<boolean>) {
    if (isActionColumns.length != tableColumns.length) {
        throw new Error(
            `isActionColumns prop must have a length equal to tableColumns prop. Ex. isActionColumns = [${Array.from(
                { length: tableColumns.length },
                (_, i) => false
            ).concat(true)}]
           `
        );
    }
}

function validateActionsHTMLLength(tableColumns: Array<string>, actionsHtml: Array<boolean>) {
    if (actionsHtml.length != tableColumns.length) {
        throw new Error(
            `actionsHtml prop must have a length equal to tableColumns prop. Ex. actionsHtml = [${Array.from(
                { length: tableColumns.length - 1 },
                (_, i) => [""]
            ).concat([
                [
                    `<button type="button" class="btn" id="my-button-#id">MyButton</button>`,
                ],
            ])}]
           `
        );
    }
} 