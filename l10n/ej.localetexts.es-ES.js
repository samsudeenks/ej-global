(function ($, ej, undefined) {
    var name, widgets;
    if (ej.locales.indexOf("esES") < 0)
        ej.locales.push("esES");
    $.fn.Locale_esES = function (pluginName) {
        switch (pluginName) {
            case "ejAutocomplete":
                ej.Autocomplete.Locale = ej.Autocomplete.Locale || {};
                ej.Autocomplete.Locale["es-ES"] = {
                    addNewText: "Agregar nuevo",
                    emptyResultText: "No hay sugerencias",
                    actionFailure: "El campo especificado no existe en la fuente de datos dada",
                    watermarkText: " "
                };
                break;
            case "ejColorPicker":
                ej.ColorPicker.Locale = ej.ColorPicker.Locale || {};
                ej.ColorPicker.Locale["es-ES"] = {
                    buttonText: {
                        apply: "Aplicar",
                        cancel: "Cancelar",
                        swatches: "Muestras"
                    },
                    tooltipText: {
                        switcher: "conmutador",
                        addButton: "Añadir color",
                        basic: "BASIC",
                        monoChrome: "Monocromo",
                        flatColors: "Colores planos",
                        seaWolf: "Lobo marino",
                        webColors: "Colores Web",
                        sandy: "Arenoso",
                        pinkShades: "tonos rosas",
                        misty: "brumoso",
                        citrus: "Agrios",
                        vintage: "Vendimia",
                        moonLight: "luz de la luna",
                        candyCrush: "Candy Crush",
                        currentColor: "Color actual",
                        selectedColor: "Color seleccionado"
                    },
                };
                break;
            case "ejCurrencyTextbox":
                ej.CurrencyTextbox.Locale = ej.CurrencyTextbox.Locale || {};
                ej.CurrencyTextbox.Locale["es-ES"] = {
                    watermarkText: "introducir el valor",
                };
                break;
            case "ejDatePicker":
                ej.DatePicker.Locale = ej.DatePicker.Locale || {};
                ej.DatePicker.Locale["es-ES"] = {
                    watermarkText: "Seleccione fecha",
                    buttonText: "Hoy",
                };
                break;
            case "ejDateRangePicker":
                ej.DateRangePicker.Locale = ej.DateRangePicker.Locale || {};
                ej.DateRangePicker.Locale["es-ES"] = {
                    ButtonText: {
                        apply: "aplicar",
                        cancel: "cancelar",
                        reset: "Reiniciar"
                    },
                    watermarkText: "seleccionar rango",
                    customPicker: "selector personalizado"
                };
                break;
            case "ejDateTimePicker":
                ej.DateTimePicker.Locale = ej.DateTimePicker.Locale || {};
                ej.DateTimePicker.Locale["es-ES"] = {
                    watermarkText: "seleccione fecha y hora",
                    buttonText: {
                        today: "Hoy",
                        timeNow: "Ahora",
                        done: "Hecho",
                        timeTitle: "Hora"
                    },
                };
                break;
            case "ejDialog":
                ej.Dialog.Locale = ej.Dialog.Locale || {};
                ej.Dialog.Locale["es-ES"] = {
                    tooltip: {
                        close: "Cerca",
                        collapse: "Colapso",
                        restore: "Restaurar",
                        maximize: "Maximizar",
                        minimize: "Minimizar",
                        expand: "Expandir",
                        unPin: "Desprender",
                        pin: "Alfiler"
                    },
                    closeIconTooltip: "cerca",
                };
                break;
            case "ejDropDownList":
                ej.DropDownList.Locale = ej.DropDownList.Locale || {};
                ej.DropDownList.Locale["es-ES"] = {
                    emptyResultText: "No hay sugerencias,",
                    watermarkText: " ",
                };
                break;
            case "ejComboBox":
                ej.ComboBox.Locale["es-ES"] = {
                    noRecordsTemplate: "No se encontrarón archivos",
                    actionFailureTemplate: "La solicitud falló"
                };
                break;
            case "ejMenu":
                ej.Menu.Locale["es-ES"] = {
                    titleText: "menú"
                };
                break;
            case "ejCaptcha":
                ej.Captcha.Locale["es-ES"] = {
                    placeHolderText: "Escribe el código mostrado",
                    CustomErrorMessage: "Captcha inválido"
                };
                break;
            case "ejExcelFilter":
                ej.ExcelFilter.Locale = ej.ExcelFilter.Locale || {};
                ej.ExcelFilter.Locale["es-ES"] = {
                    SortNoSmaller: "Ordenar de menor a mayor",
                    SortNoLarger: "Ordenar de mayor a menor",
                    SortTextAscending: "Ordenar de A a Z",
                    SortTextDescending: "Ordenar de Z a A",
                    SortDateOldest: "Ordenar por Más antiguos",
                    SortDateNewest: "Ordenar por Más reciente",
                    SortByColor: "Ordenar por color",
                    SortByCellColor: "Ordenar por color de la célula",
                    SortByFontColor: "Ordenar por Color de fuente",
                    FilterByColor: "Filtrar por color",
                    CustomSort: "Orden personalizado",
                    FilterByCellColor: "Filtrar por color de la célula",
                    FilterByFontColor: "Filtrar por color de fuente",
                    ClearFilter: "Borrar filtro",
                    NumberFilter: "Número Filtros",
                    GuidFilter: "Gud Filtros",
                    TextFilter: "Filtros de texto",
                    DateFilter: "Filtros de fecha",
                    DateTimeFilter: "Fecha filtros de tiempo",
                    SelectAll: "Seleccionar todo",
                    Blanks: "Los espacios en blanco",
                    Search: "Buscar",
                    Showrowswhere: "Mostrar filas",
                    NumericTextboxWaterMark: "introducir el valor",
                    StringMenuOptions: [{ text: "Igual", value: "equal" }, { text: "No es equal", value: "notequal" }, { text: "Comienza con", value: "startswith" }, { text: "Termina con", value: "endswith" }, { text: "contiene", value: "contains" }, { text: "Filtro personalizado", value: "customfilter" }],
                    NumberMenuOptions: [{ text: "Igual", value: "equal" }, { text: "No es equal", value: "notequal" }, { text: "Menos que", value: "lessthan" }, { text: "Menor o equal", value: "lessthanorequal" }, { text: "Mas grande que", value: "greaterthan" }, { text: "Mayor que o equal", value: "greaterthanorequal" }, { text: "Entre", value: "between" }, { text: "Filtro personalizado", value: "customfilter" }],
                    GuidMenuOptions: [{ text: "Igual", value: "equal" }, { text: "No es equal", value: "notequal" }, { text: "Filtro personalizado", value: "customfilter" }],
                    DateMenuOptions: [{ text: "Igual", value: "equal" }, { text: "No es equal", value: "notequal" }, { text: "Menos que", value: "lessthan" }, { text: "Menor o equal", value: "lessthanorequal" }, { text: "Mas grande que", value: "greaterthan" }, { text: "Mayor que o equal", value: "greaterthanorequal" }, { text: "Entre", value: "between" }, { text: "Filtro personalizado", value: "customfilter" }],
                    DatetimeMenuOptions: [{ text: "Igual", value: "equal" }, { text: "No es equal", value: "notequal" }, { text: "Menos que", value: "lessthan" }, { text: "Menor o equal", value: "lessthanorequal" }, { text: "Mas grande que", value: "greaterthan" }, { text: "Mayor que o equal", value: "greaterthanorequal" }, { text: "Entre", value: "between" }, { text: "Filtro personalizado", value: "customfilter" }],
                    Top10MenuOptions: [{ text: "Parte superior", value: "top" }, { text: "Fondo", value: "bottom" }],
                    title: "Filtro personalizado",
                    PredicateAnd: "Y",
                    PredicateOr: "O",
                    OK: "DE ACUERDO",
                    MatchCase: "Coincidencia",
                    Cancel: "Cancelar",
                    NoResult: "No se encontraron coincidencias",
                    CheckBoxStatusMsg: "No todos los elementos que muestran",
                    DatePickerWaterMark: "Seleccione fecha",
                    DateTimePickerWaterMark: "Seleccionar fecha y hora",
                    True: "cierto",
                    False: "falso",
                    AddToFilter: "Agregar selección actual para filtrar"
                };
                break;
            case "ejFileExplorer":
                ej.FileExplorer.Locale = ej.FileExplorer.Locale || {};
                ej.FileExplorer.Locale["es-ES"] = {
                    Folder: "Carpeta",
                    EmptyResult: "Ningun articulo concuerda con su busqueda",
                    EmptyFolder: "Esta carpeta está vacía",
                    ProtectedFolder: "Sie ist nicht die Berechtigung diesen Ordner zugreifen",
                    Back: "hacia atrás",
                    Forward: "adelante",
                    Upward: "Hacia arriba",
                    Refresh: "refrescar",
                    Addressbar: "Barra de dirección",
                    Upload: "Subir",
                    Rename: "rebautizar",
                    Delete: "borrar",
                    Download: "Descargar",
                    Error: "error",
                    PasteError: "error",
                    UploadError: "error",
                    RenameError: "error",
                    Cut: "cortada",
                    Copy: "copia",
                    Paste: "pasta",
                    Details: "Detalles",
                    Searchbar: "barra de búsqueda",
                    Open: "abierto",
                    Search: "búsqueda",
                    NewFolder: "Nueva Carpeta",
                    Size: "tamaño",
                    RenameAlert: "Por favor, introduzca el nuevo nombre",
                    NewFolderAlert: "Introduzca el nuevo nombre de la carpeta",
                    ContextMenuOpen: "abierto",
                    ContextMenuNewFolder: "nueva carpeta",
                    ContextMenuDelete: "borrar",
                    ContextMenuRename: "rebautizar",
                    ContextMenuUpload: "Subir",
                    ContextMenuDownload: "descargar",
                    ContextMenuCut: "cortada",
                    ContextMenuCopy: "copia",
                    ContextMenuPaste: "pasta",
                    ContextMenuGetinfo: "Obtén información",
                    ContextMenuRefresh: "refrescar",
                    ContextMenuOpenFolderLocation: "Ubicación de la carpeta abierta",
                    ContextMenuSortBy: "Ordenar por",
                    SortBy: "Ordenar por",
                    Item: " artículo",
                    Items: " artículos",
                    Selected: "seleccionado",
                    Permission: "Permiso",
                    OkButton: "Okay",
                    CancelButton: "cancelar",
                    YesButton: "sí",
                    NoButton: "No",
                    YesToAllButton: "Si a todo",
                    NoToAllButton: "No a todos",
                    Size: "tamaño",
                    Grid: "Vista de cuadrícula",
                    Tile: "vista de mosaicos",
                    LargeIcons: "Iconos grandes",
                    Layout: "Diseño",
                    SkipButton: "Omitir",
                    ErrorOnFolderCreation: "Este destino ya contiene una carpeta llamada '{0}'. ¿Desea fusionar este contenido de la carpeta con la carpeta ya existente '{0}'?",
                    InvalidFileName: "Un nombre de archivo no puede contener ninguno de los siguientes caracteres: \\/: *? \\ <> |",
                    GeneralError: "Por favor, vea ventana de la consola del navegador para obtener más información",
                    ErrorPath: "FileExplorer no puede encontrar '{0}'. Revisa la ortografía y vuelva a intentarlo.",
                    UploadReplaceAlert: "Archivo llamado '{0}' ya existe. Reemplazar archivo antiguo por uno nuevo?",
                    PasteReplaceAlert: "Archivo llamado '{0}' ya existe. Reemplazar archivo antiguo por uno nuevo?",
                    DuplicateAlert: "Ya existe un archivo con el mismo nombre '{0}'. ¿Quieres crear el archivo con nombre duplicado",
                    DuplicateFileCreation: "Ya existe un archivo con el mismo nombre en esta ubicación. ¿Quieres cambiar el nombre de '{0}' a '{1}'?",
                    DeleteFolder: " Estas seguro que quieres borrarlo ",
                    DeleteMultipleFolder: "¿Seguro que quieres eliminar estos {0} artículos?",
                    CancelPasteAction: "La carpeta de destino es una subcarpeta de la carpeta de origen.",
                    Name: "nombre",
                    Location: "ubicación",
                    Type: "Tipo De Artículo",
                    Created: "creado",
                    Modified: "Modificado",
                    DialogCloseToolTip: "cerca",
                    UploadSettings: {
                        buttonText: {
                            upload: "Subir",
                            browse: "Explorar",
                            cancel: "cancelar",
                            close: "cerca"
                        },
                        dialogText: {
                            title: "Subir Box",
                            name: "nombre",
                            size: "tamaño",
                            status: "estado"
                        },
                        dropAreaText: "Soltar archivos o hacer clic para cargar",
                        filedetail: "El tamaño del archivo seleccionado es demasiado grande. Seleccione un archivo con el tamaño válido",
                        denyError: "Los archivos con extensión #Extension no están permitidos.",
                        allowError: "Sólo se permiten archivos con extensiones #Extension.",
                        cancelToolTip: "cancelar",
                        removeToolTip: "quitar",
                        retryToolTip: "Reintente",
                        completedToolTip: "terminado",
                        failedToolTip: "fracasado",
                        closeToolTip: "cerca"
                    }
                };
                break;
            case "ejGantt":
                ej.Gantt.Locale = ej.Gantt.Locale || {};
                ej.Gantt.Locale["es-ES"] = {
                    emptyRecord: "No hay registros que mostrar",
                    unassignedTask: "Tarea no asignada",
                    alertTexts: {
                        indentAlert: "No se ha seleccionado ningún registro de Gantt para realizar la sangría",
                        outdentAlert: "No se ha seleccionado ningún registro de Gantt para realizar la sangría inversa",
                        predecessorEditingValidationAlert: "La dependencia cíclica Occurred, compruebe el predecesor",
                        predecessorAddingValidationAlert: "Llenar todas las columnas en la tabla predecesor",
                        idValidationAlert: "ID duplicado",
                        dateValidationAlert: "La fecha de finalización no válida",
                        dialogResourceAlert: "Llenar todas las columnas en la tabla de recursos"
                    },
                    columnHeaderTexts: {
                        taskId: "CARNÉ DE IDENTIDAD",
                        taskName: "Nombre de la tarea",
                        startDate: "Fecha de inicio",
                        endDate: "Fecha final",
                        resourceInfo: "recursos",
                        duration: "Duración",
                        status: "Progreso",
                        taskMode: "Modo de tarea",
                        predecessor: "Antecesores",
                        type: "Tipo",
                        offset: "Compensar",
                        baselineStartDate: "Fecha de Inicio de línea de base",
                        baselineEndDate: "Fecha de finalización de línea de base",
                        WBS: "WBS",
                        WBSPredecessor: "WBS predecesor",
                        dialogCustomFieldName: "Nombre de la columna",
                        dialogCustomFieldValue: "Valor",
                        notes: "notas",
                        taskType: "Tipo de tarea",
                        work: "Trabajo",
                        unit: "Unidad",
                        effortDriven: "Con esfuerzo",
                        resourceName: "Nombre del recurso"
                    },
                    editDialogTexts: {
                        addFormTitle: "Nueva tarea",
                        editFormTitle: "Editar tarea",
                        saveButton: "Salvar",
                        deleteButton: "Borrar",
                        cancelButton: "Cancelar",
                        addPredecessor: "Agregar nuevo",
                        removePredecessor: "retirar",
                        addButton: "Añadir"
                    },
                    columnDialogTexts: {
                        field: "Campo",
                        headerText: "Texto de cabecera",
                        editType: "Editar Tipo",
                        filterEditType: "Editar filtro de Tipo",
                        allowFiltering: "permitir el filtrado",
                        allowFilteringBlankContent: "Permitir el filtrado de contenido en blanco",
                        allowSorting: "permitir la clasificación",
                        visible: "Visible",
                        width: "Anchura",
                        textAlign: "Alineación de texto",
                        headerTextAlign: "Alineación de texto de encabezado",
                        columnsDropdownData: "Columna gota datos de Down",
                        dropdownTableText: "Texto",
                        dropdownTableValue: "Valor",
                        addData: "Añadir",
                        deleteData: "retirar",
                        allowCellSelection: "Permitir selección de la célula",
                        displayAsCheckbox: "Mostrar como casilla de verificación",
                        clipMode: "Modo de clip",
                        tooltip: "Tooltip",
                        showInColumnChooser: "Mostrar en el selector de columna",
                        headerTooltip: "Tooltip del encabezado"
                    },
                    editTypeTexts: {
                        string: "Cuerda",
                        numeric: "Numérico",
                        datePicker: "Selector de fechas",
                        dateTimePicker: "Selector de fecha y hora",
                        dropdown: "Desplegable",
                        boolean: "Booleano"
                    },
                    textAlignTypes: {
                        right: "Derecha",
                        left: "Izquierda",
                        center: "Centrar"
                    },
                    clipModeTexts: {
                        clip: "Acortar",
                        ellipsis: "Elipsis"
                    },
                    toolboxTooltipTexts: {
                        addTool: "Añadir",
                        editTool: "Editar",
                        saveTool: "Actualizar",
                        deleteTool: "Borrar",
                        cancelTool: "Cancelar",
                        searchTool: "Buscar",
                        indentTool: "Sangrar",
                        outdentTool: "Anular sangría",
                        expandAllTool: "Expandir todo",
                        collapseAllTool: "Desplegar todo",
                        nextTimeSpanTool: "Siguiente Timespan",
                        prevTimeSpanTool: "anterior Timespan",
                        criticalPathTool: "Camino critico",
                        excelExportTool: "exportación Excel",
                        printTool: "Impresión",
                        pdfExportTool: "Exportación de PDF"
                    },
                    durationUnitTexts: {
                        days: "días",
                        hours: "horas",
                        minutes: "minutos",
                        day: "día",
                        hour: "hora",
                        minute: "minuto"
                    },
                    durationUnitEditText: {
                        minute: ["m", "min", "minuto", "minutos"],
                        hour: ["h", "hr", "hora", "horas"],
                        day: ["d", "dy", "día", "días"]
                    },
                    workUnitTexts: {
                        days: "días",
                        hours: "horas",
                        minutes: "minutos"
                    },
                    taskTypeTexts: {
                        fixedWork: "trabajo fijo",
                        fixedUnit: "Las unidades fijas",
                        fixedDuration: "Duración fija"
                    },
                    effortDrivenTexts: {
                        yes: "Sí",
                        no: "No"
                    },
                    contextMenuTexts: {
                        taskDetailsText: "Detalles de la tarea ...",
                        addNewTaskText: "Añadir nueva tarea",
                        indentText: "Sangrar",
                        outdentText: "Anular sangría",
                        deleteText: "Borrar",
                        aboveText: "Encima",
                        belowText: "Abajo"
                    },
                    newTaskTexts: {
                        newTaskName: "Nueva tarea"
                    },
                    columnMenuTexts: {
                        sortAscendingText: "Orden ascendente",
                        sortDescendingText: "Orden descendiente",
                        columnsText: "columnas",
                        insertColumnLeft: "Insertar columna izquierda",
                        insertColumnRight: "Insertar columna derecha",
                        deleteColumn: "eliminar columna",
                        renameColumn: "Cambiar el nombre de la columna"
                    },
                    taskModeTexts: {
                        manual: "Manual",
                        auto: "Auto"
                    },
                    columnDialogTitle: {
                        insertColumn: "insertar columna",
                        deleteColumn: "eliminar columna",
                        renameColumn: "Cambiar el nombre de la columna"
                    },
                    deleteColumnText: "¿Está seguro de que quiere eliminar esta columna?",
                    okButtonText: "DE ACUERDO",
                    cancelButtonText: "Cancelar",
                    confirmDeleteText: "Confirmar eliminación",
                    predecessorEditingTexts: {
                        fromText: "De",
                        toText: "A"
                    },
                    dialogTabTitleTexts: {
                        generalTabText: "General",
                        predecessorsTabText: "Antecesores",
                        resourcesTabText: "recursos",
                        customFieldsTabText: "Campos Personalizados",
                        notesTabText: "notas"
                    },
                    predecessorCollectionText: [
                            { id: "SS", text: "comienzo-comienzo", value: "comienzo-comienzo" },
                            { id: "SF", text: "comienzo-Terminar", value: "comienzo-Terminar" },
                            { id: "FS", text: "Terminar-comienzo", value: "Terminar-comienzo" },
                            { id: "FF", text: "Terminar-Terminar", value: "Terminar-Terminar" }
                    ],

                    linkValidationRuleText: {
                        taskBeforePredecessor: "Has movido '{0}' para comenzar antes de que '{1}' termine y las dos tareas estén vinculadas. Como resultado, los enlaces no pueden ser respetados. Seleccione una acción a continuación para realizar",
                        taskAfterPredecessor: "Has movido '{0}' fuera de '{1}' y las dos tareas están vinculadas. Como resultado, los enlaces no pueden ser respetados. Seleccione una acción a continuación para realizar",
                    },
                    linkValidationDialogTitle: "Validar la edición",
                    linkValidationRuleOptions: {
                        cancel: "Cancelar, mantener el enlace existente",
                        removeLink: "Elimina el enlace y mueve '{0}' para comenzar en '{1}'.",
                        preserveLink: "Mueva el '{0}' para comenzar en '{1}' y mantenga el enlace."
                    },
                    connectorLineDialogText: {
                        from: "De",
                        to: "A",
                        taskLink: "Enlace de tareas",
                        lag: "retrasarse",
                        okButtonText: "DE ACUERDO",
                        cancelButtonText: "Cancelar",
                        deleteButtonText: "Borrar",
                        title: "Dependencia de tareas"
                    }
                };
                break;
            case "ejGrid":
                ej.Grid.Locale = ej.Grid.Locale || {};
                ej.Grid.Locale["es-ES"] = {
                    EmptyRecord: "No hay registros que mostrar",
                    GroupDropArea: "Arrastre un encabezado de columna aquí para agrupar su columna",
                    DeleteOperationAlert: "No hay registros seleccionados para la operación de eliminación",
                    EditOperationAlert: "No hay registros seleccionados para la operación de edición",
                    SaveButton: "Salvar",
                    OKButton: "DE ACUERDO",
                    CancelButton: "Cancelar",
                    EditFormTitle: "Detalles de ",
                    AddFormTitle: "Añadir nuevo registro",
                    GroupCaptionFormat: "{{:headerText}}: {{:key}} - {{:count}} {{if count == 1 }} ítem {{else}} artículos {{/if}} ",
                    BatchSaveConfirm: "¿Está seguro de que desea guardar los cambios?",
                    BatchSaveLostChanges: "Se perderán los cambios no guardados. ¿Estás seguro de que quieres continuar?",
                    ConfirmDelete: "¿Seguro que deseas Eliminar registro?",
                    CancelEdit: "¿Está seguro de que desea cancelar los cambios?",
                    PagerInfo: "{0} de {1} Páginas ({2} artículos)",
                    FrozenColumnsViewAlert: "columnas congeladas deben estar en el área gridview",
                    FrozenColumnsScrollAlert: "Habilitar permiten desplazarse durante el uso de columnas congeladas",
                    FrozenNotSupportedException: "Las columnas y filas congelados no son compatibles con la Agrupación, Fila plantilla, plantilla de Detalle, Jerarquía de cuadrícula y Edición por lotes",
                    Add: "Añadir",
                    Edit: "Editar",
                    Delete: "Borrar",
                    Update: "Actualizar",
                    Cancel: "Cancelar",
                    Done: "Hecho",
                    Columns: "columnas",
                    SelectAll: "(Seleccionar todo)",
                    PrintGrid: "Impresión",
                    ExcelExport: "exportación Excel",
                    WordExport: "palabra de exportación",
                    PdfExport: "exportación PDF",
                    StringMenuOptions: [{ text: "Comienza con", value: "StartsWith" }, { text: "Termina con", value: "EndsWith" }, { text: "contiene", value: "Contains" }, { text: "Igual", value: "Equal" }, { text: "No es equal", value: "NotEqual" }],
                    NumberMenuOptions: [{ text: "Menos que", value: "LessThan" }, { text: "Mas grande que", value: "GreaterThan" }, { text: "Menor o equal", value: "LessThanOrEqual" }, { text: "Mayor que o equal", value: "GreaterThanOrEqual" }, { text: "Igual", value: "Equal" }, { text: "No es equal", value: "NotEqual" }, { text: "Entre", value: "Between" }],
                    PredicateAnd: "Y",
                    PredicateOr: "O",
                    Filter: "Filtrar",
                    FilterMenuCaption: "Valor de filtro",
                    FilterMenuFromCaption: "De",
                    FilterMenuToCaption: "A",
                    FilterbarTitle: "s celular de la barra de filtro",
                    MatchCase: "Coincidencia",
                    Clear: "Claro",
                    ResponsiveFilter: "Filtrar",
                    ResponsiveSorting: "Ordenar",
                    Search: "Buscar",
                    NumericTextBoxWaterMark: "Introducir valor",
                    DatePickerWaterMark: "Seleccione fecha",
                    EmptyDataSource: "Origen de datos no debe estar vacío a carga inicial ya que las columnas se generan a partir dataSource en autogenerado columna de cuadrícula",
                    ForeignKeyAlert: "El valor actualizado debe ser un valor de clave externa válida",
                    True: "cierto",
                    False: "falso",
                    UnGroup: "Haga clic aquí para desagrupar",
                    AddRecord: "Agregar registro",
                    EditRecord: "Editar registro",
                    DeleteRecord: "eliminar registro",
                    Save: "Salvar",
                    Grouping: "Grupo",
                    Ungrouping: "Desagrupar",
                    SortInAscendingOrder: "Clasificar en orden ascendente",
                    SortInDescendingOrder: "Clasificar en orden descendente",
                    NextPage: "Siguiente página",
                    PreviousPage: "Pagina anterior",
                    FirstPage: "Primera página",
                    LastPage: "Última página",
                    EmptyRowValidationMessage: "Al menos un campo debe ser actualizado",
                    NoResult: "No se encontraron coincidencias"
                };
                break;
            case "ejmobile":
                if (ej.mobile.Grid) {
                    ej.mobile.Grid.Locale = ej.mobile.Grid.Locale || {};
                    ej.mobile.Grid.Locale["es-ES"] = {
                        emptyResult: "No hay registros que mostrar",
                        filterValidation: "Introduzca los datos de filtros válida",
                        filterTypeValidation: "Introduzca los datos de filtro válidos. La columna de filtro actual es de tipo",
                        captionText: "Artículos",
                        spinnerText: "cargando...",
                        HideColumnAlert: "Al menos una columna se debe mostrar en la cuadrícula",
                        columnSelectorText: "Ocultar columna",
                        columnSelectorDone: "DE ACUERDO",
                        columnSelectorCancel: "Cancelar",
                        columnSelectorWarning: "Advertencia",
                        filterOk: "De acuerdo",
                        filterWarning: "Advertencia"
                    };
                }
                if (ej.mobile.DatePicker) {
                    ej.mobile.DatePicker.Locale = ej.mobile.DatePicker.Locale || {};
                    ej.mobile.DatePicker.Locale["es-ES"] = {
                        confirmText: "Hecho",
                        Windows: {
                            cancelText: "Cancelar",
                            headerText: "Seleccionar fecha",
                            toolbarConfirmText: "hecho",
                            toolbarCancelText: "cerca"
                        },
                    };
                }
                if (ej.mobile.TimePicker) {
                    ej.mobile.TimePicker.Locale = ej.mobile.TimePicker.Locale || {};
                    ej.mobile.TimePicker.Locale["es-ES"] = {
                        confirmText: "Hecho",
                        AM: "A.M",
                        PM: "P.M",
                        Android: {
                            headerText: "Fijar tiempo"
                        },
                        Windows: {
                            cancelText: "Cancelar",
                            headerText: "ELEGIR EL TIEMPO",
                            toolbarCancelText: "cerca",
                            toolbarConfirmText: "hecho"
                        },
                    };

                }
                break;
            case "ejNumericTextbox":
                ej.NumericTextbox.Locale = ej.NumericTextbox.Locale || {};
                ej.NumericTextbox.Locale["es-ES"] = {
                    watermarkText: "introducir el valor",
                };
                break;
            case "ejPivotChart":
                ej.PivotChart.Locale = ej.PivotChart.Locale || {};
                ej.PivotChart.Locale["es-ES"] = {
                    Measure: "Medida",
                    Row: "Fila",
                    Column: "Columna",
                    Value: "Valor",
                    Expand: "Expandir",
                    Collapse: "Colapso",
                    Exit: "Salida",
                    ChartTypes: "Tipos de gráfico",
                    TDCharts: "Gráficos 3D",
                    Tooltip: "Descripción",
                    Exporting: "Exportar",
                    Line: "Línea",
                    Spline: "Ranura",
                    Column: "Columna",
                    Area: "Zona",
                    SplineArea: "Área spline",
                    StepLine: "Línea paso",
                    StepArea: "Zona de paso",
                    Pie: "Tarta",
                    Bar: "Bar",
                    StackingArea: "zona de apilamiento",
                    StackingColumn: "columna de apilado",
                    StackingBar: "Barra de apilamiento",
                    Pyramid: "Pirámide",
                    Funnel: "Embudo",
                    Doughnut: "rosquilla",
                    Scatter: "dispersión",
                    Bubble: "Bubble",
                    TreeMap: "TreeMap",
                    ColumnTD: "Column 3D",
                    PieTD: "Tarta 3D",
                    BarTD: "Bar 3D",
                    StackingBarTD: "Barra de apilamiento 3D",
                    StackingColumnTD: "columna de apilado 3D",
                    Excel: "Excel",
                    Word: "Word",
                    Pdf: "PDF",
                    PNG: "PNG",
                    EMF: "EMF",
                    GIF: "GIF",
                    JPG: "JPG",
                    BMP: "BMP",
                    ZoomIn: "acercarse",
                    ZoomOut: "Disminuir el zoom",
                    Legend: "Leyenda",
                    SmartLabels: "Etiquetas inteligentes",
                    Interactions: "Interacciones",
                    Zooming: "Zoom",
                    Rotate45: "Girar45",
                    Rotate90: "Girar90",
                    Trim: "Recortar",
                    MultipleRows: "Múltiples filas",
                    Wrap: "Envolver",
                    Hide: "Esconder",
                    WrapByWord: "Ajustar por palabra",
                    CrossHair: "Cruz de pelo",
                    TrackBall: "Track Ball",
                    DisableTD: "Deshabilitar Gráficos 3D",
                    None: "Ninguna",
                    Exception: "Excepción",
                    OK: "DE ACUERDO"
                };
                break;
            case "ejPivotClient":
                ej.PivotClient.Locale = ej.PivotClient.Locale || {};
                ej.PivotClient.Locale["es-ES"] = {
                    ClearSorting: "Eliminar orden",
                    ClearFilterFrom: "Borrar filtro de",
                    SortAtoZ: "Ordenar de la A a la Z",
                    SortZtoA: "Ordenar de la Z a la A",
                    DoesNotBeginsWith: "No comienza con",
                    DoesNotEndsWith: "No termina con",
                    DoesNotContains: "No contiene",
                    DoesNotEquals: "No es igual a",
                    IsGreaterThan: "Es mayor que",
                    IsGreaterThanOrEqualTo: "Es mayor que o igual a",
                    IsLessThan: "Es inferior a",
                    IsLessThanOrEqualTo: "Es menor o igual a",
                    NoReports: "No se encontraron informes en DB",
                    Sort: "Ordenar",
                    SelectField: "Seleccione el campo",
                    LabelFilterLabel: "Mostrar los elementos para los que la etiqueta",
                    ValueFilterLabel: "Mostrar los elementos para los cuales",
                    LabelFilters: "Los filtros de etiqueta  ",
                    BeginsWith: "Comienza con",
                    NotBeginsWith: "No comienza con",
                    EndsWith: "Termina con",
                    NotEndsWith: "No termina con",
                    Contains: "Contiene",
                    NotContains: "No contiene",
                    ValueFilters: "Filtros de valor",
                    ClearFilter: "Borrar filtro",
                    Equals: "Es igual a",
                    NotEquals: "No es igual a",
                    GreaterThan: "Mayor que",
                    GreaterThanOrEqualTo: "Mayor que o igual a",
                    LessThan: "Menos de ",
                    LessThanOrEqualTo: "Menor o igual a",
                    Between: "Entre",
                    NotBetween: "No entre",
                    Top10: "Recuento superior",
                    Close: "Cerrar",
                    AddToColumn: "Agregar columna",
                    AddToRow: "Agregar fila",
                    AddToSlicer: "Agregar a Slicer",
                    Value: "Valor",
                    EqualTo: "Igual a",
                    NotEquals: "No es igual a",
                    GreaterThan: "Mayor que",
                    GreaterThanOrEqualTo: "Mayor que o igual a",
                    LessThan: "Menorque",
                    LessThanOrEqualTo: "Menor o igual a",
                    Between: "Entre",
                    NotBetween: "No entre",
                    ReportList: "Lista de informes",
                    Alert: "Alerta",
                    MDXAlertMsg: "Por favor, agregue una medida, dimensión o jerarquía en un eje apropiado para ver la consulta MDX.",
                    FilterSortRowAlertMsg: "No se ha encontrado la dimensión en el eje de filas. Por favor agregar elemento de dimensión en el eje de filas para la ordenación y el filtrado.",
                    FilterSortColumnAlertMsg: "No se ha encontrado la dimensión en el eje de columnas. Por favor agregar elemento de dimensión en el eje de columna para ordenar y filtrar.",
                    FilterSortcolMeasureAlertMsg: "Agregue la medida en el eje de columna",
                    FilterSortrowMeasureAlertMsg: "Agregue medir al eje de filas",
                    FilterSortElementAlertMsg: "Elemento no encontrado en el eje de columna. Agregue un elemento en la columna para ordenar/filtrado de eje.",
                    FilterMeasureSelectionAlertMsg: "Por favor seleccione una medida válida.",
                    FilterConditionAlertMsg: "Por favor, establezca una condición válida.",
                    FilterStartValueAlertMsg: "Por favor, establezca un valor inicial.",
                    FilterEndValueAlertMsg: "Por favor, establezca un valor final.",
                    FilterInvalidAlertMsg: "Operación inválida !",
                    DeferUpdate: "Aplazar actualización",
                    MDXQuery: "MDX",
                    Row: "Fila",
                    Slicer: "máquina de cortar",
                    CubeSelector: "Selector de cubo",
                    ReportName: "Reportar nombre",
                    NewReport: "Nuevo reporte",
                    CubeDimensionBrowser: "Navegador dimensión de cubo",
                    AddReport: "Agregar informe",
                    RemoveReport: "Retire Informe",
                    CannotRemoveSingleReport: "No se puede eliminar solo informe",
                    AreYouSureToDeleteTheReport: "¿Está seguro que desea borrar el Informe",
                    RenameReport: "Cambiar el nombre de Informe",
                    ChartTypes: "Tipos de gráficos",
                    ToggleAxis: "Alternar Eje",
                    ExportToExcel: "Exportar a Excel",
                    ExportToWord: "Exportar a Word",
                    ExportToPdf: "Exportar a PDF",
                    FullScreen: "Pantalla completa",
                    Grid: "Cuadrícula",
                    Chart: "Gráfico",
                    OK: "DE ACUERDO",
                    Cancel: "Cancelar",
                    MeasureEditor: "medir Editor",
                    MemberEditor: "miembro Editor",
                    Measures: "medidas",
                    SortOrFilterColumn: "Ordenar / Filtro (Columna)",
                    SortOrFilterRow: "Ordenar / Filtro (fila)",
                    SortingAndFiltering: "Clasificación y filtrado",
                    Sorting: "Clasificación",
                    Measure: "<U> M </ u> medida",
                    Order: "Orden",
                    Filtering: "Filtración",
                    Condition: "C <u> o </ u> ndition",
                    PreserveHierarchy: "P <u> r </ u> eserva Jerarquía",
                    Ascending: "<U> A </ u> ascendente",
                    Descending: "D <u> e </ u> ascendente",
                    Enable: "E <u> n </ u> poder",
                    Disable: "D <u> i </ u> sable",
                    and: "y",
                    Line: "Línea",
                    Spline: "Ranura",
                    Column: "Columna",
                    Area: "Zona",
                    SplineArea: "Área spline",
                    StepLine: "Línea paso",
                    StepArea: "Zona de paso",
                    Pie: "Tarta",
                    Bar: "Bar",
                    StackingArea: "zona de apilamiento",
                    StackingColumn: "columna de apilado",
                    StackingBar: "Barra de apilamiento",
                    Pyramid: "Pirámide",
                    Funnel: "Embudo",
                    Doughnut: "rosquilla",
                    Scatter: "dispersión",
                    Bubble: "Bubble",
                    TreeMap: "TreeMap",
                    SelectRecordAlertMsg: "Seleccione un registro válido.",
                    RecordName: "Nombre de registro",
                    RemoveRecord: "Quitar registro",
                    RenameRecord: "Cambiar nombre de registro",
                    Load: "Cargar",
                    Remove: "Retirar",
                    Save: "Guardar",
                    SaveAs: "Guardarcomo",
                    SelectRecord: "Seleccionar registro",
                    SelectReport: "Seleccione Informe",
                    DBReport: "La manipulación del informe en DB",
                    Rename: "Renombrar",
                    Remove: "Retirar",
                    SetRecordNameAlertMsg: "Por favor, establezca el nombre del registro.",
                    SetReportNameAlertMsg: "Por favor, establezca el nombre del informe.",
                    Search: "Buscar",
                    MultipleItems: "Varios elementos",
                    All: "Todos",
                    CalculatedMember: "Miembro calculado",
                    Caption: "Título:",
                    Expression: "Expresión:",
                    MemberType: "Tipo de socio:",
                    FormatString: "Cadena de formato:",
                    MultipleMeasure: "Más que una medida no puede ser en rodajas.",
                    DuplicateCalcMeasure: "Miembro calculado con el mismo nombre ya existe.",
                    EmptyField: "Nombre del miembro calculado o expresión no puede estar vacío.",
                    EmptyFormat: "Cadena de formato para miembro calculado está vacía.",
                    Warning: "Advertencia",
                    Confirm: "Miembro calculado con el mismo nombre ya existe. Debido a que desea reemplazar ?",
                    KPIs: "KPI",
                    Collection: "Colección",
                    Report: "informe",
                    AddCurrentSelectionToFilter: "Añadir la selección actual al filtro",
                    SaveMsg: "Informe guardado correctamente!!!",
                    RenameMsg: "Se ha cambiado el nombre de informe!!!",
                    RemoveMsg: "Informe eliminado correctamente!!!",
                    Success: "Éxito",
                    KpiAlertMsg: "El campo que está moviendo no se puede colocar en esa área del informe",
                    NotAllItemsShowing: "No todos los nodos secundarios se muestran",
                    EditorLinkPanelAlert: "Los miembros tiene más de 1000 elementos en virtud de uno o más padres. Sólo los primeros 1000 elementos se muestran debajo de cada progenitor.",
                    NamedSetAlert: "Un conjunto con nombre no se puede agregar a un informe de tabla dinámica al mismo tiempo que otro conjunto con nombre se basa en el mismo campo. Haga clic en Aceptar para eliminar ' <Set 1> ' conjunto con nombre y agregar ' <Set 2> ' conjunto con nombre.",
                    Exception: "Excepción"
                };
                break;
            case "ejPivotGauge":
                ej.PivotGauge.Locale = ej.PivotGauge.Locale || {};
                ej.PivotGauge.Locale["es-ES"] = {
                    RevenueGoal: "ingresos Meta",
                    RevenueValue: "Valor de ingresos",
                    Exception: "Excepción"
                };
                break;
            case "ejPager":
                ej.Pager.Locale = ej.Pager.Locale || {};
                ej.Pager.Locale["es-ES"] = {
                    pagerInfo: "{0} de {1} Páginas ({2} artículos)",
                    firstPageTooltip: "Ir a la primera página",
                    lastPageTooltip: "Ir a la última página",
                    nextPageTooltip: "Ir a la página siguiente",
                    previousPageTooltip: "Regresar a la pagina anterior",
                    nextPagerTooltip: "Ir a la página siguiente",
                    previousPagerTooltip: "Regresar a la pagina anterior",
                };
                break;
            case "ejPdfViewer":
                ej.PdfViewer.Locale = ej.PdfViewer.Locale || {};
                ej.PdfViewer.Locale["es-ES"] = {
                    toolbar: {
                        print: {
                            headerText: "Impresión",
                            contentText: "Imprimir el documento PDF."
                        },
                        first: {
                            headerText: "primero",
                            contentText: "Ir a la primera página del documento PDF."
                        },
                        previous: {
                            headerText: "Anterior",
                            contentText: "Ir a la página anterior del documento PDF."
                        },
                        next: {
                            headerText: "Siguiente",
                            contentText: "Ir a la página siguiente del documento PDF."
                        },
                        last: {
                            headerText: "Último",
                            contentText: "Ir a la última página del documento PDF."
                        },
                        zoomIn: {
                            headerText: "Acercarse",
                            contentText: "Acercar al documento PDF."
                        },
                        zoomOut: {
                            headerText: "Disminuir el zoom",
                            contentText: "Alejar la imagen del documento PDF."
                        },
                        pageIndex: {
                            headerText: "Número de página",
                            contentText: "número de página actual para ver."
                        },
                        zoom: {
                            headerText: "Enfocar",
                            contentText: "Zoom para acercar o alejar el documento PDF."
                        },
                        fitToWidth: {
                            headerText: 'Ajustar al ancho',
                            contentText: 'Ajuste a la página PDF a la anchura del contenedor .'
                        },
                        fitToPage: {
                            headerText: 'Ajustar a la página',
                            contentText: 'Ajuste a la página PDF al contenedor .'
                        },
                        download: {
                            headerText: 'Descargar',
                            contentText: 'Descargar el documento PDF .'
                        },
                        search: {
                            headerText: 'Buscar texto',
                            contentText: 'Buscar texto en las páginas PDF .'
                        },
                        highlight: {
                            headerText: 'Subrayar el texto',
                            contentText: 'Resaltar texto en las páginas PDF.',
                        },
                        strikeout: {
                            headerText: 'Texto de StrikeOut',
                            contentText: 'Strike Out en las páginas PDF.',
                        },
                        underline: {
                            headerText: 'Subrayar el texto',
                            contentText: 'Subraye el texto en las páginas PDF.',
                        },
                        signature: {
                            headerText: 'Firma',
                            contentText: 'Agregue o cree la firma escrita a mano.',
                        },
                        select: {
                            headerText: 'Selección',
                            contentText: 'Herramienta de selección de texto.',
                        },
                        scroll: {
                            headerText: 'Panning',
                            contentText: 'Haga clic para desplazarse alrededor del documento',
                        },
                    },
                    contextMenu: {
                        copy: {
                            contentText: 'Dupdo',
                        },
                        googleSearch: {
                            contentText: 'Busca en Google',
                        },
                        Find: {
                            contentText: 'Encontrar:',
                        },
                        matchCase: {
                            contentText: 'MatchCase',
                        },
                        auto: {
                            contentText: 'Auto',
                        },
                        openPopup: {
                            contentText: 'OpenPopup',
                        },
                        Delete: {
                            contentText: 'Borrar',
                        },
                        properties: {
                            contentText: 'Propiedades....',
                        },
                    },
                    propertyWindow: {
                        underlineProperties: {
                            contentText: "Subrayar propiedades"
                        },
                        strikeOutProperties: {
                            contentText: "StrikeOutProperties"
                        },
                        highlightProperties: {
                            contentText: "DestacadosProperties"
                        },
                        signatureProperties: {
                            contentText: "Firma propiedades"
                        },
                        appearance: {
                            contentText: "apariencia"
                        },
                        general: {
                            contentText: "general"
                        },
                        color: {
                            contentText: "kleur:"
                        },
                        opacity: {
                            contentText: "opacidad:"
                        },
                        author: {
                            contentText: "autor:"
                        },
                        subject: {
                            contentText: "tema:"
                        },
                        modified: {
                            contentText: "modificado:"
                        },
                        ok: {
                            contentText: "De acuerdo"
                        },
                        cancel: {
                            contentText: "cancelar"
                        },
                        locked: {
                            contentText: "Bloqueado"
                        }
                    },
                    signatureWindow: {
                        Signature: {
                            contentText: "Añadir firma"
                        },
                        Add: {
                            contentText: "Añadir"
                        },
                        clear: {
                            contentText: "Claro"
                        },
                    },
                    waitingPopup: {
                        print: {
                            contentText: "Preparación del documento para imprimir ..."
                        }
                    }
                };
                break;
            case "ejPercentageTextbox":
                ej.PercentageTextbox.Locale = ej.PercentageTextbox.Locale || {};
                ej.PercentageTextbox.Locale["es-ES"] = {
                    watermarkText: "introducir el valor",
                };
                break;
            case "ejPivotGrid":
                ej.PivotGrid.Locale = ej.PivotGrid.Locale || {};
                ej.PivotGrid.Locale["es-ES"] = {
                    Total: "Total",
                    GrandTotal: "Gran Total",
                    DoesNotBeginsWith: "No comienza con",
                    DoesNotEndsWith: "No termina con",
                    DoesNotContains: "No contiene",
                    DoesNotEquals: "No es igual a",
                    IsGreaterThan: "Es mayor que",
                    IsGreaterThanOrEqualTo: "Es mayor que o igual a",
                    IsLessThan: "Es inferior a",
                    IsLessThanOrEqualTo: "Es menor o igual a",
                    ClearSorting: "Eliminar orden",
                    ClearFilterFrom: "Borrar filtro de",
                    SortAtoZ: "Ordenar de la A a la Z",
                    SortZtoA: "Ordenar de la Z a la A",
                    and: "y",
                    NumberFormatting: "Formato de número",
                    FrozenHeaders: "Encabezados congelados",
                    CellSelection: "Selección de celdas",
                    CellContext: "Contexto celular",
                    ColumnResize: "Cambiar tamaño de columna",
                    Layouts: "Diseños",
                    NormalLayout: "Presentación normal",
                    NormalTopSummary: "Diseño NormalTopSummary",
                    NoSummaries: "Diseño NoSummaries",
                    ExcelLikeLayout: "Diseño similar de Excel",
                    FrozenHeader: "Cabezal congelados",
                    AdvancedFiltering: "Filtrado avanzado",
                    Amount: "Cantidad",
                    Quantity: "Cantidad",
                    Measures: "Medidas",
                    NumberFormats: "Formatos de número",
                    Exporting: "Exportar",
                    FileName: "Nombre de archivo",
                    ToolTip: "La punta de la herramienta",
                    RTL: "RTL",
                    CollapseByDefault: "Colapso por defecto",
                    EnableDisablePaging: "Enable/Disable la paginación",
                    PagingOptions: "Opciones de paginación",
                    CategoricalPageSize: "Tamaño de página categórica",
                    SeriesPageSize: "Tamaño de página de la serie",
                    HyperLink: "Hipervínculo",
                    CellEditing: "La edición de celdas",
                    GroupingBar: "Barra de agrupamiento",
                    SummaryCustomization: "Personalización de resumen",
                    SummaryTypes: "Tipos de resumen",
                    SummaryType: "Tipo de resumen",
                    EnableRowHeaderHyperlink: "Activar Encabezado de fila Hipervínculo",
                    EnableColumnHeaderHyperlink: "Habilitar el encabezado de la columna Hipervínculo",
                    EnableValueCellHyperlink: "El valor Enable CellHyperLink",
                    EnableSummaryCellHyperlink: "Habilitar SummaryCellHyperLink",
                    HideGrandTotal: "Ocultar GrandTotal",
                    HideSubTotal: "Ocultar SubTotal",
                    Both: "Ambos",
                    Sum: "Suma",
                    Average: "Promedio",
                    Count: "Contar",
                    Min: "Min",
                    Max: "Máx.",
                    Excel: "Excel",
                    Word: "Word",
                    PDF: "PDF",
                    CSV: "CSV",
                    Sort: "Ordenar",
                    SelectField: "Seleccione el campo",
                    LabelFilterLabel: "Mostrar los elementos para los que la etiqueta",
                    ValueFilterLabel: "Mostrar los elementos para los que la etiqueta",
                    LabelFilters: "Los filtros de etiqueta  ",
                    BeginsWith: "Comienza con",
                    NotBeginsWith: "No comienza con",
                    EndsWith: "Termina con",
                    NotEndsWith: "No termina con",
                    Contains: "Contiene",
                    NotContains: "No contiene",
                    ValueFilters: "Filtros de valor",
                    ClearFilter: "Borrar filtro",
                    Equals: "Es igual a",
                    NotEquals: "No es igual a",
                    GreaterThan: "Mayor que",
                    GreaterThanOrEqualTo: "Mayor que o igual a",
                    LessThan: "Menos de ",
                    LessThanOrEqualTo: "Menor o igual a ",
                    Between: "Entre",
                    NotBetween: "No entre",
                    AddToFilter: "Añadir al filtro",
                    AddToRow: "Agregar fila",
                    AddToColumn: "Agregar columna",
                    AddToValues: "Agregar a valores",
                    Warning: "Advertencia",
                    Error: "Error",
                    GroupingBarAlertMsg: "El campo que está moviendo no se puede colocar en esa área del informe",
                    Measures: "Medidas",
                    Expand: "Ampliar",
                    Collapse: "Colapso",
                    ToolTipRow: "Fila",
                    ToolTipColumn: "Columna",
                    ToolTipValue: "Valor",
                    NoValue: "Ningún valor",
                    SeriesPage: "Página Series",
                    CategoricalPage: "Página categórica",
                    DragFieldHere: "Arrastre el campo aquí",
                    ColumnArea: "Drop column aquí",
                    RowArea: "Fila de caída aquí",
                    ValueArea: "Aquí los valores de caída",
                    Close: "Cerrar",
                    OK: "OK",
                    Cancel: "Cancelar",
                    Remove: "Retirar",
                    Goal: "Objetivo",
                    Status: "El estado",
                    Trend: "Tendencia",
                    Value: "Valor",
                    ConditionalFormattingErrorMsg: "El valor dado no coincide",
                    ConditionalFormattingConformMsg: "¿Está seguro de que desea quitar el formato seleccionado?",
                    EnterOperand1: "Introduzca operando1",
                    EnterOperand2: "Introduzca operando2",
                    ConditionalFormatting: "Formato condicional",
                    Condition: "Tipo condicional",
                    Value1: "Valor1",
                    Value2: "Valor2",
                    Editcondtion: "Editar condición",
                    AddNew: "Agregar nuevo",
                    Format: "Formato",
                    Backcolor: "Color de fondo",
                    Borderrange: "Rango de la frontera",
                    Borderstyle: "Estilo de borde",
                    Fontsize: "El tamaño de la fuente",
                    Fontstyle: "Estilo de fuente",
                    Bordercolor: "Color del borde",
                    NoMeasure: "Por favor agregue cualquier medida",
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
                    Dotted: "Salpicada",
                    Double: "Doble",
                    Groove: "Groove",
                    Inset: "Inset",
                    Outset: "Inicio",
                    Ridge: "Ridge",
                    None: "Ninguno",
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
                    CubeDimensionBrowser: "Dimensión del cubo Browser",
                    SelectHierarchy: "Seleccione la jerarquía",
                    CalculatedField: "Campo calculado",
                    Name: "Nombre:",
                    Add: "Agregar",
                    Formula: "Fórmula:",
                    Delete: "Eliminar",
                    Fields: "Campos:",
                    CalculatedFieldNameNotFound: "Dado CalculatedField nombre es no encontrado",
                    InsertField: "Insertar campo",
                    EmptyField: "Introduzca el nombre del campo calculado o fórmula",
                    NotValid: "Fórmula dada no es válido",
                    NotPresent: "Campo Valor utilizado en ninguna de las fórmulas de campo calculado no está presente en el PivotGrid",
                    Confirm: "Campo calculado con el mismo nombre ya existe. Debido a que desea reemplazar ?",
                    CalcValue: "Campo calculado sólo puede insertarse en el valor de área de campo",
                    MultipleItems: "Varios elementos",
                    All: "Todos",
                    Search: "Buscar",
                    Fontcolor: "Color de fuente",
                    AddCurrentSelectionToFilter: "Añadir la selección actual al filtro",
                    Months: "Meses",
                    Days: "Días",
                    Quarters: "Cuartos",
                    Years: "Años",
                    Qtr: "Trim.",
                    Quarter: "Trimestre",
                    NoRecordsToDisplay: "No hay registros que mostrar.",
                    EnterFormatName: "Introduzca el nombre del formato",
                    FormatName: "El nombre de formato",
                    RemoveFormat: "Quitar formato",
                    Edit: "Editar",
                    DuplicateFormatName: "Nombre de formato duplicado",
                    NotAllItemsShowing: "No todos los nodos secundarios se muestran",
                    EditorLinkPanelAlert: "Los miembros tiene más de 1000 elementos en virtud de uno o más padres. Sólo los primeros 1000 elementos se muestran debajo de cada progenitor.",
                    Exception: "Excepción"
                };
                break;
            case "ejPivotPager":
                ej.PivotPager.Locale = ej.PivotPager.Locale || {};
                ej.PivotPager.Locale["es-ES"] = {
                    SeriesPage: "series Page",
                    CategoricalPage: "categórica página",
                    Error: "Error",
                    OK: "OK",
                    Close: "Cerrar",
                    PageCountErrorMsg: "Introduzca el número de página válida"
                };
                break;
            case "ejPivotSchemaDesigner":
                ej.PivotSchemaDesigner.Locale = ej.PivotSchemaDesigner.Locale || {};
                ej.PivotSchemaDesigner.Locale["es-ES"] = {
                    DoesNotBeginsWith: "No comienza con",
                    DoesNotEndsWith: "No termina con",
                    DoesNotContains: "No contiene",
                    DoesNotEquals: "No es igual a",
                    IsGreaterThan: "Es mayor que",
                    IsGreaterThanOrEqualTo: "Es mayor que o igual a",
                    IsLessThan: "Es inferior a",
                    IsLessThanOrEqualTo: "Es menor o igual a",
                    ClearSorting: "Eliminar orden",
                    ClearFilterFrom: "Borrar filtro de",
                    SortAtoZ: "Ordenar de la A a la Z",
                    SortZtoA: "Ordenar de la Z a la A",
                    and: "y",
                    PivotTableFieldList: "Lista de campos de tabla dinámica",
                    ChooseFieldsToAddToReport: "Elija los campos para añadir a reportar:",
                    DragFieldBetweenAreasBelow: "Arrastre los campos entre las áreas a continuación:",
                    ReportFilter: "Filtro de informe",
                    ColumnLabel: "columna Etiqueta",
                    RowLabel: "fila Label",
                    Values: "Valores",
                    DeferLayoutUpdate: "Defer Disposición de actualización",
                    Update: "Actualizar",
                    Sort: "Ordenar",
                    SelectField: "Seleccione el campo",
                    LabelFilterLabel: "Mostrar los elementos para los que la etiqueta",
                    ValueFilterLabel: "Mostrar los elementos para los cuales",
                    LabelFilters: "Los filtros de etiqueta ",
                    BeginsWith: "Comienza con",
                    NotBeginsWith: "No comienza con",
                    EndsWith: "Termina con",
                    NotEndsWith: "No termina con",
                    Contains: "Contiene",
                    NotContains: "No contiene",
                    ValueFilters: "Filtros de valor",
                    ClearFilter: "Borrar filtro",
                    Equals: "Es igual a",
                    NotEquals: "No es igual a",
                    GreaterThan: "Mayor que",
                    GreaterThanOrEqualTo: "Mayor que o igual a ",
                    LessThan: "Menos de",
                    LessThanOrEqualTo: "Menor o igual a ",
                    Between: "Entre",
                    NotBetween: "No entre",
                    ClearFilter: "Borrar filtro",
                    SelectField: "Seleccione el campo",
                    Measures: "Medidas",
                    Warning: "Advertencia",
                    AlertMsg: "El campo que está moviendo no se puede colocar en esa área del informe",
                    Goal: "Objetivo",
                    Status: "El estado",
                    Trend: "Tendencia",
                    Value: "Valor",
                    AddToFilter: "Añadir al filtro",
                    AddToRow: "Agregar fila",
                    AddToColumn: "Agregar columna",
                    AddToValues: "Añadir al valor",
                    OK: "OK",
                    Cancel: "Cancelar",
                    Close: "Cerrar",
                    Search: "Buscar",
                    Remove: "Retirar",
                    AddCurrentSelectionToFilter: "Añadir la selección actual al filtro",
                    NotAllItemsShowing: "No todos los nodos secundarios se muestran",
                    EditorLinkPanelAlert: "Los miembros tiene más de 1000 elementos en virtud de uno o más padres. Sólo los primeros 1000 elementos se muestran debajo de cada progenitor.",
                    NamedSetAlert: "Un conjunto con nombre no se puede agregar a un informe de tabla dinámica al mismo tiempo que otro conjunto con nombre se basa en el mismo campo. Haga clic en Aceptar para eliminar ' <Set 1> ' conjunto con nombre y agregar ' <Set 2> ' conjunto con nombre."
                };
                break;
            case "ejDiagram":
                ej.datavisualization.Diagram.Locale = ej.datavisualization.Diagram.Locale || {};
                ej.datavisualization.Diagram.Locale["es-ES"] = {
                    cut: "Cortar",
                    copy: "Copia",
                    paste: "Pegar",
                    undo: "Deshacer",
                    redo: "Rehacer",
                    selectAll: "Seleccionar todo",
                    grouping: "Agrupamiento",
                    group: "Grupo",
                    ungroup: "Desagrupar",
                    order: "Orden",
                    bringToFront: "Traer al frente",
                    moveForward: "Se desplaza hacia adelante",
                    sendBackward: "Enviar atrás",
                    sendToBack: "Enviar al fondo",
                };
                break;
            case "ejChart":
                ej.datavisualization.Chart.Locale = ej.datavisualization.Chart.Locale = {};
                ej.datavisualization.Chart.Locale["es-ES"] = {
                    zoomIn: "Acercarse",
                    zoomOut: "Disminuir el zoom",
                    zoom: "Enfocar",
                    pan: "Pan",
                    reset: "Reiniciar"
                };
                break;
            case "ejRangeNavigator":
                ej.datavisualization.RangeNavigator.Locale = ej.datavisualization.RangeNavigator.Locale || {};
                ej.datavisualization.RangeNavigator.Locale["es-ES"] = {
                    intervals: {
                        quarter: {
                            longQuarters: "Trimestre,",
                            shortQuarters: "Q"
                        },
                        week: {
                            longWeeks: "Semana,",
                            shortWeeks: "W"
                        },
                    },
                };
                break;
            case "ejMap":
                ej.datavisualization.Map.Locale = ej.datavisualization.Map.Locale || {};
                ej.datavisualization.Map.Locale["es-ES"] = {
                    zoomIn: "Acercarse",
                    zoomOut: "Disminuir el zoom",
                    panTop: "Pan Top",
                    panBottom: "pan fondo",
                    panLeft: "Pan izquierda",
                    panRight: "Pan derecha",
                    home: "Casa"
                };
                break;
            case "ejReportViewer":
                ej.ReportViewer.Locale = ej.ReportViewer.Locale || {};
                ej.ReportViewer.Locale["es-ES"] = {
                    toolbar: {
                        print: {
                            headerText: "Impresión",
                            contentText: "Imprimir el informe"
                        },
                        exportformat: {
                            headerText: "Exportar",
                            contentText: "Seleccione el formato de archivo exportado",
                            Pdf: "PDF",
                            Excel: "Sobresalir",
                            Word: "Palabra",
                            Html: "html",
                            PPT: "PPT",
                            CSV: 'CSV'
                        },
                        first: {
                            headerText: "primero",
                            contentText: "Ir a la primera página del informe."
                        },
                        previous: {
                            headerText: "Anterior",
                            contentText: "Ir a la página anterior del informe."
                        },
                        next: {
                            headerText: "Siguiente",
                            contentText: "Ir a la página siguiente del informe."
                        },
                        last: {
                            headerText: "Último",
                            contentText: "Ir a la última página del informe."
                        },
                        documentMap: {
                            headerText: "Mapa del documento",
                            contentText: "Mostrar u ocultar el mapa del documento."
                        },
                        parameter: {
                            headerText: "Parámetro",
                            contentText: "Mostrar u ocultar el panel de parámetros."
                        },
                        zoomIn: {
                            headerText: "Acercarse",
                            contentText: "Agrandar el informe."
                        },
                        zoomOut: {
                            headerText: "Disminuir el zoom",
                            contentText: "Alejar del informe."
                        },
                        refresh: {
                            headerText: "Refrescar",
                            contentText: "Actualizar el informe."
                        },
                        printLayout: {
                            headerText: "Diseño de impresión",
                            contentText: "Cambiar entre el diseño de impresión y los modos normales."
                        },
                        pageIndex: {
                            headerText: "Número de página",
                            contentText: "número de página actual para ver."
                        },
                        zoom: {
                            headerText: "Enfocar",
                            contentText: "Zoom para acercar o alejar el informe."
                        },
                        back: {
                            headerText: "Espalda",
                            contentText: "Volver al informe de los padres."
                        },
                        fittopage: {
                            headerText: "Ajustar a la página",
                            contentText: "Montar la página del informe al contenedor.",
                            pageWidth: "Ancho de página",
                            pageHeight: "Toda la pagina"
                        },
                        pagesetup: {
                            headerText: "Configurar página",
                            contentText: "Elija la opción de configuración de página para cambiar el tamaño del papel, la orientación y los márgenes."
                        }
                    },
                    pagesetupDialog: {
                        close: "Cerca",
                        paperSize: "Tamaño de papel",
                        height: "Altura",
                        width: "Anchura",
                        margins: "márgenes",
                        top: "Parte superior",
                        bottom: "Fondo",
                        right: "Derecha",
                        left: "Izquierda",
                        unit: "pg",
                        orientation: "Orientación",
                        portrait: "Retrato",
                        landscape: "Paisaje",
                        doneButton: "Hecho",
                        cancelButton: "Cancelar"
                    },
                    credential: {
                        userName: "Nombre de usuario",
                        password: "Contraseña"
                    },
                    waterMark: {
                        selectOption: "Seleccionar opción",
                        selectValue: "Seleccione un valor"
                    },
                    errorMessage: {
                        startMessage: "Report Viewer encontró algunos problemas al cargar este informe. Por favor",
                        middleMessage: " haga clic aquí",
                        endMessage: "para ver los detalles del error",
                        closeMessage: "Cerrar este mensaje"
                    },
                    alertMessage: {
                        close: "Cerca",
                        title: "ReportViewer",
                        done: "DE ACUERDO",
                        showDetails: "Mostrar detalles",
                        hideDetails: "Ocultar detalles",
                        reportLoad: "Informe cargado:",
                        RVERR0001: "ReportViewer no pudo cargar el Informe",
                        RVERR0002: "ReportViewer no pudo procesar el Informe",
                        RVERR0003: "Se produjo un error en la devolución de datos de ajax",
                        RVERR0004: "Seleccione un valor para el parámetro",
                        RVERR0005: "Al parámetro {nombre de parámetro} le falta un valor",
                        RVERR0006: "Por favor ingrese la entrada del tipo de datos float",
                        RVERR0007: "Ingrese la entrada de tipo de datos enteros",
                        RVERR0008: "ReportViewer no pudo validar las credenciales de Datasource",
                        RVERR0009: "Los márgenes están superpuestos o están fuera del papel. Ingrese un tamaño de margen diferente.",
                        RVERR0010: "Ingrese un valor para el parámetro",
                        RVERR0011: "El parámetro no puede estar en blanco",
                        RVERR0012: "El valor proporcionado para el parámetro de informe {parameterprompt} no es válido para su tipo."
                    },
                    selectAll: "Seleccionar todo",
                    viewButton: "Vista del informe"
                };
                break;
            case "ejReportDesigner":
                ej.ReportDesigner.Locale = ej.ReportDesigner.Locale || {};
                ej.ReportDesigner.Locale['es-ES'] = {
                    itemPanel: {
                        waterMarkText: 'Widgets de búsqueda',
                        noDataFound: 'No se encontraron coincidencias...',
                        groupItems: {
                            basicItems: {
                                groupName: 'Artículos básicos',
                                Items: {
                                    'Línea': 'Línea',
                                    'image': 'Imagen',
                                    'textBox': 'Caja de texto',
                                    'rectangle': 'Rectángulo'
                                }
                            },
                            comparison: {
                                groupName: 'Comparación',
                                Items: {
                                    'Columna': 'Columna',
                                    'bar': 'Bar',
                                    'stackedColumn': 'Columna apilada',
                                    'stackedBar': 'Barra apilada',
                                    'stackedColumnPercent': 'Columna apilada100%',
                                    'stackedBarPercent': 'Stacked Bar100%'
                                }
                            },
                            proportion: {
                                groupName: 'Proporción',
                                Items: {
                                    'pie': 'Tarta',
                                    'explodedPie': 'Pie estallado',
                                    'doughnut': 'Rosquilla',
                                    'pyramid': 'Pirámide',
                                    'funnel': 'Embudo'
                                }
                            },
                            distribution: {
                                groupName: 'Distribución',
                                Items: {
                                    'area': 'Zona',
                                    'smoothArea': 'Área suave',
                                    'stackedArea': 'Área apilada',
                                    'stackedAreaPercent': 'Área apilada100%',
                                    'Línea': 'Línea',
                                    'smoothLine': 'Línea suave',
                                    'steppedLine': 'Línea escalonada',
                                    'lineWithMarkers': 'Línea con marcadores',
                                    'smoothLineWithMarkers': 'SmoothLine con marcadores',
                                    'scatter': 'Dispersión',
                                    'bubble': 'Burbuja',
                                    'polar': 'Polar',
                                    'radar': 'Radar'
                                }
                            },
                            dataRegions: {
                                groupName: 'Regiones de datos',
                                Items: {
                                    'grid': 'Cuadrícula',
                                    'pivotgrid': 'PivotGrid'
                                }
                            },
                            subReports: {
                                groupName: 'Informes secundarios',
                                Items: {
                                    'subreport': 'Subinforme'
                                }
                            }
                        }
                    },
                    toolbar: {
                        newReport: 'Nuevo',
                        open: 'Abierto',
                        openMenu: {
                            fromDevice: 'Del dispositivo',
                            fromServer: 'Del dispositivo',
                        },
                        save: 'Salvar',
                        saveMenu: {
                            saveLabel: 'Salvar',
                            saveAs: 'Guardar como',
                            saveAsMenu: {
                                saveToDevice: 'Al dispositivo',
                                saveToServer: 'Al servidor'
                            }
                        },
                        cut: 'Cortar',
                        copy: 'Dupdo',
                        paste: 'Pegar',
                        undo: 'Deshacer',
                        redo: 'Rehacer',
                        zoomIn: 'acercarse',
                        zoomOut: 'Disminuir el zoom',
                        deleteItem: 'Borrar',
                        gridLine: 'Líneas de cuadrícula',
                        header: 'Encabezamiento',
                        footer: 'Pie de página',
                        preview: 'Avance',
                        reportUpload: {
                            alertLabel: 'Subir',
                            alertMessage: 'Error al cargar el archivo. Por favor carga de nuevo'
                        }
                    },
                    newReport: {
                        title: 'Nuevo reporte',
                        fileName: 'Nombre del archivo',
                        waterMark: 'Reportar nombre',
                        create: 'Crear',
                        cancel: 'Cancelar',
                        close: 'Cerca',
                    },
                    reportAction: {
                        enableLink: 'Habilitar enlace',
                        linkTo: 'Enlace a',
                        report: 'Informe',
                        url: 'URL'
                    },
                    linkReport: {
                        reportCaption: 'Informe',
                        setParameter: 'Establecer parámetros'
                    },
                    imageProperty: {
                        basicSettings: {
                            categoryName: 'Ajustes básicos',
                            source: 'Fuente',
                            sourceTypes: {
                                external: 'Externo',
                                embedded: 'Incrustado',
                                database: 'Base de datos'
                            },
                            value: 'Valor',
                            mimeType: 'Tipo MIME',
                            mimeTypes: {
                                bmp: 'imagen/bmp',
                                jpeg: 'imagen/jpeg',
                                gif: 'imagen/gif',
                                png: 'imagen/png',
                                xPng: 'imagen/x-png'
                            }
                        },
                        categoryName: 'Enlazar',
                        appearance: {
                            categoryName: 'Apariencia',
                            borderTypes: {
                                border: 'Frontera',
                                borderLeft: 'Izquierda',
                                borderTop: 'Parte superior',
                                borderRight: 'Derecha',
                                borderBottom: 'Fondo'
                            },
                            borderStyles: {
                                solid: 'Sólido',
                                none: 'Ninguna',
                                double: 'Doble',
                                dashed: 'Disparo',
                                dotted: 'Punteado'
                            }
                        },
                        size: {
                            categoryName: 'Tamaño',
                            paddingTypes: {
                                padding: 'Relleno',
                                paddingLeft: 'Izquierda',
                                paddingTop: 'Parte superior',
                                paddingRight: 'Derecha',
                                paddingBottom: 'Fondo'
                            },
                            sizing: 'Dimensionamiento',
                            sizeTypes: {
                                auto: 'Tamaño automático',
                                fit: 'Ajuste',
                                proportional: 'FitProportional',
                                clip: 'Acortar'
                            }
                        },
                        position: {
                            categoryPosition: 'Posición',
                            positionLabel: 'Posición',
                            left: 'Izquierda',
                            top: 'Parte superior',
                            sizeLabel: 'Tamaño',
                            width: 'Anchura',
                            height: 'Altura'
                        },
                        visibility: {
                            categoryName: 'Visibilidad',
                            visible: 'Visible'
                        }
                    },
                    chartProperty: {
                        commonProperties: {
                            showBorder: 'Mostrar borde',
                            border: {
                                border: 'Frontera',
                                borderLeft: 'Izquierda',
                                borderTop: 'Parte superior',
                                borderRight: 'Derecha',
                                borderBottom: 'Fondo'
                            },
                            background: 'Fondo',
                            font: 'Fuente',
                            fontStyle: 'Estilo de fuente',
                            labelRotation: 'Rotación de la etiqueta',
                            categoryAxis: 'Categoría Eje',
                            valueAxis: 'Eje de valor',
                            defaultText: 'Defecto',
                            auto: 'Auto',
                            borderStyles: {
                                solid: 'Sólido',
                                none: 'Ninguna',
                                double: 'Double',
                                dashed: 'Disparo',
                                dotted: 'Punteado',
                                dashDot: 'Guion punto',
                                dashDotDot: 'DashDotDot'
                            },
                            horizontalAlignments: {
                                near: 'Cerca',
                                far: 'Lejos',
                            },
                            textAlignments: {
                                right: 'Derecha',
                                bottom: 'Fondo',
                                center: 'Centrar',
                                topLeft: 'Arriba a la izquierda',
                                topCenter: 'TopCenter',
                                topRight: 'Parte superior derecha',
                                rightTop: 'Justo arriba',
                                rightCenter: 'RightCenter',
                                rightBottom: 'Boton derecho',
                                bottomLeft: 'BottomLeft',
                                bottomCenter: 'Parte inferior central',
                                bottomRight: 'Abajo a la derecha',
                                leftTop: 'LeftTop',
                                leftCenter: 'Centro izquierda',
                                leftBottom: 'Abajo a la izquierda',
                            },
                            fontStyleTypes: {
                                normal: 'Normal',
                                italic: 'Itálico'
                            },
                            fontWeightTypes: {
                                light: 'Ligero',
                                bold: 'Negrita'
                            }
                        },
                        basicSettings: {
                            categoryName: 'Ajustes básicos',
                            showLegend: {
                                showLegendText: 'Mostrar leyenda',
                                title: 'Título',
                                titleFont: 'Fuente del titulo',
                                titleFontStyle: 'Título Estilo de fuente',
                                titleAlignment: 'Alineación del título',
                                legendPosition: 'Posición de leyenda',
                                enableCustomBounds: 'Habilitar límites personalizados'
                            },
                            chooseSeries: 'Elija la serie',
                            showMarker: {
                                showMarkerText: 'Mostrar marcador',
                                color: 'Color',
                                markerType: 'Tipo de marcador',
                                markerTypes: {
                                    square: 'Cuadrado',
                                    circle: 'Circulo',
                                    diamond: 'Diamante',
                                    triangle: 'Triángulo',
                                    cross: 'Cruzar',
                                    star5: 'Star5',
                                },
                                size: 'Tamaño'
                            },
                            showDataLabel: {
                                showDataLabelText: 'Mostrar etiqueta de datos',
                                dataLabelFormat: 'Formato',
                                dataLabelText: 'Etiqueta',
                                dataLabelValueAsText: 'Use el valor como etiqueta',
                                dataLabelTypes: {
                                    valueX: '#VALX',
                                    valueY: '#VALY',
                                    valueY2: '#VALY2',
                                    valueY3: '#VALY3',
                                    valueY4: '#VALY4',
                                    valueY5: '#VALY5',
                                    valueY6: '#VALY6',
                                    index: '#ÍNDICE',
                                    percent: '#POR CIENTO',
                                    total: '#TOTAL',
                                    axisLabel: '#ETIQUETA AXIS'
                                }
                            },
                            enableSmartLabel: {
                                smartLabelText: 'Habilitar etiqueta inteligente',
                                labelStyle: 'Estilo de etiqueta',
                                value: 'Valor',
                                smartLabelPositions: {
                                    outside: 'Fuera de',
                                    inside: 'Dentro',
                                    outsideInColumn: 'OutsideInColumn'
                                },
                                smartLabelStyles: {
                                    pieLabelStyle: 'Estilo de etiqueta de tarta',
                                    funnelLabelStyle: 'Estilo de etiqueta de embudo',
                                    pyramidLabelStyle: 'Estilo de etiqueta de pirámide',
                                    barLabelStyle: 'Estilo de etiqueta de barra',
                                    smartLabelStyle: 'Estilo de etiqueta'
                                }
                            },
                            seriesBorder: 'Borde de la serie',
                            seriesColor: 'Color de la serie'
                        },
                        categoryName: 'Apariencia',
                        chartArea: {
                            categoryName: 'Área del gráfico',
                            colorPalette: 'Paleta de color',
                            colorPaletteTypes: {
                                earthTones: 'Tonos terrestres',
                                excel: 'Sobresalir',
                                grayScale: 'GrayScale',
                                pastel: 'Pastel',
                                semiTransparent: 'Semitransparente',
                                berry: 'Baya',
                                chocolate: 'Chocolate',
                                fire: 'Fuego',
                                seaGreen: 'Mar verde',
                                brightPastel: 'BrightPastel',
                                pacific: 'Pacífico',
                                pacificLight: 'PacificLight',
                                pacificSemiTransparent: 'PacificSemiTransparent',
                            }
                        },
                        title: {
                            categoryName: 'Título',
                            showChartTitle: 'Mostrar título de gráfico',
                            titleText: 'Texto del título',
                            titlePosition: 'Posición del título'
                        },
                        axis: {
                            enableAxis: 'Habilitar eje',
                            axisTitle: 'Título del eje',
                            alignment: 'Alineación',
                            lineStyle: 'Estilo de línea',
                            labelOverflowMode: 'Modo de desbordamiento de etiqueta',
                            overFlowModeTypes: {
                                trim: 'Recortar',
                                hide: 'Esconder',
                            },
                            labelFont: 'Etiqueta de fuente',
                            enableMajorTicks: 'Habilitar Ticks Mayores',
                            enableMinorTicks: 'Habilitar marcaciones menores',
                            tickProperties: {
                                tickSize: 'Tick Size',
                                tickColor: 'Marque Color',
                                tickWidth: 'Anchura',
                                length: 'Longitud'
                            },
                            tickPosition: 'Marque la posición'
                        },
                        gridLine: {
                            categoryName: 'Cuadricula',
                            gridLineStyle: {
                                minorGridLine: 'Mostrar Minor GridLine',
                                majorGridLineStyle: 'Estilo principal de GridLine',
                                minorGridLineStyle: 'Estilo Minor GridLine'
                            }
                        },
                        pageBreak: {
                            categoryName: 'Salto de página',
                            enablePageBreak: 'Habilitar salto de página',
                            breakLocation: 'Lugar de descanso',
                            breakLocationTypes: {
                                start: 'comienzo',
                                end: 'final',
                                startAndEnd: 'StartAndEnd',
                                between: 'Entre',
                            },
                            pageNumberReset: 'Restablecer número de página',
                            pageName: 'Nombre de la página'
                        },
                        position: {
                            categoryPosition: 'Posición',
                            positionLabel: 'Posición',
                            left: 'Izquierda',
                            top: 'Parte superior',
                            sizeLabel: 'Tamaño',
                            width: 'Anchura',
                            height: 'Altura'
                        },
                        visibility: {
                            categoryName: 'Visibilidad',
                            visible: 'Visible'
                        }
                    },
                    lineProperty: {
                        basicSettings: {
                            categoryBasicSettings: 'Ajustes básicos',
                            line: 'Línea',
                            lineTypes: {
                                solid: 'Sólido',
                                dashed: 'Disparo',
                                dotted: 'Punteado',
                            },
                        },
                        position: {
                            categoryPosition: 'Posición',
                            positionLabel: 'Posición',
                            left: 'Izquierda',
                            top: 'Parte superior',
                            sizeLabel: 'Tamaño',
                            width: 'Anchura',
                            height: 'Altura',
                        },
                        visibility: {
                            categoryName: 'Visibilidad',
                            visible: 'Visible',
                        }
                    },
                    subReportProperty: {
                        basicSettings: {
                            categoryBasicSettings: 'Ajustes básicos',
                            report: 'Informe',
                            setParameters: 'Establecer parámetros...'
                        },
                        appearance: {
                            categoryAppearance: 'Appearence',
                            borderTypes: {
                                border: 'Frontera',
                                borderLeft: 'Izquierda',
                                borderTop: 'Parte superior',
                                borderRight: 'Derecha',
                                borderBottom: 'Fondo'
                            },
                            borderStyles: {
                                solid: 'Sólido',
                                none: 'Ninguna',
                                double: 'Double',
                                dashed: 'Disparo',
                                dotted: 'Punteado'
                            }
                        },
                        noRows: {
                            noRowsLabel: 'Sin Filas',
                            font: 'Fuente',
                            fontStyle: {
                                fontStyleLabel: 'Estilo de fuente',
                                fontItem: {
                                    defaultStyle: 'Defecto',
                                    fontNormal: 'Normal',
                                    italic: 'Itálico'
                                },
                                fontWeight: {
                                    defaultElement: 'Defecto',
                                    normal: 'Normal',
                                    thin: 'Delgado',
                                    extraLight: 'Extra ligero',
                                    light: 'Ligero',
                                    medium: 'Medio',
                                    semiBold: 'SemiBold',
                                    bold: 'Negrita',
                                    extraBold: 'ExtraBold',
                                    heavy: 'Pesado',
                                }
                            },
                            textDecoration: {
                                textDecorationLabel: 'Decoración de texto',
                                defaultDecoration: 'Defecto',
                                none: 'Ninguna',
                                underLine: 'Subrayar',
                                overLine: 'Overline',
                                lineThrough: 'LineThrough'
                            },
                            format: 'Formato',
                            lineHeight: 'Altura de la línea',
                            message: 'Mensaje',
                            paddingTypes: {
                                padding: 'Relleno',
                                paddingLeft: 'Izquierda',
                                paddingRight: 'Derecha',
                                paddingTop: 'Parte superior',
                                paddingBottom: 'Fondo',
                            },
                            textAlign: {
                                textAlignLabel: 'Texto alineado',
                                textAlignDefault: 'Defecto',
                                textAlignGeneral: 'General',
                                textAlignLeft: 'Izquierda',
                                textAlignRight: 'Derecha',
                                textAlignCenter: 'Centrar'
                            },
                            verticalAlign: {
                                verticalAlignlabel: 'Alineación vertical',
                                verticalAlignDefault: 'Defecto',
                                verticalAlignTop: 'Parte superior',
                                verticalAlignMiddle: 'Medio',
                                verticalAlignBottom: 'Fondo'
                            },
                            writingMode: {
                                writingModeLabel: 'Modo de escritura',
                                writingModeDefault: 'Defecto',
                                writingModeHorizontal: 'Horizontal',
                                writingModeVertical: 'Vertical',
                                writingModeRotate: 'Girar270'
                            }
                        },
                        visibility: {
                            categoryName: 'Visibilidad',
                            visible: 'Visible',
                        },
                        position: {
                            categoryPosition: 'Posición',
                            positionLabel: 'Posición',
                            left: 'Izquierda',
                            top: 'Parte superior',
                            sizeLabel: 'Tamaño',
                            width: 'Anchura',
                            height: 'Altura',
                        },
                        miscellaneous: {
                            categoryMiscellaneous: 'Diverso',
                            keepTogether: 'Mantenerse juntos'
                        }
                    },
                    rectangleProperty: {
                        basicSettings: {
                            categoryBasicSettings: 'Ajustes básicos',
                            borderTypes: {
                                border: 'Frontera',
                                borderLeft: 'Izquierda',
                                borderTop: 'Parte superior',
                                borderRight: 'Derecha',
                                borderBottom: 'Fondo'
                            },
                            borderStyles: {
                                solid: 'Sólido',
                                none: 'Ninguna',
                                double: 'Double',
                                dashed: 'Disparo',
                                dotted: 'Punteado'
                            },
                            backGround: 'Fondo'
                        },
                        pageBreak: {
                            pageBreak: 'Salto de página',
                            enablePageBreak: {
                                enablePageBreak: 'Habilitar salto de página',
                                breakLocation: {
                                    breakLocationLabel: 'Break Location',
                                    none: 'Ninguna',
                                    start: 'Comienzo',
                                    end: 'Fin',
                                    startAndEnd: 'StartAndEnd',
                                    between: 'Entre'
                                },
                                pageNumberReset: 'Restablecer número de página'
                            },
                        },
                        position: {
                            categoryPosition: 'Posición',
                            positionLabel: 'Posición',
                            left: 'Izquierda',
                            top: 'Parte superior',
                            sizeLabel: 'Tamaño',
                            width: 'Anchura',
                            height: 'Altura',
                        },
                        visibility: {
                            categoryName: 'Visibilidad',
                            visible: 'Visible',
                        },
                        rectangleMiscellaneous: {
                            categoryMiscellaneous: 'Diverso',
                            keepTogether: 'Mantenerse juntos',
                            pageName: 'Nombre de la página'
                        }
                    },
                    browseFile: {
                        openFile: {
                            selectReport: 'Seleccionar informe',
                            open: 'Abierto',
                        },
                        saveFile: {
                            saveAsReport: 'Guardar como informe',
                            name: 'Nombre',
                            save: 'Salvar',
                        },
                        close: 'Cerca',
                        cancel: 'Cancelar',
                        waterMark: 'Reportar nombre',
                        emptyMessage: 'Esta categoría está vacía',
                        alertMessage: {
                            reportServer: 'Servidor de informes',
                            selectCategory: 'Seleccione Categoría',
                        },
                        warningMessage: {
                            fileNameLabel: 'Un artículo "',
                            fileNameExist: '.rdl" ya existe. ¿Desea reemplazar el elemento existente?',
                            populateCategory: 'ReportDesigner no pudo recuperar los recursos del ReportServer',
                        }
                    },
                    expressionMenu: {
                        reset: 'Reiniciar',
                        expression: 'Expresión',
                        advanced: 'Avanzado'
                    },
                    propertyPanel: {
                        property: 'Propiedades',
                        data: 'DATOS',
                        name: 'Nombre',
                        toolTipStyle: 'Estilo',
                        toolTipColor: 'Color',
                        toolTipWidth: 'Anchura',
                        setSorts: 'Establecer clases',
                        setFilters: 'Establecer filtros',
                        advancedOptions: 'Opciones avanzadas',
                        expressionList: {
                            top: 'Parte superior',
                            right: 'Derecha',
                            bottom: 'Fondo',
                            left: 'Izquierda',
                            style: 'Estilo',
                            color: 'Color',
                            size: 'Tamaño',
                            fontFamily: 'FontFamily',
                            width: 'Anchura',
                            height: 'Altura',
                            weight: 'Peso',
                            image: 'Imagen'
                        },
                        alertMessage: {
                            nameWarning: 'El nombre no puede estar vacío',
                            nameAlert: 'Nombre ya existe',
                            nameValidation: 'El nombre no debe contener espacios ni caracteres especiales'
                        }
                    },
                    dataSource: {
                        newDatasource: 'NUEVO DATOSOURCE',
                        datasource: 'FUENTES DE DATOS',
                        datasourceList: {
                            data: 'Datos',
                            contextMenu: {
                                editItem: 'Editar',
                                deleteItem: 'Borrar',
                                createDataSet: 'Crear conjunto de datos'
                            }
                        },
                        datasourceType: {
                            existOption: 'Existente',
                            newOption: 'Crear nuevo',
                            selectDatasoure: 'Seleccione el DataSource',
                            connectDatasource: 'Connect DataSource',
                            datasourceType: 'Elige el tipo para conectarte',
                            sqlLabel: 'SQL',
                            sqlCeLabel: 'SQLCE',
                            odbcLabel: 'ODBC',
                            oracleLabel: 'ORACLE',
                            oledbLabel: 'OLEDB',
                            xmlLabel: 'XML',
                            odataLabel: 'ODATA',
                            postSQLLabel: 'PostSQL',
                            sassLabel: 'SASS',
                            sharedLabel: 'Compartido'
                        },
                        datasourceConnection: {
                            newConnection: 'NUEVA CONEXIÓN',
                            editConnection: 'EDITAR CONEXIÓN',
                            name: 'Nombre',
                            save: 'Salvar',
                            connect: 'Conectar',
                            cancel: 'Cancelar'
                        },
                        sqlDatasource: {
                            authenticationType: 'Tipo de autenticación',
                            window: 'Windows',
                            sqlServer: 'servidor SQL',
                            userName: 'Nombre de usuario',
                            password: 'Contraseña',
                            switchLabel: 'DataSource AdvancePanel',
                            switchAlert: 'El cambio al diseñador visual descartará los cambios manuales realizados a la cadena de conexión. ¿Quieres usar el diseñador visual de todos modos ? ',
                            basicOption: {
                                serverName: 'Nombre del servidor',
                                savePassword: 'Guardar contraseña',
                                database: 'Base de datos',
                                advanceSwitch: 'Opción de avance'
                            },
                            advanceOption: {
                                connectionString: 'Cadena de conexión',
                                promptLabel: 'Texto rápido',
                                prompt: 'Rápido',
                                none: 'Ninguna',
                                basicSwitch: 'Opción Básica'
                            },
                            alertMessage: {
                                alertConnectionString: 'Especifique la cadena de conexión',
                                alertPrompt: 'Especifique el texto de aviso',
                                alertUserName: 'Especifique el nombre de usuario',
                                alertPassword: 'Especifique la contraseña',
                                alertServerName: 'Especifique el nombre del servidor',
                                alertDatabaseName: 'Especifique el nombre de la base de datos'
                            }
                        },
                        sqlceDatasource: {
                            connectionString: 'Cadena de conexión',
                            authenticationType: 'Tipo de autenticación',
                            authentication: 'Autenticación',
                            none: 'Ninguna',
                            password: 'Contraseña',
                            alertMessage: {
                                alertConnectionString: 'Especifique la cadena de conexión',
                                alertPassword: 'Especificar la contraseña'
                            }
                        },
                        odbcDatasource: {
                            connectionString: 'Cadena de conexión',
                            authenticationType: 'Tipo de autenticación',
                            authentication: 'Autenticación',
                            prompt: 'Rápido',
                            none: 'Ninguna',
                            userName: 'Nombre de usuario',
                            password: 'Contraseña',
                            promptLabel: 'Texto de aviso',
                            alertMessage: {
                                alertConnectionString: 'Especificar la cadena de conexión',
                                alertPrompt: 'Especificar el texto de aviso',
                                alertUserName: 'Especificar el nombre de usuario',
                                alertPassword: 'Especificar la contraseña'
                            }
                        },
                        oracleDatasource: {
                            connectionString: 'Cadena de conexión',
                            authenticationType: 'Tipo de autenticación',
                            authentication: 'Autenticación',
                            prompt: 'Rápido',
                            none: 'Ninguna',
                            userName: 'Nombre de usuario',
                            password: 'Contraseña',
                            promptLabel: 'Texto de aviso',
                            alertMessage: {
                                alertConnectionString: 'Especificar la cadena de conexión',
                                alertPrompt: 'Especificar el texto de aviso',
                                alertUserName: 'Especificar el nombre de usuario',
                                alertPassword: 'Especificar la contraseña'
                            }
                        },
                        oledbDatasource: {
                            connectionString: 'Cadena de conexión',
                            authenticationType: 'Tipo de autenticación',
                            authentication: 'Autenticación',
                            prompt: 'Rápido',
                            none: 'Ninguna',
                            userName: 'Nombre de usuario',
                            password: 'Contraseña',
                            promptLabel: 'Texto de aviso',
                            alertMessage: {
                                alertConnectionString: 'Especificar la cadena de conexión',
                                alertPrompt: 'Especificar el texto de aviso',
                                alertUserName: 'Especificar el nombre de usuario',
                                alertPassword: 'Especificar la contraseña'
                            }
                        },
                        xmlDatasource: {
                            connectionString: 'Cadena de conexión',
                        },
                        odataDatasource: {
                            connectionString: 'Cadena de conexión',
                            alertMessage: 'Especificar la cadena de conexión'
                        },
                        postSQLDatasource: {
                            connectionString: 'Cadena de conexión',
                            authenticationType: 'Tipo de autenticación',
                            authentication: 'Autenticación',
                            prompt: 'Rápido',
                            none: 'Ninguna',
                            userName: 'Nombre de usuario',
                            password: 'Contraseña',
                            promptLabel: 'Texto de aviso',
                            alertMessage: {
                                alertConnectionString: 'Especificar la cadena de conexión',
                                alertPrompt: 'Especificar el texto de aviso',
                                alertUserName: 'Especificar el nombre de usuario',
                                alertPassword: 'Especificar la contraseña'
                            }
                        },
                        sassDatasource: {
                            connectionString: 'Cadena de conexión',
                            authenticationType: 'Tipo de autenticación',
                            window: 'Windows',
                            sqlServer: 'Servidor SQL',
                            prompt: 'Rápido',
                            none: 'Ninguna',
                            userName: 'Nombre de usuario',
                            password: 'Contraseña',
                            promptLabel: 'Texto de aviso',
                            alertMessage: {
                                alertConnectionString: 'Especificar la cadena de conexión',
                                alertPrompt: 'Especificar el texto de aviso',
                                alertUserName: 'Especificar el nombre de usuario',
                                alertPassword: 'Especificar la contraseña'
                            }
                        },
                        sharedDatasource: {
                            datasource: 'Shared DataSource',
                            alertMessage: 'Seleccione un DataSource compartido'
                        },
                        alertMessage: {
                            alertLabel: 'Fuente de datos',
                            alertConnectionFailed: 'ReportDesigner failed to connect the datasource',
                            deleteValue: 'Eliminar origen de datos \'',
                            nameWarning: 'Especificar el nombre de DataSource',
                            nameAlert: 'El nombre especificado ya existe en la lista de DataSource',
                            nameValidation: 'El nombre no debe contener espacios ni caracteres especiales'
                        }
                    },
                    imageManager: {
                        headerText: 'Administrador de imagen',
                        addImageButton: 'Añadir imagen',
                        deleteImage: 'Eliminar imagen incrustada',
                        image: 'Imagen',
                    },
                    linkParameter: {
                        title: 'Parámetros',
                        descriptionText: 'Parámetros del informe',
                        addText: 'AÑADIR',
                        ok: 'DE ACUERDO',
                        cancel: 'Cancelar',
                        nameWaterMark: 'Nombre del parámetro',
                        valueWaterMark: 'Valor',
                        errorMessage: 'Ingrese un valor para esta propiedad',
                        closeToolTip: 'Cerca'
                    },
                    filter: {
                        title: 'Filtrar',
                        descriptionLable: 'Incluye filas donde las siguientes condiciones son verdaderas.',
                        add: 'AÑADIR',
                        ok: 'DE ACUERDO',
                        cancel: 'Cancelar',
                        valueWaterMark: 'Valor',
                        fieldWaterMark: 'Elegir campo',
                        closeToolTip: 'Cerca',
                        errorMessage: {
                            booleanValidation: 'El valor no es un valor booleano. ',
                            intValidation: 'El valor no es un número entero. ',
                            floatValidation: 'El valor no es un flotador. ',
                            dateTimeValidation: 'El valor es un formato de fecha / hora no válido. ',
                            topBottomFilter: 'Los operadores de filtro% superior e inferior% requieren un tipo de datos flotante o entero.',
                            expressionValidation: 'Elegir valor para el campo de expresión'
                        },
                        operatorTypes: {
                            like: 'Me gusta',
                            topN: 'TopN',
                            bottomN: 'BottomN',
                            topPercent: 'Top%',
                            bottomPercent: 'Bottom%',
                            between: 'Entre',
                            inFilter: 'En',
                        }
                    },
                    dataPanel: {
                        itemTooltip: {
                            properties: 'Propiedades',
                            data: 'Datos',
                            parameters: 'Parámetros',
                            imageManager: 'Administrador de imagen',
                        },
                        dataSourceNewAlert: {
                            title: 'Fuente de datos',
                            contentMessage: '¿Desea cancelar la creación de DataSource ?',
                        },
                        dataSourceEditAlert: {
                            title: 'Fuente de datos',
                            contentMessage: '¿Desea cancelar la edición de DataSource ?',
                        },
                        dataSetNewAlert: {
                            title: 'DataSet',
                            contentMessage: '¿Desea cancelar la creación de DataSet ?',
                        },
                        dataSetEditAlert: {
                            title: 'DataSet',
                            contentMessage: '¿Desea cancelar la edición de DataSet ?',
                        },
                        parameterNewAlert: {
                            title: 'Parámetro',
                            contentMessage: '¿Desea cancelar la creación de parámetros ?',
                        },
                        parameterEditAlert: {
                            title: 'Parámetro',
                            contentMessage: '¿Desea cancelar la edición de parámetros ?',
                        }
                    },
                    dataSet: {
                        headerText: 'DATOS',
                        newData: 'AGREGAR DATOSET',
                        splitButtonMenu: {
                            sharedDataset: 'Compartido',
                            createNewDataset: 'Crear nuevo'
                        },
                        shareDataset: {
                            headerText: 'NUEVO DATASET',
                            save: 'Salvar',
                            cancel: 'Cancelar',
                            nameLable: 'Nombre',
                            sharedDatasetLabel: 'Shared DataSet',
                            errorMessage: {
                                nameValidation: 'Especifique el nombre del conjunto de datos',
                                datasetValidation: 'Seleccione un DataSource compartido',
                                duplicateName: 'El nombre especificado ya existe en la lista del conjunto de datos',
                                specialCharacter: 'El nombre no debe contener espacios ni caracteres especiales'
                            }
                        },
                        contextMenu: {
                            edit: 'Editar',
                            remove: 'Borrar'
                        },
                        datasourceSwitcher: 'Fuentes de datos',
                        deleteDataset: 'Eliminar conjunto de datos',
                        deleteField: 'Eliminar campo'
                    },
                    reportViewer: {
                        toolbar: {
                            print: 'Impresión',
                            exportformat: {
                                exportText: 'Exportar',
                                Pdf: 'PDF',
                                Excel: 'Sobresalir',
                                Word: 'Palabra',
                                Html: 'Html',
                                PPT: 'PPT',
                                CSV: 'CSV'
                            },
                            pageSetup: 'Configuración de página',
                            gotoFirst: 'Ir a la primera',
                            gotoLast: 'Goto Last',
                            gotoNext: 'Ir a Siguiente',
                            gotoPrevious: 'Ir a Anterior',
                            gotoParanet: 'Goto Parent',
                            zoomIn: 'acercarse',
                            zoomOut: 'Disminuir el zoom',
                            fittopage: {
                                fitPageText: 'Ajustar a la página',
                                pageWidth: 'Ancho de página',
                                pageHeight: 'Toda la pagina'
                            },
                            printLayout: 'Diseño de impresión',
                            refresh: 'Refrescar',
                            documentMap: 'Mapa del documento',
                            parameter: 'Parámetro',
                            viewDesign: 'Cerrar vista previa',
                        },
                        pagesetupDialog: {
                            close: 'Cerca',
                            paperSize: 'Tamaño de papel',
                            height: 'Altura',
                            width: 'Anchura',
                            margins: 'Márgenes',
                            top: 'Parte superior',
                            bottom: 'Fondo',
                            right: 'Derecha',
                            left: 'Izquierda',
                            unit: 'en',
                            orientation: 'Orientación',
                            portrait: 'Retrato',
                            landscape: 'Paisaje',
                            doneButton: 'DE ACUERDO',
                            cancelButton: 'Cancelar'
                        },
                        credential: {
                            userName: 'Nombre de usuario',
                            password: 'Contraseña'
                        },
                        waterMark: {
                            selectOption: 'Seleccionar opción',
                            selectValue: 'Seleccione un valor'
                        },
                        errorMessage: {
                            startMessage: 'Report Viewer encontró algunos problemas al cargar este informe. Por favor',
                            middleMessage: ' haga clic aquí',
                            endMessage: 'para ver los detalles del error',
                            closeMessage: 'Cerrar este mensaje'
                        },
                        alertMessage: {
                            close: 'Cerca',
                            title: 'ReportViewer',
                            done: 'DE ACUERDO',
                            showDetails: 'Mostrar detalles',
                            hideDetails: 'Ocultar detalles',
                            reportLoad: 'Informe cargado:',
                            RVERR0001: 'ReportViewer no pudo cargar el Informe',
                            RVERR0002: 'ReportViewer no pudo procesar el Informe',
                            RVERR0003: 'Se produjo un error en la devolución de datos de ajax',
                            RVERR0004: 'Seleccione un valor para el parámetro',
                            RVERR0005: 'Al parámetro {nombre de parámetro} le falta un valor',
                            RVERR0006: 'Por favor ingrese la entrada del tipo de datos float',
                            RVERR0007: 'Ingrese la entrada de tipo de datos enteros',
                            RVERR0008: 'ReportViewer no pudo validar las credenciales de Datasource',
                            RVERR0009: 'Los márgenes están superpuestos o están fuera del papel. Ingrese un tamaño de margen diferente.',
                            RVERR0010: 'Ingrese un valor para el parámetro',
                            RVERR0011: 'El parámetro no puede estar en blanco',
                            RVERR0012: 'El valor proporcionado para el parámetro de informe {parameterprompt} no es válido para su tipo.'
                        },
                        selectAll: 'Seleccionar todo',
                        viewButton: 'Vista del informe'
                    },
                    sortData: {
                        sorting: 'Clasificación',
                        add: 'AÑADIR',
                        changeSortingOptions: 'Cambiar opciones de clasificación.',
                        sortBy: 'Ordenar por',
                        thenBy: 'Entonces por',
                        direction: {
                            ascending: 'Ascendente',
                            descending: 'Descendente',
                        },
                        chooseField: 'Elige el campo',
                        errorMessage: 'Elegir valor para el campo de expresión',
                        ok: 'DE ACUERDO',
                        cancel: 'Cancelar',
                        close: 'Cerca',
                    },
                    groupData: {
                        grouping: 'Agrupamiento',
                        name: 'Nombre',
                        label: 'Etiqueta',
                        changeGroupingOptions: 'Cambiar las opciones de agrupamiento.',
                        add: 'AÑADIR',
                        groupBy: 'Agrupar por',
                        andOn: 'Y en',
                        chooseField: 'Elegir campo',
                        ok: 'DE ACUERDO',
                        cancel: 'Cancelar',
                        close: 'Cerca',
                        errorMessage: {
                            nameErrorMessage: 'Por favor ingrese el nombre',
                            expressionErrorMessage: 'Elegir valor para un campo de expresión',
                        },
                    },
                    alertMessage: {
                        yes: 'Sí',
                        no: 'No',
                        showDetails: 'Mostrar detalles',
                        hideDetails: 'Ocultar detalles',
                        close: 'Cerca'
                    },
                    parameter: {
                        listPanel: {
                            headerText: 'Parámetros',
                            newParameter: 'NUEVO PARÁMETRO',
                            editMenu: {
                                edit: 'Editar',
                                remove: 'Borrar'
                            },
                            alertTitle: 'Parámetro'
                        },
                        configurationPanel: {
                            newHeaderText: 'NUEVO PARÁMETRO',
                            editHeaderText: 'EDITAR PARÁMETRO',
                            nameLabel: 'Nombre',
                            promptLable: 'Rápido',
                            dataTypeLable: 'Tipo de datos',
                            blankValueLable: 'Permitir valor en blanco("")',
                            nullValueLable: 'Permitir valor nulo',
                            multipleValueLable: 'Permitir múltiples valores',
                            visibilityLable: 'Visibilidad',
                            assignValueLable: 'Asignar valor >>',
                            save: 'Salvar',
                            cancel: 'Cancelar',
                            visibility: {
                                visible: 'Visible',
                                hidden: 'Oculto',
                                internal: 'Interno'
                            },
                            dataType: {
                                stringType: 'Cuerda',
                                booleanType: 'Booleano',
                                dateTimeType: 'Booleano',
                                integerType: 'Entero',
                                floatType: 'Flotador'
                            }
                        },
                        errorMessage: {
                            nameField: 'Por favor ingrese el nombre',
                            promptField: 'Por favor ingrese el valor',
                            nameAlreadyExists: 'El nombre del parámetro ya existe'
                        },
                        warningMessage: {
                            specialCharacter: 'El nombre no debe contener espacios ni caracteres especiales',
                            multipleValueAlert: 'Se especificaron múltiples valores predeterminados. El parámetro no permite valores múltiples. ',
                            nullValueAlert: 'En el campo de valor, se especificó un valor nulo. El parámetro no permite valores nulos. '
                        },
                        alertMessage: {
                            confirmNullCheck: 'Los valores disponibles o predeterminados pueden contener valor nulo, ¿Desea habilitar la casilla de verificación permitir el valor nulo?',
                            confirmBlankValue: 'Los valores disponibles o predeterminados pueden contener un valor en blanco, ¿Desea habilitar la casilla de verificación de valor en blanco?',
                            dataTypeChange: 'Al cambiar el tipo de datos, se descartarán los cambios realizados en los valores disponibles y predeterminados. ¿Desea cambiar el tipo de datos de todos modos? ',
                            deleteAlert: 'Eliminar parámetro de informe'
                        },
                        assignData: {
                            title: 'Parámetro',
                            availableValue: 'Valor disponible',
                            defaultValue: 'Valor por defecto',
                            none: 'Ninguna',
                            specify: 'Especificar',
                            query: 'Valor de consulta',
                            ok: 'DE ACUERDO',
                            cancel: 'Cancelar',
                            availableFields: {
                                specifyDescriptionText: 'Agregue los valores disponibles para los parámetros:',
                                queryDescriptionText: 'Elija el conjunto de datos y los campos para los valores disponibles:',
                                nameFieldWaterMark: 'Etiqueta',
                                valueFieldWaterMark: 'Valor'
                            },
                            defaultFields: {
                                specifyDescriptionText: 'Agregue los valores predeterminados para los parámetros:',
                                queryDescriptionText: 'Elija el conjunto de datos y los campos para los valores predeterminados:',
                                defValueWaterMark: 'Elija el valor predeterminado '
                            },
                            datasetWaterMark: 'Elegir valor del conjunto de datos',
                            valueWaterMark: 'Elegir valor',
                            lableWaterMark: 'Elegir etiqueta',
                            add: 'AÑADIR',
                            datasetLableText: 'Dataset',
                            valueLableText: 'Campo de valor',
                            labelFieldText: 'Etiqueta de campo',
                            errorMessage: {
                                boolTypeCheck: 'El valor no es un valor booleano. ',
                                dateTypeCheck: 'El valor es un formato de fecha no válido. ',
                                intTypeCheck: 'El valor no es un número entero. ',
                                floatTypeCheck: 'El valor no es un flotador. ',
                                multipleValuesCheck: 'Un parámetro multivalor no puede incluir valores nulos',
                                datasetFieldCheck: 'El campo de conjunto de datos es obligatorio. ',
                                valueFieldCheck: 'Se requiere un campo de valor. ',
                                syntaxLabelField: 'El valor ingresado en el campo de etiqueta no es una sintaxis de token válida. ',
                                syntaxValueField: 'El valor ingresado en el campo de valor no es una sintaxis de token válida. ',
                                blankValueCheck: 'El campo de valor está en blanco. El parámetro no permite valores en blanco.',
                            },
                            closeToolTip: 'Cerca'
                        }
                    },
                    formatData: {
                        title: 'Formato de diálogo ',
                        typeSelect: 'Tipo',
                        typeFormat: {
                            numberType: {
                                numberType: 'Número',
                                decimalPlaces: 'Lugares decimales',
                                negativeValues: 'Valores negativos',
                                showZeroAs: {
                                    showZeroAs: 'Mostrar cero como',
                                    none: '(ninguna)'
                                },
                                representation: 'Representación',
                                repDropDwn: {
                                    thousands: 'Miles de personas',
                                    millions: 'Millones',
                                    billions: 'Miles de millones',
                                },
                                useRegionFormating: 'Use el formato regional',
                                use1000Separator: 'Use 1000 Separador (,)'
                            },
                            currency: {
                                currencyType: 'Moneda',
                                decimalPlaces: 'Lugares decimales',
                                negativeValues: 'Valores negativos',
                                cultureCurrency: 'Moneda Cultura',
                                showZeroAs: {
                                    none: '(ninguna)'
                                },
                                representation: 'Representación',
                                repDropDwn: {
                                    thousands: 'Miles de personas',
                                    millions: 'Millones',
                                    billions: 'Miles de millones',
                                },
                                useRegionFormating: 'Use el formato regional',
                                use1000Separator: 'Use 1000 Separador (,)',
                                includeSpace: 'Incluye un espacio'
                            },
                            date: {
                                dateType: 'Fecha',
                                date: 'Fecha'
                            },
                            time: {
                                timeType: 'Hora',
                                time: 'Hora'
                            },
                            percentage: {
                                percentageType: 'Porcentaje',
                                decimalPlaces: 'Lugares decimales',
                                includeSpace: 'Incluye un espacio'
                            },
                            scientific: {
                                scientificType: 'Científico',
                                decimalPlaces: 'Lugares decimales'
                            },
                            custom: {
                                customType: 'Personalizado',
                                customFormat: 'Formato personalizado'
                            },
                        },
                        preview: 'Avance',
                        ok: 'DE ACUERDO',
                        cancel: 'Cancelar',
                        close: 'Cerca'
                    },
                    expression: {
                        title: 'Expresión',
                        descriptionText: 'Establecer expresión para : ',
                        optionLabel: 'Opciones',
                        dataLabel: 'DATOS',
                        descritionLabel: 'Descripción',
                        exampleLabelText: 'Example',
                        ok: 'DE ACUERDO',
                        cancel: 'Cancelar',
                        closeToolTip: 'Cerca',
                        textAreaWaterMark: 'Expresión',
                        category: {
                            builtInFields: 'Campos incorporados',
                            operators: 'Operadores',
                            functions: 'Funciones'
                        },
                        parameters: 'Parámetros',
                        optionWaterMark: 'Seleccione una opcion',
                        dataWaterMark: 'Seleccione una información',
                        reportData: 'No se encontraron datos de informes',
                        description: {
                            executionTime: 'La fecha y la hora en que los informes comienzan a ejecutarse',
                            overallPageNumber: 'El número de página general actual solo se puede usar en el encabezado o pie de página.',
                            overallTotalPages: 'El número total de páginas en el informe solo se puede usar en el encabezado y pie de página..',
                            pageName: 'El nombre de la página actual en el informe se puede usar solo en el encabezado o pie de página.',
                            pageNumber: 'El número de página actual que se puede restablecer mediante el uso de saltos de página',
                            isInteractive: 'Un booleano que indica si la solicitud de representación actual usa un formato interactivo.',
                            renderName: 'El nombre del representador registrado en el archivo de configuración RSReportServer.',
                            reportFolder: 'La ruta completa a la carpeta que contiene el informe no incluye la URL del servidor de informes.',
                            reportName: 'La URL del servidor de informes donde se ejecuta el informe.',
                            reportServerUrl: 'La URL del servidor de informes en el que se ejecuta el informe.',
                            totalPages: 'El número total de páginas en la secuencia de página continua actual solo se puede usar en el encabezado y pie de página. El número puede restablecerse mediante el uso de saltos de página.',
                            language: 'El ID de idioma del cliente que ejecuta el informe.',
                            userID: 'El ID del usuario que ejecuta el informe.',
                            powerNumberType: 'Aumenta un número al poder de otro número.',
                            multiply: 'Multiplica dos números.',
                            integerDivision: 'Divide dos números y devuelve un número entero.',
                            floatDivision: 'Divide dos números y devuelve un punto flotante. ',
                            modulus: 'Divide dos números y devuelve solo el resto.',
                            add: 'Agrega dos números y se puede usar para concatenar dos cadenas.',
                            difference: 'Otorga la diferencia entre dos números o indica el valor negativo de una expresión numérica. ',
                            lesser: 'Menos que.',
                            lesserOrEqual: 'Menos que o igual a.',
                            greater: 'Mas grande que.',
                            greaterOrEqual: 'Mayor qué o igual a.',
                            equal: 'Igual a.',
                            notEqual: 'No igual a.',
                            like: 'Compara dos cadenas.',
                            isOperator: 'Compara dos variables de referencia de objeto.',
                            expression: 'Genera una concatenación de cadenas de dos expresiones. ',
                            stringType: 'Agrega dos números y se puede usar para concatenar dos cadenas.',
                            and: 'Realiza una conjunción lógica en dos expresiones booleanas, o una conjunción bit a bit en dos',
                            not: 'Realiza una negación lógica en una expresión booleana o en una negación a nivel de bit en una expresión numérica.',
                            or: 'Se utiliza para realizar una disyunción lógica en dos expresiones booleanas, o una disyunción bit a bit en dos valores numéricos.',
                            xor: 'Realiza una operación de exclusión lógica en dos expresiones booleanas, o en un bit exclusión en dos expresiones numéricas.',
                            andAlso: 'Realiza un cortocircuito de la conjunción lógica en dos expresiones. ',
                            orElse: 'Se usa para realizar un cortocircuito de disyunción lógica en dos expresiones.',
                            left: 'Realiza un desplazamiento aritmético a la izquierda en un patrón de bits.',
                            right: 'Realiza un desplazamiento aritmético a la derecha en un patrón de bits. ',
                            asc: 'Devuelve un valor entero que representa el código de carácter correspondiente a un personaje.',
                            ascW: 'Devuelve un valor entero que representa el código de carácter correspondiente a un carácter. ',
                            chr: 'Devuelve el carácter asociado con el código de carácter especificado.',
                            chrW: 'Devuelve el carácter asociado con el código de carácter especificado.',
                            filter: 'Devuelve una matriz basada en cero que contiene un subconjunto de una matriz de cadenas basada en criterios de filtro especificados.',
                            formatStringType: 'Devuelve una cadena formateada según las instrucciones en una expresión de cadena de formato.',
                            currency: 'Devuelve una expresión formateada como un valor de moneda utilizando el símbolo de moneda definido en el panel de control del sistema.',
                            dateTime: 'Devuelve una expresión de cadena que representa un valor de fecha / hora.',
                            numberType: 'Devuelve una expresión formateada como un número.',
                            percent: 'Devuelve una expresión formateada como un porcentaje (es decir, multiplicado por 100).',
                            getChar: 'Devuelve un valor char que representa el carácter del índice especificado en la cadena suministrada.',
                            inStr: 'Devuelve un entero que especifica la posición de inicio de la primera aparición de una cadena dentro de otra.',
                            inStrRev: 'Devuelve la posición de la primera aparición de una cadena dentro de otra, empezando por el lado derecho de la cuerda.',
                            join: 'Devuelve una cadena creada uniendo una cantidad de subcadenas en una matriz.',
                            lCase: 'Devuelve una cadena o un carácter convertido a minúscula.',
                            leftStringType: 'Devuelve una cadena que contiene un número específico de caracteres del lado izquierdo de una cadena.',
                            stringLength: 'Devuelve un número entero que contiene el número de caracteres en una cadena o el número. ',
                            lSet: 'Devuelve una cadena alineada a la izquierda que contiene la cadena especificada ajustada a la longitud especificada.',
                            leftTrim: 'Devuelve la cadena sin espacios finales del lado izquierdo en la cadena dada.',
                            middle: 'Devuelve una cadena que contiene un número específico de caracteres de una cadena.',
                            replace: 'Devuelve una cadena en la cual una subcadena especificada ha sido reemplazada por otra. ',
                            rightString: 'Devuelve una cadena en la cual una subcadena especificada ha sido reemplazada por otra.',
                            rightSet: 'Devuelve una cadena alineada a la derecha que contiene la cadena especificada ajustada a la longitud especificada.',
                            rightTrim: 'Devuelve la cadena sin espacios finales del lado derecho en la cadena dada.',
                            stringSpace: 'Devuelve una cadena que consta de la cantidad de espacios especificada.',
                            splitString: 'Devuelve una matriz unidimensional basada en cero que contiene un número especificado de subcadenas.',
                            strComp: 'Devuelve -1, 0 o 1, según el resultado de una comparación de cadenas.',
                            strConv: 'Devuelve una cadena convertida como se especifica.',
                            duplicateString: 'Devuelve una cadena u objeto que consiste en el carácter especificado repetido el número de veces especificado.',
                            strReverse: 'Devuelve una cadena en la que se invierte el orden de los caracteres de una cadena especificada.',
                            trim: 'Devuelve la cadena sin espacios finales en la cadena dada',
                            upperCase: 'Devuelve una cadena o carácter que contiene la cadena especificada convertida a mayúscula.',
                            cDate: 'Convertir a la fecha.',
                            dateAdd: 'Devuelve un valor de fecha que contiene valores de fecha y hora a los que se ha agregado un intervalo de tiempo especificado.',
                            dateDiff: 'Devuelve un valor largo que especifica la cantidad de intervalos de tiempo entre dos valores de fecha.',
                            datePart: 'Devuelve un valor entero que contiene el componente especificado de un valor de fecha determinado.',
                            dateSerial: 'Devuelve un valor de fecha que representa un año, mes y día especificados, con la información de hora configurada para midnight (00:00:00).',
                            dateString: 'Devuelve o establece un valor de cadena que representa la fecha actual de acuerdo con su sistema.',
                            dateValue: 'Devuelve un valor de fecha que contiene la información de fecha representada por una cadena, con la información de tiempo. ',
                            day: 'Devuelve un valor entero del 1 al 31 que representa el día del mes.',
                            format: 'Devuelve una expresión de cadena que representa el valor de fecha / hora.',
                            hour: 'Devuelve un valor entero de 0 a 23 que representa la hora del día.',
                            minute: 'Devuelve un valor entero de 0 a 59 que representa el minuto de la hora.',
                            month: 'Devuelve un valor entero del 1 al 12 que representa el mes del año.',
                            monthName: 'Devuelve un valor de cadena que contiene el nombre del mes especificado.',
                            now: 'Devuelve un valor de fecha que contiene la fecha y hora actual de acuerdo con su sistema.',
                            second: 'Devuelve un valor entero de 0 a 59 que representa el segundo del minuto.',
                            timeOfDay: 'Devuelve o establece un valor de fecha que contiene la hora actual del día de acuerdo con su sistema.',
                            timer: 'Devuelve un valor doble que representa el número de segundos transcurridos desde la medianoche.',
                            timeSerial: 'Devuelve un valor de fecha que representa una hora, minuto y segundo especificados, con la información de fecha establecida con relación al 1 de enero del año 1. ',
                            timeString: 'Devuelve o establece un valor de cadena que representa la hora actual del día de acuerdo con su sistema.',
                            timeValue: 'Devuelve un valor de fecha que contiene la información de tiempo representada por una cadena, con la información de fecha establecida al 1 de enero del año 1.',
                            timeToday: 'Devuelve o establece un valor de fecha que contiene la fecha actual de acuerdo con su sistema.',
                            timeWeekday: 'Devuelve un valor entero que contiene un número que representa el día de la semana.',
                            timeWeekdayName: 'Devuelve un valor de cadena que contiene el nombre del día de la semana especificado.',
                            year: 'Devuelve un valor entero del 1 al 9999 que representa el año.',
                            abs: 'Devuelve el valor absoluto de un número de punto flotante de precisión simple.',
                            acos: 'Devuelve el ángulo cuyo coseno es el número especificado.',
                            asin: 'Devuelve el ángulo cuyo seno es el número especificado. ',
                            atan: 'Devuelve el ángulo cuya tangente es el número especificado.',
                            atan2: 'Devuelve el ángulo cuya tangente es el cociente de dos números especificados.',
                            bigMultiply: 'Produce el producto completo de dos números de 32 bits.',
                            ceiling: 'Devuelve el entero más pequeño que es mayor o igual que el entero especificado.',
                            cos: 'Devuelve el coseno del ángulo especificado.',
                            cosh: 'Devuelve el coseno hiperbólico del ángulo especificado.',
                            exponent: 'Devuelve e elevado a la potencia especificada.',
                            fixNumberType: 'Devuelve una parte entera de un número.',
                            floor: 'Devuelve el entero más grande menor o igual que el entero especificado.',
                            integer: 'Devuelve una parte entera de un número.',
                            logrithm: 'Devuelve el logaritmo natural (base e) de un número especificado.',
                            logrithm10: 'Devuelve el logaritmo de base 10 de un número especificado.',
                            maximum: 'Devuelve el valor máximo de todos los valores no nulos de la expresión especificada.',
                            minimum: 'Devuelve el valor mínimo de todos los valores no nulos de la expresión especificada.',
                            power: 'Devuelve un número especificado elevado a la potencia especificada.',
                            random: 'Devuelve un número aleatorio de tipo único.',
                            round: 'Redondea un valor de coma flotante de precisión doble al entero más cercano.',
                            sign: 'Devuelve un valor que indica el signo de un entero con signo de 8 bits.',
                            sin: 'Devuelve el seno del ángulo especificado.',
                            sinh: 'Devuelve el seno hiperbólico del ángulo especificado.',
                            squareRoot: 'Devuelve la raíz cuadrada de un número especificado.',
                            tangent: 'Devuelve la tangente del ángulo especificado.',
                            tangentH: 'Devuelve la tangente hiperbólica del ángulo especificado.',
                            isArray: 'Devuelve un valor booleano que indica si una variable apunta a una matriz.',
                            isDate: 'Devuelve un valor booleano que indica si una expresión representa un valor válido',
                            isNothing: 'Devuelve un valor booleano que indica si una expresión no tiene ningún objeto.',
                            isNumeric: 'Devuelve un valor booleano que indica si una expresión puede ser evaluado como un número.',
                            flowChoose: 'Selecciona y devuelve un valor de una lista de argumentos.',
                            flowIIf: 'Devuelve uno de dos objetos según la evaluación de una expresión.',
                            switchFlow: 'Evalúa una lista de expresiones y devuelve un valor de objeto correspondiente a la primera expresión en la lista que es verdadera.',
                            avg: 'Devuelve el promedio de todos los valores no nulos de la expresión especificada.',
                            count: 'Devuelve un recuento de los valores de la expresión especificada.',
                            countDistinct: 'Devuelve un recuento de todos los valores distintos de los especificados.',
                            countRows: 'Devuelve un recuento de filas dentro del alcance especificado.',
                            first: 'Devuelve el primer valor de la expresión especificada.',
                            last: 'Devuelve el último valor de la expresión especificada.',
                            standardDev: 'Devuelve la desviación estándar de todos los valores no nulos de los especificados.',
                            standardDevP: 'Devuelve la desviación estándar de la población de todos los valores no nulos de la expresión especificada.',
                            sum: 'Devuelve una suma de los valores de la expresión especificada.',
                            variance: 'Devuelve la varianza de todos los valores no nulos de la expresión especificada.',
                            varianceP: 'Devuelve la varianza poblacional de todos los valores no nulos de la expresión especificada.',
                            runningValue: 'Utiliza una función específica para devolver un agregado en ejecución de la expresión especificada',
                            aggregate: 'Returns a custom aggregate of the specified expression, as defined by the data provider.',
                            doubleDeclining: 'Devuelve un doble que especifica la depreciación de un activo para un período de tiempo específico utilizando el método de saldo decreciente doble o cualquier otro método que especifique.',
                            futureValue: 'Devuelve el valor doble especificando el valor futuro de una anualidad basada en pagos fijos periódicos y una tasa de interés fija.',
                            interestPayment: 'Devuelve el valor doble que especifica el pago de intereses para un período determinado de una anualidad basado en pagos fijos periódicos y una tasa de interés fija.',
                            numberOfPeriods: 'Devuelve un valor doble que especifica el número de períodos de una anualidad basada en pagos fijos periódicos y una tasa de interés fija.',
                            annuityPayment: 'Devuelve un valor doble que especifica el pago de una anualidad basada en pagos fijos periódicos y una tasa de interés fija.',
                            principalPayment: 'Devuelve un valor doble que especifica el pago del principal para un período determinado de una anualidad basado en pagos fijos periódicos y una tasa de interés fija.',
                            presentValue: 'Devuelve un valor doble que especifica el valor presente de una anualidad basada en pagos fijos periódicos a ser pagados en el futuro y una tasa de interés fija.',
                            rateOfInterest: 'Devuelve un valor doble que especifica la tasa de interés por período para una anualidad.',
                            straightLine: 'Devuelve un valor doble que especifica la depreciación lineal de un activo por un período único.',
                            sumOfYearsDigits: 'Devuelve un valor doble que especifica la depreciación de los dígitos de la suma de años de un activo por un período especificado.',
                            convertBool: 'Convertir a Boolean.',
                            convertByte: 'Convertir a byte.',
                            convertChar: 'Convertir a char.',
                            convertDate: 'Convertir a la fecha.',
                            convertDouble: 'Convertir a doble.',
                            convertDecimal: 'Convertir a decimal.',
                            convertInteger: 'Convertir a entero.',
                            convertLong: 'Convertir a largo.',
                            convertObject: 'Convertir a objeto.',
                            convertShort: 'Convertir a corto.',
                            convertSingle: 'Convertir a single.',
                            convertString: 'Convertir a cadena.',
                            fix: 'Devuelve una parte entera de un número.',
                            hexaDecimal: 'Devuelve una cadena que representa el valor hexadecimal de un número.',
                            integerPortion: 'Devuelve una parte entera de un número.',
                            octal: 'Devuelve una cadena que representa el valor octal de un número.',
                            stringOfNumber: 'Devuelve una cadena que representa un número.',
                            stringAsNumeric: 'Devuelve un número en una cadena como un valor numérico del tipo apropiado.',
                            inScope: 'Devuelve verdadero si la instancia actual está dentro del alcance especificado.',
                            depthLevel: 'Devuelve un número entero basado en cero que representa el nivel de profundidad actual.',
                            previous: 'Devuelve el valor de la expresión para la fila de datos anterior.',
                            rowNumber: 'Devuelve un conteo en ejecución de todas las filas en el alcance especificado.'
                        }
                    },
                    dataAssign: {
                        measures: 'Medidas',
                        dimensions: 'Dimensiones',
                        search: 'Buscar',
                        xValue: 'X Valor(s)',
                        yValue: 'Y Valor(s)',
                        value: 'Valor(s)',
                        column: 'Columna',
                        row: 'Fila(s)',
                        size: 'tamaño(s)',
                        aggregate: 'Agregar',
                        filters: 'Filtros',
                        sorts: 'Ordena',
                        groups: 'Grupos',
                        expression: 'Expresión',
                        dragOnDrop: 'Arrastrar y soltar'
                    },
                    reportProperty: {
                        basicSettings: {
                            categoryName: 'Ajustes básicos',
                            background: 'Fondo',
                            borderTypes: {
                                border: 'Frontera',
                                borderLeft: 'Izquierda',
                                borderTop: 'Parte superior',
                                borderRight: 'Derecha',
                                borderBottom: 'Fondo'
                            },
                            borderStyles: {
                                solid: 'Sólido',
                                none: 'Ninguna',
                                double: 'Double',
                                dashed: 'Disparo',
                                dotted: 'Punteado'
                            }
                        },
                        generalSettings: {
                            categoryName: 'General',
                            printFirstPage: 'Imprimir en la primera página',
                            printLastPage: 'Imprimir en la última página'
                        },
                        size: {
                            sizeLabel: 'Tamaño',
                            paddingTypes: {
                                padding: 'Relleno',
                                paddingLeft: 'Izquierda',
                                paddingTop: 'Parte superior',
                                paddingRight: 'Derecha',
                                paddingBottom: 'Fondo'
                            }
                        },
                        position: {
                            categoryPosition: 'Posición',
                            positionLabel: 'Posición',
                            left: 'Izquierda',
                            top: 'Parte superior',
                            sizeLabel: 'Tamaño',
                            width: 'Anchura',
                            height: 'Altura'
                        },
                        margin: {
                            categoryName: 'Margen',
                            categoryHeader: 'Margen',
                            types: {
                                left: 'Izquierda',
                                right: 'Derecha',
                                bottom: 'Fondo',
                                top: 'Parte superior'
                            }
                        },
                        paperSize: {
                            orientation: 'Orientación',
                            header: 'Tamaño de papel',
                            label: 'Tamaño de papel',
                            orientationTypes: {
                                landScape: 'Paisaje',
                                portrait: 'Retrato'
                            },
                            types: {
                                a3Size: 'A3',
                                a4Size: 'A4',
                                b4Size: 'B4(JIS)',
                                b5Size: 'B5(JIS)',
                                envelope: 'Sobre #10',
                                envelopeMonarch: 'Sobre Monarca',
                                executive: 'Ejecutivo',
                                legal: 'Legal',
                                letter: 'Carta',
                                tabloid: 'Tabloide',
                                custom: 'Personalizado'
                            }
                        }
                    },
                    gridProperty: {
                        basicSettings: {
                            categoryName: 'Ajustes básicos',
                            horizontalGridLine: 'Línea de cuadrícula horizontal',
                            verticalGridLine: 'Línea de cuadrícula vertical',
                            filters: 'Filtros',
                            sorts: 'Ordena'
                        },
                        columnSettings: {
                            categoryName: 'Configuración de columna',
                            chooseColumn: 'Elegir columna',
                            columnName: 'Nombre de columna',
                            format: 'Formato',
                            enableLink: 'Habilitar enlace',
                            headerStyle: 'Estilo de encabezado',
                            cellStyle: 'Estilo celular',
                            summaryStyle: 'Estilo de resumen'
                        },
                        rowSettings: {
                            categoryName: 'Configuración de fila',
                            chooseRow: 'Elegir fila',
                            summaryColumns: 'Columnas de resumen',
                            summaryFields: {
                                column: 'Columna',
                                expression: 'Expresión'
                            }
                        },
                        appearance: {
                            categoryName: 'Apariencia',
                            showHeader: 'Mostrar Encabezado',
                            borderTypes: {
                                border: 'Frontera',
                                borderLeft: 'Izquierda',
                                borderTop: 'Parte superior',
                                borderRight: 'Derecha',
                                borderBottom: 'Fondo'
                            },
                            borderStyles: {
                                solid: 'Sólido',
                                none: 'Ninguna',
                                double: 'Double',
                                dashed: 'Disparo',
                                dotted: 'Punteado'
                            },
                            cellBorder: 'Borde de celda',
                            AlterRow: 'Fila alternativa',
                            AlterBackground: 'Antecedentes alternativos',
                        },
                        pageBreak: {
                            categoryName: 'Salto de página',
                            enablePageBreak: 'Habilitar salto de página',
                            breakLocation: {
                                categoryName: 'Lugar de descanso',
                                none: 'Ninguna',
                                start: 'Comienzo',
                                end: 'Fin',
                                startAndEnd: 'StartAndEnd',
                                between: 'Entre'
                            },
                            pageNumberReset: 'Restablecer número de página',
                        },
                        miscellaneous: {
                            categoryName: 'Diverso',
                            noRowsMessage: 'Mensaje sin filas',
                            pageName: 'Nombre de la página',
                            keepTogether: 'Mantenerse juntos',
                            repeatColumnHeaders: 'Repetir encabezados de columna',
                            fixedColumnHeaders: 'Encabezados de columna fijos',
                            fixedRowHeaders: 'Encabezados de fila fijos',
                        },
                        position: {
                            categoryPosition: 'Posición',
                            positionLabel: 'Posición',
                            left: 'Izquierda',
                            top: 'Parte superior',
                            sizeLabel: 'Tamaño',
                            width: 'Anchura',
                            height: 'Altura'
                        },
                        visibility: {
                            categoryName: 'Visibilidad',
                            visible: 'Visible'
                        },
                        font: {
                            categoryName: 'Fuente',
                            defaultStyle: 'Defecto',
                            normal: 'Normal',
                            italic: 'Itálico'
                        },
                        fontStyle: {
                            categoryName: 'Estilo de fuente',
                            defaultStyle: 'Defecto',
                            normal: 'Normal',
                            thin: 'Delgado',
                            extraLight: 'Extra ligero',
                            light: 'Ligero',
                            medium: 'Medio',
                            semiBold: 'SemiBold',
                            bold: 'Negrita',
                            extraBold: 'ExtraBold',
                            heavy: 'Pesado'
                        },
                        textDecoration: {
                            categoryName: 'Decoración de texto',
                            defaultStyle: 'Defecto',
                            none: 'Ninguna',
                            underline: 'Subrayar',
                            lineThrough: 'LineThrough',
                            overline: 'Overline'
                        },
                        alignment: {
                            categoryName: 'Alineación',
                            textAlignment: {
                                categoryName: 'Alineación del texto',
                                defaultStyle: 'Defecto',
                                left: 'Izquierda',
                                center: 'Centrar',
                                right: 'Derecha'
                            },
                            verticalAlignment: {
                                categoryName: 'Alineamiento vertical',
                                defaultStyle: 'Defecto',
                                top: 'Parte superior',
                                middle: 'Medio',
                                bottom: 'Fondo'
                            }
                        },
                        padding: {
                            padding: 'Relleno',
                            paddingLeft: 'Izquierda',
                            paddingTop: 'Parte superior',
                            paddingRight: 'Derecha',
                            paddingBottom: 'Fondo'
                        },
                        enableSummaryRow: 'Habilitar fila de resumen'
                    },
                    pivotGridProperty: {
                        basicSettings: {
                            categoryName: 'Ajustes básicos',
                            horizontalGridLine: 'Línea de cuadrícula horizontal',
                            verticalGridLine: 'Línea de cuadrícula vertical',
                            filters: 'Filtros',
                            sorts: 'Ordena'
                        },
                        format: 'Formato',
                        link: 'Enlazar',
                        position: {
                            categoryPosition: 'Posición',
                            positionLabel: 'Posición',
                            left: 'Izquierda',
                            top: 'Parte superior',
                            sizeLabel: 'Tamaño',
                            width: 'Anchura',
                            height: 'Altura'
                        },
                        visibility: {
                            categoryName: 'Visibilidad',
                            visible: 'Visible'
                        },
                        font: {
                            categoryName: 'Fuente',
                            defaultStyle: 'Defecto',
                            normal: 'Normal',
                            italic: 'Itálico'
                        },
                        fontStyle: {
                            categoryName: 'Estilo de fuente',
                            defaultStyle: 'Defecto',
                            normal: 'Normal',
                            thin: 'Delgado',
                            extraLight: 'Extra ligero',
                            light: 'Ligero',
                            medium: 'Medio',
                            semiBold: 'SemiBold',
                            bold: 'Negrita',
                            extraBold: 'ExtraBold',
                            heavy: 'Pesado'
                        },
                        textDecoration: {
                            categoryName: 'Decoración de texto',
                            defaultStyle: 'Defecto',
                            none: 'Ninguna',
                            underline: 'Subrayar',
                            lineThrough: 'LineThrough',
                            overline: 'Overline'
                        },
                        alignment: {
                            categoryName: 'Alineación',
                            textAlignment: {
                                categoryName: 'Alineación del texto',
                                defaultStyle: 'Defecto',
                                left: 'Izquierda',
                                center: 'Centrar',
                                right: 'Derecha'
                            },
                            verticalAlignment: {
                                categoryName: 'Alineamiento vertical',
                                defaultStyle: 'Defecto',
                                top: 'Parte superior',
                                middle: 'Medio',
                                bottom: 'Fondo'
                            }
                        },
                        padding: {
                            padding: 'Relleno',
                            paddingLeft: 'Izquierda',
                            paddingTop: 'Parte superior',
                            paddingRight: 'Derecha',
                            paddingBottom: 'Fondo'
                        },
                        appearance: {
                            categoryName: 'Apariencia',
                            showHeader: 'Mostrar Encabezado',
                            borderTypes: {
                                border: 'Frontera',
                                borderLeft: 'Izquierda',
                                borderTop: 'Parte superior',
                                borderRight: 'Derecha',
                                borderBottom: 'Fondo'
                            },
                            borderStyles: {
                                solid: 'Sólido',
                                none: 'Ninguna',
                                double: 'Double',
                                dashed: 'Disparo',
                                dotted: 'Punteado'
                            },
                            cellBorder: 'Cell Border',
                            AlterRow: 'Fila alternativa',
                            AlterBackground: 'Antecedentes alternativos',
                        },
                        pageBreak: {
                            categoryName: 'Salto de página',
                            enablePageBreak: 'Habilitar salto de página',
                            breakLocation: {
                                categoryName: 'Break Location',
                                none: 'Ninguna',
                                start: 'Comienzo',
                                end: 'Fin',
                                startAndEnd: 'StartAndEnd',
                                between: 'Entre'
                            },
                            pageNumberReset: 'Restablecer número de página',
                        },
                        miscellaneous: {
                            categoryName: 'Diverso',
                            noRowsMessage: 'Mensaje sin filas',
                            pageName: 'Nombre de la página',
                            keepTogether: 'Mantenerse juntos',
                            repeatColumnHeaders: 'Repetir encabezados de columna',
                            fixedColumnHeaders: 'Encabezados de columna fijos',
                            fixedRowHeaders: 'Encabezados de fila fijos',
                            repeatRowHeaders: 'Repetir encabezados de fila'
                        },
                        summarySettings: {
                            categoryName: 'Configuración resumida',
                            enableColumn: 'Habilitar columna de resumen',
                            columnStyle: 'Estilo de columna resumen',
                            columnBorder: 'Resumen de borde de columna',
                            chooseSummary: 'Elegir resumen',
                            summaryColumns: 'Columnas resumen',
                            enableRow: 'Habilitar fila de resumen',
                            rowStyle: 'Resumen del estilo de fila',
                            rowBorder: 'Resumen del borde de la fila'
                        },
                        groupSettings: {
                            summaryRows: 'Filas de resumen',
                            summaryStyle: 'Estilo de resumen',
                            summaryBorder: 'Resumen de frontera',
                            cellStyle: 'Estilo celular',
                            cellBorder: 'Cell Border',
                            summaryTable: {
                                column: 'Columna',
                                expression: 'Expresión'
                            }
                        },
                        columnGroupSettings: {
                            categoryName: 'Configuración del grupo de columnas',
                            chooseGroup: 'Elegir grupo de columnas'
                        },
                        rowGroupSettings: {
                            categoryName: 'Configuración del grupo de filas',
                            chooseRowGroup: 'Elige el grupo de filas',
                            rowName: 'Nombre de la fila'
                        },
                        columnSettings: {
                            categoryName: 'Configuración de columna',
                            chooseColumn: 'Elegir columna',
                            header: 'Encabezamiento',
                            headerStyle: 'Estilo de encabezado'
                        },
                        rowSettings: {
                            categoryName: 'Configuración de fila',
                            chooseRow: 'Elegir fila'
                        },
                        cornerCellSettings: {
                            categoryName: 'Configuración de celda de esquina',
                            cellLabel: 'Etiqueta de celda'
                        }
                    },
                    textBoxProperty: {
                        basicSettings: {
                            categoryName: 'Ajustes básicos',
                            font: {
                                categoryName: 'Fuente',
                                defaultStyle: 'Defecto',
                                normal: 'Normal',
                                italic: 'Itálico'
                            },
                            fontStyle: {
                                categoryName: 'Estilo de fuente',
                                defaultStyle: 'Defecto',
                                normal: 'Normal',
                                thin: 'Delgado',
                                extraLight: 'Extra ligero',
                                light: 'Ligero',
                                medium: 'Medio',
                                semiBold: 'SemiBold',
                                bold: 'Negrita',
                                extraBold: 'ExtraBold',
                                heavy: 'Pesado'
                            },
                            textDecoration: {
                                categoryName: 'Decoración de texto',
                                defaultStyle: 'Defecto',
                                none: 'Ninguna',
                                underline: 'Subrayar',
                                lineThrough: 'LineThrough',
                                overline: 'Overline'
                            },
                            format: 'Formato'
                        },
                        alignment: {
                            categoryName: 'Alineación',
                            textAlignment: {
                                categoryName: 'Alineación del texto',
                                defaultStyle: 'Defecto',
                                left: 'Izquierda',
                                center: 'Centrar',
                                right: 'Derecha'
                            },
                            verticalAlignment: {
                                categoryName: 'Alineamiento vertical',
                                defaultStyle: 'Defecto',
                                top: 'Parte superior',
                                middle: 'Medio',
                                bottom: 'Fondo'
                            }
                        },
                        appearance: {
                            categoryName: 'Apariencia',
                            borderTypes: {
                                border: 'Frontera',
                                borderLeft: 'Izquierda',
                                borderTop: 'Parte superior',
                                borderRight: 'Derecha',
                                borderBottom: 'Fondo'
                            },
                            borderStyles: {
                                solid: 'Sólido',
                                none: 'Ninguna',
                                double: 'Double',
                                dashed: 'Disparo',
                                dotted: 'Punteado'
                            },
                            background: 'Fondo'
                        },
                        link: 'Enlazar',
                        position: {
                            categoryPosition: 'Posición',
                            positionLabel: 'Posición',
                            sizeLabel: 'Tamaño',
                            left: 'Izquierda',
                            top: 'Parte superior',
                            width: 'Anchura',
                            height: 'Altura',
                            direction: {
                                categoryName: 'Dirección',
                                leftToRight: 'De izquierda a derecha',
                                rightToLeft: 'De derecha a izquierda'
                            }
                        },
                        visibility: {
                            categoryName: 'Visibilidad',
                            visible: 'Visible'
                        },
                        miscellaneous: {
                            categoryName: 'Diverso',
                            canGrow: 'Puede crecer',
                            canShrink: 'Puede reducir',
                        },
                        paragraphSettings: {
                            categoryName: 'Configuración de párrafo',
                            textAlignment: {
                                categoryName: 'Alineación del texto',
                                defaultStyle: 'Defecto',
                                left: 'Izquierda',
                                center: 'Centrar',
                                right: 'Derecha'
                            },
                            indent: {
                                categoryName: 'Sangrar',
                                leftIndent: 'Izquierda',
                                rightIndent: 'Derecha'
                            },
                            space: {
                                categoryName: 'Espacio',
                                topSpace: 'Parte superior',
                                bottomSpace: 'Fondo'
                            },
                            listLevel: {
                                categoryName: 'Nivel de lista',
                                zeroLevel: '',
                                oneLevel: '',
                                twoLevel: '',
                                threeLevel: '',
                                fourLevel: ''
                            },
                            listStyle: {
                                categoryName: 'Estilo de lista',
                                none: 'Ninguna',
                                numbered: 'Numerado',
                                bulleted: 'Bulleted'
                            }
                        },
                        padding: {
                            padding: 'Relleno',
                            paddingLeft: 'Izquierda',
                            paddingTop: 'Parte superior',
                            paddingRight: 'Derecha',
                            paddingBottom: 'Fondo'
                        },
                        contextMenu: {
                            cut: 'Cortar',
                            copy: 'Dupdo',
                            paste: 'Pegar',
                            expression: 'Expresión'
                        }
                    },
                    designPanel: {
                        headerText: 'Encabezamiento',
                        footerText: 'Pie de página'
                    },
                    queryDesigner: {
                        storeParameter: {
                            title: 'Parámetros',
                            ok: 'DE ACUERDO',
                            cancel: 'Cancelar',
                            parameterLable: 'Parámetro',
                            nullLable: 'Nulo',
                            valueLable: 'Valor',
                            dataTypeLable: 'Tipo de datos',
                            closeToolTip: 'Cerca'
                        },
                        parameter: {
                            title: 'Parámetros',
                            ok: 'DE ACUERDO',
                            cancel: 'Cancelar',
                            parameterLable: 'Parámetro',
                            nullLable: 'Nulo',
                            valueLable: 'Valor',
                            closeToolTip: 'Cerca'
                        },
                        filter: {
                            title: 'Filtros de consulta',
                            descriptionLable: 'Lista de filtros de tabla',
                            add: 'AÑADIR',
                            save: 'DE ACUERDO',
                            cancel: 'Cancelar',
                            nullLable: 'Nulo',
                            trueLable: 'Cierto',
                            falseLable: 'Falso',
                            parameterTooltip: 'Incluir como parámetro',
                            closeToolTip: 'Cerca',
                            intOperatorType: {
                                equals: 'Igual',
                                doesNotEqual: 'No es igual',
                                greaterThan: 'Mas grande que',
                                greaterThanOrEqual: 'Pero grande que',
                                lessThan: 'Menos que',
                                lessThanOrEqual: 'Menos que o igual a',
                                between: 'Entre',
                                notBetween: 'No entre'
                            },
                            stringOpertorType: {
                                equals: 'Igual',
                                startsWith: 'Comienza con',
                                endWith: 'Termina con',
                                contains: 'Contiene',
                                notContains: 'No contiene'
                            },
                            errorMessage: {
                                dateValidation: 'El valor es un formato de fecha no válido. ',
                                commonContent: 'El filtro en ',
                                booleanValidation: ' no tiene ningún valor para filtrar. Proporcione los valores para el filtro.',
                                stringValidation: ' no tiene los valores adecuados para filtrar. '
                            }
                        },
                        previewArea: {
                            dataPreview: 'Vista previa de datos',
                            noRecords: 'No hay registros que mostrar',
                            executeRecords: 'Ejecutar para previsualizar registros',
                            record: 'Grabar',
                            records: 'Archivos',
                            retrieved: 'Obtenido',
                            loadRecord: 'Carga más'
                        },
                        schemaArea: {
                            search: 'Buscar',
                            matchesFound: 'No se encontraron coincidencias',
                            rename: 'Rebautizar',
                            aggregation: 'Agregación',
                            dialogHeader: 'DataSet',
                            alertMessage: {
                                datasourceAlert: 'Seleccione un DataSource para configurar el conjunto de datos del informe',
                                removeTable: 'Las tablas asociadas a continuación se eliminarán con esto',
                                duplicateName: 'El nombre de columna especificado ya existe',
                                duplicateDatasetName: 'El nombre especificado ya existe en la lista de DataSet',
                                datasetSpecialCharacter: 'El nombre no debe contener espacios ni caracteres especiales',
                                specialCharacter: 'El nombre de la columna no debe contener caracteres especiales.',
                                switcherAlert: 'El cambio al diseñador visual descartará los cambios manuales realizados en la consulta. ¿Quieres usar el diseñador visual de todos modos? '
                            },
                            errorMessage: {
                                specifyName: 'Especifique el nombre de la columna',
                                specifyDatasetName: 'Especifique el nombre del conjunto de datos',
                                previewFailed: 'DataSet no pudo obtener una vista previa de la tabla seleccionada',
                                specifyQuery: 'Especifique la consulta DataSet',
                                selectTable: 'Seleccione la tabla para guardar el conjunto de datos',
                                queryFailed: 'DataSet no pudo guardar la consulta de la tabla seleccionada',
                                tableProcedure: 'DataSet no pudo recuperar el procedimiento de tabla seleccionado'
                            }
                        },
                        toolBar: {
                            datasourceLable: 'Fuente de datos',
                            datasetName: 'Nombre',
                            run: 'correr',
                            join: 'Unirse',
                            expression: 'Expresión',
                            filter: 'Filtrar',
                            code: 'Código',
                            finish: 'Terminar',
                            cancel: 'Cancelar',
                            datasourceWaterMark: 'Seleccione un DataSource'
                        },
                        joiner: {
                            title: 'Query Joiner',
                            descriptionLable: 'Lista de relaciones de tabla',
                            add: 'AÑADIR',
                            save: 'DE ACUERDO',
                            cancel: 'Cancelar',
                            closeToolTip: 'Cerca',
                            addField: 'Agregue campo',
                            leftTableWaterMark: 'Tabla izquierda',
                            rightTableWaterMark: 'Mesa derecha',
                            leftFieldWaterMark: 'Jardín izquierdo',
                            rightFieldWaterMark: 'El jardín derecho',
                            operatorWaterMark: 'Operador',
                            joinTypeWaterMark: 'Unirse al tipo',
                            joinTypes: {
                                inner: 'Interior',
                                outer: 'Izquierda Exterior',
                                rightOuter: 'Derecha Exterior',
                                fullOuter: 'Completo exterior'
                            },
                            errorMessage: {
                                removeField: 'Cada relación debe tener una condición de campo. Por lo tanto, no permite borrar este campo ',
                                noRelationAlert: ' no tiene relación con otras tablas',
                                selectLeftTable: 'Seleccione el valor de la tabla izquierda',
                                selectRightTable: 'Seleccione el valor de la tabla correcta',
                                selectRelation: 'Seleccione la relación para las tablas',
                                selectLeftColumn: 'Seleccione el valor de la columna izquierda del campo fila #',
                                selectRightColumn: 'Seleccione el valor de la columna derecha de la fila del campo #',
                                selectOperator: 'Seleccione el operador de la fila de campo #',
                                relationExists: 'Ya existe relación entre tablas'
                            }
                        },
                        credentialDialog: {
                            title: 'Diálogo de credenciales',
                            userName: 'Nombre de usuario',
                            password: 'Contraseña',
                            userNameWaterMark: 'Nombre de usuario',
                            passwordWaterMark: 'Contraseña',
                            userNameErrorMessage: 'Por favor ingrese el nombre de usuario',
                            passwordErrorMessage: 'Por favor, ingrese contraseña',
                            connect: 'Conectar',
                            close: 'Cerca'
                        },
                        queryExpression: {
                            title: 'Expresiones de consulta',
                            functionLabel: 'Funciones',
                            columnLabel: 'Configuración de columna',
                            expressionLabel: 'Expresión',
                            nameLabel: 'Nombre',
                            descriptionLabel: 'Descripción ',
                            exampleLabelText: 'Ejemplo',
                            ok: 'Salvar',
                            cancel: 'Cancelar',
                            add: 'AÑADIR',
                            textAreaWaterMark: 'Expresión de consulta',
                            nameFieldWaterMark: 'Nombre de expresión',
                            closeToolTip: 'Cerca',
                            errorMessage: {
                                saveAlert: 'La expresión no se guarda. ¿Quieres guardar y continuar?',
                                bracketSyntax: 'Sintaxis incorrecta cerca de abrir / cerrar paréntesis.',
                                parseAlert: 'ReportDesigner no pudo analizar la expresión especificada.',
                                nameAlert: 'El campo de nombre no debe estar vacío.',
                                emptyAlert: 'El campo de expresión no debe estar vacío.',
                                duplicateName: 'El nombre de expresión especificado ya existe',
                                specialCharacter: 'El nombre de la expresión no debe contener caracteres especiales.',
                                referenceError: '¡La columna no puede ser referida dentro de su propia expresión!',
                                invalidSyntax: 'Sintaxis inválida cerca de Abrir / Cerrar grupo (s).',
                                retrieveExpression: 'ReportDesigner no pudo recuperar la expresión especificada.',
                            },
                            datasetTitle: 'DataSet',
                            expressions: {
                                all: 'Todas',
                                numbers: 'Números',
                                logical: 'Lógico',
                                conditional: 'Condicional',
                                date: 'Fecha',
                                stringType: 'Cuerda',
                                text: 'Texto',
                                miscellenuous: 'Diverso ',
                                abs: 'Devuelve el valor absoluto de la expresión dada.',
                                acos: 'Devuelve el coseno inverso (también conocido como arcocoseno) de la expresión numérica dada.',
                                asin: 'Devuelve el seno inverso (también conocido como arcoseno) de la expresión numérica dada.',
                                atan: 'Devuelve la tangente inversa (también conocida como arcotangente) de la expresión numérica dada.',
                                cos: 'Devuelve el coseno del ángulo especificado en radianes de la expresión dada.',
                                degree: 'Devuelve el ángulo en grados para el que se especifica en radianes de la expresión numérica dada.',
                                exponent: 'Devuelve el valor exponencial de la expresión dada. ',
                                logrithm: 'Devuelve el logaritmo de la expresión dada a la base especificada.',
                                pi: 'Devuelve el valor constante de PI.',
                                power: 'Devuelve el valor de la expresión dada (expresión1) a la potencia especificada (expresión2). ',
                                radians: 'Devuelve el ángulo en radianes para el que se especifica en grados en la expresión numérica dada.',
                                round: 'Devuelve un valor redondeado.',
                                sign: 'Devuelve un valor que representa el signo positivo (+1), cero (0) o negativo (-1) de la expresión numérica dada.',
                                sin: 'Devuelve el seno del ángulo especificado en radianes de la expresión dada.',
                                squareRoot: 'Devuelve la raíz cuadrada de la expresión numérica dada.',
                                tan: 'Devuelve la tangente de la expresión numérica dada.',
                                ifCondition: 'Devuelve una parte verdadera o una parte falsa, según la evaluación de la expresión.',
                                ifNull: 'Si la expresión es numérica / cadena / fecha, devuelve la primera expresión. Si la primera expresión es NULL, devuelve la segunda expresión.',
                                isNotNull: 'Si numeric / string / date_expression es NULL, devuelve una cadena que representa falso; de lo contrario representa verdadero.',
                                isNull: 'Si numeric / string / date_expression es NULL, devuelve una cadena que representa verdadero; de lo contrario representa falso.',
                                and: 'Devuelve verdadero si ambas expresiones se evalúan como verdaderas.',
                                notOperation: 'Devuelve verdadero si ambas expresiones se evalúan como verdaderas.',
                                orOperation: 'Devuelve verdadero si alguna de las expresiones se evalúa como verdadera.',
                                addDate: 'Agrega la cantidad de días a la fecha especificada.',
                                name: 'Devuelve una cadena que representa la parte de fecha especificada de la expresión de fecha dada.',
                                part: 'Devuelve un valor entero que representa la parte de fecha especificada de la expresión de fecha dada.',
                                sub: 'Devuelve la fecha restada de la fecha especificada.',
                                day: 'Devuelve un valor numérico que representa la parte del día de la fecha especificada.',
                                daydiff: 'Devuelve un valor numérico que representa la diferencia entre dos fechas especificadas.',
                                hour: 'Devuelve la hora de la fecha dada como un entero.',
                                minute: 'Devuelve un valor numérico que representa la parte de los minutos de la fecha resultante de la expresión de fecha especificada.',
                                month: 'Devuelve un valor numérico que representa la parte del mes de la fecha resultante de la expresión de fecha especificada.',
                                now: 'Devuelve la fecha y hora actual.',
                                today: 'Devuelve la fecha actual.',
                                year: 'Devuelve un valor numérico que representa la parte del año de la fecha resultante de la expresión de fecha especificada.',
                                char: 'Convierte el código ASCII entero dado en un personaje.',
                                concat: 'Devuelve un valor de cadena resultante de la concatenación de dos o más valores de cadena.',
                                contains: 'Devuelve true si la expresión de cadena dada contiene la expresión de subcadena especificada.',
                                endsWith: 'Devuelve verdadero si la expresión de cadena dada finaliza con la expresión de subcadena especificada.',
                                left: 'Devuelve el número especificado de caracteres desde el inicio de la expresión de cadena dada.',
                                length: 'Devuelve el logaritmo natural de la expresión dada.',
                                lower: 'Devuelve un valor de cadena convertido en minúsculas a partir de la expresión de cadena dada.',
                                leftTrim: 'Devuelve el valor de cadena con los espacios en blanco iniciales eliminados de la expresión de cadena.',
                                maximum: 'Devuelve el valor máximo en la expresión dada.',
                                minimum: 'Devuelve el valor mínimo en la expresión dada.',
                                right: 'Devuelve el número especificado de caracteres desde el final de la expresión de cadena dada.',
                                rightTrim: 'Devuelve la cadena sin espacios finales del lado derecho en la cadena dada.',
                                startswith: 'Devuelve verdadero si las expresiones de cadena dadas comienzan con la expresión de subcadena especificada.',
                                subString: 'Devuelve una longitud específica de cadena a partir del índice específico de la expresión de cadena dada.',
                                upper: 'Devuelve un valor de cadena convertido en mayúscula a partir de una expresión de cadena determinada.'
                            }
                        }
                    }
                };
                break;
            case "ejRibbon":
                ej.Ribbon.Locale = ej.Ribbon.Locale || {};
                ej.Ribbon.Locale["es-ES"] = {
                    CustomizeQuickAccess: "Personalizar barra de acceso rápido",
                    RemoveFromQuickAccessToolbar: "Eliminar de la barra de herramientas de acceso rápido",
                    AddToQuickAccessToolbar: "Añadir a la barra de acceso rápido",
                    ShowAboveTheRibbon: "Mostrar encima de la cinta de opciones",
                    ShowBelowTheRibbon: "Mostrar debajo de la cinta",
                    MoreCommands: "Más comandos ..."
                };
                break;
            case "ejKanban":
                ej.Kanban.Locale = ej.Kanban.Locale || {};
                ej.Kanban.Locale["es-ES"] = {
                    EmptyCard: "No hay tarjetas para mostrar",
                    SaveButton: "guardar",
                    CancelButton: "cancelar",
                    EditFormTitle: "Detalles de ",
                    AddFormTitle: "Añadir nueva tarjeta",
                    SwimlaneCaptionFormat: "- {{:count}}{{if count == 1 }} artículo {{else}} artículos {{/if}}",
                    FilterSettings: "Filtros:",
                    FilterOfText: "De",
                    Max: "Máx.",
                    Min: "Min",
                    Cards: "  Tarjetas",
                    ItemsCount: "Artículos Contar :",
                    Unassigned: "Sin asignar",
                    AddCard: "Agregar tarjeta",
                    EditCard: "Editar la tarjeta",
                    DeleteCard: "Eliminar tarjeta",
                    TopofRow: "Inicio de la fila",
                    BottomofRow: "Parte inferior de la fila",
                    MoveUp: "Ascender",
                    MoveDown: "Mover hacia abajo",
                    MoveLeft: "Mover hacia la izquierda",
                    MoveRight: "Mover a la derecha",
                    MovetoSwimlane: "Muévete a la piscina",
                    HideColumn: "Ocultar columna",
                    VisibleColumns: "Columnas visibles",
                    PrintCard: "Imprimir la tarjeta"
                };
                break;
            case "ejRTE":
                ej.RTE.Locale = ej.RTE.Locale || {};
                ej.RTE.Locale["es-ES"] = {
                    bold: "Negrita",
                    italic: "Itálico",
                    underline: "Subrayar",
                    strikethrough: "Tachado",
                    superscript: "Sobrescrito",
                    subscript: "Subíndice",
                    justifyCenter: "Alinear centro de texto",
                    justifyLeft: "Alinear texto a la izquierda",
                    justifyRight: "Alinear el texto a la derecha",
                    justifyFull: "Justificar",
                    unorderedList: "Insertar lista no ordenada",
                    orderedList: "Insertar lista ordenada",
                    indent: "Aumento guión",
                    fileBrowser: "Explorador de archivos",
                    outdent: "Reducir sangría",
                    cut: "Cortar",
                    copy: "Dupdo",
                    paste: "Pegar",
                    paragraph: "Párrafo",
                    undo: "Deshacer",
                    redo: "Rehacer",
                    upperCase: "caso superior",
                    lowerCase: "Minúscula",
                    clearAll: "Limpiar todo",
                    clearFormat: "Borrar formato",
                    createLink: "Insertar / Editar hipervínculo",
                    removeLink: "Eliminar hipervínculo",
                    tableProperties: "Propiedades de tabla",
                    insertTable: "Insertar",
                    deleteTables: "Borrar",
                    imageProperties: "Propiedades de la imagen",
                    openLink: "Abrir hipervínculo",
                    image: "Insertar imagen",
                    video: "Insertar vídeo",
                    editTable: "Editar propiedades de tabla",
                    embedVideo: "Pegue el código de inserción de abajo",
                    viewHtml: "Ver HTML",
                    fontName: "Seleccionar la familia de fuentes",
                    fontSize: "Seleccionar el tamaño de la fuente",
                    fontColor: "Seleccionar el color",
                    format: "Formato",
                    backgroundColor: "Color de fondo",
                    style: "Estilos",
                    deleteAlert: "¿Seguro que quieres borrar todo el contenido?",
                    copyAlert: "Su navegador no admite acceso directo al portapapeles. Utilice el método abreviado de teclado Ctrl + C en lugar de copiar.",
                    pasteAlert: "Su navegador no admite acceso directo al portapapeles. Utilice el atajo de teclado Ctrl + V en lugar de la operación de pegar.",
                    cutAlert: "Su navegador no admite acceso directo al portapapeles. Utilice el método abreviado de teclado Ctrl + X en lugar de la operación de corte.",
                    videoError: "El área de texto no puede estar vacía",
                    imageWebUrl: "Dirección web",
                    imageAltText: "Texto alternativo",
                    dimensions: "Dimensiones",
                    constrainProportions: "Restringir las proporciones",
                    linkWebUrl: "Dirección web",
                    imageLink: "Imagen como enlace",
                    imageBorder: "Borde de imagen",
                    imageStyle: "Estilo",
                    linkText: "Texto",
                    linkTooltipLabel: "Tooltip",
                    html5Support: "Este icono de herramienta sólo está habilitado en navegadores compatibles con HTML5",
                    linkOpenInNewWindow: "Abrir enlace en una nueva ventana",
                    tableColumns: "Número de columnas",
                    tableRows: "Nº de filas",
                    tableWidth: "Anchura",
                    tableHeight: "Altura",
                    tableCellSpacing: "Espaciado celular",
                    tableCellPadding: "celular",
                    tableBorder: "Frontera",
                    tableCaption: "Subtítulo",
                    tableAlignment: "Alineación",
                    textAlign: "Texto alineado",
                    dialogUpdate: "Actualizar",
                    dialogInsert: "Insertar",
                    dialogCancel: "Cancelar",
                    dialogApply: "Aplicar",
                    dialogOk: "De acuerdo",
                    createTable: "Insertar mesa",
                    insertTable: "Insertar",
                    addColumnLeft: "Insertar columnas a la izquierda",
                    addColumnRight: "Insertar columnas a la derecha",
                    addRowAbove: "Insertar filas arriba",
                    addRowBelow: "Insertar filas debajo",
                    deleteRow: "Eliminar toda la fila",
                    deleteColumn: "Eliminar toda la columna",
                    deleteTable: "Eliminar tabla",
                    customTable: "Crear tabla personalizada ...",
                    characters: "Caracteres",
                    words: "Palabras",
                    general: "General",
                    advanced: "Avanzado",
                    table: "Mesa",
                    row: "Fila",
                    column: "Columna",
                    cell: "Celda",
                    solid: "Sólido",
                    dotted: "Punteado",
                    dashed: "dañado",
                    doubled: "Doble",
                    maximize: "Maximizar",
                    resize: "Minimizar",
                    swatches: "Muestras",
                    paragraph: "Párrafo",
                    quotation: "Cotización",
                    heading1: "Título 1",
                    heading2: "Rúbrica 2",
                    heading3: "Rúbrica 3",
                    heading4: "Rúbrica 4",
                    heading5: "Rúbrica 5",
                    heading6: "Rúbrica 6",
                    segoeui: "Segoe UI",
                    arial: "Arial",
                    couriernew: "Courier Nuevo",
                    georgia: "Georgia",
                    impact: "Impacto",
                    lucidaconsole: "Consola Lucida",
                    tahoma: "Tahoma",
                    timesnewroman: "Times New Roman",
                    trebuchetms: "Trebuchet MS",
                    verdana: "Verdana",
                    disc: "Desct",
                    circle: "Circulo",
                    square: "Cuadrado",
                    number: "Número",
                    loweralpha: "Alfa Inferior",
                    upperalpha: "alfa superior",
                    lowerroman: "Bajo romano",
                    upperroman: "alto romano",
                    none: "Ninguna",
                    linkTooltip: "Ctrl + clic para seguir el enlace",
                    charSpace: "Personajes (con espacios)",
                    charNoSpace: "Caracteres (sin espacios)",
                    wordCount: "El recuento de palabras",
                    left: "Izquierda",
                    right: "Derecha",
                    center: "Centrar",
                    zoomIn: "acercarse",
                    zoomOut: "Disminuir el zoom",
                    print: "Impresión",
                    wordExport: "Exportar como documento de Word",
                    pdfExport: "Exportar como archivo PDF",
                    FindAndReplace: "Encontrar y reemplazar",
                    Find: "Encontrar",
                    MatchCase: "Match Case",
                    WholeWord: "Toda palabra",
                    ReplaceWith: "Remplazar con",
                    Replace: "Reemplazar",
                    ReplaceAll: "Reemplaza todo",
                    FindErrorMsg: "No se pudo encontrar la palabra especificada.",
                    customFontColor: "Mas colores...",
                    customBGColor: "Mas colores...",
                    TransBGColor: "transparente",
                    addtodictionary: "Añadir al diccionario",
                    ignoreall: "ignorar todo"
                };
                break;
            case "ejRecurrenceEditor":
                ej.RecurrenceEditor.Locale = ej.RecurrenceEditor.Locale || {};
                ej.RecurrenceEditor.Locale["es-ES"] = {
                    Repeat: "Repetir",
                    Never: "Nunca",
                    Daily: "Diariamente",
                    Weekly: "Semanal",
                    Monthly: "Mensual",
                    Yearly: "Anual",
                    First: "primero",
                    Second: "Segundo",
                    Third: "Tercero",
                    Fourth: "Cuarto",
                    Last: "Último",
                    EveryWeekDay: "Cada día de la semana",
                    Every: "Cada",
                    RecurrenceDay: "Días",
                    RecurrenceWeek: "Semanas",
                    RecurrenceMonth: "Meses",
                    RecurrenceYear: "Años",
                    RepeatOn: "repetir en",
                    RepeatBy: "Repita por",
                    StartsOn: "comienza el",
                    Times: "veces",
                    Ends: "extremos",
                    Day: "Día",
                    The: "los",
                    OfEvery: "De",
                    After: "Después",
                    On: "En",
                    Occurrence: "ocurrencias",
                    Until: "Hasta"
                };
                break;
            case "ejSchedule":
                ej.Schedule.Locale = ej.Schedule.Locale || {};
                ej.Schedule.Locale["es-ES"] = {
                    ReminderWindowTitle: "ventana de aviso",
                    CreateAppointmentTitle: "crear cita",
                    RecurrenceEditTitle: "Editar Repetir cita",
                    RecurrenceEditMessage: "¿Cómo le gustaría cambiar la designación de la serie?",
                    RecurrenceEditOnly: "Sólo esta cita",
                    RecurrenceEditFollowingEvent: "Eventos siguientes",
                    RecurrenceEditSeries: "serie completa",
                    PreviousAppointment: "cita previa",
                    NextAppointment: "Próxima cita",
                    AppointmentSubject: "Tema",
                    StartTime: "Hora de inicio",
                    EndTime: "Hora de finalización",
                    AllDay: "Todo el dia",
                    StartTimeZone: "iniciar la zona horaria",
                    EndTimeZone: "Zona de Hora de finalización",
                    Today: "Hoy",
                    Recurrence: "Repetir",
                    Done: "Hecho",
                    Cancel: "Cancelar",
                    Ok: "DE ACUERDO",
                    Repeat: "Repetir",
                    RepeatBy: "Repita por",
                    RepeatEvery: "Repite cada",
                    RepeatOn: "repetir en",
                    StartsOn: "comienza el",
                    Ends: "extremos",
                    Summary: "Resumen",
                    Daily: "Diariamente",
                    Weekly: "Semanal",
                    Monthly: "Mensual",
                    Yearly: "Anual",
                    Every: "Cada",
                    EveryWeekDay: "Cada día de la semana",
                    Never: "Nunca",
                    After: "Después",
                    Occurrence: "ocurrencias",
                    On: "En",
                    Edit: "Editar",
                    RecurrenceDay: "Días",
                    RecurrenceWeek: "Semanas",
                    RecurrenceMonth: "Meses",
                    RecurrenceYear: "Años",
                    The: "los",
                    OfEvery: "de cada",
                    First: "primero",
                    Second: "Segundo",
                    Third: "Tercero",
                    Fourth: "Cuarto",
                    Last: "Último",
                    WeekDay: "Día laborable",
                    WeekEndDay: "Día de fin de semana",
                    Subject: "Tema",
                    Categorize: "Categorías",
                    DueIn: "Debido en",
                    DismissAll: "Descartar todo",
                    Dismiss: "Despedir",
                    OpenItem: "Abrir el articulo",
                    Snooze: "dormitar",
                    Day: "Día",
                    Week: "Semana",
                    WorkWeek: "Semana de trabajo",
                    Month: "Mes",
                    AddEvent: "Añadir evento",
                    CustomView: "Vista personalizada",
                    Agenda: "Agenda",
                    Detailed: "Modificar cita",
                    EventBeginsin: "Comienza en la cita",
                    Editevent: "Modificar cita",
                    Editfollowingevent: "Eventos siguientes",
                    Editseries: "Editar Serie",
                    Times: "veces",
                    Until: "hasta",
                    Eventwas: "cita era",
                    Hours: "horas",
                    Minutes: "mins",
                    Overdue: "cita atrasada",
                    Days: "días",
                    Event: "Evento",
                    Select: "seleccionar",
                    Previous: "Anterior",
                    Next: "Siguiente",
                    Close: "Cerca",
                    Delete: "Borrar",
                    Date: "Fecha",
                    Showin: "Mostrar en",
                    Gotodate: "Ir a la fecha",
                    Resources: "RECURSOS",
                    RecurrenceDeleteTitle: "Eliminar Repetir cita",
                    Location: "Ubicación",
                    Priority: "Prioridad",
                    RecurrenceAlert: "Alerta",
                    NoTitle: "Sin título",
                    OverFlowAppCount: "más nombramientos",
                    AppointmentIndicator: "Click para ver más citas",
                    WrongPattern: "El patrón de periodicidad no es válido",
                    CreateError: "La duración de la cita debe ser inferior a la frecuencia con que se produce. Acortar la duración, o cambiar el patrón de repetición en el cuadro de diálogo Repetir cita.",
                    DragResizeError: "No se puede reprogramar una ocurrencia de la cita periódica si se salta una ocurrencia posterior de la misma cita.",
                    StartEndError: "Hora de finalización debe ser mayor que el tiempo de inicio",
                    MouseOverDeleteTitle: "eliminar cita",
                    DeleteConfirmation: "¿Está seguro de que desea eliminar esta cita?",
                    Time: "Hora",
                    EmptyResultText: "No hay sugerencias",
                    BlockIntervalAlertTitle: "Alerta",
                    BlockIntervalError: "El intervalo de tiempo seleccionado ha sido bloqueado y no está disponible para la selección.",
                    RecurrenceDateValidation: "Algunos meses tienen menos fechas seleccionadas. Durante estos meses, la ocurrencia caerá en la última fecha del mes",
                    SeriesChangeAlert: "Los cambios realizados en instancias específicas de esta serie serán cancelados y esas citas coincidirán con la serie nuevamente"
                };
                break;
            case "ejSpreadsheet":
                ej.Spreadsheet.Locale = ej.Spreadsheet.Locale || {};
                ej.Spreadsheet.Locale["es-ES"] = {
                    Cut: "Cortar",
                    Copy: "Copia",
                    FormatPainter: "Copiar formato",
                    Paste: "Pegar",
                    PasteValues: "Sólo pegar valores",
                    PasteSpecial: "Pegar",
                    Filter: "Filtrar",
                    FilterContent: "Activar el filtrado de las celdas seleccionadas.",
                    FilterSelected: "Filtrar por el valor de la celda seleccionada",
                    Sort: "Ordenar",
                    Clear: "Claro",
                    ClearContent: "Eliminar todo en la célula, o eliminar sólo los de formato, contenidos, comentarios o hipervínculos.",
                    ClearFilter: "Borrar filtro",
                    ClearFilterContent: "Limpiar el filtro y ordenar el estado de la gama actual de datos.",
                    SortAtoZ: "Ordenar de A a Z",
                    SortAtoZContent: "Los más bajos.",
                    SortZtoA: "Ordenar de Z a A",
                    SortZtoAContent: "De mayor a menor.",
                    SortSmallesttoLargest: "Ordenar de menor a mayor",
                    SortLargesttoSmallest: "Ordenar de mayor a menor",
                    SortOldesttoNewest: "Ordenar antiguo a más reciente",
                    SortNewesttoOldest: "Ordenar reciente al más antiguo",
                    Insert: "Insertar",
                    InsertTitle: "Las células de inserción",
                    InsertContent: "Añadir nuevas celdas, filas o columnas a su libro ",
                    MultipleInsertContent: " Para su información:. Para insertar varias filas o columnas a la vez, seleccionar varias filas o columnas de la hoja, y haga clic en Insertar.",
                    InsertSBContent: "Añadir celdas, filas, columnas u hojas de su libro.",
                    Delete: "Borrar",
                    DeleteTitle: "eliminar celdas",
                    DeleteContent: "Eliminar celdas, filas, columnas u hojas de su libro de trabajo ",
                    MultipleDeleteContent: " Para su información:. Para eliminar varias filas o columnas a la vez, seleccionar varias filas o columnas de la hoja, y haga clic en Eliminar.",
                    FindSelectTitle: "Buscar y seleccionar",
                    FindSelectContent: "Haga clic para ver opciones para buscar texto en el documento.",
                    CalculationOptions: "Opciones de cálculo",
                    CalcOptTitle: "Opciones de cálculo",
                    CalcOptContent: "Elige fórmulas para calcular de forma automática o manualmente. ",
                    CalcOptRecalcContent: " Si se realiza un cambio que afecta a un valor, hoja de cálculo volverá a calcular automáticamente.",
                    CalculateSheet: "Calcula Hoja",
                    CalculateNow: "calcular Ahora",
                    CalculateNowContent: "Calcula el libro completo ahora.",
                    CalculateNowTurnOffContent: " Sólo es necesario usar esta opción si el cálculo automático está desactivado.",
                    CalculateSheetContent: "Calcular la hoja activa ahora.",
                    CalculateSheetTurnOffContent: " Sólo es necesario usar esta opción si el cálculo automático está desactivado.",
                    Title: "Hoja de cálculo",
                    ColorPicker: "Selector de colorAlignRightContent",
                    Ok: "DE ACUERDO",
                    Cancel: "Cancelar",
                    Alert: "No podríamos hacer esto para el rango de celdas seleccionado. Seleccionar una sola celda dentro de un rango de datos y vuelva a intentarlo.",
                    HeaderAlert: "El comando no pudo completarse debido a que está intentando filtrar con el cabezal del filtro. Seleccionar una sola celda en el rango del filtro y a intentar el mandato.",
                    FlashFillAlert: "Todos los datos próximos a la selección fue verificada y no hubo un patrón para el relleno de valores.",
                    Formatcells: "Formato de celdas",
                    FontFamily: "Fuente",
                    FFContent: "Elegir un nuevo tipo de letra para el texto.",
                    FontSize: "Tamaño de fuente",
                    FSContent: "Cambiar el tamaño de su texto.",
                    IncreaseFontSize: "Aumentar tamaño de fuente",
                    IFSContent: "Haga su texto un poco más grande.",
                    DecreaseFontSize: "Disminuir fuente",
                    DFSContent: "Haga su texto un poco más pequeño.",
                    Bold: "Negrita",
                    Italic: "Itálico",
                    Underline: "Subrayar",
                    Linethrough: "A través de la línea",
                    FillColor: "Color de relleno",
                    FontColor: "Color de fuente",
                    TopAlign: "Alinear arriba",
                    TopAlignContent: "Alinear el texto a la parte superior.",
                    MiddleAlign: "Alinear Medio",
                    MiddleAlignContent: "Alinear el texto de modo que quede centrado entre la parte superior e inferior de la celda.",
                    BottomAlign: "Alinear abajo",
                    BottomAlignContent: "Alinear el texto a la parte inferior.",
                    WrapText: "Ajustar el texto",
                    WrapTextContent: "Ajustar el texto extra larga en varias líneas para que pueda ver todo.",
                    AlignLeft: "Alinear a la izquierda",
                    AlignLeftContent: "Alinear su contenido a la izquierda.",
                    AlignCenter: "Centrar",
                    AlignCenterContent: "Centro de su contenido.",
                    AlignRight: "alinear a la derecha",
                    AlignRightContent: "Alinear su contenido a la derecha.",
                    IncreaseIndent: "Aumento guión",
                    IncreaseIndentContent: "Mueva su contenido más lejos del borde de la celda.",
                    DecreaseIndent: "Reducir sangría",
                    DecreaseIndentContent: "Mueva su contenido más cerca del borde de la celda.",
                    Undo: "Deshacer",
                    Redo: "Rehacer",
                    NumberFormat: "Formato numérico",
                    NumberFormatContent: "Elija el formato de sus células, como porcentaje, moneda, fecha u hora.",
                    AccountingStyle: "Estilo de Contabilidad",
                    AccountingStyleContent: "Formato que el formato de número de contabilidad en dólares.",
                    PercentageStyle: "Estilo ciento",
                    PercentageStyleContent: "Formato como un porcentaje.",
                    CommaStyle: "Estilo millares",
                    CommaStyleContent: "Formato sin separador de miles.",
                    IncreaseDecimal: "aumentar decimales",
                    IncreaseDecimalContent: "Ver más lugares decimales para un valor más preciso.",
                    DecreaseDecimal: "disminuir decimales",
                    DecreaseDecimalContent: "Mostrar menos cifras decimales.",
                    AutoSum: "Autosuma",
                    AutoSumTitle: "Suma",
                    AutoSumContent: "Añadir automáticamente un cálculo rápido de la hoja de cálculo, tales como suma o promedio.",
                    Fill: "Llenar",
                    ExportXL: "Sobresalir",
                    ExportCsv: "CSV",
                    ExportPdf: "PDF",
                    BackgroundColor: "Color de relleno",
                    BGContent: "Colorear el fondo de las células para hacer que destaquen.",
                    ColorContent: "Cambiar el color de su texto.",
                    Border: "Frontera",
                    BorderContent: "Aplicar bordes a las celdas seleccionadas.",
                    BottomBorder: "Borde inferior",
                    TopBorder: "Border,",
                    LeftBorder: "Borde izquierdo",
                    RightBorder: "Borde derecho",
                    OutsideBorder: "fronteras exteriores",
                    NoBorder: "Sin bordes",
                    AllBorder: "todas las fronteras",
                    ThickBoxBorder: "Gruesa borde de cuadro",
                    ThickBottomBorder: "Borde inferior grueso",
                    TopandThickBottomBorder: "Superior e inferior grueso de la frontera",
                    BottomDoubleBorder: "Borde doble inferior",
                    TopandBottomDoubleBorder: "Borde doble superior e inferior",
                    DrawBorderGrid: "Dibujar borde de cuadrícula",
                    DrawBorder: "dibujar borde",
                    TopandBottomBorder: "Superior e inferior de la frontera",
                    BorderColor: "Color de linea",
                    BorderStyle: "Estilo de línea",
                    Number: "Número se utiliza para la visualización general de números. Moneda y oferta contabilidad especializada para dar formato a un valor monetario.",
                    General: "Formato de celdas generales no tienen formato de número específico.",
                    Currency: "Los formatos de moneda se utilizan para los valores monetarios generales. Utilice formatos de Contabilidad para alinear los puntos decimales en una columna.",
                    Accounting: "formatos de contabilidad se alinean los símbolos de moneda y puntos decimales en una columna.",
                    Text: "Formato de celdas de texto se tratan como texto, incluso cuando un número está en la célula. La célula se muestra exactamente como introducido.",
                    Percentage: "formatos porcentuales multiplican el valor de la celda por 100 y muestra el resultado con un símbolo de porcentaje.",
                    CustomMessage: "Escriba el código de formato de número, usando uno de código existente como punto de partida.",
                    Fraction: " ",
                    Scientific: " ",
                    Type: "Tipo:",
                    CustomFormatAlert: "Introduzca un formato válido",
                    Date: "Formatos de fecha muestran números de serie de fecha y hora como valores de fecha.",
                    Time: "Tiempo formatos de fecha de visualización y números de serie de tiempo como valores de fecha.",
                    File: "ARCHIVO",
                    New: "Nuevo",
                    Open: "Abierto",
                    SaveAs: "Guardar como",
                    Print: "Impresión",
                    PrintContent: "Imprimir la hoja actual.",
                    PrintSheet: "Imprimir",
                    PrintSelected: "De impresión, seleccione",
                    PrintSelectedContent: "Seleccionar un área en la hoja que desea imprimir.",
                    HighlightVal: "Formato de datos no válidos",
                    ClearVal: "claro Validación",
                    Validation: "Validación",
                    DataValidation: "Validación de datos",
                    DVContent: "Escoger de una lista de reglas para limitar el tipo de datos que se pueden introducir en una célula.",
                    PageSize: "Tamaño de página",
                    PageSizeContent: "Elija un tamaño de página para el documento.",
                    FormatCells: "Formato de celdas",
                    ConditionalFormat: "Formato condicional",
                    CFContent: "Fácilmente detectar tendencias y patrones en sus datos usando los colores para resaltar visualmente los valores importantes.",
                    And: "y",
                    With: "con",
                    GTTitle: "Mas grande que",
                    GTContent: "Formato de celdas que son mayores que:",
                    LTTitle: "Menos que",
                    LTContent: "Formato de celdas que son menos de:",
                    BWTitle: "Entre",
                    BWContent: "Formato de celdas que se encuentran entre:",
                    EQTitle: "Igual a",
                    EQContent: "Formato de celdas que se van a EQUAL:",
                    DateTitle: "Una fecha que se sitúa",
                    DateContent: "Formato de celdas que contienen una fecha:",
                    ContainsTitle: "Texto que contiene",
                    ContainsContent: "Formato de celdas que contienen el texto:",
                    GreaterThan: "Mas grande que",
                    LessThan: "Menos que",
                    Between: "Entre",
                    EqualTo: "Igual a",
                    TextthatContains: "El texto que contiene",
                    DateOccurring: "Una fecha que se sitúa",
                    ClearRules: "Reglas claras",
                    ClearRulesfromSelected: "Reglas claras de las celdas seleccionadas",
                    ClearRulesfromEntireSheets: "Reglas claras de hoja entera",
                    CellStyles: "Estilos de celda",
                    CellStylesContent: "Un estilo colorido es una gran manera de hacer que los datos importantes se destacan en la hoja.",
                    CellStyleHeaderText: "Bueno, malo y neutral / títulos y encabezamientos Estilos de celda / temáticos",
                    Custom: "Escriba el código de formato de número, usando uno de los códigos existentes como punto de partida.",
                    CellStyleGBN: "Normal / Bad / Buena / Neutro",
                    CellStyleTH: "Rúbrica 4 / Título",
                    Accent: "acento",
                    Style: "Estilo",
                    FormatAsTable: "Como formato de tabla",
                    FormatasTable: "Formato que la tabla",
                    FATContent: "convertir rápidamente un rango de celdas a una tabla con su propio estilo.",
                    FATHeaderText: "Light / Medium / Dark",
                    FATNameDlgText: "Nombre de la tabla: / Mi tabla tiene encabezados",
                    InvalidReference: "La escala que ha especificado no es válido",
                    ResizeAlert: "El rango especificado no es válido. La parte superior de la mesa debe permanecer en la misma fila, y la tabla resultante deberá coincidir con la tabla original. Especificar un rango válido.",
                    RangeNotCreated: "El aumento de la fila más allá del máximo número de hojas fila está restringido en formato como tabla.",
                    ResizeRestrictAlert: "Aumento o disminución del número de columnas y la disminución de la cantidad de filas está restringida en formato como tabla.",
                    FATResizeTableText: "Introducir un nuevo rango de datos para la tabla:",
                    FATReizeTableNote: "Nota: Los encabezados deben permanecer en la misma fila y el rango de la tabla resultante se deben superponer el rango tabla original.",
                    FormatAsTableAlert: "No se puede crear una tabla con una sola fila. Una tabla debe tener al menos dos filas, una para el encabezado de la tabla, y una para datos",
                    FormatAsTableTitle: "Luz 1 / Luz 2 / Luz 3 / Luz 4 / luz 5/6 de luz / luz 7 / Luz 8 / Luz 9 / luz 10 / luz 11 / luz 12 / Medio 1 / Media 2 / Medio 3 / Medio 4 / Medio 5 / Medium 6 / Medium 7 / Medio 8/1 oscuro / Dark 2/3 oscuro / Dark 4",
                    NewTableStyle: "Nuevo estilo de tabla",
                    ResizeTable: "Cambiar el tamaño de la tabla",
                    ResizeTableContent: "Cambiar el tamaño de esta tabla añadiendo o eliminando filas y columnas.",
                    ConvertToRange: "Convertir en rango",
                    ConvertToRangeContent: "Convertir esta tabla en un rango normal de las células.",
                    ConverToRangeAlert: "¿Quieres convertir la tabla a un rango normal?",
                    TableID: "ID de tabla:",
                    Table: "Mesa",
                    TableContent: "Crear una tabla para organizar y analizar datos relacionados.",
                    TableStyleOptions: "Primera Columna / Última columna / fila Total / botón de filtro",
                    Format: "Formato",
                    NameManager: "nombre del manager",
                    NameManagerContent: "Crear, editar, eliminar y encontrar todos los nombres utilizados en el libro.",
                    NameManagerFormulaContent: " Los nombres pueden ser utilizados en fórmulas como sustitutos de las referencias de celda.",
                    DefinedNames: "Nombres definidos",
                    DefineName: "definir nombre",
                    DefineNameContent: "Definir y aplicar nombres.",
                    UseInFormula: "En la Fórmula utilizar",
                    UseInFormulaContent: "Elija un nombre usado en este libro y la inserta en la fórmula actual.",
                    RefersTo: "Se refiere a",
                    Name: "Nombre",
                    Scope: "Alcance",
                    NMNameAlert: "El nombre que ha introducido no es valid./Reason para esto pueden incluir: / el nombre no comienza con una letra o un guión bajo / El nombre contiene un espacio u otros caracteres no válidos / Los conflictos de nombres con una hoja de cálculo integrada en el nombre o el nombre de otro objeto en el libro, no se utiliza completamente //",
                    NMUniqueNameAlert: "El nombre introducido ya existe. Introduzca un nombre exclusivo.",
                    NMRangeAlert: "Introduzca un rango válido",
                    FORMULAS: "FÓRMULAS",
                    DataValue: "Valores:",
                    Value: "Valores",
                    Formula: "fórmulas",
                    MissingParenthesisAlert: "Su fórmula le falta un parenthesis--) o (. Verificar la fórmula, y luego añadir los paréntesis en el lugar apropiado.",
                    UnsupportedFile: "Archivo no soportado",
                    IncorrectPassword: "No se puede abrir el archivo de hoja de cálculo o de la contraseña proporcionada",
                    InvalidUrl: "Por favor, especifique el URL adecuado",
                    Up: "Arriba",
                    Down: "Abajo",
                    Sheet: "Hoja",
                    Workbook: "Libro de trabajo",
                    Rows: "por Filas",
                    Columns: "por columnas",
                    FindReplace: "Encuentra Reemplazar",
                    FindnReplace: "Buscar y reemplazar",
                    Find: "Encontrar",
                    Replace: "Reemplazar",
                    FindLabel: "Encontrar que:",
                    ReplaceLabel: "Remplazar con:",
                    ReplaceAll: "Reemplaza todo",
                    Close: "Cerca",
                    FindNext: "Buscar siguiente",
                    FindPrev: "Buscar anterior",
                    Automatic: "Automático",
                    Manual: "Manual",
                    Settings: "ajustes",
                    MatchCase: "Mayúsculas y minúsculas",
                    MatchAll: "Corresponder con el contenido de toda la celda",
                    Within: "Dentro:",
                    Search: "Buscar:",
                    Lookin: "Pase a ver:",
                    ShiftRight: "Desplazar las celdas hacia la derecha",
                    ShiftBottom: "Desplazar las celdas hacia abajo",
                    EntireRow: "Fila completa",
                    EntireColumn: "Toda la columna",
                    ShiftUp: "Desplazar las celdas hacia arriba",
                    ShiftLeft: "Desplazar las celdas hacia la izquierda",
                    Direction: "Dirección:",
                    GoTo: "Ir",
                    GoToName: "Ir:",
                    Reference: "Referencia:",
                    Special: "Especial",
                    Select: "Seleccionar",
                    Comments: "comentarios",
                    Formulas: "fórmulas",
                    Constants: "constantes",
                    RowDiff: "diferencias fila",
                    ColDiff: "diferencias entre columnas",
                    LastCell: "última celda",
                    CFormat: "formatos condicionales",
                    Blanks: "Los espacios en blanco",
                    GotoError: "Error",
                    GotoLogicals: "Logicals",
                    GotoNumbers: "Números",
                    GotoText: "Texto",
                    FindSelect: "Buscar y seleccionar",
                    Comment: "Comentario",
                    NewComment: "Nuevo",
                    InsertComment: "Insertar comentario",
                    EditComment: "Editar",
                    DeleteComment: "Eliminar comentario",
                    DeleteCommentContent: "Eliminar el mensaje seleccionado.",
                    HideComment: "Ocultar comentario",
                    Next: "Siguiente",
                    NextContent: "Saltar a la siguiente comentario.",
                    Previous: "Anterior",
                    PreviousContent: "Salta a la anterior comentario.",
                    ShowHide: "Mostrar / Ocultar comentario",
                    ShowHideContent: "Mostrar u ocultar el comentario en la celda activa.",
                    ShowAll: "Mostrar todos los comentarios",
                    ShowAllContent: "Mostrar todos los comentarios en la hoja.",
                    UserName: "Nombre de usuario",
                    Hide: "Esconder",
                    Unhide: "en Mostrar",
                    Add: "Añadir",
                    DropAlert: "¿Desea reemplazar los datos existentes?",
                    PutCellColor: "Ponga Color seleccionado de la célula a la tapa",
                    PutFontColor: "Ponga la fuente seleccionada en color a la tapa",
                    WebPage: "Página web",
                    WorkSheet: "Hoja de trabajo de referencia",
                    SheetReference: "hoja de referencia",
                    InsertHyperLink: "Insertar hipervínculo",
                    HyperLink: "Hiperenlace",
                    EditLink: "Editar enlace",
                    OpenLink: "Enlace abierto",
                    HyperlinkText: "Texto:",
                    RemoveLink: "Eliminar enlace",
                    WebAddress: "Dirección web:",
                    CellAddress: "Referencia de la celda:",
                    SheetIndex: "Seleccionar un lugar en este documento",
                    ClearAll: "Limpiar todo",
                    ClearFormats: "formatos claras",
                    ClearContents: "Borrar contenido",
                    ClearComments: "claras Comentarios",
                    ClearHyperLinks: "claro hipervínculos",
                    SortFilter: "Ordenar y filtrar",
                    SortFilterContent: "Organizar los datos por lo que es más fácil de analizar.",
                    NumberStart: "Mínimo:",
                    NumberEnd: "Máximo:",
                    DecimalStart: "Mínimo:",
                    DecimalEnd: "Máximo:",
                    DateStart: "Fecha de inicio:",
                    DateEnd: "Fecha final:",
                    ListStart: "Fuente:",
                    FreeText: "se introduce Mostrar mensaje de error de datos no válidos",
                    ListEnd: "Referencia de la celda:",
                    TimeStart: "Hora de inicio:",
                    TimeEnd: "Hora de finalización:",
                    TextLengthStart: "Mínimo:",
                    TextLengthEnd: "Máximo:",
                    CommentFindEndAlert: "Hoja de cálculo llega al final del libro. ¿Quieres continuar con la revisión desde el principio del libro?",
                    InsertSheet: "Insertar",
                    DeleteSheet: "Borrar",
                    RenameSheet: "Rebautizar",
                    MoveorCopy: "Mover o copiar",
                    HideSheet: "Esconder",
                    UnhideSheet: "en Mostrar",
                    SheetRenameAlert: "El nombre ya fue escogido. Pruebe uno diferente.",
                    SheetRenameEmptyAlert: "Ha escrito un nombre no válido para una hoja. Asegúrese de que: ",
                    SheetRenameEmptyCharExceedAlert: " El nombre que escriba no exceda de 31 caracteres ",
                    SheetRenameEmptySplCharAlert: " El nombre no contiene ninguno de los siguientes caracteres:.",
                    SheetRenameEmptyBlankAlert: "Usted no dejar el nombre en blanco.",
                    SheetDeleteAlert: "No se puede deshacer la eliminación de las hojas, y que podría estar eliminando algunos datos. Si usted no lo necesita, haga clic en OK para borrar.",
                    SheetDeleteErrorAlert: "Un libro debe contener al menos una hoja de trabajo visible. Para ocultar, eliminar o mover la hoja seleccionada, primero debe insertar una nueva hoja o mostrar una hoja que ya está oculto.",
                    CtrlKeyErrorAlert: "Este comando no se puede utilizar en múltiples selecciones.",
                    ClipboardAccessError: "Su navegador no puede acceder al portapapeles, así que utilice estos atajos:",
                    MoveToEnd: "Ir al final",
                    Beforesheet: "Antes de la ficha técnica:",
                    CreateaCopy: "Crear una copia",
                    AutoFillOptions: "Las células de copia / relleno de la serie / llenado Sólo Formateo / Fill sin formato Relleno / flash",
                    NumberValidationMsg: "Introduzca sólo dígitos",
                    DateValidationMsg: "Introduzca única fecha",
                    Required: "Necesario",
                    TimeValidationMsg: "El tiempo que ha introducido para el tiempo es válido.",
                    CellAddrsValidationMsg: "La referencia no es valida.",
                    PivotTable: "Tabla dinámica",
                    PivotTableContent: "Fácil de organizar y resumir datos complejos en una tabla dinámica.",
                    NumberTab: "Número",
                    AlignmentTab: "Alineación",
                    FontTab: "Fuente",
                    FillTab: "Llenar",
                    TextAlignment: "alineación del texto",
                    Horizontal: "Horizontal:",
                    Vertical: "Vertical:",
                    Indent: "Sangrar",
                    TextControl: "control de texto",
                    FontGroup: "Fuente:",
                    FontStyle: "Estilo de fuente:",
                    Size: "Tamaño:",
                    PSize: "Tamaño de página",
                    Effects: "efectos:",
                    StrikeThrough: "que atraviesa",
                    Overline: "overline",
                    NormalFont: "fuente normal",
                    Preview: "Avance",
                    Line: "Línea",
                    Presets: "presets",
                    None: "Ninguna",
                    Outline: "contorno",
                    AllSide: "Todos los lados",
                    InsCells: "Las células de inserción",
                    InsRows: "Insertar filas de hoja",
                    InsCols: "Insertar columnas de hoja",
                    InsSheet: "Insertar hoja",
                    DelCells: "eliminar celdas",
                    DelRows: "Eliminar filas de hojas",
                    DelCols: "Eliminar columnas Hoja",
                    DelSheet: "eliminar hoja",
                    HyperLinkAlert: "La dirección de este sitio no es valid.Check la dirección e inténtelo de nuevo.",
                    ReplaceData: "Todo listo. Hicimos / reemplazos.",
                    NotFound: "No hemos podido encontrar lo que busca. Seleccione la configuración de pestaña para más formas de buscar",
                    Data: "Datos:",
                    Allow: "Permitir:",
                    IgnoreBlank: "ignorar espacio en blanco",
                    NotFind: "No se puede encontrar el partido para reemplazar",
                    FreezeTopRow: "Fila superior congelar",
                    FreezeFirstColumn: "Freeze primera columna",
                    UnFreezePanes: "Movilizar paneles",
                    DestroyAlert: "¿Está seguro de que quiere destruir el libro actual sin guardar y crear un nuevo libro?",
                    ImageValAlert: "Sube sólo archivos de imagen",
                    Pictures: "Imágenes",
                    PicturesTitle: "Desde el archivo",
                    PicturesContent: "Insertar imágenes desde el ordenador o desde otros ordenadores que están conectados.",
                    ImportAlert: "¿Está seguro de que quiere destruir el libro actual sin guardar y abrir un nuevo libro?",
                    UnmergeCells: "Separar celdas",
                    MergeCells: "Combinar células",
                    MergeAcross: "Al otro lado de fusionar",
                    MergeAndCenter: "Combinar y Centro",
                    MergeAndCenterContent: "Combinar y centrar el contenido de las celdas seleccionadas en una nueva célula más grande.",
                    MergeCellsAlert: "La fusión de células mantiene valor de celda única parte superior izquierda y descarta los demás valores.",
                    MergeInsertAlert: "Esta operación hará que algunas celdas combinadas de desinstalar. Desea continuar ?",
                    Axes: "ejes",
                    PHAxis: "Horizontal primaria",
                    PVAxis: "Vertical primaria",
                    AxisTitle: "Título del eje",
                    CTNone: "Ninguna",
                    CTCenter: "Centrar",
                    CTFar: "Lejos",
                    CTNear: "Cerca",
                    DataLabels: "Etiquetas de datos",
                    DLNone: "Ninguna",
                    DLCenter: "Centrar",
                    DLIEnd: "Dentro End",
                    DLIBase: "Dentro de Base",
                    DLOEnd: "terminar en el exterior",
                    ErrorBar: "Barras de error",
                    Gridline: "Las líneas de cuadrícula",
                    PMajorH: "Primary Major Horizontal",
                    PMajorV: "Mayor primaria Vertical",
                    PMinorH: "Horizontal primaria Menor",
                    PMinorV: "Mayor primaria Vertical",
                    Legend: "leyendas",
                    LNone: "Ninguna",
                    LLeft: "Izquierda",
                    LRight: "Derecha",
                    LBottom: "Fondo",
                    LTop: "Parte superior",
                    ChartTitleDlgText: "Introducción del título",
                    ChartTitle: "Título",
                    InvalidTitle: "Ha escrito un nombre no válido para el título.",
                    CorrectFormat: "Seleccione el formato de archivo correcto",
                    ResetPicture: "Reset Picture",
                    ResetPictureContent: "Descartar todos los cambios de formato realizados en esta imagen.",
                    PictureBorder: "Frontera del cuadro",
                    PictureBorderContent: "Elige el color, ancho y estilo de línea para el contorno de su forma.",
                    ResetSize: "Restablecer del cuadro y del tamaño",
                    Height: "Altura",
                    Width: "Anchura",
                    ThemeColor: "Colores del tema",
                    NoOutline: "sin Esquema",
                    Weight: "Peso",
                    Dashes: "Los guiones",
                    ColumnChart: "Columna",
                    ColumnChartTitle: "Insertar gráfico de columnas",
                    ColumnChartContent: "Utilizar este tipo de gráfico para comparar visualmente los valores a través de unas pocas categorías.",
                    BarChart: "Bar",
                    BarChartTitle: "Insertar gráfico Bar",
                    BarChartContent: "Utilizar este tipo de gráfico para comparar visualmente los valores a través de unas pocas categorías cuando el gráfico se muestra la duración o el texto categoría es larga.",
                    StockChart: "Radar",
                    StockChartTitle: "Insertar gráfico radial",
                    StockChartContent: "Utilizar este tipo de gráfico para mostrar los valores relativos a un punto central.",
                    LineChart: "Line",
                    LineChartTitle: "Insertar Gráfico de líneas",
                    LineChartContent: "Utilizar este tipo de gráfico para mostrar tendencias en el tiempo (años, meses y días) o categorías.",
                    AreaChart: "Area",
                    AreaChartTitle: "Insertar gráfico Área",
                    AreaChartContent: "Utilizar este tipo de gráfico para mostrar tendencias en el tiempo (años, meses y días) o categorías. Lo utilizan para destacar la magnitud del cambio en el tiempo.",
                    ComboChart: "Combo",
                    PieChart: "Tarta",
                    PieChartTitle: "Insertar el gráfico de sectores / buñuelo",
                    PieChartContent: "Utilizar este tipo de gráfico para mostrar las proporciones de un todo. Utilizarlo cuando el total de sus números es 100%.",
                    ScatterChart: "Dispersión",
                    ScatterChartTitle: "Insertar Scatter (X, Y) Gráfico",
                    ScatterChartContent: "Utilizar este tipo de gráfico para mostrar la relación entre conjuntos de valores.",
                    ClusteredColumn: "Columna&nbsp;agrupado",
                    StackedColumn: "Columna&nbsp;apilada",
                    ClusteredBar: "Agrupado&nbsp;Bar",
                    StackedBar: "Stacked&nbsp;Bar",
                    Radar: "Radar",
                    RadarMarkers: "Radar&nbsp;ancho&nbsp;Marcadores",
                    LineMarkers: "Línea&nbsp;ancho&nbsp;Marcadores",
                    Area: "Zona",
                    StackedArea: "Stacked&nbsp;Área",
                    Pie: "Tarta",
                    Doughnut: "Rosquilla",
                    Scatter: "Dispersión",
                    ChartRange: "Rango Gráfico",
                    XAxisRange: "Introduzca rango del eje X:",
                    YAxisRange: "Introduzca rango del eje Y:",
                    LegendRange: "Introduzca rango de leyenda:",
                    YAxisMissing: "Introduzca rango del eje Y para crear diagrama",
                    InvalidYAxis: "rango del eje Y debe estar dentro del rango seleccionado",
                    InvalidXAxis: "rango del eje X debe estar dentro del rango seleccionado",
                    InvalidLegend: "Leyenda rango debe estar dentro del rango seleccionado",
                    InvalidXAxisColumns: "rango del eje X debe estar dentro de una sola columna",
                    FreezePanes: "Inmovilizar paneles",
                    FreezePanesContent: "Congelar una parte de la hoja para mantenerlo visible mientras se desplaza por el resto de la hoja.",
                    PasteContent: "Añadir el contenido del portapapeles al documento.",
                    PasteSplitContent: "Elija una opción de pegado, como mantener el formato o pegar sólo el contenido.",
                    CutContent: "Retire la selección y colocarla en el portapapeles para que pueda pegarlo en otro lugar.",
                    CopyContent: "Ponga una copia de la selección en el portapapeles para que pueda pegarlo en otro lugar.",
                    FPTitle: "Copiar formato",
                    FPContent: "Al igual que el aspecto de una selección particular? Usted puede solicitar que la mirada de otros contenidos en el documento.",
                    BoldContent: "Haga su texto en negrita.",
                    ItalicContent: "Poner en cursiva el texto.",
                    ULineContent: "Subrayar el texto.",
                    LineTrContent: "Cruzar algo fuera dibujando una huelga a través de él.",
                    UndoContent: "Deshacer la última acción.",
                    RedoContent: "Rehacer la última acción.",
                    HyperLinkTitle: "Añadir un hipervínculo",
                    HyperLinkContent: "Crear un enlace en su documento para un rápido acceso a las páginas web y archivos.",
                    HyperLinkPlaceContent: " Los hipervínculos también te puede llevar a lugares en su documento.",
                    NewCommentTitle: "Inserte un comentario",
                    NewCommentContent: "Añadir una nota sobre esta parte del documento.",
                    RefreshTitle: "Refrescar",
                    RefreshContent: "Obtener los últimos datos de la fuente conectada a la celda activa",
                    FieldListTitle: "Lista de campos",
                    FieldListContent: "Mostrar u ocultar la lista de campos.",
                    FieldListRemoveContent: " La lista de campos le permite agregar y quitar campos de su informe de tabla dinámica",
                    AddChartElement: "Añadir elemento de gráfico",
                    AddChartElementContent: "Añadir elementos a la tabla creada.",
                    SwitchRowColumn: "Cambiar de fila / columna",
                    SwitchRowColumnContent: "Intercambiar los datos a lo largo del eje.",
                    MergeAlert: "No podemos hacer eso a una celda combinada.",
                    UnhideDlgText: "Mostrar hoja:",
                    ChartThemes: "Temas tabla",
                    ChartThemesContent: "Escoja un tema nuevo para el gráfico.",
                    ChangePicture: "Cambiar imagen",
                    ChangePictureContent: "Cambiar a una imagen diferente, que preserva el formato y el tamaño de la imagen actual.",
                    ChangeChartType: "Cambiar tipo de gráfico",
                    SelectData: "Seleccionar datos",
                    SelectDataContent: "Cambiar el rango de los datos incluidos en la tabla.",
                    Sum: "Suma",
                    Average: "Promedio",
                    CountNumber: "Cuenta numeros",
                    Max: "Max",
                    Min: "min",
                    ChartType: "Cambiar tipo de gráfico",
                    ChartTypeContent: "Cambiar a un tipo de gráfico diferente.",
                    AllCharts: "todos Listas",
                    defaultfont: "Defecto",
                    LGeneral: "General",
                    LCurrency: "Moneda",
                    LAccounting: "Contabilidad",
                    LDate: "Fecha",
                    LTime: "Hora",
                    LPercentage: "Porcentaje",
                    LFraction: "Fracción",
                    LScientific: "Científico",
                    LText: "Texto",
                    LCustom: "Personalizado",
                    FormatSample: "Muestra",
                    Category: "Categoría:",
                    Top: "Parte superior",
                    Center: "Centrar",
                    Bottom: "Fondo",
                    Left: "Izquierda (sangría)",
                    Right: "Derecha",
                    Justify: "Justificar",
                    GeneralTxt: "Formato de celdas generales no tienen formato de número específico.",
                    NegativeNumbersTxt: "Los números negativos",
                    ThousandSeparatorTxt: "Utilice 1000 Separador",
                    DecimalPlacesTxt: "Decimales:",
                    TextTxt: "Formato de celdas de texto se tratan como texto, incluso cuando un número está en la célula. La célula se muestra exactamente como introducido.",
                    BoldItalic: "Negrita cursiva",
                    Regular: "Regular",
                    HyperLinkHide: "<< Selección en el Documento >>",
                    InvalidSheetIndex: "Especificar SheetIndex adecuada",
                    HugeDataAlert: "El archivo es demasiado grande para abrir.",
                    ImportExportUrl: "Dar dirección URL de importación / exportación y vuelve a intentarlo.",
                    BetweenAlert: "El máximo debe ser mayor o igual que el mínimo.",
                    BorderStyles: "Sólido / La / punteada/Doble",
                    FPaneAlert: "Panel de congelación no se aplica para la primera celda",
                    ReplaceNotFound: "Hoja de cálculo no puede encontrar una coincidencia.",
                    BlankWorkbook: "libro en blanco",
                    SaveAsExcel: "Guardar como Excel",
                    SaveAsCsv: "Guardar como CSV",
                    SaveAsPdf: "Guardar como PDF",
                    Design: "DISEÑO",
                    NewName: "Nuevo nombre",
                    FormulaBar: "Barra de formulas",
                    NameBox: "nombre de la carpeta",
                    NumberValMsg: "Los valores decimales no se pueden utilizar para las condiciones numéricas.",
                    NumberAlertMsg: "Introduzca sólo dígitos.",
                    ListAlert: "rango de celdas es incorrecta, Por favor, introduzca el rango de celdas correcta.",
                    ListValAlert: "El origen de la lista debe ser una lista delimitada, o una referencia a una sola fila o columna.",
                    ListAlertMsg: "El valor que ha introducido no es válido",
                    AutoFillTitle: "Opciones de Autocompletar",
                    NewSheet: "Hoja nueva",
                    FullSheetCopyPasteAlert: "No se puede pegar porque el área Copia y área de pegado no son del mismo tamaño.",
                    Heading: "encabezamientos",
                    Gridlines: "Las líneas de cuadrícula",
                    Firstsheet: "Desplazarse a la primera hoja",
                    Lastsheet: "Desplazarse hasta la última hoja",
                    Nextsheet: "Desplazarse a la siguiente hoja",
                    Prevsheet: "Desplazarse a la hoja anterior",
                    ProtectWorkbook: "proteger libro",
                    UnProtectWorkbook: "Desproteger libro",
                    ProtectWBContent: "Mantener a otros de hacer cambios estructurales para su libro",
                    Password: "Contraseña",
                    ConfirmPassword: "Re Introduzca la contraseña para proceder:",
                    PasswordAlert1: "La confirmación de contraseña no es idéntica.",
                    PasswordAlert2: "Porfavor ingrese una contraseña.",
                    PasswordAlert3: "La contraseña que proporcionó no es correcta. Compruebe que la tecla Bloq Mayús está apagado y asegúrese de utilizar correctamente las mayúsculas.",
                    Protect: "esta protegido.",
                    Lock: "Bloquear celda",
                    Unlock: "desbloquear la célula",
                    Protectsheet: "Hoja de protección",
                    protectsheettooltip: "Evitar cambios no deseados de los demás, al limitar su capacidad de editar",
                    Unprotect: "Desproteger hoja",
                    LockAlert: "La célula que está intentando cambiar está en hoja protegida. Para realizar cambios, haga clic en Desproteger hoja en la ficha Revisar.",
                    CreateRule: "Nueva regla",
                    NewRule: "Nueva regla de formato",
                    NewRuleLabelContent: "valores de formato, donde esta fórmula es verdadera:",
                    InsertDeleteAlert: "no se permite esta operación. La operación está tratando de cambiar las celdas de una tabla en la hoja de cálculo.",
                    ReadOnly: "La gama que está intentando cambiar contiene leer sólo las células.",
                    CreatePivotTable: "Crear tabla dinámica",
                    Range: "Distancia:",
                    ChoosePivotTable: "Elegir dónde desea que la tabla dinámica para ser colocado",
                    NewWorksheet: "nueva hoja de cálculo",
                    ExistingWorksheet: "Hoja de trabajo existente",
                    Location: "Ubicación:",
                    Refresh: "Refrescar",
                    PivotRowsAlert: "Este comando requiere al menos dos filas de datos de origen. No se puede utilizar el comando en una selección en una sola fila.",
                    PivotLabelsAlert: "El nombre del campo de tabla dinámica no es válido, Para crear un informe de tabla dinámica, debe utilizar los datos que se organiza como una lista con las columnas etiquetadas. Si va a cambiar el nombre de un campo de tabla dinámica, debe escribir un nuevo nombre para el campo.",
                    FieldList: "Lista de campos",
                    MergeSortAlert: "Para ello, todas las celdas combinadas tienen que ser del mismo tamaño.",
                    FormulaSortAlert: "El rango de ordenación con la fórmula no puede ser ordenada.",
                    MergePreventInsertDelete: "no se permite esta operación. La operación está tratando de desplazar a las células de combinación en la hoja de cálculo.",
                    FormulaRuleMsg: "Por favor, introduzca el formato correcto.",
                    MovePivotTable: "Mover tabla dinámica",
                    MovePivotTableContent: "Mover la tabla dinámica a otro lugar en el libro.",
                    ClearAllContent: "Eliminar campos y filtros.",
                    ChangeDataSource: "Modificar",
                    ChangeDataSourceContent: "Cambiar los datos de origen para esta tabla dinámica",
                    ChangePivotTableDataSource: "Cambiar origen de datos de tabla dinámica",
                    TotalRowAlert: "no se permite esta operación. La operación está tratando de cambiar las celdas de una tabla en la hoja de cálculo. Haga clic en OK para continuar con la fila entera.",
                    CellTypeAlert: "Esta operación no está permitido en el tipo de células gama aplicada.",
                    PivotOverlapAlert: "Un informe de tabla dinámica no se pueden superponer otro informe de tabla dinámica",
                    NoCellFound: "No se encontraron células",
                    CorrectArgument: "Introduzca el argumento correcto",
                    CorrectFormula: "Introduzca la fórmula correcta",
                    CorrectCellAddress: "Introduzca la dirección de la celda correcta",
                    ChartType: "Tipo de gráfico",
                    NumberValidationAlert: "El Máximo debe ser mayor o igual a Mínimo",
                    DateValidationAlert: "La fecha de finalización debe ser mayor o igual que la fecha de inicio",
                    TimeValidationAlert: "La hora de finalización debe ser mayor o igual que Hora de inicio",
                    NewRuleAlert: "Hay un problema con esta fórmula",
                    DragAlert: "El comando no se pudo completar cuando intenta mover celdas dentro del rango del filtro. Seleccione un rango fuera del rango del filtro y vuelva a intentar el comando.",
                    OR: "o",
                    HOME: "CASA",
                    INSERT: "INSERTAR",
                    DATATAB: "DATOS",
                    PAGELAYOUT: "DISEÑO DE PÁGINA",
                    REVIEW: "REVISIÓN",
                    OTHERS: "OTROS",
                    FORMAT: "Formato",
                    DESIGN: "DISEÑO",
                    CHARTDESIGN: "Diseño Gráfico",
                    ANALYZE: "Analizar",
                    FileName: "Nombre del archivo",
                    Save: "Salvar",
                    SaveFile: "Guarda el archivo",
                    HighlightCellRules: "Resaltar reglas de celda",
                    LightRedFillDark: "Rojo claro con texto rojo oscuro",
                    YellowFillDark: "Relleno amarillo con texto amarillo oscuro",
                    GreenFillDark: "Relleno verde con texto verde oscuro",
                    RedFill: "Relleno rojo",
                    RedText: "Texto rojo",
                    Column: "Columna",
                    Bar: "Bar",
                    Line: "Línea",
                    DataValidationType: "Número / Decimal / Fecha / Hora / TextLength / Lista",
                    DataValidationAction: "Mayor que / mayor que o igual a / menor que / menor que o igual a / igual a / no igual a / entre / no entre",
                    Modify: "modificar",
                    Apply: "Aplicar",
                    NewCellStyle: "Nuevo estilo de celda",
                    cellStyleAlert: "Este nombre de estilo ya existe",
                    modifyCellStyleAlert: "Este nombre de estilo no existe",
                    Color: "kleur",
                    StyleName: "Nombre de estilo",
                    LShortdate: "Fecha corta",
                    LLongdate: "Fecha larga",
                    Clipboard: "portapapeles",
                    Font: "fuente",
                    Actions: "acciones",
                    Styles: "estilos",
                    Editing: "edición",
                    Tables: "tablas",
                    Illustrations: "Ilustraciones",
                    Links: "izquierda",
                    Charts: "gráficos",
                    DataTools: "Herramientas de datos",
                    Show: "espectáculo",
                    PageLayout: "Diseño de la página",
                    Changes: "cambios",
                    Window: "ventana",
                    Cells: "Las células",
                    Calculation: "cálculo",
                    Properties: "propiedades",
                    Tools: "instrumentos",
                    TableStyleOption: "Opciones de estilo de tabla",
                    ChartLayouts: "Diseños de gráficos",
                    ChartDesignData: "datos",
                    ChartDesignType: "grado",
                    ChartDesignSize: "tamaño",
                    Adjust: "ajustar",
                    FormatSize: "tamaño",
                    AnalyzePivotTable: "Tabla dinámica",
                    DataSource: "DataSource",
                    FATTitlePrefix: "Estilo de mesa",
                    HighPoint: "Punto álgido",
                    LowPoint: "Punto bajo",
                    FirstPoint: "Primer punto",
                    LastPoint: "Ultimo punto",
                    NegativePoint: "Puntos negativos",
                    Markers: "Marcadores",
                    NegativePoints: "Puntos negativos",
                    LineSparklineTitle: "Insertar Line Sparkline",
                    LineSparklineContent: "Las líneas de chispa son mini tablas ubicadas en una sola celda, cada una representa una fila de datos en su selección",
                    ColumnSparklineTitle: "Insertar columna Sparkline",
                    ColumnSparklineContent: "Las líneas de chispa son mini tablas ubicadas en una sola celda, cada una representa una fila de datos en su selección",
                    WinLossSparklineTitle: "Insertar chispa de ganancia / pérdida",
                    WinLossSparklineContent: "Las líneas de chispas son mini tablas ubicadas en una sola celda, cada una representa una fila de datos en su selección,",
                    Line: "Línea",
                    SparklineColor: "Sparkline Color",
                    SparklineColorTitle: "Sparkline Color",
                    SparklineColorContent: "Especifique el color de las líneas de chispa en el grupo de líneas seleccionadas",
                    MarkerColor: "Marcador de color",
                    MarkerColorContent: "Cambie el color de los puntos negativos, marcadores y todos los demás puntos para el grupo de chispa seleccionado",
                    ChooseDataRange: "Elija el rango de datos",
                    ChooseLocationRange: "Elija el rango de ubicación",
                    DataRange: "Rango de datos",
                    LocationRange: "Rango de ubicación",
                    EmptyDLRnge: "La fuente de datos o la referencia de ubicación no son válidas",
                    SourceDataRange: "Seleccione un rango de datos fuente para el sparkline",
                    SparklineAlert: "La referencia de ubicación no es válida porque las celdas no están todas en la misma columna o fila. Seleccionar celdas que están todas en una sola fila o en una sola columna",
                    SparklineDataAlert: "Ingrese el formato de datos correcto",
                    SparklineLocAlert: "La referencia para la ubicación o el rango de datos no es válida",
                    SDataRangeAlert: "La referencia del origen de datos no es válida",
                    LineAlert: "No se puede crear el gráfico de líneas para un solo valor",
                    EditData: "Editar datos",
                    EditDataContent: "Editar ubicación de grupo y datos",
                    EditSingleSparklineData: "Editar datos de Sparkline únicos",
                    EditSparklineData: "Editar datos de Sparkline",
                    HiddenEmptyCells: "Celdas ocultas y vacías",
                    SwitchRowCol: "Cambiar fila / columna",
                    CreateSparkline: "Crear Sparkline",
                    SelectDataSource: "Seleccione un rango de datos fuente para el sparkline",
                    SPARKLINEDESIGN: "Diseño Sparkline",
                };
                break;
            case "ejTimePicker":
                ej.TimePicker.Locale = ej.TimePicker.Locale || {};
                ej.TimePicker.Locale["es-ES"] = {
                    watermarkText: "Seleccione una hora",
                };
                break;
            case "ejTreeGrid":
                ej.TreeGrid.Locale = ej.TreeGrid.Locale || {};
                ej.TreeGrid.Locale["es-ES"] = {
                    toolboxTooltipTexts: {
                        addTool: "Añadir",
                        editTool: "Editar",
                        updateTool: "Actualizar",
                        deleteTool: "Borrar",
                        cancelTool: "Cancelar",
                        expandAllTool: "Expandir todo",
                        collapseAllTool: "Desplegar todo",
                        pdfExportTool: "exportación PDF",
                        excelExportTool: "exportación Excel",
                        printTool: "Impresión",
                        searchTool: "Buscar",
                    },
                    contextMenuTexts: {
                        addRowText: "Añadir fila",
                        editText: "Editar",
                        deleteText: "Borrar",
                        saveText: "Salvar",
                        cancelText: "Cancelar",
                        aboveText: "Encima",
                        belowText: "Abajo"
                    },
                    columnMenuTexts: {
                        sortAscendingText: "Orden ascendente",
                        sortDescendingText: "Orden descendiente",
                        columnsText: "columnas",
                        freezeText: "Congelar",
                        unfreezeText: "Descongelar",
                        freezePrecedingColumnsText: "Congelar columnas precedentes",
                        insertColumnLeft: "Insertar columna izquierda",
                        insertColumnRight: "Insertar columna derecha",
                        deleteColumn: "eliminar columna",
                        renameColumn: "Cambiar el nombre de la columna",
                        menuFilter: "Filtrar"
                    },
                    filterMenuTexts: {
                        stringMenuOptions: [
                            { text: "Comienza con", value: "startswith" },
                            { text: "Termina con", value: "endswith" },
                            { text: "contiene", value: "contains" },
                            { text: "Igual", value: "equal" },
                            { text: "No es igual", value: "notequal" }
                        ],
                        numberMenuOptions: [
                            { text: "Menos que", value: "lessthan" },
                            { text: "Mas grande que", value: "greaterthan" },
                            { text: "Menos que o igual a", value: "lessthanorequal" },
                            { text: "Mayor qué o igual a", value: "greaterthanorequal" },
                            { text: "Igual", value: "equal" },
                            { text: "No es igual", value: "notequal" }
                        ],
                        filterValue: "Valor de filtro",
                        filterButton: "Filtrar",
                        clearButton: "Claro",
                        enterValueText: "introducir el valor"
                    },
                    columnDialogTexts: {
                        field: "Campo",
                        headerText: "Texto de cabecera",
                        editType: "Editar Tipo",
                        filterEditType: "Editar filtro de Tipo",
                        allowFiltering: "permitir el filtrado",
                        allowFilteringBlankContent: "Permitir el filtrado de contenido en blanco",
                        allowSorting: "permitir la clasificación",
                        visible: "Visible",
                        width: "Anchura",
                        textAlign: "Alineación de texto",
                        headerTextAlign: "Alineación de texto de encabezado",
                        isFrozen: "Está congelado",
                        allowFreezing: "Permitir congelación",
                        columnsDropdownData: "Columna gota datos de Down",
                        dropdownTableText: "Texto",
                        dropdownTableValue: "Valor",
                        addData: "Añadir",
                        deleteData: "retirar",
                        allowCellSelection: "Permitir selección de la célula",
                        showInColumnChooser: "Mostrar en el selector de columna",
                        displayAsCheckbox: "Mostrar como casilla de verificación",
                        clipMode: "Modo de clip",
                        tooltip: "Tooltip",
                        headerTooltip: "Tooltip del encabezado"
                    },
                    editTypeTexts: {
                        string: "Cuerda",
                        numeric: "Numérico",
                        datePicker: "Selector de fechas",
                        dateTimePicker: "Selector de fecha y hora",
                        dropdown: "Desplegable",
                        boolean: "Booleano"
                    },
                    textAlignTypes: {
                        right: "Derecha",
                        left: "Izquierda",
                        center: "Centrar"
                    },
                    clipModeTexts: {
                        clip: "Acortar",
                        ellipsis: "Elipsis"
                    },
                    columnDialogTitle: {
                        insertColumn: "insertar columna",
                        deleteColumn: "eliminar columna",
                        renameColumn: "Cambiar el nombre de la columna"
                    },
                    deleteColumnText: "¿Está seguro de que quiere eliminar esta columna?",
                    deleteRecordText: "¿Está seguro de que desea eliminar el registro?",
                    okButtonText: "DE ACUERDO",
                    cancelButtonText: "Cancelar",
                    confirmDeleteText: "Confirmar eliminación",
                    dropDownListBlanksText: "(Espacios en blanco)",
                    dropDownListClearText: "(Borrar filtro)",
                    trueText: "Cierto",
                    falseText: "Falso",
                    emptyRecord: "No hay registros que mostrar",
                };
                break;
            case "ejUploadbox":
                ej.Uploadbox.Locale = ej.Uploadbox.Locale || {};
                ej.Uploadbox.Locale["es-ES"] = {
                    buttonText: {
                        upload: "Subir",
                        browse: "Vistazo",
                        cancel: "Cancelar",
                        close: "Cerca"
                    },
                    dialogText: {
                        title: "Subir Box",
                        name: "Nombre",
                        size: "tamaño",
                        status: "Estado"
                    },
                    dropAreaText: "Soltar los archivos o haga clic para cargar",
                    filedetail: "El tamaño del archivo seleccionado es demasiado grande. Por favor, seleccione un archivo dentro del tamaño válido.",
                    denyError: "No se permiten archivos con extensiones #Extension.",
                    allowError: "Sólo se permiten archivos con extensiones #Extension.",
                    cancelToolTip: "Cancelar",
                    removeToolTip: "retirar",
                    retryToolTip: "Rever",
                    completedToolTip: "Terminado",
                    failedToolTip: "Ha fallado",
                    closeToolTip: "Cerca",
                };
                break;
            case "ejSpellCheck":
                ej.SpellCheck.Locale = ej.SpellCheck.Locale || {};
                ej.SpellCheck.Locale["es-ES"] = {
                    SpellCheckButtonText: "Ortografía",
                    NotInDictionary: "No en el diccionario",
                    SuggestionLabel: "sugerencias",
                    IgnoreOnceButtonText: "Ignorar una vez",
                    IgnoreAllButtonText: "Ignora todo",
                    AddToDictionary: "Añadir al diccionario",
                    ChangeButtonText: "Cambio",
                    ChangeAllButtonText: "Cambia todo",
                    CloseButtonText: "Cerca",
                    CompletionPopupMessage: "revisión ortográfica",
                    CompletionPopupTitle: "Corrector ortográfico",
                    Ok: "DE ACUERDO",
                    NoSuggestionMessage: "No hay sugerencias disponibles",
                };
                break;
            case "ejMediaPlayer":
                ej.MediaPlayer.Locale = ej.MediaPlayer.Locale || {};
                ej.MediaPlayer.Locale["es-ES"] = {
                    "Play": "jugar",
                    "Pause": "Pausa",
                    "Mute": "Mudo",
                    "Unmute": "Reactivar",
                    "Settings": "Configuración",
                    "FullScreen": "Pantalla completa",
                    "ExitFullScreen": "Salir de pantalla completa",
                    "HidePlaylist": "Ocultar lista de reproducción",
                    "Previous": "Anterior",
                    "Next": "Siguiente",
                    "TogglePlaylist": "Alternar lista de reproducción",
                    "Rewind": "Rebobinar",
                    "Forward": "Adelante",
                    "Playlist": "Lista de reproducción",
                    "RepeatPlaylist": "Repetir lista de reproducción",
                    "Shuffle": "Barajar",
                    "VideoTitle": "Vídeo",
                    "PlaylistTitle": "Lista de reproducción",
                    "PlaylistItemName": "Producto en la lista",
                    "PlaylistItemAuthor": "Autor",
                    "Media": "Medios de comunicación",
                    "Speed": "Velocidad",
                    "Quality": "Calidad",
                    "Normal": "Normal",
                    "Auto": "Auto"
                };
                break;
            case "ejTile":
                ej.Tile.Locale = ej.Tile.Locale || {};
                ej.Tile.Locale["es-ES"] = {
                    captionText: "Texto"
                };
                break;
            case "ejListView":
                ej.ListView.Locale = ej.ListView.Locale || {};
                ej.ListView.Locale["es-ES"] = {
                    headerTitle: "Título",
                    headerBackButtonText: "Espalda"
                };

                break;
        }
    }
    widgets = ej.widget.registeredWidgets;
    for (name in widgets)
        $.fn.Locale_esES(name);
    if (ej.ExcelFilter)
        $.fn.Locale_esES("ejExcelFilter");
})(window.jQuery, window.Syncfusion);
