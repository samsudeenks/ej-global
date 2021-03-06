(function ($, ej, undefined) {
    var name, widgets;
    if (ej.locales.indexOf("enUS") < 0)
        ej.locales.push("enUS");
    $.fn.Locale_enUS = function (pluginName) {
        switch (pluginName) {
            case "ejAutocomplete":
                ej.Autocomplete.Locale = ej.Autocomplete.Locale || {};
                ej.Autocomplete.Locale['en-US'] = {
                    addNewText: "Add New",
                    emptyResultText: "No suggestions",
                    actionFailure: "The specified field doesn't exist in given data source",
                    watermarkText: " "
                };
                break;
            case "ejColorPicker":
                ej.ColorPicker.Locale = ej.ColorPicker.Locale || {};
                ej.ColorPicker.Locale['en-US'] = {
                    buttonText: {
                        apply: "Apply",
                        cancel: "Cancel",
                        swatches: "Swatches"
                    },

                    tooltipText: {
                        switcher: "Switcher",
                        addButton: "Add Color",
                        basic: "Basic",
                        monoChrome: "Mono Chrome",
                        flatColors: "Flat Colors",
                        seaWolf: "Sea Wolf",
                        webColors: "Web Colors",
                        sandy: "Sandy",
                        pinkShades: "Pink Shades",
                        misty: "Misty",
                        citrus: "Citrus",
                        vintage: "Vintage",
                        moonLight: "Moon Light",
                        candyCrush: "Candy Crush",
                        currentColor: "Current Color",
                        selectedColor: "Selected Color",
                    }
                };
                break;
            case "ejDatePicker":
                ej.DatePicker.Locale = ej.DatePicker.Locale || {};
                ej.DatePicker.Locale['en-US'] = {
                    watermarkText: "Select date",
                    buttonText: 'Today'
                };
                break;
            case "ejDateRangePicker":
                ej.DateRangePicker.Locale = ej.DateRangePicker.Locale || {};
                ej.DateRangePicker.Locale['en-US'] = {
                    ButtonText: {
                        apply: "Apply",
                        cancel: "Cancel",
                        reset: "Reset"
                    },
                    watermarkText: "Select Range",
                    customPicker: "Custom Picker"
                };
                break;
            case "ejDateTimePicker":
                ej.DateTimePicker.Locale = ej.DateTimePicker.Locale || {};
                ej.DateTimePicker.Locale['en-US'] = {
                    watermarkText: "Select datetime",
                    buttonText: {
                        today: "Today",
                        timeNow: "Time Now",
                        done: "Done",
                        timeTitle: "Time"
                    }
                };
                break;
            case "ejDialog":
                ej.Dialog.Locale = ej.Dialog.Locale || {};
                ej.Dialog.Locale["en-US"] = {
                    tooltip: {
                        close: "Close",
                        collapse: "Collapse",
                        restore: "Restore",
                        maximize: "Maximize",
                        minimize: "Minimize",
                        expand: "Expand",
                        unPin: "UnPin",
                        pin: "Pin"
                    },
                    //currently we have deprecated this API
                    closeIconTooltip: "close"
                };
                break;
            case "ejDropDownList":
                ej.DropDownList.Locale = ej.DropDownList.Locale || {};
                ej.DropDownList.Locale["en-US"] = {
                    emptyResultText: "No suggestions,",
                    watermarkText: " ",
                };
                break;
            case "ejComboBox":
                ej.ComboBox.Locale["en-US"] = {
                    noRecordsTemplate: "No Records Found",
                    actionFailureTemplate: "The Request Failed"
                };
                break;
            case "ejMenu":
                ej.Menu.Locale["en-US"] = {
                    titleText: "Menu"
                };
                break;
            case "ejCaptcha":
                ej.Captcha.Locale["en-US"] = {
                    placeHolderText: "Type the code shown",
                    CustomErrorMessage: "Invalid Captcha"
                };
                break;
            case "ejNumericTextbox":
                ej.NumericTextbox.Locale = ej.NumericTextbox.Locale || {};
                ej.NumericTextbox.Locale['en-US'] = {
                    watermarkText: "Enter value"
                };
                break;
            case "ejPercentageTextbox":
                ej.PercentageTextbox.Locale = ej.PercentageTextbox.Locale || {};
                ej.PercentageTextbox.Locale['en-US'] = {
                    watermarkText: "Enter value"
                };
                break;
            case "ejCurrencyTextbox":
                ej.CurrencyTextbox.Locale = ej.CurrencyTextbox.Locale || {};
                ej.CurrencyTextbox.Locale['en-US'] = {
                    watermarkText: "Enter value"
                };
                break;
            case "ejExcelFilter":
                ej.ExcelFilter.Locale = ej.ExcelFilter.Locale || {};
                ej.ExcelFilter.Locale["en-US"] = {
                    SortNoSmaller: "Sort Smallest to Largest",
                    SortNoLarger: "Sort Largest to Smallest",
                    SortTextAscending: "Sort A to Z",
                    SortTextDescending: "Sort Z to A",
                    SortDateOldest: "Sort by Oldest",
                    SortDateNewest: "Sort by Newest",
                    SortByColor: "Sort By Color",
                    SortByCellColor: "Sort by Cell Color",
                    SortByFontColor: "Sort by Font Color",
                    FilterByColor: "Filter By Color",
                    CustomSort: "Custom Sort",
                    FilterByCellColor: "Filter by Cell Color",
                    FilterByFontColor: "Filter by Font Color",
                    ClearFilter: "Clear Filter",
                    NumberFilter: "Number Filters",
                    GuidFilter: "Guid Filters",
                    TextFilter: "Text Filters",
                    DateFilter: "Date Filters",
                    DateTimeFilter: "Date Time Filters",
                    SelectAll: "Select All",
                    Blanks: "Blanks",
                    Search: "Search",
                    Showrowswhere: "Show rows where",
                    NumericTextboxWaterMark: "Enter value",
                    StringMenuOptions: [{ text: "Equal", value: "equal" }, { text: "Not Equal", value: "notequal" }, { text: "Starts With", value: "startswith" }, { text: "Ends With", value: "endswith" }, { text: "Contains", value: "contains" }, { text: "Custom Filter", value: "customfilter" }],
                    NumberMenuOptions: [{ text: "Equal", value: "equal" }, { text: "Not Equal", value: "notequal" }, { text: "Less Than", value: "lessthan" }, { text: "Less Than Or Equal", value: "lessthanorequal" }, { text: "Greater Than", value: "greaterthan" }, { text: "Greater Than Or Equal", value: "greaterthanorequal" }, { text: "Between", value: "between" }, { text: "Custom Filter", value: "customfilter" }],
                    GuidMenuOptions: [{ text: "Equal", value: "equal" }, { text: "Not Equal", value: "notequal" }, { text: "Custom Filter", value: "customfilter" }],
                    DateMenuOptions: [{ text: "Equal", value: "equal" }, { text: "Not Equal", value: "notequal" }, { text: "Less Than", value: "lessthan" }, { text: "Less Than Or Equal", value: "lessthanorequal" }, { text: "Greater Than", value: "greaterthan" }, { text: "Greater Than Or Equal", value: "greaterthanorequal" }, { text: "Between", value: "between" }, { text: "Custom Filter", value: "customfilter" }],
                    DatetimeMenuOptions: [{ text: "Equal", value: "equal" }, { text: "Not Equal", value: "notequal" }, { text: "Less Than", value: "lessthan" }, { text: "Less Than Or Equal", value: "lessthanorequal" }, { text: "Greater Than", value: "greaterthan" }, { text: "Greater Than Or Equal", value: "greaterthanorequal" }, { text: "Between", value: "between" }, { text: "Custom Filter", value: "customfilter" }],
                    Top10MenuOptions: [{ text: "Top", value: "top" }, { text: "Bottom", value: "bottom" }],
                    title: "Custom Filter",
                    PredicateAnd: "AND",
                    PredicateOr: "OR",
                    OK: "OK",
                    MatchCase: "Match Case",
                    Cancel: "Cancel",
                    NoResult: "No Matches Found",
                    CheckBoxStatusMsg: "Not all items showing",
                    DatePickerWaterMark: "Select date",
                    DateTimePickerWaterMark: "Select date time",
                    True: "true",
                    False: "false",
                    AddToFilter: "Add current selection to filter"
                };
                break;
            case "ejFileExplorer":
                ej.FileExplorer.Locale = ej.FileExplorer.Locale || {};
                ej.FileExplorer.Locale["en-US"] = {
                    Folder: "Folder",
                    EmptyFolder: "This folder is empty",
                    ProtectedFolder: "You don't currently have permission to access this folder",
                    EmptyResult: "No items match your search",
                    Back: "Backward",
                    Forward: "Forward",
                    Upward: "Upward",
                    Refresh: "Refresh",
                    Addressbar: "Address bar",
                    Upload: "Upload",
                    Rename: "Rename",
                    Delete: "Delete",
                    Download: "Download",
                    Error: "Error",
                    PasteError: "Error",
                    UploadError: "Error",
                    RenameError: "Error",
                    Cut: "Cut",
                    Copy: "Copy",
                    Paste: "Paste",
                    Details: "Details",
                    Searchbar: "Search bar",
                    Open: "Open",
                    Search: "Search",
                    NewFolder: "New folder",
                    SortBy: "Sort by",
                    Size: "Size",
                    RenameAlert: "Please enter new name",
                    NewFolderAlert: "Please enter new folder name",
                    ContextMenuOpen: "Open",
                    ContextMenuNewFolder: "New folder",
                    ContextMenuDelete: "Delete",
                    ContextMenuRename: "Rename",
                    ContextMenuUpload: "Upload",
                    ContextMenuDownload: "Download",
                    ContextMenuCut: "Cut",
                    ContextMenuCopy: "Copy",
                    ContextMenuPaste: "Paste",
                    ContextMenuGetinfo: "Get info",
                    ContextMenuRefresh: "Refresh",
                    ContextMenuOpenFolderLocation: "Open folder location",
                    Item: "item",
                    Items: "items",
                    Selected: "selected",
                    ErrorOnFolderCreation: "This destination already contains a folder named '{0}'. Do you want to merge this folder content with already existing folder '{0}'?",
                    InvalidFileName: "A file name can't contain any of the following characters: \\/: *? \\ <> |",
                    GeneralError: "Please see browser console window for more information",
                    ErrorPath: "FileExplorer can't find '{0}'. Check the spelling and try again.",
                    UploadReplaceAlert: "File named '{0}' already exists. Replace old file with new one?",
                    PasteReplaceAlert: "File named '{0}' already exists. Replace old file with new one?",
                    DuplicateAlert: "There is already a file with the same name '{0}'. Do you want to create file with duplicate name",
                    DuplicateFileCreation: "There is already a file with the same name in this location. Do you want to rename '{0}' to '{1}'?",
                    DeleteFolder: " Are you sure you want to delete ",
                    DeleteMultipleFolder: "Are you sure you want to delete these {0} items?",
                    CancelPasteAction: "The destination folder is a subfolder of source folder.",
                    OkButton: "OK",
                    ContextMenuSortBy: "Sort by",
                    CancelButton: "Cancel",
                    YesToAllButton: "Yes to all",
                    NoToAllButton: "No to all",
                    YesButton: "Yes",
                    NoButton: "No",
                    SkipButton: "Skip",
                    Grid: "Grid view",
                    Tile: "Tile view",
                    LargeIcons: "Large icons",
                    Name: "Name",
                    Location: "Location",
                    Type: "Item type",
                    Layout: "Layout",
                    Created: "Created",
                    Accessed: "Accessed",
                    Modified: "Modified",
                    Permission: "Permission",
                    DialogCloseToolTip: "Close",
                    UploadSettings: {
                        buttonText: {
                            upload: "Upload",
                            browse: "Browse",
                            cancel: "Cancel",
                            close: "Close"
                        },
                        dialogText: {
                            title: "Upload Box",
                            name: "Name",
                            size: "Size",
                            status: "Status"
                        },
                        dropAreaText: "Drop files or click to upload",
                        filedetail: "The selected file size is too large. Please select a file within the valid size.",
                        denyError: "Files with #Extension extensions are not allowed.",
                        allowError: "Only files with #Extension extensions are allowed.",
                        cancelToolTip: "Cancel",
                        removeToolTip: "Remove",
                        retryToolTip: "Retry",
                        completedToolTip: "Completed",
                        failedToolTip: "Failed",
                        closeToolTip: "Close"
                    }
                };
                break;
            case "ejGantt":
                ej.Gantt.Locale = ej.Gantt.Locale || {};
                ej.Gantt.Locale["en-US"] = {

                    //string to display with dataSource contains 0 objects
                    emptyRecord: "No records to display",
                    unassignedTask: "Unassigned Task",
                    alertTexts: {
                        indentAlert: "There is no gantt record is selected to perform the Indent",
                        outdentAlert: "There is no gantt record is selected to perform the Outdent",
                        predecessorEditingValidationAlert: "Cyclic Dependency Occured, Please Check The Predecessor",
                        predecessorAddingValidationAlert: "Fill all the columns in predecessor table",
                        idValidationAlert: "Duplicate ID",
                        dateValidationAlert: "Invalid End date",
                        dialogResourceAlert: "Fill All the columns in resource table"
                    },

                    //headerText to be displayed in treegrid
                    columnHeaderTexts: {
                        taskId: "ID",
                        taskName: "Task Name",
                        startDate: "Start Date",
                        endDate: "End Date",
                        resourceInfo: "Resources",
                        duration: "Duration",
                        status: "Progress",
                        taskMode: "Task Mode",
                        predecessor: "Predecessors",
                        type: "Type",
                        offset: "Offset",
                        baselineStartDate: "Baseline Start Date",
                        baselineEndDate: "Baseline End Date",
                        WBS: "WBS",
                        WBSPredecessor: "WBS Predecessor",
                        dialogCustomFieldName: "Column Name",
                        dialogCustomFieldValue: "Value",
                        notes: "Notes",
                        taskType: "Task Type",
                        work: "Work",
                        unit: "Unit",
                        effortDriven: "Effort Driven",
                        resourceName: "Resource Name"
                    },

                    //string to display in dialog
                    editDialogTexts: {
                        addFormTitle: "New Task",
                        editFormTitle: "Edit Task",
                        saveButton: "Save",
                        deleteButton: "Delete",
                        cancelButton: "Cancel",
                        addPredecessor: "Add New",
                        removePredecessor: "Remove",
                        addButton: "Add"
                    },
                    //string to display in column add dialog
                    columnDialogTexts: {
                        field: "Field",
                        headerText: "Header Text",
                        editType: "Edit Type",
                        filterEditType: "Filter Edit Type",
                        allowFiltering: "Allow Filtering",
                        allowFilteringBlankContent: "Allow Filtering Blank Content",
                        allowSorting: "Allow Sorting",
                        visible: "Visible",
                        width: "Width",
                        textAlign: "Text Alignment",
                        headerTextAlign: "Header Text Alignment",
                        columnsDropdownData: "Column Dropdown Data",
                        dropdownTableText: "Text",
                        dropdownTableValue: "Value",
                        addData: "Add",
                        deleteData: "Remove",
                        allowCellSelection: "Allow Cell Selection",
                        displayAsCheckbox: "Display As Checkbox",
                        clipMode: "Clip Mode",
                        tooltip: "Tooltip",
                        showInColumnChooser: "Show In Column Chooser",
                        headerTooltip: "Header Tooltip"
                    },
                    editTypeTexts: {
                        string: "String",
                        numeric: "Numeric",
                        datePicker: "Date Picker",
                        dateTimePicker: "Date Time Picker",
                        dropdown: "Dropdown",
                        boolean: "Boolean"
                    },
                    textAlignTypes: {
                        right: "Right",
                        left: "Left",
                        center: "Center"
                    },
                    clipModeTexts: {
                        clip: "Clip",
                        ellipsis: "Ellipsis"
                    },
                    //string to be displayed in Toolbox's tooltip
                    toolboxTooltipTexts: {
                        addTool: "Add",
                        editTool: "Edit",
                        saveTool: "Update",
                        deleteTool: "Delete",
                        cancelTool: "Cancel",
                        searchTool: "Search",
                        indentTool: "Indent",
                        outdentTool: "Outdent",
                        expandAllTool: "Expand All",
                        collapseAllTool: "Collapse All",
                        nextTimeSpanTool: "Next Timespan",
                        prevTimeSpanTool: "Previous Timespan",
                        criticalPathTool: "Critical Path",
                        excelExportTool: "Excel Export",
                        printTool: "Print",
                        pdfExportTool: "PDF Export"
                    },

                    //string to be displayed in taskbar tooltip for duration unit
                    durationUnitTexts: {
                        days: "days",
                        hours: "hours",
                        minutes: "minutes",
                        day: "day",
                        hour: "hour",
                        minute: "minute"
                    },
                    durationUnitEditText: {
                        minute: ["m", "min", "minute", "minutes"],
                        hour: ["h", "hr", "hour", "hours"],
                        day: ["d", "dy", "day", "days"]
                    },
                    workUnitTexts: {
                        days: "days",
                        hours: "hours",
                        minutes: "minutes"
                    },
                    taskTypeTexts: {
                        fixedWork: "Fixed Work",
                        fixedUnit: "Fixed Units",
                        fixedDuration: "Fixed Duration"
                    },
                    effortDrivenTexts: {
                        yes: "Yes",
                        no: "No"
                    },
                    //string to be displayed in context menu
                    contextMenuTexts: {
                        taskDetailsText: "Task Details...",
                        addNewTaskText: "Add New Task",
                        indentText: "Indent",
                        outdentText: "Outdent",
                        deleteText: "Delete",
                        aboveText: "Above",
                        belowText: "Below"
                    },

                    //Name to be displayed for New Task while adding
                    newTaskTexts: {
                        newTaskName: "New Task"
                    },

                    //string to be displayed in column menu
                    columnMenuTexts: {
                        sortAscendingText: "Sort Ascending",
                        sortDescendingText: "Sort Descending",
                        columnsText: "Columns",
                        insertColumnLeft: "Insert Column Left",
                        insertColumnRight: "Insert Column Right",
                        deleteColumn: "Delete Column",
                        renameColumn: "Rename Column"
                    },
                    taskModeTexts: {
                        manual: "Manual",
                        auto: "Auto"
                    },
                    //string to be displayed in column add dialog title
                    columnDialogTitle: {
                        insertColumn: "Insert Column",
                        deleteColumn: "Delete Column",
                        renameColumn: "Rename Column"
                    },
                    //Locale Text for delete confirm dialog
                    deleteColumnText: "Are you sure you want to delete this column?",
                    okButtonText: "OK",
                    cancelButtonText: "Cancel",
                    confirmDeleteText: "Confirm Delete",
                    predecessorEditingTexts: {
                        fromText: "From",
                        toText: "To"
                    },
                    dialogTabTitleTexts: {
                        generalTabText: "General",
                        predecessorsTabText: "Predecessors",
                        resourcesTabText: "Resources",
                        customFieldsTabText: "Custom Fields",
                        notesTabText: "Notes"
                    },
                    predecessorCollectionText: [
                            { id: "SS", text: "Start-Start", value: "Start-Start" },
                            { id: "SF", text: "Start-Finish", value: "Start-Finish" },
                            { id: "FS", text: "Finish-Start", value: "Finish-Start" },
                            { id: "FF", text: "Finish-Finish", value: "Finish-Finish" }
                    ],

                    linkValidationRuleText: {
                        taskBeforePredecessor: "You moved '{0}' to start before '{1}' finishes and the two tasks are linked. As the result, the links cannot be honored. Select one action below to perform",
                        taskAfterPredecessor: "You moved '{0}' away from '{1}' and the two tasks are linked. As the result, the links cannot be honored. Select one action below to perform",
                    },
                    linkValidationDialogTitle: "Validate Editing",
                    linkValidationRuleOptions: {
                        cancel: "Cancel, Keep the existing link",
                        removeLink: "Remove the link and move '{0}' to start on '{1}'.",
                        preserveLink: "Move the '{0}' to start on '{1}' and keep the link."
                    },
                    connectorLineDialogText: {
                        from: "From",
                        to: "To",
                        taskLink: "Task Link",
                        lag: "Lag",
                        okButtonText: "OK",
                        cancelButtonText: "Cancel",
                        deleteButtonText: "Delete",
                        title: "Task Dependency"
                    }
                };
                break;
            case "ejGrid":
                ej.Grid.Locale = ej.Grid.Locale || {};
                ej.Grid.Locale["en-US"] = {
                    EmptyRecord: "No records to display",
                    GroupDropArea: "Drag a column header here to group its column",
                    DeleteOperationAlert: "No records selected for delete operation",
                    EditOperationAlert: "No records selected for edit operation",
                    SaveButton: "Save",
                    OKButton: "OK",
                    CancelButton: "Cancel",
                    EditFormTitle: "Details of ",
                    AddFormTitle: "Add New Record",
                    GroupCaptionFormat: "{{:headerText}}: {{:key}} - {{:count}} {{if count == 1 }} item {{else}} items {{/if}} ",
                    BatchSaveConfirm: "Are you sure you want to save changes?",
                    BatchSaveLostChanges: "Unsaved changes will be lost. Are you sure you want to continue?",
                    ConfirmDelete: "Are you sure you want to Delete Record?",
                    CancelEdit: "Are you sure you want to Cancel the changes?",
                    PagerInfo: "{0} of {1} pages ({2} items)",
                    FrozenColumnsViewAlert: "Frozen columns should be in grid view area",
                    FrozenColumnsScrollAlert: "Enable allowScrolling while using frozen Columns",
                    FrozenNotSupportedException: "Frozen Columns and Rows are not supported for Grouping, Row Template, Detail Template, Hierarchy Grid and Batch Editing",
                    Add: "Add",
                    Edit: "Edit",
                    Delete: "Delete",
                    Update: "Update",
                    Cancel: "Cancel",
                    Done: "Done",
                    Columns: "Columns",
                    SelectAll: "(Select All)",
                    PrintGrid: "Print",
                    ExcelExport: "Excel Export",
                    WordExport: "Word Export",
                    PdfExport: "PDF Export",
                    StringMenuOptions: [{ text: "StartsWith", value: "StartsWith" }, { text: "EndsWith", value: "EndsWith" }, { text: "Contains", value: "Contains" }, { text: "Equal", value: "Equal" }, { text: "NotEqual", value: "NotEqual" }],
                    NumberMenuOptions: [{ text: "LessThan", value: "LessThan" }, { text: "GreaterThan", value: "GreaterThan" }, { text: "LessThanOrEqual", value: "LessThanOrEqual" }, { text: "GreaterThanOrEqual", value: "GreaterThanOrEqual" }, { text: "Equal", value: "Equal" }, { text: "NotEqual", value: "NotEqual" }, { text: "Between", value: "Between" }],
                    PredicateAnd: "AND",
                    PredicateOr: "OR",
                    Filter: "Filter",
                    FilterMenuCaption: "Filter Value",
                    FilterMenuFromCaption: "From",
                    FilterMenuToCaption: "To",
                    FilterbarTitle: "'s filter bar cell",
                    MatchCase: "Match Case",
                    Clear: "Clear",
                    ResponsiveFilter: "Filter",
                    ResponsiveSorting: "Sort",
                    Search: "Search",
                    NumericTextBoxWaterMark: "Enter value",
                    DatePickerWaterMark: "Select date",
                    EmptyDataSource: "DataSource must not be empty at initial load since columns are generated from dataSource in AutoGenerate Column Grid",
                    ForeignKeyAlert: "The updated value should be a valid foreign key value",
                    True: "true",
                    False: "false",
                    UnGroup: "Click here to ungroup",
                    AddRecord: "Add Record",
                    EditRecord: "Edit Record",
                    DeleteRecord: "Delete Record",
                    Save: "Save",
                    Grouping: "Group",
                    Ungrouping: "Ungroup",
                    SortInAscendingOrder: "Sort In Ascending Order",
                    SortInDescendingOrder: "Sort In Descending Order",
                    NextPage: "Next Page",
                    PreviousPage: "Previous Page",
                    FirstPage: "First Page",
                    LastPage: "Last Page",
                    EmptyRowValidationMessage: "Atleast one field must be updated",
                    NoResult: "No Matches Found"
                };
                break;
            case "ejmobile":
                if (ej.mobile.Grid) {
                    ej.mobile.Grid.Locale = ej.mobile.Grid.Locale || {};
                    ej.mobile.Grid.Locale["en-US"] = {
                        emptyResult: "No records to display",
                        filterValidation: "Enter valid filter data",
                        filterTypeValidation: "Enter valid filter data. The current filter column is of type",
                        captionText: "Items",
                        spinnerText: "loading...",
                        HideColumnAlert: "At Least one column must be displayed in grid",
                        columnSelectorText: "Hide Column",
                        columnSelectorDone: "OK",
                        columnSelectorCancel: "Cancel",
                        columnSelectorWarning: "Warning",
                        filterOk: "Ok",
                        filterWarning: "Warning"
                    };;
                }

                if (ej.mobile.DatePicker) {
                    ej.mobile.DatePicker.Locale = ej.mobile.DatePicker.Locale || {};
                    ej.mobile.DatePicker.Locale["en-US"] = {
                        confirmText: "Done",
                        Windows: {
                            cancelText: "Cancel",
                            headerText: "CHOOSE DATE",
                            toolbarConfirmText: "done",
                            toolbarCancelText: "close"
                        }
                    };;
                }
                if (ej.mobile.TimePicker) {
                    ej.mobile.TimePicker.Locale = ej.mobile.TimePicker.Locale || {};
                    ej.mobile.TimePicker.Locale["en-US"] = {
                        confirmText: "Done",
                        AM: "AM",
                        PM: "PM",
                        Android: {
                            headerText: "Set Time"
                        },
                        Windows: {
                            cancelText: "Cancel",
                            headerText: "CHOOSE TIME",
                            toolbarCancelText: "close",
                            toolbarConfirmText: "done"
                        }
                    };
                }
                break;
            case "ejPivotChart":
                ej.PivotChart.Locale = ej.PivotChart.Locale || {};
                ej.PivotChart.Locale["en-US"] = {
                    Measure: "Measure",
                    Row: "Row",
                    Column: "Column",
                    Value: "Value",
                    Expand: "Expand",
                    Collapse: "Collapse",
                    Exit: "Exit",
                    ChartTypes: "Chart Types",
                    TDCharts: "3D Charts",
                    Tooltip: "Tooltip",
                    Exporting: "Exporting",
                    Line: "Line",
                    Spline: "Spline",
                    Column: "Column",
                    Area: "Area",
                    SplineArea: "Spline Area",
                    StepLine: "Step Line",
                    StepArea: "Step Area",
                    Pie: "Pie",
                    Bar: "Bar",
                    StackingArea: "Stacking Area",
                    StackingColumn: "Stacking Column",
                    StackingBar: "Stacking Bar",
                    Pyramid: "Pyramid",
                    Funnel: "Funnel",
                    Doughnut: "Doughnut",
                    Scatter: "Scatter",
                    Bubble: "Bubble",
                    TreeMap: "TreeMap",
                    ColumnTD: "Column 3D",
                    PieTD: "Pie 3D",
                    BarTD: "Bar 3D",
                    StackingBarTD: "StackingBar 3D",
                    StackingColumnTD: "StackingColumn 3D",
                    Excel: "Excel",
                    Word: "Word",
                    Pdf: "PDF",
                    PNG: "PNG",
                    EMF: "EMF",
                    GIF: "GIF",
                    JPG: "JPG",
                    BMP: "BMP",
                    ZoomIn: "Zoom In",
                    ZoomOut: "Zoom Out",
                    Legend: "Legend",
                    SmartLabels: "Smart Labels",
                    Interactions: "Interactions",
                    Zooming: "Zooming",
                    Rotate45: "Rotate45",
                    Rotate90: "Rotate90",
                    Trim: "Trim",
                    MultipleRows: "Multiple Rows",
                    Wrap: "Wrap",
                    Hide: "Hide",
                    WrapByWord: "Wrap By word",
                    CrossHair: "Cross Hair",
                    TrackBall: "Track Ball",
                    DisableTD: "Disable 3D Charts",
                    None: "None",
                    Exception: "Exception",
                    OK: "OK"
                };
                break;
            case "ejPivotClient":
                ej.PivotClient.Locale = ej.PivotClient.Locale || {};
                ej.PivotClient.Locale["en-US"] = {
                    NoReports: "No Reports Found in DB",
                    Sort: "Sort",
                    SelectField: "Select Field",
                    LabelFilterLabel: "Show the items for which the label",
                    ValueFilterLabel: "Show the items for which",
                    ClearSorting: "Clear Sorting",
                    ClearFilterFrom: "Clear Filter From",
                    SortAtoZ: "Sort A to Z",
                    SortZtoA: "Sort Z to A",
                    LabelFilters: "Label Filters",
                    BeginsWith: "Begins With",
                    NotBeginsWith: "Not Begins With",
                    EndsWith: "Ends With",
                    NotEndsWith: "Not Ends With",
                    Contains: "Contains",
                    NotContains: "Not Contains",
                    ValueFilters: "Value Filters",
                    ClearFilter: "Clear Filter",
                    Equals: "Equals",
                    NotEquals: "Not Equals",
                    GreaterThan: "Greater Than ",
                    GreaterThanOrEqualTo: "Greater Than Or Equal To ",
                    LessThan: "Less Than ",
                    LessThanOrEqualTo: "Less Than Or Equal To ",
                    Between: "Between",
                    NotBetween: "Not Between",
                    Top10: "Top Count",
                    DoesNotBeginsWith: "Does Not Begins With",
                    DoesNotEndsWith: "Does Not Ends With",
                    DoesNotContains: "Does Not Contains",
                    DoesNotEquals: "Does Not Equals",
                    IsGreaterThan: "Is Greater Than",
                    IsGreaterThanOrEqualTo: "Is Greater Than Or Equal To",
                    IsLessThan: "Is Less Than",
                    IsLessThanOrEqualTo: "Is Less Than Or Equal To",
                    DeferUpdate: "Defer Update",
                    MDXQuery: "MDX Query",
                    Column: "Column",
                    Row: "Row",
                    Slicer: "Slicer",
                    CubeSelector: "Cube Selector",
                    ReportName: "Report Name",
                    NewReport: "New Report",
                    CubeDimensionBrowser: "Cube Dimension Browser",
                    AddReport: "Add Report",
                    RemoveReport: "Remove Report",
                    CannotRemoveSingleReport: "Can not remove single report",
                    AreYouSureToDeleteTheReport: "Are you sure to delete the Report",
                    RenameReport: "Rename Report",
                    ChartTypes: "Chart Types",
                    ToggleAxis: "Toggle Axis",
                    ExportToExcel: "Export To Excel",
                    ExportToWord: "Export To Word",
                    ExportToPdf: "Export To Pdf",
                    FullScreen: "Full Screen",
                    Grid: "Grid",
                    Chart: "Chart",
                    OK: "<u>O</u>K",
                    Cancel: "<u>C</u>ancel",
                    Close: "Close",
                    AddToColumn: "Add to Column",
                    AddToRow: "Add to Row",
                    AddToSlicer: "Add to Slicer",
                    MeasureEditor: "Measure Editor",
                    MemberEditor: "Member Editor",
                    Measures: "Measures",
                    SortOrFilterColumn: "Sort/Filter (Column)",
                    SortOrFilterRow: "Sort/Filter (Row)",
                    SortingAndFiltering: "Sorting And Filtering",
                    Sorting: "Sorting",
                    Measure: "<u>M</u>easure",
                    Order: "Order",
                    Filtering: "Filtering",
                    Condition: "C<u>o</u>ndition",
                    Value: "Val<u>u</u>e",
                    PreserveHierarchy: "P<u>r</u>eserve  Hierarchy",
                    Ascending: "<u>A</u>scending",
                    Descending: "D<u>e</u>scending",
                    Enable: "E<u>n</u>able",
                    Disable: "D<u>i</u>sable",
                    and: "<u>a</u>nd",
                    EqualTo: "EqualTo",
                    NotEquals: "NotEquals",
                    GreaterThan: "GreaterThan",
                    GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
                    LessThan: "LessThan",
                    LessThanOrEqualTo: "LessThanOrEqualTo",
                    Between: "Between",
                    NotBetween: "NotBetween",
                    ReportList: "Report List",
                    Line: "Line",
                    Spline: "Spline",
                    Column: "Column",
                    Area: "Area",
                    SplineArea: "Spline Area",
                    StepLine: "Step Line",
                    StepArea: "Step Area",
                    Pie: "Pie",
                    Bar: "Bar",
                    StackingArea: "Stacking Area",
                    StackingColumn: "Stacking Column",
                    StackingBar: "Stacking Bar",
                    Pyramid: "Pyramid",
                    Funnel: "Funnel",
                    Doughnut: "Doughnut",
                    Scatter: "Scatter",
                    Bubble: "Bubble",
                    TreeMap: "TreeMap",
                    Alert: "Alert",
                    MDXAlertMsg: "Please add a measure, dimension or hierarchy in an appropriate axis to view the MDX Query.",
                    FilterSortRowAlertMsg: "Dimension not found in row axis. Please add Dimension element in row axis for sorting/filtering.",
                    FilterSortColumnAlertMsg: "Dimension not found in column axis. Please add Dimension element in column axis for sorting/filtering.",
                    FilterSortcolMeasureAlertMsg: "Please add measure to the Column axis",
                    FilterSortrowMeasureAlertMsg: "Please add measure to the Row axis",
                    FilterSortElementAlertMsg: "Element not found in column axis. Please add an element in column axis for sorting/filtering.",
                    FilterMeasureSelectionAlertMsg: "Please select a valid measure.",
                    FilterConditionAlertMsg: "Please set a valid condition.",
                    FilterStartValueAlertMsg: "Please set a start value.",
                    FilterEndValueAlertMsg: "Please set a end value.",
                    FilterInvalidAlertMsg: "Invalid operation !",
                    SelectRecordAlertMsg: "Please select a valid record.",
                    RecordName: "Record Name",
                    RemoveRecord: "Remove Record",
                    RenameRecord: "Rename Record",
                    Load: "Load",
                    Remove: "Remove",
                    Save: "Save",
                    SaveAs: "SaveAs",
                    SelectRecord: "Select Record",
                    SelectReport: "Select Report",
                    DBReport: "Report Manipulation in DB",
                    Rename: "Rename",
                    Remove: "Remove",
                    SetRecordNameAlertMsg: "Please set record name.",
                    SetReportNameAlertMsg: "Please set report name.",
                    Search: "Search",
                    MultipleItems: "Multiple items",
                    All: "All",
                    CalculatedMember: "Calculated Member",
                    Caption: "Caption:",
                    Expression: "Expression:",
                    MemberType: "MemberType:",
                    FormatString: "Format String:",
                    MultipleMeasure: "More than one measure cannot be sliced.",
                    DuplicateCalcMeasure: "Calculated Member with same name already exist.",
                    EmptyField: "Calculated Member name or Expression cannot be empty.",
                    EmptyFormat: "Format String for Calculated Member is empty.",
                    Warning: "Warning",
                    Confirm: "Calculated Member with the same name already exists. Due to want to Replace ?",
                    KPIs: "KPIs",
                    Collection: "Collection",
                    Report: "Report",
                    AddCurrentSelectionToFilter: "Add current selection to filter",
                    SaveMsg: "Report saved successfully!!!",
                    RenameMsg: "Report renamed successfully!!!",
                    RemoveMsg: "Report removed successfully!!!",
                    Success: "Success",
                    KpiAlertMsg: "The field you are moving cannot be placed in that area of the report",
                    NotAllItemsShowing: "Not all child nodes are shown",
                    EditorLinkPanelAlert: "The members has more than 1000 items under one or more parent. Only the first 1000 items are displayed under each parent.",
                    NamedSetAlert: "A named set cannot be added to the PivotTable report at the same time as another named set based on the same field. Click OK to remove ' <Set 1> ' named set and add ' <Set 2> ' named set.",
                    Exception: "Exception"
                };
                break;
            case "ejPivotGauge":
                ej.PivotGauge.Locale = ej.PivotGauge.Locale || {};
                ej.PivotGauge.Locale["en-US"] = {
                    RevenueGoal: "Revenue Goal",
                    RevenueValue: "Revenue Value",
                    Exception: "Exception"
                };
                break;
            case "ejPager":
                ej.Pager.Locale = ej.Pager.Locale || {};
                ej.Pager.Locale["en-US"] = {
                    pagerInfo: "{0} of {1} pages ({2} items)",
                    firstPageTooltip: "Go to first page",
                    lastPageTooltip: "Go to last page",
                    nextPageTooltip: "Go to next page",
                    previousPageTooltip: "Go to previous page",
                    nextPagerTooltip: "Go to next Pager",
                    previousPagerTooltip: "Go to previous Pager"
                };
                break;
            case "ejPdfViewer":
                ej.PdfViewer.Locale = ej.PdfViewer.Locale || {};
                ej.PdfViewer.Locale["en-US"] = {
                    toolbar: {
                        print: {
                            headerText: 'Print',
                            contentText: 'Print the PDF document.'
                        },
                        first: {
                            headerText: 'First',
                            contentText: 'Go to the first page of the PDF document.'
                        },
                        previous: {
                            headerText: 'Previous',
                            contentText: 'Go to the previous page of the PDF document.'
                        },
                        next: {
                            headerText: 'Next',
                            contentText: 'Go to the next page of the PDF document.'
                        },
                        last: {
                            headerText: 'Last',
                            contentText: 'Go to the last page of the PDF document.'
                        },
                        zoomIn: {
                            headerText: 'Zoom-In',
                            contentText: 'Zoom in to the PDF document.'
                        },
                        zoomOut: {
                            headerText: 'Zoom-Out',
                            contentText: 'Zoom out of the PDF document.'
                        },
                        pageIndex: {
                            headerText: 'Page Number',
                            contentText: 'Current page number to view.'
                        },
                        zoom: {
                            headerText: 'Zoom',
                            contentText: 'Zoom in or out on the PDF document.'
                        },
                        fitToWidth: {
                            headerText: 'Fit to Width',
                            contentText: 'Fit the PDF page to the width of the container.'
                        },
                        fitToPage: {
                            headerText: 'Fit to Page',
                            contentText: 'Fit the PDF page to the container.'
                        },
                        search: {
                            headerText: 'Search Text',
                            contentText: 'Search text in the PDF pages.'
                        },
                        download: {
                            headerText: 'Download',
                            contentText: 'Download the PDF document.'
                        },
                        highlight: {
                            headerText: 'Highlight Text',
                            contentText: 'Highlight text in the PDF pages.',
                        },
                        strikeout: {
                            headerText: 'StrikeOut Text',
                            contentText: 'StrikeOut text in the PDF pages.',
                        },
                        underline: {
                            headerText: 'Underline Text',
                            contentText: 'Underline text in the PDF pages.',
                        },
                        signature: {
                            headerText: 'Signature',
                            contentText: 'Add or create hand-written signature.',
                        },
                        select: {
                            headerText: 'Selection',
                            contentText: 'Selection tool for text.',
                        },
                        scroll: {
                            headerText: 'Panning',
                            contentText: 'Click to pan around the document',
                        },
                    },
                    contextMenu: {
                        copy: {
                            contentText: 'Copy',
                        },
                        googleSearch: {
                            contentText: 'Search google',
                        },
                        Find: {
                            contentText: 'Find:',
                        },
                        matchCase: {
                            contentText: 'matchCase',
                        },
                        auto: {
                            contentText: 'Auto',
                        },
                        openPopup: {
                            contentText: 'Open Pop-Up Note',
                        },
                        Delete: {
                            contentText: 'Delete',
                        },
                        properties: {
                            contentText: 'Properties....',
                        },
                    },
                    propertyWindow: {
                        underlineProperties: {
                            contentText: "Underline Properties"
                        },
                        strikeOutProperties: {
                            contentText: "StrikeOut Properties"
                        },
                        highlightProperties: {
                            contentText: "Highlight Properties"
                        },
                        signatureProperties: {
                            contentText: "Signature Properties"
                        },
                        appearance: {
                            contentText: "Appearance"
                        },
                        general: {
                            contentText: "General"
                        },
                        color: {
                            contentText: "Color:"
                        },
                        opacity: {
                            contentText: "Opacity:"
                        },
                        author: {
                            contentText: "Author:"
                        },
                        subject: {
                            contentText: "Subject:"
                        },
                        modified: {
                            contentText: "Modified:"
                        },
                        ok: {
                            contentText: "OK"
                        },
                        cancel: {
                            contentText: "Cancel"
                        },
                        locked: {
                            contentText: "Locked"
                        }
                    },
                    signatureWindow: {
                        Signature: {
                            contentText: "Add Signature"
                        },
                        Add: {
                            contentText: "Add"
                        },
                        clear: {
                            contentText: "Clear"
                        },
                    },
					waitingPopup: {
						print: {
							contentText: "Preparing document for printing..."
						}
					}
                };
                break;
            case "ejPivotGrid":
                ej.PivotGrid.Locale = ej.PivotGrid.Locale || {};
                ej.PivotGrid.Locale["en-US"] = {
                    Total: "Total",
                    GrandTotal: "Grand Total",
                    Sort: "Sort",
                    SelectField: "select Field",
                    LabelFilterLabel: "Show the items for which the label",
                    ValueFilterLabel: "Show the items for which",
                    ClearSorting: "Clear Sorting",
                    ClearFilterFrom: "Clear Filter From",
                    SortAtoZ: "Sort A to Z",
                    SortZtoA: "Sort Z to A",
                    and: "<u>a</u>nd",
                    LabelFilters: "Label Filters  ",
                    BeginsWith: "Begins With",
                    NotBeginsWith: "Not Begins With",
                    EndsWith: "Ends With",
                    NotEndsWith: "Not Ends With",
                    Contains: "Contains",
                    NotContains: "Not Contains",
                    ValueFilters: "Value Filters",
                    ClearFilter: "Clear Filter",
                    Equals: "Equals",
                    NotEquals: "Not Equals",
                    GreaterThan: "Greater Than ",
                    GreaterThanOrEqualTo: "Greater Than Or Equal To ",
                    LessThan: "Less Than ",
                    LessThanOrEqualTo: "Less Than Or Equal To ",
                    Between: "Between",
                    NotBetween: "Not Between",
                    DoesNotBeginsWith: "Does Not Begins With",
                    DoesNotEndsWith: "Does Not Ends With",
                    DoesNotContains: "Does Not Contains",
                    DoesNotEquals: "Does Not Equals",
                    IsGreaterThan: "Is Greater Than",
                    IsGreaterThanOrEqualTo: "Is Greater Than Or Equal To",
                    IsLessThan: "Is Less Than",
                    IsLessThanOrEqualTo: "Is Less Than Or Equal To",
                    NumberFormatting: "Number Formatting",
                    FrozenHeaders: "Frozen Headers",
                    CellSelection: "Cell Selection",
                    CellContext: "Cell Context",
                    ColumnResize: "Column Resize",
                    Layouts: "Layouts",
                    NormalLayout: "Normal Layout",
                    NormalTopSummary: "NormalTopSummary Layout",
                    NoSummaries: "NoSummaries Layout",
                    ExcelLikeLayout: "Excel Like Layout",
                    FrozenHeader: "Frozen Header",
                    AdvancedFiltering: "Advanced Filtering",
                    Amount: "Amount",
                    Quantity: "Quantity",
                    Measures: "Measures",
                    NumberFormats: "Number Formats",
                    Exporting: "Exporting",
                    FileName: "File Name",
                    ToolTip: "Tool Tip",
                    RTL: "RTL",
                    CollapseByDefault: "Collapse By Default",
                    EnableDisablePaging: "Enalbe / Disable Paging",
                    PagingOptions: "Paging Options",
                    CategoricalPageSize: "Categorical Page Size",
                    SeriesPageSize: "Series Page Size",
                    HyperLink: "HyperLink",
                    CellEditing: "Cell Editing",
                    GroupingBar: "Grouping Bar",
                    SummaryCustomization: "Summary Customization",
                    SummaryTypes: "Summary Types",
                    SummaryType: "Summary Type",
                    EnableRowHeaderHyperlink: "Enable RowHeaderHyperLink",
                    EnableColumnHeaderHyperlink: "Enable ColumnHeaderHyperLink",
                    EnableValueCellHyperlink: "Enable ValueCellHyperLink",
                    EnableSummaryCellHyperlink: "Enable SummaryCellHyperLink",
                    HideGrandTotal: "Hide GrandTotal",
                    HideSubTotal: "Hide SubTotal",
                    Row: "Row",
                    Column: "Column",
                    Both: "Both",
                    Sum: "Sum",
                    Average: "Average",
                    Count: "Count",
                    Min: "Min",
                    Max: "Max",
                    Row: "Row",
                    Column: "Column",
                    Both: "Both",
                    Excel: "Excel",
                    Word: "Word",
                    PDF: "PDF",
                    CSV: "CSV",
                    AddToFilter: "Add to Filter",
                    AddToRow: "Add to Row",
                    AddToColumn: "Add to Column",
                    AddToValues: "Add to Values",
                    Warning: "Warning",
                    Error: "Error",
                    GroupingBarAlertMsg: "The field you are moving cannot be placed in that area of the report",
                    Measures: "Measures",
                    Expand: "Expand",
                    Collapse: "Collapse",
                    ToolTipRow: "Row",
                    ToolTipColumn: "Column",
                    ToolTipValue: "Value",
                    NoValue: "No value",
                    SeriesPage: "Series Page",
                    CategoricalPage: "Categorical Page",
                    DragFieldHere: "Drag field here",
                    ColumnArea: "Drop column here",
                    RowArea: "Drop row here",
                    ValueArea: "Drop values here",
                    Close: "Close",
                    OK: "OK",
                    Cancel: "Cancel",
                    Remove: "Remove",
                    Goal: "Goal",
                    Status: "Status",
                    Trend: "Trend",
                    Value: "value",
                    ConditionalFormattingErrorMsg: "The given value is not matched",
                    ConditionalFormattingConformMsg: "Are you sure you want to remove the selected format?",
                    EnterOperand1: "Enter Operand1",
                    EnterOperand2: "Enter Operand2",
                    ConditionalFormatting: "Conditional Formatting",
                    Condition: "Conditional Type",
                    Value1: "Value1",
                    Value2: "Value2",
                    Editcondtion: "Edit Condition",
                    AddNew: "Add New",
                    Format: "Format",
                    Backcolor: "Back Color",
                    Borderrange: "Border Range",
                    Borderstyle: "Border Style",
                    Fontsize: "Font Size",
                    Fontstyle: "Font Style",
                    Bordercolor: "Border Color",
                    NoMeasure: "Please add any measure",
                    AliceBlue: "AliceBlue",
                    Black: "Black",
                    Blue: "Blue",
                    Brown: "Brown",
                    Gold: "Gold",
                    Green: "Green",
                    Lime: "Lime",
                    Maroon: "Maroon",
                    Orange: "Orange",
                    Pink: "Pink",
                    Red: "Red",
                    Violet: "Violet",
                    White: "White",
                    Yellow: "Yellow",
                    Solid: "Solid",
                    Dashed: "Dashed",
                    Dotted: "Dotted",
                    Double: "Double",
                    Groove: "Groove",
                    Inset: "Inset",
                    Outset: "Outset",
                    Ridge: "Ridge",
                    None: "None",
                    Algerian: "Algerian",
                    Arial: "Arial",
                    BodoniMT: "Bodoni MT",
                    BritannicBold: "Britannic Bold",
                    Cambria: "Cambria",
                    Calibri: "Calibri",
                    CourierNew: "Courier New",
                    DejaVuSans: "DejaVu Sans",
                    Forte: "Forte",
                    Gerogia: "Gerogia",
                    Impact: "Impact",
                    SegoeUI: "Segoe UI",
                    Tahoma: "Tahoma",
                    TimesNewRoman: "Times New Roman",
                    Verdana: "Verdana",
                    CubeDimensionBrowser: "Cube Dimension Browser",
                    SelectHierarchy: "Select Hierarchy",
                    CalculatedField: "Calculated Field",
                    Name: "Name:",
                    Add: "Add",
                    Formula: "Formula:",
                    Delete: "Delete",
                    Fields: "Fields:",
                    CalculatedFieldNameNotFound: "Given CalculatedField name is not found",
                    InsertField: "Insert Field",
                    EmptyField: "Please enter Calculated field name or formula",
                    NotValid: "Given formula is not valid",
                    NotPresent: "Value field used in any of the Calculated Field formula is not present in the PivotGrid",
                    Confirm: "Calculated field with the same name already exists. Due to want to Replace ?",
                    CalcValue: "Calculated field can be inserted only in value area field",
                    MultipleItems: "Multiple items",
                    All: "All",
                    Search: "Search",
                    Fontcolor: "Font Color",
                    AddCurrentSelectionToFilter: "Add current selection to filter",
                    Months: "Months",
                    Days: "Days",
                    Quarters: "Quarters",
                    Years: "Years",
                    Qtr: "Qtr",
                    Quarter: "Quarter",
                    NoRecordsToDisplay: "No records to display.",
                    EnterFormatName: "Enter Format Name",
                    FormatName: "Format Name",
                    RemoveFormat: "Remove Format",
                    Edit: "Edit",
                    DuplicateFormatName: "Duplicate Format Name",
                    NotAllItemsShowing: "Not all child nodes are shown",
                    EditorLinkPanelAlert: "The members has more than 1000 items under one or more parent. Only the first 1000 items are displayed under each parent.",
                    Exception: "Exception"
                };
                break;
            case "ejPivotPager":
                ej.PivotPager.Locale = ej.PivotPager.Locale || {};
                ej.PivotPager.Locale["en-US"] = {
                    SeriesPage: "Series Page",
                    CategoricalPage: "Categorical Page",
                    Error: "Error",
                    OK: "OK",
                    Close: "Close",
                    PageCountErrorMsg: "Enter valid page number"
                };
                break;
            case "ejPivotSchemaDesigner":
                ej.PivotSchemaDesigner.Locale = ej.PivotSchemaDesigner.Locale || {};
                ej.PivotSchemaDesigner.Locale["en-US"] = {
                    Sort: "Sort",
                    SelectField: "select Field",
                    LabelFilterLabel: "Show the items for which the label",
                    ValueFilterLabel: "Show the items for which",
                    ClearSorting: "Clear Sorting",
                    ClearFilterFrom: "Clear Filter From",
                    SortAtoZ: "Sort A to Z",
                    SortZtoA: "Sort Z to A",
                    and: "<u>a</u>nd",

                    LabelFilters: "Label Filters  ",
                    BeginsWith: "Begins With",
                    NotBeginsWith: "Not Begins With",
                    EndsWith: "Ends With",
                    NotEndsWith: "Not Ends With",
                    Contains: "Contains",
                    NotContains: "Not Contains",

                    ValueFilters: "Value Filters",
                    ClearFilter: "Clear Filter",
                    Equals: "Equals",
                    NotEquals: "Not Equals",
                    GreaterThan: "Greater Than ",
                    GreaterThanOrEqualTo: "Greater Than Or Equal To ",
                    LessThan: "Less Than ",
                    LessThanOrEqualTo: "Less Than Or Equal To ",
                    Between: "Between",
                    NotBetween: "Not Between",

                    DoesNotBeginsWith: "Does Not Begins With",
                    DoesNotEndsWith: "Does Not Ends With",
                    DoesNotContains: "Does Not Contains",
                    DoesNotEquals: "Does Not Equals",
                    IsGreaterThan: "Is Greater Than",
                    IsGreaterThanOrEqualTo: "Is Greater Than Or Equal To",
                    IsLessThan: "Is Less Than",
                    IsLessThanOrEqualTo: "Is Less Than Or Equal To",

                    ClearFilter: "Clear Filter",
                    SelectField: "select Field",
                    Measures: "Measures",
                    Warning: "Warning",
                    AlertMsg: "The field you are moving cannot be placed in that area of the report",
                    Goal: "Goal",
                    Status: "Status",
                    Trend: "Trend",
                    Value: "value",
                    AddToFilter: "Add to Filter",
                    AddToRow: "Add to Row",
                    AddToColumn: "Add to Column",
                    AddToValues: "Add to Value",
                    PivotTableFieldList: "PivotTable Field List",
                    ChooseFieldsToAddToReport: "Choose fields to add to report:",
                    DragFieldBetweenAreasBelow: "Drag fields between areas below:",
                    ReportFilter: "Filter",
                    ColumnLabel: "Column",
                    RowLabel: "Row",
                    Values: "Values",
                    DeferLayoutUpdate: "Defer Layout Update",
                    Update: "Update",
                    OK: "OK",
                    Cancel: "Cancel",
                    Close: "Close",
                    Search: "Search",
                    Remove: "Remove",
                    AddCurrentSelectionToFilter: "Add current selection to filter",
                    NotAllItemsShowing: "Not all child nodes are shown",
                    EditorLinkPanelAlert: "The members has more than 1000 items under one or more parent. Only the first 1000 items are displayed under each parent.",
                    NamedSetAlert: "A named set cannot be added to the PivotTable report at the same time as another named set based on the same field. Click OK to remove ' <Set 1> ' named set and add ' <Set 2> ' named set."
                };
                break;
            case "ejDiagram":
                ej.datavisualization.Diagram.Locale = ej.datavisualization.Diagram.Locale || {};
                ej.datavisualization.Diagram.Locale["en-US"] = {
                    cut: "Cut",
                    copy: "Copy",
                    paste: "Paste",
                    undo: "Undo",
                    redo: "Redo",
                    selectAll: "SelectAll",
                    grouping: "Grouping",
                    group: "Group",
                    ungroup: "Ungroup",
                    order: "Order",
                    bringToFront: "BringToFront",
                    moveForward: "MoveForward",
                    sendBackward: "SendBackward",
                    sendToBack: "SendToBack"
                };
                break;
            case "ejChart":
                ej.datavisualization.Chart.Locale = ej.datavisualization.Chart.Locale || {};
                ej.datavisualization.Chart.Locale["en-US"] = {
                    zoomIn: "Zoom In",
                    zoomOut: "Zoom Out",
                    zoom: "Zoom",
                    pan: "Pan",
                    reset: "Reset"
                };
                break;
            case "ejRangeNavigator":
                ej.datavisualization.RangeNavigator.Locale = ej.datavisualization.RangeNavigator.Locale || {};
                ej.datavisualization.RangeNavigator.Locale['en-US'] = {
                    intervals: {
                        quarter: {
                            longQuarters: "Quarter",
                            shortQuarters: "Q"
                        },
                        week: {
                            longWeeks: "Week",
                            shortWeeks: "W"
                        }
                    }
                };
                break;
            case "ejMap":
                ej.datavisualization.Map.Locale = ej.datavisualization.Map.Locale || {};
                ej.datavisualization.Map.Locale["en-US"] = {
                    zoomIn: "Zoom In",
                    zoomOut: "Zoom Out",
                    panTop: "Pan Top",
                    panBottom: "Pan Bottom",
                    panLeft: "Pan Left",
                    panRight: "Pan Right",
                    home: "Home"
                };
                break;
            case "ejReportViewer":
                ej.ReportViewer.Locale = ej.ReportViewer.Locale || {};
                ej.ReportViewer.Locale["en-US"] = {
                    toolbar: {
                        print: {
                            headerText: 'Print',
                            contentText: 'Print the report.'
                        },
                        exportformat: {
                            headerText: 'Export',
                            contentText: 'Select the exported file format.',
                            Pdf: 'PDF',
                            Excel: 'Excel',
                            Word: 'Word',
                            Html: 'Html',
                            PPT: 'PPT',
                            CSV: 'CSV'
                        },
                        first: {
                            headerText: 'First',
                            contentText: 'Go to the first page of the report.'
                        },
                        previous: {
                            headerText: 'Previous',
                            contentText: 'Go to the previous page of the report.'
                        },
                        next: {
                            headerText: 'Next',
                            contentText: 'Go to the next page of the report.'
                        },
                        last: {
                            headerText: 'Last',
                            contentText: 'Go to the last page of the report.'
                        },
                        documentMap: {
                            headerText: 'Document Map',
                            contentText: 'Show or hide the document map.'
                        },
                        parameter: {
                            headerText: 'Parameter',
                            contentText: 'Show or hide the parameters pane.'
                        },
                        zoomIn: {
                            headerText: 'Zoom-In',
                            contentText: 'Zoom in to the report.'
                        },
                        zoomOut: {
                            headerText: 'Zoom-Out',
                            contentText: 'Zoom out of the report.'
                        },
                        refresh: {
                            headerText: 'Refresh',
                            contentText: 'Refresh the report.'
                        },
                        printLayout: {
                            headerText: 'Print Layout',
                            contentText: 'Change between print layout and normal modes.'
                        },
                        pageIndex: {
                            headerText: 'Page Number',
                            contentText: 'Current page number to view.'
                        },
                        zoom: {
                            headerText: 'Zoom',
                            contentText: 'Zoom in or out on the report.'
                        },
                        back: {
                            headerText: 'Back',
                            contentText: 'Go back to the parent report.'
                        },
                        fittopage: {
                            headerText: 'Fit to Page',
                            contentText: 'Fit the report page to the container.',
                            pageWidth: 'Page Width',
                            pageHeight: 'Whole Page'
                        },
                        pagesetup: {
                            headerText: 'Page Setup',
                            contentText: 'Choose page setup option to change paper size, orientation and margins.'
                        }
                    },
                    pagesetupDialog: {
                        close: 'Close',
                        paperSize: 'Paper Size',
                        height: 'Height',
                        width: 'Width',
                        margins: 'Margins',
                        top: 'Top',
                        bottom: 'Bottom',
                        right: 'Right',
                        left: 'Left',
                        unit: 'in',
                        orientation: 'Orientation',
                        portrait: 'Portrait',
                        landscape: 'Landscape',
                        doneButton: 'Done',
                        cancelButton: 'Cancel'
                    },
                    credential: {
                        userName: 'Username',
                        password: 'Password'
                    },
                    waterMark: {
                        selectOption: 'Select option',
                        selectValue: 'Select a value'
                    },
                    errorMessage: {
                        startMessage: 'Report Viewer encountered some problems loading this report. Please',
                        middleMessage: ' Click here',
                        endMessage: 'to see the details of the error',
                        closeMessage: 'Close this message'
                    },
                    alertMessage: {
                        close: 'Close',
                        title: 'ReportViewer',
                        done: 'OK',
                        showDetails: 'Show details',
                        hideDetails: 'Hide details',
                        reportLoad: 'Report loaded:',
                        RVERR0001: 'ReportViewer could not load the Report',
                        RVERR0002: 'ReportViewer could not process the Report',
                        RVERR0003: 'An error occurred in the return of ajax data',
                        RVERR0004: 'Select a value for the parameter',
                        RVERR0005: 'The parameter {parameter name} is missing a value',
                        RVERR0006: 'Please enter the input of the float data type',
                        RVERR0007: 'Enter the integer data type entry',
                        RVERR0008: 'ReportViewer could not validate Datasource credentials',
                        RVERR0009: 'The margins are superimposed or are outside the paper. Enter a different margin size.',
                        RVERR0010: 'Enter a value for the parameter',
                        RVERR0011: 'The parameter can not be blank',
                        RVERR0012: 'The value provided for the report parameter {parameterprompt} is not valid for its type.'
                    },
                    selectAll: 'Select All',
                    viewButton: 'View Report'
                };
                break;
            case "ejReportDesigner":
                ej.ReportDesigner.Locale = ej.ReportDesigner.Locale || {};
                ej.ReportDesigner.Locale['en-US'] = {
                    itemPanel: {
                        waterMarkText: 'Search Widgets',
                        noDataFound: 'No matches found...',
                        groupItems: {
                            basicItems: {
                                groupName: 'Basic Items',
                                Items: {
                                    'line': 'Line',
                                    'image': 'Image',
                                    'textBox': 'TextBox',
                                    'rectangle': 'Rectangle'
                                }
                            },
                            comparison: {
                                groupName: 'Comparison',
                                Items: {
                                    'column': 'Column',
                                    'bar': 'Bar',
                                    'stackedColumn': 'Stacked Column',
                                    'stackedBar': 'Stacked Bar',
                                    'stackedColumnPercent': 'Stacked Column100%',
                                    'stackedBarPercent': 'Stacked Bar100%'
                                }
                            },
                            proportion: {
                                groupName: 'Proportion',
                                Items: {
                                    'pie': 'Pie',
                                    'explodedPie': 'Exploded Pie',
                                    'doughnut': 'Doughnut',
                                    'pyramid': 'Pyramid',
                                    'funnel': 'Funnel'
                                }
                            },
                            distribution: {
                                groupName: 'Distribution',
                                Items: {
                                    'area': 'Area',
                                    'smoothArea': 'Smooth Area',
                                    'stackedArea': 'Stacked Area',
                                    'stackedAreaPercent': 'Stacked Area100%',
                                    'line': 'Line',
                                    'smoothLine': 'Smooth Line',
                                    'steppedLine': 'Stepped Line',
                                    'lineWithMarkers': 'Line with Markers',
                                    'smoothLineWithMarkers': 'SmoothLine with Markers',
                                    'scatter': 'Scatter',
                                    'bubble': 'Bubble',
                                    'polar': 'Polar',
                                    'radar': 'Radar'
                                }
                            },
                            dataRegions: {
                                groupName: 'Data Regions',
                                Items: {
                                    'grid': 'Grid',
                                    'pivotgrid': 'PivotGrid'
                                }
                            },
                            subReports: {
                                groupName: 'Sub Reports',
                                Items: {
                                    'subreport': 'SubReport'
                                }
                            }
                        }
                    },
                    toolbar: {
                        newReport: 'New',
                        open: 'Open',
                        openMenu: {
                            fromDevice: 'From Device',
                            fromServer: 'From Server',
                        },
                        save: 'Save',
                        saveMenu: {
                            saveLabel: 'Save',
                            saveAs: 'Save As',
                            saveAsMenu: {
                                saveToDevice: 'To Device',
                                saveToServer: 'To Server'
                            }
                        },
                        cut: 'Cut',
                        copy: 'Copy',
                        paste: 'Paste',
                        undo: 'Undo',
                        redo: 'Redo',
                        zoomIn: 'Zoom In',
                        zoomOut: 'Zoom Out',
                        deleteItem: 'Delete',
                        gridLine: 'Grid Lines',
                        header: 'Header',
                        footer: 'Footer',
                        preview: 'Preview',
                        reportUpload: {
                            alertLabel: 'Upload',
                            alertMessage: 'Error in uploading file. Please upload again'
                        }
                    },
                    newReport: {
                        title: 'New Report',
                        fileName: 'File Name',
                        waterMark: 'Report Name',
                        create: 'Create',
                        cancel: 'Cancel',
                        close: 'Close',
                    },
                    reportAction: {
                        enableLink: 'Enable Link',
                        linkTo: 'Link To',
                        report: 'Report',
                        url: 'URL'
                    },
                    linkReport: {
                        reportCaption: 'Report',
                        setParameter: 'Set Parameters'
                    },
                    imageProperty: {
                        basicSettings: {
                            categoryName: 'Basic Settings',
                            source: 'Source',
                            sourceTypes: {
                                external: 'External',
                                embedded: 'Embedded',
                                database: 'Database'
                            },
                            value: 'Value',
                            mimeType: 'MIME Type',
                            mimeTypes: {
                                bmp: 'image/bmp',
                                jpeg: 'image/jpeg',
                                gif: 'image/gif',
                                png: 'image/png',
                                xPng: 'image/x-png'
                            }
                        },
                        categoryName: 'Link',
                        appearance: {
                            categoryName: 'Appearance',
                            borderTypes: {
                                border: 'Border',
                                borderLeft: 'Left',
                                borderTop: 'Top',
                                borderRight: 'Right',
                                borderBottom: 'Bottom'
                            },
                            borderStyles: {
                                solid: 'Solid',
                                none: 'None',
                                double: 'Double',
                                dashed: 'Dashed',
                                dotted: 'Dotted'
                            }
                        },
                        size: {
                            categoryName: 'Size',
                            paddingTypes: {
                                padding: 'Padding',
                                paddingLeft: 'Left',
                                paddingTop: 'Top',
                                paddingRight: 'Right',
                                paddingBottom: 'Bottom'
                            },
                            sizing: 'Sizing',
                            sizeTypes: {
                                auto: 'AutoSize',
                                fit: 'Fit',
                                proportional: 'FitProportional',
                                clip: 'Clip'
                            }
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Left',
                            top: 'Top',
                            sizeLabel: 'Size',
                            width: 'Width',
                            height: 'Height'
                        },
                        visibility: {
                            categoryName: 'Visibility',
                            visible: 'Visible'
                        }
                    },
                    chartProperty: {
                        commonProperties: {
                            showBorder: 'Show Border',
                            border: {
                                border: 'Border',
                                borderLeft: 'Left',
                                borderTop: 'Top',
                                borderRight: 'Right',
                                borderBottom: 'Bottom'
                            },
                            background: 'Background',
                            font: 'Font',
                            fontStyle: 'Font Style',
                            labelRotation: 'Label Rotation',
                            categoryAxis: 'Category Axis',
                            valueAxis: 'Value Axis',
                            defaultText: 'Default',
                            auto: 'Auto',
                            borderStyles: {
                                solid: 'Solid',
                                none: 'None',
                                double: 'Double',
                                dashed: 'Dashed',
                                dotted: 'Dotted',
                                dashDot: 'DashDot',
                                dashDotDot: 'DashDotDot'
                            },
                            horizontalAlignments: {
                                near: 'Near',
                                far: 'Far',
                            },
                            textAlignments: {
                                right: 'Right',
                                bottom: 'Bottom',
                                center: 'Center',
                                topLeft: 'TopLeft',
                                topCenter: 'TopCenter',
                                topRight: 'TopRight',
                                rightTop: 'RightTop',
                                rightCenter: 'RightCenter',
                                rightBottom: 'RightBottom',
                                bottomLeft: 'BottomLeft',
                                bottomCenter: 'BottomCenter',
                                bottomRight: 'BottomRight',
                                leftTop: 'LeftTop',
                                leftCenter: 'LeftCenter',
                                leftBottom: 'LeftBottom',
                            },
                            fontStyleTypes: {
                                normal: 'Normal',
                                italic: 'Italic'
                            },
                            fontWeightTypes: {
                                light: 'Light',
                                bold: 'Bold'
                            }
                        },
                        basicSettings: {
                            categoryName: 'Basic Settings',
                            showLegend: {
                                showLegendText: 'Show Legend',
                                title: 'Title',
                                titleFont: 'Title Font',
                                titleFontStyle: 'Title Font Style',
                                titleAlignment: 'Title Alignment',
                                legendPosition: 'Legend Position',
                                enableCustomBounds: 'Enable Custom Bounds'
                            },
                            chooseSeries: 'Choose Series',
                            showMarker: {
                                showMarkerText: 'Show Marker',
                                color: 'Color',
                                markerType: 'Marker Type',
                                markerTypes: {
                                    square: 'Square',
                                    circle: 'Circle',
                                    diamond: 'Diamond',
                                    triangle: 'Triangle',
                                    cross: 'Cross',
                                    star5: 'Star5',
                                },
                                size: 'Size'
                            },
                            showDataLabel: {
                                showDataLabelText: 'Show Data Label',
                                dataLabelFormat: 'Format',
                                dataLabelText: 'Label',
                                dataLabelValueAsText: 'UseValueAsLabel',
                                dataLabelTypes: {
                                    valueX: '#VALX',
                                    valueY: '#VALY',
                                    valueY2: '#VALY2',
                                    valueY3: '#VALY3',
                                    valueY4: '#VALY4',
                                    valueY5: '#VALY5',
                                    valueY6: '#VALY6',
                                    index: '#INDEX',
                                    percent: '#PERCENT',
                                    total: '#TOTAL',
                                    axisLabel: '#AXISLABEL'
                                }
                            },
                            enableSmartLabel: {
                                smartLabelText: 'Enable SmartLabel',
                                labelStyle: 'Label Style',
                                value: 'Value',
                                smartLabelPositions: {
                                    outside: 'Outside',
                                    inside: 'Inside',
                                    outsideInColumn: 'OutsideInColumn'
                                },
                                smartLabelStyles: {
                                    pieLabelStyle: 'PieLabelStyle',
                                    funnelLabelStyle: 'FunnelLabelStyle',
                                    pyramidLabelStyle: 'PyramidLabelStyle',
                                    barLabelStyle: 'BarLabelStyle',
                                    smartLabelStyle: 'LabelStyle'
                                }
                            },
                            seriesBorder: 'Series Border',
                            seriesColor: 'Series Color'
                        },
                        categoryName: 'Appearance',
                        chartArea: {
                            categoryName: 'Chart Area',
                            colorPalette: 'Color Palette',
                            colorPaletteTypes: {
                                earthTones: 'EarthTones',
                                excel: 'Excel',
                                grayScale: 'GrayScale',
                                pastel: 'Pastel',
                                semiTransparent: 'SemiTransparent',
                                berry: 'Berry',
                                chocolate: 'Chocolate',
                                fire: 'Fire',
                                seaGreen: 'SeaGreen',
                                brightPastel: 'BrightPastel',
                                pacific: 'Pacific',
                                pacificLight: 'PacificLight',
                                pacificSemiTransparent: 'PacificSemiTransparent',
                            }
                        },
                        title: {
                            categoryName: 'Title',
                            showChartTitle: 'Show Chart Title',
                            titleText: 'Title Text',
                            titlePosition: 'Title Position'
                        },
                        axis: {
                            enableAxis: 'Enable Axis',
                            axisTitle: 'Axis Title',
                            alignment: 'Alignment',
                            lineStyle: 'Line Style',
                            labelOverflowMode: 'Label Overflow Mode',
                            overFlowModeTypes: {
                                trim: 'Trim',
                                hide: 'Hide',
                            },
                            labelFont: 'Label Font',
                            enableMajorTicks: 'Enable Major Ticks',
                            enableMinorTicks: 'Enable Minor Ticks',
                            tickProperties: {
                                tickSize: 'Tick Size',
                                tickColor: 'Tick Color',
                                tickWidth: 'Width',
                                length: 'Length'
                            },
                            tickPosition: 'Tick Position'
                        },
                        gridLine: {
                            categoryName: 'Grid Line',
                            gridLineStyle: {
                                minorGridLine: 'Show Minor GridLine',
                                majorGridLineStyle: 'Major GridLine Style',
                                minorGridLineStyle: 'Minor GridLine Style'
                            }
                        },
                        pageBreak: {
                            categoryName: 'Page Break',
                            enablePageBreak: 'Enable Page Break',
                            breakLocation: 'Break Location',
                            breakLocationTypes: {
                                start: 'Start',
                                end: 'End',
                                startAndEnd: 'StartAndEnd',
                                between: 'Between',
                            },
                            pageNumberReset: 'Page Number Reset',
                            pageName: 'Page Name'
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Left',
                            top: 'Top',
                            sizeLabel: 'Size',
                            width: 'Width',
                            height: 'Height'
                        },
                        visibility: {
                            categoryName: 'Visibility',
                            visible: 'Visible'
                        }
                    },
                    lineProperty: {
                        basicSettings: {
                            categoryBasicSettings: 'Basic Settings',
                            line: 'Line',
                            lineTypes: {
                                solid: 'Solid',
                                dashed: 'Dashed',
                                dotted: 'Dotted',
                            },
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Left',
                            top: 'Top',
                            sizeLabel: 'Size',
                            width: 'Width',
                            height: 'Height',
                        },
                        visibility: {
                            categoryName: 'Visibility',
                            visible: 'Visible',
                        }
                    },
                    subReportProperty: {
                        basicSettings: {
                            categoryBasicSettings: 'Basic Settings',
                            report: 'Report',
                            setParameters: 'Set Parameters...'
                        },
                        appearance: {
                            categoryAppearance: 'Appearence',
                            borderTypes: {
                                border: 'Border',
                                borderLeft: 'Left',
                                borderTop: 'Top',
                                borderRight: 'Right',
                                borderBottom: 'Bottom'
                            },
                            borderStyles: {
                                solid: 'Solid',
                                none: 'None',
                                double: 'Double',
                                dashed: 'Dashed',
                                dotted: 'Dotted'
                            }
                        },
                        noRows: {
                            noRowsLabel: 'No Rows',
                            font: 'Font',
                            fontStyle: {
                                fontStyleLabel: 'Font Style',
                                fontItem: {
                                    defaultStyle: 'Default',
                                    fontNormal: 'Normal',
                                    italic: 'Italic'
                                },
                                fontWeight: {
                                    defaultElement: 'Default',
                                    normal: 'Normal',
                                    thin: 'Thin',
                                    extraLight: 'ExtraLight',
                                    light: 'Light',
                                    medium: 'Medium',
                                    semiBold: 'SemiBold',
                                    bold: 'Bold',
                                    extraBold: 'ExtraBold',
                                    heavy: 'Heavy',
                                }
                            },
                            textDecoration: {
                                textDecorationLabel: 'Text Decoration',
                                defaultDecoration: 'Default',
                                none: 'None',
                                underLine: 'Underline',
                                overLine: 'Overline',
                                lineThrough: 'LineThrough'
                            },
                            format: 'Format',
                            lineHeight: 'Line Height',
                            message: 'Message',
                            paddingTypes: {
                                padding: 'Padding',
                                paddingLeft: 'Left',
                                paddingRight: 'Right',
                                paddingTop: 'Top',
                                paddingBottom: 'Bottom',
                            },
                            textAlign: {
                                textAlignLabel: 'Text Align',
                                textAlignDefault: 'Default',
                                textAlignGeneral: 'General',
                                textAlignLeft: 'Left',
                                textAlignRight: 'Right',
                                textAlignCenter: 'Center'
                            },
                            verticalAlign: {
                                verticalAlignlabel: 'Vertical Align',
                                verticalAlignDefault: 'Default',
                                verticalAlignTop: 'Top',
                                verticalAlignMiddle: 'Middle',
                                verticalAlignBottom: 'Bottom'
                            },
                            writingMode: {
                                writingModeLabel: 'Writing Mode',
                                writingModeDefault: 'Default',
                                writingModeHorizontal: 'Horizontal',
                                writingModeVertical: 'Vertical',
                                writingModeRotate: 'Rotate270'
                            }
                        },
                        visibility: {
                            categoryName: 'Visibility',
                            visible: 'Visible',
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Left',
                            top: 'Top',
                            sizeLabel: 'Size',
                            width: 'Width',
                            height: 'Height',
                        },
                        miscellaneous: {
                            categoryMiscellaneous: 'Miscellaneous',
                            keepTogether: 'Keep Together'
                        }
                    },
                    rectangleProperty: {
                        basicSettings: {
                            categoryBasicSettings: 'Basic Settings',
                            borderTypes: {
                                border: 'Border',
                                borderLeft: 'Left',
                                borderTop: 'Top',
                                borderRight: 'Right',
                                borderBottom: 'Bottom'
                            },
                            borderStyles: {
                                solid: 'Solid',
                                none: 'None',
                                double: 'Double',
                                dashed: 'Dashed',
                                dotted: 'Dotted'
                            },
                            backGround: 'Background'
                        },
                        pageBreak: {
                            pageBreak: 'Page Break',
                            enablePageBreak: {
                                enablePageBreak: 'Enable Page Break',
                                breakLocation: {
                                    breakLocationLabel: 'Break Location',
                                    none: 'None',
                                    start: 'Start',
                                    end: 'End',
                                    startAndEnd: 'StartAndEnd',
                                    between: 'Between'
                                },
                                pageNumberReset: 'Page Number Reset'
                            },
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Left',
                            top: 'Top',
                            sizeLabel: 'Size',
                            width: 'Width',
                            height: 'Height',
                        },
                        visibility: {
                            categoryName: 'Visibility',
                            visible: 'Visible',
                        },
                        rectangleMiscellaneous: {
                            categoryMiscellaneous: 'Miscellaneous',
                            keepTogether: 'Keep Together',
                            pageName: 'Page Name'
                        }
                    },
                    browseFile: {
                        openFile: {
                            selectReport: 'Select Report',
                            open: 'Open',
                        },
                        saveFile: {
                            saveAsReport: 'Save As Report',
                            name: 'Name',
                            save: 'Save',
                        },
                        close: 'Close',
                        cancel: 'Cancel',
                        waterMark: 'Report Name',
                        emptyMessage: 'This category is empty',
                        alertMessage: {
                            reportServer: 'Report Server',
                            selectCategory: 'Please Select Category',
                        },
                        warningMessage: {
                            fileNameLabel: 'An item "',
                            fileNameExist: '.rdl" already exists. Do you want to replace the existing item?',
                            populateCategory: 'ReportDesigner failed to retrieve the Resources from the ReportServer',
                        }
                    },
                    expressionMenu: {
                        reset: 'Reset',
                        expression: 'Expression',
                        advanced: 'Advanced'
                    },
                    propertyPanel: {
                        property: 'PROPERTIES',
                        data: 'DATA',
                        name: 'Name',
                        toolTipStyle: 'Style',
                        toolTipColor: 'Color',
                        toolTipWidth: 'Width',
                        setSorts: 'Set Sorts',
                        setFilters: 'Set Filters',
                        advancedOptions: 'Advanced Options',
                        expressionList: {
                            top: 'Top',
                            right: 'Right',
                            bottom: 'Bottom',
                            left: 'Left',
                            style: 'Style',
                            color: 'Color',
                            size: 'Size',
                            fontFamily: 'FontFamily',
                            width: 'Width',
                            height: 'Height',
                            weight: 'Weight',
                            image: 'Image'
                        },
                        alertMessage: {
                            nameWarning: 'Name cannot be empty',
                            nameAlert: 'Name already exists',
                            nameValidation: 'Name should not contain spaces and special characters'
                        }
                    },
                    dataSource: {
                        newDatasource: 'NEW DATASOURCE',
                        datasource: 'DATASOURCES',
                        datasourceList: {
                            data: 'Data',
                            contextMenu: {
                                editItem: 'Edit',
                                deleteItem: 'Delete',
                                createDataSet: 'Create DataSet'
                            }
                        },
                        datasourceType: {
                            existOption: 'Existing',
                            newOption: 'Create New',
                            selectDatasoure: 'Select the DataSource',
                            connectDatasource: 'Connect DataSource',
                            datasourceType: 'Choose the type to connect',
                            sqlLabel: 'SQL',
                            sqlCeLabel: 'SQLCE',
                            odbcLabel: 'ODBC',
                            oracleLabel: 'ORACLE',
                            oledbLabel: 'OLEDB',
                            xmlLabel: 'XML',
                            odataLabel: 'ODATA',
                            postSQLLabel: 'PostSQL',
                            sassLabel: 'SASS',
                            sharedLabel: 'Shared'
                        },
                        datasourceConnection: {
                            newConnection: 'NEW CONNECTION',
                            editConnection: 'EDIT CONNECTION',
                            name: 'Name',
                            save: 'Save',
                            connect: 'Connect',
                            cancel: 'Cancel'
                        },
                        sqlDatasource: {
                            authenticationType: 'Authentication Type',
                            window: 'Windows',
                            sqlServer: 'SQL Server',
                            userName: 'Username',
                            password: 'Password',
                            switchLabel: 'DataSource AdvancePanel',
                            switchAlert: 'Switching to the visual designer will discard the manual changes made to the connection string. Do you want to use the visual designer anyway ? ',
                            basicOption: {
                                serverName: 'Server Name',
                                savePassword: 'Save Password',
                                database: 'Database',
                                advanceSwitch: 'Advance Option'
                            },
                            advanceOption: {
                                connectionString: 'Connection String',
                                promptLabel: 'Prompt Text',
                                prompt: 'Prompt',
                                none: 'None',
                                basicSwitch: 'Basic Option'
                            },
                            alertMessage: {
                                alertConnectionString: 'Specify the Connection string',
                                alertPrompt: 'Specify the Prompt Text',
                                alertUserName: 'Specify the User Name',
                                alertPassword: 'Specify the Password',
                                alertServerName: 'Specify the server name',
                                alertDatabaseName: 'Specify the database name'
                            }
                        },
                        sqlceDatasource: {
                            connectionString: 'Connection String',
                            authenticationType: 'Authentication Type',
                            authentication: 'Authentication',
                            none: 'None',
                            password: 'Password',
                            alertMessage: {
                                alertConnectionString: 'Specify the connection string',
                                alertPassword: 'Specify the Password'
                            }
                        },
                        odbcDatasource: {
                            connectionString: 'Connection String',
                            authenticationType: 'Authentication Type',
                            authentication: 'Authentication',
                            prompt: 'Prompt',
                            none: 'None',
                            userName: 'Username',
                            password: 'Password',
                            promptLabel: 'Prompt Text',
                            alertMessage: {
                                alertConnectionString: 'Specify the Connection string',
                                alertPrompt: 'Specify the Prompt Text',
                                alertUserName: 'Specify the User Name',
                                alertPassword: 'Specify the Password'
                            }
                        },
                        oracleDatasource: {
                            connectionString: 'Connection String',
                            authenticationType: 'Authentication Type',
                            authentication: 'Authentication',
                            prompt: 'Prompt',
                            none: 'None',
                            userName: 'Username',
                            password: 'Password',
                            promptLabel: 'Prompt Text',
                            alertMessage: {
                                alertConnectionString: 'Specify the Connection string',
                                alertPrompt: 'Specify the Prompt Text',
                                alertUserName: 'Specify the User Name',
                                alertPassword: 'Specify the Password'
                            }
                        },
                        oledbDatasource: {
                            connectionString: 'Connection String',
                            authenticationType: 'Authentication Type',
                            authentication: 'Authentication',
                            prompt: 'Prompt',
                            none: 'None',
                            userName: 'Username',
                            password: 'Password',
                            promptLabel: 'Prompt Text',
                            alertMessage: {
                                alertConnectionString: 'Specify the Connection string',
                                alertPrompt: 'Specify the Prompt Text',
                                alertUserName: 'Specify the User Name',
                                alertPassword: 'Specify the Password'
                            }
                        },
                        xmlDatasource: {
                            connectionString: 'Connection String',
                        },
                        odataDatasource: {
                            connectionString: 'Connection String',
                            alertMessage: 'Specify the Connection string'
                        },
                        postSQLDatasource: {
                            connectionString: 'Connection String',
                            authenticationType: 'Authentication Type',
                            authentication: 'Authentication',
                            prompt: 'Prompt',
                            none: 'None',
                            userName: 'Username',
                            password: 'Password',
                            promptLabel: 'Prompt Text',
                            alertMessage: {
                                alertConnectionString: 'Specify the Connection string',
                                alertPrompt: 'Specify the Prompt Text',
                                alertUserName: 'Specify the User Name',
                                alertPassword: 'Specify the Password'
                            }
                        },
                        sassDatasource: {
                            connectionString: 'Connection String',
                            authenticationType: 'Authentication Type',
                            window: 'Windows',
                            sqlServer: 'SQL Server',
                            prompt: 'Prompt',
                            none: 'None',
                            userName: 'Username',
                            password: 'Password',
                            promptLabel: 'Prompt Text',
                            alertMessage: {
                                alertConnectionString: 'Specify the Connection String',
                                alertPrompt: 'Specify the Prompt Text',
                                alertUserName: 'Specify the User Name',
                                alertPassword: 'Specify the Password'
                            }
                        },
                        sharedDatasource: {
                            datasource: 'Shared DataSource',
                            alertMessage: 'Select a shared DataSource'
                        },
                        alertMessage: {
                            alertLabel: 'DataSource',
                            alertConnectionFailed: 'ReportDesigner failed to connect the datasource',
                            deleteValue: 'Delete data source \'',
                            nameWarning: 'Specify the DataSource name',
                            nameAlert: 'The specified name already exists in the DataSource list',
                            nameValidation: 'Name should not contain spaces and special characters'
                        }
                    },
                    imageManager: {
                        headerText: 'IMAGE MANAGER',
                        addImageButton: 'Add Image',
                        deleteImage: 'Delete embedded image',
                        image: 'Image',
                    },
                    linkParameter: {
                        title: 'Parameters',
                        descriptionText: 'Report Parameters',
                        addText: 'ADD',
                        ok: 'OK',
                        cancel: 'Cancel',
                        nameWaterMark: 'Parameter Name',
                        valueWaterMark: 'Value',
                        errorMessage: 'Enter a value for this property',
                        closeToolTip: 'Close'
                    },
                    filter: {
                        title: 'Filter',
                        descriptionLable: 'Include rows where the following conditions are true.',
                        add: 'ADD',
                        ok: 'OK',
                        cancel: 'Cancel',
                        valueWaterMark: 'Value',
                        fieldWaterMark: 'Choose Field',
                        closeToolTip: 'Close',
                        errorMessage: {
                            booleanValidation: 'Value is not a boolean value. ',
                            intValidation: 'Value is not an integer. ',
                            floatValidation: 'Value is not a float. ',
                            dateTimeValidation: 'Value is an invalid date/time format. ',
                            topBottomFilter: 'The Top % and Bottom % filter operators requires a float or an integer datatype.',
                            expressionValidation: 'Choose value for expression field'
                        },
                        operatorTypes: {
                            like: 'Like',
                            topN: 'TopN',
                            bottomN: 'BottomN',
                            topPercent: 'Top%',
                            bottomPercent: 'Bottom%',
                            between: 'Between',
                            inFilter: 'In',
                        }
                    },
                    dataPanel: {
                        itemTooltip: {
                            properties: 'Properties',
                            data: 'Data',
                            parameters: 'Parameters',
                            imageManager: 'Image Manager',
                        },
                        dataSourceNewAlert: {
                            title: 'DataSource',
                            contentMessage: 'Do you want to cancel the DataSource creation ?',
                        },
                        dataSourceEditAlert: {
                            title: 'DataSource',
                            contentMessage: 'Do you want to cancel the DataSource editing ?',
                        },
                        dataSetNewAlert: {
                            title: 'DataSet',
                            contentMessage: 'Do you want to cancel the DataSet creation ?',
                        },
                        dataSetEditAlert: {
                            title: 'DataSet',
                            contentMessage: 'Do you want to cancel the DataSet editing ?',
                        },
                        parameterNewAlert: {
                            title: 'Parameter',
                            contentMessage: 'Do you want to cancel the Parameter creation ?',
                        },
                        parameterEditAlert: {
                            title: 'Parameter',
                            contentMessage: 'Do you want to cancel the Parameter editing ?',
                        }
                    },
                    dataSet: {
                        headerText: 'DATA',
                        newData: 'ADD DATASET',
                        splitButtonMenu: {
                            sharedDataset: 'Shared',
                            createNewDataset: 'Create New'
                        },
                        shareDataset: {
                            headerText: 'NEW DATASET',
                            save: 'Save',
                            cancel: 'Cancel',
                            nameLable: 'Name',
                            sharedDatasetLabel: 'Shared DataSet',
                            errorMessage: {
                                nameValidation: 'Specify the DataSet name',
                                datasetValidation: 'Select a shared DataSource',
                                duplicateName: 'The specified name already exists in the DataSet list',
                                specialCharacter: 'Name should not contain spaces and special characters'
                            }
                        },
                        contextMenu: {
                            edit: 'Edit',
                            remove: 'Delete'
                        },
                        datasourceSwitcher: 'Datasources',
                        deleteDataset: 'Delete dataset',
                        deleteField: 'Delete field'
                    },
                    reportViewer: {
                        toolbar: {
                            print: 'Print',
                            exportformat: {
                                exportText: 'Export',
                                Pdf: 'PDF',
                                Excel: 'Excel',
                                Word: 'Word',
                                Html: 'Html',
                                PPT: 'PPT',
                                CSV: 'CSV'
                            },
                            pageSetup: 'Page Setup',
                            gotoFirst: 'Goto First',
                            gotoLast: 'Goto Last',
                            gotoNext: 'Goto Next',
                            gotoPrevious: 'Goto Previous',
                            gotoParanet: 'Goto Parent',
                            zoomIn: 'Zoom In',
                            zoomOut: 'Zoom Out',
                            fittopage: {
                                fitPageText: 'Fit to Page',
                                pageWidth: 'Page Width',
                                pageHeight: 'Whole Page'
                            },
                            printLayout: 'Print Layout',
                            refresh: 'Refresh',
                            documentMap: 'Document Map',
                            parameter: 'Parameter',
                            viewDesign: 'Close Preview',
                        },
                        pagesetupDialog: {
                            close: 'Close',
                            paperSize: 'Paper Size',
                            height: 'Height',
                            width: 'Width',
                            margins: 'Margins',
                            top: 'Top',
                            bottom: 'Bottom',
                            right: 'Right',
                            left: 'Left',
                            unit: 'in',
                            orientation: 'Orientation',
                            portrait: 'Portrait',
                            landscape: 'Landscape',
                            doneButton: 'OK',
                            cancelButton: 'Cancel'
                        },
                        credential: {
                            userName: 'Username',
                            password: 'Password'
                        },
                        waterMark: {
                            selectOption: 'Select Option',
                            selectValue: 'Select a value'
                        },
                        errorMessage: {
                            startMessage: 'Report Viewer encountered some issues on loading this report. Please',
                            middleMessage: ' Click here',
                            endMessage: 'to see the error details',
                            closeMessage: 'Close this message'
                        },
                        alertMessage: {
                            close: 'Close',
                            title: 'ReportViewer',
                            done: 'OK',
                            showDetails: 'Show details',
                            hideDetails: 'Hide Details',
                            reportLoad: 'Report Loaded:',
                            RVERR0001: 'ReportViewer failed to load the Report',
                            RVERR0002: 'ReportViewer failed to render the Report',
                            RVERR0003: 'An error occurred in ajax postback',
                            RVERR0004: 'Please select a value for the parameter',
                            RVERR0005: 'The {parametername} parameter is missing a value',
                            RVERR0006: 'Please give the float data type input',
                            RVERR0007: 'Please give the integer data type input',
                            RVERR0008: 'ReportViewer failed to validate the Datasource credentials',
                            RVERR0009: 'The margins are overlapped or they are off the paper. Enter a different margin size.',
                            RVERR0010: 'Please enter a value for the parameter',
                            RVERR0011: 'The parameter cannot be blank',
                            RVERR0012: 'The value provided for the report parameter {parameterprompt} is not valid for its type.'
                        },
                        selectAll: 'Select All',
                        viewButton: 'View Report'
                    },
                    sortData: {
                        sorting: 'Sorting',
                        add: 'ADD',
                        changeSortingOptions: 'Change Sorting Options.',
                        sortBy: 'Sort by',
                        thenBy: 'Then by',
                        direction: {
                            ascending: 'Ascending',
                            descending: 'Descending',
                        },
                        chooseField: 'Choose Field',
                        errorMessage: 'Choose value for expression field',
                        ok: 'OK',
                        cancel: 'Cancel',
                        close: 'Close',
                    },
                    groupData: {
                        grouping: 'Grouping',
                        name: 'Name',
                        label: 'Label',
                        changeGroupingOptions: 'Change Grouping Options.',
                        add: 'ADD',
                        groupBy: 'Group by',
                        andOn: 'And on',
                        chooseField: 'Choose Field',
                        ok: 'OK',
                        cancel: 'Cancel',
                        close: 'Close',
                        errorMessage: {
                            nameErrorMessage: 'Please enter the name',
                            expressionErrorMessage: 'Choose value for an expression field',
                        },
                    },
                    alertMessage: {
                        yes: 'Yes',
                        no: 'No',
                        ok: 'OK',
                        showDetails: 'Show Details',
                        hideDetails: 'Hide Details',
                        close: 'Close'
                    },
                    parameter: {
                        listPanel: {
                            headerText: 'PARAMETERS',
                            newParameter: 'NEW PARAMETER',
                            editMenu: {
                                edit: 'Edit',
                                remove: 'Delete'
                            },
                            alertTitle: 'Parameter'
                        },
                        configurationPanel: {
                            newHeaderText: 'NEW PARAMETER',
                            editHeaderText: 'EDIT PARAMETER',
                            nameLabel: 'Name',
                            promptLable: 'Prompt',
                            dataTypeLable: 'Data Type',
                            blankValueLable: 'Allow blank value("")',
                            nullValueLable: 'Allow null value',
                            multipleValueLable: 'Allow multiple values',
                            visibilityLable: 'Visibility',
                            assignValueLable: 'Assign Value >>',
                            save: 'Save',
                            cancel: 'Cancel',
                            visibility: {
                                visible: 'Visible',
                                hidden: 'Hidden',
                                internal: 'Internal'
                            },
                            dataType: {
                                stringType: 'String',
                                booleanType: 'Boolean',
                                dateTimeType: 'DateTime',
                                integerType: 'Integer',
                                floatType: 'Float'
                            }
                        },
                        errorMessage: {
                            nameField: 'Please enter the name',
                            promptField: 'Please enter the value',
                            nameAlreadyExists: 'The parameter name already exists'
                        },
                        warningMessage: {
                            specialCharacter: 'Name should not contain spaces and special characters',
                            multipleValueAlert: 'Multiple default values were specified. The parameter does not allow multiple values. ',
                            nullValueAlert: 'In value field, a null value was specified. The parameter does not allow null values. '
                        },
                        alertMessage: {
                            confirmNullCheck: 'Available or default values might contain null value, Do you want to enable the allow null value checkbox?',
                            confirmBlankValue: 'Available or default values might contain blank value, Do you want to enable the blank value checkbox?',
                            dataTypeChange: 'Changing the datatype will discard the changes made to the available and default values. Do you want to change the datatype anyway ?',
                            deleteAlert: 'Delete report parameter'
                        },
                        assignData: {
                            title: 'Parameter',
                            availableValue: 'Available Value',
                            defaultValue: 'Default Value',
                            none: 'None',
                            specify: 'Specify',
                            query: 'Query Value',
                            ok: 'OK',
                            cancel: 'Cancel',
                            availableFields: {
                                specifyDescriptionText: 'Add the available values for the parameters:',
                                queryDescriptionText: 'Choose the dataset and fields for the available values:',
                                nameFieldWaterMark: 'Label',
                                valueFieldWaterMark: 'Value'
                            },
                            defaultFields: {
                                specifyDescriptionText: 'Add the default values for the parameters:',
                                queryDescriptionText: 'Choose the dataset and fields for the default values:',
                                defValueWaterMark: 'Choose Default Value'
                            },
                            datasetWaterMark: 'Choose Dataset Value',
                            valueWaterMark: 'Choose Value',
                            lableWaterMark: 'Choose Label',
                            add: 'ADD',
                            datasetLableText: 'Dataset',
                            valueLableText: 'Value Field',
                            labelFieldText: 'Label Field',
                            errorMessage: {
                                boolTypeCheck: 'Value is not a boolean value. ',
                                dateTypeCheck: 'Value is an invalid date format. ',
                                intTypeCheck: 'Value is not an integer. ',
                                floatTypeCheck: 'Value is not a float. ',
                                multipleValuesCheck: 'A multi-value parameter cannot include null values',
                                datasetFieldCheck: 'Dataset field is required. ',
                                valueFieldCheck: 'Value field is required. ',
                                syntaxLabelField: 'The entered value in the label field is not a valid token syntax. ',
                                syntaxValueField: 'The entered value in the value field is not a valid token syntax. ',
                                blankValueCheck: 'The value field is blank. The parameter does not allow blank values.',
                            },
                            closeToolTip: 'Close'
                        }
                    },
                    formatData: {
                        title: 'Format Dialog',
                        typeSelect: 'Type',
                        typeFormat: {
                            numberType: {
                                numberType: 'Number',
                                decimalPlaces: 'Decimal Places',
                                negativeValues: 'Negative values',
                                showZeroAs: {
                                    showZeroAs: 'Show zero as',
                                    none: '(none)'
                                },
                                representation: 'Representation',
                                repDropDwn: {
                                    thousands: 'Thousands',
                                    millions: 'Millions',
                                    billions: 'Billions',
                                },
                                useRegionFormating: 'Use regional formatting',
                                use1000Separator: 'Use 1000 Separator(,)'
                            },
                            currency: {
                                currencyType: 'Currency',
                                decimalPlaces: 'Decimal Places',
                                negativeValues: 'Negative values',
                                cultureCurrency: 'Currency Culture',
                                showZeroAs: {
                                    none: '(none)'
                                },
                                representation: 'Representation',
                                repDropDwn: {
                                    thousands: 'Thousands',
                                    millions: 'Millions',
                                    billions: 'Billions',
                                },
                                useRegionFormating: 'Use regional formatting',
                                use1000Separator: 'Use 1000 Separator(,)',
                                includeSpace: 'Include a space'
                            },
                            date: {
                                dateType: 'Date',
                                date: 'Date'
                            },
                            time: {
                                timeType: 'Time',
                                time: 'Time'
                            },
                            percentage: {
                                percentageType: 'Percentage',
                                decimalPlaces: 'Decimal Places',
                                includeSpace: 'Include a space'
                            },
                            scientific: {
                                scientificType: 'Scientific',
                                decimalPlaces: 'Decimal Places'
                            },
                            custom: {
                                customType: 'Custom',
                                customFormat: 'Custom format'
                            },
                        },
                        preview: 'Preview',
                        ok: 'OK',
                        cancel: 'Cancel',
                        close: 'Close'
                    },
                    expression: {
                        title: 'Expression',
                        descriptionText: 'Set Expression for : ',
                        optionLabel: 'Options',
                        dataLabel: 'Data',
                        descritionLabel: 'Description',
                        exampleLabelText: 'Example',
                        ok: 'Ok',
                        cancel: 'Cancel',
                        closeToolTip: 'Close',
                        textAreaWaterMark: 'Expression',
                        category: {
                            builtInFields: 'Built-in Fields',
                            operators: 'Operators',
                            functions: 'Functions'
                        },
                        parameters: 'Parameters',
                        optionWaterMark: 'Select an option',
                        dataWaterMark: 'Select an data',
                        reportData: 'No report data found',
                        description: {
                            executionTime: 'The date and time that the reports starts to run.',
                            overallPageNumber: 'The current overall page number can be used only in the page header or footer.',
                            overallTotalPages: 'The total number of pages in the report can be used only in the page header and footer.',
                            pageName: 'The name of the current page in the report can be used only in the page header or footer.',
                            pageNumber: 'The current page number that can be reset through the use of page breaks',
                            isInteractive: 'A boolean that indicates whether the current rendering request uses an interactive format.',
                            renderName: 'The name of the renderer as registered in the RSReportServer configuration file.',
                            reportFolder: 'The full path to the folder containing the report does not include the report server URL.',
                            reportName: 'The URL of the report server where the report is run.',
                            reportServerUrl: 'The URL of the report server on which the report is being run.',
                            totalPages: 'The total number of pages in the current continuous page sequence can be used only in the page header and footer. The number can be reset by using page breaks.',
                            language: 'The language ID of the client running the report.',
                            userID: 'The ID of the user running the report.',
                            powerNumberType: 'Raises a number to the power of another number.',
                            multiply: 'Multiplies two numbers.',
                            integerDivision: 'Divides two numbers and returns an integer.',
                            floatDivision: 'Divides two numbers and returns a floating-point. ',
                            modulus: 'Divides two numbers and returns only the remainder.',
                            add: 'Adds two numbers and can be used to concatenate two strings.',
                            difference: 'Yields the difference between two numbers or indicates the negative value of a numeric expression.',
                            lesser: 'Less than.',
                            lesserOrEqual: 'Less than or equal to.',
                            greater: 'Greater than.',
                            greaterOrEqual: 'Greater than or equal to.',
                            equal: 'Equal to.',
                            notEqual: 'Not equal to.',
                            like: 'Compares two strings.',
                            isOperator: 'Compares two object reference variables.',
                            expression: 'Generates a string concatenation of two expressions.',
                            stringType: 'Adds two numbers, and it can be used to concatenate two strings.',
                            and: 'Performs a logical conjunction on two Boolean expressions, or bitwise conjunction on two ',
                            not: 'Performs logical negation on a Boolean expression, or bitwise negation on a numeric expression.',
                            or: 'Used to perform a logical disjunction on two Boolean expressions, or bitwise disjunction on two numeric values.',
                            xor: 'Performs a logical exclusion operation on two Boolean expressions, or a bitwise exclusion on two numeric expressions.',
                            andAlso: 'Performs short-circuiting logical conjunction on two expressions.',
                            orElse: 'Used to perform short-circuiting logical disjunction on two expressions.',
                            left: 'Performs an arithmetic left shift on a bit pattern.',
                            right: 'Performs an arithmetic right shift on a bit pattern.',
                            asc: 'Returns an integer value representing the character code corresponding to a character.',
                            ascW: 'Returns an integer value representing the character code corresponding to a character.',
                            chr: 'Returns the character associated with the specified character code.',
                            chrW: 'Returns the character associated with the specified character code.',
                            filter: 'Returns a zero-based array containing a subset of a string array based on specified filter criteria.',
                            formatStringType: 'Returns a formatted string according to the instructions in a format string expression.',
                            currency: 'Returns an expression formatted as a currency value using the currency symbol defined in the system control panel.',
                            dateTime: 'Returns a string expression representing a date/time value.',
                            numberType: 'Returns an expression formatted as a number.',
                            percent: 'Returns an expression formatted as a percentage (that is, multiplied by 100).',
                            getChar: 'Returns a char value representing the character from the specified index in the supplied string.',
                            inStr: 'Returns an integer specifying the start position of the first occurrence of one string within another.',
                            inStrRev: 'Returns the position of the first occurrence of one string within another, starting from the right side of the string.',
                            join: 'Returns a string created by joining a number of substrings in an array.',
                            lCase: 'Returns a string or character converted to lowercase.',
                            leftStringType: 'Returns a string containing a specified number of characters from the left side of a string.',
                            stringLength: 'Returns an integer containing either the number of characters in a string or the number. ',
                            lSet: 'Returns a left-aligned string containing the specified string adjusted to the specified length.',
                            leftTrim: 'Returns the string without left side trailing spaces in the given string.',
                            middle: 'Returns a string containing a specified number of characters from a string.',
                            replace: 'Returns a string in which a specified substring has been replaced with another. ',
                            rightString: 'Returns a string containing a specified number of characters from the right side of a string.',
                            rightSet: 'Returns a right-aligned string containing the specified string adjusted to the specified length.',
                            rightTrim: 'Returns the string without right side trailing spaces in the given string.',
                            stringSpace: 'Returns a string consisting of the specified number of spaces.',
                            splitString: 'Returns a zero-based, one-dimensional array containing a specified number of substrings.',
                            strComp: 'Returns -1, 0, or 1, based on the result of a string comparison.',
                            strConv: 'Returns a string converted as specified.',
                            duplicateString: 'Returns a string or object consisting of the specified character repeated the specified number of times.',
                            strReverse: 'Returns a string in which the character order of a specified string is reversed.',
                            trim: 'Returns the string without trailing spaces in the given string',
                            upperCase: 'Returns a string or character containing the specified string converted to uppercase.',
                            cDate: 'Convert to date.',
                            dateAdd: 'Returns a date value containing date and time values to which a specified time interval has been added.',
                            dateDiff: 'Returns a long value specifying the number of time intervals between two date values.',
                            datePart: 'Returns an integer value containing the specified component of a given date value.',
                            dateSerial: 'Returns a date value representing a specified year, month, and day, with the time information set to midnight (00:00:00).',
                            dateString: 'Returns or sets a string value representing the current date according to your system.',
                            dateValue: 'Returns a date value containing the date information represented by a string, with the time information. ',
                            day: 'Returns an integer value from 1 through 31 representing the day of the month.',
                            format: 'Returns a string expression representing date/time value.',
                            hour: 'Returns an integer value from 0 through 23 representing the hour of the day.',
                            minute: 'Returns an integer value from 0 through 59 representing the minute of the hour.',
                            month: 'Returns an integer value from 1 through 12 representing the month of the year.',
                            monthName: 'Returns a string value containing the name of the specified month.',
                            now: 'Returns a date value containing the current date and time according to your system.',
                            second: 'Returns an integer value from 0 through 59 representing the second of the minute.',
                            timeOfDay: 'Returns or sets a date value containing the current time of day according to your system.',
                            timer: 'Returns a double value representing the number of seconds elapsed since midnight.',
                            timeSerial: 'Returns a date value representing a specified hour, minute, and second, with the date information set relative to January 1 of the year 1.',
                            timeString: 'Returns or sets a string value representing the current time of day according to your system.',
                            timeValue: 'Returns a date value containing the time information represented by a string, with the date information set to January 1 of the year 1.',
                            timeToday: 'Returns or sets a date value containing the current date according to your system.',
                            timeWeekday: 'Returns an integer value containing a number that represents the day of the week.',
                            timeWeekdayName: 'Returns a string value containing the name of the specified weekday.',
                            year: 'Returns an integer value from 1 through 9999 representing the year.',
                            abs: 'Returns the absolute value of a single-precision floating-point number.',
                            acos: 'Returns the angle whose cosine is the specified number.',
                            asin: 'Returns the angle whose sine is the specified number.',
                            atan: 'Returns the angle whose tangent is the specified number.',
                            atan2: 'Returns the angle whose tangent is the quotient of two specified numbers.',
                            bigMultiply: 'Produces the full product of two 32-bit numbers.',
                            ceiling: 'Returns the smallest integer that is greater than or equal to the specified integer.',
                            cos: 'Returns the cosine of the specified angle.',
                            cosh: 'Returns the hyperbolic cosine of the specified angle.',
                            exponent: 'Returns e raised to the specified power.',
                            fixNumberType: 'Returns an integer portion of a number.',
                            floor: 'Returns the largest integer less than or equal to the specified integer.',
                            integer: 'Returns an integer portion of a number.',
                            logrithm: 'Returns the natural (base e) logarithm of a specified number.',
                            logrithm10: 'Returns the base 10 logarithm of a specified number.',
                            maximum: 'Returns the maximum value from all non-null values of the specified expression.',
                            minimum: 'Returns the minimum value from all non-null values of the specified expression.',
                            power: 'Returns a specified number raised to the specified power.',
                            random: 'Returns a random number of single type.',
                            round: 'Rounds a double-precision floating-point value to the nearest integer.',
                            sign: 'Returns a value indicating the sign of an 8-bit signed integer.',
                            sin: 'Returns the sine of the specified angle.',
                            sinh: 'Returns the hyperbolic sine of the specified angle.',
                            squareRoot: 'Returns the square root of a specified number.',
                            tangent: 'Returns the tangent of the specified angle.',
                            tangentH: 'Returns the hyperbolic tangent of the specified angle.',
                            isArray: 'Returns a Boolean value indicating whether a variable points to an array.',
                            isDate: 'Returns a Boolean value indicating whether an expression represents a valid.',
                            isNothing: 'Returns a Boolean value indicating whether an expression has no object.',
                            isNumeric: 'Returns a Boolean value indicating whether an expression can be evaluated as a number.',
                            flowChoose: 'Selects and returns a value from a list of arguments.',
                            flowIIf: 'Returns one of two objects depending upon the evaluation of an expression.',
                            switchFlow: 'Evaluates a list of expressions and returns an object value corresponding to the first expression in the list that is true.',
                            avg: 'Returns the average of all non-null values from the specified expression.',
                            count: 'Returns a count of the values from the specified expression.',
                            countDistinct: 'Returns a count of all distinct values from the specified expression.',
                            countRows: 'Returns a count of rows within the specified scope.',
                            first: 'Returns the first value from the specified expression.',
                            last: 'Returns the last value from the specified expression.',
                            standardDev: 'Returns the standard deviation of all non-null values of the specified expression.',
                            standardDevP: 'Returns the population standard deviation of all non-null values of the specified expression.',
                            sum: 'Returns a sum of the values of the specified expression.',
                            variance: 'Returns the variance of all non-null values of the specified expression.',
                            varianceP: 'Returns the population variance of all non-null values of the specified expression.',
                            runningValue: 'Uses a specified function to return a running aggregate of the specified expression.',
                            aggregate: 'Returns a custom aggregate of the specified expression, as defined by the data provider.',
                            doubleDeclining: 'Returns a double specifying the depreciation of an asset for a specific time period using the double-declining balance method or some other method you specify.',
                            futureValue: 'Returns double value specifying the future value of an annuity based on periodic fixed payments and a fixed interest rate.',
                            interestPayment: 'Returns double value specifying the interest payment for a given period of an annuity based on periodic, fixed payments and a fixed interest rate.',
                            numberOfPeriods: 'Returns a double value specifying the number of periods for an annuity based on periodic fixed payments and a fixed interest rate.',
                            annuityPayment: 'Returns a double value specifying the payment for an annuity based on periodic, fixed payments and a fixed interest rate.',
                            principalPayment: 'Returns a double value specifying the principal payment for a given period of an annuity based on periodic fixed payments and a fixed interest rate.',
                            presentValue: 'Returns a double value specifying the present value of an annuity based on periodic, fixed payments to be paid in the future and a fixed interest rate.',
                            rateOfInterest: 'Returns a double value specifying the interest rate per period for an annuity.',
                            straightLine: 'Returns a double value specifying the straight-line depreciation of an asset for a single period.',
                            sumOfYearsDigits: 'Returns a double value specifying the sum-of-years digits depreciation of an asset for a specified period.',
                            convertBool: 'Convert to Boolean.',
                            convertByte: 'Convert to byte.',
                            convertChar: 'Convert to char.',
                            convertDate: 'Convert to date.',
                            convertDouble: 'Convert to double.',
                            convertDecimal: 'Convert to decimal.',
                            convertInteger: 'Convert to integer.',
                            convertLong: 'Convert to long.',
                            convertObject: 'Convert to object.',
                            convertShort: 'Convert to short.',
                            convertSingle: 'Convert to single.',
                            convertString: 'Convert to string.',
                            fix: 'Returns an integer portion of a number.',
                            hexaDecimal: 'Returns an string representing the hexadecimal value of a number.',
                            integerPortion: 'Returns an integer portion of a number.',
                            octal: 'Returns a string representing the octal value of a number.',
                            stringOfNumber: 'Returns a string that represents a number.',
                            stringAsNumeric: 'Returns a numbers in a string as a numeric value of appropriate type.',
                            inScope: 'Returns true if the current instance is within the specified scope.',
                            depthLevel: 'Returns a zero-based integer representing the current depth level.',
                            previous: 'Returns the value of the expression for the previous row of data.',
                            rowNumber: 'Returns a running count of all rows in the specified scope.'
                        }
                    },
                    dataAssign: {
                        measures: 'Measures',
                        dimensions: 'Dimensions',
                        search: 'Search',
                        xValue: 'X Value(s)',
                        yValue: 'Y Value(s)',
                        value: 'Value(s)',
                        column: 'Column',
                        row: 'Row(s)',
                        size: 'Size(s)',
                        aggregate: 'Aggregate',
                        filters: 'Filters',
                        sorts: 'Sorts',
                        groups: 'Groups',
                        expression: 'Expression',
                        dragOnDrop: 'Drag & Drop'
                    },
                    reportProperty: {
                        basicSettings: {
                            categoryName: 'Basic Settings',
                            background: 'Background',
                            borderTypes: {
                                border: 'Border',
                                borderLeft: 'Left',
                                borderTop: 'Top',
                                borderRight: 'Right',
                                borderBottom: 'Bottom'
                            },
                            borderStyles: {
                                solid: 'Solid',
                                none: 'None',
                                double: 'Double',
                                dashed: 'Dashed',
                                dotted: 'Dotted'
                            }
                        },
                        generalSettings: {
                            categoryName: 'General',
                            printFirstPage: 'Print On First Page',
                            printLastPage: 'Print On Last Page'
                        },
                        size: {
                            sizeLabel: 'Size',
                            paddingTypes: {
                                padding: 'Padding',
                                paddingLeft: 'Left',
                                paddingTop: 'Top',
                                paddingRight: 'Right',
                                paddingBottom: 'Bottom'
                            }
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Left',
                            top: 'Top',
                            sizeLabel: 'Size',
                            width: 'Width',
                            height: 'Height'
                        },
                        margin: {
                            categoryName: 'Margin',
                            categoryHeader: 'Margin',
                            types: {
                                left: 'Left',
                                right: 'Right',
                                bottom: 'Bottom',
                                top: 'Top'
                            }
                        },
                        paperSize: {
                            orientation: 'Orientation',
                            header: 'PaperSize',
                            label: 'Paper size',
                            orientationTypes: {
                                landScape: 'Landscape',
                                portrait: 'Portrait'
                            },
                            types: {
                                a3Size: 'A3',
                                a4Size: 'A4',
                                b4Size: 'B4(JIS)',
                                b5Size: 'B5(JIS)',
                                envelope: 'Envelope #10',
                                envelopeMonarch: 'Envelope Monarch',
                                executive: 'Executive',
                                legal: 'Legal',
                                letter: 'Letter',
                                tabloid: 'Tabloid',
                                custom: 'Custom'
                            }
                        }
                    },
                    gridProperty: {
                        basicSettings: {
                            categoryName: 'Basic Settings',
                            horizontalGridLine: 'Horizontal Grid Line',
                            verticalGridLine: 'Vertical Grid Line',
                            filters: 'Filters',
                            sorts: 'Sorts'
                        },
                        columnSettings: {
                            categoryName: 'Column Settings',
                            chooseColumn: 'Choose Column',
                            columnName: 'Column Name',
                            format: 'Format',
                            enableLink: 'Enable Link',
                            headerStyle: 'Header Style',
                            cellStyle: 'Cell Style',
                            summaryStyle: 'Summary Style'
                        },
                        rowSettings: {
                            categoryName: 'Row Settings',
                            chooseRow: 'Choose Row',
                            summaryColumns: 'Summary Columns',
                            summaryFields: {
                                column: 'Column',
                                expression: 'Expression'
                            }
                        },
                        appearance: {
                            categoryName: 'Appearance',
                            showHeader: 'Show Header',
                            borderTypes: {
                                border: 'Border',
                                borderLeft: 'Left',
                                borderTop: 'Top',
                                borderRight: 'Right',
                                borderBottom: 'Bottom'
                            },
                            borderStyles: {
                                solid: 'Solid',
                                none: 'None',
                                double: 'Double',
                                dashed: 'Dashed',
                                dotted: 'Dotted'
                            },
                            cellBorder: 'Cell Border',
                            AlterRow: 'Alternative Row',
                            AlterBackground: 'Alternative Background',
                        },
                        pageBreak: {
                            categoryName: 'Page Break',
                            enablePageBreak: 'Enable Page Break',
                            breakLocation: {
                                categoryName: 'Break Location',
                                none: 'None',
                                start: 'Start',
                                end: 'End',
                                startAndEnd: 'StartAndEnd',
                                between: 'Between'
                            },
                            pageNumberReset: 'Page Number Reset',
                        },
                        miscellaneous: {
                            categoryName: 'Miscellaneous',
                            noRowsMessage: 'No Rows Message',
                            pageName: 'Page Name',
                            keepTogether: 'Keep Together',
                            repeatColumnHeaders: 'Repeat Column Headers',
                            fixedColumnHeaders: 'Fixed Column Headers',
                            fixedRowHeaders: 'Fixed Row Headers',
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Left',
                            top: 'Top',
                            sizeLabel: 'Size',
                            width: 'Width',
                            height: 'Height'
                        },
                        visibility: {
                            categoryName: 'Visibility',
                            visible: 'Visible'
                        },
                        font: {
                            categoryName: 'Font',
                            defaultStyle: 'Default',
                            normal: 'Normal',
                            italic: 'Italic'
                        },
                        fontStyle: {
                            categoryName: 'Font Style',
                            defaultStyle: 'Default',
                            normal: 'Normal',
                            thin: 'Thin',
                            extraLight: 'ExtraLight',
                            light: 'Light',
                            medium: 'Medium',
                            semiBold: 'SemiBold',
                            bold: 'Bold',
                            extraBold: 'ExtraBold',
                            heavy: 'Heavy'
                        },
                        textDecoration: {
                            categoryName: 'Text Decoration',
                            defaultStyle: 'Default',
                            none: 'None',
                            underline: 'Underline',
                            lineThrough: 'LineThrough',
                            overline: 'Overline'
                        },
                        alignment: {
                            categoryName: 'Alignment',
                            textAlignment: {
                                categoryName: 'Text Alignment',
                                defaultStyle: 'Default',
                                left: 'Left',
                                center: 'Center',
                                right: 'Right'
                            },
                            verticalAlignment: {
                                categoryName: 'Vertical Alignment',
                                defaultStyle: 'Default',
                                top: 'Top',
                                middle: 'Middle',
                                bottom: 'Bottom'
                            }
                        },
                        padding: {
                            padding: 'Padding',
                            paddingLeft: 'Left',
                            paddingTop: 'Top',
                            paddingRight: 'Right',
                            paddingBottom: 'Bottom'
                        },
                        enableSummaryRow: 'Enable Summary Row'
                    },
                    pivotGridProperty: {
                        basicSettings: {
                            categoryName: 'Basic Settings',
                            horizontalGridLine: 'Horizontal Grid Line',
                            verticalGridLine: 'Vertical Grid Line',
                            filters: 'Filters',
                            sorts: 'Sorts'
                        },
                        format: 'Format',
                        link: 'Link',
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Left',
                            top: 'Top',
                            sizeLabel: 'Size',
                            width: 'Width',
                            height: 'Height'
                        },
                        visibility: {
                            categoryName: 'Visibility',
                            visible: 'Visible'
                        },
                        font: {
                            categoryName: 'Font',
                            defaultStyle: 'Default',
                            normal: 'Normal',
                            italic: 'Italic'
                        },
                        fontStyle: {
                            categoryName: 'Font Style',
                            defaultStyle: 'Default',
                            normal: 'Normal',
                            thin: 'Thin',
                            extraLight: 'ExtraLight',
                            light: 'Light',
                            medium: 'Medium',
                            semiBold: 'SemiBold',
                            bold: 'Bold',
                            extraBold: 'ExtraBold',
                            heavy: 'Heavy'
                        },
                        textDecoration: {
                            categoryName: 'Text Decoration',
                            defaultStyle: 'Default',
                            none: 'None',
                            underline: 'Underline',
                            lineThrough: 'LineThrough',
                            overline: 'Overline'
                        },
                        alignment: {
                            categoryName: 'Alignment',
                            textAlignment: {
                                categoryName: 'Text Alignment',
                                defaultStyle: 'Default',
                                left: 'Left',
                                center: 'Center',
                                right: 'Right'
                            },
                            verticalAlignment: {
                                categoryName: 'Vertical Alignment',
                                defaultStyle: 'Default',
                                top: 'Top',
                                middle: 'Middle',
                                bottom: 'Bottom'
                            }
                        },
                        padding: {
                            padding: 'Padding',
                            paddingLeft: 'Left',
                            paddingTop: 'Top',
                            paddingRight: 'Right',
                            paddingBottom: 'Bottom'
                        },
                        appearance: {
                            categoryName: 'Appearance',
                            showHeader: 'Show Header',
                            borderTypes: {
                                border: 'Border',
                                borderLeft: 'Left',
                                borderTop: 'Top',
                                borderRight: 'Right',
                                borderBottom: 'Bottom'
                            },
                            borderStyles: {
                                solid: 'Solid',
                                none: 'None',
                                double: 'Double',
                                dashed: 'Dashed',
                                dotted: 'Dotted'
                            },
                            cellBorder: 'Cell Border',
                            AlterRow: 'Alternative Row',
                            AlterBackground: 'Alternative Background',
                        },
                        pageBreak: {
                            categoryName: 'Page Break',
                            enablePageBreak: 'Enable Page Break',
                            breakLocation: {
                                categoryName: 'Break Location',
                                none: 'None',
                                start: 'Start',
                                end: 'End',
                                startAndEnd: 'StartAndEnd',
                                between: 'Between'
                            },
                            pageNumberReset: 'Page Number Reset',
                        },
                        miscellaneous: {
                            categoryName: 'Miscellaneous',
                            noRowsMessage: 'No Rows Message',
                            pageName: 'Page Name',
                            keepTogether: 'Keep Together',
                            repeatColumnHeaders: 'Repeat Column Headers',
                            fixedColumnHeaders: 'Fixed Column Headers',
                            fixedRowHeaders: 'Fixed Row Headers',
                            repeatRowHeaders: 'Repeat Row Headers'
                        },
                        summarySettings: {
                            categoryName: 'Summary Settings',
                            enableColumn: 'Enable Summary Column',
                            columnStyle: 'Summary Column Style',
                            columnBorder: 'Summary Column Border',
                            chooseSummary: 'Choose Summary',
                            summaryColumns: 'Summary Columns',
                            enableRow: 'Enable Summary Row',
                            rowStyle: 'Summary Row Style',
                            rowBorder: 'Summary Row Border'
                        },
                        groupSettings: {
                            summaryRows: 'Summary Rows',
                            summaryStyle: 'Summary Style',
                            summaryBorder: 'Summary Border',
                            cellStyle: 'Cell Style',
                            cellBorder: 'Cell Border',
                            summaryTable: {
                                column: 'Column',
                                expression: 'Expression'
                            }
                        },
                        columnGroupSettings: {
                            categoryName: 'Column Group Settings',
                            chooseGroup: 'Choose Column Group'
                        },
                        rowGroupSettings: {
                            categoryName: 'Row Group Settings',
                            chooseRowGroup: 'Choose Row Group',
                            rowName: 'Row Name'
                        },
                        columnSettings: {
                            categoryName: 'Column Settings',
                            chooseColumn: 'Choose Column',
                            header: 'Header',
                            headerStyle: 'Header Style'
                        },
                        rowSettings: {
                            categoryName: 'Row Settings',
                            chooseRow: 'Choose Row'
                        },
                        cornerCellSettings: {
                            categoryName: 'Corner Cell Settings',
                            cellLabel: 'Cell Label'
                        }
                    },
                    textBoxProperty: {
                        basicSettings: {
                            categoryName: 'Basic Settings',
                            font: {
                                categoryName: 'Font',
                                defaultStyle: 'Default',
                                normal: 'Normal',
                                italic: 'Italic'
                            },
                            fontStyle: {
                                categoryName: 'Font Style',
                                defaultStyle: 'Default',
                                normal: 'Normal',
                                thin: 'Thin',
                                extraLight: 'ExtraLight',
                                light: 'Light',
                                medium: 'Medium',
                                semiBold: 'SemiBold',
                                bold: 'Bold',
                                extraBold: 'ExtraBold',
                                heavy: 'Heavy'
                            },
                            textDecoration: {
                                categoryName: 'Text Decoration',
                                defaultStyle: 'Default',
                                none: 'None',
                                underline: 'Underline',
                                lineThrough: 'LineThrough',
                                overline: 'Overline'
                            },
                            format: 'Format'
                        },
                        alignment: {
                            categoryName: 'Alignment',
                            textAlignment: {
                                categoryName: 'Text Alignment',
                                defaultStyle: 'Default',
                                left: 'Left',
                                center: 'Center',
                                right: 'Right'
                            },
                            verticalAlignment: {
                                categoryName: 'Vertical Alignment',
                                defaultStyle: 'Default',
                                top: 'Top',
                                middle: 'Middle',
                                bottom: 'Bottom'
                            }
                        },
                        appearance: {
                            categoryName: 'Appearance',
                            borderTypes: {
                                border: 'Border',
                                borderLeft: 'Left',
                                borderTop: 'Top',
                                borderRight: 'Right',
                                borderBottom: 'Bottom'
                            },
                            borderStyles: {
                                solid: 'Solid',
                                none: 'None',
                                double: 'Double',
                                dashed: 'Dashed',
                                dotted: 'Dotted'
                            },
                            background: 'Background'
                        },
                        link: 'Link',
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            sizeLabel: 'Size',
                            left: 'Left',
                            top: 'Top',
                            width: 'Width',
                            height: 'Height',
                            direction: {
                                categoryName: 'Direction',
                                leftToRight: 'LeftToRight',
                                rightToLeft: 'RightToLeft'
                            }
                        },
                        visibility: {
                            categoryName: 'Visibility',
                            visible: 'Visible'
                        },
                        miscellaneous: {
                            categoryName: 'Miscellaneous',
                            canGrow: 'Can Grow',
                            canShrink: 'Can Shrink',
                        },
                        paragraphSettings: {
                            categoryName: 'Paragraph Settings',
                            textAlignment: {
                                categoryName: 'Text Alignment',
                                defaultStyle: 'Default',
                                left: 'Left',
                                center: 'Center',
                                right: 'Right'
                            },
                            indent: {
                                categoryName: 'Indent',
                                leftIndent: 'Left',
                                rightIndent: 'Right'
                            },
                            space: {
                                categoryName: 'Space',
                                topSpace: 'Top',
                                bottomSpace: 'Bottom'
                            },
                            listLevel: {
                                categoryName: 'List Level',
                                zeroLevel: '',
                                oneLevel: '',
                                twoLevel: '',
                                threeLevel: '',
                                fourLevel: ''
                            },
                            listStyle: {
                                categoryName: 'List Style',
                                none: 'None',
                                numbered: 'Numbered',
                                bulleted: 'Bulleted'
                            }
                        },
                        padding: {
                            padding: 'Padding',
                            paddingLeft: 'Left',
                            paddingTop: 'Top',
                            paddingRight: 'Right',
                            paddingBottom: 'Bottom'
                        },
                        contextMenu: {
                            cut: 'Cut',
                            copy: 'Copy',
                            paste: 'Paste',
                            expression: 'Expression'
                        }
                    },
                    designPanel: {
                        headerText: 'Header',
                        footerText: 'Footer'
                    },
                    queryDesigner: {
                        storeParameter: {
                            title: 'Parameters',
                            ok: 'OK',
                            cancel: 'Cancel',
                            parameterLable: 'Parameter',
                            nullLable: 'Null',
                            valueLable: 'Value',
                            dataTypeLable: 'DataType',
                            closeToolTip: 'Close'
                        },
                        parameter: {
                            title: 'Parameters',
                            ok: 'OK',
                            cancel: 'Cancel',
                            parameterLable: 'Parameter',
                            nullLable: 'Null',
                            valueLable: 'Value',
                            closeToolTip: 'Close'
                        },
                        filter: {
                            title: 'Query Filters',
                            descriptionLable: 'List of Table Filters',
                            add: 'ADD',
                            save: 'OK',
                            cancel: 'Cancel',
                            nullLable: 'Null',
                            trueLable: 'True',
                            falseLable: 'False',
                            parameterTooltip: 'Include as Parameter',
                            closeToolTip: 'Close',
                            intOperatorType: {
                                equals: 'Equals',
                                doesNotEqual: 'Does Not Equal',
                                greaterThan: 'Greater Than',
                                greaterThanOrEqual: 'Greater Than Or Equal To',
                                lessThan: 'Less Than',
                                lessThanOrEqual: 'Less Than Or Equal To',
                                between: 'Between',
                                notBetween: 'Not Between'
                            },
                            stringOpertorType: {
                                equals: 'Equals',
                                startsWith: 'Starts With',
                                endWith: 'Ends With',
                                contains: 'Contains',
                                notContains: 'Not Contains'
                            },
                            errorMessage: {
                                dateValidation: 'Value is an invalid date format. ',
                                commonContent: 'The filter on ',
                                booleanValidation: ' does not have any values to filter on. Please provide the values for the filter.',
                                stringValidation: ' does not have proper values to filter on. '
                            }
                        },
                        previewArea: {
                            dataPreview: 'Data Preview',
                            noRecords: 'No records to display',
                            executeRecords: 'Execute to preview records',
                            record: 'Record',
                            records: 'Records',
                            retrieved: 'Retrieved',
                            loadRecord: 'Load More'
                        },
                        schemaArea: {
                            search: 'Search',
                            matchesFound: 'No matches found',
                            rename: 'Rename',
                            aggregation: 'Aggregation',
                            dialogHeader: 'DataSet',
                            alertMessage: {
                                datasourceAlert: 'Select a DataSource to Configure Report DataSet',
                                removeTable: 'The below associated tables will remove with this',
                                duplicateName: 'The specified column name already exists',
                                duplicateDatasetName: 'The specified name already exists in DataSet list',
                                datasetSpecialCharacter: 'Name should not contain spaces and special characters',
                                specialCharacter: 'Column name should not contain special characters.',
                                switcherAlert: 'Switching to the visual designer will discard  manual changes made to the query. Do you want to use the visual designer anyway ?'
                            },
                            errorMessage: {
                                specifyName: 'Specify the column name',
                                specifyDatasetName: 'Specify the DataSet name',
                                previewFailed: 'DataSet failed to preview the selected table',
                                specifyQuery: 'Specify the DataSet query',
                                selectTable: 'Select the table to save the DataSet',
                                queryFailed: 'DataSet failed to save the Query of selected table',
                                tableProcedure: 'DataSet failed to retrieve the selected table procedure'
                            }
                        },
                        toolBar: {
                            datasourceLable: 'DataSource',
                            datasetName: 'Name',
                            run: 'Run',
                            join: 'Join',
                            expression: 'Expression',
                            filter: 'Filter',
                            code: 'Code',
                            finish: 'Finish',
                            cancel: 'Cancel',
                            datasourceWaterMark: 'Select a DataSource'
                        },
                        joiner: {
                            title: 'Query Joiner',
                            descriptionLable: 'List of Table Relations',
                            add: 'ADD',
                            save: 'OK',
                            cancel: 'Cancel',
                            closeToolTip: 'Close',
                            addField: 'Add Field',
                            leftTableWaterMark: 'Left Table',
                            rightTableWaterMark: 'Right Table',
                            leftFieldWaterMark: 'Left Field',
                            rightFieldWaterMark: 'Right Field',
                            operatorWaterMark: 'Operator',
                            joinTypeWaterMark: 'Join Type',
                            joinTypes: {
                                inner: 'Inner',
                                outer: 'Left Outer',
                                rightOuter: 'Right Outer',
                                fullOuter: 'Full Outer'
                            },
                            errorMessage: {
                                removeField: 'Each relation must have one field condition. So, it does not allow deleting this field',
                                noRelationAlert: ' is no relation with other tables',
                                selectLeftTable: 'Select the left table value',
                                selectRightTable: 'Select the right table value',
                                selectRelation: 'Select the relation for tables',
                                selectLeftColumn: 'Select the left column value of field row #',
                                selectRightColumn: 'Select the right column value of field row #',
                                selectOperator: 'Select the operator of field row #',
                                relationExists: 'Already relation exists between tables'
                            }
                        },
                        credentialDialog: {
                            title: 'Credential Dialog',
                            userName: 'Username',
                            password: 'Password',
                            userNameWaterMark: 'Username',
                            passwordWaterMark: 'Password',
                            userNameErrorMessage: 'Please enter Username',
                            passwordErrorMessage: 'Please enter Password',
                            connect: 'Connect',
                            close: 'Close'
                        },
                        queryExpression: {
                            title: 'Query Expressions',
                            functionLabel: 'Functions',
                            columnLabel: 'Column Settings',
                            expressionLabel: 'Expression',
                            nameLabel: 'Name',
                            descriptionLabel: 'Description ',
                            exampleLabelText: 'Example',
                            ok: 'Save',
                            cancel: 'Cancel',
                            add: 'Add',
                            textAreaWaterMark: 'Query Expression',
                            nameFieldWaterMark: 'Expression Name',
                            closeToolTip: 'Close',
                            errorMessage: {
                                saveAlert: 'Expression is not saved. Do you want to save and continue?',
                                bracketSyntax: 'Incorrect Syntax near open/close bracket(s).',
                                parseAlert: 'ReportDesigner failed to parse the specified expression.',
                                nameAlert: 'Name field should not be empty.',
                                emptyAlert: 'Expression field should not be empty',
                                duplicateName: 'The specified expression name already exists',
                                specialCharacter: 'Expression name should not contain special characters.',
                                referenceError: 'Column cannot be referred within its own expression!',
                                invalidSyntax: 'Invalid syntax near open/close bracket(s).',
                                retrieveExpression: 'ReportDesigner failed to retrieve the specified expression.',
                            },
                            datasetTitle: 'DataSet',
                            expressions: {
                                all: 'All',
                                numbers: 'Numbers',
                                logical: 'Logical',
                                conditional: 'Conditional',
                                date: 'Date',
                                stringType: 'String',
                                text: 'Text',
                                miscellenuous: 'Miscellaneous ',
                                abs: 'Returns the absolute value of the given expression.',
                                acos: 'Returns the inverse cosine (also known as arccosine) of the given numeric expression.',
                                asin: 'Returns the inverse sine (also known as arcsine) of the given numeric expression.',
                                atan: 'Returns the inverse tangent (also known as arctangent) of the given numeric expression.',
                                cos: 'Returns the cosine of the angle specified in radians of the given expression.',
                                degree: 'Returns the angle in degrees for the one which specified in radians of the given numeric expression.',
                                exponent: 'Returns the exponential value of the given expression. ',
                                logrithm: 'Returns the logarithm of the given expression to the specified base.',
                                pi: 'Returns the constant value of PI.',
                                power: 'Returns the value of the given expression (expression1) to the specified power (expression2). ',
                                radians: 'Returns the angle in radians for the one which specified in degrees in the given numeric expression.',
                                round: 'Returns a rounded value.',
                                sign: 'Returns a value representing the positive (+1), zero(0), or negative (-1) sign of the given numeric expression.',
                                sin: 'Returns the sine of the angle specified in radians of the given expression.',
                                squareRoot: 'Returns the square root of the given numeric expression.',
                                tan: 'Returns the tangent of the given numeric expression.',
                                ifCondition: 'Returns either true part or false part, depending upon the evaluation of the expression.',
                                ifNull: 'If the expression is numeric/string/date, returns the first expression. If the first expression is NULL, returns the second expression.',
                                isNotNull: 'If the numeric/ string / date_expression is NULL, returns a string representing false; otherwise represents true.',
                                isNull: 'If the numeric/string/date_expression is NULL, returns a string representing true; otherwise represents false.',
                                and: 'Returns true if both the expressions evaluates to true.',
                                notOperation: 'Returns the reversal logical value of the expression being evaluated.',
                                orOperation: 'Returns true if any of the expressions evaluates to true.',
                                addDate: 'Adds the number of days to the specified date.',
                                name: 'Returns a string representing the specified datepart of the given date expression.',
                                part: 'Returns an integer value representing the specified date part of the given date expression.',
                                sub: 'Returns the date subtracted from the specified date.',
                                day: 'Returns a numeric value representing the day part of the specified date.',
                                daydiff: 'Returns a numeric value representing the difference between two specified dates.',
                                hour: 'Returns the hour of the given date as an integer.',
                                minute: 'Returns a numeric value representing the minute part of the date resulting from specified date expression.',
                                month: 'Returns a numeric value representing the month part of the date resulting from specified date expression.',
                                now: 'Returns the current date and time.',
                                today: 'Returns the current date.',
                                year: 'Returns a numeric value representing the year part of the date resulting from the specified date expression.',
                                char: 'Converts the given integer ASCII code into a character.',
                                concat: 'Returns a string value resulting from the concatenation of two or more string values.',
                                contains: 'Returns true if the given string expression contains the specified substring expression.',
                                endsWith: 'Returns true if the given string expression ends with the specified substring expression.',
                                left: 'Returns the specified number of characters from starting of the given string expression.',
                                length: 'Returns the natural logarithm of the given expression.',
                                lower: 'Returns a lower case converted string value from the given string expression.',
                                leftTrim: 'Returns the string value with leading blanks removed from string expression.',
                                maximum: 'Returns the maximum value in the given expression.',
                                minimum: 'Returns the minimum value in the given expression.',
                                right: 'Returns the specified number of characters from the end of the given string expression.',
                                rightTrim: 'Returns the string without right side trailing spaces in the given string.',
                                startswith: 'Returns true if the given string expressions starts with the specified substring expression.',
                                subString: 'Returns a specific length of string starting from specific index of the given string expression.',
                                upper: 'Returns an upper case converted string value from a given string expression.'
                            }
                        }
                    }
                };
                break;
            case "ejRibbon":
                ej.Ribbon.Locale = ej.Ribbon.Locale || {};
                ej.Ribbon.Locale["en-US"] = {
                    CustomizeQuickAccess: "Customize Quick Access Toolbar",
                    RemoveFromQuickAccessToolbar: "Remove from Quick Access Toolbar",
                    AddToQuickAccessToolbar: "Add to Quick Access Toolbar",
                    ShowAboveTheRibbon: "Show Above the Ribbon",
                    ShowBelowTheRibbon: "Show Below the Ribbon",
                    MoreCommands: "More Commands..."
                };
                break;
            case "ejKanban":
                ej.Kanban.Locale = ej.Kanban.Locale || {};
                ej.Kanban.Locale["en-US"] = {
                    EmptyCard: "No cards to display",
                    SaveButton: "Save",
                    CancelButton: "Cancel",
                    EditFormTitle: "Details of ",
                    AddFormTitle: "Add New Card",
                    SwimlaneCaptionFormat: "- {{:count}}{{if count == 1 }} item {{else}} items {{/if}}",
                    FilterSettings: "Filters:",
                    FilterOfText: "of",
                    Max: "Max",
                    Min: "Min",
                    Cards: "  Cards",
                    ItemsCount: "Items Count :",
                    Unassigned: "Unassigned",
                    AddCard: "Add Card",
                    EditCard: "Edit Card",
                    DeleteCard: "Delete Card",
                    TopofRow: "Top of Row",
                    BottomofRow: "Bottom of Row",
                    MoveUp: "Move Up",
                    MoveDown: "Move Down",
                    MoveLeft: "Move Left",
                    MoveRight: "Move Right",
                    MovetoSwimlane: "Move to Swimlane",
                    HideColumn: "Hide Column",
                    VisibleColumns: "Visible Columns",
                    PrintCard: "Print Card"
                };
                break;
            case "ejRTE":
                ej.RTE.Locale = ej.RTE.Locale || {};
                ej.RTE.Locale["en-US"] = {
                    bold: "Bold",
                    italic: "Italic",
                    underline: "Underline",
                    strikethrough: "Strikethrough",
                    superscript: "Superscript",
                    subscript: "Subscript",
                    justifyCenter: "Align text center",
                    justifyLeft: "Align text left",
                    justifyRight: "Align text right",
                    justifyFull: "Justify",
                    unorderedList: "Insert unordered list",
                    orderedList: "Insert ordered list",
                    indent: "Increase Indent",
                    fileBrowser: "File Browser",
                    outdent: "Decrease Indent",
                    cut: "Cut",
                    copy: "Copy",
                    paste: "Paste",
                    paragraph: "Paragraph",
                    undo: "Undo",
                    redo: "Redo",
                    upperCase: "Upper Case",
                    lowerCase: "Lower Case",
                    clearAll: "Clear All",
                    clearFormat: "Clear Format",
                    createLink: "Insert/Edit Hyperlink",
                    removeLink: "Remove Hyperlink",
                    tableProperties: "Table Properties",
                    insertTable: "Insert",
                    deleteTables: "Delete",
                    imageProperties: "Image Properties",
                    openLink: "Open Hyperlink",
                    image: "Insert image",
                    video: "Insert video",
                    editTable: "Edit Table Properties",
                    embedVideo: "Paste your embed code below",
                    viewHtml: "View HTML",
                    fontName: "Select font family",
                    fontSize: "Select font size",
                    fontColor: "Select color",
                    format: "Format",
                    backgroundColor: "Background color",
                    style: "Styles",
                    deleteAlert: "Are you sure you want to clear all the contents?",
                    copyAlert: "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+C keyboard shortcut instead of copy operation.",
                    pasteAlert: "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+V keyboard shortcut instead of paste operation.",
                    cutAlert: "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X keyboard shortcut instead of cut operation.",
                    videoError: "The text area can not be empty",
                    imageWebUrl: "Web Address",
                    imageAltText: "Alternate text",
                    dimensions: "Dimensions",
                    constrainProportions: "Constrain Proportions",
                    linkWebUrl: "Web Address",
                    imageLink: "Image as Link",
                    imageBorder: "Image Border",
                    imageStyle: "Style",
                    linkText: "Text",
                    linkTooltipLabel: "Tooltip",
                    html5Support: "This tool icon only enabled in HTML5 supported browsers",
                    linkOpenInNewWindow: "Open link in new window",
                    tableColumns: "No.of Columns",
                    tableRows: "No.of Rows",
                    tableWidth: "Width",
                    tableHeight: "Height",
                    tableCellSpacing: "Cell spacing",
                    tableCellPadding: "Cell padding",
                    tableBorder: "Border",
                    tableCaption: "Caption",
                    tableAlignment: "Alignment",
                    textAlign: "Text align",
                    dialogUpdate: "Update",
                    dialogInsert: "Insert",
                    dialogCancel: "Cancel",
                    dialogApply: "Apply",
                    dialogOk: "Ok",
                    createTable: "Insert Table",
                    insertTable: "Insert",
                    addColumnLeft: "Insert Columns to the Left",
                    addColumnRight: "Insert Columns to the Right",
                    addRowAbove: "Insert Rows Above",
                    addRowBelow: "Insert Rows Below",
                    deleteRow: "Delete entire row",
                    deleteColumn: "Delete entire column",
                    deleteTable: "Delete Table",
                    customTable: "Create custom table...",
                    characters: "Characters",
                    words: "Words",
                    general: "General",
                    advanced: "Advanced",
                    table: "Table",
                    row: "Row",
                    column: "Column",
                    cell: "Cell",
                    solid: "Solid",
                    dotted: "Dotted",
                    dashed: "Dashed",
                    doubled: "Double",
                    maximize: "Maximize",
                    resize: "Minimize",
                    swatches: "Swatches",
                    paragraph: "Paragraph",
                    quotation: "Quotation",
                    heading1: "Heading 1",
                    heading2: "Heading 2",
                    heading3: "Heading 3",
                    heading4: "Heading 4",
                    heading5: "Heading 5",
                    heading6: "Heading 6",
                    segoeui: "Segoe UI",
                    arial: "Arial",
                    couriernew: "Courier New",
                    georgia: "Georgia",
                    impact: "Impact",
                    lucidaconsole: "Lucida Console",
                    tahoma: "Tahoma",
                    timesnewroman: "Times New Roman",
                    trebuchetms: "Trebuchet MS",
                    verdana: "Verdana",
                    disc: "Disc",
                    circle: "Circle",
                    square: "Square",
                    number: "Number",
                    loweralpha: "Lower Alpha",
                    upperalpha: "Upper Alpha",
                    lowerroman: "Lower Roman",
                    upperroman: "Upper Roman",
                    none: "None",
                    linkTooltip: "ctrl + click to follow link",
                    charSpace: "Characters (with spaces)",
                    charNoSpace: "Characters (no spaces)",
                    wordCount: "Word Count",
                    left: "Left",
                    right: "Right",
                    center: "Center",
                    zoomIn: "Zoom In",
                    zoomOut: "Zoom Out",
                    print: "Print",
                    'import': "Import a Document",
                    wordExport: "Export as Word Document",
                    pdfExport: "Export as Pdf File",
                    FindAndReplace: "Find and Replace",
                    Find: "Find",
                    MatchCase: "Match Case",
                    WholeWord: "Whole Word",
                    ReplaceWith: "Replace with",
                    Replace: "Replace",
                    ReplaceAll: "Replace All",
                    FindErrorMsg: "Couldn't find specified word.",
                    customFontColor: "More Colors...",
                    customBGColor: "More Colors...",
                    TransBGColor: "Transparent",
                    addtodictionary: "Add to Dictionary",
                    ignoreall: "IgnoreAll"
                };
                break;
            case "ejRecurrenceEditor":
                ej.RecurrenceEditor.Locale = ej.RecurrenceEditor.Locale || {};
                ej.RecurrenceEditor.Locale["en-US"] = {
                    Repeat: "Repeat",
                    Never: "Never",
                    Daily: "Daily",
                    Weekly: "Weekly",
                    Monthly: "Monthly",
                    Yearly: "Yearly",
                    First: "First",
                    Second: "Second",
                    Third: "Third",
                    Fourth: "Fourth",
                    Last: "Last",
                    EveryWeekDay: "Every weekday",
                    Every: "Every",
                    RecurrenceDay: "Day(s)",
                    RecurrenceWeek: "Week(s)",
                    RecurrenceMonth: "Month(s)",
                    RecurrenceYear: "Year(s)",
                    RepeatOn: "Repeat on",
                    RepeatBy: "Repeat by",
                    StartsOn: "Starts on",
                    Times: "times",
                    Ends: "Ends",
                    Day: "Day",
                    The: "The",
                    OfEvery: "Of",
                    After: "After",
                    On: "On",
                    Occurrence: "Occurrence(s)",
                    Until: "Until"
                };
                break;
            case "ejSchedule":
                ej.Schedule.Locale = ej.Schedule.Locale || {};
                ej.Schedule.Locale["en-US"] = {
                    ReminderWindowTitle: "Reminder window",
                    CreateAppointmentTitle: "Create Appointment",
                    RecurrenceEditTitle: "Edit Repeat Appointment",
                    RecurrenceEditMessage: "How would you like to change the appointment in the series?",
                    RecurrenceEditOnly: "Only this appointment",
                    RecurrenceEditFollowingEvent: "Following Events",
                    RecurrenceEditSeries: "Entire series",
                    PreviousAppointment: "Previous Appointment",
                    NextAppointment: "Next Appointment",
                    AppointmentSubject: "Subject",
                    StartTime: "Start Time",
                    EndTime: "End Time",
                    AllDay: "All day",
                    StartTimeZone: "Start TimeZone",
                    EndTimeZone: "End TimeZone",
                    Today: "Today",
                    Recurrence: "Repeat",
                    Done: "Done",
                    Cancel: "Cancel",
                    Ok: "OK",
                    Repeat: "Repeat",
                    RepeatBy: "Repeat by",
                    RepeatEvery: "Repeat every",
                    RepeatOn: "Repeat on",
                    StartsOn: "Starts on",
                    Ends: "Ends",
                    Summary: "Summary",
                    Daily: "Daily",
                    Weekly: "Weekly",
                    Monthly: "Monthly",
                    Yearly: "Yearly",
                    Every: "Every",
                    EveryWeekDay: "Every weekday",
                    Never: "Never",
                    After: "After",
                    Occurrence: "Occurrence(s)",
                    On: "On",
                    Edit: "Edit",
                    RecurrenceDay: "Day(s)",
                    RecurrenceWeek: "Week(s)",
                    RecurrenceMonth: "Month(s)",
                    RecurrenceYear: "Year(s)",
                    The: "The",
                    OfEvery: "of every",
                    First: "First",
                    Second: "Second",
                    Third: "Third",
                    Fourth: "Fourth",
                    Last: "Last",
                    WeekDay: "Weekday",
                    WeekEndDay: "Weekendday",
                    Subject: "Subject",
                    Categorize: "Categories",
                    DueIn: "Due In",
                    DismissAll: "Dismiss All",
                    Dismiss: "Dismiss",
                    OpenItem: "Open Item",
                    Snooze: "Snooze",
                    Day: "Day",
                    Week: "Week",
                    WorkWeek: "Work Week",
                    Month: "Month",
                    AddEvent: "Add Event",
                    CustomView: "Custom View",
                    Agenda: "Agenda",
                    Detailed: "Edit Appointment",
                    EventBeginsin: "Appointment Begins in",
                    Editevent: "Edit Appointment",
                    Editfollowingevent: "Following Events",
                    Editseries: "Edit Series",
                    Times: "times",
                    Until: "until",
                    Eventwas: "Appointment was",
                    Hours: "hrs",
                    Minutes: "mins",
                    Overdue: "Overdue Appointment",
                    Days: "day(s)",
                    Event: "Event",
                    Select: "select",
                    Previous: "Previous",
                    Next: "Next",
                    Close: "Close",
                    Delete: "Delete",
                    Date: "Date",
                    Showin: "Show in",
                    Gotodate: "Go To Date",
                    Resources: "RESOURCES",
                    RecurrenceDeleteTitle: "Delete Repeat Appointment",
                    Location: "Location",
                    Priority: "Priority",
                    RecurrenceAlert: "Alert",
                    NoTitle: "No Title",
                    OverFlowAppCount: "more appointment(s)",
                    AppointmentIndicator: "Click for more appointments",
                    WrongPattern: "The recurrence pattern is not valid",
                    CreateError: "The duration of the appointment must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the Appointment Recurrence dialog box.",
                    DragResizeError: "Cannot reschedule an occurrence of the recurring appointment if it skips over a later occurrence of the same appointment.",
                    StartEndError: "End time should be greater than start time",
                    MouseOverDeleteTitle: "Delete Appointment",
                    DeleteConfirmation: "Are you sure you want to delete this appointment?",
                    Time: "Time",
                    EmptyResultText: "No suggestions",
                    BlockIntervalAlertTitle: "Alert",
                    BlockIntervalError: "The selected time interval has been blocked and is unavailable for selection.",
                    RecurrenceDateValidation: "Some months have fewer than selected dates. For these months, the occurrence will fall on the last date of the month.",
                    SeriesChangeAlert: "The changes made to specific instances of this series will be cancelled and those appointments will match the series again."
                };
                break;
            case "ejSpreadsheet":
                ej.Spreadsheet.Locale = ej.Spreadsheet.Locale || {};
                ej.Spreadsheet.Locale["en-US"] = {
                    Cut: "Cut",
                    Copy: "Copy",
                    FormatPainter: "Format Painter",
                    Paste: "Paste",
                    PasteValues: "Paste Values Only",
                    PasteSpecial: "Paste",
                    Filter: "Filter",
                    FilterContent: "Turn on filtering for the selected cells.",
                    FilterSelected: "Filter by Selected Cell's value",
                    Sort: "Sort",
                    Clear: "Clear",
                    ClearContent: "Delete everything in the cell, or remove just the formatting, contents, comments or hyperlinks.",
                    ClearFilter: "Clear Filter",
                    ClearFilterContent: "Clear the filter and sort state for the current range of data.",
                    SortAtoZ: "Sort A to Z",
                    SortAtoZContent: "Lowest to Highest.",
                    SortZtoA: "Sort Z to A",
                    SortZtoAContent: "Highest to Lowest.",
                    SortSmallesttoLargest: "Sort Smallest to Largest",
                    SortLargesttoSmallest: "Sort Largest to Smallest",
                    SortOldesttoNewest: "Sort Oldest to Newest",
                    SortNewesttoOldest: "Sort Newest to Oldest",
                    Insert: "Insert",
                    InsertTitle: "Insert Cells",
                    InsertContent: "Add new cells, rows, or columns to your workbook.",
                    MultipleInsertContent: "FYI: To insert multiple rows or columns at a time, select multiple rows or columns in the sheet, and click Insert.",
                    InsertSBContent: "Add cells, rows, columns, or sheets to your workbook.",
                    Delete: "Delete",
                    DeleteTitle: "Delete Cells",
                    DeleteContent: "Delete cells, rows, columns, or sheets from your workbook.",
                    MultipleDeleteContent: "FYI: To delete multiple rows or columns at a time, select multiple rows or columns in the sheet, and click Delete.",
                    FindSelectTitle: "Find & Select",
                    FindSelectContent: "Click to see options for finding text in your document.",
                    CalculationOptions: "Calculation Options",
                    CalcOptTitle: "Calculation Options",
                    CalcOptContent: "Choose to calculate formulas automatically or manually.",
                    CalcOptRecalcContent: "If you make a change that affects a value, Spreadsheet will automatically recalculate it.",
                    CalculateSheet: "Calculate Sheet",
                    CalculateNow: "Calculate Now",
                    CalculateNowContent: "Calculate the entire workbook now.",
                    CalculateNowTurnOffContent: "You only need to use this if automatic calculation is turned off.",
                    CalculateSheetContent: "Calculate the active sheet now.",
                    CalculateSheetTurnOffContent: "You only need to use this if automatic calculation is turned off.",
                    Title: "Spreadsheet",
                    ColorPicker: "Color Picker",
                    Ok: "OK",
                    Cancel: "Cancel",
                    Alert: "We couldn't do this for the selected range of cells. Select a single cell within a range of data and then try again.",
                    HeaderAlert: "The command could not be completed as you are attempting to filter with the filter header. Select a single cell in the filter range and try the command again.",
                    FlashFillAlert: "All the data next to your selection was checked and there was no pattern for filling in values.",
                    Formatcells: "Format Cells",
                    FontFamily: "Font",
                    FFContent: "Pick a new font for your text.",
                    FontSize: "Font Size",
                    FSContent: "Change the size of your text.",
                    IncreaseFontSize: "Increase Font Size",
                    IFSContent: "Make your text a bit bigger.",
                    DecreaseFontSize: "Decrease Font Size",
                    DFSContent: "Make your text a bit smaller.",
                    Bold: "Bold",
                    Italic: "Italic",
                    Underline: "Underline",
                    Linethrough: "Linethrough",
                    FillColor: "Fill Color",
                    FontColor: "Font Color",
                    TopAlign: "Top Align",
                    TopAlignContent: "Align text to the top.",
                    MiddleAlign: "Middle Align",
                    MiddleAlignContent: "Align text so that it is centered between the top and bottom of the cell.",
                    BottomAlign: "Bottom Align",
                    BottomAlignContent: "Align text to the bottom.",
                    WrapText: "Wrap Text",
                    WrapTextContent: "Wrap extra-long text into multiple lines so you can see all of it.",
                    AlignLeft: "Align Left",
                    AlignLeftContent: "Align your content to the left.",
                    AlignCenter: "Center",
                    AlignCenterContent: "Center your content.",
                    AlignRight: "Align Right",
                    AlignRightContent: "Align your content to the right.",
                    IncreaseIndent: "Increase Indent",
                    IncreaseIndentContent: "Move your content farther away from the cell border.",
                    DecreaseIndent: "Decrease Indent",
                    DecreaseIndentContent: "Move your content closer to the cell border.",
                    Undo: "Undo",
                    Redo: "Redo",
                    NumberFormat: "Number Format",
                    NumberFormatContent: "Choose the format for your cells, such as percentage, currency, date or time.",
                    AccountingStyle: "Accounting Style",
                    AccountingStyleContent: "Format as dollar accounting number format.",
                    PercentageStyle: "Percent Style",
                    PercentageStyleContent: "Format as a percent.",
                    CommaStyle: "Comma Style",
                    CommaStyleContent: "Format with a thousands separator.",
                    IncreaseDecimal: "Increase Decimal",
                    IncreaseDecimalContent: "Show more decimal places for a more precise value.",
                    DecreaseDecimal: "Decrease Decimal",
                    DecreaseDecimalContent: "Show fewer decimal places.",
                    AutoSum: "AutoSum",
                    AutoSumTitle: "Sum",
                    AutoSumContent: "Automatically add a quick calculation to your worksheet, such as sum or average.",
                    Fill: "Fill",
                    ExportXL: "Excel",
                    ExportCsv: "CSV",
                    ExportPdf: "PDF",
                    BackgroundColor: "Fill Color",
                    BGContent: "Color the background of the cells to make them stand out.",
                    ColorContent: "Change the color of your text.",
                    Border: "Border",
                    BorderContent: "Apply borders to the currently selected cells.",
                    BottomBorder: "Bottom Border",
                    TopBorder: "Top Border",
                    LeftBorder: "Left Border",
                    RightBorder: "Right Border",
                    OutsideBorder: "Outside Borders",
                    NoBorder: "No Border",
                    AllBorder: "All Borders",
                    ThickBoxBorder: "Thick Box Border",
                    ThickBottomBorder: "Thick Bottom Border",
                    TopandThickBottomBorder: "Top and Thick Bottom Border",
                    BottomDoubleBorder: "Bottom Double Border",
                    TopandBottomDoubleBorder: "Top and Bottom Double Border",
                    DrawBorderGrid: "Draw Border Grid",
                    DrawBorder: "Draw Border",
                    TopandBottomBorder: "Top and Bottom Border",
                    BorderColor: "Line Color",
                    BorderStyle: "Line Style",
                    Number: "Number is used for general display of numbers.  Currency and Accounting offer specialized formatting for monetary value.",
                    General: "General format cells have no specific number format.",
                    Currency: "Currency formats are used for general monetary values.  Use Accounting formats to align decimal points in a column.",
                    Accounting: "Accounting formats line up the currency symbols and decimal points in a column.",
                    Text: "Text format cells are treated as text even when a number is in the cell.  The cell is displayed exactly as entered.",
                    Percentage: "Percentage formats multiply the cell value by 100 and displays the result with a percent symbol.",
                    CustomMessage: "Type number format code, using one of existing codes as a starting point.",
                    Fraction: "",
                    Scientific: "",
                    Type: "Type:",
                    CustomFormatAlert: "Enter a valid format",
                    Date: "Date formats display date and time serial numbers as date values.",
                    Time: "Time formats display date and time serial numbers as date values.",
                    File: "FILE",
                    New: "New",
                    Open: "Open",
                    SaveAs: "Save As",
                    Print: "Print",
                    PrintContent: "Print the current sheet.",
                    PrintSheet: "Print Sheet",
                    PrintSelected: "Print Selected",
                    PrintSelectedContent: "Select an area on the sheet you would like to print.",
                    HighlightVal: "Format Invalid Data",
                    ClearVal: "Clear Validation",
                    Validation: "Validation",
                    DataValidation: "Data Validation",
                    DVContent: "Pick from a list of rules to limit the type of data that can be entered in a cell.",
                    PageSize: "Page Size",
                    PageSizeContent: "Choose a page size for your document.",
                    FormatCells: "FormatCells",
                    ConditionalFormat: "Conditional Formatting",
                    CFContent: "Easily spot trends and patterns in your data using colors to visually highlight important values.",
                    And: "and",
                    With: "with",
                    GTTitle: "Greater Than",
                    GTContent: "Format cells that are GREATER THAN:",
                    LTTitle: "Less Than",
                    LTContent: "Format cells that are LESS THAN:",
                    BWTitle: "Between",
                    BWContent: "Format cells that are BETWEEN:",
                    EQTitle: "Equal To",
                    EQContent: "Format cells that are EQUAL TO:",
                    DateTitle: "A Date Occurring",
                    DateContent: "Format cells that contain a DATE:",
                    ContainsTitle: "Text That Contains",
                    ContainsContent: "Format cells that contain the text:",
                    GreaterThan: "Greater Than",
                    LessThan: "Less Than",
                    Between: "Between",
                    EqualTo: "Equal To",
                    TextthatContains: "Text that Contains",
                    DateOccurring: "A Date Occurring",
                    ClearRules: "Clear Rules",
                    ClearRulesfromSelected: "Clear Rules from Selected Cells",
                    ClearRulesfromEntireSheets: "Clear Rules from Entire Sheet",
                    CellStyles: "Cell Styles",
                    CellStylesContent: "A colorful style is a great way to make important data stand out on the sheet.",
                    CellStyleHeaderText: "Good, Bad and Neutral/Titles and Headings/Themed Cell Styles",
                    Custom: "Type the number format code, using one of the existing codes as starting point.",
                    CellStyleGBN: "Normal/Bad/Good/Neutral",
                    CellStyleTH: "Heading 4/Title",
                    Accent: "Accent",
                    Style: "Style",
                    FormatAsTable: "Format As Table",
                    FormatasTable: "Format as Table",
                    FATContent: "Quickly convert a range of cells to a table with its own style.",
                    FATHeaderText: "Light/Medium/Dark",
                    FATNameDlgText: "Table Name :/My table has headers",
                    InvalidReference: "The range you have specified is invalid",
                    ResizeAlert: "The specified range is invalid. The top of the table must remain in the same row, and the resulting table must overlap the original table. Specify a valid range.",
                    RangeNotCreated: "Increasing the row beyond the maximum sheet row count is restricted in Format as Table.",
                    ResizeRestrictAlert: "Increase or decrease of column count and decrease of row count is restricted in Format as Table.",
                    FATResizeTableText: "Enter new data range for your table:",
                    FATReizeTableNote: "Note: The headers must remain in the same row and the resulting table range must overlap the original table range.",
                    FormatAsTableAlert: "Cannot create a table with a single row. A table must have at least two rows, one for the table header, and one for data",
                    FormatAsTableTitle: "Light 1/Light 2/Light 3/Light 4/Light 5/Light 6/Light 7/Light 8/Light 9/Light 10/Light 11/Light 12/Medium 1/Medium 2/Medium 3/Medium 4/Medium 5/Medium 6/Medium 7/Medium 8/Dark 1/Dark 2/Dark 3/Dark 4",
                    NewTableStyle: "New Table Style",
                    ResizeTable: "Resize Table",
                    ResizeTableContent: "Resize this table by adding or removing rows and columns.",
                    ConvertToRange: "Convert to Range",
                    ConvertToRangeContent: "Convert this table into a normal range of cells.",
                    ConverToRangeAlert: "Do you want to convert the table to a normal range?",
                    TableID: "Table ID:",
                    Table: "Table",
                    TableContent: "Create a table to organize and analyze related data.",
                    TableStyleOptions: "First Column/Last Column/Total Row/Filter Button",
                    Format: "Format",
                    NameManager: "Name Manager",
                    NameManagerContent: "Create, edit, delete and find all the names used in the workbook.",
                    NameManagerFormulaContent: "Names can be used in formulas as substitutes for cell references.",
                    DefinedNames: "Defined Names",
                    DefineName: "Define Name",
                    DefineNameContent: "Define and apply names.",
                    UseInFormula: "Use In Formula",
                    UseInFormulaContent: "Choose a name used in this workbook and insert it into the current formula.",
                    RefersTo: "Refers To",
                    Name: "Name",
                    Scope: "Scope",
                    NMNameAlert: "The name that you entered is not valid./Reason for this can include:/The name does not begin with a letter or an underscore/The name contains a space or other invalid characters/The name conflicts with a spreadsheet built-in name or the name of another object in the workbook", // not used completely
                    NMUniqueNameAlert: "The name entered already exists. Enter a unique name.",
                    NMRangeAlert: "Enter a valid range",
                    FORMULAS: "FORMULAS",
                    Value: "Values",
                    DataValue: "Values:",
                    Formula: "Formulas",
                    MissingParenthesisAlert: "Your formula is missing a parenthesis--) or (. Check the formula, and then add the parenthesis in the appropriate place.",
                    UnsupportedFile: "Unsupported File",
                    IncorrectPassword: "Unable to open the file or worksheet with the given password",
                    InvalidUrl: "Please specify proper URL",
                    Up: "Up",
                    Down: "Down",
                    Sheet: "Sheet",
                    Workbook: "Workbook",
                    Rows: "By Rows",
                    Columns: "By Columns",
                    FindReplace: "Find Replace",
                    FindnReplace: "Find and Replace",
                    Find: "Find",
                    Replace: "Replace",
                    FindLabel: "Find what:",
                    ReplaceLabel: "Replace with:",
                    ReplaceAll: "Replace All",
                    Close: "Close",
                    FindNext: "Find Next",
                    FindPrev: "Find Prev",
                    Automatic: "Automatic",
                    Manual: "Manual",
                    Settings: "Settings",
                    MatchCase: "Match case",
                    MatchAll: "Match entire cell contents",
                    Within: "Within:",
                    Search: "Search:",
                    Lookin: "Look in:",
                    ShiftRight: "Shift cells right",
                    ShiftBottom: "Shift cells down",
                    EntireRow: "Entire row",
                    EntireColumn: "Entire column",
                    ShiftUp: "Shift cells up",
                    ShiftLeft: "Shift cells left",
                    Direction: "Direction:",
                    GoTo: "Go To",
                    GoToName: "Go to:",
                    Reference: "Reference:",
                    Special: "Special",
                    Select: "Select",
                    Comments: "Comments",
                    Formulas: "Formulas",
                    Constants: "Constants",
                    RowDiff: "Row differences",
                    ColDiff: "Column differences",
                    LastCell: "Last cell",
                    CFormat: "Conditional formats",
                    Blanks: "Blanks",
                    GotoError: "Error",
                    GotoLogicals: "Logicals",
                    GotoNumbers: "Numbers",
                    GotoText: "Text",
                    FindSelect: "Find & Select",
                    Comment: "Comment",
                    NewComment: "New",
                    InsertComment: "Insert Comment",
                    EditComment: "Edit",
                    DeleteComment: "Delete Comment",
                    DeleteCommentContent: "Delete the selected comment.",
                    HideComment: "Hide Comment",
                    Next: "Next",
                    NextContent: "Jump to the next comment.",
                    Previous: "Previous",
                    PreviousContent: "Jump to the previous comment.",
                    ShowHide: "Show/Hide Comment",
                    ShowHideContent: "Show or hide the comment on the active cell.",
                    ShowAll: "Show All Comments",
                    ShowAllContent: "Display all comments in the sheet.",
                    UserName: "User Name",
                    Hide: "Hide",
                    Unhide: "Unhide",
                    Add: "Add",
                    DropAlert: "Do you want to replace the existing data?",
                    PutCellColor: "Put Selected Cell Color To The Top",
                    PutFontColor: "Put Selected Font Color To The Top",
                    WebPage: "Web Page",
                    WorkSheet: "Worksheet Reference",
                    SheetReference: "Sheet Reference",
                    InsertHyperLink: "Insert Hyperlink",
                    HyperLink: "Hyperlink",
                    EditLink: "Editlink",
                    OpenLink: "Openlink",
                    HyperlinkText: "Text:",
                    RemoveLink: "Removelink",
                    WebAddress: "Web Address:",
                    CellAddress: "Cell Reference:",
                    SheetIndex: "Select a place in this document",
                    ClearAll: "Clear All",
                    ClearFormats: "Clear Formats",
                    ClearContents: "Clear Contents",
                    ClearComments: "Clear Comments",
                    ClearHyperLinks: "Clear Hyperlinks",
                    SortFilter: "Sort & Filter",
                    SortFilterContent: "Organize your data so it's easier to analyze.",
                    NumberStart: "Minimum:",
                    NumberEnd: "Maximum:",
                    DecimalStart: "Minimum:",
                    DecimalEnd: "Maximum:",
                    DateStart: "Start Date:",
                    DateEnd: "End Date:",
                    ListStart: "Source:",
                    FreeText: "Show error alert after invalid data is entered",
                    ListEnd: "Cell Reference:",
                    TimeStart: "Start Time:",
                    TimeEnd: "End Time:",
                    TextLengthStart: "Minimum:",
                    TextLengthEnd: "Maximum:",
                    CommentFindEndAlert: "Spreadsheet reached the end of the workbook. Do you want to continue reviewing from the beginning of the workbook?",
                    InsertSheet: "Insert",
                    DeleteSheet: "Delete",
                    RenameSheet: "Rename",
                    MoveorCopy: "Move or Copy",
                    HideSheet: "Hide",
                    UnhideSheet: "Unhide",
                    SheetRenameAlert: "That name is already taken. Try a different one.",
                    SheetRenameEmptyAlert: "You typed an invalid name for a sheet. Make sure that:",
                    SheetRenameEmptyCharExceedAlert: "The name that you type does not exceed 31 characters.",
                    SheetRenameEmptySplCharAlert: "The name does not contain any of the following characters:",
                    SheetRenameEmptyBlankAlert: "You did not leave the name blank.",
                    SheetDeleteAlert: "You can't undo deleting sheets, and you might be removing some data. If you don't need it, click OK to delete.",
                    SheetDeleteErrorAlert: "A workbook must contain at least one visible worksheet. To hide, delete, or move the selected sheet, you must first insert a new sheet or unhide a sheet that is already hidden.",
                    CtrlKeyErrorAlert: "That command cannot be used on  multiple selections.",
                    ClipboardAccessError: "Your browser can't access the clipboard, so use these shortcuts:",
                    MoveToEnd: "Move To End",
                    Beforesheet: "Before sheet:",
                    CreateaCopy: "Create a copy",
                    AutoFillOptions: "Copy Cells/Fill Series/Fill Formatting Only/Fill Without Formatting/Flash Fill",
                    NumberValidationMsg: "Enter only digits",
                    DateValidationMsg: "Enter only date",
                    Required: "Required",
                    TimeValidationMsg: "The time you entered for the Time is invalid.",
                    CellAddrsValidationMsg: "Reference is not valid.",
                    PivotTable: "Pivot Table",
                    PivotTableContent: "Easily arrange and summarize complex data in a PivotTable.",
                    NumberTab: "Number",
                    AlignmentTab: "Alignment",
                    FontTab: "Font",
                    FillTab: "Fill",
                    TextAlignment: "Text alignment",
                    Horizontal: "Horizontal:",
                    Vertical: "Vertical:",
                    Indent: "Indent",
                    TextControl: "Text Control",
                    FontGroup: "Font:",
                    FontStyle: "Font style:",
                    Size: "Size:",
                    PSize: "Page size",
                    Effects: "Effects:",
                    StrikeThrough: "Strikethrough",
                    Overline: "Overline",
                    NormalFont: "Normal font",
                    Preview: "Preview",
                    Line: "Line",
                    Presets: "Presets",
                    None: "None",
                    Outline: "Outline",
                    AllSide: "All sides",
                    InsCells: "Insert Cells",
                    InsRows: "Insert Sheet Rows",
                    InsCols: "Insert Sheet Columns",
                    InsSheet: "Insert Sheet",
                    DelCells: "Delete Cells",
                    DelRows: "Delete Sheet Rows",
                    DelCols: "Delete Sheet Columns",
                    DelSheet: "Delete Sheet",
                    HyperLinkAlert: "The address of this site is not valid.Check the address and try again.",
                    ReplaceData: "All done. We made / replacements.",
                    NotFound: "We couldn't find what you were looking for. Select settings tab for more ways to search",
                    Data: "Data:",
                    Allow: "Allow:",
                    IgnoreBlank: "Ignore blank",
                    NotFind: "Unable to find the match to replace",
                    FreezeTopRow: "Freeze Top Row",
                    FreezeFirstColumn: "Freeze First Column",
                    UnFreezePanes: "Unfreeze Panes",
                    DestroyAlert: "Are you sure you want to destroy the current workbook without saving and create a new workbook?",
                    ImageValAlert: "Upload image files only",
                    Pictures: "Pictures",
                    PicturesTitle: "From File",
                    PicturesContent: "Insert pictures from computer or from other computers that you are connected to.",
                    ImportAlert: "Are you sure you want to destroy the current workbook without saving and open a new workbook?",
                    UnmergeCells: "Unmerge Cells",
                    MergeCells: "Merge Cells",
                    MergeAcross: "Merge Across",
                    MergeAndCenter: "Merge & Center",
                    MergeAndCenterContent: "Combine and center the contents of the selected cells in a new larger cell.",
                    MergeCellsAlert: "Merging Cells keeps only upper left cell value and discards the other values.",
                    MergeInsertAlert: "This operation will causes some merged cells to unmerge. Do you wish to continue ?",
                    Axes: "Axes",
                    PHAxis: "Primary Horizontal",
                    PVAxis: "Primary Vertical",
                    AxisTitle: "Axis Title",
                    CTNone: "None",
                    CTCenter: "Center",
                    CTFar: "Far",
                    CTNear: "Near",
                    DataLabels: "Data Labels",
                    DLNone: "None",
                    DLCenter: "Center",
                    DLIEnd: "Inside End",
                    DLIBase: "Inside Base",
                    DLOEnd: "Outside End",
                    ErrorBar: "Error Bars",
                    Gridline: "Gridlines",
                    PMajorH: "Primary Major Horizontal",
                    PMajorV: "Primary Major Vertical",
                    PMinorH: "Primary Minor Horizontal",
                    PMinorV: "Primary Minor Vertical",
                    Legend: "Legends",
                    LNone: "None",
                    LLeft: "Left",
                    LRight: "Right",
                    LBottom: "Bottom",
                    LTop: "Top",
                    ChartTitleDlgText: "Enter Title",
                    ChartTitle: "Title",
                    InvalidTitle: "You typed an invalid name for the Title.",
                    CorrectFormat: "Select the correct Format File",
                    ResetPicture: "Reset Picture",
                    ResetPictureContent: "Discard all of the formatting changes made to this picture.",
                    PictureBorder: "Picture Border",
                    PictureBorderContent: "Pick the color, width, and line style for the outline of your shape.",
                    ResetSize: "Reset Picture & Size",
                    Height: "Height",
                    Width: "Width",
                    ThemeColor: "Theme Colors",
                    NoOutline: "No Outline",
                    Weight: "Weight",
                    Dashes: "Dashes",
                    ColumnChart: "Column",
                    ColumnChartTitle: "Insert Column Chart",
                    ColumnChartContent: "Use this chart type to visually compare values across a few categories.",
                    BarChart: "Bar",
                    BarChartTitle: "Insert Bar Chart",
                    BarChartContent: "Use this chart type to visually compare values across a few categories when the chart shows duration or the category text is long.",
                    StockChart: "Radar",
                    StockChartTitle: "Insert Radar Chart",
                    StockChartContent: "Use this chart type to show values relative to a center point.",
                    LineChart: "Line",
                    LineChartTitle: "Insert Line Chart",
                    LineChartContent: "Use this chart type to show trends over time (years, months, and days) or categories.",
                    AreaChart: "Area",
                    AreaChartTitle: "Insert Area Chart",
                    AreaChartContent: "Use this chart type to show trends over time (years, months, and days) or categories. Use it to highlight the magnitude of change over time.",
                    ComboChart: "Combo",
                    PieChart: "Pie",
                    PieChartTitle: "Insert Pie/Doughnut Chart",
                    PieChartContent: "Use this chart type to show proportions of a whole. Use it when the total of your numbers is 100%.",
                    ScatterChart: "Scatter",
                    ScatterChartTitle: "Insert Scatter (X, Y) Chart",
                    ScatterChartContent: "Use this chart type to show the relationship between sets of values.",
                    ClusteredColumn: "Clustered&nbsp;Column",
                    StackedColumn: "Stacked&nbsp;Column",
                    ClusteredBar: "Clustered&nbsp;Bar",
                    StackedBar: "Stacked&nbsp;Bar",
                    Radar: "Radar",
                    RadarMarkers: "Radar&nbsp;with&nbsp;Markers",
                    LineMarkers: "Line&nbsp;with&nbsp;Markers",
                    Area: "Area",
                    StackedArea: "Stacked&nbsp;Area",
                    Pie: "Pie",
                    Doughnut: "Doughnut",
                    Scatter: "Scatter",
                    ChartRange: "Chart Range",
                    XAxisRange: "Enter X-axis range:",
                    YAxisRange: "Enter Y-axis range:",
                    LegendRange: "Enter legend range:",
                    YAxisMissing: "Enter Y-axis range to create chart",
                    InvalidYAxis: "Y-axis range must be within the selected range",
                    InvalidXAxis: "X-axis range must be within the selected range",
                    InvalidLegend: "Legend range must be within the selected range",
                    InvalidXAxisColumns: "X-axis range should be within a single column",
                    FreezePanes: "Freeze Panes",
                    FreezePanesContent: "Freeze a portion of the sheet to keep it visible while you scroll through the rest of the sheet.",
                    PasteContent: "Add content on the Clipboard to your document.",
                    PasteSplitContent: "Pick a paste option, such as keeping formatting or pasting only content.",
                    CutContent: "Remove the selection and put it on the Clipboard so you can paste it somewhere else.",
                    CopyContent: "Put a copy of the selection on the Clipboard so you can paste it somewhere else.",
                    FPTitle: "Format Painter",
                    FPContent: "Like the look of a particular selection? You can apply that look to other content in the document.",
                    BoldContent: "Make your text bold.",
                    ItalicContent: "Italicize your text.",
                    ULineContent: "Underline your text.",
                    LineTrContent: "Cross something out by drawing a strike through it.",
                    UndoContent: "Undo your last action.",
                    RedoContent: "Redo your last action.",
                    HyperLinkTitle: "Add a Hyperlink",
                    HyperLinkContent: "Create a link in your document for quick access to webpages and files.",
                    HyperLinkPlaceContent: "Hyperlinks can also take you to places in your document.",
                    NewCommentTitle: "Insert a Comment",
                    NewCommentContent: "Add a note about this part of the document.",
                    RefreshTitle: "Refresh",
                    RefreshContent: "Get the latest data from the source connected to the active cell",
                    FieldListTitle: "Field List",
                    FieldListContent: "Show or hide the Field List.",
                    FieldListRemoveContent: " The field list allows you to add and remove fields from your PivotTable report",
                    AddChartElement: "Add Chart Element",
                    AddChartElementContent: "Add elements to the created chart.",
                    SwitchRowColumn: "Switch Row/ Column",
                    SwitchRowColumnContent: "Swap the data over the axis.",
                    MergeAlert: "We can't do that to a merged cell.",
                    UnhideDlgText: "Unhide Sheet:",
                    ChartThemes: "Chart Themes",
                    ChartThemesContent: "Pick a new theme for your chart.",
                    ChangePicture: "Change Picture",
                    ChangePictureContent: "Change to a different picture, preserving the formatting and size of the current picture.",
                    ChangeChartType: "Change Chart Type",
                    SelectData: "Select Data",
                    SelectDataContent: "Change the data range included in the chart.",
                    Sum: "Sum",
                    Average: "Average",
                    CountNumber: "Count Numbers",
                    Max: "Max",
                    Min: "Min",
                    ChartType: "Change Chart Type",
                    ChartTypeContent: "Change to a different chart type.",
                    AllCharts: "All Charts",
                    defaultfont: "Default",
                    LGeneral: "General",
                    LCurrency: "Currency",
                    LAccounting: "Accounting",
                    LDate: "Date",
                    LTime: "Time",
                    LPercentage: "Percentage",
                    LFraction: "Fraction",
                    LScientific: "Scientific",
                    LText: "Text",
                    LCustom: "Custom",
                    FormatSample: "Sample",
                    Category: "Category:",
                    Top: "Top",
                    Center: "Center",
                    Bottom: "Bottom",
                    Left: "Left (Indent)",
                    Right: "Right",
                    Justify: "Justify",
                    GeneralTxt: "General format cells have no specific number format.",
                    NegativeNumbersTxt: "Negative Numbers",
                    ThousandSeparatorTxt: "Use 1000 Separator",
                    DecimalPlacesTxt: "Decimal Places:",
                    TextTxt: "Text format cells are treated as text even when a number is in the cell. The cell is displayed exactly as entered.",
                    BoldItalic: "Bold Italic",
                    Regular: "Regular",
                    HyperLinkHide: "<<Selection in Document>>",
                    InvalidSheetIndex: "Specify proper SheetIndex",
                    HugeDataAlert: "File too large to open.",
                    ImportExportUrl: "Give import/export URL and try again.",
                    BetweenAlert: "The Maximum must be greater or equal to the Minimum.",
                    BorderStyles: "Solid/Dashed/Dotted/Double",
                    FPaneAlert: "Freeze Pane is not applied for the First Cell",
                    ReplaceNotFound: "Spreadsheet cannot find a match.",
                    BlankWorkbook: "Blank workbook",
                    SaveAsExcel: "Save As Excel",
                    SaveAsCsv: "Save As CSV",
                    SaveAsPdf: "Save As PDF",
                    Design: "DESIGN",
                    NewName: "New Name",
                    FormulaBar: "Formula Bar",
                    NameBox: "Name Box",
                    NumberValMsg: "Decimal values cannot be used for number conditions.",
                    NumberAlertMsg: "Enter only digits.",
                    ListAlert: "Cell range is incorrect, Please enter correct cell range.",
                    ListValAlert: "The list source must be a delimited list, or a reference to single row or column.",
                    ListAlertMsg: "The value you entered is not valid",
                    AutoFillTitle: "AutoFillOptions",
                    NewSheet: "New Sheet",
                    FullSheetCopyPasteAlert: "We can't paste because the Copy area and paste area aren't the same size.",
                    Heading: "Headings",
                    Gridlines: "Gridlines",
                    Firstsheet: "Scroll to the first sheet",
                    Lastsheet: "Scroll to the last sheet",
                    Nextsheet: "Scroll to the next sheet",
                    Prevsheet: "Scroll to the previous sheet",
                    ProtectWorkbook: "Protect Workbook",
                    UnProtectWorkbook: "Unprotect Workbook",
                    ProtectWBContent: "Keep others from making structural changes to your workbook",
                    Password: "Password",
                    ConfirmPassword: "Reenter password to proceed:",
                    PasswordAlert1: "Confirmation password is not identical.",
                    PasswordAlert2: "Please enter a password.",
                    PasswordAlert3: "The password you supplied is not correct. Verify that the CAPS LOCK key is off and be sure to use the correct capitalization.",
                    Protect: "is protected.",
                    Lock: "LockCell",
                    Unlock: "UnlockCell",
                    Protectsheet: "Protect Sheet",
                    ProtectSheetToolTip: "Prevent unwanted changes from others by limiting their ability to edit",
                    Unprotect: "Unprotect Sheet",
                    LockAlert: "The cell you are trying to change is on protected sheet. To make changes, click Unprotect Sheet in the Review tab.",
                    InsertDeleteAlert: "This operation is not allowed. The operation is attempting to shift cells in a table on your worksheet.",
                    CreateRule: "New Rule",
                    NewRule: "New Formatting Rule",
                    NewRuleLabelContent: "Format values where this formula is true:",
                    ReadOnly: "The range you are trying to change contains readonly cells.",
                    CreatePivotTable: "Create PivotTable",
                    Range: "Range:",
                    ChoosePivotTable: "Choose where you want the PivotTable to be placed",
                    NewWorksheet: "New Worksheet",
                    ExistingWorksheet: "Existing Worksheet",
                    Location: "Location:",
                    Refresh: "Refresh",
                    PivotRowsAlert: "This command requires at least two rows of source data. You cannot use the command on a selection in only one row.",
                    PivotLabelsAlert: "The PivotTable field name is not valid, To create a PivotTable report, you must use data that is organized as a list with labeled columns. If you are changing the name of a PivotTable field, you must type a new name for the field.",
                    FieldList: "Field List",
                    MergeSortAlert: "To do this, all the merged cells need to be the same size.",
                    FormulaSortAlert: "The sort range with formula cannot be sorted.",
                    MergePreventInsertDelete: "This operation is not allowed. The operation is attempting to shift a merge cells on your worksheet.",
                    FormulaRuleMsg: "Please enter correct format.",
                    MovePivotTable: "Move PivotTable",
                    MovePivotTableContent: "Move the PivotTable to another location in the workbook.",
                    ClearAllContent: "Remove fields and filters.",
                    ChangeDataSource: "Modify",
                    ChangeDataSourceContent: "Change the source data for this PivotTable",
                    ChangePivotTableDataSource: "Change PivotTable Data Source",
                    TotalRowAlert: "This operation is not allowed. The operation is attempting to shift cells in a table on your worksheet. Click OK to proceed with entire row.",
                    CellTypeAlert: "This operation is not allowed in cell type applied range.",
                    PivotOverlapAlert: "A PivotTable report cannot overlap another PivotTable report",
                    NoCellFound: "No cells were found",
                    CorrectArgument: "Please enter the correct argument",
                    CorrectFormula: "Please enter the correct formula",
                    CorrectCellAddress: "Please enter the correct cell address",
                    ChartType: "Chart Type",
                    NumberValidationAlert: "The Maximum must be greater than or equal to Minimum",
                    DateValidationAlert: "The End Date must be greater than or equal to Start Date",
                    TimeValidationAlert: "The End Time must be greater than or equal to Start Time",
                    NewRuleAlert: "There's a problem with this formula",
                    DragAlert: "The command could not be completed as you are attempting to move cells within the filter range. Select a range out of the filter range and try the command again.",
                    OR: "or",
                    HOME: "HOME",
                    INSERT: "INSERT",
                    DATATAB: "DATA",
                    PAGELAYOUT: "PAGE LAYOUT",
                    REVIEW: "REVIEW",
                    OTHERS: "OTHERS",
                    FORMAT: "Format",
                    DESIGN: "DESIGN",
                    CHARTDESIGN: "Chart Design",
                    ANALYZE: "Analyze",
                    FileName: "File Name",
                    Save: "Save",
                    SaveFile: "Save the file",
                    HighlightCellRules: "Highlight Cell Rules",
                    LightRedFillDark: "Light Red Fill with Dark Red Text",
                    YellowFillDark: "Yellow Fill with Dark Yellow Text",
                    GreenFillDark: "Green Fill with Dark Green Text",
                    RedFill: "Red Fill",
                    RedText: "Red Text",
                    Column: "Column",
                    Bar: "Bar",
                    Line: "Line",
                    DataValidationType: "Number/Decimal/Date/Time/TextLength/List",
                    DataValidationAction: "greater than/greater than or equal to/less than/less than or equal to/equal to/not equal to/between/not between",
                    Modify: "Modify",
                    Apply: "Apply",
                    NewCellStyle: "New Cell Style",
                    cellStyleAlert: "This style name already exists",
                    modifyCellStyleAlert: "This style name does not exists",
                    Color: "Color",
                    StyleName: "Style Name",
                    LShortdate: "Short Date",
                    LLongdate: "Long Date",
                    Clipboard: "Clipboard",
                    Font: "Font",
                    Actions: "Actions",
                    Styles: "Styles",
                    Editing: "Editing",
                    Tables: "Tables",
                    Illustrations: "Illustrations",
                    Links: "Links",
                    Charts: "Charts",
                    DataTools: "Data Tools",
                    Show: "Show",
                    PageLayout: "Page Layout",
                    Changes: "Changes",
                    Window: "Window",
                    Cells: "Cells",
                    Calculation: "Calculation",
                    Properties: "Properties",
                    Tools: "Tools",
                    TableStyleOption: "Table Style Options",
                    ChartLayouts: "Chart Layouts",
                    ChartDesignData: "Data",
                    ChartDesignType: "Type",
                    ChartDesignSize: "Size",
                    Adjust: "Adjust",
                    FormatSize: "Size",
                    AnalyzePivotTable: "PivotTable",
                    DataSource: "DataSource",
                    FATTitlePrefix: "Table Style",
                    HighPoint: "High Point",
                    LowPoint: "Low Point",
                    FirstPoint: "First Point",
                    LastPoint: "Last Point",
                    NegativePoint: "Negative Points",
                    Markers: "Markers",
                    NegativePoints: "Negative Points",
                    LineSparklineTitle: "Insert Line Sparkline",
                    LineSparklineContent: "Sparklines are mini charts placed in a single cells,each representing a row of data in your selection",
                    ColumnSparklineTitle: "Insert Column Sparkline",
                    ColumnSparklineContent: "Sparklines are mini charts placed in a single cells,each representing a row of data in your selection",
                    WinLossSparklineTitle: "Insert Win/Loss Sparkline",
                    WinLossSparklineContent: "Sparklines are mini charts placed in a single cells,each representing a row of data in your selection",
                    Line: "Line",
                    SparklineColor: "Sparkline Color",
                    SparklineColorTitle: "Sparkline Color",
                    SparklineColorContent: "Specify the color of the sparklines in the selected sparkline group",
                    MarkerColor: "Marker Color",
                    MarkerColorContent: "Change the color for negative points, markers, and all other points for selected sparkline group",
                    ChooseDataRange: "Choose the Data Range",
                    ChooseLocationRange: "Choose the Location Range",
                    DataRange: "Data Range",
                    LocationRange: "Location Range",
                    EmptyDLRnge: "Data Source or Location reference is not valid",
                    SourceDataRange: "Select a source data range for the sparkline",
                    SparklineAlert: "Location reference is not valid because the cells are not all in same column or same row. Select cells that are all in single row or single column ",
                    SparklineDataAlert: "Enter the Correct Data Format",
                    SparklineLocAlert: "The reference for the location or data range is not valid",
                    SDataRangeAlert: "Data Source reference is not valid",
                    LineAlert: "Cannot create the line chart for single value",
                    EditData: "Edit Data",
                    EditDataContent: "Edit Group Location & Data",
                    EditSingleSparklineData: "Edit Single Sparkline Data",
                    EditSparklineData: "Edit Sparkline Data",
                    HiddenEmptyCells: "Hidden & Empty Cells",
                    SwitchRowCol: "Switch Row/Column",
                    CreateSparkline: "Create Sparkline",
                    SelectDataSource: "Select a source data range for the sparkline",
                    SPARKLINEDESIGN: "Sparkline Design",
					CancellationRequested: "Couldn't open within the timeout specified"
                };
                break;
            case "ejTimePicker":
                ej.TimePicker.Locale = ej.TimePicker.Locale || {};
                ej.TimePicker.Locale["en-US"] = {
                    watermarkText: "select time",
                };
                break;
            case "ejTreeGrid":
                ej.TreeGrid.Locale = ej.TreeGrid.Locale || {};
                ej.TreeGrid.Locale["en-US"] = {
                    //string to be displayed in Toolbox's tooltip
                    toolboxTooltipTexts: {
                        addTool: "Add",
                        editTool: "Edit",
                        updateTool: "Update",
                        deleteTool: "Delete",
                        cancelTool: "Cancel",
                        expandAllTool: "Expand All",
                        collapseAllTool: "Collapse All",
                        pdfExportTool: "PDF Export",
                        excelExportTool: "Excel Export",
                        printTool: "Print",
                        searchTool: "Search"
                    },
                    //string to be displayed in context menu
                    contextMenuTexts: {
                        addRowText: "Add Row",
                        editText: "Edit",
                        deleteText: "Delete",
                        saveText: "Save",
                        cancelText: "Cancel",
                        aboveText: "Above",
                        belowText: "Below"
                    },
                    //string to be displayed in column menu
                    columnMenuTexts: {
                        sortAscendingText: "Sort Ascending",
                        sortDescendingText: "Sort Descending",
                        columnsText: "Columns",
                        freezeText: "Freeze",
                        unfreezeText: "Unfreeze",
                        freezePrecedingColumnsText: "Freeze Preceding Columns",
                        insertColumnLeft: "Insert Column Left",
                        insertColumnRight: "Insert Column Right",
                        deleteColumn: "Delete Column",
                        renameColumn: "Rename Column",
                        menuFilter: "Filter"
                    },
                    //string to display in column add dialog
                    columnDialogTexts: {
                        field: "Field",
                        headerText: "Header Text",
                        editType: "Edit Type",
                        filterEditType: "Filter Edit Type",
                        allowFiltering: "Allow Filtering",
                        allowFilteringBlankContent: "Allow Filtering Blank Content",
                        allowSorting: "Allow Sorting",
                        visible: "Visible",
                        width: "Width",
                        textAlign: "Text Alignment",
                        headerTextAlign: "Header Text Alignment",
                        isFrozen: "Is Frozen",
                        allowFreezing: "Allow Freezing",
                        columnsDropdownData: "Column Dropdown Data",
                        dropdownTableText: "Text",
                        dropdownTableValue: "Value",
                        addData: "Add",
                        deleteData: "Remove",
                        allowCellSelection: "Allow Cell Selection",
                        showInColumnChooser: "Show In Column Chooser",
                        displayAsCheckbox: "Display As Checkbox",
                        clipMode: "Clip Mode",
                        tooltip: "Tooltip",
                        headerTooltip: "Header Tooltip"
                    },
                    editTypeTexts: {
                        string: "String",
                        numeric: "Numeric",
                        datePicker: "Date Picker",
                        dateTimePicker: "Date Time Picker",
                        dropdown: "Dropdown",
                        boolean: "Boolean"
                    },
                    textAlignTypes: {
                        right: "Right",
                        left: "Left",
                        center: "Center"
                    },
                    clipModeTexts: {
                        clip: "Clip",
                        ellipsis: "Ellipsis"
                    },
                    //string to be displayed in column add dialog title
                    columnDialogTitle: {
                        insertColumn: "Insert Column",
                        deleteColumn: "Delete Column",
                        renameColumn: "Rename Column"
                    },
                    //string to be displayed in menu filter
                    filterMenuTexts: {
                        stringMenuOptions: [{ text: "Starts With", value: "startswith" },
                                { text: "Ends With", value: "endswith" },
                                { text: "Contains", value: "contains" },
                                { text: "Equals", value: "equal" },
                                { text: "Does Not Equal", value: "notequal" }],
                        numberMenuOptions: [{ text: "Less Than", value: "lessthan" },
                                    { text: "Greater Than", value: "greaterthan" },
                                    { text: "Less Than Or Equal To", value: "lessthanorequal" },
                                    { text: "Greater Than Or Equal To", value: "greaterthanorequal" },
                                    { text: "Equals", value: "equal" },
                                    { text: "Does Not Equal", value: "notequal" }],
                        filterValue: "Filter Value",
                        filterButton: "Filter",
                        clearButton: "Clear",
                        enterValueText: "enter value",
                    },
                    //Locale Text for delete confirm dialog
                    deleteColumnText: "Are you sure you want to delete this column?",
                    deleteRecordText: "Are you sure you want to delete record?",
                    okButtonText: "OK",
                    cancelButtonText: "Cancel",
                    confirmDeleteText: "Confirm Delete",
                    //String to be displayed in drop down list for filtering blank items
                    dropDownListBlanksText: "(Blanks)",
                    //String to be displayed in drop down list to clear filtered items
                    dropDownListClearText: "(Clear Filter)",
                    //Text to be displayed in drop down list for FALSE value in boolean edit type column
                    trueText: "True",
                    //Text to be displayed in drop down list for True value in boolean edit type column
                    falseText: "False",
                    emptyRecord: "No records to display",

                };
                break;
            case "ejUploadbox":
                ej.Uploadbox.Locale = ej.Uploadbox.Locale || {};
                ej.Uploadbox.Locale["en-US"] = {
                    buttonText: {
                        upload: "Upload",
                        browse: "Browse",
                        cancel: "Cancel",
                        close: "Close"
                    },
                    dialogText: {
                        title: "Upload Box",
                        name: "Name",
                        size: "Size",
                        status: "Status"
                    },
                    dropAreaText: "Drop files or click to upload",
                    filedetail: "The selected file size is too large. Please select a file within the valid size.",
                    denyError: "Files with #Extension extensions are not allowed.",
                    allowError: "Only files with #Extension extensions are allowed.",
                    cancelToolTip: "Cancel",
                    removeToolTip: "Remove",
                    retryToolTip: "Retry",
                    completedToolTip: "Completed",
                    failedToolTip: "Failed",
                    closeToolTip: "Close"
                };
                break;
            case "ejSpellCheck":
                ej.SpellCheck.Locale = ej.SpellCheck.Locale || {};
                ej.SpellCheck.Locale["en-US"] = {
                    SpellCheckButtonText: "Spelling:",
                    NotInDictionary: "Not in Dictionary:",
                    SuggestionLabel: "Suggestions:",
                    IgnoreOnceButtonText: "Ignore Once",
                    IgnoreAllButtonText: "Ignore All",
                    AddToDictionary: "Add to Dictionary",
                    ChangeButtonText: "Change",
                    ChangeAllButtonText: "ChangeAll",
                    CloseButtonText: "Close",
                    CompletionPopupMessage: "Spell check is complete",
                    CompletionPopupTitle: "Spell check",
                    Ok: "OK",
                    NoSuggestionMessage: "No suggestions available",
                    NotValidElement: "Specify the valid control id or class name to spell check"
                };
                break;
            case "ejMediaPlayer":
                ej.MediaPlayer.Locale = ej.MediaPlayer.Locale || {};
                ej.MediaPlayer.Locale["en-US"] = {
                    Play: "Play",
                    Pause: "Pause",
                    Mute: "Mute",
                    Unmute: "Unmute",
                    Settings: "Settings",
                    FullScreen: "Full Screen",
                    ExitFullScreen: "Exit Full Screen",
                    HidePlaylist: "Hide Playlist",
                    Previous: "Previous",
                    Next: "Next",
                    TogglePlaylist: "Toggle Playlist",
                    Rewind: "Rewind",
                    Forward: "Forward",
                    Playlist: "Playlist",
                    RepeatPlaylist: "Repeat Playlist",
                    Shuffle: "Shuffle",
                    VideoTitle: "Video",
                    PlaylistTitle: "Playlist",
                    PlaylistItemName: "List Item",
                    PlaylistItemAuthor: "Author",
                    Media: "Media",
                    Speed: "Speed",
                    Quality: "Quality",
                    Normal: "Normal",
                    Auto: "Auto"
                };
                break;
            case "ejTile":
                ej.Tile.Locale = ej.Tile.Locale || {};
                ej.Tile.Locale["en-US"] = {
                    captionText: "text"
                };
                break;
            case "ejListView":
                ej.ListView.Locale = ej.ListView.Locale || {};
                ej.ListView.Locale["en-US"] = {
                    headerTitle: "Title",
                    headerBackButtonText: "Back"
                };
                break;
        }
    }
    widgets = ej.widget.registeredWidgets;
    for (name in widgets)
        $.fn.Locale_enUS(name);
    if (ej.ExcelFilter)
        $.fn.Locale_enUS("ejExcelFilter");
})(window.jQuery, window.Syncfusion);