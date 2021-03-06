(function ($, ej, undefined) {
    var name, widgets;
    ej.locales.push("zhCN");
    $.fn.Locale_zhCN = function (pluginName) {
        switch (pluginName) {
            case "ejAutocomplete":
                ej.Autocomplete.Locale = ej.Autocomplete.Locale || {};
                ej.Autocomplete.Locale["zh-CN"] = {
                    addNewText: "添新",
                    emptyResultText: "没有建议",
                    actionFailure: "指定字段中不定的数据源存在",
                    watermarkText: " "
                };
                break;
            case "ejColorPicker":
                ej.ColorPicker.Locale = ej.ColorPicker.Locale || {};
                ej.ColorPicker.Locale["zh-CN"] = {
                    buttonText: {
                        apply: "应用",
                        cancel: "取消",
                        swatches: "色板"
                    },
                    tooltipText: {
                        switcher: "切换器",
                        addButton: "添加颜色",
                        basic: "基本",
                        monoChrome: "单色铬",
                        flatColors: "平的颜色",
                        seaWolf: "海狼",
                        webColors: "网颜色",
                        sandy: "沙",
                        pinkShades: "桃红色树荫",
                        misty: "蒙蒙",
                        citrus: "柑橘",
                        vintage: "葡萄酒",
                        moonLight: "月光",
                        candyCrush: "糖果粉碎",
                        currentColor: "当前颜色",
                        selectedColor: "所选颜色"
                    },
                };
                break;
            case "ejCurrencyTextbox":
                ej.CurrencyTextbox.Locale = ej.CurrencyTextbox.Locale || {};
                ej.CurrencyTextbox.Locale["zh-CN"] = {
                    watermarkText: "输入值",
                };
                break;
            case "ejDatePicker":
                ej.DatePicker.Locale = ej.DatePicker.Locale || {};
                ej.DatePicker.Locale["zh-CN"] = {
                    watermarkText: "选择日期",
                    buttonText: "今天",
                };
                break;
            case "ejDateRangePicker":
                ej.DateRangePicker.Locale = ej.DateRangePicker.Locale || {};
                ej.DateRangePicker.Locale["zh-CN"] = {
                    ButtonText: {
                        apply: "应用",
                        cancel: "取消",
                        reset: "重启"
                    },
                    watermarkText: "选择范围",
                    customPicker: "自定义选择器",
                };
                break;
            case "ejDateTimePicker":
                ej.DateTimePicker.Locale = ej.DateTimePicker.Locale || {};
                ej.DateTimePicker.Locale["zh-CN"] = {
                    watermarkText: "选择日期时间",
                    buttonText: {
                        today: "今天",
                        timeNow: "现在时间",
                        done: "做",
                        timeTitle: "时间"
                    },
                };
                break;
            case "ejDialog":
                ej.Dialog.Locale = ej.Dialog.Locale || {};
                ej.Dialog.Locale["zh-CN"] = {
                    tooltip: {
                        close: "关闭",
                        collapse: "崩溃",
                        restore: "恢复",
                        maximize: "最大化",
                        minimize: "最小化最小化",
                        expand: "扩大",
                        unPin: "拔掉闩",
                        pin: "销"
                    },
                    closeIconTooltip: "关闭",
                };
                break;
            case "ejDropDownList":
                ej.DropDownList.Locale = ej.DropDownList.Locale || {};
                ej.DropDownList.Locale["zh-CN"] = {
                    emptyResultText: "没有建议",
                    watermarkText: " ",
                };
                break;
            case "ejComboBox":
                ej.ComboBox.Locale = ej.ComboBox.Locale || {};
                ej.ComboBox.Locale["zh-CN"] = {
                    noRecordsTemplate: "没有找到记录",
                    actionFailureTemplate: "请求失败"
                };
                break;
            case "ejMenu":
                ej.Menu.Locale = ej.Menu.Locale || {};
                ej.Menu.Locale["zh-CN"] = {
                    titleText: "菜单"
                };
                break;
            case "ejCaptcha":
                ej.Captcha.Locale = ej.Captcha.Locale || {};
                ej.Captcha.Locale["zh-CN"] = {
                    placeHolderText: "输入显示的字符",
                    CustomErrorMessage: "无效输入"
                };
                break;
            case "ejExcelFilter":
                ej.ExcelFilter.Locale = ej.ExcelFilter.Locale || {};
                ej.ExcelFilter.Locale["zh-CN"] = {
                    SortNoSmaller: "排序从最小到最大",
                    SortNoLarger: "排序从大到小",
                    SortTextAscending: "排序从A到Z",
                    SortTextDescending: "排序Z到A",
                    SortDateOldest: "按最早日期排序",
                    SortDateNewest: "排序方式最新",
                    SortByColor: "按颜色",
                    SortByCellColor: "排序方式细胞色",
                    SortByFontColor: "排序方式字体颜色",
                    FilterByColor: "过滤按颜色",
                    CustomSort: "自定义排序",
                    FilterByCellColor: "通过细胞彩色滤光片",
                    FilterByFontColor: "通过字体颜色过滤",
                    ClearFilter: "清除过滤器",
                    NumberFilter: "号码过滤",
                    GuidFilter: "GUD过滤器",
                    TextFilter: "文本过滤器",
                    DateFilter: "日期过滤器",
                    DateTimeFilter: "日期时间过滤器",
                    SelectAll: "全选",
                    Blanks: "空白",
                    Search: "搜索",
                    Showrowswhere: "显示的行",
                    NumericTextboxWaterMark: "数字水印文本框",
                    StringMenuOptions: [{ text: "等于", value: "equal" }, { text: "不平等", value: "notequal" }, { text: "以。。开始", value: "startswith" }, { text: "结束与", value: "endswith" }, { text: "包含", value: "contains" }, { text: "自定义过滤器", value: "customfilter" }],
                    NumberMenuOptions: [{ text: "等于", value: "equal" }, { text: "不平等", value: "notequal" }, { text: "少于", value: "lessthan" }, { text: "小于或等于", value: "lessthanorequal" }, { text: "比...更棒", value: "greaterthan" }, { text: "大于或等于", value: "greaterthanorequal" }, { text: "之间", value: "between" }, { text: "自定义过滤器", value: "customfilter" }],
                    GuidMenuOptions: [{ text: "等于", value: "equal" }, { text: "不平等", value: "notequal" }, { text: "自定义过滤器", value: "customfilter" }],
                    DateMenuOptions: [{ text: "等于", value: "equal" }, { text: "不平等", value: "notequal" }, { text: "少于", value: "lessthan" }, { text: "小于或等于", value: "lessthanorequal" }, { text: "比...更棒", value: "greaterthan" }, { text: "大于或等于", value: "greaterthanorequal" }, { text: "之间", value: "between" }, { text: "自定义过滤器", value: "customfilter" }],
                    DatetimeMenuOptions: [{ text: "等于", value: "equal" }, { text: "不平等", value: "notequal" }, { text: "少于", value: "lessthan" }, { text: "小于或等于", value: "lessthanorequal" }, { text: "比...更棒", value: "greaterthan" }, { text: "大于或等于", value: "greaterthanorequal" }, { text: "之间", value: "between" }, { text: "自定义过滤器", value: "customfilter" }],
                    Top10MenuOptions: [{ text: "最佳", value: "top" }, { text: "底部", value: "bottom" }],
                    title: "自定义过滤器",
                    PredicateAnd: "和",
                    PredicateOr: "要么",
                    OK: "好",
                    MatchCase: "相符",
                    Cancel: "取消",
                    NoResult: "未找到匹配",
                    CheckBoxStatusMsg: "并非所有的项目展示",
                    DatePickerWaterMark: "选择日期",
                    DateTimePickerWaterMark: "水印的DateTimePicker",
                    True: "真正",
                    False: "假",
                    AddToFilter: "添加当前选择进行过滤"
                };
                break;
            case "ejFileExplorer":
                ej.FileExplorer.Locale = ej.FileExplorer.Locale || {};
                ej.FileExplorer.Locale["zh-CN"] = {
                    Folder: "夹",
                    EmptyFolder: "这个文件夹是空的",
                    ProtectedFolder: "您目前没有访问此文件夹的权限",
                    EmptyResult: "没有符合您搜索的项",
                    SortBy: "排序方式",
                    Selected: "选择",
                    InvalidFileName: "文件名不能包含以下任何字符：\\/: *? \\ <> |",
                    ContextMenuSortBy: "排序方式",
                    Permission: "允许",
                    Back: "落后",
                    Forward: "前锋",
                    Upward: "向上",
                    Refresh: "刷新",
                    Addressbar: "地址栏",
                    Upload: "上传",
                    Rename: "重命名",
                    Delete: "删除",
                    Download: "下载",
                    Error: "错误",
                    PasteError: "错误",
                    UploadError: "错误",
                    RenameError: "错误",
                    Cut: "切",
                    Copy: "复制",
                    Paste: "糊",
                    Details: "详细信息",
                    Searchbar: "搜索栏",
                    Open: "打开",
                    Search: "搜索",
                    NewFolder: "新建文件夹",
                    Size: "尺寸",
                    RenameAlert: "请输入新的名称",
                    NewFolderAlert: "请输入新的文件夹名称，",
                    PasteReplaceAlert: "文件命名已存在。用新的文件替換舊的文件？",
                    UploadReplaceAlert: "文件命名已存在。用新的文件替換舊的文件？",
                    ContextMenuOpen: "打开",
                    ContextMenuNewFolder: "新建文件夹",
                    ContextMenuDelete: "删除",
                    ContextMenuRename: "重命名",
                    ContextMenuUpload: "上传",
                    ContextMenuDownload: "下载",
                    ContextMenuCut: "切",
                    ContextMenuCopy: "复制",
                    ContextMenuPaste: "糊",
                    ContextMenuGetinfo: "获取信息",
                    ContextMenuRefresh: "刷新",
                    ContextMenuOpenFolderLocation: "打开文件夹的位置",
                    Item: "项目",
                    Items: "项目",
                    GeneralError: "请参阅浏览器的控制台窗口的更多信息",
                    DeleteFolder: "你确定你要删除",
                    CancelPasteAction: "目标文件夹是源文件夹的子文件夹。",
                    OkButton: "好",
                    CancelButton: "取消",
                    YesToAllButton: "全部同意",
                    NoToAllButton: "全否",
                    YesButton: "是",
                    NoButton: "没有",
                    SkipButton: "跳跃",
                    Grid: "网格视图",
                    Tile: "瓷砖观点",
                    LargeIcons: "大图标",
                    Name: "名称",
                    Location: "位置",
                    Type: "物品种类",
                    Layout: "布局",
                    Created: "创建",
                    Accessed: "访问",
                    Modified: "改性",
                    DialogCloseToolTip: "关闭",
                    UploadSettings: {
                        buttonText: {
                            upload: "上传",
                            browse: "浏览",
                            cancel: "取消",
                            close: "关"
                        },
                        dialogText: {
                            title: "上传框",
                            name: "名称",
                            size: "尺寸",
                            status: "状态"
                        },
                        dropAreaText: "将文件拖放或点击上传",
                        filedetail: "所选文件大小过大。请选择有效的尺寸范围内的文件。",
                        denyError: "与#Extension扩展名的文件是不允许的。",
                        allowError: "只有#Extension扩展名的文件是允许的。",
                        cancelToolTip: "取消",
                        removeToolTip: "清除",
                        retryToolTip: "重试",
                        completedToolTip: "完成",
                        failedToolTip: "失败的",
                        closeToolTip: "关闭"
                    },
                };
                break;
            case "ejGantt":
                ej.Gantt.Locale = ej.Gantt.Locale || {};
                ej.Gantt.Locale["zh-CN"] = {
                    emptyRecord: "无记录可显示",
                    unassignedTask: "未分配任务",
                    alertTexts: {
                        indentAlert: "有没有横道记录被选中进行缩进",
                        outdentAlert: "有没有横道记录被选择执行凸出",
                        predecessorEditingValidationAlert: "循环相关性发生，请检查的前身",
                        predecessorAddingValidationAlert: "填写前身表中的所有列",
                        idValidationAlert: "重复ID",
                        dateValidationAlert: "无效的结束日期",
                        dialogResourceAlert: "填写资源表中的所有列"
                    },
                    columnHeaderTexts: {
                        taskId: "ID",
                        taskName: "任务名称",
                        startDate: "开始日期",
                        endDate: "结束日期",
                        resourceInfo: "资源",
                        duration: "为期",
                        status: "进展",
                        taskMode: "任务模式",
                        predecessor: "前辈",
                        type: "类型",
                        offset: "抵消",
                        baselineStartDate: "基线开始日期",
                        baselineEndDate: "基线结束日期",
                        WBS: "WBS",
                        WBSPredecessor: "WBS前身",
                        dialogCustomFieldName: "列名",
                        dialogCustomFieldValue: "值",
                        notes: "笔记",
                        taskType: "任务类型",
                        work: "工作",
                        unit: "单元",
                        effortDriven: "努力驱动",
                        resourceName: "资源名称"
                    },
                    editDialogTexts: {
                        addFormTitle: "新任务",
                        editFormTitle: "编辑任务",
                        saveButton: "保存",
                        deleteButton: "删除",
                        cancelButton: "取消",
                        addPredecessor: "添新",
                        removePredecessor: "清除",
                        addButton: "加"
                    },
                    columnDialogTexts: {
                        field: "领域",
                        headerText: "标题文本",
                        editType: "编辑类型",
                        filterEditType: "过滤器编辑类型",
                        allowFiltering: "允许过滤",
                        allowFilteringBlankContent: "允许过滤空白内容",
                        allowSorting: "允许排序",
                        visible: "可见",
                        width: "宽度",
                        textAlign: "文本对齐",
                        headerTextAlign: "头文字对齐",
                        columnsDropdownData: "列下拉数据",
                        dropdownTableText: "文本",
                        dropdownTableValue: "值",
                        addData: "加",
                        deleteData: "去掉",
                        allowCellSelection: "允许小区选择",
                        displayAsCheckbox: "显示为复选框",
                        clipMode: "剪辑模式",
                        tooltip: "工具提示",
                        showInColumnChooser: "在列选择器中显示",
                        headerTooltip: "标题工具提示"
                    },
                    editTypeTexts: {
                        string: "串",
                        numeric: "数字",
                        datePicker: "日期选择器",
                        dateTimePicker: "日期时间选择器",
                        dropdown: "落下",
                        boolean: "布尔值"
                    },
                    textAlignTypes: {
                        right: "对",
                        left: "剩下",
                        center: "中央"
                    },
                    clipModeTexts: {
                        clip: "夹",
                        ellipsis: "省略"
                    },
                    toolboxTooltipTexts: {
                        addTool: "加",
                        editTool: "编辑",
                        saveTool: "更新",
                        deleteTool: "删除",
                        cancelTool: "取消",
                        searchTool: "搜索",
                        indentTool: "缩进",
                        outdentTool: "凸出",
                        expandAllTool: "展开全部",
                        collapseAllTool: "全部收缩",
                        nextTimeSpanTool: "接下来时间跨度",
                        prevTimeSpanTool: "上一个时间跨度",
                        criticalPathTool: "关键路径",
                        excelExportTool: "Excel导出",
                        printTool: "打印",
                        pdfExportTool: "PDF导出"
                    },
                    durationUnitTexts: {
                        days: "天",
                        hours: "小时",
                        minutes: "分钟",
                        day: "天",
                        hour: "小时",
                        minute: "分钟"
                    },
                    durationUnitEditText: {
                        minute: ["m", "min", "分钟", "分钟"],
                        hour: ["h", "hr", "小时", "小时"],
                        day: ["d", "dy", "天", "天"]
                    },
                    workUnitTexts: {
                        days: "天",
                        hours: "小时",
                        minutes: "分钟"
                    },
                    taskTypeTexts: {
                        fixedWork: "固定办公",
                        fixedUnit: "固定单位",
                        fixedDuration: "固定期限"
                    },
                    effortDrivenTexts: {
                        yes: "是",
                        no: "没有"
                    },
                    contextMenuTexts: {
                        taskDetailsText: "任务详细信息...",
                        addNewTaskText: "添加新任务",
                        indentText: "缩进",
                        outdentText: "凸出",
                        deleteText: "删除",
                        aboveText: "以上",
                        belowText: "下面"
                    },
                    newTaskTexts: {
                        newTaskName: "新任务"
                    },
                    columnMenuTexts: {
                        sortAscendingText: "升序",
                        sortDescendingText: "降序",
                        columnsText: "列",
                        insertColumnLeft: "在左侧插入列",
                        insertColumnRight: "在右侧插入列",
                        deleteColumn: "删除列",
                        renameColumn: "重列"
                    },
                    taskModeTexts: {
                        manual: "手册",
                        auto: "汽车"
                    },
                    columnDialogTitle: {
                        insertColumn: "插入列",
                        deleteColumn: "删除列",
                        renameColumn: "重列"
                    },
                    deleteColumnText: "你确定要删除此列？",
                    okButtonText: "好",
                    cancelButtonText: "取消",
                    confirmDeleteText: "确认删除",
                    predecessorEditingTexts: {
                        fromText: "从",
                        toText: "至"
                    },
                    dialogTabTitleTexts: {
                        generalTabText: "一般",
                        predecessorsTabText: "前辈",
                        resourcesTabText: "资源",
                        customFieldsTabText: "自定义字段",
                        notesTabText: "笔记"
                    },
                    predecessorCollectionText: [
                            { id: "SS", text: "开始-开始", value: "开始-开始" },
                            { id: "SF", text: "开始-完", value: "开始-完" },
                            { id: "FS", text: "完-开始", value: "完-开始" },
                            { id: "FF", text: "完-完", value: "完-完" }
                    ],

                    linkValidationRuleText: {
                        taskBeforePredecessor: "您在'{1}'完成之前移动'{0}'开始，并且两个任务相关联。 因此，链接无法兑现。 选择下面的一个操作来执行",
                        taskAfterPredecessor: "您将'{0}'从'{1}'移开，两个任务相关联。 因此，链接无法兑现。 选择下面的一个操作来执行",
                    },
                    linkValidationDialogTitle: "验证编辑",
                    linkValidationRuleOptions: {
                        cancel: "取消，保留现有链接",
                        removeLink: "删除该链接并移动'{0}'开始于'{1}'。",
                        preserveLink: "移动'{0}'开始于'{1}'s并保持链接。"
                    },
                    connectorLineDialogText: {
                        from: "从",
                        to: "至",
                        taskLink: "任务链接",
                        lag: "落后",
                        okButtonText: "好",
                        cancelButtonText: "取消",
                        deleteButtonText: "删除",
                        title: "任务依赖"
                    }
                };
                break;
            case "ejGrid":
                ej.Grid.Locale = ej.Grid.Locale || {};
                ej.Grid.Locale["zh-CN"] = {
                    EmptyRecord: "无记录可显示",
                    GroupDropArea: "这里拖动列标题，组其列",
                    DeleteOperationAlert: "未选择要删除操作记录",
                    EditOperationAlert: "未选择要编辑操作记录",
                    SaveButton: "保存",
                    OKButton: "好",
                    CancelButton: "取消",
                    EditFormTitle: "详情 ",
                    AddFormTitle: "添加新记录",
                    GroupCaptionFormat: "{{:headerText}}: {{:key}} - {{:count}} {{if count == 1 }} 项目 {{else}} 项目 {{/if}} ",
                    BatchSaveConfirm: "你确定你要保存更改？",
                    BatchSaveLostChanges: "未保存的更改将丢失。你确定要继续吗？",
                    ConfirmDelete: "您确定要删除记录？",
                    CancelEdit: "你确定要取消的变化？",
                    PagerInfo: "{0}{1}页（{2}项）",
                    FrozenColumnsViewAlert: "冻结列应在GridView中区",
                    FrozenColumnsScrollAlert: "启用允许滚动，而使用冻结列",
                    FrozenNotSupportedException: "冻结行和列不支持分组，行模板，详细信息模板，等级电网和批量编辑",
                    Add: "加",
                    Edit: "编辑",
                    Delete: "删除",
                    Update: "更新",
                    Cancel: "取消",
                    Done: "做",
                    Columns: "列",
                    SelectAll: "（全选）",
                    PrintGrid: "打印",
                    ExcelExport: "Excel导出",
                    WordExport: "字出口",
                    PdfExport: "PDF导出",
                    StringMenuOptions: [{ text: "以。。开始", value: "StartsWith" }, { text: "的endsWith", value: "EndsWith" }, { text: "包含", value: "Contains" }, { text: "等于", value: "Equal" }, { text: "不平等", value: "NotEqual" }],
                    NumberMenuOptions: [{ text: "少于", value: "LessThan" }, { text: "比...更棒", value: "GreaterThan" }, { text: "小于或等于", value: "LessThanOrEqual" }, { text: "大于或等于", value: "GreaterThanOrEqual" }, { text: "等于", value: "Equal" }, { text: "不平等", value: "NotEqual" }, { text: "之间", value: "Between" }],
                    PredicateAnd: "和",
                    PredicateOr: "要么",
                    Filter: "过滤",
                    FilterMenuCaption: "筛选值",
                    FilterMenuFromCaption: "从",
                    FilterMenuToCaption: "至",
                    FilterbarTitle: "s滤波巴细胞",
                    MatchCase: "相符",
                    Clear: "明确",
                    ResponsiveFilter: "过滤",
                    ResponsiveSorting: "分类",
                    Search: "搜索",
                    DatePickerWaterMark: "选择日期",
                    EmptyDataSource: "因为列从数据源中自动生成的列网格生成的数据源绝不能以初始加载空",
                    ForeignKeyAlert: "更新后的值应该是一个有效的外键值",
                    True: "真正",
                    False: "假",
                    UnGroup: "点击这里取消组合",
                    AddRecord: "添加记录",
                    EditRecord: "编辑记录",
                    DeleteRecord: "删除记录",
                    Save: "保存",
                    Grouping: "组",
                    Ungrouping: "取消组合",
                    SortInAscendingOrder: "按升序排序",
                    SortInDescendingOrder: "按降序排序",
                    NextPage: "下一页",
                    PreviousPage: "上一页",
                    FirstPage: "第一页",
                    LastPage: "最后一页",
                    EmptyRowValidationMessage: "至少一个字段必须更新",
                    NoResult: "未找到匹配"
                };
                break;
            case "ejmobile":
                if (ej.mobile.Grid) {
                    ej.mobile.Grid.Locale = ej.mobile.Grid.Locale || {};
                    ej.mobile.Grid.Locale["zh-CN"] = {
                        emptyResult: "无记录可显示",
                        filterValidation: "输入有效过滤数据",
                        filterTypeValidation: "输入有效的过滤器的数据。当前的过滤器列式",
                        captionText: "项目",
                        spinnerText: "载入中...",
                        HideColumnAlert: "至少一列必须显示在格",
                        columnSelectorText: "隐藏列",
                        columnSelectorDone: "好",
                        columnSelectorCancel: "取消",
                        columnSelectorWarning: "警告",
                        filterOk: "好",
                        filterWarning: "警告"
                    };
                }
                if (ej.mobile.DatePicker) {
                    ej.mobile.DatePicker.Locale = ej.mobile.DatePicker.Locale || {};
                    ej.mobile.DatePicker.Locale["zh-CN"] = {
                        confirmText: "做",
                        Windows: {
                            cancelText: "取消",
                            headerText: "选择日期",
                            toolbarConfirmText: "DONE",
                            toolbarCancelText: "关闭"
                        },
                    };
                }
                if (ej.mobile.TimePicker) {
                    ej.mobile.TimePicker.Locale = ej.mobile.TimePicker.Locale || {};
                    ej.mobile.TimePicker.Locale["zh-CN"] = {
                        confirmText: "做",
                        AM: "上午",
                        PM: "下午",
                        Android: {
                            headerText: "设置时间"
                        },
                        Windows: {
                            cancelText: "取消",
                            headerText: "合理安排时间",
                            toolbarCancelText: "关闭",
                            toolbarConfirmText: "DONE"
                        },
                    };
                }
                break;
            case "ejNumericTextbox":
                ej.NumericTextbox.Locale = ej.NumericTextbox.Locale || {};
                ej.NumericTextbox.Locale["zh-CN"] = {
                    watermarkText: "输入值",
                };
                break;
            case "ejPivotChart":
                ej.PivotChart.Locale = ej.PivotChart.Locale || {};
                ej.PivotChart.Locale["zh-CN"] = {
                    Measure: "测量",
                    Row: "行",
                    Column: "柱",
                    Expand: "扩大",
                    Collapse: "崩溃",
                    Exit: "出口",
                    Value: "值",
                    ChartTypes: "圖表類型",
                    TDCharts: "3 D 圖表",
                    Tooltip: "工具提示",
                    Exporting: "匯出",
                    Line: "线",
                    Spline: "仿样",
                    Area: "区",
                    SplineArea: "花键区",
                    StepLine: "步线",
                    StepArea: "步区",
                    Pie: "馅饼",
                    Bar: "酒吧",
                    StackingArea: "堆叠区",
                    StackingColumn: "堆积柱",
                    StackingBar: "堆积柱状图",
                    Pyramid: "金字塔",
                    Funnel: "漏斗",
                    Doughnut: "甜甜圈",
                    Scatter: "分散",
                    Bubble: "球型罩",
                    TreeMap: "树形图",
                    ColumnTD: "柱 3D",
                    PieTD: "馅饼 3D",
                    BarTD: "酒吧 3D",
                    StackingBarTD: "堆积柱状图 3D",
                    StackingColumnTD: "堆积柱 3D",
                    Excel: "Excel",
                    Word: "Word",
                    Pdf: "PDF",
                    PNG: "PNG",
                    EMF: "EMF",
                    GIF: "GIF",
                    JPG: "JPG",
                    BMP: "BMP",
                    ZoomIn: "放大",
                    ZoomOut: "缩小",
                    Legend: "传说",
                    SmartLabels: "智能标签",
                    Interactions: "互动",
                    Zooming: "缩放",
                    Rotate45: "45 旋转",
                    Rotate90: "90 旋转",
                    Trim: "修剪",
                    MultipleRows: "多行",
                    Wrap: "包",
                    Hide: "隐藏",
                    WrapByWord: "用字包装",
                    CrossHair: "十字绣",
                    TrackBall: "跟踪球",
                    DisableTD: "禁用3D图表",
                    None: "没有",
                    Exception: "异常",
                    OK: "好"
                };
                break;
            case "ejPivotClient":
                ej.PivotClient.Locale = ej.PivotClient.Locale || {};
                ej.PivotClient.Locale["zh-CN"] = {
                    DoesNotBeginsWith: "未開始使用",
                    DoesNotEndsWith: "不會結尾",
                    DoesNotContains: "不包含",
                    DoesNotEquals: "不就等於",
                    IsGreaterThan: "大於",
                    IsGreaterThanOrEqualTo: "大於或等於",
                    IsLessThan: "不到",
                    IsLessThanOrEqualTo: "小於或等於",
                    ClearSorting: "清除排序",
                    ClearFilterFrom: "清除濾網",
                    SortAtoZ: "排序 A 到 Z",
                    SortZtoA: "排序 Z 到 A",
                    DeferUpdate: "推迟更新",
                    MDXQuery: "MDX查询",
                    Column: "柱",
                    Row: "行",
                    Slicer: "切片机",
                    CubeSelector: "立方选择",
                    ReportName: "报告名称",
                    NewReport: "新报告",
                    CubeDimensionBrowser: "多维数据集维度浏览器",
                    AddReport: "添加报告",
                    RemoveReport: "删除报告",
                    CannotRemoveSingleReport: "无法删除单个报表",
                    AreYouSureToDeleteTheReport: "您确定要删除的报告",
                    RenameReport: "重命名报告",
                    ChartTypes: "图表类型",
                    ToggleAxis: "切换轴",
                    ExportToExcel: "导出到Excel",
                    ExportToWord: "导出到Word",
                    ExportToPdf: "导出为PDF",
                    FullScreen: "全屏",
                    Grid: "格",
                    Chart: "图表",
                    OK: "好",
                    Cancel: "取消",
                    MeasureEditor: "编辑测量",
                    MemberEditor: "编辑成员",
                    Measures: "措施",
                    SortOrFilterColumn: "排序/过滤器（列）",
                    SortOrFilterRow: "排序/过滤器（行）",
                    SortingAndFiltering: "排序和过滤",
                    Sorting: "排序",
                    Measure: "测量",
                    Order: "订购",
                    Filtering: "过滤",
                    Condition: "条件",
                    PreserveHierarchy: "维护层次",
                    Ascending: "按升序排列",
                    Descending: "按降序排列",
                    Enable: "启用",
                    Disable: "禁用",
                    and: "和",
                    Line: "线",
                    Spline: "仿样",
                    Area: "区",
                    SplineArea: "花键区",
                    StepLine: "步线",
                    StepArea: "步区",
                    Pie: "馅饼",
                    Bar: "酒吧",
                    StackingArea: "堆叠区",
                    StackingColumn: "堆积柱",
                    StackingBar: "堆积柱状图",
                    Pyramid: "金字塔",
                    Funnel: "漏斗",
                    Doughnut: "甜甜圈",
                    Scatter: "分散",
                    Sort: "排序",
                    SelectField: "选择字段",
                    LabelFilterLabel: "显示项目的标签。",
                    ValueFilterLabel: "显示的项目。",
                    LabelFilters: "标注筛选器",
                    BeginsWith: "开始使用",
                    NotBeginsWith: "未开始",
                    EndsWith: "结束于",
                    NotEndsWith: "不是结束于",
                    Contains: "包含",
                    NotContains: "不包含",
                    ValueFilters: "过滤器的值。",
                    ClearFilter: "清除过滤器",
                    Equals: "等于",
                    NotEquals: "不等于",
                    GreaterThan: "大于",
                    GreaterThanOrEqualTo: "大于或等于",
                    LessThan: "低于",
                    LessThanOrEqualTo: "小于或等于",
                    Between: "之间",
                    NotBetween: "不能在",
                    Top10: "顶级计数",
                    Close: "关闭",
                    AddToColumn: "添加到列",
                    AddToRow: "添加的行",
                    AddToSlicer: "添加到切片机",
                    Value: "值",
                    EqualTo: "等于",
                    ReportList: "报告列表",
                    Bubble: "球型罩",
                    TreeMap: "树形图",
                    Alert: "警报",
                    MDXAlertMsg: "请添加测量、尺寸或层次结构中的适当的轴查看 MDX 查询。",
                    FilterSortRowAlertMsg: "尺寸没有找到行中的轴。 请添加维元素行内的轴上排序/过滤。",
                    FilterSortColumnAlertMsg: "尺寸中未找到列的轴。 请添加维元素列中的轴上排序/过滤。",
                    FilterSortcolMeasureAlertMsg: "请添加度量的列的轴",
                    FilterSortrowMeasureAlertMsg: "请添加的行中轴",
                    FilterSortElementAlertMsg: "找不到元素列中的轴。 请将元素添加在列中轴用于排序/过滤。",
                    FilterMeasureSelectionAlertMsg: "请选择有效的措施。",
                    FilterConditionAlertMsg: "请设置有效的条件。",
                    FilterStartValueAlertMsg: "请设置的开始值。",
                    FilterEndValueAlertMsg: "请设置的终止值。",
                    FilterInvalidAlertMsg: "无效的操作!",
                    SelectRecordAlertMsg: "請選擇有效的記錄。",
                    RecordName: "錄製名稱",
                    RemoveRecord: "移除記錄",
                    RenameRecord: "重新命名記錄",
                    Load: "負載",
                    Remove: "移除",
                    Save: "儲存",
                    SaveAs: "另存新檔",
                    SelectRecord: "選取記錄",
                    SelectReport: "選擇報告",
                    DBReport: "報表操作在 DB",
                    Rename: "重新命名",
                    Remove: "移除",
                    SetRecordNameAlertMsg: "請設定錄製名稱。",
                    SetReportNameAlertMsg: "請設定報表名稱。",
                    Search: "搜尋",
                    MultipleItems: "多個項目",
                    All: "所有",
                    NoReports: "沒有找到報表中 DB",
                    CalculatedMember: "計算成員",
                    Caption: "標題:",
                    Expression: "運算式:",
                    MemberType: "成員類型:",
                    FormatString: "格式字串:",
                    MultipleMeasure: "多個測量無法切片。",
                    DuplicateCalcMeasure: "計算會員的同名設定檔已經存在。",
                    EmptyField: "計算方式會員名稱或運算式不能是空的。",
                    EmptyFormat: "格式字串對計算會員是空的。",
                    Warning: "警告訊息",
                    Confirm: "計算會員與同名設定檔已經存在。 因為想要更換嗎 ?",
                    KPIs: "關鍵績效指標",
                    Collection: "收集",
                    Report: "報告",
                    AddCurrentSelectionToFilter: "添加當前選擇進行過濾",
                    SaveMsg: "成功儲存報表 !",
                    RenameMsg: "已成功重新命名報告 !",
                    RemoveMsg: "報表已成功刪除 !",
                    Success: "成功",
                        KpiAlertMsg: "您要移動的欄位不能放在這方面的報告",
                        NotAllItemsShowing: "不是所有的子节点都显示",
                        EditorLinkPanelAlert: "成員們都有 1000 多個項目進行一項或多項的父級。 只有第一張一千元的項目將顯示在每個父母。",
                        NamedSetAlert: "一个命名的设置不能被添加到数据透视表报告的同时，另一组命名基于相同的字段。 单击确定， ' <Set 1> ' 名为'删除'设置'和'添加 ' <Set 2> ' 组命名。",
                        Exception: "异常"
                };
                break;
            case "ejPivotGauge":
                ej.PivotGauge.Locale = ej.PivotGauge.Locale || {};
                ej.PivotGauge.Locale["zh-CN"] = {
                    RevenueGoal: "收入目标",
                    RevenueValue: "收入值",
                    Exception: "异常"
                };
                break;
            case "ejPager":
                ej.Pager.Locale = ej.Pager.Locale || {};
                ej.Pager.Locale["zh-CN"] = {
                    pagerInfo: "{0}{1}页（{2}项）",
                    firstPageTooltip: "转到第一页",
                    lastPageTooltip: "转到最后一页",
                    nextPageTooltip: "转到下一页",
                    previousPageTooltip: "转到上一页",
                    nextPagerTooltip: "转到下一页",
                    previousPagerTooltip: "转到上一页",
                };
                break;
            case "ejPdfViewer":
                ej.PdfViewer.Locale = ej.PdfViewer.Locale || {};
                ej.PdfViewer.Locale["zh-CN"] = {
                    toolbar: {
                        print: {
                            headerText: "打印",
                            contentText: "打印PDF文档。"
                        },
                        first: {
                            headerText: "第一",
                            contentText: "去到PDF文档的第一页。"
                        },
                        previous: {
                            headerText: "以前",
                            contentText: "去到PDF文档的前一页。"
                        },
                        next: {
                            headerText: "下一个",
                            contentText: "转至PDF文档的下一个页面。"
                        },
                        last: {
                            headerText: "持续",
                            contentText: "去到PDF文档的最后一页。"
                        },
                        zoomIn: {
                            headerText: "放大",
                            contentText: "放大到PDF文档。"
                        },
                        zoomOut: {
                            headerText: "缩小",
                            contentText: "缩小的PDF文档。"
                        },
                        pageIndex: {
                            headerText: "页码",
                            contentText: "当前页编号，以查看。"
                        },
                        zoom: {
                            headerText: "放大",
                            contentText: "放大或缩小的PDF文档。"
                        },
                        fitToWidth: {
                            headerText: '适合宽度',
                            contentText: '适合PDF页面到容器的宽度。',
                        },
                        fitToPage: {
                            headerText: '适合页面',
                            contentText: '适合PDF页面的容器。',
                        },
                        search: {
                            headerText: '搜索文本',
                            contentText: '搜索PDF页面中的文本.'
                        },
                        download: {
                            headerText: '下载',
                            contentText: '下载PDF文档.'
                        },
                        highlight: {
                            headerText: '突出显示文字',
                            contentText: '突出显示PDF页面中的文本。',
                        },
                        strikeout: {
                            headerText: '罢工文本',
                            contentText: '在PDF页面中敲击文本。',
                        },
                        underline: {
                            headerText: '下划线文字',
                            contentText: '在PDF页面中下划线文本。',
                        },
                        signature: {
                            headerText: '签名',
                            contentText: '添加或创建手写签名。',
                        },
                        select: {
                            headerText: '选择',
                            contentText: '文本选择工具。',
                        },
                        scroll: {
                            headerText: '摇摄',
                            contentText: '单击以平移文档',
                        },
                    },
                    contextMenu: {
                        copy: {
                            contentText: '复制',
                        },
                        googleSearch: {
                            contentText: '搜索google',
                        },
                        Find: {
                            contentText: '找:',
                        },
                        matchCase: {
                            contentText: '相符',
                        },
                        auto: {
                            contentText: '汽车',
                        },
                        openPopup: {
                            contentText: 'Open Pop-Up Note',
                        },
                        Delete: {
                            contentText: '删除',
                        },
                        properties: {
                            contentText: '属性....',
                        },
                    },
                    propertyWindow: {
                        underlineProperties: {
                            contentText: "下划线属性"
                        },
                        strikeOutProperties: {
                            contentText: "StrikeOut Properties"
                        },
                        highlightProperties: {
                            contentText: "highlight属性"
                        },
                        signatureProperties: {
                            contentText: "签名属性"
                        },
                        appearance: {
                            contentText: "出现"
                        },
                        general: {
                            contentText: "一般"
                        },
                        color: {
                            contentText: "颜色:"
                        },
                        opacity: {
                            contentText: "不透明度:"
                        },
                        author: {
                            contentText: "作者:"
                        },
                        subject: {
                            contentText: "学科:"
                        },
                        modified: {
                            contentText: "改性:"
                        },
                        ok: {
                            contentText: "好"
                        },
                        cancel: {
                            contentText: "取消"
                        },
                        locked: {
                            contentText: "锁定"
                        }
                    },
                    signatureWindow: {
                        Signature: {
                            contentText: "添加签名"
                        },
                        Add: {
                            contentText: "加"
                        },
                        clear: {
                            contentText: "明确"
                        },
                    },
					waitingPopup: {
						print: {
							contentText: "准备打印文档..."
						}
					}
                };
                break;
            case "ejPercentageTextbox":
                ej.PercentageTextbox.Locale = ej.PercentageTextbox.Locale || {};
                ej.PercentageTextbox.Locale["zh-CN"] = {
                    watermarkText: "输入值",
                };
                break;
            case "ejPivotGrid":
                ej.PivotGrid.Locale = ej.PivotGrid.Locale || {};
                ej.PivotGrid.Locale["zh-CN"] = {
                    Total: "總金額",
                    GrandTotal: "總計",
                    DoesNotBeginsWith: "未開始使用",
                    DoesNotEndsWith: "不會結尾",
                    DoesNotContains: "不包含",
                    DoesNotEquals: "不就等於",
                    IsGreaterThan: "大於",
                    IsGreaterThanOrEqualTo: "大於或等於",
                    IsLessThan: "不到",
                    IsLessThanOrEqualTo: "小於或等於",
                    ClearSorting: "清除排序",
                    ClearFilterFrom: "清除濾網",
                    SortAtoZ: "排序 A 到 Z",
                    SortZtoA: "排序 Z 到 A",
                    and: "和",
                    NumberFormatting: "數字格式",
                    FrozenHeaders: "冷凍標頭",
                    CellSelection: "手機選項",
                    CellContext: "儲存格內容",
                    ColumnResize: "欄位大小",
                    ExcelLikeLayout: "Excel 跟版面配置",
                    FrozenHeader: "冷凍標頭",
                    AdvancedFiltering: "進階篩選",
                    Amount: "金額",
                    Quantity: "數量",
                    Measures: "測量",
                    NumberFormats: "數字格式",
                    Exporting: "匯出",
                    FileName: "檔案名稱",
                    ToolTip: "工具提示",
                    RTL: "RTL",
                    CollapseByDefault: "收合依預設值",
                    EnableDisablePaging: "Enalbe / 停用呼叫器",
                    PagingOptions: "分頁選項",
                    CategoricalPageSize: "對於頁面大小",
                    SeriesPageSize: "系列頁面大小",
                    HyperLink: "超連結",
                    CellEditing: "編輯儲存格",
                    GroupingBar: "分組列",
                    SummaryCustomization: "摘要自訂",
                    SummaryTypes: "摘要類型",
                    SummaryType: "摘要類型",
                    EnableRowHeaderHyperlink: "啟用列標題超連結",
                    EnableColumnHeaderHyperlink: "「啟用」欄位標題超連結",
                    EnableValueCellHyperlink: "啟用值儲存格超連結",
                    EnableSummaryCellHyperlink: "啟用摘要芯超連結",
                    HideGrandTotal: "隱藏總計",
                    HideSubTotal: "隱藏小計",
                    Both: "兩個",
                    Sum: "總和",
                    Average: "平均時間",
                    Count: "計數",
                    Min: "最小值",
                    Max: "最大值",
                    Excel: "Excel",
                    Word: "Word",
                    PDF: "PDF",
                    CSV: "CSV",
                    ToolTipRow: "行",
                    ToolTipColumn: "柱",
                    ToolTipValue: "值",
                    SeriesPage: "系列的页面",
                    CategoricalPage: "分类页",
                    DragFieldHere: "这里拖动领域",
                    ColumnArea: "这里掉落列",
                    RowArea: "这里将行",
                    ValueArea: "这里降值",
                    OK: "好",
                    Cancel: "取消",
                    Remove: "清除",
                    ConditionalFormatting: "条件格式",
                    Condition: "有条件的类型",
                    Value1: "值1",
                    Value2: "值2",
                    Editcondtion: "编辑条件",
                    Backcolor: "背景颜色",
                    Borderrange: "边界范围",
                    Borderstyle: "边框样式",
                    Fontsize: "字体大小",
                    Fontstyle: "字体样式",
                    Bordercolor: "边框颜色",
                    Sort: "排序",
                    SelectField: "选择字段",
                    LabelFilterLabel: "显示项目的标签。",
                    ValueFilterLabel: "显示的项目。",
                    LabelFilters: "标注筛选器",
                    BeginsWith: "开始使用",
                    NotBeginsWith: "未开始",
                    EndsWith: "结束于",
                    NotEndsWith: "不是结束于",
                    Contains: "包含",
                    NotContains: "不包含",
                    ValueFilters: "过滤器的值。",
                    ClearFilter: "清除过滤器",
                    Equals: "等于",
                    NotEquals: "不等于",
                    GreaterThan: "大于",
                    GreaterThanOrEqualTo: "大于或等于",
                    LessThan: "低于",
                    LessThanOrEqualTo: "小于或等于",
                    Between: "之间",
                    NotBetween: "不能在",
                    AddToFilter: "添加到筛选器",
                    AddToRow: "添加的行",
                    AddToColumn: "添加到列",
                    AddToValues: "添加值",
                    Warning: "警告",
                    Error: "错误",
                    GroupingBarAlertMsg: "在被移动不能被放在这一领域的报告。",
                    Measures: "措施",
                    Expand: "展开",
                    Collapse: "崩溃",
                    NoValue: "没有值。",
                    Close: "关闭",
                    Goal: "目标",
                    Status: "状态",
                    Trend: "趋势",
                    Value: "值",
                    ConditionalFormattingErrorMsg: "给定的值不匹配",
                    ConditionalFormattingConformMsg: "您确定要删除所选的格式吗?",
                    EnterOperand1: "输入操作数1",
                    EnterOperand2: "输入操作数2",
                    ConditionalFormatting: "条件格式化",
                    AddNew: "添加新的",
                    Format: "格式",
                    NoMeasure: "请添加任何措施。",
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
                    Solid: "固体",
                    Dashed: "虚线",
                    Dotted: "带点",
                    Double: "双",
                    Groove: "凹槽",
                    Inset: "插入",
                    Outset: "一开始",
                    Ridge: "Ridge",
                    None: "无",
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
                    CubeDimensionBrowser: "多维数据集维度浏览器",
                    SelectHierarchy: "请选择层次结构",
                    CalculatedField: "经过计算的字段",
                    Name: "名称:",
                    Add: "添加",
                    Formula: "公式:",
                    Delete: "删除",
                    Fields: "字段:",
                    CalculatedFieldNameNotFound: "给定的计算字段名称未找到",
                    InsertField: "插入字段",
                    EmptyField: "请输入计算出的字段名或公式。",
                    NotValid: "给定的公式无效。",
                    NotPresent: "值字段中使用的任何的计算字段的公式在中不存在 PivotGrid",
                    Confirm: "经过计算的字段已存在具有相同名称的。 由于要更换吗?",
                    CalcValue: "计算字段可以插入到只有在价值区域字段",
                    MultipleItems: "多個項目",
                    All: "所有",
                    Search: "搜尋",
                    ColumnResize: "欄位大小",
                    Layouts: "版面配置",
                    NormalLayout: "標準配置",
                    NormalTopSummary: "正常上摘要版面配置",
                    NoSummaries: "無摘要版面配置",
                    Fontcolor: "字体颜色",
                    AddCurrentSelectionToFilter: "添加當前選擇進行過濾",
                    Months: "月",
                    Days: "天",
                    Quarters: "住处",
                    Years: "年份",
                    Qtr: "Qtr",
                    Quarter: "25美分硬币",
                    NoRecordsToDisplay: "无记录可显示。",
                    EnterFormatName: "輸入格式名稱",
                    FormatName: "格式名稱",
                    RemoveFormat: "移除格式",
                    Edit: "編輯",
						DuplicateFormatName: "重複的名稱格式",
						NotAllItemsShowing: "不是所有的子节点都显示",
						EditorLinkPanelAlert: "成員們都有 1000 多個項目進行一項或多項的父級。 只有第一張一千元的項目將顯示在每個父母。",
                        Exception: "异常"
                };
                break;
            case "ejPivotPager":
                ej.PivotPager.Locale = ej.PivotPager.Locale || {};
                ej.PivotPager.Locale["zh-CN"] = {
                    SeriesPage: "系列的页面",
                    CategoricalPage: "分类页",
                    Error: "错误",
                    OK: "“确定” 按钮",
                    Close: "关闭",
                    PageCountErrorMsg: "输入有效的页码。"
                };
                break;
            case "ejPivotSchemaDesigner":
                ej.PivotSchemaDesigner.Locale = ej.PivotSchemaDesigner.Locale || {};
                ej.PivotSchemaDesigner.Locale["zh-CN"] = {
                    DoesNotBeginsWith: "未開始使用",
                    DoesNotEndsWith: "不會結尾",
                    DoesNotContains: "不包含",
                    DoesNotEquals: "不就等於",
                    IsGreaterThan: "大於",
                    IsGreaterThanOrEqualTo: "大於或等於",
                    IsLessThan: "不到",
                    IsLessThanOrEqualTo: "小於或等於",
                    ClearSorting: "清除排序",
                    ClearFilterFrom: "清除濾網",
                    SortAtoZ: "排序 A 到 Z",
                    SortZtoA: "排序 Z 到 A",
                    and: "和",

                    PivotTableFieldList: "数据透视表字段列表",
                    ChooseFieldsToAddToReport: "选择字段添加到报告：",
                    DragFieldBetweenAreasBelow: "下面区域之间拖动字段：",
                    ReportFilter: "报告过滤器",
                    ColumnLabel: "列标签",
                    RowLabel: "行标签",
                    Values: "值",
                    DeferLayoutUpdate: "延迟布局更新",
                    Update: "更新",
                    Sort: "排序",
                    SelectField: "选择字段",
                    LabelFilterLabel: "显示项目的标签。",
                    ValueFilterLabel: "显示的项目。",
                    LabelFilters: "标注筛选器",
                    BeginsWith: "开始使用",
                    NotBeginsWith: "未开始",
                    EndsWith: "结束于",
                    NotEndsWith: "不是结束于",
                    Contains: "包含",
                    NotContains: "不包含",
                    ValueFilters: "过滤器的值。",
                    ClearFilter: "清除过滤器",
                    Equals: "等于",
                    NotEquals: "不等于",
                    GreaterThan: "大于",
                    GreaterThanOrEqualTo: "大于或等于",
                    LessThan: "低于",
                    LessThanOrEqualTo: "小于或等于",
                    Between: "之间",
                    NotBetween: "不能在",
                    Measures: "措施",
                    AlertMsg: "在被移动不能被放在这一领域的报告。",
                    Close: "关闭",
                    Goal: "目标",
                    Status: "状态",
                    Trend: "趋势",
                    Value: "值",
                    AddToFilter: "添加到筛选器",
                    AddToRow: "添加的行",
                    AddToColumn: "添加到列",
                    AddToValues: "添加值",
                    Warning: "警告",
                    OK: "“确定” 按钮",
                    Cancel: "取消",
                    Search: "搜尋",
                    Remove: "移除",
                        AddCurrentSelectionToFilter: "添加當前選擇進行過濾",
                        NotAllItemsShowing: "不是所有的子节点都显示",
                        EditorLinkPanelAlert: "成員們都有 1000 多個項目進行一項或多項的父級。 只有第一張一千元的項目將顯示在每個父母。",
                        NamedSetAlert: "一个命名的设置不能被添加到数据透视表报告的同时，另一组命名基于相同的字段。 单击确定， ' <Set 1> ' 名为'删除'设置'和'添加 ' <Set 2> ' 组命名。"
                };
                break;
            case "ejDiagram":
                ej.datavisualization.Diagram.Locale = ej.datavisualization.Diagram.Locale || {};
                ej.datavisualization.Diagram.Locale["zh-CN"] = {
                    cut: "切",
                    copy: "复制",
                    paste: "糊",
                    undo: "解开",
                    redo: "重做",
                    selectAll: "全选",
                    grouping: "分组",
                    group: "组",
                    ungroup: "取消组合",
                    order: "订购",
                    bringToFront: "BringToFront",
                    moveForward: "向前移动",
                    sendBackward: "后移",
                    sendToBack: "SendToBack",
                };
                break;
            case "ejChart":
                ej.datavisualization.Chart.Locale = ej.datavisualization.Chart.Locale || {};
                ej.datavisualization.Chart.Locale["zh-CN"] = {
                    zoomIn: "放大",
                    zoomOut: "缩小",
                    zoom: "放大",
                    pan: "泛",
                    reset: "重启"
                };
                break;
            case "ejMap":
                ej.datavisualization.Map.Locale = ej.datavisualization.Map.Locale || {};
                ej.datavisualization.Map.Locale["zh-CN"] = {
                    zoomIn: "放大",
                    zoomOut: "缩小",
                    panTop: "潘顶",
                    panBottom: "锅底",
                    panLeft: "潘左",
                    panRight: "潘右",
                    home: "家"
                };
                break;
            case "ejRangeNavigator":
                ej.datavisualization.RangeNavigator.Locale = ej.datavisualization.RangeNavigator.Locale || {};
                ej.datavisualization.RangeNavigator.Locale["zh-CN"] = {
                    intervals: {
                        quarter: {
                            longQuarters: "25美分硬币，",
                            shortQuarters: "Q"
                        },
                        week: {
                            longWeeks: "周，",
                            shortWeeks: "W¯¯"
                        },
                    },
                };
                break;
            case "ejReportViewer":
                ej.ReportViewer.Locale = ej.ReportViewer.Locale || {};
                ej.ReportViewer.Locale["zh-CN"] = {
                    toolbar: {
                        print: {
                            headerText: "打印",
                            contentText: "打印报告。"
                        },
                        exportformat: {
                            headerText: "出口",
                            contentText: "选择导出的文件格式。",
                            Pdf: "PDF",
                            Excel: "高强",
                            Word: "字",
                            Html: "HTML",
                            PPT: 'PPT',
                            CSV: 'CSV'
                        },
                        first: {
                            headerText: "第一",
                            contentText: "转至报告的第一页。"
                        },
                        previous: {
                            headerText: "以前",
                            contentText: "转至报告的前一页。"
                        },
                        next: {
                            headerText: "下一个",
                            contentText: "进入报告的下一页。"
                        },
                        last: {
                            headerText: "持续",
                            contentText: "转至报告的最后一页。"
                        },
                        documentMap: {
                            headerText: "文档结构图",
                            contentText: "显示或隐藏文档结构图。"
                        },
                        parameter: {
                            headerText: "参数",
                            contentText: "显示或隐藏参数窗格。"
                        },
                        zoomIn: {
                            headerText: "放大",
                            contentText: "放大到报告中。"
                        },
                        zoomOut: {
                            headerText: "缩小",
                            contentText: "缩小的报告。"
                        },
                        refresh: {
                            headerText: "刷新",
                            contentText: "刷新报表。"
                        },
                        printLayout: {
                            headerText: "打印布局",
                            contentText: "打印布局模式和正常模式之间切换。"
                        },
                        pageIndex: {
                            headerText: "页码",
                            contentText: "当前页编号，以查看。"
                        },
                        zoom: {
                            headerText: "放大",
                            contentText: "放大或缩小在报告中。"
                        },
                        back: {
                            headerText: "背部",
                            contentText: "返回到父报告。"
                        },
                        fittopage: {
                            headerText: "适合页面",
                            contentText: "适合报表页到容器。",
                            pageWidth: "页面宽度",
                            pageHeight: "整页"
                        },
                        pagesetup: {
                            headerText: "页面设置",
                            contentText: "选择页面设置选项来改变纸张大小，方向和页边距。"
                        },
                    },
                    pagesetupDialog: {
                        close: '关',
                        paperSize: '纸张大小',
                        height: '高度',
                        width: '宽度',
                        margins: '边距',
                        top: '最佳',
                        bottom: '底部',
                        right: '对',
                        left: '剩下',
                        unit: '在',
                        orientation: '方向',
                        portrait: '肖像',
                        landscape: '景观',
                        doneButton: '做',
                        cancelButton: '取消'
                    },
                    credential: {
                        userName: '用户名',
                        password: '密码'
                    },
                    waterMark: {
                        selectOption: '选择选项',
                        selectValue: '选择一个值'
                    },
                    errorMessage: {
                        startMessage: '报告查看器遇到一些加载此报告的问题。请',
                        middleMessage: ' 点击这里',
                        endMessage: '查看错误的详细信息',
                        closeMessage: '关闭此消息'
                    },
                    alertMessage: {
                        close: '关',
                        title: '的ReportViewer',
                        done: '好',
                        showDetails: '显示详细资料',
                        hideDetails: '隐藏细节',
                        reportLoad: '已加载报告:',
                        RVERR0001: 'ReportViewer无法加载报告',
                        RVERR0002: 'ReportViewer无法呈现报告',
                        RVERR0003: 'ajax回发中发生错误',
                        RVERR0004: '请为参数选择一个值',
                        RVERR0005: '{参数名称}参数缺少一个值',
                        RVERR0006: '请给出浮点数据类型输入',
                        RVERR0007: '请给出整数数据类型输入',
                        RVERR0008: 'ReportViewer无法验证数据源凭据',
                        RVERR0009: '他的利润率是重叠的或者他们不在报纸上。输入不同的保证金大小.',
                        RVERR0010: '请为参数输入一个值',
                        RVERR0011: '该参数不能为空',
                        RVERR0012: '为报告参数{parameterprompt}提供的值对其类型无效.'
                    },
                    selectAll: '全选',
                    viewButton: "查看报告",
                };
                break;
            case "ejReportDesigner":
                ej.ReportDesigner.Locale = ej.ReportDesigner.Locale || {};
                ej.ReportDesigner.Locale['zh-CN'] = {
                    itemPanel: {
                        waterMarkText: '搜索小工具',
                        noDataFound: '找不到匹配项...',
                        groupItems: {
                            basicItems: {
                                groupName: '基本项目',
                                Items: {
                                    'line': '线',
                                    'image': '图片',
                                    'textBox': '文本框',
                                    'rectangle': '长方形'
                                }
                            },
                            comparison: {
                                groupName: '对照',
                                Items: {
                                    'column': '柱',
                                    'bar': '酒吧',
                                    'stackedColumn': '堆积的列',
                                    'stackedBar': '堆积酒吧',
                                    'stackedColumnPercent': '堆积的列100%',
                                    'stackedBarPercent': '堆积酒吧100%'
                                }
                            },
                            proportion: {
                                groupName: '比例',
                                Items: {
                                    'pie': '馅饼',
                                    'explodedPie': '爆炸派',
                                    'doughnut': '甜甜圈',
                                    'pyramid': '金字塔',
                                    'funnel': '漏斗'
                                }
                            },
                            distribution: {
                                groupName: '分配',
                                Items: {
                                    'area': '区',
                                    'smoothArea': '平滑区域',
                                    'stackedArea': '堆积区域',
                                    'stackedAreaPercent': '堆积区域100%',
                                    'line': '线',
                                    'smoothLine': '平滑线',
                                    'steppedLine': '阶梯线',
                                    'lineWithMarkers': '与标记一致',
                                    'smoothLineWithMarkers': '流畅的线条与标记',
                                    'scatter': '分散',
                                    'bubble': '泡沫',
                                    'polar': '极性',
                                    'radar': '雷达'
                                }
                            },
                            dataRegions: {
                                groupName: '数据区域',
                                Items: {
                                    'grid': '格',
                                    'pivotgrid': '枢轴网格'
                                }
                            },
                            subReports: {
                                groupName: '子报告',
                                Items: {
                                    'subreport': '子报表'
                                }
                            }
                        }
                    },
                    toolbar: {
                        newReport: '新',
                        open: '打开',
                        openMenu: {
                            fromDevice: '从设备',
                            fromServer: '从服务器',
                        },
                        save: '保存',
                        saveMenu: {
                            saveLabel: '保存',
                            saveAs: '另存为',
                            saveAsMenu: {
                                saveToDevice: '到设备',
                                saveToServer: '到服务器'
                            }
                        },
                        cut: '切',
                        copy: '复制',
                        paste: '糊',
                        undo: '解开',
                        redo: '重做',
                        zoomIn: '放大',
                        zoomOut: '缩小',
                        deleteItem: '删除',
                        gridLine: '网格线',
                        header: '头',
                        footer: '页脚',
                        preview: '预习',
                        reportUpload: {
                            alertLabel: '上传',
                            alertMessage: '上传文件时出错。请重新上传'
                        }
                    },
                    newReport: {
                        cancel: '取消',
                        create: '创建',
                        title: '新报告',
                        fileName: '文件名',
                        waterMark: '报告名称',
                        close: '关',
                    },
                    reportAction: {
                        enableLink: '启用链接',
                        linkTo: '链接到',
                        report: '报告',
                        url: '网址'
                    },
                    linkReport: {
                        reportCaption: '报告',
                        setParameter: '设置参数'
                    },
                    imageProperty: {
                        basicSettings: {
                            categoryName: '基本设置',
                            source: '资源',
                            sourceTypes: {
                                external: '外部',
                                embedded: '嵌入式',
                                database: '数据库'
                            },
                            value: '值',
                            mimeType: 'MIME类型',
                            mimeTypes: {
                                bmp: '图像/ BMP',
                                jpeg: '图像/ JPEG',
                                gif: '图像/ GIF',
                                png: '图像/ PNG',
                                xPng: '图像/ X-PNG'
                            }
                        },
                        categoryName: '链接',
                        appearance: {
                            categoryName: '出现',
                            borderTypes: {
                                border: '边境',
                                borderLeft: '剩下',
                                borderTop: '最佳',
                                borderRight: '对',
                                borderBottom: '底部'
                            },
                            borderStyles: {
                                solid: '固体',
                                none: '没有',
                                double: '双',
                                dashed: '虚线',
                                dotted: '带点'
                            }
                        },
                        size: {
                            categoryName: '尺寸',
                            paddingTypes: {
                                padding: '填充',
                                paddingLeft: '剩下',
                                paddingTop: '最佳',
                                paddingRight: '对',
                                paddingBottom: '底部'
                            },
                            sizing: '浆纱',
                            sizeTypes: {
                                auto: '自动尺寸',
                                fit: '适合',
                                proportional: '适合比例',
                                clip: '夹'
                            }
                        },
                        position: {
                            categoryPosition: '位置',
                            positionLabel: '位置',
                            left: '剩下',
                            top: '最佳',
                            sizeLabel: '尺寸',
                            width: '宽度',
                            height: '高度'
                        },
                        visibility: {
                            categoryName: '能见度',
                            visible: '可见'
                        }
                    },
                    chartProperty: {
                        commonProperties: {
                            showBorder: '显示边框',
                            border: {
                                border: '边境',
                                borderLeft: '剩下',
                                borderTop: '最佳',
                                borderRight: '对',
                                borderBottom: '底部'
                            },
                            background: '背景',
                            font: '字形',
                            fontStyle: '字体样式',
                            labelRotation: '标签旋转',
                            categoryAxis: '类别轴',
                            valueAxis: '价值轴',
                            defaultText: '默认',
                            auto: '汽车',
                            borderStyles: {
                                solid: '固体',
                                none: '没有',
                                double: '双',
                                dashed: '虚线',
                                dotted: '带点',
                                dashDot: '短跑点',
                                dashDotDot: '点划线点'
                            },
                            horizontalAlignments: {
                                near: '近',
                                far: '远',
                            },
                            textAlignments: {
                                right: '对',
                                bottom: '底部',
                                center: '中央',
                                topLeft: '左上方',
                                topCenter: '顶尖中心',
                                topRight: '右上',
                                rightTop: '右上角',
                                rightCenter: '正确的中心',
                                rightBottom: '右下',
                                bottomLeft: '左下方',
                                bottomCenter: '底部中心',
                                bottomRight: '底部右侧',
                                leftTop: '左上方',
                                leftCenter: '左中心',
                                leftBottom: '左下',
                            },
                            fontStyleTypes: {
                                normal: '正常',
                                italic: '斜体'
                            },
                            fontWeightTypes: {
                                light: '光',
                                bold: '胆大'
                            }
                        },
                        basicSettings: {
                            categoryName: '基本设置',
                            showLegend: {
                                showLegendText: '显示图例',
                                title: '标题',
                                titleFont: '标题字体',
                                titleFontStyle: '标题字体样式',
                                titleAlignment: '标题对齐',
                                legendPosition: '传奇位置',
                                enableCustomBounds: '启用自定义边界'
                            },
                            chooseSeries: '选择系列',
                            showMarker: {
                                showMarkerText: '显示标记',
                                color: '颜色',
                                markerType: '标记类型',
                                markerTypes: {
                                    square: '广场',
                                    circle: '圈',
                                    diamond: '钻石',
                                    triangle: '三角形',
                                    cross: '交叉',
                                    star5: '明星5',
                                },
                                size: '尺寸'
                            },
                            showDataLabel: {
                                showDataLabelText: '显示数据标签',
                                dataLabelFormat: '格式',
                                dataLabelText: '标签',
                                dataLabelValueAsText: '使用值作为标签',
                                dataLabelTypes: {
                                    valueX: '#VALX',
                                    valueY: '#VALY',
                                    valueY2: '#VALY2',
                                    valueY3: '#VALY3',
                                    valueY4: '#VALY4',
                                    valueY5: '#VALY5',
                                    valueY6: '#VALY6',
                                    index: '#指数',
                                    percent: '#百分',
                                    total: '#总',
                                    axisLabel: '#轴标签'
                                }
                            },
                            enableSmartLabel: {
                                smartLabelText: '启用智能标签',
                                labelStyle: '标签样式',
                                value: '值',
                                smartLabelPositions: {
                                    outside: '外',
                                    inside: '内',
                                    outsideInColumn: '列在外面'
                                },
                                smartLabelStyles: {
                                    pieLabelStyle: '馅饼标签样式',
                                    funnelLabelStyle: '漏斗标签样式',
                                    pyramidLabelStyle: '金字塔标签样式',
                                    barLabelStyle: '酒吧标签样式',
                                    smartLabelStyle: '标签样式'
                                }
                            },
                            seriesBorder: '系列边框',
                            seriesColor: '系列颜色'
                        },
                        categoryName: '出现',
                        chartArea: {
                            categoryName: '图表区域',
                            colorPalette: '调色板',
                            colorPaletteTypes: {
                                earthTones: '地球色调',
                                excel: '高强',
                                grayScale: '灰阶',
                                pastel: '粉彩',
                                semiTransparent: '半透明',
                                berry: '浆果',
                                chocolate: '巧克力',
                                fire: '火',
                                seaGreen: '海绿色',
                                brightPastel: '明亮的粉彩',
                                pacific: '和平的',
                                pacificLight: '太平洋之光',
                                pacificSemiTransparent: '和平的 半透明',
                            }
                        },
                        title: {
                            categoryName: '标题',
                            showChartTitle: '显示图表标题',
                            titleText: '标题文本',
                            titlePosition: '标题位置'
                        },
                        axis: {
                            enableAxis: '启用轴',
                            axisTitle: '轴标题',
                            alignment: '对准',
                            lineStyle: '线条样式',
                            labelOverflowMode: '标签溢出模式',
                            overFlowModeTypes: {
                                trim: '修剪',
                                hide: '隐藏',
                            },
                            labelFont: '标签字体',
                            enableMajorTicks: '启用主要蜱虫',
                            enableMinorTicks: '启用小窍门',
                            tickProperties: {
                                tickSize: '勾号大小',
                                tickColor: '勾选颜色',
                                tickWidth: '宽度',
                                length: '长度'
                            },
                            tickPosition: '勾号位置'
                        },
                        gridLine: {
                            categoryName: '网格线',
                            gridLineStyle: {
                                minorGridLine: '显示小网格线',
                                majorGridLineStyle: '主要网格线样式',
                                minorGridLineStyle: '次要网格线样式'
                            }
                        },
                        pageBreak: {
                            categoryName: '分页符',
                            enablePageBreak: '启用分页符',
                            breakLocation: '休息地点',
                            breakLocationTypes: {
                                start: '开始',
                                end: '结束',
                                startAndEnd: '开始和结束',
                                between: '之间',
                            },
                            pageNumberReset: '页码重置',
                            pageName: '页面名称'
                        },
                        position: {
                            categoryPosition: '位置',
                            positionLabel: '位置',
                            left: '剩下',
                            top: '最佳',
                            sizeLabel: '尺寸',
                            width: '宽度',
                            height: '高度'
                        },
                        visibility: {
                            categoryName: '能见度',
                            visible: '可见'
                        }
                    },
                    lineProperty: {
                        basicSettings: {
                            categoryBasicSettings: '基本设置',
                            line: '线',
                            lineTypes: {
                                solid: '固体',
                                dashed: '虚线',
                                dotted: '带点'
                            },
                        },
                        position: {
                            categoryPosition: '位置',
                            positionLabel: '位置',
                            left: '剩下',
                            top: '最佳',
                            sizeLabel: '尺寸',
                            width: '宽度',
                            height: '高度'
                        },
                        visibility: {
                            categoryName: '能见度',
                            visible: '可见'
                        }
                    },
                    subReportProperty: {
                        basicSettings: {
                            categoryBasicSettings: '基本设置',
                            report: '报告',
                            setParameters: '设置参数...'
                        },
                        appearance: {
                            categoryAppearance: '出现',
                            borderTypes: {
                                border: '边境',
                                borderLeft: '剩下',
                                borderTop: '最佳',
                                borderRight: '对',
                                borderBottom: '底部'
                            },
                            borderStyles: {
                                solid: '固体',
                                none: '没有',
                                double: '双',
                                dashed: '虚线',
                                dotted: '带点'
                            }
                        },
                        noRows: {
                            noRowsLabel: '没有行',
                            font: '字形',
                            fontStyle: {
                                fontStyleLabel: '字体样式',
                                fontItem: {
                                    defaultStyle: '默认',
                                    fontNormal: '正常',
                                    italic: '斜体'
                                },
                                fontWeight: {
                                    defaultElement: '默认',
                                    normal: '正常',
                                    thin: '瘦',
                                    extraLight: '额外的光',
                                    light: '光',
                                    medium: '中',
                                    semiBold: '半粗体',
                                    bold: '胆大',
                                    extraBold: '特大号',
                                    heavy: '重',
                                }
                            },
                            textDecoration: {
                                textDecorationLabel: '文本装饰',
                                defaultDecoration: '默认',
                                none: '没有',
                                underLine: '强调',
                                overLine: '上划线',
                                lineThrough: '通过'
                            },
                            format: '格式',
                            lineHeight: '线条高度',
                            message: '信息',
                            paddingTypes: {
                                padding: '填充',
                                paddingLeft: '剩下',
                                paddingRight: '对',
                                paddingTop: '最佳',
                                paddingBottom: '底部',
                            },
                            textAlign: {
                                textAlignLabel: '文本对齐',
                                textAlignDefault: '默认',
                                textAlignGeneral: '一般',
                                textAlignLeft: '剩下',
                                textAlignRight: '对',
                                textAlignCenter: '中央'
                            },
                            verticalAlign: {
                                verticalAlignlabel: '垂直对齐',
                                verticalAlignDefault: '默认',
                                verticalAlignTop: '最佳',
                                verticalAlignMiddle: '中间',
                                verticalAlignBottom: '底部'
                            },
                            writingMode: {
                                writingModeLabel: '写模式',
                                writingModeDefault: '默认',
                                writingModeHorizontal: '横',
                                writingModeVertical: '垂直',
                                writingModeRotate: '旋转270'
                            }
                        },
                        visibility: {
                            categoryName: '能见度',
                            visible: '可见'
                        },
                        position: {
                            categoryPosition: '位置',
                            positionLabel: '位置',
                            left: '剩下',
                            top: '最佳',
                            sizeLabel: '尺寸',
                            width: '宽度',
                            height: '高度'
                        },
                        miscellaneous: {
                            categoryMiscellaneous: '杂',
                            keepTogether: '保持在一起'
                        }
                    },
                    rectangleProperty: {
                        basicSettings: {
                            categoryBasicSettings: '基本设置',
                            borderTypes: {
                                border: '边境',
                                borderLeft: '剩下',
                                borderTop: '最佳',
                                borderRight: '对',
                                borderBottom: '底部'
                            },
                            borderStyles: {
                                solid: '固体',
                                none: '没有',
                                double: '双',
                                dashed: '虚线',
                                dotted: '带点'
                            },
                            backGround: '背景'
                        },
                        pageBreak: {
                            pageBreak: '分页符',
                            enablePageBreak: {
                                enablePageBreak: '启用分页符',
                                breakLocation: {
                                    breakLocationLabel: '休息地点',
                                    none: '没有',
                                    start: '开始',
                                    end: '结束',
                                    startAndEnd: '开始和结束',
                                    between: '之间'
                                },
                                pageNumberReset: '页码重置'
                            },
                        },
                        position: {
                            categoryPosition: '位置',
                            positionLabel: '位置',
                            left: '剩下',
                            top: '最佳',
                            sizeLabel: '尺寸',
                            width: '宽度',
                            height: '高度'
                        },
                        visibility: {
                            categoryName: '能见度',
                            visible: '可见'
                        },
                        rectangleMiscellaneous: {
                            categoryMiscellaneous: '杂',
                            keepTogether: '保持在一起',
                            pageName: '页面名称'
                        }
                    },
                    browseFile: {
                        openFile: {
                            selectReport: '选择报告',
                            open: '打开',
                        },
                        saveFile: {
                            saveAsReport: '另存为报告',
                            name: '名称',
                            save: '保存',
                        },
                        close: '关',
                        cancel: '取消',
                        waterMark: '报告名称',
                        emptyMessage: '此类别为空',
                        alertMessage: {
                            reportServer: '报表服务器',
                            selectCategory: '请选择类别',
                        },
                        warningMessage: {
                            fileNameLabel: '一个物品 "',
                            fileNameExist: '.rdl“已经存在，你想替换现有的项目吗？',
                            populateCategory: '报表设计器无法从报表服务器检索资源',
                        }
                    },
                    expressionMenu: {
                        reset: '重启',
                        expression: '表达',
                        advanced: '高级'
                    },
                    propertyPanel: {
                        property: '性能',
                        data: '数据',
                        name: '名称',
                        toolTipStyle: '样式',
                        toolTipColor: '颜色',
                        toolTipWidth: '宽度',
                        setSorts: '设置分类',
                        setFilters: '设置过滤器',
                        advancedOptions: '高级选项',
                        expressionList: {
                            top: '最佳',
                            right: '对',
                            bottom: '底部',
                            left: '剩下',
                            style: '样式',
                            color: '颜色',
                            size: '尺寸',
                            fontFamily: '字体系列',
                            width: '宽度',
                            height: '高度',
                            weight: '重量',
                            image: '图片'
                        },
                        alertMessage: {
                            nameWarning: '名称不能为空',
                            nameAlert: '名称已存在',
                            nameValidation: '名称不应包含空格和特殊字符'
                        }
                    },
                    dataSource: {
                        newDatasource: '新数据库',
                        datasource: '数据源',
                        datasourceList: {
                            data: '数据',
                            contextMenu: {
                                editItem: '编辑',
                                deleteItem: '删除',
                                createDataSet: '创建数据集'
                            }
                        },
                        datasourceType: {
                            existOption: '现有',
                            newOption: '创建新的',
                            selectDatasoure: '选择数据源',
                            connectDatasource: '连接数据源',
                            datasourceType: '选择要连接的类型',
                            sqlLabel: 'SQL',
                            sqlCeLabel: 'SQLCE',
                            odbcLabel: 'ODBC',
                            oracleLabel: 'ORACLE',
                            oledbLabel: 'OLEDB',
                            xmlLabel: 'XML',
                            odataLabel: 'ODATA',
                            postSQLLabel: 'PostSQL',
                            sassLabel: '上海社会科学院',
                            sharedLabel: '共享'
                        },
                        datasourceConnection: {
                            newConnection: '新的连接',
                            editConnection: '编辑连接',
                            name: '名称',
                            save: '保存',
                            connect: '连',
                            cancel: '取消'
                        },
                        sqlDatasource: {
                            authenticationType: '认证类型',
                            window: '视窗',
                            sqlServer: 'SQL 服务器',
                            userName: '用户名',
                            password: '密码',
                            switchLabel: '数据源 预先小组',
                            switchAlert: '切换到视觉设计师将放弃手动更改 连接字符串。你是否想要使用视觉设计师 ?',
                            basicOption: {
                                serverName: '服务器名称',
                                savePassword: '保存密码',
                                database: '数据库',
                                advanceSwitch: '高级选项'
                            },
                            advanceOption: {
                                connectionString: '连接字符串',
                                promptLabel: '提示文字',
                                prompt: '提示',
                                none: '没有',
                                basicSwitch: '基本选项'
                            },
                            alertMessage: {
                                alertConnectionString: '指定连接字符串',
                                alertPrompt: '指定提示文本',
                                alertUserName: '指定用户名',
                                alertPassword: '指定密码',
                                alertServerName: '指定服务器名称',
                                alertDatabaseName: '指定数据库名称'
                            }
                        },
                        sqlceDatasource: {
                            connectionString: '连接字符串',
                            authenticationType: '认证类型',
                            authentication: '认证',
                            none: '没有',
                            password: '密码',
                            alertMessage: {
                                alertConnectionString: '指定连接字符串',
                                alertPassword: '指定密码'
                            }
                        },
                        odbcDatasource: {
                            connectionString: '连接字符串',
                            authenticationType: '认证类型',
                            authentication: '认证',
                            prompt: '提示',
                            none: '没有',
                            userName: '用户名',
                            password: '密码',
                            promptLabel: '提示文字',
                            alertMessage: {
                                alertConnectionString: '指定连接字符串',
                                alertPrompt: '指定提示文本',
                                alertUserName: '指定用户名',
                                alertPassword: '指定密码',
                            }
                        },
                        oracleDatasource: {
                            connectionString: '连接字符串',
                            authenticationType: '认证类型',
                            authentication: '认证',
                            prompt: '提示',
                            none: '没有',
                            userName: '用户名',
                            password: '密码',
                            promptLabel: '提示文字',
                            alertMessage: {
                                alertConnectionString: '指定连接字符串',
                                alertPrompt: '指定提示文本',
                                alertUserName: '指定用户名',
                                alertPassword: '指定密码',
                            }
                        },
                        oledbDatasource: {
                            connectionString: '连接字符串',
                            authenticationType: '认证类型',
                            authentication: '认证',
                            prompt: '提示',
                            none: '没有',
                            userName: '用户名',
                            password: '密码',
                            promptLabel: '提示文字',
                            alertMessage: {
                                alertConnectionString: '指定连接字符串',
                                alertPrompt: '指定提示文本',
                                alertUserName: '指定用户名',
                                alertPassword: '指定密码',
                            }
                        },
                        xmlDatasource: {
                            connectionString: '连接字符串',
                        },
                        odataDatasource: {
                            connectionString: '连接字符串',
                            alertMessage: '指定连接字符串'
                        },
                        postSQLDatasource: {
                            connectionString: '连接字符串',
                            authenticationType: '认证类型',
                            authentication: '认证',
                            prompt: '提示',
                            none: '没有',
                            userName: '用户名',
                            password: '密码',
                            promptLabel: '提示文字',
                            alertMessage: {
                                alertConnectionString: '指定连接字符串',
                                alertPrompt: '指定提示文本',
                                alertUserName: '指定用户名',
                                alertPassword: '指定密码',
                            }
                        },
                        sassDatasource: {
                            connectionString: '连接字符串',
                            authenticationType: '认证类型',
                            window: '视窗',
                            sqlServer: 'SQL 服务器',
                            prompt: '提示',
                            none: '没有',
                            userName: '用户名',
                            password: '密码',
                            promptLabel: '提示文字',
                            alertMessage: {
                                alertConnectionString: '指定连接字符串',
                                alertPrompt: '指定提示文本',
                                alertUserName: '指定用户名',
                                alertPassword: '指定密码',
                            }
                        },
                        sharedDatasource: {
                            datasource: '共享数据源',
                            alertMessage: '选择一个共享的数据源'
                        },
                        alertMessage: {
                            alertLabel: '数据源',
                            deleteValue: '删除数据源 \'',
                            alertConnectionFailed: '报表设计器 无法连接数据源',
                            nameWarning: '指定数据源名称',
                            nameAlert: '指定的名称已存在于“数据源”列表中',
                            nameValidation: '名称不应包含空格和特殊字符'
                        }
                    },
                    imageManager: {
                        headerText: '图像管理器',
                        addImageButton: '添加图片',
                        deleteImage: '删除嵌入的图像',
                        image: '图片',
                    },
                    linkParameter: {
                        title: '参数',
                        descriptionText: '报告参数',
                        addText: '加',
                        ok: '好',
                        cancel: '取消',
                        nameWaterMark: '参数名称',
                        valueWaterMark: '值',
                        errorMessage: '为此属性输入一个值',
                        closeToolTip: '关'
                    },
                    filter: {
                        title: '过滤',
                        descriptionLable: '包含满足以下条件的行.',
                        add: '加',
                        ok: '好',
                        cancel: '取消',
                        valueWaterMark: '值',
                        fieldWaterMark: '选择字段',
                        closeToolTip: '关',
                        errorMessage: {
                            booleanValidation: '值不是布尔值. ',
                            intValidation: '值不是整数.',
                            floatValidation: '价值不是浮动.',
                            dateTimeValidation: '值是无效的日期/时间格式. ',
                            topBottomFilter: 'Top％和Bottom％过滤器操作符需要一个float或一个整数数据类型.',
                            expressionValidation: '为表达式字段选择值'
                        },
                        operatorTypes: {
                            like: '喜欢',
                            topN: '最佳N',
                            bottomN: '底部N',
                            topPercent: '最佳%',
                            bottomPercent: '底部%',
                            between: '之间',
                            inFilter: '在',
                        }
                    },
                    dataPanel: {
                        itemTooltip: {
                            properties: '属性',
                            data: '数据',
                            parameters: '参数',
                            imageManager: '图像管理器',
                        },
                        dataSourceNewAlert: {
                            title: '数据源',
                            contentMessage: '你想取消创建数据源吗？ ?',
                        },
                        dataSourceEditAlert: {
                            title: '数据源',
                            contentMessage: "你想取消数据源编辑 ?",
                        },
                        dataSetNewAlert: {
                            title: '数据集',
                            contentMessage: '你想取消创建 数据集 吗 ?',
                        },
                        dataSetEditAlert: {
                            title: '数据集',
                            contentMessage: "你想取消 数据集 编辑吗 ?",
                        },
                        parameterNewAlert: {
                            title: '参数',
                            contentMessage: '你想取消参数创建 ?',
                        },
                        parameterEditAlert: {
                            title: '参数',
                            contentMessage: '你想取消参数编辑 ?',
                        }
                    },
                    dataSet: {
                        headerText: '数据',
                        newData: '添加数据集',
                        splitButtonMenu: {
                            sharedDataset: '共享',
                            createNewDataset: '创建新的'
                        },
                        shareDataset: {
                            headerText: '新数据',
                            save: '保存',
                            cancel: '取消',
                            nameLable: '名称',
                            sharedDatasetLabel: '共享数据集',
                            errorMessage: {
                                nameValidation: '指定 数据集 名称',
                                datasetValidation: '选择一个共享的数据源',
                                duplicateName: '指定的名称已经存在于数据集列表中',
                                specialCharacter: '名称不应包含空格和特殊字符'
                            }
                        },
                        contextMenu: {
                            edit: '编辑',
                            remove: '删除'
                        },
                        datasourceSwitcher: '数据源',
                        deleteDataset: '删除数据集',
                        deleteField: '删除字段'
                    },
                    reportViewer: {
                        toolbar: {
                            print: '打印',
                            exportformat: {
                                exportText: '出口',
                                Pdf: 'PDF',
                                Excel: '高强',
                                Word: '字',
                                Html: 'Html',
                                PPT: 'PPT',
                                CSV: 'CSV'
                            },
                            pageSetup: '页面设置',
                            gotoFirst: '转到第一',
                            gotoLast: '转到最后',
                            gotoNext: '转到下一步',
                            gotoPrevious: '转到上一页',
                            gotoParanet: '转到父母',
                            zoomIn: '放大',
                            zoomOut: '缩小',
                            fittopage: {
                                fitPageText: '适合页面',
                                pageWidth: "页面宽度",
                                pageHeight: "整个页面"
                            },
                            printLayout: '打印布局',
                            refresh: '刷新',
                            documentMap: '文档图',
                            parameter: '参数',
                            viewDesign: '关闭预览',
                        },
                        pagesetupDialog: {
                            close: '关',
                            paperSize: '纸张大小',
                            height: '高度',
                            width: '宽度',
                            margins: '边距',
                            top: '最佳',
                            bottom: '底部',
                            right: '对',
                            left: '剩下',
                            unit: '在',
                            orientation: '方向',
                            portrait: '肖像',
                            landscape: '景观',
                            doneButton: '好',
                            cancelButton: '取消'
                        },
                        credential: {
                            userName: '用户名',
                            password: '密码'
                        },
                        waterMark: {
                            selectOption: '选择选项',
                            selectValue: '选择一个值'
                        },
                        errorMessage: {
                            startMessage: '报表查看器在加载此报表时遇到一些问题。请',
                            middleMessage: '点击这里',
                            endMessage: '查看错误的详细信息',
                            closeMessage: '关闭此消息'
                        },
                        alertMessage: {
                            close: '关',
                            title: '的报告查看器',
                            done: '好',
                            showDetails: '显示详细资料',
                            hideDetails: '隐藏细节',
                            reportLoad: '加载报告：',
                            RVERR0001: '报告查看器 无法加载报告',
                            RVERR0002: '报告查看器 无法呈现报告',
                            RVERR0003: 'ajax回发中发生错误',
                            RVERR0004: '请为参数选择一个值',
                            RVERR0005: '{参数名称}参数缺少一个值',
                            RVERR0006: '请给出浮点数据类型输入',
                            RVERR0007: '请给出整数数据类型输入',
                            RVERR0008: '报告查看器 无法验证数据源凭据',
                            RVERR0009: '页边空白重叠或不在纸上。输入不同的保证金大小.',
                            RVERR0010: '请为参数输入一个值',
                            RVERR0011: '该参数不能为空',
                            RVERR0012: '为报告参数{参数提示}提供的值对其类型无效.'
                        },
                        selectAll: '全选',
                        viewButton: '查看报告'
                    },
                    sortData: {
                        sorting: '排序',
                        add: '加',
                        changeSortingOptions: '更改排序选项.',
                        sortBy: '排序方式',
                        thenBy: '然后通过',
                        direction: {
                            ascending: '上升',
                            descending: '降序',
                        },
                        chooseField: '选择字段',
                        errorMessage: "为表达式字段选择值",
                        ok: "好",
                        cancel: '取消',
                        close: '关',
                    },
                    groupData: {
                        grouping: '分组',
                        name: '名称',
                        label: '标签',
                        changeGroupingOptions: '更改分组选项.',
                        add: '加',
                        groupBy: '通过...分组',
                        andOn: '并且',
                        chooseField: '选择字段',
                        ok: "好",
                        cancel: '取消',
                        close: '关',
                        errorMessage: {
                            nameErrorMessage: "请输入名称",
                            expressionErrorMessage: "为表达式字段选择值"
                        },
                    },
                    alertMessage: {
                        yes: '是',
                        no: '没有',
                        showDetails: '显示详细资料',
                        hideDetails: '隐藏细节',
                        close: '关'
                    },
                    parameter: {
                        listPanel: {
                            headerText: '参数',
                            newParameter: '新参数',
                            editMenu: {
                                edit: '编辑',
                                remove: '删除'
                            },
                            alertTitle: '参数'
                        },
                        configurationPanel: {
                            newHeaderText: '新参数',
                            editHeaderText: '编辑参数',
                            nameLabel: '名称',
                            promptLable: '提示',
                            dataTypeLable: '数据类型',
                            blankValueLable: '允许空白值("")',
                            nullValueLable: '允许空值',
                            multipleValueLable: '允许多个值',
                            visibilityLable: '能见度',
                            assignValueLable: '分配值 >>',
                            save: '保存',
                            cancel: '取消',
                            visibility: {
                                visible: '可见',
                                hidden: '隐',
                                internal: '内部'
                            },
                            dataType: {
                                stringType: '串',
                                booleanType: '布尔',
                                dateTimeType: '约会时间',
                                integerType: '整数',
                                floatType: '浮动'
                            }
                        },
                        errorMessage: {
                            nameField: '请输入名称',
                            promptField: '请输入值',
                            nameAlreadyExists: '参数名称已存在',
                        },
                        warningMessage: {
                            specialCharacter: '名称不应包含空格和特殊字符',
                            multipleValueAlert: '指定了多个默认值。该参数不允许多个值. ',
                            nullValueAlert: '在值字段中，指定了空值。该参数不允许空值. ',
                        },
                        alertMessage: {
                            confirmNullCheck: '可用或默认值可能包含空值。是否要启用允许空值复选框？',
                            confirmBlankValue: '可用或默认值可能包含空白值。是否要启用空白值复选框？',
                            dataTypeChange: '更改数据类型将放弃对可用值和默认值所做的更改. 无论如何，你是否想改变数据类型?',
                            deleteAlert: '删除报告参数'
                        },
                        assignData: {
                            title: '参数',
                            availableValue: '可用值',
                            defaultValue: '默认值',
                            none: '没有',
                            specify: '指定',
                            query: '查询值',
                            ok: '好',
                            cancel: '取消',
                            availableFields: {
                                specifyDescriptionText: '添加参数的可用值:',
                                queryDescriptionText: '为可用值选择数据集和字段:',
                                nameFieldWaterMark: '标签',
                                valueFieldWaterMark: '值'
                            },
                            defaultFields: {
                                specifyDescriptionText: '添加参数的默认值:',
                                queryDescriptionText: '选择数据集和字段作为默认值:',
                                defValueWaterMark: '选择默认值'
                            },
                            datasetWaterMark: '选择数据集值',
                            valueWaterMark: '选择价值',
                            lableWaterMark: '选择标签',
                            add: '加',
                            datasetLableText: '数据集',
                            valueLableText: '值字段',
                            labelFieldText: '标签字段',
                            errorMessage: {
                                boolTypeCheck: '值不是布尔值. ',
                                dateTypeCheck: '值是无效的日期格式. ',
                                intTypeCheck: '值不是整数. ',
                                floatTypeCheck: '价值不是浮动. ',
                                multipleValuesCheck: '多值参数不能包含空值',
                                datasetFieldCheck: '数据集字段是必需的. ',
                                valueFieldCheck: '值字段是必需的. ',
                                syntaxLabelField: '标签字段中输入的值不是有效的标记语法. ',
                                syntaxValueField: '值字段中输入的值不是有效的标记语法. ',
                                blankValueCheck: '值字段为空。该参数不允许空白值. ',
                            },
                            closeToolTip: '关'
                        }
                    },
                    formatData: {
                        title: '格式对话框',
                        typeSelect: '类型',
                        typeFormat: {
                            numberType: {
                                numberType: '数',
                                decimalPlaces: '小数位',
                                negativeValues: '负值',
                                showZeroAs: {
                                    showZeroAs: '显示为零',
                                    none: '(没有)'
                                },
                                representation: '表示',
                                repDropDwn: {
                                    thousands: '成千上万',
                                    millions: '百万',
                                    billions: '数十亿',
                                },
                                useRegionFormating: '使用区域格式',
                                use1000Separator: '使用1000分隔符 (,)'
                            },
                            currency: {
                                currencyType: '货币',
                                decimalPlaces: '小数位',
                                negativeValues: '负值',
                                cultureCurrency: '货币文化',
                                showZeroAs: {
                                    none: '(没有)'
                                },
                                representation: '表示',
                                repDropDwn: {
                                    thousands: '成千上万',
                                    millions: '百万',
                                    billions: '数十亿',
                                },
                                useRegionFormating: '使用区域格式',
                                use1000Separator: '使用1000分隔符 (,)',
                                includeSpace: '包含一个空格'
                            },
                            date: {
                                dateType: '日期',
                                date: '日期'
                            },
                            time: {
                                timeType: '时间',
                                time: '时间'
                            },
                            percentage: {
                                percentageType: '百分比',
                                decimalPlaces: '小数位',
                                includeSpace: '包含一个空格'
                            },
                            scientific: {
                                scientificType: '科学',
                                decimalPlaces: '小数位'
                            },
                            custom: {
                                customType: '习惯',
                                customFormat: '自定义格式'
                            },
                        },
                        preview: '预习',
                        ok: '好',
                        cancel: '取消',
                        close: '关'
                    },
                    expression: {
                        title: '表达',
                        descriptionText: '设置表达式 : ',
                        optionLabel: '选项',
                        dataLabel: '数据',
                        descritionLabel: '描述',
                        exampleLabelText: '例',
                        ok: '好',
                        cancel: '取消',
                        textAreaWaterMark: '表达',
                        parameters: '参数',
                        optionWaterMark: '选择一个选项',
                        dataWaterMark: '选择一个数据',
                        reportData: '没有找到报告数据',
                        closeToolTip: '关',
                        category: {
                            builtInFields: '内置字段',
                            operators: '运营商',
                            functions: '功能'
                        },
                        description: {
                            executionTime: '报告开始运行的日期和时间。',
                            overallPageNumber: '当前整体页码只能用于页眉或页脚.',
                            overallTotalPages: '报告中的页面总数只能用于页眉和页脚.',
                            pageName: '报告中当前页面的名称只能用于页眉或页脚.',
                            pageNumber: '当前页码可通过使用分页符重置',
                            isInteractive: '指示当前呈现请求是否使用交互式格式的布尔值.',
                            renderName: '在 RS 报表服务器 配置文件中注册的渲染器的名称.',
                            reportFolder: '包含报告的文件夹的完整路径不包含报告服务器URL.',
                            reportName: '运行报告的报告服务器的URL',
                            reportServerUrl: '运行报表的报表服务器的URL.',
                            totalPages: '当前连续页面序列中的页面总数 只能在页眉和页脚中使用. 该号码可以通过使用分页符重置.',
                            language: '运行报表的客户端的语言ID.',
                            userID: '运行报告的用户的ID.',
                            powerNumberType: '将数字提高到另一个数字的大小.',
                            multiply: '相乘两个数字.',
                            integerDivision: '将两个数字相除并返回一个整数.',
                            modulus: '将两个数字相除并仅返回余数.',
                            add: '添加两个数字，可用于连接两个字符串.',
                            floatDivision: '将两个数字相除并返回一个浮点数.',
                            difference: '产生两个数字之间的差异或指示数字表达式的负值.',
                            lesser: '少于.',
                            lesserOrEqual: '小于或等于.',
                            greater: '比...更棒.',
                            greaterOrEqual: '大于或等于.',
                            equal: '等于',
                            notEqual: '不等于.',
                            like: '比较两个字符串.',
                            isOperator: '比较两个对象引用变量.',
                            expression: '生成两个表达式的字符串连接.',
                            stringType: '添加两个数字，它可以用来连接两个字符串。',
                            and: '对两个布尔表达式执行逻辑连接，或对两个布尔表达式执行逻辑连接',
                            not: '对布尔表达式执行逻辑否定或按位否定在数字表达式上.',
                            or: '用于对两个布尔表达式执行逻辑异或，或者对两个数字值.',
                            xor: '对两个布尔表达式执行逻辑排除操作，或按位排除在两个数字表达式上.',
                            andAlso: '对两个表达式执行短路逻辑连接.',
                            orElse: '用于对两个表达式执行短路逻辑析取.',
                            left: '对位模式执行算术左移.',
                            right: '对位模式执行算术右移.',
                            asc: '返回表示与某个字符对应的字符代码的整数值.',
                            ascW: '返回表示与某个字符对应的字符代码的整数值.',
                            chr: '返回与指定字符代码关联的字符.',
                            chrW: '返回与指定字符代码关联的字符.',
                            filter: '根据指定的过滤条件返回包含字符串数组子集的从零开始的数组.',
                            formatStringType: '根据格式字符串表达式中的指令返回格式化的字符串.',
                            currency: '返回使用货币符号格式化为货币值的表达式.在系统控制面板中定义.',
                            dateTime: '返回表示日期/时间值的字符串表达式.',
                            numberType: '返回格式为数字的表达式.',
                            percent: '返回格式为百分比的表达式（即乘以100）.',
                            getChar: '返回一个char值，表示来自提供的字符串中指定索引的字符.',
                            inStr: '返回一个整数，指定在另一个字符串中第一次出现的起始位置.',
                            inStrRev: '从右侧开始，返回一个字符串中第一次出现的位置.的字符串.',
                            join: '返回通过连接数组中的多个子字符串而创建的字符串.',
                            lCase: '返回转换为小写字符串或字符.',
                            leftStringType: '返回一个字符串，其中包含字符串左侧的指定数量的字符.',
                            stringLength: '返回一个整数，其中包含字符串中的字符数或数字.',
                            lSet: '返回包含调整为指定长度的指定字符串的左对齐字符串.',
                            leftTrim: '返回给定字符串中没有左侧尾随空格的字符串.',
                            middle: '返回包含字符串中指定数量字符的字符串.',
                            replace: '返回指定的子字符串已被另一个字符串替换的字符串.',
                            rightString: '从字符串的右侧返回一个包含指定数量字符的字符串.',
                            rightSet: '返回包含调整为指定长度的指定字符串的右对齐字符串.',
                            rightTrim: '返回给定字符串中没有右侧尾随空格的字符串.',
                            stringSpace: '返回由指定数量的空格组成的字符串.',
                            splitString: '返回包含指定数量的子字符串的基于零的一维数组.',
                            strComp: '根据字符串比较的结果返回-1,0或1.',
                            strConv: '返回按照指定转换的字符串.',
                            duplicateString: '返回由指定字符组成的字符串或对象，重复指定的次数.',
                            strReverse: '返回指定字符串的字符顺序颠倒的字符串.',
                            trim: '返回给定字符串中没有尾随空格的字符串.',
                            upperCase: '返回包含转换为大写字符的指定字符串的字符串或字符.',
                            cDate: '转换为日期.',
                            dateAdd: '返回包含添加了指定时间间隔的日期和时间值的日期值.',
                            dateDiff: '返回一个长整型值，指定两个日期值之间的时间间隔数.',
                            datePart: '返回包含给定日期值的指定组件的整数值.',
                            dateSerial: '返回表示指定年份，月份和日期的日期值，并将时间信息设置为.午夜（00:00:00.',
                            dateString: '根据您的系统返回或设置表示当前日期的字符串值.',
                            dateValue: '返回包含日期信息的日期值，该日期信息由字符串表示，并带有时间信息',
                            day: '返回从1到31的整数值，表示月份的某一天.',
                            format: '返回表示日期/时间值的字符串表达式.',
                            hour: '返回从0到23的整数值，表示一天中的小时.',
                            minute: '返回从0到59的整数值，表示小时的分钟数.',
                            month: '返回1到12的整数值，表示一年中的月份.',
                            monthName: '返回包含指定月份名称的字符串值.',
                            now: '根据您的系统返回包含当前日期和时间的日期值.',
                            second: '返回从0到59的整数值，表示分钟的秒数.',
                            timeOfDay: '根据您的系统返回或设置包含当前时间的日期值.',
                            timer: '返回一个double值，表示从午夜开始经过的秒数.',
                            timeSerial: '返回代表指定小时，分钟和秒的日期值，并设置日期信息.相对于1年1月1日.',
                            timeString: '根据您的系统返回或设置表示当前时间的字符串值.',
                            timeValue: '返回一个日期值，其中包含由字符串表示的时间信息，并设置日期信息.到第1年的1月1日.',
                            timeToday: '根据您的系统返回或设置包含当前日期的日期值.',
                            timeWeekday: '返回一个包含表示星期几的数字的整数值。',
                            timeWeekdayName: '返回包含指定星期几的名称的字符串值.',
                            year: '返回代表年份的从1到9999的整数值.',
                            abs: '返回单精度浮点数的绝对值.',
                            acos: '返回余弦为指定数字的角度.',
                            asin: '返回其正弦为指定数字的角度.',
                            atan: '返回其切线是指定数字的角度.',
                            atan2: '返回其切线是两个指定数字的商的角度.',
                            bigMultiply: '生成两个32位数字的完整产品.',
                            ceiling: '返回大于或等于指定整数的最小整数。',
                            cos: '返回指定角度的余弦.',
                            cosh: '返回指定角度的双曲余弦.',
                            exponent: '将e提升到指定的功率.',
                            fixNumberType: '返回数字的整数部分.',
                            floor: '返回小于或等于指定的最大整数',
                            integer: '返回数字的整数部分.',
                            logrithm: '返回指定数字的自然对数（基数e）.',
                            logrithm10: '返回指定数字的10进制对数.',
                            maximum: '返回指定表达式的所有非空值的最大值.',
                            minimum: '返回指定表达式的所有非空值中的最小值.',
                            power: '返回指定的数字，并将其提升到指定的功率.',
                            random: '返回一个单一类型的随机数.',
                            round: '将双精度浮点值舍入为最接近的整数.',
                            sign: '返回一个值，指示8位有符号整数的符号.',
                            sin: '返回指定角度的正弦值.',
                            sinh: '返回指定角度的双曲正弦.',
                            squareRoot: '返回指定数字的平方根.',
                            tangent: '返回指定角度的正切值.',
                            tangentH: '返回指定角度的双曲正切值.',
                            isArray: '返回一个布尔值，指示变量是否指向数组.',
                            isDate: '返回一个布尔值，指示表达式是否表示有效',
                            isNothing: '返回一个布尔值，指示表达式是否没有对象',
                            isNumeric: '返回一个布尔值，指示表达式是否可以评估为一个数字.',
                            flowChoose: '从参数列表中选择并返回一个值.',
                            flowIIf: '根据对表达式的评估返回两个对象中的一个.',
                            switchFlow: '计算表达式列表并返回相应的对象值到列表中的第一个表达式是真实的.',
                            avg: '返回指定表达式中所有非空值的平均值.',
                            count: '返回指定表达式中值的计数.',
                            countDistinct: '返回指定表达式中所有不同值的计数。',
                            countRows: '返回指定范围内的行数.',
                            first: '返回指定表达式的第一个值.',
                            last: '返回指定表达式的最后一个值.',
                            standardDev: '返回指定表达式的所有非空值的标准偏差。',
                            standardDevP: '返回指定表达式的所有非空值的总体标准偏差。',
                            sum: '返回指定表达式的值的总和.',
                            variance: '返回指定表达式的所有非空值的方差.',
                            varianceP: '返回指定表达式的所有非空值的总体方差.',
                            runningValue: '使用指定的函数来返回指定表达式的正在运行的聚合.',
                            aggregate: '按照数据提供者的定义返回指定表达式的自定义聚合.',
                            doubleDeclining: '使用双倍余额递减方法或您指定的其他方法，返回一个double值，用于指定特定时间段内资产的折旧。',
                            futureValue: '基于定期固定支付和固定利率，返回指定年金未来价值的双倍值。',
                            interestPayment: '根据定期付款，固定付款和固定利率返回指定给定期间年金利息支付的双倍值。',
                            numberOfPeriods: '根据定期固定支付和固定利率返回一个double值，指定年金的期数',
                            annuityPayment: '根据定期，固定付款和固定利率返回一个双重值，指定年金支付。',
                            principalPayment: '基于定期固定支付和固定利率，返回指定给定期间年金本金的双倍值。',
                            presentValue: '基于将来支付的定期，固定支付和固定利率，返回指定年金现值的双重值。',
                            rateOfInterest: '返回一个double值，指定年金的每期利率。',
                            straightLine: '返回一个double值，指定单个期间的资产的直线折旧。',
                            sumOfYearsDigits: '返回一个double值，用于指定指定时间段内资产的年数总和折旧。',
                            convertBool: '转换为布尔值.',
                            convertByte: '转换为字节.',
                            convertChar: '转换为字符.',
                            convertDate: '转换为日期.',
                            convertDouble: '转换为双倍.',
                            convertDecimal: '转换为十进制.',
                            convertInteger: '转换为整数.',
                            convertLong: '转换为长.',
                            convertObject: '转换为对象',
                            convertShort: '转换为空格.',
                            convertSingle: '转换为单个.',
                            convertString: '转换为字符串.',
                            fix: '返回数字的整数部分.',
                            hexaDecimal: '返回表示数字的十六进制值的字符串.',
                            integerPortion: '返回数字的整数部分.',
                            octal: '返回表示数字的八进制值的字符串.',
                            stringOfNumber: '返回表示数字的字符串。',
                            stringAsNumeric: '返回字符串中的数字作为适当类型的数值.',
                            inScope: '如果当前实例在指定范围内，则返回true.',
                            depthLevel: '返回表示当前深度级别的从零开始的整数.',
                            previous: '返回前一行数据的表达式的值.',
                            rowNumber: '返回指定范围内所有行的运行计数.'
                        }
                    },
                    dataAssign: {
                        measures: '措施',
                        dimensions: '外形尺寸',
                        search: '搜索',
                        xValue: 'X值 (s)',
                        yValue: 'Y值 (s)',
                        value: '值 (s)',
                        column: '柱',
                        row: '行 (s)',
                        size: '尺寸 (s)',
                        aggregate: '骨料',
                        expression: '表达',
                        filters: '过滤器',
                        sorts: '排序',
                        groups: '组',
                        dragOnDrop: '拖放'
                    },
                    reportProperty: {
                        basicSettings: {
                            categoryName: '基本设置',
                            background: '背景',
                            borderTypes: {
                                border: '边境',
                                borderLeft: '剩下',
                                borderTop: '最佳',
                                borderRight: '对',
                                borderBottom: '底部'
                            },
                            borderStyles: {
                                solid: '固体',
                                none: '没有',
                                double: '双',
                                dashed: '虚线',
                                dotted: '带点'
                            }
                        },
                        generalSettings: {
                            categoryName: '一般',
                            printFirstPage: '在第一页打印',
                            printLastPage: '在最后一页打印'
                        },
                        size: {
                            sizeLabel: '尺寸',
                            paddingTypes: {
                                padding: '填充',
                                paddingLeft: '剩下',
                                paddingRight: '对',
                                paddingTop: '最佳',
                                paddingBottom: '底部',
                            }
                        },
                        position: {
                            categoryPosition: '位置',
                            positionLabel: '位置',
                            left: '剩下',
                            top: '最佳',
                            sizeLabel: '尺寸',
                            width: '宽度',
                            height: '高度'
                        },
                        margin: {
                            categoryName: '余量',
                            categoryHeader: '余量',
                            types: {
                                left: '剩下',
                                right: '对',
                                bottom: '底部',
                                top: '最佳'
                            }
                        },
                        paperSize: {
                            orientation: '方向',
                            header: '纸张大小',
                            label: '纸张大小',
                            orientationTypes: {
                                landScape: '景观',
                                portrait: '肖像'
                            },
                            types: {
                                a3Size: 'A3',
                                a4Size: 'A4',
                                b4Size: 'B4(JIS)',
                                b5Size: 'B5(JIS)',
                                envelope: '信封 #10',
                                envelopeMonarch: '信封君主',
                                executive: '行政人员',
                                legal: '法律',
                                letter: '信',
                                tabloid: '小报',
                                custom: '习惯'
                            }
                        }
                    },
                    gridProperty: {
                        basicSettings: {
                            categoryName: '基本设置',
                            horizontalGridLine: '水平网格线',
                            verticalGridLine: '垂直网格线',
                            filters: '过滤器',
                            sorts: '排序'
                        },
                        columnSettings: {
                            categoryName: '列设置',
                            chooseColumn: '选择列',
                            columnName: '列名称',
                            format: '格式',
                            enableLink: '启用链接',
                            headerStyle: '标题样式',
                            cellStyle: '细胞样式',
                            summaryStyle: '摘要样式',
                        },
                        rowSettings: {
                            categoryName: '行设置',
                            chooseRow: '选择行',
                            summaryColumns: '摘要栏',
                            summaryFields: {
                                column: '柱',
                                expression: '表达'
                            }
                        },
                        appearance: {
                            categoryName: '出现',
                            showHeader: '显示标题',
                            borderTypes: {
                                border: '边境',
                                borderLeft: '剩下',
                                borderTop: '最佳',
                                borderRight: '对',
                                borderBottom: '底部'
                            },
                            borderStyles: {
                                solid: '固体',
                                none: '没有',
                                double: '双',
                                dashed: '虚线',
                                dotted: '带点'
                            },
                            cellBorder: '细胞边界',
                            AlterRow: '替代行',
                            AlterBackground: '替代背景',
                        },
                        pageBreak: {
                            categoryName: '分页符',
                            enablePageBreak: '启用分页符',
                            breakLocation: {
                                categoryName: '休息地点',
                                none: '没有',
                                start: '开始',
                                end: '结束',
                                startAndEnd: '开始和结束',
                                between: '之间'
                            },
                            pageNumberReset: '页码重置'
                        },
                        miscellaneous: {
                            categoryName: '杂',
                            noRowsMessage: '没有行消息',
                            pageName: '页面名称',
                            keepTogether: '保持在一起',
                            repeatColumnHeaders: '重复列标题',
                            fixedColumnHeaders: '固定列标题',
                            fixedRowHeaders: '固定行标题'
                        },
                        position: {
                            categoryPosition: '位置',
                            positionLabel: '位置',
                            left: '剩下',
                            top: '最佳',
                            sizeLabel: '尺寸',
                            width: '宽度',
                            height: '高度'
                        },
                        visibility: {
                            categoryName: '能见度',
                            visible: '可见'
                        },
                        font: {
                            categoryName: '字形',
                            defaultStyle: '默认',
                            normal: '正常',
                            italic: '斜体'
                        },
                        fontStyle: {
                            categoryName: '字体样式',
                            defaultStyle: '默认',
                            normal: '正常',
                            thin: '瘦',
                            extraLight: '额外的光',
                            light: '光',
                            medium: '中',
                            semiBold: '半粗体',
                            bold: '胆大',
                            extraBold: '特大号',
                            heavy: '重',
                        },
                        textDecoration: {
                            categoryName: '文本装饰',
                            defaultStyle: '默认',
                            none: '没有',
                            underline: '强调',
                            lineThrough: '通过',
                            overline: '上划线'
                        },
                        alignment: {
                            categoryName: '对准',
                            textAlignment: {
                                categoryName: '文本对齐',
                                defaultStyle: '默认',
                                left: '剩下',
                                center: '中央',
                                right: '对'
                            },
                            verticalAlignment: {
                                categoryName: '垂直对齐',
                                defaultStyle: '默认',
                                top: '最佳',
                                middle: '中间',
                                bottom: '底部'
                            }
                        },
                        padding: {
                            padding: '填充',
                            paddingLeft: '剩下',
                            paddingRight: '对',
                            paddingTop: '最佳',
                            paddingBottom: '底部',
                        },
                        enableSummaryRow: '启用汇总行'
                    },
                    pivotGridProperty: {
                        basicSettings: {
                            categoryName: '基本设置',
                            horizontalGridLine: '水平网格线',
                            verticalGridLine: '垂直网格线',
                            filters: '过滤器',
                            sorts: '排序'
                        },
                        appearance: {
                            categoryName: '出现',
                            showHeader: '显示标题',
                            borderTypes: {
                                border: '边境',
                                borderLeft: '剩下',
                                borderTop: '最佳',
                                borderRight: '对',
                                borderBottom: '底部'
                            },
                            borderStyles: {
                                solid: '固体',
                                none: '没有',
                                double: '双',
                                dashed: '虚线',
                                dotted: '带点'
                            },
                            cellBorder: '细胞边界',
                            AlterRow: '替代行',
                            AlterBackground: '替代背景'
                        },
                        pageBreak: {
                            categoryName: '分页符',
                            enablePageBreak: '启用分页符',
                            breakLocation: {
                                categoryName: '休息地点',
                                none: '没有',
                                start: '开始',
                                end: '结束',
                                startAndEnd: '开始和结束',
                                between: '之间'
                            },
                            pageNumberReset: '页码重置'
                        },
                        miscellaneous: {
                            categoryName: '杂',
                            noRowsMessage: '没有行消息',
                            pageName: '页面名称',
                            keepTogether: '保持在一起',
                            repeatColumnHeaders: '重复列标题',
                            fixedColumnHeaders: '固定列标题',
                            fixedRowHeaders: '固定行标题',
                            repeatRowHeaders: '重复行标题'
                        },
                        position: {
                            categoryPosition: '位置',
                            positionLabel: '位置',
                            left: '剩下',
                            top: '最佳',
                            sizeLabel: '尺寸',
                            width: '宽度',
                            height: '高度'
                        },
                        visibility: {
                            categoryName: '能见度',
                            visible: '可见'
                        },
                        font: {
                            categoryName: '字形',
                            defaultStyle: '默认',
                            normal: '正常',
                            italic: '斜体'
                        },
                        fontStyle: {
                            categoryName: '字体样式',
                            defaultStyle: '默认',
                            normal: '正常',
                            thin: '瘦',
                            extraLight: '额外的光',
                            light: '光',
                            medium: '中',
                            semiBold: '半粗体',
                            bold: '胆大',
                            extraBold: '特大号',
                            heavy: '重',
                        },
                        textDecoration: {
                            categoryName: '文本装饰',
                            defaultStyle: '默认',
                            none: '没有',
                            underline: '强调',
                            lineThrough: '通过',
                            overline: '上划线'
                        },
                        alignment: {
                            categoryName: '对准',
                            textAlignment: {
                                categoryName: '文本对齐',
                                defaultStyle: '默认',
                                left: '剩下',
                                center: '中央',
                                right: '对'
                            },
                            verticalAlignment: {
                                categoryName: '垂直对齐',
                                defaultStyle: '默认',
                                top: '最佳',
                                middle: '中间',
                                bottom: '底部'
                            }
                        },
                        padding: {
                            padding: '填充',
                            paddingLeft: '剩下',
                            paddingRight: '对',
                            paddingTop: '最佳',
                            paddingBottom: '底部',
                        },
                        link: '链接',
                        format: '格式',
                        summarySettings: {
                            categoryName: '摘要设置',
                            enableColumn: '启用摘要列',
                            columnStyle: '摘要列样式',
                            columnBorder: '摘要列边框',
                            chooseSummary: '选择摘要',
                            summaryColumns: '摘要栏',
                            enableRow: '启用汇总行',
                            rowStyle: '摘要行样式',
                            rowBorder: '摘要行边界'
                        },
                        groupSettings: {
                            summaryRows: '摘要行',
                            summaryStyle: '摘要样式',
                            summaryBorder: '摘要边框',
                            cellStyle: '细胞样式',
                            cellBorder: '细胞边界',
                            summaryTable: {
                                column: '柱',
                                expression: '表达'
                            }
                        },
                        columnGroupSettings: {
                            categoryName: '列组设置',
                            chooseGroup: '选择列组'
                        },
                        rowGroupSettings: {
                            categoryName: '行组设置',
                            chooseRowGroup: '选择行组',
                            rowName: '行名称'
                        },
                        columnSettings: {
                            categoryName: '列设置',
                            chooseColumn: '选择列',
                            header: '头',
                            headerStyle: '标题样式'
                        },
                        rowSettings: {
                            categoryName: '行设置',
                            chooseRow: '选择行'
                        },
                        cornerCellSettings: {
                            categoryName: '转角单元设置',
                            cellLabel: '细胞标签'
                        }
                    },
                    textBoxProperty: {
                        basicSettings: {
                            categoryName: '基本设置',
                            font: {
                                categoryName: '字形',
                                defaultStyle: '默认',
                                normal: '正常',
                                italic: '斜体'
                            },
                            fontStyle: {
                                categoryName: '字体样式',
                                defaultStyle: '默认',
                                normal: '正常',
                                thin: '瘦',
                                extraLight: '额外的光',
                                light: '光',
                                medium: '中',
                                semiBold: '半粗体',
                                bold: '胆大',
                                extraBold: '特大号',
                                heavy: '重',
                            },
                            textDecoration: {
                                categoryName: '文本装饰',
                                defaultStyle: '默认',
                                none: '没有',
                                underline: '强调',
                                lineThrough: '通过',
                                overline: '上划线'
                            },
                            format: '格式'
                        },
                        alignment: {
                            categoryName: '对准',
                            textAlignment: {
                                categoryName: '文本对齐',
                                defaultStyle: '默认',
                                left: '剩下',
                                center: '中央',
                                right: '对'
                            },
                            verticalAlignment: {
                                categoryName: '垂直对齐',
                                defaultStyle: '默认',
                                top: '最佳',
                                middle: '中间',
                                bottom: '底部'
                            }
                        },
                        appearance: {
                            categoryName: 'Appearance',
                            borderTypes: {
                                border: '边境',
                                borderLeft: '剩下',
                                borderTop: '最佳',
                                borderRight: '对',
                                borderBottom: '底部'
                            },
                            borderStyles: {
                                solid: '固体',
                                none: '没有',
                                double: '双',
                                dashed: '虚线',
                                dotted: '带点'
                            },
                            background: '背景'
                        },
                        link: '链接',
                        position: {
                            categoryPosition: '位置',
                            positionLabel: '位置',
                            left: '剩下',
                            top: '最佳',
                            sizeLabel: '尺寸',
                            width: '宽度',
                            height: '高度',
                            direction: {
                                categoryName: '方向',
                                leftToRight: '左到右',
                                rightToLeft: '右到左'
                            }
                        },
                        visibility: {
                            categoryName: '能见度',
                            visible: '可见'
                        },
                        miscellaneous: {
                            categoryName: '杂',
                            canGrow: '可以增长',
                            canShrink: '可以收缩',
                        },
                        paragraphSettings: {
                            categoryName: '段落设置',
                            textAlignment: {
                                categoryName: '文本对齐',
                                defaultStyle: '默认',
                                left: '剩下',
                                center: '中央',
                                right: '对'
                            },
                            indent: {
                                categoryName: '缩进',
                                leftIndent: '剩下',
                                rightIndent: '对'
                            },
                            space: {
                                categoryName: '空间',
                                topSpace: '最佳',
                                bottomSpace: '底部'
                            },
                            listLevel: {
                                categoryName: '列表级别',
                                zeroLevel: '',
                                oneLevel: '',
                                twoLevel: '',
                                threeLevel: '',
                                fourLevel: ''
                            },
                            listStyle: {
                                categoryName: '列表样式',
                                none: '没有',
                                numbered: '编号',
                                bulleted: '项目符号'
                            }
                        },
                        padding: {
                            padding: '填充',
                            paddingLeft: '剩下',
                            paddingRight: '对',
                            paddingTop: '最佳',
                            paddingBottom: '底部',
                        },
                        contextMenu: {
                            cut: '切',
                            copy: '复制',
                            paste: '糊',
                            expression: '表达'
                        }
                    },
                    designPanel: {
                        headerText: '头',
                        footerText: '页脚'
                    },
                    queryDesigner: {
                        storeParameter: {
                            title: '参数',
                            ok: '好',
                            cancel: '取消',
                            parameterLable: '参数',
                            nullLable: '空值',
                            valueLable: '值',
                            dataTypeLable: '数据类型',
                            closeToolTip: '关'
                        },
                        parameter: {
                            title: '参数',
                            ok: '好',
                            cancel: '取消',
                            parameterLable: '参数',
                            nullLable: '空值',
                            valueLable: '值',
                            closeToolTip: '关'
                        },
                        filter: {
                            title: '查询过滤器',
                            descriptionLable: '表格过滤器列表',
                            add: '加',
                            save: '好',
                            cancel: '取消',
                            nullLable: '空值',
                            trueLable: '真正',
                            falseLable: '假',
                            parameterTooltip: '包含作为参数',
                            closeToolTip: '关',
                            intOperatorType: {
                                equals: '等于',
                                doesNotEqual: '不相等',
                                greaterThan: '比...更棒',
                                greaterThanOrEqual: '大于或等于',
                                lessThan: '少于',
                                lessThanOrEqual: '小于或等于',
                                between: '之间',
                                notBetween: '不在'
                            },
                            stringOpertorType: {
                                equals: '等于',
                                startsWith: '以。。开始',
                                endWith: '以。。结束',
                                contains: '包含',
                                notContains: '不包含'
                            },
                            errorMessage: {
                                dateValidation: '值是无效的日期格式. ',
                                commonContent: '过滤器 ',
                                booleanValidation: ' 没有任何值可以过滤。请提供过滤器的值.',
                                stringValidation: ' 没有适当的值来过滤. '
                            }
                        },
                        previewArea: {
                            dataPreview: '数据预览',
                            noRecords: '无记录可显示',
                            executeRecords: '执行以预览记录',
                            record: '记录',
                            records: '记录',
                            retrieved: '检索',
                            loadRecord: '装载更多'
                        },
                        schemaArea: {
                            search: '搜索',
                            rename: '改名',
                            aggregation: '聚合',
                            dialogHeader: '数据集',
                            matchesFound: '找不到匹配项',
                            alertMessage: {
                                datasourceAlert: '选择一个 数据源 来配置 报告 数据集',
                                removeTable: '下面的关联表将随此删除',
                                duplicateName: '指定的列名已存在',
                                specialCharacter: '列名不应包含特殊字符.',
                                switcherAlert: '切换到视觉设计师将放弃对查询进行的手动更改. 无论如何，你是否想要使用视觉设计师?',
                                duplicateDatasetName: '指定的名称已存在于 数据集 列表中',
                                datasetSpecialCharacter: '名称不应包含空格和特殊字符'
                            },
                            errorMessage: {
                                specifyName: '指定列名称',
                                specifyDatasetName: '指定 数据集 名称',
                                previewFailed: '数据集 无法预览选定的表',
                                specifyQuery: '指定 数据集 查询',
                                selectTable: '选择表来保存 数据集',
                                queryFailed: '数据集 无法保存所选表的查询',
                                tableProcedure: '数据集 无法检索选定的表过程'
                            }
                        },
                        toolBar: {
                            datasourceLable: '数据源',
                            datasetName: '名称',
                            run: '跑',
                            join: '加入',
                            expression: '表达',
                            filter: '过滤',
                            code: '码',
                            finish: '完',
                            cancel: '取消',
                            datasourceWaterMark: '选择一个数据源'
                        },
                        joiner: {
                            title: '查询连接器',
                            descriptionLable: '表关系列表',
                            add: '加',
                            save: '好',
                            cancel: '取消',
                            addField: '添加字段',
                            closeToolTip: '关',
                            leftFieldWaterMark: '左场',
                            rightFieldWaterMark: '右场',
                            operatorWaterMark: '操作者',
                            joinTypeWaterMark: '加入类型',
                            leftTableWaterMark: '左表',
                            rightTableWaterMark: '右表',
                            joinTypes: {
                                inner: '内',
                                outer: '左外',
                                rightOuter: '正确的外面',
                                fullOuter: '完全外面'
                            },
                            errorMessage: {
                                removeField: '每个关系必须有一个现场条件。所以，它不允许删除这个字段',
                                noRelationAlert: ' 与其他表格无关',
                                selectLeftTable: '选择左表值',
                                selectRightTable: '选择正确的表值',
                                selectRelation: '选择表格的关系',
                                selectLeftColumn: '选择字段行的左列值 #',
                                selectRightColumn: '选择字段行的右列值 #',
                                selectOperator: '选择字段行的运算符 #',
                                relationExists: '表之间已经存在关系'
                            }
                        },
                        credentialDialog: {
                            title: '凭据对话框',
                            userName: '用户名',
                            password: '密码',
                            userNameWaterMark: '用户名',
                            passwordWaterMark: '密码',
                            userNameErrorMessage: '请输入用户名',
                            passwordErrorMessage: '请输入密码',
                            connect: '连',
                            close: '关'
                        },
                        queryExpression: {
                            title: '查询表达式',
                            functionLabel: '功能',
                            columnLabel: '列设置',
                            expressionLabel: '表达',
                            nameLabel: '名称',
                            descriptionLabel: '描述 ',
                            exampleLabelText: '例',
                            ok: '保存',
                            cancel: '取消',
                            add: '加',
                            textAreaWaterMark: '查询表达式',
                            nameFieldWaterMark: '表达式名称',
                            closeToolTip: '关',
                            errorMessage: {
                                saveAlert: '表达式不被保存。你想保存并继续?',
                                bracketSyntax: '打开/关闭支架附近的语法不正确（s）.',
                                parseAlert: '报表设计器 无法解析指定的表达式.',
                                nameAlert: '姓名字段不能为空',
                                emptyAlert: '表达字段不应该是空的',
                                duplicateName: '指定的表达式名称已经存在',
                                specialCharacter: '表达式名称不应包含特殊字符.',
                                referenceError: '列不能在其自己的表达式中引用!',
                                invalidSyntax: '打开/关闭括号附近的语法无效.',
                                retrieveExpression: '报表设计器 无法检索指定的表达式'
                            },
                            datasetTitle: '数据集',
                            expressions: {
                                all: '所有',
                                numbers: '数字',
                                logical: '合乎逻辑',
                                conditional: '条件',
                                date: '日期',
                                stringType: '串',
                                text: '文本',
                                miscellenuous: '杂 ',
                                abs: '返回给定表达式的绝对值.',
                                acos: '返回给定数字表达式的反余弦（也称为反余弦）.',
                                asin: '返回给定数字表达式的反正弦（也称为反正弦）.',
                                atan: '返回给定数字表达式的反正切（也称为反正切）.',
                                cos: '返回以给定表达式的弧度指定的角度的余弦.',
                                degree: '以给定数值表达式的弧度指定的角度返回角度度数.',
                                exponent: '返回给定表达式的指数值. ',
                                logrithm: '将给定表达式的对数返回给指定的基数.',
                                pi: '返回PI的常量值.',
                                power: '将给定表达式（表达式1）的值返回到指定的功率（表达式2）. ',
                                radians: '返回给定数字表达式中以度数指定的角度的弧度角度.',
                                round: '返回一个舍入值.',
                                sign: '返回表示给定数字表达式的正数（+1），零（0）或负数（-1）符号的值.',
                                sin: '返回以给定表达式的弧度指定的角度的正弦值.',
                                squareRoot: '返回给定数字表达式的平方根.',
                                tan: '返回给定数字表达式的正切值.',
                                ifCondition: '根据对表达式的评估，返回true部分或false部分.',
                                ifNull: '如果表达式是numeric / string / date，则返回第一个表达式. 如果第一个表达式为NULL，则返回第二个表达式.',
                                isNotNull: '如果numeric / string / date_expression为NULL，则返回表示false的字符串; 否则表示为true.',
                                isNull: '如果numeric / string / date_expression为NULL，则返回表示true的字符串; 否则表示false.',
                                and: '如果两个表达式都计算为true，则返回true.',
                                notOperation: '返回正在评估的表达式的反转逻辑值.',
                                orOperation: '如果任何表达式的计算结果为true，则返回true.',
                                addDate: '将天数添加到指定的日期.',
                                name: '返回表示给定日期表达式的指定日期部分的字符串.',
                                part: '返回表示给定日期表达式的指定日期部分的整数值.',
                                sub: '返回从指定日期减去的日期.',
                                day: '返回表示指定日期的日期部分的数值.',
                                daydiff: '返回表示两个指定日期之间差异的数字值.',
                                hour: '以整数形式返回给定日期的小时.',
                                minute: '返回一个数字值，表示由指定的日期表达式产生的日期的分钟部分.',
                                month: '返回表示指定日期表达式的日期的月份部分的数值.',
                                now: '返回当前的日期和时间.',
                                today: '返回当前日期.',
                                year: '返回表示指定日期表达式所产生日期的年份部分的数值.',
                                char: '将给定的整数ASCII码转换为一个字符.',
                                concat: '返回由两个或更多字符串值连接产生的字符串值.',
                                contains: '如果给定的字符串表达式包含指定的字符串表达式，则返回true.',
                                endsWith: '如果给定的字符串表达式以指定的子字符串表达式结束，则返回true.',
                                left: '返回给定字符串表达式开始处的指定字符数.',
                                length: '返回给定表达式的自然对数.',
                                lower: '从给定的字符串表达式中返回小写字母转换后的字符串值.',
                                leftTrim: '返回从字符串表达式中删除前导空白的字符串值.',
                                maximum: '返回给定表达式中的最大值.',
                                minimum: '返回给定表达式中的最小值.',
                                right: '返回给定字符串表达式末尾的指定字符数.',
                                rightTrim: '返回给定字符串中没有右侧尾随空格的字符串.',
                                startswith: '如果给定的字符串表达式以指定的子字符串表达式开头，则返回true.',
                                subString: '返回从给定字符串表达式的特定索引开始的特定字符串长度.',
                                upper: '从给定的字符串表达式中返回大写字母转换后的字符串值.'
                            }
                        }
                    }
                };
                break;
            case "ejRibbon":
                ej.Ribbon.Locale = ej.Ribbon.Locale || {};
                ej.Ribbon.Locale["zh-CN"] = {
                    CustomizeQuickAccess: "自定义快速访问工具栏",
                    RemoveFromQuickAccessToolbar: "从快速访问工具栏删除",
                    AddToQuickAccessToolbar: "添加到快速访问工具栏",
                    ShowAboveTheRibbon: "上面显示功能区",
                    ShowBelowTheRibbon: "下面显示功能区",
                    MoreCommands: "更多命令..."
                };
                break;
            case "ejKanban":
                ej.Kanban.Locale = ej.Kanban.Locale || {};
                ej.Kanban.Locale["zh-CN"] = {
                    EmptyCard: "没有要显示的即时贴",
                    SaveButton: "保存",
                    CancelButton: "取消",
                    EditFormTitle: "详细信息 ",
                    AddFormTitle: "添加新卡",
                    SwimlaneCaptionFormat: "- {{:count}}{{if count == 1 }} 项目 {{else}} 项目 {{/if}}",
                    FilterSettings: "过滤器:",
                    FilterOfText: "的",
                    Max: "最大",
                    Min: "最小",
                    Cards: "  牌",
                    ItemsCount: "项目计数 :",
                    Unassigned: "未分配",
                    AddCard: "添加卡",
                    EditCard: "编辑卡片",
                    DeleteCard: "删除卡",
                    TopofRow: "行顶部",
                    BottomofRow: "行的底部",
                    MoveUp: "提升",
                    MoveDown: "下移",
                    MoveLeft: "向左移动",
                    MoveRight: "向右移",
                    MovetoSwimlane: "移动到Swimlane",
                    HideColumn: "隐藏列",
                    VisibleColumns: "可见列",
                    PrintCard: "打印卡"
                };
                break;
            case "ejRTE":
                ej.RTE.Locale = ej.RTE.Locale || {};
                ej.RTE.Locale["zh-CN"] = {
                    bold: "胆大",
                    italic: "斜体",
                    underline: "强调",
                    strikethrough: "删除线",
                    superscript: "标",
                    subscript: "标",
                    justifyCenter: "对齐文本中心",
                    justifyLeft: "对齐文本左",
                    justifyRight: "文本对齐正确",
                    justifyFull: "辩解",
                    unorderedList: "插入无序列表",
                    orderedList: "插入有序列表",
                    indent: "增加缩进",
                    fileBrowser: "文件浏览器",
                    outdent: "减少缩进",
                    cut: "切",
                    copy: "复制",
                    paste: "糊",
                    paragraph: "段",
                    undo: "解开",
                    redo: "重做",
                    upperCase: "大写",
                    lowerCase: "小写",
                    clearAll: "全部清除",
                    clearFormat: "清除格式",
                    createLink: "插入/编辑超链接",
                    removeLink: "删除超级链接",
                    image: "插入图片",
                    video: "插入视频",
                    editTable: "编辑表属性",
                    embedVideo: "下面粘贴您的嵌入代码",
                    viewHtml: "查看HTML",
                    fontName: "选择字体系列",
                    fontSize: "选择字号",
                    fontColor: "选择颜色",
                    format: "格式",
                    backgroundColor: "背景颜色",
                    style: "样式",
                    deleteAlert: "你确定要清除所有内容？",
                    copyAlert: "你的浏览器不支持剪贴板的直接访问。请使用Ctrl+ C快捷键，而不是复制操作。",
                    pasteAlert: "你的浏览器不支持剪贴板的直接访问。请用CTRL+ V键盘快捷键，而不是粘贴操作。",
                    cutAlert: "你的浏览器不支持剪贴板的直接访问。请用CTRL+ X键盘快捷键，而不是剪切操作。",
                    videoError: "该文本区域不能为空",
                    imageWebUrl: "网址",
                    imageAltText: "替换文本",
                    dimensions: "外形尺寸",
                    constrainProportions: "约束比例",
                    linkWebUrl: "网址",
                    imageLink: "形象链接",
                    imageBorder: "图像边界",
                    imageStyle: "样式",
                    linkText: "文本",
                    linkTooltipLabel: "提示",
                    html5Support: "此工具图标只能在支持HTML5的浏览器支持",
                    linkOpenInNewWindow: "在新窗口中打开链接",
                    tableColumns: "节数列",
                    tableRows: "节数行",
                    tableWidth: "宽度",
                    tableHeight: "高度",
                    tableCellSpacing: "CELLSPACING",
                    tableCellPadding: "CELLPADDING",
                    tableBorder: "边境",
                    tableCaption: "标题",
                    tableAlignment: "对准",
                    textAlign: "文本对齐",
                    dialogUpdate: "更新",
                    dialogInsert: "插入",
                    dialogCancel: "取消",
                    dialogApply: "应用",
                    dialogOk: "好",
                    createTable: "插入表格",
                    addColumnLeft: "左侧添加列",
                    addColumnRight: "右侧添加列",
                    addRowAbove: "添加行上方",
                    addRowBelow: "下面添加一行",
                    deleteRow: "删除行",
                    deleteColumn: "删除列",
                    deleteTable: "删除表",
                    customTable: "创建自定义表...",
                    characters: "人物",
                    words: "话",
                    general: "一般",
                    advanced: "高级",
                    table: "表",
                    row: "行",
                    column: "柱",
                    cell: "细胞",
                    solid: "固体",
                    dotted: "带点",
                    dashed: "虚线",
                    doubled: "翻倍",
                    maximize: "最大化",
                    resize: "最小化",
                    swatches: "色板",
                    quotation: "行情",
                    heading1: "标题1",
                    heading2: "标题2",
                    heading3: "标题3",
                    heading4: "标题4",
                    heading5: "标题5",
                    heading6: "标题6",
                    segoeui: "濑越UI",
                    arial: "宋体",
                    couriernew: "宋体",
                    georgia: "格鲁吉亚",
                    impact: "碰撞",
                    lucidaconsole: "龙力控制台",
                    tahoma: "宋体",
                    timesnewroman: "英语字体格式一种",
                    trebuchetms: "投石机MS",
                    verdana: "宋体",
                    disc: "圆盘",
                    circle: "圈",
                    square: "广场",
                    number: "数",
                    loweralpha: "阿尔法较低",
                    upperalpha: "阿尔法上限",
                    lowerroman: "罗马较低",
                    upperroman: "大写罗马",
                    none: "无",
                    linkTooltip: "ctrl +点击跟随链接",
                    charSpace: "字符（带空格）",
                    charNoSpace: "字符（无空格）",
                    wordCount: "字数",
                    left: "剩下",
                    right: "对",
                    center: "中央",
                    zoomIn: "放大",
                    zoomOut: "缩小",
                    print: "打印",
                    'import': "导入文档",
                    wordExport: "导出为Word文档",
                    pdfExport: "导出为Pdf文件",
                    FindAndReplace: "查找替换",
                    Find: "找",
                    MatchCase: "相符",
                    WholeWord: "全词",
                    ReplaceWith: "用。。。来代替",
                    Replace: "更换",
                    ReplaceAll: "全部替换",
                    FindErrorMsg: "找不到指定的字词",
                    customFontColor: "更多颜色...",
                    customBGColor: "更多颜色...",
                    TransBGColor: "透明",
                    addtodictionary: "添加到字典中",
                    ignoreall: "忽略所有"
                };
                break;
            case "ejSchedule":
                ej.Schedule.Locale = ej.Schedule.Locale || {};
                ej.Schedule.Locale["zh-CN"] = {
                    ReminderWindowTitle: "提醒窗口",
                    CreateAppointmentTitle: "创建约会",
                    RecurrenceEditTitle: "编辑重复约会",
                    RecurrenceEditMessage: "你想怎么改该系列中的约会？",
                    RecurrenceEditOnly: "只有这一任命",
                    RecurrenceEditFollowingEvent: "以下事件",
                    RecurrenceEditSeries: "整个系列",
                    PreviousAppointment: "上一页约会",
                    NextAppointment: "下一个约会",
                    AppointmentSubject: "学科",
                    StartTime: "开始时间",
                    EndTime: "时间结束",
                    AllDay: "整天",
                    StartTimeZone: "启动时区",
                    EndTimeZone: "结束时区",
                    Today: "今天",
                    Recurrence: "重复",
                    Done: "做",
                    Cancel: "取消",
                    Ok: "好",
                    RepeatBy: "通过重复",
                    RepeatEvery: "每天重复",
                    RepeatOn: "重复上",
                    StartsOn: "开始于",
                    Ends: "完",
                    Summary: "概要",
                    Daily: "每日",
                    Weekly: "每周",
                    Monthly: "每月一次",
                    Yearly: "每年",
                    Every: "一切",
                    EveryWeekDay: "每个工作日",
                    Never: "决不",
                    After: "后",
                    Occurence: "发生（S）",
                    On: "上",
                    Edit: "编辑",
                    RecurrenceDay: "日（S）",
                    RecurrenceWeek: "周（S）",
                    RecurrenceMonth: "本月（S）",
                    RecurrenceYear: "年份）",
                    The: "该",
                    OfEvery: "每",
                    First: "第一",
                    Second: "第二",
                    Third: "第三",
                    Fourth: "第四",
                    Last: "持续",
                    WeekDay: "平日",
                    WeekEndDay: "周末天",
                    Subject: "学科",
                    Categorize: "分类",
                    DueIn: "由于在",
                    DismissAll: "关闭所有",
                    Dismiss: "解雇",
                    OpenItem: "开放项目",
                    Snooze: "打盹",
                    Day: "日",
                    Week: "周",
                    WorkWeek: "工作周",
                    Month: "月",
                    AddEvent: "添加事件",
                    CustomView: "自定义视图",
                    Agenda: "议程",
                    Detailed: "编辑约会",
                    EventBeginsin: "开始预约中",
                    Editevent: "编辑约会",
                    Editfollowingevent: "以下事件",
                    Editseries: "编辑系列",
                    Times: "时",
                    Until: "直到",
                    Eventwas: "任命",
                    Hours: "小时",
                    Minutes: "分钟",
                    Overdue: "逾期预约",
                    Days: "天（多个）",
                    Event: "事件",
                    Select: "选择",
                    Previous: "上一页",
                    Next: "下一个",
                    Close: "关闭",
                    Delete: "删除",
                    Date: "日期",
                    Showin: "显示",
                    Gotodate: "转到日期",
                    Resources: "资源",
                    RecurrenceDeleteTitle: "删除重复约会",
                    Location: "位置",
                    Priority: "优先",
                    RecurrenceAlert: "警报",
                    NoTitle: "无题",
                    OverFlowAppCount: "更多的约会）",
                    WrongPattern: "复发模式是无效",
                    CreateError: "约会的持续时间必须比它发生的频率更短。缩短工期，或更改约会复发对话框定期模式。",
                    DragResizeError: "如果跳过了同一约会以后发生无法重新安排定期约会的发生。",
                    StartEndError: "结束时间应大于开始时间",
                    MouseOverDeleteTitle: "删除约会",
                    DeleteConfirmation: "你确定要删除这个预约吗？",
                    Time: "时间",
                    EmptyResultText: "没有建议",
                    BlockIntervalAlertTitle: "警报",
                    BlockIntervalError: "所选时间间隔已被阻止，不可用于选择",
                    RecurrenceDateValidation: "有几个月的选择日期少于几个月。 在这几个月里，这个月的最后一个月将会发生。",
                    SeriesChangeAlert: "对本系列的具体实例所做的更改将被取消，这些约会将再次与该系列相匹配。"
                };
                break;
            case "ejSpreadsheet":
                ej.Spreadsheet.Locale = ej.Spreadsheet.Locale || {};
                ej.Spreadsheet.Locale["zh-CN"] = {
                    Cut: "切",
                    Copy: "复制",
                    FormatPainter: "格式画家",
                    Paste: "糊",
                    PasteValues: "仅粘贴值",
                    PasteSpecial: "糊",
                    Filter: "过滤",
                    FilterContent: "打开所选单元格的过滤。",
                    FilterSelected: "按所选单元格过滤值",
                    Sort: "分类",
                    Clear: "明确",
                    ClearContent: "删除单元格中的所有内容，或仅删除格式，内容，注释或超链接。",
                    ClearFilter: "清除过滤器",
                    ClearFilterContent: "清除当前数据范围的过滤器和排序状态。",
                    SortAtoZ: "将A排序为Z",
                    SortAtoZContent: "最低到最高",
                    SortZtoA: "将Z排序为A",
                    SortZtoAContent: "最高到最低",
                    SortSmallesttoLargest: "排序最小到最大",
                    SortLargesttoSmallest: "排序最大到最小",
                    SortOldesttoNewest: "排序最旧到最新",
                    SortNewesttoOldest: "从最新到最新排序",
                    Insert: "插",
                    InsertTitle: "插入单元格",
                    InsertContent: "将新的单元格，行或列添加到工作簿中。",
                    MultipleInsertContent: "FYI：要一次插入多行或多列，请在工作表中选择多个行或列，然后单击“插入”。",
                    InsertSBContent: "将单元格，行，列或工作表添加到工作簿中。",
                    Delete: "删除",
                    DeleteTitle: "删除单元格",
                    DeleteContent: "从工作簿中删除单元格，行，列或工作表。",
                    MultipleDeleteContent: "FYI：要一次删除多个行或列，请在工作表中选择多个行或列，然后单击“删除”。",
                    FindSelectTitle: "查找并选择",
                    FindSelectContent: "单击以查看在文档中查找文本的选项。",
                    CalculationOptions: "计算选项",
                    CalcOptTitle: "计算选项",
                    CalcOptContent: "选择自动或手动计算公式。",
                    CalcOptRecalcContent: "如果进行影响某个值的更改，“电子表格”将自动重新计算。",
                    CalculateSheet: "计算表",
                    CalculateNow: "现在计算",
                    CalculateNowContent: "现在计算整个工作簿。",
                    CalculateNowTurnOffContent: "如果自动计算被关闭，您只需要使用它。",
                    CalculateSheetContent: "现在计算活动工作表。",
                    CalculateSheetTurnOffContent: "如果自动计算被关闭，您只需要使用它。",
                    Title: "电子表格",
                    ColorPicker: "选色器",
                    Ok: "好",
                    Cancel: "取消",
                    Alert: "我们不能为选定的单元格范围做这个。 在数据范围内选择一个单元格，然后重试。",
                    HeaderAlert: "您尝试使用过滤器标头过滤时无法完成该命令。 在过滤器范围中选择一个单元格，然后再次尝试该命令。",
                    FlashFillAlert: "检查您选择旁边的所有数据，并且没有填充值的模式。",
                    Formatcells: "格式化单元格",
                    FontFamily: "字体",
                    FFContent: "为您的文本选择一个新字体。",
                    FontSize: "字体大小",
                    FSContent: "更改文本的大小。",
                    IncreaseFontSize: "增加字体大小",
                    IFSContent: "使你的文本更大一点。",
                    DecreaseFontSize: "减小字体大小",
                    DFSContent: "让你的文字小一些",
                    Bold: "胆大",
                    Italic: "斜体",
                    Underline: "强调",
                    Linethrough: "删除线",
                    FillColor: "填色",
                    FontColor: "字体颜色",
                    TopAlign: "顶部对齐",
                    TopAlignContent: "将文本对齐到顶部。",
                    MiddleAlign: "中间对齐",
                    MiddleAlignContent: "对齐文本，使其位于单元格顶部和底部之间。",
                    BottomAlign: "底部对齐",
                    BottomAlignContent: "将文本对齐到底部。",
                    WrapText: "包装文本",
                    WrapTextContent: "将超长文本包装成多行，以便您可以看到所有这些。",
                    AlignLeft: "左对齐",
                    AlignLeftContent: "将您的内容与左侧对齐。",
                    AlignCenter: "中央",
                    AlignCenterContent: "中心你的内容",
                    AlignRight: "对齐",
                    AlignRightContent: "将您的内容对准。",
                    IncreaseIndent: "增加缩进",
                    IncreaseIndentContent: "将您的内容移动到距离单元格边界更远的位置。",
                    DecreaseIndent: "减少缩进",
                    DecreaseIndentContent: "移动您的内容更接近单元格边框。",
                    Undo: "撤消",
                    Redo: "重做",
                    NumberFormat: "数字格式",
                    NumberFormatContent: "选择单元格的格式，例如百分比，货币，日期或时间。",
                    AccountingStyle: "会计风格",
                    AccountingStyleContent: "格式为美元会计数字格式。",
                    PercentageStyle: "百分比风格",
                    PercentageStyleContent: "格式为百分比。",
                    CommaStyle: "逗号风格",
                    CommaStyleContent: "格式化成千上万的分隔符。",
                    IncreaseDecimal: "增加十进制",
                    IncreaseDecimalContent: "显示更多小数位以获得更精确的值。",
                    DecreaseDecimal: "减少十进制",
                    DecreaseDecimalContent: "显示较少的小数位数。",
                    AutoSum: "自动总和",
                    AutoSumTitle: "和",
                    AutoSumContent: "自动为您的工作表添加快速计算，如总和或平均值。",
                    Fill: "填",
                    ExportXL: "峥",
                    ExportCsv: "CSV",
                    ExportPdf: "PDF",
                    BackgroundColor: "填色",
                    BGContent: "着色细胞的背景，使它们脱颖而出。",
                    ColorContent: "更改文本的颜色。",
                    Border: "边境",
                    BorderContent: "对当前选定的单元格应用边框。",
                    BottomBorder: "底边",
                    TopBorder: "顶级边界",
                    LeftBorder: "左边界",
                    RightBorder: "右边界",
                    OutsideBorder: "境外",
                    NoBorder: "没有边界",
                    AllBorder: "所有边界",
                    ThickBoxBorder: "厚箱边框",
                    ThickBottomBorder: "厚底边",
                    TopandThickBottomBorder: "顶部和厚底边界",
                    BottomDoubleBorder: "底部雙重邊界",
                    TopandBottomDoubleBorder: "頂部和底部的雙重邊框",
                    DrawBorderGrid: "绘制边框网格",
                    DrawBorder: "画边框",
                    TopandBottomBorder: "顶部和底部边框",
                    BorderColor: "线颜色",
                    BorderStyle: "线条风格",
                    Number: "数字用于数字的一般显示。 货币和会计提供专门的货币价值格式。",
                    General: "通用格式单元格没有特定的数字格式。",
                    Currency: "货币格式用于一般货币价值。 使用会计格式来对齐列中的小数点。",
                    Accounting: "会计格式在列中排列货币符号和小数点。",
                    Text: "即使数字在单元格中，文本格式单元格也被视为文本。 单元格正确显示为输入。",
                    Percentage: "百分比格式将单元格值乘以100，并以百分比符号显示结果。",
                    CustomMessage: "使用现有代码之一作为起点，键入数字格式代码。",
                    Fraction: " ",
                    Scientific: " ",
                    Type: "类型：",
                    CustomFormatAlert: "输入有效的格式",
                    Date: "日期格式显示日期和时间序列号作为日期值。",
                    Time: "时间格式显示日期和时间序列号作为日期值。",
                    File: "文件",
                    New: "新",
                    Open: "打开",
                    SaveAs: "另存为",
                    Print: "打印",
                    PrintContent: "打印当前工作表。",
                    PrintSheet: "打印表",
                    PrintSelected: "打印选择",
                    PrintSelectedContent: "选择您要打印的工作表上的一个区域。",
                    HighlightVal: "格式无效的数据",
                    ClearVal: "清除验证",
                    Validation: "验证",
                    DataValidation: "数据验证",
                    DVContent: "从规则列表中选择以限制可以在单元格中输入的数据类型。",
                    PageSize: "页面大小",
                    PageSizeContent: "选择文档的页面大小。",
                    FormatCells: "格式化单元格",
                    ConditionalFormat: "条件格式",
                    CFContent: "使用颜色轻松发现数据中的趋势和图案，以便可视地突出显示重要的值。",
                    And: "和",
                    With: "与",
                    GTTitle: "比...更棒",
                    GTContent: "格式化格式的单元格：",
                    LTTitle: "少于",
                    LTContent: "格式化不超过的单元格：",
                    BWTitle: "之间",
                    BWContent: "格式化单元格：BETWEEN：",
                    EQTitle: "等于",
                    EQContent: "格式化平等的单元格：",
                    DateTitle: "发生日期",
                    DateContent: "格式化包含DATE的单元格：",
                    ContainsTitle: "包含的文字",
                    ContainsContent: "格式化包含文本的单元格：",
                    GreaterThan: "比...更棒",
                    LessThan: "少于",
                    Between: "之间",
                    EqualTo: "等于",
                    TextthatContains: "包含的文字",
                    DateOccurring: "发生日期",
                    ClearRules: "明确规则",
                    ClearRulesfromSelected: "从选定单元格中清除规则",
                    ClearRulesfromEntireSheets: "从整个表格清除规则",
                    CellStyles: "细胞样式",
                    CellStylesContent: "丰富多彩的风格是使重要数据脱颖而出的好方法。",
                    CellStyleHeaderText: "好，坏和中立/标题和标题/主题细胞样式",
                    Custom: "键入数字格式代码，使用现有代码之一作为起点。",
                    CellStyleGBN: "正常/坏/好/中性",
                    CellStyleTH: "标题4 /标题",
                    Accent: "口音",
                    Style: "样式",
                    FormatAsTable: "格式为表格",
                    FormatasTable: "格式如表",
                    FATContent: "快速将一系列单元格转换为具有自己风格的表格。",
                    FATHeaderText: "光/中/黑",
                    FATNameDlgText: "表名：/我的表有标题",
                    InvalidReference: "您指定的范围无效",
                    ResizeAlert: "指定范围无效。 表的顶部必须保留在同一行中，并且生成的表必须与原始表重叠。 指定有效范围。",
                    RangeNotCreated: "在“格式”表格中限制了超出最大片材行数的行。",
                    ResizeRestrictAlert: "增加或减少列计数和减少行计数格式如表格所限制。",
                    FATResizeTableText: "输入您的表格的新数据范围：",
                    FATReizeTableNote: "注意：标题必须保留在同一行中，并且生成的表范围必须与原始表范围重叠。",
                    FormatAsTableAlert: "无法创建具有单个行的表。 表必须至少有两行，一个表用于表头，另一个用于数据",
                    FormatAsTableTitle: "Light 1 / Light 2 / Light 3 / Light 4 / Light 5 / Light 6 / Light 7 / Light 8 / Light 9 / Light 10 / Light 11 / Light 12 / Medium 1 / Medium 2 / Medium 3 / Medium 4 / Medium 5 / Medium 6 / Medium 7 / Medium 8 / Dark 1 / Dark 2 / Dark 3 / Dark 4",
                    NewTableStyle: "新表风格",
                    ResizeTable: "调整表大小",
                    ResizeTableContent: "通过添加或删除行和列来调整此表的大小。",
                    ConvertToRange: "转换到范围",
                    ConvertToRangeContent: "将此表转换为正常范围的单元格。",
                    ConverToRangeAlert: "要将表转换为正常范围吗？",
                    TableID: "表格ID：",
                    Table: "表",
                    TableContent: "创建一个表来组织和分析相关数据。",
                    TableStyleOptions: "第一列/最后一列/总行/过滤器按钮",
                    Format: "格式",
                    NameManager: "名称经理",
                    NameManagerContent: "创建，编辑，删除和查找工作簿中使用的所有名称。",
                    NameManagerFormulaContent: "名称可以在公式中用作细胞引用的替代品。",
                    DefinedNames: "定义名称",
                    DefineName: "定义名称",
                    DefineNameContent: "定义并应用名称。",
                    UseInFormula: "在公式中使用",
                    UseInFormulaContent: "选择此工作簿中使用的名称，并将其插入当前公式。",
                    RefersTo: "指的是",
                    Name: "名称",
                    Scope: "范围",
                    NMNameAlert: "您输入的名称无效./原因可能包括：/名称不以字母或下划线开头/名称包含空格或其他无效字符/名称与电子表格内置名称冲突，或 工作簿中另一个对象的名称，//未完全使用",
                    NMUniqueNameAlert: "输入的名称已经存在。 输入一个唯一的名称。",
                    NMRangeAlert: "输入有效范围",
                    FORMULAS: "公式",
                    DataValue: "价值观：",
                    Formula: "公式",
                    MissingParenthesisAlert: "您的公式缺少括号 - ）或（。检查公式，然后将括号添加到适当的位置。",
                    UnsupportedFile: "不支持的文件",
                    IncorrectPassword: "无法使用给定的密码打开文件或工作表",
                    InvalidUrl: "请指定正确的URL",
                    Up: "向上",
                    Down: "下",
                    Sheet: "片",
                    Workbook: "工作簿",
                    Rows: "按行",
                    Columns: "按列",
                    FindReplace: "查找替换",
                    FindnReplace: "查找和替换",
                    Find: "找",
                    Replace: "更换",
                    FindLabel: "找什么：",
                    ReplaceLabel: "用。。。来代替：",
                    ReplaceAll: "全部替换",
                    Close: "关",
                    FindNext: "找下一个",
                    FindPrev: "查找上一页",
                    Automatic: "自动",
                    Manual: "手册",
                    Settings: "设置",
                    MatchCase: "相符",
                    MatchAll: "匹配整个单元格内容",
                    Within: "中：",
                    Search: "搜索：",
                    Lookin: "在看：",
                    ShiftRight: "右移小区",
                    ShiftBottom: "向下移动单元格",
                    EntireRow: "整行",
                    EntireColumn: "整列",
                    ShiftUp: "向上移动单元格",
                    ShiftLeft: "移动单元格",
                    Direction: "方向：",
                    GoTo: "去",
                    GoToName: "去：",
                    Reference: "参考：",
                    Special: "特别",
                    Select: "选择",
                    Comments: "注释",
                    Formulas: "公式",
                    Constants: "常数",
                    RowDiff: "行差",
                    ColDiff: "列差异",
                    LastCell: "最后一个单元格",
                    CFormat: "条件格式",
                    Blanks: "空白",
                    GotoError: "错误",
                    GotoLogicals: "逻辑",
                    GotoNumbers: "数字",
                    GotoText: "文本",
                    FindSelect: "查找并选择",
                    Comment: "评论",
                    NewComment: "新",
                    InsertComment: "插入评论",
                    EditComment: "编辑",
                    DeleteComment: "删除评论",
                    DeleteCommentContent: "删除所选的注释。",
                    HideComment: "隐藏评论",
                    Next: "下一个",
                    NextContent: "跳转到下一条评论。",
                    Previous: "以前",
                    PreviousContent: "跳转到以前的评论。",
                    ShowHide: "显示/隐藏评论",
                    ShowHideContent: "显示或隐藏活动单元格上的注释。",
                    ShowAll: "显示所有评论",
                    ShowAllContent: "显示工作表中的所有注释。",
                    UserName: "用户名",
                    Hide: "隐藏",
                    Unhide: "取消隐藏",
                    Add: "加",
                    DropAlert: "要替换现有数据吗？",
                    PutCellColor: "将所选单元格颜色放置到顶部",
                    PutFontColor: "将选定的字体颜色放在顶部",
                    WebPage: "网页",
                    WorkSheet: "工作表参考",
                    SheetReference: "工作表参考",
                    InsertHyperLink: "插入超链接",
                    HyperLink: "超链接",
                    EditLink: "链接编辑",
                    OpenLink: "打开链接",
                    HyperlinkText: "文本：",
                    RemoveLink: "删除",
                    WebAddress: "网址：",
                    CellAddress: "细胞参考：",
                    SheetIndex: "在此文档中选择一个位置",
                    ClearAll: "全部清除",
                    ClearFormats: "清除格式",
                    ClearContents: "清除内容",
                    ClearComments: "清楚评论",
                    ClearHyperLinks: "清除超链接",
                    SortFilter: "排序和筛选",
                    SortFilterContent: "整理数据，使其更易于分析。",
                    NumberStart: "最小值：",
                    NumberEnd: "最大值：",
                    DecimalStart: "最小值：",
                    DecimalEnd: "最大值：",
                    DateStart: "开始日期：",
                    DateEnd: "结束日期：",
                    ListStart: "资源：",
                    FreeText: "输入无效数据后显示错误警报",
                    ListEnd: "细胞参考：",
                    TimeStart: "开始时间：",
                    TimeEnd: "时间结束：",
                    TextLengthStart: "最小值：",
                    TextLengthEnd: "最大值：",
                    CommentFindEndAlert: "电子表格到达工作簿的末尾。 你想继续从工作簿开始审查吗？",
                    InsertSheet: "插",
                    DeleteSheet: "删除",
                    RenameSheet: "改名",
                    MoveorCopy: "移动或复制",
                    HideSheet: "隐藏",
                    UnhideSheet: "取消隐藏",
                    SheetRenameAlert: "该名称已被使用。 尝试一个不同的。",
                    SheetRenameEmptyAlert: "您为工作表键入了无效的名称。 确保：",
                    SheetRenameEmptyCharExceedAlert: "您键入的名称不超过31个字符。",
                    SheetRenameEmptySplCharAlert: "该名称不包含以下任何字符：",
                    SheetRenameEmptyBlankAlert: "你没有留下这个名字。",
                    SheetDeleteAlert: "您不能撤消删除工作表，您可能会删除一些数据。 如果您不需要它，请单击确定删除。",
                    SheetDeleteErrorAlert: "工作簿必须至少包含一个可见的工作表。 要隐藏，删除或移动所选的工作表，您必须先插入新工作表或取消隐藏已隐藏的工作表。",
                    CtrlKeyErrorAlert: "该命令不能用于多个选择。",
                    ClipboardAccessError: "您的浏览器无法访问剪贴板，因此请使用以下快捷方式：",
                    MoveToEnd: "移动到结束",
                    Beforesheet: "表格前：",
                    CreateaCopy: "创建副本",
                    AutoFillOptions: "复制单元格/填充系列/仅填充格式化/不填写格式化/闪存填充",
                    NumberValidationMsg: "仅输入数字",
                    DateValidationMsg: "仅输入日期",
                    Required: "需要",
                    TimeValidationMsg: "您输入的时间无效。",
                    CellAddrsValidationMsg: "参考无效。",
                    PivotTable: "数据透视表",
                    PivotTableContent: "轻松安排和汇总数据透视表中的复杂数据。",
                    NumberTab: "数",
                    AlignmentTab: "对准",
                    FontTab: "字体",
                    FillTab: "填",
                    TextAlignment: "文本对齐",
                    Horizontal: "水平：",
                    Vertical: "垂直：",
                    Indent: "缩进",
                    TextControl: "文本控制",
                    FontGroup: "字体：",
                    FontStyle: "字体样式：",
                    Size: "尺寸：",
                    PSize: "页面大小",
                    Effects: "效果：",
                    StrikeThrough: "删除线",
                    Overline: "叠加",
                    NormalFont: "普通字体",
                    Preview: "预习",
                    Line: "线",
                    Presets: "预设",
                    None: "没有",
                    Outline: "大纲",
                    AllSide: "所有面",
                    InsCells: "插入单元格",
                    InsRows: "插入表单行",
                    InsCols: "插入工作表列",
                    InsSheet: "插入表",
                    DelCells: "删除单元格",
                    DelRows: "删除工作表行",
                    DelCols: "删除工作表列",
                    DelSheet: "删除工作表",
                    HyperLinkAlert: "此网站的地址无效。请检查地址，然后重试。",
                    ReplaceData: "全做完了。 我们做了/替换。",
                    NotFound: "我们找不到你要找的东西。 选择设置标签以获得更多搜索方式",
                    Data: "数据：",
                    Allow: "允许：",
                    IgnoreBlank: "忽略空白",
                    NotFind: "无法找到要替换的比赛",
                    FreezeTopRow: "冻结顶行",
                    FreezeFirstColumn: "冻结第一列",
                    UnFreezePanes: "解冻窗格",
                    DestroyAlert: "您确定要销毁当前的工作簿而不保存并创建新的工作簿吗？",
                    ImageValAlert: "仅上传图像文件",
                    Pictures: "图片",
                    PicturesTitle: "从文件",
                    PicturesContent: "从计算机或连接到的其他计算机插入图片。",
                    ImportAlert: "您确定要销毁当前的工作簿而不保存并打开新的工作簿吗？",
                    UnmergeCells: "不牢固的单元格",
                    MergeCells: "合并单元格",
                    MergeAcross: "合并",
                    MergeAndCenter: "合并与中心",
                    MergeAndCenterContent: "将所选单元格的内容合并并置于新的较大单元格中。",
                    MergeCellsAlert: "合并单元格只保留左上单元格值并丢弃其他值。",
                    MergeInsertAlert: "此操作将导致某些合并的单元格无法合并。 你想继续吗 ？",
                    Axes: "轴",
                    PHAxis: "主水平",
                    PVAxis: "主垂直",
                    AxisTitle: "轴标题",
                    CTNone: "没有",
                    CTCenter: "中央",
                    CTFar: "远",
                    CTNear: "近",
                    DataLabels: "数据标签",
                    DLNone: "没有",
                    DLCenter: "中央",
                    DLIEnd: "内部结束",
                    DLIBase: "内底",
                    DLOEnd: "外面",
                    ErrorBar: "错误酒吧",
                    Gridline: "网格线",
                    PMajorH: "主要水平",
                    PMajorV: "主要垂直",
                    PMinorH: "初级小水平",
                    PMinorV: "初级小垂直",
                    Legend: "传说",
                    LNone: "没有",
                    LLeft: "剩下",
                    LRight: "对",
                    LBottom: "底部",
                    LTop: "最佳",
                    ChartTitleDlgText: "输入标题",
                    ChartTitle: "标题",
                    InvalidTitle: "您为“标题”键入了无效的名称。",
                    CorrectFormat: "选择正确的格式文件",
                    ResetPicture: "重设图片",
                    ResetPictureContent: "舍弃对此图片所做的所有格式更改。",
                    PictureBorder: "图片边框",
                    PictureBorderContent: "选择您的形状轮廓的颜色，宽度和线条样式。",
                    ResetSize: "重置图片和大小",
                    Height: "高度",
                    Width: "宽度",
                    ThemeColor: "主题颜色",
                    NoOutline: "没有大纲",
                    Weight: "重量",
                    Dashes: "破折号",
                    ColumnChart: "柱",
                    ColumnChartTitle: "插入柱形图",
                    ColumnChartContent: "使用此图表类型可视化比较几个类别中的值。",
                    BarChart: "酒吧",
                    BarChartTitle: "插入条形图",
                    BarChartContent: "当图表显示持续时间或类别文本较长时，使用此图表类型可视化比较几个类别中的值。",
                    StockChart: "雷达",
                    StockChartTitle: "插入雷达图",
                    StockChartContent: "使用此图表类型显示相对于中心点的值。",
                    LineChart: "线",
                    LineChartTitle: "插入折线图",
                    LineChartContent: "使用此图表类型显示时间（年，月和日）或类别的趋势。",
                    AreaChart: "区域",
                    AreaChartTitle: "插入区域图",
                    AreaChartContent: "使用此图表类型显示时间（年，月和日）或类别的趋势。 用它来突出显示随时间的变化的大小。",
                    ComboChart: "组合",
                    PieChart: "馅饼",
                    PieChartTitle: "插入馅饼/甜甜圈图",
                    PieChartContent: "使用此图表类型显示整体的比例。 当您的数字总数为100％时使用。",
                    ScatterChart: "分散",
                    ScatterChartTitle: "插入散点图（X，Y）图",
                    ScatterChartContent: "使用此图表类型显示值集之间的关系。",
                    ClusteredColumn: "群集列",
                    StackedColumn: "堆叠列",
                    ClusteredBar: "群集酒吧",
                    StackedBar: "堆叠式酒吧",
                    Radar: "雷达",
                    RadarMarkers: "雷达与＆nbsp;标记",
                    LineMarkers: "线与＆nbsp;标记",
                    Area: "区",
                    StackedArea: "堆积区域",
                    Pie: "馅饼",
                    Doughnut: "甜甜圈",
                    Scatter: "分散",
                    ChartRange: "图表范围",
                    XAxisRange: "输入X轴范围：",
                    YAxisRange: "输入Y轴范围：",
                    LegendRange: "输入图例范围：",
                    YAxisMissing: "输入Y轴范围来创建图表",
                    InvalidYAxis: "Y轴范围必须在选定范围内",
                    InvalidXAxis: "X轴范围必须在选定范围内",
                    InvalidLegend: "图例范围必须在选定范围内",
                    InvalidXAxisColumns: "X轴范围应在单列内",
                    FreezePanes: "冻结面板",
                    FreezePanesContent: "冻结纸张的一部分，以便在滚动纸张的其余部分时保持可见。",
                    PasteContent: "将剪贴板上的内容添加到文档中。",
                    PasteSplitContent: "选择一个粘贴选项，例如保留格式或仅粘贴内容。",
                    CutContent: "删除选择并将其放在剪贴板上，以便您可以将其粘贴到别的地方。",
                    CopyContent: "将选择的副本放在剪贴板上，以便将其粘贴到别的地方。",
                    FPTitle: "格式画家",
                    FPContent: "像一个特定选择的样子？ 您可以将该外观应用于文档中的其他内容。",
                    BoldContent: "使您的文本粗体。",
                    ItalicContent: "斜体你的文字",
                    ULineContent: "下划线文字。",
                    LineTrContent: "通过罢工来交叉东西。",
                    UndoContent: "撤消上次的动作",
                    RedoContent: "重做你的最后一个动作。",
                    HyperLinkTitle: "添加超链接",
                    HyperLinkContent: "在文档中创建一个链接，以便快速访问网页和文件。",
                    HyperLinkPlaceContent: "超链接也可以带您到文档中的位置。",
                    NewCommentTitle: "插入评论",
                    NewCommentContent: "添加关于文档的这一部分的注释。",
                    RefreshTitle: "刷新",
                    RefreshContent: "从连接到活动单元的源获取最新数据",
                    FieldListTitle: "现场清单",
                    FieldListContent: "显示或隐藏字段列表。",
                    FieldListRemoveContent: "字段列表允许您从数据透视表报告中添加和删除字段",
                    AddChartElement: "添加图表元素",
                    AddChartElementContent: "将元素添加到创建的图表。",
                    SwitchRowColumn: "切换行/列",
                    SwitchRowColumnContent: "在轴上交换数据。",
                    MergeAlert: "我们不能做到合并的单元格。",
                    UnhideDlgText: "取消隐藏表：",
                    ChartThemes: "图表主题",
                    ChartThemesContent: "为您的图表选择一个新主题。",
                    ChangePicture: "更换图片",
                    ChangePictureContent: "切换到其他图片，保留当前图片的格式和大小。",
                    ChangeChartType: "更改图表类型",
                    SelectData: "选择数据",
                    SelectDataContent: "更改图表中包含的数据范围。",
                    Sum: "和",
                    Average: "平均",
                    CountNumber: "数数",
                    Max: "最大",
                    Min: "我",
                    ChartType: "更改图表类型",
                    ChartTypeContent: "更改为不同的图表类型。",
                    AllCharts: "所有图表",
                    defaultfont: "默认",
                    LGeneral: "一般",
                    LCurrency: "货币",
                    LAccounting: "会计",
                    LDate: "日期",
                    LTime: "时间",
                    LPercentage: "百分比",
                    LFraction: "分数",
                    LScientific: "科学的",
                    LText: "文本",
                    LCustom: "定制",
                    FormatSample: "样品",
                    Category: "类别：",
                    Top: "最佳",
                    Center: "中央",
                    Bottom: "底部",
                    Left: "左（缩进）",
                    Right: "对",
                    Justify: "证明",
                    GeneralTxt: "通用格式单元格没有特定的数字格式。",
                    NegativeNumbersTxt: "负数",
                    ThousandSeparatorTxt: "使用1000分离器",
                    DecimalPlacesTxt: "小数位：",
                    TextTxt: "即使数字在单元格中，文本格式单元格也被视为文本。 单元格正确显示为输入。",
                    BoldItalic: "加粗斜体",
                    Regular: "定期",
                    HyperLinkHide: "“文件选择”",
                    InvalidSheetIndex: "指定适当的SheetIndex",
                    HugeDataAlert: "文件太大，无法打开。",
                    ImportExportUrl: "提供导入/导出网址，然后重试。",
                    BetweenAlert: "最大值必须大于或等于最小值。",
                    BorderStyles: "固体/虚线/虚线/双",
                    FPaneAlert: "冻结窗格不适用于第一个单元格",
                    ReplaceNotFound: "电子表格找不到匹配项。",
                    BlankWorkbook: "空白工作簿",
                    SaveAsExcel: "另存为Excel",
                    SaveAsCsv: "另存为CSV",
                    SaveAsPdf: "另存为PDF",
                    Design: "设计",
                    NewName: "新名称",
                    FormulaBar: "公式栏",
                    NameBox: "名称框",
                    NumberValMsg: "小数值不能用于数字条件。",
                    NumberAlertMsg: "仅输入数字。",
                    ListAlert: "单元格范围不正确，请输入正确的单元格范围。",
                    ListValAlert: "列表源必须是分隔列表，或对单行或列的引用。",
                    ListAlertMsg: "您输入的值无效",
                    AutoFillTitle: "自动填充选项",
                    NewSheet: "新单",
                    FullSheetCopyPasteAlert: "我们无法粘贴，因为复制区域和粘贴区域的大小不一样。",
                    Heading: "标题",
                    Gridlines: "网格线",
                    Firstsheet: "滚动到第一张表",
                    Lastsheet: "滚动到最后一张",
                    Nextsheet: "滚动到下一张表",
                    Prevsheet: "滚动到上一张表",
                    ProtectWorkbook: "保护工作簿",
                    UnProtectWorkbook: "取消保护工作簿",
                    ProtectWBContent: "让其他人对您的工作簿进行结构性更改",
                    Password: "密码",
                    ConfirmPassword: "重新输入密码以继续：",
                    PasswordAlert1: "确认密码不一致。",
                    PasswordAlert2: "请输入密码。",
                    PasswordAlert3: "您提供的密码不正确。 验证CAPS LOCK键是否关闭，并确保使用正确的大小写。",
                    Protect: "被保护。",
                    Lock: "锁定单元格",
                    Unlock: "解锁单元格",
                    Protectsheet: "保护板",
                    ProtectSheetToolTip: "通过限制他们的编辑能力，防止他人发生不必要的变化",
                    Unprotect: "取消保护工作表",
                    LockAlert: "您尝试更改的单元格是受保护的表单。 要进行更改，请单击“审阅”选项卡中的“取消保护工作表”。",
                    InsertDeleteAlert: "不允许执行此操作。 该操作正在尝试在工作表上的表格中移动单元格。",
                    CreateRule: "新规则",
                    NewRule: "新格式规则",
                    NewRuleLabelContent: "格式化此公式为真的值：",
                    ReadOnly: "您尝试更改的范围包含只读单元格。",
                    CreatePivotTable: "创建数据透视表",
                    Range: "范围：",
                    ChoosePivotTable: "选择您想要放置数据透视表的位置",
                    NewWorksheet: "新工作表",
                    ExistingWorksheet: "现有工作表",
                    Location: "位置：",
                    Refresh: "刷新",
                    PivotRowsAlert: "此命令至少需要两行源数据。 您不能在只有一行的选择上使用该命令。",
                    PivotLabelsAlert: "数据透视表字段名称无效。要创建数据透视表报表，必须使用组织为具有标记列的列表的数据。 如果您正在更改数据透视表字段的名称，则必须为字段键入新名称。",
                    FieldList: "现场清单",
                    MergeSortAlert: "为了做到这一点，所有合并的单元格都需要相同的大小。",
                    FormulaSortAlert: "具有公式的排序范围无法排序。",
                    MergePreventInsertDelete: "不允许执行此操作。 操作正在尝试移动工作表上的合并单元格。",
                    FormulaRuleMsg: "请输入正确的格式。",
                    MovePivotTable: "移动数据透视表",
                    MovePivotTableContent: "将数据透视表移动到工作簿中的另一个位置。",
                    ClearAllContent: "删除字段和过滤器。",
                    ChangeDataSource: "修改",
                    ChangeDataSourceContent: "更改此数据透视表的源数据",
                    ChangePivotTableDataSource: "更改数据透视表数据源",
                    TotalRowAlert: "不允许执行此操作。 该操作正在尝试在工作表上的表格中移动单元格。 单击“确定”继续整行。",
                    CellTypeAlert: "单元格类型应用范围不允许进行此操作。",
                    PivotOverlapAlert: "数据透视表报表不能与另一个数据透视表报表重叠",
                    NoCellFound: "没有发现细胞",
                    CorrectArgument: "请输入正确的参数",
                    CorrectFormula: "请输入正确的公式",
                    CorrectCellAddress: "请输入正确的单元格地址",
                    ChartType: "图表类型",
                    NumberValidationAlert: "最大值必须大于或等于最小值",
                    DateValidationAlert: "结束日期必须大于或等于开始日期",
                    TimeValidationAlert: "结束时间必须大于或等于开始时间",
                    NewRuleAlert: "这是这个公式的问题",
                    DragAlert: "您尝试在过滤器范围内移动单元格时无法完成该命令。 从过滤器范围中选择一个范围，然后再次尝试该命令。",
                    OR: "要么",
                    HOME: "家",
                    INSERT: "插",
                    DATATAB: "數據",
                    PAGELAYOUT: "頁面佈局",
                    REVIEW: "評論",
                    OTHERS: "其他",
                    FORMAT: "格式",
                    DESIGN: "設計",
                    CHARTDESIGN: "圖表設計",
                    ANALYZE: "分析",
                    FileName: "文件名",
                    Save: "保存",
                    SaveFile: "保存文件",
                    HighlightCellRules: "突出显示单元规则",
                    LightRedFillDark: "浅红色填充暗红色文本",
                    YellowFillDark: "黄色填充与黄色黄色文本",
                    GreenFillDark: "绿色填充深绿色文本",
                    RedFill: "红色填充",
                    RedText: "红色文本",
                    Column: "柱",
                    Bar: "酒吧",
                    Line: "线",
                    DataValidationType: "数/十进制/日期/时间/正文长度/名单",
                    DataValidationAction: "比...更棒/大于或等于/少于/小于或等于/等于/不等于/之间/不在之间",
                    Modify: "修改",
                    Apply: "应用",
                    NewCellStyle: "新细胞样式",
                    cellStyleAlert: "此样式名称已存在",
                    modifyCellStyleAlert: "此样式名称不存在",
                    Color: "颜色",
                    StyleName: "风格名称",
                    LShortdate: "短日期",
                    LLongdate: "很長的日期",
                    Clipboard: "剪貼板",
                    Font: "字形",
                    Actions: "操作",
                    Styles: "樣式",
                    Editing: "編輯",
                    Tables: "表",
                    Illustrations: "插圖",
                    Links: "左",
                    Charts: "圖表",
                    DataTools: "數據工具",
                    Show: "節目",
                    PageLayout: "頁面佈局",
                    Changes: "變化",
                    Window: "窗口",
                    Cells: "細胞",
                    Calculation: "計算",
                    Properties: "屬性",
                    Tools: "工具",
                    TableStyleOption: "表樣式選項",
                    ChartLayouts: "圖表佈局",
                    ChartDesignData: "數據",
                    ChartDesignType: "等級",
                    ChartDesignSize: "大小",
                    Adjust: "調整",
                    FormatSize: "大小",
                    AnalyzePivotTable: "數據透視表",
                    DataSource: "數據源",
                    FATTitlePrefix: "表風格",
                    HighPoint: "Điểm cao",
                    LowPoint: "Điểm thấp",
                    FirstPoint: "Điểm đầu tiên",
                    LastPoint: "Điểm cuối",
                    NegativePoint: "Điểm âm",
                    Markers: "Đánh dấu",
                    NegativePoints: "Điểm âm",
                    LineSparklineTitle: "Chèn Line Sparkline",
                    LineSparklineContent: "Sparklines là các biểu đồ mini được đặt trong một ô, mỗi ô tương ứng đại diện cho một dãy dữ liệu trong lựa chọn của bạn",
                    ColumnSparklineTitle: "Chèn cột Sparkline",
                    ColumnSparklineContent: "Sparklines là các biểu đồ mini được đặt trong một ô, mỗi ô tương ứng đại diện cho một dãy dữ liệu trong lựa chọn của bạn",
                    WinLossSparklineTitle: "Chèn Win / Loss Sparkline",
                    WinLossSparklineContent: "Sparklines là các biểu đồ mini được đặt trong một ô, mỗi ô đại diện cho một dãy dữ liệu trong lựa chọn của bạn,",
                    Line: "Hàng",
                    SparklineColor: "Màu Sparkline",
                    SparklineColorTitle: "Màu Sparkline",
                    SparklineColorContent: "Chỉ định màu sắc của các dây chằng trong nhóm sparkline đã chọn",
                    MarkerColor: "Màu Marker",
                    MarkerColorContent: "Thay đổi màu sắc cho các điểm tiêu cực, đánh dấu, và tất cả các điểm khác cho nhóm được lựa chọn ngẫu nhiên",
                    ChooseDataRange: "Chọn dải dữ liệu",
                    ChooseLocationRange: "Chọn phạm vi Vị trí",
                    DataRange: "Dải dữ liệu",
                    LocationRange: "Dải địa điểm",
                    EmptyDLRnge: "Tham chiếu nguồn dữ liệu hoặc vị trí không hợp lệ",
                    SourceDataRange: "Chọn một phạm vi dữ liệu nguồn cho đường kính lượn sóng",
                    SparklineAlert: "Tham chiếu vị trí không hợp lệ bởi vì các ô không phải là tất cả trong cùng một cột hoặc cùng một hàng. Chọn các ô được tất cả trong một hàng hoặc một cột",
                    SparklineDataAlert: "Nhập định dạng dữ liệu đúng",
                    SparklineLocAlert: "Tham chiếu cho vị trí hoặc dải dữ liệu không hợp lệ",
                    SDataRangeAlert: "Tham chiếu nguồn dữ liệu không hợp lệ",
                    LineAlert: "Không thể tạo biểu đồ dạng đường cho một giá trị",
                    EditData: "Chỉnh sửa dữ liệu",
                    EditDataContent: "Chỉnh sửa Vị trí & Dữ liệu Nhóm",
                    EditSingleSparklineData: "Chỉnh sửa dữ liệu Sparkline đơn",
                    EditSparklineData: "Chỉnh sửa dữ liệu Sparkline",
                    HiddenEmptyCells: "Các ô ẩn và trống",
                    SwitchRowCol: "Chuyển hàng / Cột",
                    CreateSparkline: "Tạo Sparkline",
                    SelectDataSource: "Chọn một phạm vi dữ liệu nguồn cho đường kính lượn sóng",
                    SPARKLINEDESIGN: "Thiết kế Sparkline",
                };
                break;
            case "ejTimePicker":
                ej.TimePicker.Locale = ej.TimePicker.Locale || {};
                ej.TimePicker.Locale["zh-CN"] = {
                    watermarkText: "选择一个时间",
                };
                break;
            case "ejTreeGrid":
                ej.TreeGrid.Locale = ej.TreeGrid.Locale || {};
                ej.TreeGrid.Locale["zh-CN"] = {
                    toolboxTooltipTexts: {
                        addTool: "加",
                        editTool: "编辑",
                        updateTool: "更新",
                        deleteTool: "删除",
                        cancelTool: "取消",
                        expandAllTool: "展开全部",
                        collapseAllTool: "全部收缩",
                        pdfExportTool: "PDF导出",
                        excelExportTool: "Excel导出",
                        printTool: "打印",
                        searchTool: "搜索"
                    },
                    contextMenuTexts: {
                        addRowText: "添加行",
                        editText: "编辑",
                        deleteText: "删除",
                        saveText: "保存",
                        cancelText: "取消",
                        aboveText: "以上",
                        belowText: "下面"
                    },
                    columnMenuTexts: {
                        sortAscendingText: "升序",
                        sortDescendingText: "降序",
                        columnsText: "列",
                        freezeText: "冻结",
                        unfreezeText: "解冻",
                        freezePrecedingColumnsText: "冻结在先的栏目",
                        insertColumnLeft: "在左侧插入列",
                        insertColumnRight: "在右侧插入列",
                        deleteColumn: "删除列",
                        renameColumn: "重列",
                        menuFilter: "过滤"
                    },
                    filterMenuTexts: {
                        stringMenuOptions: [
                            { text: "以。。开始", value: "startswith" },
                            { text: "结束", value: "endswith" },
                            { text: "包含", value: "contains" },
                            { text: "等于", value: "equal" },
                            { text: "不等于", value: "notequal" }
                        ],
                        numberMenuOptions: [
                            { text: "少于", value: "lessthan" },
                            { text: "比...更棒", value: "greaterthan" },
                            { text: "小于或等于", value: "lessthanorequal" },
                            { text: "大于或等于", value: "greaterthanorequal" },
                            { text: "等于", value: "equal" },
                            { text: "不等于", value: "notequal" }
                        ],
                        filterValue: "过滤器值",
                        filterButton: "过滤",
                        clearButton: "明确",
                        enterValueText: "输入值"
                    },
                    columnDialogTexts: {
                        field: "领域",
                        headerText: "标题文本",
                        editType: "编辑类型",
                        filterEditType: "过滤器编辑类型",
                        allowFiltering: "允许过滤",
                        allowFilteringBlankContent: "允许过滤空白内容",
                        allowSorting: "允许排序",
                        visible: "可见",
                        width: "宽度",
                        textAlign: "文本对齐",
                        headerTextAlign: "头文字对齐",
                        isFrozen: "被冻结",
                        allowFreezing: "允许冷冻",
                        columnsDropdownData: "列下拉数据",
                        dropdownTableText: "文本",
                        dropdownTableValue: "值",
                        addData: "加",
                        deleteData: "去掉",
                        allowCellSelection: "允许小区选择",
                        showInColumnChooser: "在列选择器中显示",
                        displayAsCheckbox: "显示为复选框",
                        clipMode: "剪辑模式",
                        tooltip: "工具提示",
                        headerTooltip: "标题工具提示"
                    },
                    editTypeTexts: {
                        string: "串",
                        numeric: "数字",
                        datePicker: "日期选择器",
                        dateTimePicker: "日期时间选择器",
                        dropdown: "落下",
                        boolean: "布尔值"
                    },
                    textAlignTypes: {
                        right: "对",
                        left: "剩下",
                        center: "中央"
                    },
                    clipModeTexts: {
                        clip: "夹",
                        ellipsis: "省略"
                    },
                    columnDialogTitle: {
                        insertColumn: "插入列",
                        deleteColumn: "删除列",
                        renameColumn: "重列"
                    },
                    deleteColumnText: "你确定要删除此列？",
                    deleteRecordText: "你确定要删除记录吗？",
                    okButtonText: "好",
                    cancelButtonText: "取消",
                    confirmDeleteText: "确认删除",
                    dropDownListBlanksText: "（空白）",
                    dropDownListClearText: "（清除过滤器）",
                    trueText: "真正",
                    falseText: "假",
                    emptyRecord: "无记录可显示",
                };
                break;
            case "ejUploadbox":
                ej.Uploadbox.Locale = ej.Uploadbox.Locale || {};
                ej.Uploadbox.Locale["zh-CN"] = {
                    buttonText: {
                        upload: "上传",
                        browse: "浏览",
                        cancel: "取消",
                        close: "关闭"
                    },
                    dialogText: {
                        title: "上传框",
                        name: "名称",
                        size: "尺寸",
                        status: "状态"
                    },
                    dropAreaText: "将文件拖放或点击上传",
                    filedetail: "所选文件大小过大。请选择有效的尺寸范围内的文件。",
                    denyError: "与#Extension扩展名的文件是不允许的。",
                    allowError: "只有#Extension扩展名的文件是允许的。",
                    cancelToolTip: "取消",
                    removeToolTip: "清除",
                    retryToolTip: "重试",
                    completedToolTip: "完成",
                    failedToolTip: "失败的",
                    closeToolTip: "关闭",
                };
                break;
            case "ejTile":
                ej.Tile.Locale = ej.Tile.Locale || {};
                ej.Tile.Locale["zh-CN"] = {
                    captionText: "文本"
                };
                break;
            case "ejListView":
                ej.ListView.Locale = ej.ListView.Locale || {};
                ej.ListView.Locale["zh-CN"] = {
                    headerTitle: "标题",
                    headerBackButtonText: "返回"
                };
                break;
            case "ejMediaPlayer":
                ej.MediaPlayer.Locale = ej.MediaPlayer.Locale || {};
                ej.MediaPlayer.Locale["zh-CN"] = {
                    "Play": "玩",
                    "Pause": "暂停",
                    "Mute": "静音",
                    "Unmute": "取消静音",
                    "Settings": "设置",
                    "FullScreen": "全屏",
                    "ExitFullScreen": "退出全屏",
                    "HidePlaylist": "隐藏播放列表",
                    "Previous": "以前",
                    "Next": "下一个",
                    "TogglePlaylist": "切换播放列表",
                    "Rewind": "倒带",
                    "Forward": "前锋",
                    "Playlist": "播放列表",
                    "RepeatPlaylist": "重复播放列表",
                    "Shuffle": "拖曳",
                    "VideoTitle": "视频",
                    "PlaylistTitle": "播放列表",
                    "PlaylistItemName": "列表项",
                    "PlaylistItemAuthor": "作者",
                    "Media": "媒体",
                    "Speed": "速度",
                    "Quality": "质量",
                    "Normal": "正常",
                    "Auto": "汽车"
                };
                break;
        }
    }
    widgets = ej.widget.registeredWidgets;
    for (name in widgets)
        $.fn.Locale_zhCN(name);
    if (ej.ExcelFilter)
        $.fn.Locale_zhCN("ejExcelFilter");
})(window.jQuery, window.Syncfusion);