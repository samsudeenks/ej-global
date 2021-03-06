(function ($, ej, undefined) {
    var name, widgets;
    if (ej.locales.indexOf("deDE") < 0)
        ej.locales.push("deDE");
    $.fn.Locale_deDE = function (pluginName) {
        switch (pluginName) {
            case "ejAutocomplete":
                ej.Autocomplete.Locale = ej.Autocomplete.Locale || {};
                ej.Autocomplete.Locale["de-DE"] = {
                    addNewText: "Neue hinzufügen",
                    emptyResultText: "Kein Vorschlag",
                    actionFailure: "Das angegebene Feld ist nicht in der Datenquelle erhalten",
                    watermarkText: " "
                };
                break;
            case "ejColorPicker":
                ej.ColorPicker.Locale = ej.ColorPicker.Locale || {};
                ej.ColorPicker.Locale["de-DE"] = {
                    buttonText: {
                        apply: "Anwenden",
                        cancel: "Stornieren",
                        swatches: "Farbfelder"
                    },
                    tooltipText: {
                        switcher: "Umschalter",
                        addButton: "Farbe hinzufügen",
                        basic: "Basic",
                        monoChrome: "Einfarbig",
                        flatColors: "Flache Farben",
                        seaWolf: "See Wolf",
                        webColors: "Webfarben",
                        sandy: "Sandig",
                        pinkShades: "Rosa Schatten",
                        misty: "misty",
                        citrus: "Zitrusfrucht",
                        vintage: "Jahrgang",
                        moonLight: "Mondlicht",
                        candyCrush: "Candy Crush",
                        currentColor: "Aktuelle Frabe",
                        selectedColor: "Ausgewählte Farbe"
                    },
                };
                break;
            case "ejCurrencyTextbox":
                ej.CurrencyTextbox.Locale = ej.CurrencyTextbox.Locale || {};
                ej.CurrencyTextbox.Locale["de-DE"] = {
                    watermarkText: "Geben Sie Wert",
                };
                break;
            case "ejDatePicker":
                ej.DatePicker.Locale = ej.DatePicker.Locale || {};
                ej.DatePicker.Locale["de-DE"] = {
                    watermarkText: "Datum wählen",
                    buttonText: "Heute",
                };
                break;
            case "ejDateRangePicker":
                ej.DateRangePicker.Locale = ej.DateRangePicker.Locale || {};
                ej.DateRangePicker.Locale["de-DE"] = {
                    ButtonText: {
                        apply: "Übernehmen",
                        cancel: "Stornieren",
                        reset: "Zurücksetzen"
                    },
                    watermarkText: "Wählen Sie Bereich",
                    customPicker: "Benutzerdefinierter Auswähler",
                };
                break;
            case "ejDateTimePicker":
                ej.DateTimePicker.Locale = ej.DateTimePicker.Locale || {};
                ej.DateTimePicker.Locale["de-DE"] = {
                    watermarkText: "Zeit auswählen",
                    buttonText: {
                        today: "Heute",
                        timeNow: "Aktuelle Zeit",
                        done: "Fertig",
                        timeTitle: "Zeit"
                    },
                };
                break;

            case "ejDialog":
                ej.Dialog.Locale = ej.Dialog.Locale || {};
                ej.Dialog.Locale["de-DE"] = {
                    tooltip: {
                        close: "Schließen",
                        collapse: "Ausblenden",
                        restore: "Wiederherstellen",
                        maximize: "Maximieren",
                        minimize: "Minimeiren",
                        expand: "Erweitern",
                        unPin: "Entfernen",
                        pin: "Anheften"
                    },
                    closeIconTooltip: "schließen",
                };
                break;
            case "ejDropDownList":
                ej.DropDownList.Locale = ej.DropDownList.Locale || {};
                ej.DropDownList.Locale["de-DE"] = {
                    emptyResultText: "Keine Vorschläge,",
                    watermarkText: " ",
                };
                break;
			case "ejComboBox":
                ej.ComboBox.Locale["de-DE"] = {
                    noRecordsTemplate: "Keine Aufzeichnungen gefunden",
					actionFailureTemplate: "Die Anforderung ist fehlgeschlagen"
                };
                break;
			case "ejMenu":
                ej.Menu.Locale["de-DE"] = {
                    titleText: "Speisekarte"
                };
                break;
			case "ejCaptcha":
                ej.Captcha.Locale["de-DE"] = {
					placeHolderText: "Geben Sie den angezeigten Code ein",
					CustomErrorMessage: "Ungültiges Captcha"
                };
                break;
            case "ejExcelFilter":
                ej.ExcelFilter.Locale = ej.ExcelFilter.Locale || {};
                ej.ExcelFilter.Locale["de-DE"] = {
                    SortNoSmaller: "Von Klein zu Groß Sortieren",
                    SortNoLarger: "Von Groß zu Klein Sortieren",
                    SortTextAscending: "Von A zu Z Sortieren",
                    SortTextDescending: "Von Z zu A Sortieren",
                    SortDateOldest: "Nach Datum sortieren (absteigend)",
                    SortDateNewest: "Nach Datum sortieren (aufsteigend)",
                    SortByColor: "Nach Farbe sortieren",
                    SortByCellColor: "Nach Zellenfarbe sortieren",
                    SortByFontColor: "Nach Schriftfarbe sortieren",
                    FilterByColor: "Nach Farbe filtern",
                    CustomSort: "Benutzerdefiniertes Sortieren",
                    FilterByCellColor: "Nach Zellenfarbe filtern",
                    FilterByFontColor: "Nach Schriftfarbe filtern",
                    ClearFilter: "Filter löschen",
                    NumberFilter: "Nummern Filter",
                    GuidFilter: "Guid Filter",
                    TextFilter: "Text Filter",
                    DateFilter: "Datum Filter",
                    DateTimeFilter: "Zeit Filter",
                    SelectAll: "Alles auswählen",
                    Blanks: "Leer",
                    Search: "Suchen",
                    Showrowswhere: "Zeile anzeigen wo",
                    NumericTextboxWaterMark: "Geben Sie Wert",
                    StringMenuOptions: [{ text: "Gleich", value: "equal" }, { text: "Ungleich", value: "notequal" }, { text: "Startet mit", value: "startswith" }, { text: "Endet mit", value: "endswith" }, { text: "Beinhalted", value: "contains" }, { text: "Benutzerdefiniertes Filtern", value: "customfilter" }],
                    NumberMenuOptions: [{ text: "Gleich", value: "equal" }, { text: "Ungleich", value: "notequal" }, { text: "Kleiner als", value: "lessthan" }, { text: "Kleiner oder Gleich", value: "lessthanorequal" }, { text: "Größer als", value: "greaterthan" }, { text: "Größer oder Gleich", value: "greaterthanorequal" }, { text: "Zwischen", value: "between" }, { text: "Benutzerdefinierte Filter", value: "customfilter" }],
                    GuidMenuOptions: [{ text: "Gleich", value: "equal" }, { text: "Ungleich", value: "notequal" }, { text: "Benutzerdefiniertes Filtern", value: "customfilter" }],
                    DateMenuOptions: [{ text: "Gleich", value: "equal" }, { text: "Ungleich", value: "notequal" }, { text: "Kleiner als", value: "lessthan" }, { text: "Kleiner oder Gleich", value: "lessthanorequal" }, { text: "Größer als", value: "greaterthan" }, { text: "Größer oder Gleich", value: "greaterthanorequal" }, { text: "Zwischen", value: "between" }, { text: "Benutzerdefinierte Filter", value: "customfilter" }],
                    DatetimeMenuOptions: [{ text: "Gleich", value: "equal" }, { text: "Ungleich", value: "notequal" }, { text: "Kleiner als", value: "lessthan" }, { text: "Kleiner oder Gleich", value: "lessthanorequal" }, { text: "Größer als", value: "greaterthan" }, { text: "Größer oder Gleich", value: "greaterthanorequal" }, { text: "Zwischen", value: "between" }, { text: "Benutzerdefinierte Filter", value: "customfilter" }],
                    Top10MenuOptions: [{ text: "Oben", value: "top" }, { text: "Unten", value: "bottom" }],
                    title: "Benutzerdefinierte Filter",
                    PredicateAnd: "UND",
                    PredicateOr: "ODER",
                    OK: "OK",
                    MatchCase: "Groß-/Kleinschreibung beachten",
                    Cancel: "Stornieren",
                    NoResult: "Keine Übereinstimmungen gefunden",
                    CheckBoxStatusMsg: "Nicht alle Objekte werden angezeigt",
                    DatePickerWaterMark: "Zeit auswählen",
                    DateTimePickerWaterMark: "Wählen Sie Datum Zeit",
                    True: "TRUE",
                    False: "FALSE",
                    AddToFilter: "Aktuelle Auswahl zum Filter hinzufügen"
                };
                break;
            case "ejFileExplorer":
                ej.FileExplorer.Locale = ej.FileExplorer.Locale || {};
                ej.FileExplorer.Locale["de-DE"] = {
                    Folder: "Ordner",
                    EmptyResult: "Kein Objekt gefunden",
                    EmptyFolder: "Dieser Ordner ist leer",
                    ProtectedFolder: "Zugriff auf den Zielordner wurde verweigert",
                    Back: "Zurück",
                    Forward: "Vor",
                    Upward: "Hoch",
                    Refresh: "Aktualisieren ",
                    Addressbar: "Adressleiste",
                    Upload: "Hochladen",
                    Rename: "Umbenennen",
                    Delete: "Löschen",
                    Download: "Herunterladen",
                    Error: "Fehler",
                    PasteError: "Fehler",
                    UploadError: "Fehler",
                    RenameError: "Fehler",
                    PasteReplaceAlert: "Die Datei {0} ist bereits vorhanden. Möchten Sie die vorhandene Datei ersetzen?",
                    UploadReplaceAlert: "Die Datei ist bereits vorhanden. Alte Datei durch neue ersetzen?",
                    Cut: "Ausschneiden",
                    Copy: "Kopieren",
                    Paste: "Einfügen",
                    Details: "Details",
                    Searchbar: "Suchleiste",
                    Open: "Öffnen",
                    Search: "Suche",
                    NewFolder: "Neuer Ordner",
                    SelectedFileUrl: "Web-Adresse",
                    SelectedFileName: "Titel",
                    ImageWidth: "Breite",
                    ImageHeight: "Höhe",
                    Insert: "Insert",
                    Cancel: "Rückgängig Machen",
                    RenameAlert: "Bitte neuen Namen eingeben",
                    NewFolderAlert: "Bitte neuen Ordnernamen eingeben",
                    ContextMenuOpen: "geöffnet",
                    ContextMenuNewFolder: "Neuer Ordner",
                    ContextMenuDelete: "löschen",
                    ContextMenuRename: "umbenennen",
                    ContextMenuUpload: "hochladen",
                    ContextMenuDownload: "Herunterladen",
                    ContextMenuCut: "Schnitt",
                    ContextMenuCopy: "Kopie",
                    ContextMenuPaste: "kleben",
                    ContextMenuGetinfo: "erhalte Information",
                    ContextMenuRefresh: "erfrischen",
                    ContextMenuOpenFolderLocation: "Ordnerpfad öffnen",
                    ContextMenuSortBy: "Sortiere nach",
                    SortBy: "Sortieren nach",
                    Item: " Objekt",
                    Items: " Objekte",
                    Selected: "Ausgewählt",
                    Permission: "Erlaubnis",
                    OkButton: "Ok",
                    CancelButton: "Rückgängig machen",
                    YesToAllButton: "Ja zu allem",
                    NoToAllButton: "Nein zu allem",
                    YesButton: "Ja",
                    NoButton: "Nein",
                    Size: "Größe",
                    Grid: "Gitternetzansicht",
                    Tile: "Kachelansicht",
                    LargeIcons: "Große Symbole",
                    Layout: "Layout",
                    SkipButton: "Überspringen",
                    ErrorOnFolderCreation: "Das Ziel enthält bereits einen Ordner mit dem Namen '{0}'. Möchten Sie diesen Ordnerinhalt mit dem schon bestehenden Ordner '{0}' zusammenführen?",
                    InvalidFileName: "Name ist ungültig. Verwenden Sie einen Namen, der Zeichen wie \\/ *? \\ <> | nicht enthält",
                    GeneralError: "Für mehr Informationen schauen Sie in das Brower-Konsolenfenster",
                    ErrorPath: "FileExplorer kann {0} nicht finden. Bitte überprüfen Sie die Schreibweise und probieren Sie es nochmal.",
                    DuplicateAlert: "Es ist schon eine Datei mit dem selben Namen {0} vorhanden. Möchten Sie diese Datei mit einem Duplikatnamen erstellen?",
                    DuplicateFileCreation: "Es ist schon eine Datei mit dem selben Namen vorhanden. Wollen Sie {0} mit {1} ersetzen?",
                    DeleteFolder: " Sind Sie sicher, dass Sie löschen wollen? ",
                    DeleteMultipleFolder: "Sind Sie sicher, dass Sie diese {0} Objekte löschen wollen?",
                    CancelPasteAction: "Der Zielordner ist ein Unterordner des Quellenordners.",
                    Name: "Name",
                    Location: "Ort",
                    Type: "Objekt typ",
                    Created: "erstellt",
                    Modified: "verändert",
                    DialogCloseToolTip: "schließen",
                    UploadSettings: {
                        buttonText: {
                            upload: "hochladen",
                            browse: "Durchsuchen",
                            cancel: "Rückgängig Machen",
                            close: "schließen"
                        },
                        dialogText: {
                            title: "Feld hochladen",
                            name: "Name",
                            size: "Größe",
                            status: "Status"
                        },
                        dropAreaText: "Zum hochladen, Dateien ablegen oder anklicken",
                        filedetail: "Die ausgewählte Dateigröße ist zu groß. Bitte wählen Sie eine Datei in der gültigen Größe aus.",
                        denyError: "Dateien mit #Extension erweiterung sind nicht erlaubt",
                        allowError: "Nur Dateien mit #Extension erweiterung sind erlaubt",
                        cancelToolTip: "stornieren",
                        removeToolTip: "Entfernen",
                        retryToolTip: "Wiederholen",
                        completedToolTip: "Fertiggestellt",
                        failedToolTip: "Fehlgeschlagen",
                        closeToolTip: "schließen"
                    }
                };
                break;
            case "ejGantt":
                ej.Gantt.Locale = ej.Gantt.Locale || {};
                ej.Gantt.Locale["de-DE"] = {
                    emptyRecord: "Keine Datensätze zum Anzeigen",
                    unassignedTask: "Nicht zugewiesene Aufgabe",
                    alertTexts: {
                        indentAlert: "Es ist keine Gantt Aufzeichnung ausgewählt für einen Einzug",
                        outdentAlert: "Es ist keine Gantt Aufzeichnung ausgewählt für eine Ausrückung",
                        predecessorEditingValidationAlert: "Es ist eine Zyklische Aghängigkeit aufgetreten, bitte prüfen Sie den Vorgänger.",
                        predecessorAddingValidationAlert: "Füllen Sie alle Spalten in der Vorgänger Tabelle",
                        idValidationAlert: "ID doppelt vergeben",
                        dateValidationAlert: "Ungültiges Enddatum ",
                        dialogResourceAlert: "Füllen Sie alle Spalten in der Quellen Tabelle"
                    },
                    columnHeaderTexts: {
                        taskId: "ID",
                        taskName: "Aufgabenbezeichnung",
                        startDate: "Startdatum",
                        endDate: "Enddatum",
                        resourceInfo: "Ressourcen",
                        duration: "Dauer",
                        status: "Fortschritt",
                        taskMode: "Aufgabenmodus",
                        predecessor: "Vorgänger",
                        type: "Typ",
                        offset: "ausgleichen",
                        baselineStartDate: "Grundlinie Startdatum",
                        baselineEndDate: "Grundlinie Enddatum",
                        WBS: "WBS",
                        WBSPredecessor: "Vorgänger",
                        dialogCustomFieldName: "Spaltenname",
                        dialogCustomFieldValue: "Wert",
                        notes: "Notizen",
                        taskType: "Aufgabentyp",
                        work: "Arbeit",
                        unit: "Einheit",
                        effortDriven: "Aufwand getrieben",
                        resourceName: "Ressourcenname"
                    },
                    editDialogTexts: {
                        addFormTitle: "Neue Aufgabe",
                        editFormTitle: "Aufgabe bearbeiten",
                        saveButton: "Speichern",
                        deleteButton: "Löschen",
                        cancelButton: "Stornieren",
                        addPredecessor: "Neue hinzufügen",
                        removePredecessor: "Entfernen",
                        addButton: "Hinzufügen"
                    },
                    columnDialogTexts: {
                        field: "Feld",
                        headerText: "Kopfzeilentext",
                        editType: "Bearbeitungstyp",
                        filterEditType: "Filterbearbeitungstyp",
                        allowFiltering: "Lassen Filterung",
                        allowFilteringBlankContent: "Leeren Filter erlauben",
                        allowSorting: "Sortieren erlauben",
                        visible: "Sichtbar",
                        width: "Breite",
                        textAlign: "Textausrichtung",
                        headerTextAlign: "Kopfzeilentextausrichtung",
                        columnsDropdownData: "Spalten Dropdown-Daten",
                        dropdownTableText: "Text",
                        dropdownTableValue: "Wert",
                        addData: "Hinzufügen",
                        deleteData: "Entfernen",
                        allowCellSelection: "Zellenauswahl erlauben",
                        displayAsCheckbox: "Als Kontrollkästchen anzeigen lassen",
                        clipMode: "Clip Modus",
                        tooltip: "Kurzinfo",
                        showInColumnChooser: "In Spaltenauswahl anzeigen",
                        headerTooltip: "Kopfzeilen Kurzinfo"
                    },
                    editTypeTexts: {
                        string: "Zeichenfolge",
                        numeric: "Numerisch",
                        datePicker: "Datumswähler",
                        dateTimePicker: "Uhrzeitwähler",
                        dropdown: "Dropdown",
                        boolean: "Boolean"
                    },
                    textAlignTypes: {
                        right: "Rechts",
                        left: "Links",
                        center: "Mittelpunkt"
                    },
                    clipModeTexts: {
                        clip: "Clip",
                        ellipsis: "Ellipse"
                    },
                    toolboxTooltipTexts: {
                        addTool: "Hinzufügen",
                        editTool: "Bearbeiten",
                        saveTool: "Aktualisieren",
                        deleteTool: "Löschen",
                        cancelTool: "Stornieren",
                        searchTool: "Suche",
                        indentTool: "Einzug",
                        outdentTool: "ausrücken",
                        expandAllTool: "Alle ausklappen",
                        collapseAllTool: "Alle einklappen",
                        nextTimeSpanTool: "Nächste Zeitspanne",
                        prevTimeSpanTool: "Bevorige Zeitspanne",
                        criticalPathTool: "kritischer Pfad",
                        excelExportTool: "Excel exportieren",
                        printTool: "drucken",
                        pdfExportTool: "PDF exportieren"
                    },
                    durationUnitTexts: {
                        days: "Tage",
                        hours: "Stunden",
                        minutes: "Minuten",
                        day: "Tag",
                        hour: "Stunde",
                        minute: "Minute"
                    },
                    durationUnitEditText: {
                        minute: ["m", "min", "minute", "protokoll"],
                        hour: ["h", "hr", "stunde", "stunden"],
                        day: ["d", "dy", "tag", "tage"]
                    },
                    workUnitTexts: {
                        days: "Tage",
                        hours: "Std.",
                        minutes: "Protokoll"
                    },
                    taskTypeTexts: {
                        fixedWork: "Feste Arbeit",
                        fixedUnit: "Feste Einheiten",
                        fixedDuration: "Feste Dauer"
                    },
                    effortDrivenTexts: {
                        yes: "ja",
                        no: "Nein"
                    },
                    contextMenuTexts: {
                        taskDetailsText: "Aufgaben Details",
                        addNewTaskText: "Neue Aufgabe hinzufügen",
                        indentText: "Einrücken",
                        outdentText: "Ausrücken",
                        deleteText: "Löschen",
                        aboveText: "über",
                        belowText: "darunter"
                    },
                    newTaskTexts: {
                        newTaskName: "Neue Aufgabe"
                    },
                    columnMenuTexts: {
                        sortAscendingText: "Aufsteigend sortieren",
                        sortDescendingText: "Absteigend sortieren",
                        columnsText: "Spalten",
                        insertColumnLeft: "Spalte Links Einfügen",
                        insertColumnRight: "Spalte Rechts Einfügen",
                        deleteColumn: "Spalte löschen",
                        renameColumn: "Spalte umbenennen"
                    },
                    taskModeTexts: {
                        manual: "manuell",
                        auto: "Auto"
                    },
                    columnDialogTitle: {
                        insertColumn: "Spalte Einfügen",
                        deleteColumn: "Spalte löschen",
                        renameColumn: "Umbenennen Spalte"
                    },
                    deleteColumnText: "Sind Sie sicher sie wollen diese Spalte löschen?",
                    okButtonText: "OK",
                    cancelButtonText: "Stornieren",
                    confirmDeleteText: "Löschen bestätigen",
                    predecessorEditingTexts: {
                        fromText: "Von",
                        toText: "Zu"
                    },
                    dialogTabTitleTexts: {
                        generalTabText: "Allgemein",
                        predecessorsTabText: "Vorgänger",
                        resourcesTabText: "Ressourcen",
                        customFieldsTabText: "Benutzerdefinierte Felder",
                        notesTabText: "Anmerkungen"
                    },
                    predecessorCollectionText: [
                            { id: "SS", text: "Start-Start", value: "Start-Start" },
                            { id: "SF", text: "Start-Ende", value: "Start-Ende" },
                            { id: "FS", text: "Ende-Start", value: "Ende-Start" },
                            { id: "FF", text: "Ende-Ende", value: "Ende-Ende" }
                    ],

                    linkValidationRuleText: {
                        taskBeforePredecessor: "Sie haben '{0}' verschoben, um zu beginnen, bevor '{1}' beendet ist und die beiden Aufgaben verknüpft sind. Infolgedessen können die Verbindungen nicht eingehalten werden. Wählen Sie eine der folgenden Aktionen aus, um",
                        taskAfterPredecessor: "Sie haben '{0}' von '{1}' entfernt und die beiden Aufgaben sind verknüpft. Infolgedessen können die Verbindungen nicht eingehalten werden. Wählen Sie eine der folgenden Aktionen aus, um",
                    },

                    linkValidationDialogTitle: "Bearbeiten bestätigen",


                    linkValidationRuleOptions: {
                        cancel: "Abbrechen, den bestehenden Link beibehalten",
                        removeLink: "Entfernen Sie den Link und verschieben Sie '{0}', um mit '{1}' zu beginnen.",
                        preserveLink: "Bewegen Sie den '{0}', um mit '{1}' zu beginnen und behalten Sie den Link."
                    },
                    connectorLineDialogText: {
                        from: "Von",
                        to: "Zu",
                        taskLink: "Aufgabenverknüpfung",
                        lag: "zurückbleiben",
                        okButtonText: "OK",
                        cancelButtonText: "Stornieren",
                        deleteButtonText: "Löschen",
                        title: "Aufgabenabhängigkeit"
                    }
                };
                break;
            case "ejGrid":
                ej.Grid.Locale = ej.Grid.Locale || {};
                ej.Grid.Locale["de-DE"] = {
                    EmptyRecord: "Keine Aufzeichnungen angezeigt",
                    GroupDropArea: "Ziehe Sie einen Spaltenkopf hierher um die Spalten zu gruppieren",
                    DeleteOperationAlert: "Für den Löschvorgang wurden keine Datensätze ausgewählt",
                    EditOperationAlert: "Für den Bearbeitungsvorgang wurden keine Datensätze ausgewählt",
                    SaveButton: "sparen",
                    OKButton: "OK",
                    CancelButton: "Stornieren",
                    EditFormTitle: "Informationen von ",
                    AddFormTitle: "Fügen Sie einen neuen Datensatz hinzu",
                    GroupCaptionFormat: "{{:headerText}}: {{:key}} - {{:count}} {{if count == 1 }} Artikel {{else}} Artikel {{/if}} ",
                    BatchSaveConfirm: "Sind Sie sicher Sie wollen das Speichern?",
                    BatchSaveLostChanges: "Ungespeicherte Änderungen gehen verloren. Wollen Sie fortfahren?",
                    ConfirmDelete: "Sind Sie sicher Sie wollen diesen Datensatz löschen?",
                    CancelEdit: "Sind Sie sicher Sie wollen die Änderungen löschen?",
                    PagerInfo: "{0} von {1} Seiten ({2} Beiträge)",
                    FrozenColumnsViewAlert: "Fixierte Spalte soll in den Gitternetzansichtsbereich",
                    FrozenColumnsScrollAlert: "AllowScrolling erlauben während der Verwendung von fixierten Spalten",
                    FrozenNotSupportedException: "Fixierte Spalten und Zeilen werden, für Gruppierungszeilenvorlage, Detailvorlage, Hierachieraster und Stapelbearbeitung nicht unterstützt",
                    Add: "Hinzufügen",
                    Edit: "Bearbeiten",
                    Delete: "Löschen",
                    Update: "Aktualisieren",
                    Cancel: "Stornieren",
                    Done: "Erledigt",
                    Columns: "Columns",
                    SelectAll: "(Alles auswählen)",
                    PrintGrid: "Drucken",
                    ExcelExport: "Excel Export",
                    WordExport: "Word-Export",
                    PdfExport: "PDF-Export",
                    StringMenuOptions: [{ text: "Beginnt mit", value: "StartsWith" }, { text: "Endet mit", value: "EndsWith" }, { text: "Enthält", value: "Contains" }, { text: "Gleich", value: "Equal" }, { text: "Nicht equal", value: "NotEqual" }],
                    NumberMenuOptions: [{ text: "Weniger als", value: "LessThan" }, { text: "Größer als", value: "GreaterThan" }, { text: "Kleiner als oder equal", value: "LessThanOrEqual" }, { text: "Größer als oder equal", value: "GreaterThanOrEqual" }, { text: "Gleich", value: "Equal" }, { text: "Nicht equal", value: "NotEqual" }, { text: "Zwischen", value: "Between" }],
                    PredicateAnd: "UND",
                    PredicateOr: "ODER",
                    Filter: "Filter",
                    FilterMenuCaption: "Filterwert",
                    FilterMenuFromCaption: "Von",
                    FilterMenuToCaption: "Nach",
                    FilterbarTitle: "Filterleiste für Spalte",
                    MatchCase: "Kleinschreibung",
                    Clear: "Löschen",
                    ResponsiveFilter: "Filter",
                    ResponsiveSorting: "Sortieren",
                    Search: "Suche",
                    NumericTextBoxWaterMark: "Geben Sie den Wert ein",
                    DatePickerWaterMark: "Select date",
                    EmptyDataSource: "Die Quelldaten dürfen bei Inizialisierung nicht leer sein, da die Spalten im AutoGenerierungs Spalten Gitternetz generiert werden",
                    ForeignKeyAlert: "Der aktualiserte Wert sollte einen gültiger Fremdschlüsselwert haben",
                    True: "wahr",
                    False: "falsch",
                    UnGroup: "Hier Klicken um Gruppierung aufzuheben",
                    AddRecord: "Datensatz hinzufügen",
                    EditRecord: "Datensatz bearbeiten",
                    DeleteRecord: "Datensatz löschen",
                    Save: "sparen",
                    Grouping: "Gruppieren",
                    Ungrouping: "Gruppierung aufheben",
                    SortInAscendingOrder: "Aufsteigend sortieren",
                    SortInDescendingOrder: "Absteigend sortieren",
                    NextPage: "Nächte Seite",
                    PreviousPage: "Vorherige Seite",
                    FirstPage: "Erste Seite",
                    LastPage: "Letzte Seite",
                    EmptyRowValidationMessage: "Zumindestens ein Feld muss aktualisiert werden",
                    NoResult: "Keine Treffer gefunden"
                };
                break;
            case "ejmobile":
                if (ej.mobile.Grid) {
                    ej.mobile.Grid.Locale = ej.mobile.Grid.Locale || {};
                    ej.mobile.Grid.Locale["de-DE"] = {
                        emptyResult: "Keine Aufzeichnungen angezeigt",
                        filterValidation: "Gültige Filterdaten eintragen",
                        filterTypeValidation: "Die aktuelle Filterspalte ist vom Typ…",
                        captionText: "Artikel",
                        spinnerText: "Wird geladen…",
                        HideColumnAlert: "Zumindestens eine Spalte muss im Gitternetz angezeigt werden",
                        columnSelectorText: "Spalte verbergen",
                        columnSelectorDone: "OK",
                        columnSelectorCancel: "Stornieren",
                        columnSelectorWarning: "Warnung",
                        filterOk: "OK",
                        filterWarning: "Warnung"
                    };
                }
                if (ej.mobile.DatePicker) {
                    ej.mobile.DatePicker.Locale =  ej.mobile.DatePicker.Locale || {};
                    ej.mobile.DatePicker.Locale["de-DE"] = {
                        confirmText: "Erledigt",
                        Windows: {
                            cancelText: "Stornieren",
                            headerText: "WAHL DATUM",
                            toolbarConfirmText: "erledigt",
                            toolbarCancelText: "schließen"
                        },
                    };
                    ;
                }
                if (ej.mobile.TimePicker) {
                    ej.mobile.TimePicker.Locale = ej.mobile.TimePicker.Locale || {};
                    ej.mobile.TimePicker.Locale["de-DE"] = {
                        confirmText: "Erledigt",
                        AM: "AM",
                        PM: "PM",
                        Android: {
                            headerText: "Zeit einstellen"
                        },
                        Windows: {
                            cancelText: "Stornieren",
                            headerText: "WAHL ZEIT",
                            toolbarCancelText: "schließen",
                            toolbarConfirmText: "erledigt"
                        },
                    };

                }
                break;
            case "ejNumericTextbox":
                ej.NumericTextbox.Locale = ej.NumericTextbox.Locale || {};
                ej.NumericTextbox.Locale["de-DE"] = {
                    watermarkText: "Wert eingeben",
                };
                break;
            case "ejPivotChart":
                ej.PivotChart.Locale = ej.PivotChart.Locale || {};
                ej.PivotChart.Locale["de-DE"] = {
                    Measure: "Messen",
                    Row: "Zeile",
                    Column: "Spalte",
                    Value: "Wert",
                    Expand: "Erweitern",
                    Collapse: "Zusammenbruch",
                    Exit: "Beenden",
                    ChartTypes: "Diagrammtypen",
                    TDCharts: "Diagramm",
                    Tooltip: "Quickinfo",
                    Exporting: "Exportieren",
                    Line: "Linie",
                    Spline: "Spline",
                    Column: "Spalte",
                    Area: "Bereich",
                    SplineArea: "Splinefläche",
                    StepLine: "Schrittzeile",
                    StepArea: "Schrittfläche",
                    Pie: "Kuchen",
                    Bar: "Leiste",
                    StackingArea: "Fäche stapeln",
                    StackingColumn: "Spalte stapeln",
                    StackingBar: "Leiste stapeln",
                    Pyramid: "Pyramide",
                    Funnel: "Trichter",
                    Doughnut: "Krapfen",
                    Scatter: "Punkt",
                    Bubble: "Blasen",
                    TreeMap: "Hierachie",
                    ColumnTD: "Spalte 3D",
                    PieTD: "Kuchen 3D",
                    BarTD: "Bar 3D",
                    StackingBarTD: "Stapelleiste",
                    StackingColumnTD: "Stapelspalte",
                    Excel: "Excel",
                    Word: "Word",
                    Pdf: "PDF",
                    PNG: "PNG",
                    EMF: "EMF",
                    GIF: "GIF",
                    JPG: "JPG",
                    BMP: "BMP",
                    ZoomIn: "hineinzoomen",
                    ZoomOut: "Rauszoomen",
                    Legend: "Legende",
                    SmartLabels: "Intelligente Etiketten",
                    Interactions: "Wechselwirkungen",
                    Zooming: "Zoomen",
                    Rotate45: "Drehen45",
                    Rotate90: "Drehen90",
                    Trim: "Trimmen",
                    MultipleRows: "Mehrere Zeilen",
                    Wrap: "Wickeln",
                    Hide: "verbergen",
                    WrapByWord: "Wrap nach dem Wort",
                    CrossHair: "Kreuzes Haar",
                    TrackBall: "Trackball",
                    DisableTD: "Deaktivieren Sie 3D-Diagramme",
                    None: "Keiner",
                    Exception: "Ausnahme",
                    OK: "OK"
                };
                break;
            case "ejPivotClient":
                ej.PivotClient.Locale = ej.PivotClient.Locale || {};
                ej.PivotClient.Locale["de-DE"] = {
                    DoesNotBeginsWith: "Beginnt Nicht mit",
                    DoesNotEndsWith: "Endet nicht mit",
                    DoesNotContains: "Enthält nicht",
                    DoesNotEquals: "Ist Ungleich",
                    IsGreaterThan: "Ist Größer als",
                    IsGreaterThanOrEqualTo: "Ist Größer oder Gleich als",
                    IsLessThan: "Ist Kleiner als",
                    IsLessThanOrEqualTo: "Ist Kleiner oder Gleich als",
                    ClearSorting: "Sortierung aufheben",
                    ClearFilterFrom: "Filter aufheben von",
                    SortAtoZ: "Sortieren A-Z",
                    SortZtoA: "Sortieren Z bis A",
                    DeferUpdate: "Update verschieben",
                    MDXQuery: "MDX Abfrage",
                    Row: "Reihe",
                    Slicer: "Datenschnitt",
                    CubeSelector: "Cube Wähler",
                    ReportName: "Berichtsname",
                    NewReport: "Neuer Bericht",
                    CubeDimensionBrowser: "Cube Dimensions-Browser",
                    AddReport: "Bericht hinzufügen",
                    RemoveReport: "Bericht entfernen",
                    CannotRemoveSingleReport: "Einzelner Bericht kann nicht entfernt werden",
                    AreYouSureToDeleteTheReport: "Sind Sie sicher den Bericht zu löschen?",
                    RenameReport: "Bericht umbenennen",
                    ChartTypes: "Diagrammtypen",
                    ToggleAxis: "Achse umschalten",
                    ExportToExcel: "Exportieren zu",
                    ExportToWord: "Exportieren nach Word",
                    ExportToPdf: "Exportieren nach Pdf",
                    FullScreen: "Vollbild",
                    Grid: "Gitternetz",
                    Chart: "Diagramm",
                    OK: "OK",
                    Cancel: "Abbrechen",
                    MeasureEditor: "Mess-Editor",
                    MemberEditor: "Mitglieds-Editor",
                    Measures: "Maßnahmen",
                    SortOrFilterColumn: "Sortieren/Filtern (Spalte)",
                    SortOrFilterRow: "Sortieren/Filtern (Zeile)",
                    SortingAndFiltering: "Sortierung und Filterung",
                    Sorting: "Sortierung",
                    Measure: "Messung",
                    Order: "Auftrag",
                    Filtering: "Filterung",
                    Condition: "Bedingung",
                    PreserveHierarchy: "Hierachie beibehalten",
                    Ascending: "Aufsteigend",
                    Descending: "Absteigend",
                    Enable: "Aktivieren",
                    Disable: "Deaktivieren",
                    and: "<U> </ u> nd",
                    Line: "Linie",
                    Spline: "Spline",
                    Column: "Spalte",
                    Area: "Bereich",
                    SplineArea: "Spline-Fläche",
                    StepLine: "Schritt-Linie",
                    StepArea: "Schritt Gebiet",
                    Pie: "Kuchen",
                    Bar: "Bar",
                    StackingArea: "Stapelbereich",
                    StackingColumn: "Stapelsäule",
                    StackingBar: "Stacking Bar",
                    Pyramid: "Pyramide",
                    Funnel: "Trichter",
                    Doughnut: "Krapfen",
                    Scatter: "streuen",
                    Bubble: "Bubble",
                    TreeMap: "Baum Karte",
                    Sort: "Sortieren",
                    SelectField: "Bereich auswählen",
                    LabelFilterLabel: "Zeige die Punkte an, für die das Label steht",
                    ValueFilterLabel: "Zeige die Punkte an, für die … steht",
                    LabelFilters: "Beschriftungsfilter  ",
                    BeginsWith: "Beginnt mit",
                    NotBeginsWith: "Beginnt nicht mit",
                    EndsWith: "Endet mit",
                    NotEndsWith: "Endet nicht mit",
                    Contains: "Enthält",
                    NotContains: "Enthält nicht",
                    ValueFilters: "WertFilter",
                    ClearFilter: "Filter löschen",
                    Equals: "Ist gleich",
                    NotEquals: "Ist ungleich",
                    GreaterThan: "Größer als ",
                    GreaterThanOrEqualTo: "Größer oder Gleich als ",
                    LessThan: "Kleiner als ",
                    LessThanOrEqualTo: "Kleiner oder Gleich als",
                    Between: "Zwischen",
                    NotBetween: "Nicht dazwischen",
                    Top10: "Nach oben Count",
                    Close: "In der Nähe",
                    AddToColumn: "Zu Spalte hinzufügen",
                    AddToRow: "Zu Zeile hinzufügen",
                    AddToSlicer: "Zu Datenschnitt hinzufügen",
                    Value: "Wert",
                    EqualTo: "Ist gleich",
                    ReportList: "Berichtsliste",
                    Alert: "Warnung",
                    MDXAlertMsg: "Bitte fügen Sie eine Abmessung oder Hierachie zur entsprechenden Achse hinzu um den MDX Abfrage aufzurufen.",
                    FilterSortRowAlertMsg: "Dimension konnte in der Zeilenachse nicht gefunden werden. Bitte fügen Sie ein Dimensionselement zu der Zeilenachse hinzu für Sortierung/Filterung.",
                    FilterSortColumnAlertMsg: "Dimension konnte in der Spaltenachse nicht gefunden werden. Bitte fügen Sie ein Dimensionselement zu der Splatenachse hinzu für Sortierung/Filterung.",
                    FilterSortcolMeasureAlertMsg: "Bitte Maße für Spaltenachse eingeben",
                    FilterSortrowMeasureAlertMsg: "Bitte Maße für Zeilenachse  eingeben",
                    FilterSortElementAlertMsg: "Element konnte nicht in der Spaltenachse gefunden werden. Bitte fügen Sie ein Element zu der Spaltenachse hinzu für Sortierung/Filterung.",
                    FilterMeasureSelectionAlertMsg: "Bitte ein gültiges Maß auswählen.",
                    FilterConditionAlertMsg: "Bitte geben Sie eine gültige Bedingung an.",
                    FilterStartValueAlertMsg: "BBitte geben Sie einen Startwert an.",
                    FilterEndValueAlertMsg: "Bitte geben Sie einen Endwert an.",
                    FilterInvalidAlertMsg: "Ungültige Funktion !",
                    SelectRecordAlertMsg: "Bitte einen gültigen Datensatz auswählen.",
                    RecordName: "Datensatzname",
                    RemoveRecord: "Datensatz Entfernen",
                    RenameRecord: "Datensatz Umbennen ",
                    Load: "Belastung",
                    Remove: "Entfernen Sie",
                    Save: "Speichern",
                    SaveAs: "Speichern unter",
                    SelectRecord: "Datensatz auswählen",
                    SelectReport: "Berichte auswählen",
                    DBReport: "Berichtmanipulation in Datenbank",
                    Rename: "Umbenennen",
                    Remove: "Entfernen Sie",
                    SetRecordNameAlertMsg: "Bitte Datensatzname eingeben.",
                    SetReportNameAlertMsg: "Bitte Berichtsname eingeben.",
                    Search: "Suche",
                    MultipleItems: "mehrere Artikel",
                    All: "Alle",
                    NoReports: "Keine Berichte gefunden in der Datenbank",
                    CalculatedMember: "Berechnetes Element",
                    Caption: "Bildunterschrift:",
                    Expression: "Bezeichnung:",
                    MemberType: "Element Typ:",
                    FormatString: "String format:",
                    MultipleMeasure: "Es kann nicht mehr als ein Maß geschnitten werden.",
                    DuplicateCalcMeasure: "Berechnetes Element mit selben Namen existiert bereits.",
                    EmptyField: "Der Name für ein berechnetes Element oder Bezeichnung darf nicht leer sein.",
                    EmptyFormat: "Das Format für berechnetes Element ist leer.",
                    Warning: "Warnung",
                    Confirm: "Berechnetes Element mit dem selben Namen existiert bereits. Wollen Sie dieses ersetzen?",
                    KPIs: "KPIs",
					Collection: "Sammlung",
					Report: "Bericht",
                    AddCurrentSelectionToFilter: "Aktuelle Auswahl zum Filtern hinzufügen",
                    SaveMsg: "Bericht wurde erfolgreich gespeichert!!!",
                    RenameMsg: "Bericht erfolgreich umbenannt!!!",
                    RemoveMsg: "Bericht erfolgreich entfernt!!!",
                    Success: "Erfolg",
                    KpiAlertMsg: "Sie sind nicht in diesem Bereich des Berichts gesetzt",
                    NotAllItemsShowing: "Nicht alle untergeordneten Knoten werden angezeigt",
                    EditorLinkPanelAlert: "Die Mitglieder hat mehr als 1000 Produkte unter einer oder mehrerer Mutterunternehmen. Nur die ersten 1000 Elemente, die sich unter jedem Elternteil angezeigt.",
                    NamedSetAlert:"Ein benannter Satz kann nicht auf die PivotTable-Bericht zur gleichen Zeit wie eine andere benannte Stellen auf dem gleichen Feld hinzugefügt werden. Klicken Sie auf OK zu entfernen' <Set 1> ' benannt und Hinzufügen' <Set 2> ' genannt.",
                    Exception: "Ausnahme"
                };
                break;
            case "ejPivotGauge":
                ej.PivotGauge.Locale = ej.PivotGauge.Locale || {};
                ej.PivotGauge.Locale["de-DE"] = {
                    RevenueGoal: "Umsatzziel",
                    RevenueValue: "Umsatzwert",
                    Exception: "Ausnahme"
                };
                break;
            case "ejPager":
                ej.Pager.Locale = ej.Pager.Locale || {};
                ej.Pager.Locale["de-DE"] = {
                    pagerInfo: "{0} von {1} Seiten ({2} Stück)",
                    firstPageTooltip: "Erste Seite",
                    lastPageTooltip: "Letzte Seite",
                    nextPageTooltip: "Nächste Seite",
                    previousPageTooltip: "Vorherige Seite",
                    nextPagerTooltip: "Nächste Seitengruppe",
                    previousPagerTooltip: "Vorherige Seitengruppe",
                };
                break;
            case "ejPdfViewer":
                ej.PdfViewer.Locale = ej.PdfViewer.Locale || {};
                ej.PdfViewer.Locale["de-DE"] = {
                    toolbar: {
                        print: {
                            headerText: "Drucken",
                            contentText: "PDF Dokument ausdrucken."
                        },
                        first: {
                            headerText: "Zuerst",
                            contentText: "Springen Sie auf die erste Seite des PDF Dokuments."
                        },
                        previous: {
                            headerText: "früher",
                            contentText: "Gehen Sie auf die vorherige Seite des PDF Dokuments."
                        },
                        next: {
                            headerText: "Nächster",
                            contentText: "Gehen Sie auf die nächste Seite des PDF Dokuments."
                        },
                        last: {
                            headerText: "Letzte",
                            contentText: "Springen Sie auf die letzte Seite des PDF Dokuments."
                        },
                        zoomIn: {
                            headerText: "Vergrößern",
                            contentText: " PDF Dokument vergrößern."
                        },
                        zoomOut: {
                            headerText: "Verkleinern",
                            contentText: "Verkleinern Sie das PDF Dokument."
                        },
                        pageIndex: {
                            headerText: "Seitenzahl",
                            contentText: "Aktuelle Seitenzahl."
                        },
                        zoom: {
                            headerText: "Zoom",
                            contentText: "Verkleinern oder Vergrößern des PDF Dokuments."
                        },
                        fitToWidth: {
                            headerText: "An Breite anpassen",
                            contentText: "Die PDF Seite an die Breite des Containers anpassen "
                        },
                        fitToPage: {
                            headerText: "An Seite anpassen",
                            contentText: "Die PDF Seite an den Container anpassen ."
                        },
                        download: {
                            headerText: ' Herunterladen',
                            contentText: ' PDF Dokument herunterladen'
                        },
                        search: {
                            headerText: 'Text suchen',
                            contentText: 'Text auf den PDF Seiten suchen.'
                        },
                        highlight: {
                            headerText: 'Text hervorheben',
                            contentText: 'Text auf den PDF Seiten hervorheben.',
                        },
                        strikeout: {
                            headerText: 'Text durchstreichen',
                            contentText: 'Text auf den PDF Seiten durchstreichen.',
                        },
                        underline: {
                            headerText: 'Text unterstreichen',
                            contentText: 'Text auf den PDF Seiten unterschreichen.',
                        },
                        signature: {
                            headerText: 'Unterschrift',
                            contentText: 'Handgeschreibene Unterschrift hinzufügen oder entfernen.',
                        },
                        select: {
                            headerText: 'Auswahl',
                            contentText: 'Auswahlwerkzeug.',
                        },
                        scroll: {
                            headerText: 'Verschieben',
                            contentText: 'Klicke um das Dokument zu verschieben',
                        },
                    },
                    contextMenu: {
                        copy: {
                            contentText: 'Kopieren',
                        },
                        googleSearch: {
                            contentText: 'auf Google suchen',
                        },
                        Find: {
                            contentText: 'Finden:',
                        },
                        matchCase: {
                            contentText: 'Groß-/Kleinschreibung anpassen',
                        },
                        auto: {
                            contentText: 'Automatisch',
                        },
                        openPopup: {
                            contentText: 'Pop-Up Hinweis öffnen',
                        },
                        Delete: {
                            contentText: 'Löschen',
                        },
                        properties: {
                            contentText: 'Eigenschaften…',
                        },
                    },
                    propertyWindow: {
                        underlineProperties: {
                            contentText: "Unterstrich Eigenschaften"
                        },
                        strikeOutProperties: {
                            contentText: "Durchstrich Eigenschaften"
                        },
                        highlightProperties: {
                            contentText: "Texthervorhebung Eigenschaften"
                        },
                        signatureProperties: {
                            contentText: " Signatur Eigenschaften"
                        },
                        appearance: {
                            contentText: "Optik"
                        },
                        general: {
                            contentText: "General"
                        },
                        color: {
                            contentText: "Farbe:"
                        },
                        opacity: {
                            contentText: "Deckkraft:"
                        },
                        author: {
                            contentText: "Autor:"
                        },
                        subject: {
                            contentText: "Betreff:"
                        },
                        modified: {
                            contentText: "geändert:"
                        },
                        ok: {
                            contentText: "OK"
                        },
                        cancel: {
                            contentText: "stornieren"
                        },
                        locked: {
                            contentText: "Gesperrt"
                        }
                    },
                    signatureWindow: {
                        Signature: {
                            contentText: "Unterschrift hinzufügen"
                        },
                        Add: {
                            contentText: "Hinzufügen"
                        },
                        clear: {
                            contentText: "Klar"
                        },
                    },
					waitingPopup: {
						print: {
							contentText: "Forbereder dokument til udskrivning ..."
						}
					}
                };
                break;
            case "ejPercentageTextbox":
                ej.PercentageTextbox.Locale = ej.PercentageTextbox.Locale || {};
                ej.PercentageTextbox.Locale["de-DE"] = {
                    watermarkText: "Geben Sie Wert",
                };
                break;
            case "ejPivotGrid":
                ej.PivotGrid.Locale = ej.PivotGrid.Locale || {};
                ej.PivotGrid.Locale["de-DE"] = {
                    Total: "Summe",
                    GrandTotal: "Gesamtsumme",
                    DoesNotBeginsWith: "Beginnt nicht mit",
                    DoesNotEndsWith: "Endet nicht mit",
                    DoesNotContains: "Enthält nicht",
                    DoesNotEquals: "Nicht gleich",
                    IsGreaterThan: "Ist größer als",
                    IsGreaterThanOrEqualTo: "Ist größer als oder Gleich",
                    IsLessThan: "Ist kleiner als",
                    IsLessThanOrEqualTo: "Ist kleiner als oder Gleich",
                    ClearSorting: "Übersichtliche Sortierung",
                    ClearFilterFrom: "Filter löschen aus",
                    SortAtoZ: "Sortieren A-Z",
                    SortZtoA: "Sortieren Z bis A",
                    and: "<U> </ u> nd",
                    NumberFormatting: "Nummernformatierung.",
                    FrozenHeaders: "Fixierte Kopfzeilen",
                    CellSelection: "Zellenauswahl",
                    CellContext: "Zellenkontext",
                    ColumnResize: "Spaltengröße ändern",
                    ExcelLikeLayout: "Excel-ähnliches Layout",
                    FrozenHeader: "Fixierte Kopfzeile",
                    AdvancedFiltering: "Erweiterte Filterung",
                    Amount: "Menge",
                    Quantity: "Quantity",
                    Measures: "Maßnahmen",
                    NumberFormats: "Nummernformate",
                    Exporting: "Exportieren",
                    FileName: "Dateiname",
                    ToolTip: "Kurzinfo",
                    RTL: "RTL",
                    CollapseByDefault: "Standartmäßig Zusammenklappen",
                    EnableDisablePaging: "Seitennummerierung Aktivieren / Deaktiveren.",
                    PagingOptions: "Seitennummerierungsoptionen",
                    CategoricalPageSize: "Kategorische Seitengröße",
                    SeriesPageSize: "Serienseitengröße",
                    HyperLink: "HyperLink",
                    CellEditing: "Zellenbearbeitung",
                    GroupingBar: "Zeilenzusammenfassung",
                    SummaryCustomization: "Benutzerdefinierte Zusammenfassung",
                    SummaryTypes: "Zusammenfassungstypem",
                    SummaryType: "Zusammenfassungstyp",
                    EnableRowHeaderHyperlink: "ZeilenHeaderHyperLink aktivieren",
                    EnableColumnHeaderHyperlink: "SpaltenHeaderHyperLink aktivieren",
                    EnableValueCellHyperlink: "ZellenwertHyperLink aktivieren",
                    EnableSummaryCellHyperlink: "ZellensummenHyperLink aktivieren",
                    HideGrandTotal: "Gesamtsumme ausblenden",
                    HideSubTotal: "Zwischensumme ausblenden",
                    Both: "Beide",
                    Sum: "Summe",
                    Average: "Durchschnitt",
                    Count: "Anzahl",
                    Min: "Min",
                    Max: "Maximum",
                    Excel: "Excel",
                    Word: "Word",
                    PDF: "PDF",
                    CSV: "CSV",
                    ToolTipRow: "Reihe",
                    ToolTipColumn: "Spalte",
                    ToolTipValue: "Wert",
                    SeriesPage: "Serien Seite",
                    CategoricalPage: "Kategorische Seite",
                    DragFieldHere: "Ziehe Feld hierher",
                    ColumnArea: "Spalte hier ablegen",
                    RowArea: "Zeile hier ablegen",
                    ValueArea: "Werte hier ablegen",
                    OK: "OK",
                    Cancel: "Stornieren",
                    Remove: "Entfernen",
                    ConditionalFormatting: "Bedingte Formatierung",
                    Condition: "Konditionaler Typ",
                    Value1: "Wert 1",
                    Value2: "Wert2",
                    Editcondtion: "Kondition bearbeiten",
                    Backcolor: "Hintergrundfarbe",
                    Borderrange: "Rahmenauswahl",
                    Borderstyle: "Rahmenart",
                    Fontsize: "Schriftgröße",
                    Fontstyle: "Schriftart",
                    Bordercolor: "Rahmenfarbe",
                    Sort: "Sortieren",
                    SelectField: "Wählen Sie das Feld aus",
                    LabelFilterLabel: "Zeigen Sie die Elemente aus, für die das Etikett",
                    ValueFilterLabel: "Zeigen Sie die Elemente, die für die",
                    LabelFilters: "Etikettenfilter  ",
                    BeginsWith: "Beginnt mit",
                    NotBeginsWith: "Beginnt nicht mit",
                    EndsWith: "Endet mit",
                    NotEndsWith: "Endet nicht mit",
                    Contains: "Enthält",
                    NotContains: "Nicht enthalten",
                    ValueFilters: "Wert Filter",
                    ClearFilter: "Filter löschen",
                    Equals: "Ist gleich",
                    NotEquals: "Nicht gleich",
                    GreaterThan: "Größer als",
                    GreaterThanOrEqualTo: "Größer als oder Gleich ",
                    LessThan: "Weniger als ",
                    LessThanOrEqualTo: "Kleiner als oder Gleich",
                    Between: "Zwischen",
                    NotBetween: "Nicht zwischen",
                    AddToFilter: "Zum Filter hinzufügen",
                    AddToRow: "Zeile hinzufügen",
                    AddToColumn: "Spalte hinzufügen",
                    AddToValues: "Zu den Werten hinzufügen",
                    Warning: "Warnung",
                    Error: "Fehler",
                    GroupingBarAlertMsg: "Das Feld was Sie verschieben kann nicht in diesem Bereich des Berichts platziert werden",
                    Measures: "Maßnahmen",
                    Expand: "Erweitern",
                    Collapse: "Zusammenbruch",
                    NoValue: "Kein Wert",
                    Close: "In der Nähe",
                    Goal: "Ziel",
                    Status: "Status",
                    Trend: "Trend",
                    Value: "Wert",
                    ConditionalFormattingErrorMsg: "Der gegebene Wert stimmt nicht überein",
                    ConditionalFormattingConformMsg: "Sind Sie sicher Sie wollen das ausgewählte Format entfernen?",
                    EnterOperand1: "Geben Sie Operand1",
                    EnterOperand2: "Geben Sie Operand2",
                    AddNew: "Neu hinzufügen",
                    Format: "Format",
                    NoMeasure: "Bitte Maße eingeben",
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
                    Solid: "Durchgehend",
                    Dashed: "Gestrichelt",
                    Dotted: "Gepunkted",
                    Double: "Doppelt",
                    Groove: "Rille",
                    Inset: "Eingedrückt",
                    Outset: "Hervorstehend",
                    Ridge: "Schwelle",
                    None: "Keine",
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
                    SelectHierarchy: "Hierachie auswählen",
                    CalculatedField: "Berechnetes Feld",
                    Name: "Name:",
                    Add: "Hinzufügen",
                    Formula: "Formel:",
                    Delete: "Löschen",
                    Fields: "Felder:",
                    CalculatedFieldNameNotFound: "Gegebener BerechnetesFeld Name wurde nicht gefunden",
                    InsertField: "Feld einfägen",
                    EmptyField: "Bitte BerechnetesFeld Name oder Formel eintragen",
                    NotValid: "Gegebene Formel ist nicht gültig.",
                    NotPresent: "Das Wertefeld das in den Berechneten Feldformeln verwendet wird ist nicht im PivotGrid vorhanden ",
                    Confirm: "Berechnetes Feld mit selben Namen existiert bereits. Wollen Sie dieses Feld ersetzen?",
                    CalcValue: "Berechnetes Feld kann nur in Wertbereiche eingesetzt werden ",
                    MultipleItems: "Mehrere Elemente",
                    All: "Alle",
                    Search: "Suche",
                    ColumnResize: "Spalte ändern",
                    Layouts: "Layouts",
                    NormalLayout: "Normalles Layout",
                    NormalTopSummary: "Normalles Top-Summary-Layout",
                    NoSummaries: "No-Summary-Layout",
                    Fontcolor: "Schriftfarbe",
                    AddCurrentSelectionToFilter: "Aktuelle Auswahl zum Filtern hinzufügen",
                    Months: "Monate",
                    Days: "Tage",
                    Quarters: "Viertel",
                    Years: "Jahre",
                    Qtr: "Mit einem Nenneingangspegel von -10DBV.",
                    Quarter: "Quartal",
                    NoRecordsToDisplay: "Keine Datensätze anzuzeigen.",
                    EnterFormatName: "Formatname eingeben",
                    FormatName: "Format Name",
                    RemoveFormat: "Entfernen Sie Format",
                    Edit: "Bearbeiten",
                    DuplicateFormatName: "Doppelte Format Name",
                    NotAllItemsShowing: "Nicht alle untergeordneten Knoten werden angezeigt",
                    EditorLinkPanelAlert: "Die Mitglieder hat mehr als 1000 Produkte unter einer oder mehrerer Mutterunternehmen. Nur die ersten 1000 Elemente, die sich unter jedem Elternteil angezeigt.",
                    Exception: "Ausnahme"
                };
                break;
            case "ejPivotPager":
                ej.PivotPager.Locale = ej.PivotPager.Locale || {};
                ej.PivotPager.Locale["de-DE"] = {
                    SeriesPage: "Themenseite",
                    CategoricalPage: "Kategorische Seitengruppierung",
                    Error: "Fehler",
                    OK: "OK",
                    Close: "In der Nähe",
                    PageCountErrorMsg: "Gültige Seitenzahl eingeben"
                };
                break;
            case "ejPivotSchemaDesigner":
                ej.PivotSchemaDesigner.Locale = ej.PivotSchemaDesigner.Locale || {};
                ej.PivotSchemaDesigner.Locale["de-DE"] = {
                    DoesNotBeginsWith: "Beginnt nicht mit",
                    DoesNotEndsWith: "Endet nicht mit",
                    DoesNotContains: "Enthält nicht",
                    DoesNotEquals: "Nicht gleich",
                    IsGreaterThan: "Ist größer als",
                    IsGreaterThanOrEqualTo: "Ist größer als oder Gleich",
                    IsLessThan: "Ist kleiner als",
                    IsLessThanOrEqualTo: "Ist kleiner als oder Gleich",
                    ClearSorting: "Übersichtliche Sortierung",
                    ClearFilterFrom: "Filter löschen aus",
                    SortAtoZ: "Sortieren A-Z",
                    SortZtoA: "Sortieren Z bis A",
                    and: "<U> </ u> nd",

                    PivotTableFieldList: "PivotTable Felder liste",
                    ChooseFieldsToAddToReport: "Wähle Felder aus um Sie zum Bericht hinzuzufügen:",
                    DragFieldBetweenAreasBelow: "Schiebe Felder swischen den untern Bereichen:",
                    ReportFilter: "Berichtsfilter",
                    ColumnLabel: "Spaltenbeschriftung",
                    RowLabel: "Zeilenbezeichnung",
                    Values: "Werte",
                    DeferLayoutUpdate: "Format aktualisierung aussetzen",
                    Update: "Aktualisieren",

                    Sort: "Sortieren",
                    SelectField: "Wählen Sie das Feld aus",
                    LabelFilterLabel: "Zeigen Sie die Elemente aus, für die das Etikett",
                    ValueFilterLabel: "Zeigen Sie die Elemente, die für die",

                    LabelFilters: "Label Filter  ",
                    BeginsWith: "Beginnt mit",
                    NotBeginsWith: "Beginnt nicht mit",
                    EndsWith: "Endet mit",
                    NotEndsWith: "Endet nicht mit",
                    Contains: "Enthält",
                    NotContains: "Enthält nicht",

                    ValueFilters: "Wert Filter",
                    ClearFilter: "Filter löschen",
                    Equals: "Ist gleich",
                    NotEquals: "Nicht gleich",
                    GreaterThan: "Größer als ",
                    GreaterThanOrEqualTo: "Größer als oder Gleich ",
                    LessThan: "Weniger als",
                    LessThanOrEqualTo: "Kleiner als oder Gleich",
                    Between: "Zwischen",
                    NotBetween: "Nicht zwischen",

                    ClearFilter: "Filter löschen",
                    SelectField: "Wählen Sie das Feld aus",
                    Measures: "Maße",
                    Warning: "Warnung",
                    AlertMsg: "Das Feld, das Sie sich nicht in diesem Bereich des Berichts",
                    Goal: "Ziel",
                    Status: "Status",
                    Trend: "Trend",
                    Value: "Wert",
                    AddToFilter: "Zu Filter hinzufügen",
                    AddToRow: "Zeile hinzufügen",
                    AddToColumn: "Spalte hinzufügen",
                    AddToValues: "Zu Wert hinzufügen",
                    OK: "OK",
                    Cancel: "Abbrechen",
                    Close: "In der Nähe",
                    Search: "Suche",
                    Remove: "Entfernen Sie",
                    AddCurrentSelectionToFilter: "Aktuelle Auswahl zum Filtern hinzufügen",
                    NotAllItemsShowing: "Nicht alle untergeordneten Knoten werden angezeigt",
                    EditorLinkPanelAlert: "Die Mitglieder hat mehr als 1000 Produkte unter einer oder mehrerer Mutterunternehmen. Nur die ersten 1000 Elemente, die sich unter jedem Elternteil angezeigt.",
                    NamedSetAlert: "Ein benannter Satz kann nicht auf die PivotTable-Bericht zur gleichen Zeit wie eine andere benannte Stellen auf dem gleichen Feld hinzugefügt werden. Klicken Sie auf OK zu entfernen' <Set 1> ' benannt und Hinzufügen' <Set 2> ' genannt."
                };
                break;
            case "ejDiagram":
                ej.datavisualization.Diagram.Locale = ej.datavisualization.Diagram.Locale || {};
                ej.datavisualization.Diagram.Locale["de-DE"] = {
                    cut: "Schneiden",
                    copy: "Kopieren",
                    paste: "Paste",
                    undo: "Rückgängig machen",
                    redo: "Redo",
                    selectAll: "Alle Auswählen",
                    grouping: "Gruppierung",
                    group: "Gruppe",
                    ungroup: "Gruppierung aufheben",
                    order: "Auftrag",
                    bringToFront: "In den Vordergrund bewegen",
                    moveForward: "nach vorne bewegen",
                    sendBackward: "nach hinten bewegen",
                    sendToBack: "In den Hintergrund bewegen",
                };
                break;
            case "ejChart":
                ej.datavisualization.Chart.Locale = ej.datavisualization.Chart.Locale || {};
                ej.datavisualization.Chart.Locale["de-DE"] = {
                    zoomIn: "In zoomen",
                    zoomOut: "Uitzoomen",
                    zoom: "Zoom",
                    pan: "Verschieben",
                    reset: "Reset"
                };
                break;
            case "ejRangeNavigator":
                ej.datavisualization.RangeNavigator.Locale = ej.datavisualization.RangeNavigator.Locale || {};
                ej.datavisualization.RangeNavigator.Locale["de-DE"] = {
                    intervals: {
                        quarter: {
                            longQuarters: "Quartal,",
                            shortQuarters: "Q"
                        },
                        week: {
                            longWeeks: "Woche,",
                            shortWeeks: "W"
                        },
                    },
                };
                break;
            case "ejMap":
                ej.datavisualization.Map.Locale = ej.datavisualization.Map.Locale || {};
                ej.datavisualization.Map.Locale["de-DE"] = {
                    zoomIn: "Vergrößern",
                    zoomOut: "Verkleinern",
                    panTop: "Nach oben schieben",
                    panBottom: "Nach unten schieben",
                    panLeft: "Nach links schieben",
                    panRight: "Nach rechts schieben",
                    home: "Huis"
                };
                break;
            case "ejReportViewer":
                ej.ReportViewer.Locale = ej.ReportViewer.Locale || {};
                ej.ReportViewer.Locale["de-DE"] = {
                    toolbar: {
                        print: {
                            headerText: "Drucken",
                            contentText: "Bericht ausdrücken."
                        },
                        exportformat: {
                            headerText: "Exportieren",
                            contentText: "Exportiertes Datei Format auswählen.",
                            Pdf: "PDF",
                            Excel: "übertreffen",
                            Word: "Wort",
                            Html: "html",
                            PPT: "PPT",
                            CSV: 'CSV'
                        },
                        first: {
                            headerText: "Erste Seite",
                            contentText: "Gehe zur ersten Seite des Berichts."
                        },
                        previous: {
                            headerText: "Vorherige Seite",
                            contentText: "Gehe zur vorherigen Seite des Berichts."
                        },
                        next: {
                            headerText: "Nächste Seite",
                            contentText: "Gehe zur nächsten Seite des Berichts."
                        },
                        last: {
                            headerText: "Letzte Seite",
                            contentText: "Gehe zur letzten Seite des Berichts."
                        },
                        documentMap: {
                            headerText: "Navigationsbereich",
                            contentText: "Navigationsbereich anzeigen oder verbergen."
                        },
                        parameter: {
                            headerText: "Parameter",
                            contentText: "Parameterfeld anzeigen oder verbergen."
                        },
                        zoomIn: {
                            headerText: "Hineinzoomen",
                            contentText: "Bericht vergrößern."
                        },
                        zoomOut: {
                            headerText: "Rauszoomen",
                            contentText: "Bericht verkleinern."
                        },
                        refresh: {
                            headerText: "auffrischen",
                            contentText: "Bericht aktualisieren."
                        },
                        printLayout: {
                            headerText: "Layout ausdrucken",
                            contentText: "Zwischen Drucklayout und Normalem Modus wechseln."
                        },
                        pageIndex: {
                            headerText: "Seitennummer",
                            contentText: "Aktuelle Seitenzahl anzuzeigen."
                        },
                        zoom: {
                            headerText: "Zoom",
                            contentText: "Verkleinern oder Vergrößern des Berichtes."
                        },
                        back: {
                            headerText: "Zurück",
                            contentText: "Zurück zum übergeordneten Bericht."
                        },
                        fittopage: {
                            headerText: "An Seite anpassen",
                            contentText: "Die Berichtseite an den Container anpassen.",
                            pageWidth: "Seitenbreite",
                            pageHeight: "Ganze Seite"
                        },
                        pagesetup: {
                            headerText: "Seiten Setup",
                            contentText: "Wähle eine Seiten-Setup-Option aus um die Papierformatausrichtung und die Seitenspanne zu verändern."
                        }
                    },
                    pagesetupDialog: {
                        close: 'Schließen',
                        paperSize: "Papiergröße",
                        height: "Höhe",
                        width: "Breite",
                        margins: "Spanne",
                        top: "Oben",
                        bottom: "Boden",
                        right: "Recht",
                        left: "Links",
                        unit: "inch",
                        orientation: "Ausrichtung",
                        portrait: "Hochformat",
                        landscape: "Querformat",
                        doneButton: "Erledigt",
                        cancelButton: "Stornieren"
                    },
                    credential: {
                        userName: 'Nutzername',
                        password: 'Passwort'
                    },
                    waterMark: {
                        selectOption: 'Wähle eine Option',
                        selectValue: 'Wähle einen Wert'
                    },
                    errorMessage: {
                        startMessage: 'Report Viewer hat Probleme beim Laden dieses Berichts festgestellt. Bitte',
                        middleMessage: ' Klick hier',
                        endMessage: 'um die Fehlerdetails zu sehen',
                        closeMessage: 'Schließen Sie diese Nachricht'
                    },
                    alertMessage: {
                        close: 'Schließen',
                        title: 'BerichtViewer',
                        done: 'OK',
                        showDetails: 'Zeige Details',
                        hideDetails: 'Details ausblenden',
                        reportLoad: 'Bericht geladen:',
                        RVERR0001: 'ReportViewer konnte den Bericht nicht laden',
                        RVERR0002: 'ReportViewer konnte den Bericht nicht rendern',
                        RVERR0003: 'Beim Ajax-Postback ist ein Fehler aufgetreten',
                        RVERR0004: 'Bitte wählen Sie einen Wert für den Parameter',
                        RVERR0005: 'Der Parameter {parametername} fehlt ein Wert',
                        RVERR0006: 'Bitte geben Sie den Datentyp float ein',
                        RVERR0007: 'Bitte geben Sie die Ganzzahl-Datentyp Eingabe',
                        RVERR0008: 'ReportViewer konnte die Datenquellenanmeldeinformationen nicht überprüfen',
                        RVERR0009: 'Die Ränder sind überlappt oder sie liegen außerhalb des Papiers. Geben Sie eine andere Randgröße ein.',
                        RVERR0010: 'Bitte geben Sie einen Wert für den Parameter ein',
                        RVERR0011: 'Der Parameter darf nicht leer sein',
                        RVERR0012: 'Der für den Berichtsparameter {parameterprompt} angegebene Wert ist für seinen Typ nicht gültig.'
                    },
                    selectAll: 'Wählen Sie Alle',
                    viewButton: "Bericht sehen"
                };
                break;
            case "ejReportDesigner":
                ej.ReportDesigner.Locale = ej.ReportDesigner.Locale || {};
                ej.ReportDesigner.Locale['de-DE'] = {
                    itemPanel: {
                        waterMarkText: 'Widgets suchen',
                        noDataFound: 'Keine Treffer gefunden...',
                        groupItems: {
                            basicItems: {
                                groupName: 'Grundlegende Elemente',
                                Items: {
                                    'line': 'Linie',
                                    'Bild': 'Bild',
                                    'textBox': 'Textfeld',
                                    'rectangle': 'Rechteck'
                                }
                            },
                            comparison: {
                                groupName: 'Vergleich',
                                Items: {
                                    'Säule': 'Säule',
                                    'bar': 'Bar',
                                    'stackedColumn': 'Gestapelte Säule',
                                    'stackedBar': 'Gestapelte Bar',
                                    'stackedColumnPercent': 'Gestapelte Säule100%',
                                    'stackedBarPercent': 'Gestapelte Bar100%'
                                }
                            },
                            proportion: {
                                groupName: 'Anteil',
                                Items: {
                                    'pie': 'Kuchen',
                                    'explodedPie': 'Explodierter Kuchen',
                                    'doughnut': 'Krapfen',
                                    'pyramid': 'Pyramide',
                                    'funnel': 'Trichter'
                                }
                            },
                            distribution: {
                                groupName: 'Verteilung',
                                Items: {
                                    'area': 'Bereich',
                                    'smoothArea': 'Glatte Oberfläche',
                                    'stackedArea': 'Gestapelte Fläche',
                                    'stackedAreaPercent': 'Gestapelte Fläche100%',
                                    'line': 'Linie',
                                    'smoothLine': 'Glatte Linie',
                                    'steppedLine': 'Stufenlinie',
                                    'lineWithMarkers': 'Linie mit Markern',
                                    'smoothLineWithMarkers': 'SmoothLine mit Markern',
                                    'scatter': 'Streuen',
                                    'bubble': 'Blase',
                                    'polar': 'Polar',
                                    'radar': 'Radar'
                                }
                            },
                            dataRegions: {
                                groupName: 'Datenregionen',
                                Items: {
                                    'grid': 'Gitter',
                                    'pivotgrid': 'PivotGrid'
                                }
                            },
                            subReports: {
                                groupName: 'Unterberichte',
                                Items: {
                                    'subreport': 'Unterbericht'
                                }
                            }
                        }
                    },
                    toolbar: {
                        newReport: 'Neu',
                        open: 'Öffnen',
                        openMenu: {
                            fromDevice: 'Von Gerät',
                            fromServer: 'Vom Server',
                        },
                        save: 'sparen',
                        saveMenu: {
                            saveLabel: 'sparen',
                            saveAs: 'Speichern als',
                            saveAsMenu: {
                                saveToDevice: 'Zum Gerät',
                                saveToServer: 'Zu Server'
                            }
                        },
                        cut: 'Schnitt',
                        copy: 'Kopieren',
                        paste: 'Einfügen',
                        undo: 'Rückgängig machen',
                        redo: 'Wiederholen',
                        zoomIn: 'hineinzoomen',
                        zoomOut: 'Rauszoomen',
                        deleteItem: 'Löschen',
                        gridLine: 'Gitterlinien',
                        header: 'Header',
                        footer: 'Fußzeile',
                        preview: 'Vorschau',
                        reportUpload: {
                            alertLabel: 'Hochladen',
                            alertMessage: 'Fehler beim Hochladen der Datei. Bitte erneut hochladen '
                        }
                    },
                    newReport: {
                        title: 'Neuer Bericht',
                        fileName: 'Dateiname',
                        waterMark: 'Berichtsname',
                        create: 'Erstellen',
                        cancel: 'Stornieren',
                        close: 'Schließen',
                    },
                    reportAction: {
                        enableLink: 'Link aktivieren',
                        linkTo: 'Link zu',
                        report: 'Bericht',
                        url: 'URL'
                    },
                    linkReport: {
                        reportCaption: 'Bericht',
                        setParameter: 'Setze Parameter'
                    },
                    imageProperty: {
                        basicSettings: {
                            categoryName: 'Grundeinstellungen',
                            source: 'Quelle',
                            sourceTypes: {
                                external: 'Extern',
                                embedded: 'Eingebettet',
                                database: 'Datenbank'
                            },
                            value: 'Wert',
                            mimeType: 'Mime Typ',
                            mimeTypes: {
                                bmp: 'image/bmp',
                                jpeg: 'image/jpeg',
                                gif: 'image/gif',
                                png: 'image/png',
                                xPng: 'image/x-png'
                            }
                        },
                        categoryName: 'Verknüpfung',
                        appearance: {
                            categoryName: 'Aussehen',
                            borderTypes: {
                                border: 'Rand',
                                borderLeft: 'Links',
                                borderTop: 'Oben',
                                borderRight: 'Recht',
                                borderBottom: 'Unterseite'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Keiner',
                                double: 'Doppelt',
                                dashed: 'Gestrichelt',
                                dotted: 'Gepunktet'
                            }
                        },
                        size: {
                            categoryName: 'Größe',
                            paddingTypes: {
                                padding: 'Polsterung',
                                paddingLeft: 'Links',
                                paddingTop: 'Oben',
                                paddingRight: 'Recht',
                                paddingBottom: 'Unterseite'
                            },
                            sizing: 'Größenanpassung',
                            sizeTypes: {
                                auto: 'Automatische skalierung',
                                fit: 'Passen',
                                proportional: 'Proportional anpassen',
                                clip: 'Clip'
                            }
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Links',
                            top: 'Oben',
                            sizeLabel: 'Größe',
                            width: 'Breite',
                            height: 'Höhe'
                        },
                        visibility: {
                            categoryName: 'Sichtweite',
                            visible: 'Sichtbar'
                        }
                    },
                    chartProperty: {
                        commonProperties: {
                            showBorder: 'Grenze anzeigen',
                            border: {
                                border: 'Rand',
                                borderLeft: 'Links',
                                borderTop: 'Oben',
                                borderRight: 'Recht',
                                borderBottom: 'Unterseite'
                            },
                            background: 'Hintergrund',
                            font: 'Schriftart',
                            fontStyle: 'Schriftstil',
                            labelRotation: 'Etikettenrotation',
                            categoryAxis: 'Kategorie Achse',
                            valueAxis: 'Wertachse',
                            defaultText: 'Standard',
                            auto: 'Auto',
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Keiner',
                                double: 'Doppelt',
                                dashed: 'Gestrichelt',
                                dotted: 'Gepunktet',
                                dashDot: 'Strich Punkt',
                                dashDotDot: 'Strich Punkt Punkt'
                            },
                            horizontalAlignments: {
                                near: 'In der Nähe von',
                                far: 'Weit',
                            },
                            textAlignments: {
                                right: 'Recht',
                                bottom: 'Unterseite',
                                center: 'Center',
                                topLeft: 'Oben links',
                                topCenter: 'Oben in der Mitte',
                                topRight: 'Oben rechts',
                                rightTop: 'Rechts oben',
                                rightCenter: 'Rechtes Zentrum',
                                rightBottom: 'Rechts unten',
                                bottomLeft: 'Unten links',
                                bottomCenter: 'Unten in der Mitte',
                                bottomRight: 'Unten rechts',
                                leftTop: 'Links oben',
                                leftCenter: 'Linkes Zentrum',
                                leftBottom: 'Links unten',
                            },
                            fontStyleTypes: {
                                normal: 'Normal',
                                italic: 'Kursiv'
                            },
                            fontWeightTypes: {
                                light: 'Licht',
                                bold: 'Fett gedruckt'
                            }
                        },
                        basicSettings: {
                            categoryName: 'Grundeinstellungen',
                            showLegend: {
                                showLegendText: 'Legende zeigen',
                                title: 'Titel',
                                titleFont: 'Überschrift',
                                titleFontStyle: 'Titel Schriftart',
                                titleAlignment: 'Titelausrichtung',
                                legendPosition: 'Legendenposition',
                                enableCustomBounds: 'Benutzerdefinierte Begrenzungen aktivieren'
                            },
                            chooseSeries: 'Wählen Sie die Serie',
                            showMarker: {
                                showMarkerText: 'Markierung zeigen',
                                color: 'Farbe',
                                markerType: 'Markierungstyp',
                                markerTypes: {
                                    square: 'Platz',
                                    circle: 'Kreis',
                                    diamond: 'Diamant',
                                    triangle: 'Dreieck',
                                    cross: 'Kreuz',
                                    star5: 'Stern5',
                                },
                                size: 'Größe'
                            },
                            showDataLabel: {
                                showDataLabelText: 'Zeige Datenlabel',
                                dataLabelFormat: 'Format',
                                dataLabelText: 'Etikette',
                                dataLabelValueAsText: 'Wert als Label verwenden',
                                dataLabelTypes: {
                                    valueX: '#VALX',
                                    valueY: '#VALY',
                                    valueY2: '#VALY2',
                                    valueY3: '#VALY3',
                                    valueY4: '#VALY4',
                                    valueY5: '#VALY5',
                                    valueY6: '#VALY6',
                                    index: '#INDEX',
                                    percent: '#PROZENT',
                                    total: '#GESAMT',
                                    axisLabel: '#AXISLABEL'
                                }
                            },
                            enableSmartLabel: {
                                smartLabelText: 'SmartLabel aktivieren',
                                labelStyle: 'Etikettenstil',
                                value: 'Wert',
                                smartLabelPositions: {
                                    outside: 'Draußen',
                                    inside: 'Innerhalb',
                                    outsideInColumn: 'Außerhalb der Spalte'
                                },
                                smartLabelStyles: {
                                    pieLabelStyle: 'Kuchen Etikettenstil',
                                    funnelLabelStyle: 'Trichter-Label-Stil',
                                    pyramidLabelStyle: 'Pyramide-Aufkleber-Art',
                                    barLabelStyle: 'Bar Etikettenstil',
                                    smartLabelStyle: 'Beschriftungsstil'
                                }
                            },
                            seriesBorder: 'Seriengrenze',
                            seriesColor: 'Serie Farbe'
                        },
                        categoryName: 'Aussehen',
                        chartArea: {
                            categoryName: 'Diagrammbereich',
                            colorPalette: 'Farbpalette',
                            colorPaletteTypes: {
                                earthTones: 'Erdfarben',
                                excel: 'Excel',
                                grayScale: 'Graustufen',
                                pastel: 'Pastell',
                                semiTransparent: 'Halbtransparent',
                                berry: 'Beere',
                                chocolate: 'Schokolade',
                                fire: 'Feuer',
                                seaGreen: 'Meeresgrün',
                                brightPastel: 'BrightPastel',
                                pacific: 'Pazifik',
                                pacificLight: 'Pazifisches Licht',
                                pacificSemiTransparent: 'PacificSemiTransparent',
                            }
                        },
                        title: {
                            categoryName: 'Titel',
                            showChartTitle: 'Diagrammtitel anzeigen',
                            titleText: 'Titeltext',
                            titlePosition: 'Titelposition'
                        },
                        axis: {
                            enableAxis: 'Achse aktivieren',
                            axisTitle: 'Achsentitel',
                            alignment: 'Ausrichtung',
                            lineStyle: 'Linienstil',
                            labelOverflowMode: 'Etikettenüberlaufmodus',
                            overFlowModeTypes: {
                                trim: 'Trimmen',
                                hide: 'verbergen',
                            },
                            labelFont: 'Etikettenschrift',
                            enableMajorTicks: 'Aktivieren Sie wichtige Ticks',
                            enableMinorTicks: 'Aktivieren Sie Minor Ticks',
                            tickProperties: {
                                tickSize: 'Tick ​​Größe',
                                tickColor: 'Tick ​​Farbe',
                                tickWidth: 'Breite',
                                length: 'Länge'
                            },
                            tickPosition: 'Tick-Position'
                        },
                        gridLine: {
                            categoryName: 'Rasterlinie',
                            gridLineStyle: {
                                minorGridLine: 'Minor GridLine anzeigen',
                                majorGridLineStyle: 'Haupt-GridLine-Stil',
                                minorGridLineStyle: 'Geringfügiger GridLine-Stil'
                            }
                        },
                        pageBreak: {
                            categoryName: 'Seitenumbruch',
                            enablePageBreak: 'Seitenumbruch aktivieren',
                            breakLocation: 'Ort brechen',
                            breakLocationTypes: {
                                start: 'Anfang',
                                end: 'Anfang',
                                startAndEnd: 'Start und Ende',
                                between: 'Zwischen',
                            },
                            pageNumberReset: 'Seitenzahl zurücksetzen',
                            pageName: 'Seitenname'
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Links',
                            top: 'Oben',
                            sizeLabel: 'Größe',
                            width: 'Breite',
                            height: 'Höhe'
                        },
                        visibility: {
                            categoryName: 'Sichtweite',
                            visible: 'Sichtbar'
                        }
                    },
                    lineProperty: {
                        basicSettings: {
                            categoryBasicSettings: 'Grundeinstellungen',
                            line: 'Line',
                            lineTypes: {
                                solid: 'Solide',
                                dashed: 'Gestrichelt',
                                dotted: 'Gepunktet',
                            },
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Links',
                            top: 'Oben',
                            sizeLabel: 'Größe',
                            width: 'Breite',
                            height: 'Höhe',
                        },
                        visibility: {
                            categoryName: 'Sichtweite',
                            visible: 'Sichtbar',
                        }
                    },
                    subReportProperty: {
                        basicSettings: {
                            categoryBasicSettings: 'Grundeinstellungen',
                            report: 'Bericht',
                            setParameters: 'Setze Parameter...'
                        },
                        appearance: {
                            categoryAppearance: 'Appearence',
                            borderTypes: {
                                border: 'Rand',
                                borderLeft: 'Links',
                                borderTop: 'Oben',
                                borderRight: 'Recht',
                                borderBottom: 'Unterseite'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Keiner',
                                double: 'Doppelt',
                                dashed: 'Gestrichelt',
                                dotted: 'Gepunktet'
                            }
                        },
                        noRows: {
                            noRowsLabel: 'Keine Zeilen',
                            font: 'Schriftart',
                            fontStyle: {
                                fontStyleLabel: 'Schriftstil',
                                fontItem: {
                                    defaultStyle: 'Standard',
                                    fontNormal: 'Normal',
                                    italic: 'Kursiv'
                                },
                                fontWeight: {
                                    defaultElement: 'Standard',
                                    normal: 'Normal',
                                    thin: 'Dünn',
                                    extraLight: 'Extra-Licht',
                                    light: 'Licht',
                                    medium: 'Mittel',
                                    semiBold: 'Semi Fett',
                                    bold: 'Fett gedruckt',
                                    extraBold: 'Extra fett',
                                    heavy: 'Schwer',
                                }
                            },
                            textDecoration: {
                                textDecorationLabel: 'Textdekoration',
                                defaultDecoration: 'Standard',
                                none: 'Keiner',
                                underLine: 'Unterstreichen',
                                overLine: 'Überstreichen',
                                lineThrough: 'Linie durch'
                            },
                            format: 'Format',
                            lineHeight: 'Zeilenhöhe',
                            message: 'Botschaft',
                            paddingTypes: {
                                padding: 'Polsterung',
                                paddingLeft: 'Links',
                                paddingRight: 'Recht',
                                paddingTop: 'Oben',
                                paddingBottom: 'Unterseite',
                            },
                            textAlign: {
                                textAlignLabel: 'Textausrichtung',
                                textAlignDefault: 'Standard',
                                textAlignGeneral: 'Allgemeines',
                                textAlignLeft: 'Links',
                                textAlignRight: 'Recht',
                                textAlignCenter: 'Center'
                            },
                            verticalAlign: {
                                verticalAlignlabel: 'Vertical Align',
                                verticalAlignDefault: 'Standard',
                                verticalAlignTop: 'Oben',
                                verticalAlignMiddle: 'Mitte',
                                verticalAlignBottom: 'Unterseite'
                            },
                            writingMode: {
                                writingModeLabel: 'Schreibmodus',
                                writingModeDefault: 'Standard',
                                writingModeHorizontal: 'Horizontal',
                                writingModeVertical: 'Vertikal',
                                writingModeRotate: 'Drehen270'
                            }
                        },
                        visibility: {
                            categoryName: 'Sichtweite',
                            visible: 'Sichtbar',
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Links',
                            top: 'Oben',
                            sizeLabel: 'Größe',
                            width: 'Breite',
                            height: 'Höhe',
                        },
                        miscellaneous: {
                            categoryMiscellaneous: 'Sonstiges',
                            keepTogether: 'Zusammen halten'
                        }
                    },
                    rectangleProperty: {
                        basicSettings: {
                            categoryBasicSettings: 'Grundeinstellungen',
                            borderTypes: {
                                border: 'Rand',
                                borderLeft: 'Links',
                                borderTop: 'Oben',
                                borderRight: 'Recht',
                                borderBottom: 'Unterseite'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Keiner',
                                double: 'Doppelt',
                                dashed: 'Gestrichelt',
                                dotted: 'Gepunktet'
                            },
                            backGround: 'Hintergrund'
                        },
                        pageBreak: {
                            pageBreak: 'Seitenumbruch',
                            enablePageBreak: {
                                enablePageBreak: 'Seitenumbruch aktivieren',
                                breakLocation: {
                                    breakLocationLabel: 'Ort brechen',
                                    none: 'Keiner',
                                    start: 'Anfang',
                                    end: 'Anfang',
                                    startAndEnd: 'Start und Ende',
                                    between: 'Zwischen'
                                },
                                pageNumberReset: 'Seitenzahl zurücksetzen'
                            },
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Links',
                            top: 'Oben',
                            sizeLabel: 'Größe',
                            width: 'Breite',
                            height: 'Höhe',
                        },
                        visibility: {
                            categoryName: 'Sichtweite',
                            visible: 'Sichtbar',
                        },
                        rectangleMiscellaneous: {
                            categoryMiscellaneous: 'Sonstiges',
                            keepTogether: 'Zusammen halten',
                            pageName: 'Seitenname'
                        }
                    },
                    browseFile: {
                        openFile: {
                            selectReport: 'Bericht auswählen',
                            open: 'Öffnen',
                        },
                        saveFile: {
                            saveAsReport: 'Speichern als Bericht',
                            name: 'Name',
                            save: 'Sparen',
                        },
                        close: 'Schließen',
                        cancel: 'Stornieren',
                        waterMark: 'Berichtsname',
                        emptyMessage: 'Diese Kategorie ist leer',
                        alertMessage: {
                            reportServer: 'Berichtsserver',
                            selectCategory: 'Bitte Kategorie auswählen',
                        },
                        warningMessage: {
                            fileNameLabel: 'Ein Gegenstand "',
                            fileNameExist: '.rdl "existiert bereits. Möchten Sie den bestehenden Artikel ersetzen??',
                            populateCategory: 'ReportDesigner konnte die Ressourcen nicht vom ReportServer abrufen'
                        }
                    },
                    expressionMenu: {
                        reset: 'Zurücksetzen',
                        expression: 'Ausdruck',
                        advanced: 'Fortgeschritten'
                    },
                    propertyPanel: {
                        property: 'EIGENSCHAFTEN',
                        data: 'DATEN',
                        name: 'Name',
                        toolTipStyle: 'Stil',
                        toolTipColor: 'Farbe',
                        toolTipWidth: 'Breite',
                        setSorts: 'Sortierung',
                        setFilters: 'Filter setzen',
                        advancedOptions: 'Erweiterte Optionen',
                        expressionList: {
                            top: 'Oben',
                            right: 'Recht',
                            bottom: 'Unterseite',
                            left: 'Links',
                            style: 'Stil',
                            color: 'Farbe',
                            size: 'Größe',
                            fontFamily: 'Schriftfamilie',
                            width: 'Breite',
                            height: 'Höhe',
                            weight: 'Gewicht',
                            image: 'Bild'
                        },
                        alertMessage: {
                            nameWarning: 'Name darf nicht leer sein',
                            nameAlert: 'Name existiert bereits',
                            nameValidation: 'Name sollte keine Leerzeichen und Sonderzeichen enthalten'
                        }
                    },
                    dataSource: {
                        newDatasource: 'NEUE DATASOURCE',
                        datasource: 'DATENQUELLEN',
                        datasourceList: {
                            data: 'DATEN',
                            contextMenu: {
                                editItem: 'Bearbeiten',
                                deleteItem: 'Löschen',
                                createDataSet: 'Datensatz erstellen'
                            }
                        },
                        datasourceType: {
                            existOption: 'Bestehende',
                            newOption: 'Erstelle neu',
                            selectDatasoure: 'Wählen Sie die DataSource',
                            connectDatasource: 'DataSource verbinden',
                            datasourceType: 'Wählen Sie den Typ zum Verbinden',
                            sqlLabel: 'SQL',
                            sqlCeLabel: 'SQLCE',
                            odbcLabel: 'ODBC',
                            oracleLabel: 'ORACLE',
                            oledbLabel: 'OLEDB',
                            xmlLabel: 'XML',
                            odataLabel: 'ODATA',
                            postSQLLabel: 'PostSQL',
                            sassLabel: 'SASS',
                            sharedLabel: 'Geteilt'
                        },
                        datasourceConnection: {
                            newConnection: 'NEUE VERBINDUNG',
                            editConnection: 'VERBINDUNG BEARBEITEN',
                            name: 'Name',
                            save: 'Sparen',
                            connect: 'Verbinden',
                            cancel: 'Stornieren'
                        },
                        sqlDatasource: {
                            authenticationType: 'Authentifizierungsart',
                            window: 'Windows',
                            sqlServer: 'SQL Server',
                            userName: 'Nutzername',
                            password: 'Passwort',
                            switchLabel: 'DataSource AdvancePanel',
                            switchAlert: 'Wenn Sie zum visuellen Designer wechseln, werden die manuellen Änderungen an der Verbindungszeichenfolge verworfen. Möchten Sie den visuellen Designer trotzdem verwenden?',
                            basicOption: {
                                serverName: 'Server Name',
                                savePassword: 'Passwort speichern',
                                database: 'Datenbank',
                                advanceSwitch: 'Erweiterte Option'
                            },
                            advanceOption: {
                                connectionString: 'Verbindungsstring',
                                promptLabel: 'Eingabetext',
                                prompt: 'Prompt',
                                none: 'Keiner',
                                basicSwitch: 'Grundlegende Option'
                            },
                            alertMessage: {
                                alertConnectionString: 'Geben Sie die Verbindungszeichenfolge an',
                                alertPrompt: 'Geben Sie den Eingabeaufforderungstext ein',
                                alertUserName: 'Geben Sie den Benutzernamen an',
                                alertPassword: 'Geben Sie das Passwort an',
                                alertServerName: 'Geben Sie den Servernamen an',
                                alertDatabaseName: 'Geben Sie den Datenbanknamen an'
                            }
                        },
                        sqlceDatasource: {
                            connectionString: 'Verbindungsstring',
                            authenticationType: 'Authentifizierungsart',
                            authentication: 'Authentifizierung',
                            none: 'Keiner',
                            password: 'Passwort',
                            alertMessage: {
                                alertConnectionString: 'Geben Sie die Verbindungszeichenfolge an',
                                alertPassword: 'Geben Sie das Passwort an'
                            }
                        },
                        odbcDatasource: {
                            connectionString: 'Verbindungsstring',
                            authenticationType: 'Authentifizierungsart',
                            authentication: 'Authentifizierung',
                            prompt: 'Prompt',
                            none: 'Keiner',
                            userName: 'Nutzername',
                            password: 'Passwort',
                            promptLabel: 'Eingabetext',
                            alertMessage: {
                                alertConnectionString: 'Geben Sie die Verbindungszeichenfolge an',
                                alertPrompt: 'Geben Sie den Eingabeaufforderungstext ein',
                                alertUserName: 'Geben Sie den Benutzernamen an',
                                alertPassword: 'Geben Sie das Passwort an'
                            }
                        },
                        oracleDatasource: {
                            connectionString: 'Verbindungsstring',
                            authenticationType: 'Authentifizierungsart',
                            authentication: 'Authentifizierung',
                            prompt: 'Prompt',
                            none: 'Keiner',
                            userName: 'Nutzername',
                            password: 'Passwort',
                            promptLabel: 'Eingabetext',
                            alertMessage: {
                                alertConnectionString: 'Geben Sie die Verbindungszeichenfolge an',
                                alertPrompt: 'Geben Sie den Eingabeaufforderungstext ein',
                                alertUserName: 'Geben Sie den Benutzernamen an',
                                alertPassword: 'Geben Sie das Passwort an'
                            }
                        },
                        oledbDatasource: {
                            connectionString: 'Verbindungsstring',
                            authenticationType: 'Authentifizierungsart',
                            authentication: 'Authentifizierung',
                            prompt: 'Prompt',
                            none: 'Keiner',
                            userName: 'Nutzername',
                            password: 'Passwort',
                            promptLabel: 'Eingabetext',
                            alertMessage: {
                                alertConnectionString: 'Geben Sie die Verbindungszeichenfolge an',
                                alertPrompt: 'Geben Sie den Eingabeaufforderungstext ein',
                                alertUserName: 'Geben Sie den Benutzernamen an',
                                alertPassword: 'Geben Sie das Passwort an'
                            }
                        },
                        xmlDatasource: {
                            connectionString: 'Verbindungsstring',
                        },
                        odataDatasource: {
                            connectionString: 'Verbindungsstring',
                            alertMessage: 'Geben Sie die Verbindungszeichenfolge an'
                        },
                        postSQLDatasource: {
                            connectionString: 'Verbindungsstring',
                            authenticationType: 'Authentifizierungsart',
                            authentication: 'Authentifizierung',
                            prompt: 'Prompt',
                            none: 'Keiner',
                            userName: 'Nutzername',
                            password: 'Passwort',
                            promptLabel: 'Eingabetext',
                            alertMessage: {
                                alertConnectionString: 'Geben Sie die Verbindungszeichenfolge an',
                                alertPrompt: 'Geben Sie den Eingabeaufforderungstext ein',
                                alertUserName: 'Geben Sie den Benutzernamen an',
                                alertPassword: 'Geben Sie das Passwort an'
                            }
                        },
                        sassDatasource: {
                            connectionString: 'Verbindungsstring',
                            authenticationType: 'Authentifizierungsart',
                            window: 'Windows',
                            sqlServer: 'SQL Server',
                            prompt: 'Prompt',
                            none: 'Keiner',
                            userName: 'Nutzername',
                            password: 'Passwort',
                            promptLabel: 'Eingabetext',
                            alertMessage: {
                                alertConnectionString: 'Geben Sie die Verbindungszeichenfolge an',
                                alertPrompt: 'Geben Sie den Eingabeaufforderungstext ein',
                                alertUserName: 'Geben Sie den Benutzernamen an',
                                alertPassword: 'Geben Sie das Passwort an'
                            }
                        },
                        sharedDatasource: {
                            datasource: 'Gemeinsame Datenquelle',
                            alertMessage: 'Wählen Sie eine gemeinsame Datenquelle'
                        },
                        alertMessage: {
                            alertLabel: 'Datenquelle',
                            alertConnectionFailed: 'ReportDesigner konnte die Datenquelle nicht verbinden',
                            deleteValue: 'Löschen Sie die Datenquelle \'',
                            nameWarning: 'Geben Sie den DataSource-Namen an',
                            nameAlert: 'Der angegebene Name existiert bereits in der DataSource-Liste',
                            nameValidation: 'Name sollte keine Leerzeichen und Sonderzeichen enthalten'
                        }
                    },
                    imageManager: {
                        headerText: 'Image Manager',
                        addImageButton: 'Bild hinzufügen',
                        deleteImage: 'Gelöschtes Bild löschen',
                        image: 'Bild',
                    },
                    linkParameter: {
                        title: 'Parameter',
                        descriptionText: 'Berichtsparameter',
                        addText: 'HINZUFÜGEN',
                        ok: 'OK',
                        cancel: 'Stornieren',
                        nameWaterMark: 'Parameter Name',
                        valueWaterMark: 'Wert',
                        errorMessage: 'Geben Sie einen Wert für diese Eigenschaft ein',
                        closeToolTip: 'Schließen'
                    },
                    filter: {
                        title: 'Filter',
                        descriptionLable: 'Zeilen einschließen, bei denen die folgenden Bedingungen erfüllt sind.',
                        add: 'HINZUFÜGEN',
                        ok: 'OK',
                        cancel: 'Stornieren',
                        valueWaterMark: 'Wert',
                        fieldWaterMark: 'Wähle Feld',
                        closeToolTip: 'Schließen',
                        errorMessage: {
                            booleanValidation: 'Wert ist kein boolescher Wert. ',
                            intValidation: 'Wert ist keine ganze Zahl. ',
                            floatValidation: 'Wert ist kein Float. ',
                            dateTimeValidation: 'Wert ist ein ungültiges Datums- / Uhrzeitformat. ',
                            topBottomFilter: "Die Filteroperatoren Top% und Bottom% benötigen einen Float- oder Integer-Datentyp.",
                            expressionValidation: 'Wert für Ausdrucksfeld wählen'
                        },
                        operatorTypes: {
                            like: 'Mögen',
                            topN: 'TopN',
                            bottomN: 'BottomN',
                            topPercent: 'Oben%',
                            bottomPercent: 'Unterseite%',
                            between: 'Zwischen',
                            inFilter: 'Im',
                        }
                    },
                    dataPanel: {
                        itemTooltip: {
                            properties: 'EIGENSCHAFTEN',
                            data: 'DATEN',
                            parameters: 'Parameter',
                            imageManager: 'Image Manager',
                        },
                        dataSourceNewAlert: {
                            title: 'Datenquelle',
                            contentMessage: 'Möchten Sie die Erstellung der DataSource abbrechen?',
                        },
                        dataSourceEditAlert: {
                            title: 'Datenquelle',
                            contentMessage: 'Möchten Sie die Bearbeitung der DataSource abbrechen?',
                        },
                        dataSetNewAlert: {
                            title: 'Datensatz',
                            contentMessage: 'Möchten Sie die DataSet-Erstellung abbrechen?',
                        },
                        dataSetEditAlert: {
                            title: 'Datensatz',
                            contentMessage: 'Möchten Sie die Bearbeitung des DataSets abbrechen?',
                        },
                        parameterNewAlert: {
                            title: 'Parameter',
                            contentMessage: "Möchten Sie die Parametererstellung abbrechen?",
                        },
                        parameterEditAlert: {
                            title: 'Parameter',
                            contentMessage: "Möchten Sie die Bearbeitung der Parameter abbrechen?",
                        }
                    },
                    dataSet: {
                        headerText: 'DATEN',
                        newData: "DATASET HINZUFÜGEN",
                        splitButtonMenu: {
                            sharedDataset: 'Geteilt',
                            createNewDataset: 'Erstelle neu'
                        },
                        shareDataset: {
                            headerText: 'NEUES DATASET',
                            save: 'Sparen',
                            cancel: 'Stornieren',
                            nameLable: 'Name',
                            sharedDatasetLabel: 'Gemeinsames DataSet',
                            errorMessage: {
                                nameValidation: 'Geben Sie den DataSet-Namen an',
                                datasetValidation: 'Wählen Sie eine gemeinsame Datenquelle',
                                duplicateName: 'Der angegebene Name existiert bereits in der DataSet-Liste',
                                specialCharacter: 'Name sollte keine Leerzeichen und Sonderzeichen enthalten'
                            }
                        },
                        contextMenu: {
                            edit: 'Bearbeiten',
                            remove: 'Löschen'
                        },
                        datasourceSwitcher: 'DATENQUELLEN',
                        deleteDataset: 'Datensatz löschen',
                        deleteField: 'Feld löschen'
                    },
                    reportViewer: {
                        toolbar: {
                            print: 'Drucken',
                            exportformat: {
                                exportText: 'Export',
                                Pdf: 'PDF',
                                Excel: 'Excel',
                                Word: 'Word',
                                Html: 'Html',
                                PPT: 'PPT',
                                CSV: 'CSV'
                            },
                            pageSetup: 'Seiteneinrichtung',
                            gotoFirst: 'Gehe zu Erster',
                            gotoLast: 'Gehe zu Letzter',
                            gotoNext: 'Gehe zu Weiter',
                            gotoPrevious: 'Gehe zurück',
                            gotoParanet: 'Gehe zum Elternteil',
                            zoomIn: 'hineinzoomen',
                            zoomOut: 'Rauszoomen',
                            fittopage: {
                                fitPageText: 'Passend für Seite',
                                pageWidth: 'Seitenbreite',
                                pageHeight: 'Ganze Seite'
                            },
                            printLayout: 'Drucklayout',
                            refresh: 'Aktualisierung',
                            documentMap: 'Dokumentkarte',
                            parameter: 'Parameter',
                            viewDesign: 'Vorschau schließen',
                        },
                        pagesetupDialog: {
                            close: 'Schließen',
                            paperSize: 'Papier größe',
                            height: 'Höhe',
                            width: 'Breite',
                            margins: "Margen",
                            top: 'Oben',
                            bottom: 'Unterseite',
                            right: 'Recht',
                            left: 'Links',
                            unit: 'in',
                            orientation: 'Orientierung',
                            portrait: 'Porträt',
                            landscape: 'Landscape',
                            doneButton: 'OK',
                            cancelButton: 'Stornieren'
                        },
                        credential: {
                            userName: 'Nutzername',
                            password: 'Passwort'
                        },
                        waterMark: {
                            selectOption: 'Wähle eine Option',
                            selectValue: 'Wähle einen Wert'
                        },
                        errorMessage: {
                            startMessage: 'In Report Viewer sind beim Laden dieses Berichts einige Probleme aufgetreten. Bitte',
                            middleMessage: ' Klick hier',
                            endMessage: 'um die Fehlerdetails zu sehen',
                            closeMessage: 'Diese Nachricht schließen'
                        },
                        alertMessage: {
                            close: 'Schließen',
                            title: 'BerichtViewer',
                            done: 'OK',
                            showDetails: 'Zeige Details',
                            hideDetails: 'Details ausblenden',
                            reportLoad: 'Bericht geladen:',
                            RVERR0001: 'ReportViewer konnte den Bericht nicht laden',
                            RVERR0002: 'ReportViewer konnte den Bericht nicht rendern',
                            RVERR0003: 'Im Ajax-Postback ist ein Fehler aufgetreten',
                            RVERR0004: 'Bitte wählen Sie einen Wert für den Parameter',
                            RVERR0005: 'Der Parameter {parametername} fehlt ein Wert',
                            RVERR0006: 'Bitte geben Sie den Datentyp float ein',
                            RVERR0007: 'Bitte geben Sie die Ganzzahl-Datentyp Eingabe',
                            RVERR0008: 'ReportViewer konnte die Datenquellenanmeldeinformationen nicht überprüfen',
                            RVERR0009: 'Die Ränder sind überlappt oder sie liegen außerhalb des Papiers. Geben Sie eine andere Randgröße ein.',
                            RVERR0010: 'Bitte geben Sie einen Wert für den Parameter ein',
                            RVERR0011: 'Der Parameter darf nicht leer sein',
                            RVERR0012: 'Der für den Berichtsparameter {parameterprompt} angegebene Wert ist für seinen Typ nicht gültig.'
                        },
                        selectAll: 'Wählen Sie Alle',
                        viewButton: 'Zeige Bericht'
                    },
                    sortData: {
                        sorting: 'Sortierung',
                        add: 'HINZUFÜGEN',
                        changeSortingOptions: 'Ändern Sie die Sortieroptionen.',
                        sortBy: 'Sortiere nach',
                        thenBy: 'Dann vorbei',
                        direction: {
                            ascending: 'Aufsteigend',
                            descending: 'Absteigend',
                        },
                        chooseField: 'Wählen Sie Feld',
                        errorMessage: 'Wert für Ausdrucksfeld wählen',
                        ok: 'OK',
                        cancel: 'Stornieren',
                        close: 'Schließen',
                    },
                    groupData: {
                        grouping: 'Gruppierung',
                        name: 'Name',
                        label: 'Etikette',
                        changeGroupingOptions: 'Ändern Sie die Gruppierungsoptionen.',
                        add: 'HINZUFÜGEN',
                        groupBy: 'Gruppiere nach',
                        andOn: 'Und weiter',
                        chooseField: 'Wähle Feld',
                        ok: 'OK',
                        cancel: 'Stornieren',
                        close: 'Schließen',
                        errorMessage: {
                            nameErrorMessage: "Bitte geben Sie den Namen ein",
                            expressionErrorMessage: 'Wählen Sie einen Wert für ein Ausdrucksfeld'
                        }
                    },
                    alertMessage: {
                        yes: 'Ja',
                        no: 'Nein',
                        showDetails: 'Zeige Details',
                        hideDetails: 'Details ausblenden',
                        close: 'Schließen'
                    },
                    parameter: {
                        listPanel: {
                            headerText: 'Parameter',
                            newParameter: 'NEU PARAMETER',
                            editMenu: {
                                edit: 'Bearbeiten',
                                remove: 'Löschen'
                            },
                            alertTitle: 'Parameter'
                        },
                        configurationPanel: {
                            newHeaderText: 'NEU PARAMETER',
                            editHeaderText: 'BEARBEITEN PARAMETER',
                            nameLabel: 'Name',
                            promptLable: 'Prompt',
                            dataTypeLable: 'Data Type',
                            blankValueLable: 'Leerwert zulassen("")',
                            nullValueLable: 'NULL-Wert zulassen',
                            multipleValueLable: 'Erlaube mehrere Werte',
                            visibilityLable: 'Sichtweite',
                            assignValueLable: 'Wert zuweisen >>',
                            save: 'Sparen',
                            cancel: 'Stornieren',
                            visibility: {
                                visible: 'Sichtbar',
                                hidden: 'Versteckt',
                                internal: 'Intern'
                            },
                            dataType: {
                                stringType: 'Schnur',
                                booleanType: 'Boolesch',
                                dateTimeType: 'Terminzeit',
                                integerType: 'Ganze Zahl',
                                floatType: 'Schweben'
                            }
                        },
                        errorMessage: {
                            nameField: "Bitte geben Sie den Namen ein",
                            promptField: 'Bitte geben Sie den Wert ein',
                            nameAlreadyExists: 'Der Parametername existiert bereits'
                        },
                        warningMessage: {
                            specialCharacter: 'Name sollte keine Leerzeichen und Sonderzeichen enthalten',
                            multipleValueAlert: 'Mehrere Standardwerte wurden angegeben. Der Parameter lässt mehrere Werte nicht zu. ',
                            nullValueAlert: 'Im Wertfeld wurde ein Nullwert angegeben. Der Parameter lässt keine Nullwerte zu.'
                        },
                        alertMessage: {
                            confirmNullCheck: 'Verfügbare oder Standardwerte enthalten möglicherweise einen Nullwert. Möchten Sie das Kontrollkästchen "Nullwert zulassen" aktivieren?',
                            confirmBlankValue: 'Verfügbare oder Standardwerte enthalten möglicherweise einen leeren Wert, Möchten Sie das Kontrollkästchen für den leeren Wert aktivieren?',
                            dataTypeChange: 'Wenn Sie den Datentyp ändern, werden Änderungen an den verfügbaren und Standardwerten verwerfen. Möchten Sie den Datentyp trotzdem ändern ?',
                            deleteAlert: 'Löschen Sie den Berichtsparameter'
                        },
                        assignData: {
                            title: 'Parameter',
                            availableValue: 'Verfügbarer Wert',
                            defaultValue: 'Standardwert',
                            none: 'Keiner',
                            specify: 'Angeben',
                            query: 'Abfragewert',
                            ok: 'OK',
                            cancel: 'Stornieren',
                            availableFields: {
                                specifyDescriptionText: 'Fügen Sie die verfügbaren Werte für die Parameter hinzu:',
                                queryDescriptionText: 'Wählen Sie den Datensatz und die Felder für die verfügbaren Werte aus:',
                                nameFieldWaterMark: 'Etikette',
                                valueFieldWaterMark: 'Wert'
                            },
                            defaultFields: {
                                specifyDescriptionText: 'Fügen Sie die Standardwerte für die Parameter hinzu:',
                                queryDescriptionText: 'Wählen Sie den Datensatz und die Felder für die Standardwerte aus:',
                                defValueWaterMark: 'Wählen Sie Standardwert'
                            },
                            datasetWaterMark: 'Wählen Sie Datensatzwert',
                            valueWaterMark: 'Wählen Sie Wert',
                            lableWaterMark: 'Wählen Sie Bezeichnung',
                            add: 'HINZUFÜGEN',
                            datasetLableText: 'Datensatz',
                            valueLableText: 'Wertfeld',
                            labelFieldText: 'Beschriftungsfeld',
                            errorMessage: {
                                boolTypeCheck: 'Wert ist kein boolescher Wert. ',
                                dateTypeCheck: 'Wert ist ein ungültiges Datumsformat. ',
                                intTypeCheck: 'Wert ist keine ganze Zahl. ',
                                floatTypeCheck: 'Wert ist kein Float. ',
                                multipleValuesCheck: 'Ein mehrwertiger Parameter darf keine Nullwerte enthalten',
                                datasetFieldCheck: 'Datensatzfeld ist erforderlich. ',
                                valueFieldCheck: 'Wertfeld ist erforderlich. ',
                                syntaxLabelField: 'Der eingegebene Wert im Beschriftungsfeld ist keine gültige Tokensyntax. ',
                                syntaxValueField: 'Der eingegebene Wert im Wertfeld ist keine gültige Tokensyntax. ',
                                blankValueCheck: 'Das Wertfeld ist leer. Der Parameter lässt keine leeren Werte zu.',
                            },
                            closeToolTip: 'Schließen'
                        }
                    },
                    formatData: {
                        title: 'Format Dialog',
                        typeSelect: 'Art',
                        typeFormat: {
                            numberType: {
                                numberType: 'Nummer',
                                decimalPlaces: 'Nachkommastellen',
                                negativeValues: 'Negative Werte',
                                showZeroAs: {
                                    showZeroAs: 'Zeige Null als',
                                    none: '(keiner)'
                                },
                                representation: 'Darstellung',
                                repDropDwn: {
                                    thousands: 'Tausende',
                                    millions: 'Millionen',
                                    billions: 'Milliarden',
                                },
                                useRegionFormating: 'Verwenden Sie regionale Formatierung',
                                use1000Separator: 'Verwenden Sie 1000 Trennzeichen (,)'
                            },
                            currency: {
                                currencyType: 'Währung',
                                decimalPlaces: 'Nachkommastellen',
                                negativeValues: 'Negative Werte',
                                cultureCurrency: 'Währung Kultur',
                                showZeroAs: {
                                    none: '(keiner)'
                                },
                                representation: 'Darstellung',
                                repDropDwn: {
                                    thousands: 'Tausende',
                                    millions: 'Millionen',
                                    billions: 'Milliarden',
                                },
                                useRegionFormating: 'Verwenden Sie regionale Formatierung',
                                use1000Separator: 'Verwenden Sie 1000 Trennzeichen (,)',
                                includeSpace: 'Ein Leerzeichen einfügen'
                            },
                            date: {
                                dateType: 'Datum',
                                date: 'Datum'
                            },
                            time: {
                                timeType: 'Zeit',
                                time: 'Zeit'
                            },
                            percentage: {
                                percentageType: 'Prozentsatz',
                                decimalPlaces: 'Nachkommastellen',
                                includeSpace: 'Ein Leerzeichen einfügen'
                            },
                            scientific: {
                                scientificType: 'Wissenschaftlich',
                                decimalPlaces: 'Nachkommastellen'
                            },
                            custom: {
                                customType: 'Brauch',
                                customFormat: 'Benutzerdefiniertes Format'
                            },
                        },
                        preview: 'Vorschau',
                        ok: 'OK',
                        cancel: 'Stornieren',
                        close: 'Schließen'
                    },
                    expression: {
                        title: 'Ausdruck',
                        descriptionText: 'Setze Ausdruck für : ',
                        optionLabel: 'Optionen',
                        dataLabel: 'DATEN',
                        descritionLabel: 'Beschreibung',
                        exampleLabelText: 'Beispiel',
                        ok: 'Ok',
                        cancel: 'Stornieren',
                        closeToolTip: 'Schließen',
                        textAreaWaterMark: 'Ausdruck',
                        category: {
                            builtInFields: 'Integrierte Felder',
                            operators: 'Betreiber',
                            functions: 'Funktionen'
                        },
                        parameters: 'Parameter',
                        optionWaterMark: 'Wähle eine Option',
                        dataWaterMark: 'Wählen Sie eine Daten',
                        reportData: 'Keine Berichtdaten gefunden',
                        description: {
                            executionTime: "Datum und Uhrzeit, zu der die Berichte ausgeführt werden.",
                            overallPageNumber: 'Die aktuelle Gesamtseitenzahl kann nur in der Kopf- oder Fußzeile der Seite verwendet werden.',
                            overallTotalPages: 'Die Gesamtzahl der Seiten im Bericht kann nur in der Kopf- und Fußzeile der Seite verwendet werden.',
                            pageName: 'Der Name der aktuellen Seite im Bericht kann nur in der Kopf- oder Fußzeile der Seite verwendet werden.',
                            pageNumber: 'Die aktuelle Seitenzahl, die durch Seitenumbrüche zurückgesetzt werden kann',
                            isInteractive: 'Ein boolescher Wert, der angibt, ob die aktuelle Rendering-Anfrage ein interaktives Format verwendet.',
                            renderName: 'Der Name des Renderers, der in der RSReportServer-Konfigurationsdatei registriert ist.',
                            reportFolder: 'Der vollständige Pfad zu dem Ordner mit dem Bericht enthält nicht die Berichtsserver-URL.',
                            reportName: 'Die URL des Berichtsservers, auf dem der Bericht ausgeführt wird.',
                            reportServerUrl: 'Die URL des Berichtsservers, auf dem der Bericht ausgeführt wird.',
                            totalPages: 'Die Gesamtzahl der Seiten in der aktuellen fortlaufenden Seitenfolge kann nur in der Kopf- und Fußzeile der Seite verwendet werden. Die Nummer kann mithilfe von Seitenumbrüchen zurückgesetzt werden.',
                            language: 'Die Sprachen-ID des Clients, der den Bericht ausführt.',
                            userID: 'Die ID des Benutzers, der den Bericht ausführt.',
                            powerNumberType: 'Erhebt eine Zahl an die Macht einer anderen Nummer.',
                            multiply: 'Multipliziert zwei Zahlen.',
                            integerDivision: 'Dividiert zwei Zahlen und gibt eine Ganzzahl zurück.',
                            floatDivision: 'Dividiert zwei Zahlen und gibt einen Fließkommawert zurück. ',
                            modulus: 'Dividiert zwei Zahlen und gibt nur den Rest zurück.',
                            add: 'Fügt zwei Zahlen hinzu und kann zum Verketten von zwei Strings verwendet werden.',
                            difference: 'Gibt die Differenz zwischen zwei Zahlen aus oder gibt den negativen Wert eines numerischen Ausdrucks an.',
                            lesser: 'Weniger als.',
                            lesserOrEqual: 'Gleich oder kleiner als.',
                            greater: 'Größer als.',
                            greaterOrEqual: 'Größer als oder gleich wie.',
                            equal: 'Gleich.',
                            notEqual: 'Nicht gleichzusetzen mit.',
                            like: 'Vergleicht zwei Strings. ',
                            isOperator: 'Vergleicht zwei Objektreferenzvariablen.',
                            expression: 'Erzeugt eine String-Verkettung zweier Ausdrücke.',
                            stringType: 'Fügt zwei Zahlen hinzu und kann zum Verketten von zwei Strings verwendet werden.',
                            and: 'Führt eine logische Konjunktion für zwei boolesche Ausdrücke oder eine bitweise Konjunktion für zwei aus ',
                            not: 'Führt eine logische Negation für einen booleschen Ausdruck oder eine bitweise Negation durch auf einem numerischen Ausdruck.',
                            or: 'Wird verwendet, um eine logische Disjunktion für zwei boolesche Ausdrücke oder eine bitweise Disjunktion für zwei auszuführen numerische Werte.',
                            xor: 'Führt eine logische Ausschlussoperation für zwei boolesche Ausdrücke oder bitweise aus Ausschluss für zwei numerische Ausdrücke.',
                            andAlso: 'Führt eine logische Verknüpfung für zwei Ausdrücke aus.',
                            orElse: 'Wird verwendet, um eine logische Disjunktion für zwei Ausdrücke kurzzuschließen.',
                            left: 'Führt eine arithmetische Linksverschiebung für ein Bitmuster durch.',
                            right: 'Führt eine arithmetische Rechtsverschiebung für ein Bitmuster durch.',
                            asc: 'Gibt einen ganzzahligen Wert zurück, der den einem Zeichen entsprechenden Zeichencode darstellt.',
                            ascW: 'Gibt einen ganzzahligen Wert zurück, der den einem Zeichen entsprechenden Zeichencode darstellt.',
                            chr: 'Gibt das Zeichen zurück, das dem angegebenen Zeichencode zugeordnet ist.',
                            chrW: 'Gibt das Zeichen zurück, das dem angegebenen Zeichencode zugeordnet ist.',
                            filter: 'Gibt ein nullbasiertes Array zurück, das basierend auf angegebenen Filterkriterien eine Teilmenge eines Zeichenfolgenarrays enthält.',
                            formatStringType: 'Gibt eine formatierte Zeichenfolge gemäß den Anweisungen in einem Formatzeichenfolgenausdruck zurück.',
                            currency: 'Gibt einen Ausdruck zurück, der als Währungswert formatiert wurde, indem das Währungssymbol verwendet wird. in der Systemsteuerung definiert.',
                            dateTime: 'Gibt einen Zeichenfolgenausdruck zurück, der einen Datums- / Uhrzeitwert darstellt.',
                            numberType: 'Gibt einen Ausdruck zurück, der als Zahl formatiert ist.',
                            percent: 'Gibt einen Ausdruck zurück, der als Prozentsatz formatiert ist (dh mit 100 multipliziert).',
                            getChar: 'Gibt einen char-Wert zurück, der das Zeichen aus dem angegebenen Index in der angegebenen Zeichenfolge darstellt.',
                            inStr: 'Gibt eine Ganzzahl zurück, die die Startposition des ersten Auftretens einer Zeichenfolge innerhalb einer anderen angibt.',
                            inStrRev: 'Returns the position of the first occurrence of one string within another, starting from the right side der Schnur.',
                            join: 'Gibt eine Zeichenfolge zurück, die durch Verbinden einer Anzahl von Teilzeichenfolgen in einem Array erstellt wurde.',
                            lCase: 'Gibt eine Zeichenfolge oder ein Zeichen zurück, die in Kleinbuchstaben konvertiert wurden.',
                            leftStringType: 'Gibt eine Zeichenfolge zurück, die eine angegebene Anzahl von Zeichen von der linken Seite einer Zeichenfolge enthält.',
                            stringLength: 'Gibt eine Ganzzahl zurück, die entweder die Anzahl der Zeichen in einer Zeichenfolge oder die Zahl enthält. ',
                            lSet: 'Gibt eine linksbündige Zeichenfolge zurück, die die angegebene Zeichenfolge enthält, die an die angegebene Länge angepasst wurde.',
                            leftTrim: 'Gibt die Zeichenfolge zurück, ohne Leerzeichen auf der linken Seite in der angegebenen Zeichenfolge.',
                            middle: 'Gibt eine Zeichenfolge mit einer angegebenen Anzahl von Zeichen aus einer Zeichenfolge zurück.',
                            replace: 'Gibt eine Zeichenfolge zurück, in der eine angegebene Teilzeichenfolge durch eine andere ersetzt wurde. ',
                            rightString: 'Gibt eine Zeichenfolge zurück, die eine angegebene Anzahl von Zeichen von der rechten Seite einer Zeichenfolge enthält.',
                            rightSet: 'Gibt eine rechtsbündige Zeichenfolge zurück, die die angegebene Zeichenfolge enthält, die an die angegebene Länge angepasst wurde.',
                            rightTrim: 'Gibt die Zeichenfolge ohne rechte nachstehende Leerzeichen in der angegebenen Zeichenfolge zurück.',
                            stringSpace: 'Gibt eine Zeichenfolge zurück, die aus der angegebenen Anzahl von Leerzeichen besteht.',
                            splitString: 'Gibt ein nullbasiertes, eindimensionales Array zurück, das eine angegebene Anzahl von Teilzeichenfolgen enthält.',
                            strComp: 'Gibt -1, 0 oder 1 basierend auf dem Ergebnis eines Zeichenfolgenvergleichs zurück. ',
                            strConv: 'Gibt eine Zeichenfolge zurück, die wie angegeben konvertiert wurde.',
                            duplicateString: 'Gibt eine Zeichenfolge oder ein Objekt zurück, das aus dem angegebenen Zeichen besteht und die angegebene Anzahl von Malen wiederholt wurde.',
                            strReverse: 'Gibt eine Zeichenfolge zurück, in der die Zeichenreihenfolge einer angegebenen Zeichenfolge umgekehrt ist.',
                            trim: 'Gibt die Zeichenfolge ohne nachgestellte Leerzeichen in der angegebenen Zeichenfolge zurück.',
                            upperCase: 'Gibt eine Zeichenfolge oder ein Zeichen zurück, die die angegebene Zeichenfolge in Großbuchstaben konvertiert.',
                            cDate: 'In Datum umrechnen.',
                            dateAdd: 'Gibt einen Datumswert zurück, der Datums- und Uhrzeitwerte enthält, denen ein angegebenes Zeitintervall hinzugefügt wurde.',
                            dateDiff: 'Gibt einen langen Wert zurück, der die Anzahl der Zeitintervalle zwischen zwei Datumswerten angibt.',
                            datePart: 'Gibt einen ganzzahligen Wert zurück, der die angegebene Komponente eines bestimmten Datums enthält. ',
                            dateSerial: 'Gibt einen Datumswert zurück, der ein angegebenes Jahr, einen bestimmten Monat und einen angegebenen Tag darstellt, wobei die Zeitinformationen auf festgelegt sind Mitternacht (00:00:00).',
                            dateString: 'Gibt einen Zeichenfolgenwert zurück, der das aktuelle Datum gemäß Ihrem System darstellt.',
                            dateValue: 'Gibt einen Datumswert zurück, der die Datumsinformationen enthält, die durch eine Zeichenfolge mit der Zeitinformation dargestellt werden. ',
                            day: 'Gibt einen Ganzzahlwert von 1 bis 31 zurück, der den Tag des Monats darstellt.',
                            format: 'Gibt einen Zeichenfolgenausdruck zurück, der den Datums- / Uhrzeitwert darstellt. ',
                            hour: 'Gibt einen Ganzzahlwert von 0 bis 23 zurück, der die Stunde des Tages darstellt.',
                            minute: 'Gibt einen Ganzzahlwert von 0 bis 59 zurück, der die Minute der Stunde darstellt. ',
                            month: 'Gibt einen Ganzzahlwert von 1 bis 12 zurück, der den Monat des Jahres darstellt.',
                            monthName: 'Gibt einen Zeichenfolgenwert zurück, der den Namen des angegebenen Monats enthält.',
                            now: 'Gibt einen Datumswert zurück, der das aktuelle Datum und die Uhrzeit gemäß Ihrem System enthält.',
                            second: 'Gibt einen Ganzzahlwert von 0 bis 59 zurück, der die Sekunde der Minute darstellt.',
                            timeOfDay: 'Gibt einen Datumswert zurück, der die aktuelle Uhrzeit gemäß Ihrem System enthält, oder legt diesen fest.',
                            timer: 'Gibt einen doppelten Wert zurück, der die Anzahl der seit Mitternacht verstrichenen Sekunden darstellt.',
                            timeSerial: 'Gibt einen Datumswert zurück, der eine angegebene Stunde, Minute und Sekunde darstellt, wobei die Datumsinformationen relativ zum 1. Januar des Jahres 1 festgelegt werden.',
                            timeString: 'Gibt einen Zeichenfolgenwert zurück oder legt diesen fest, der die aktuelle Uhrzeit gemäß Ihrem System darstellt.',
                            timeValue: ' Gibt einen Datumswert zurück, der die Zeitinformationen enthält, die durch eine Zeichenfolge dargestellt werden, wobei die Datumsinformationen auf den 1. Januar des Jahres 1 festgelegt sind.',
                            timeToday: 'Gibt einen Datumswert zurück, der das aktuelle Datum gemäß Ihrem System enthält.',
                            timeWeekday: 'Gibt einen ganzzahligen Wert zurück, der eine Zahl enthält, die den Wochentag darstellt.',
                            timeWeekdayName: 'Gibt einen Zeichenfolgenwert zurück, der den Namen des angegebenen Wochentages enthält.',
                            year: 'Gibt einen ganzzahligen Wert zwischen 1 und 9999 für das Jahr zurück.',
                            abs: 'Gibt den absoluten Wert einer Gleitkommazahl mit einfacher Genauigkeit zurück.',
                            acos: 'Gibt den Winkel zurück, dessen Kosinus die angegebene Zahl ist.',
                            asin: 'Gibt den Winkel zurück, dessen Sinus die angegebene Zahl ist.',
                            atan: 'Gibt den Winkel zurück, dessen Tangente die angegebene Zahl ist.',
                            atan2: 'Gibt den Winkel zurück, dessen Tangente der Quotient zweier angegebener Zahlen ist.',
                            bigMultiply: 'Produziert das vollständige Produkt von zwei 32-Bit-Nummern.',
                            ceiling: 'Gibt die kleinste Ganzzahl zurück, die größer oder gleich der angegebenen Ganzzahl ist.',
                            cos: 'Gibt den Kosinus des angegebenen Winkels zurück.',
                            cosh: 'Gibt den Hyperbelkosinus des angegebenen Winkels zurück.',
                            exponent: 'Gibt e auf die angegebene Potenz zurück.',
                            fixNumberType: 'Gibt einen ganzzahligen Teil einer Zahl zurück.',
                            floor: 'Gibt die größte Ganzzahl zurück, die kleiner oder gleich der angegebenen ist.',
                            integer: 'Gibt einen ganzzahligen Teil einer Zahl zurück.',
                            logrithm: 'Gibt den natürlichen (Basis e) Logarithmus einer angegebenen Zahl zurück.',
                            logrithm10: 'Gibt den natürlichen (Basis e) Logarithmus einer angegebenen Anzahl zurück.',
                            maximum: 'Gibt den Maximalwert von allen Nicht-Null-Werten des angegebenen Ausdrucks zurück.',
                            minimum: 'Gibt den Minimalwert aus allen Nicht-Null-Werten des angegebenen Ausdrucks zurück.',
                            power: 'Gibt eine angegebene Zahl mit der angegebenen Potenz zurück.',
                            random: 'Gibt eine zufällige Zahl von einzelnen Typen zurück.',
                            round: 'Rundet einen Gleitkommawert mit doppelter Genauigkeit auf die nächste Ganzzahl.',
                            sign: 'Gibt einen Wert zurück, der das Vorzeichen einer 8-Bit-Ganzzahl mit Vorzeichen angibt.',
                            sin: 'Gibt den Sinus des angegebenen Winkels zurück.',
                            sinh: 'Gibt den Hyperbelsinus des angegebenen Winkels zurück.',
                            squareRoot: 'Gibt die Quadratwurzel einer angegebenen Zahl zurück.',
                            tangent: 'Gibt den Tangens des angegebenen Winkels zurück.',
                            tangentH: 'Gibt den Hyperbeltangens des angegebenen Winkels zurück.',
                            isArray: 'Gibt einen booleschen Wert zurück, der angibt, ob eine Variable auf ein Array verweist.',
                            isDate: 'Gibt einen booleschen Wert zurück, der angibt, ob ein Ausdruck einen gültigen Wert darstellt.',
                            isNothing: 'Gibt einen booleschen Wert zurück, der angibt, ob ein Ausdruck kein Objekt enthält.',
                            isNumeric: 'Gibt einen booleschen Wert zurück, der angibt, ob ein Ausdruck als Zahl ausgewertet werden kann',
                            flowChoose: 'Wählt einen Wert aus einer Liste von Argumenten aus und gibt ihn zurück.',
                            flowIIf: 'Gibt abhängig von der Auswertung eines Ausdrucks eines von zwei Objekten zurück.',
                            switchFlow: 'Evaluiert eine Liste von Ausdrücken und gibt einen entsprechenden Objektwert zurück bis zum ersten Ausdruck in der Liste, der wahr ist.',
                            avg: 'Gibt den Durchschnitt aller Nicht-Null-Werte aus dem angegebenen Ausdruck zurück.',
                            count: 'Gibt eine Anzahl der Werte aus dem angegebenen Ausdruck zurück.',
                            countDistinct: 'Gibt eine Anzahl aller eindeutigen Werte von der angegebenen zurück.',
                            countRows: 'Gibt eine Anzahl von Zeilen innerhalb des angegebenen Bereichs zurück.',
                            first: 'Gibt den ersten Wert aus dem angegebenen Ausdruck zurück.',
                            last: 'Gibt den letzten Wert aus dem angegebenen Ausdruck zurück.',
                            standardDev: 'Gibt die Standardabweichung aller Nicht-Null-Werte des angegebenen Werts zurück.',
                            standardDevP: 'Gibt die Populationsstandardabweichung aller Nicht-Null-Werte von der angegebene Ausdruck.',
                            sum: 'Gibt eine Summe der Werte des angegebenen Ausdrucks zurück.',
                            variance: 'Gibt die Varianz aller Nicht-Null-Werte des angegebenen Ausdrucks zurück.',
                            varianceP: 'Gibt die Populationsvarianz aller Nicht-Null-Werte des angegebenen Ausdrucks zurück.',
                            runningValue: 'Verwendet eine angegebene Funktion, um ein laufendes Aggregat des angegebenen Ausdrucks zurückzugeben.',
                            aggregate: 'Gibt ein benutzerdefiniertes Aggregat des angegebenen Ausdrucks zurück, wie vom Datenprovider definiert.',
                            doubleDeclining:'Gibt einen doppelten Wert zurück, der die Abschreibung eines Vermögenswerts für einen bestimmten Zeitraum unter Verwendung der Methode mit degressivem Saldo oder einer anderen von Ihnen angegebenen Methode angibt.',
                            futureValue: 'Gibt einen doppelten Wert zurück, der den zukünftigen Wert einer Rente auf der Grundlage von regelmäßigen festen Zahlungen und einem festen Zinssatz angibt.',
                            interestPayment: 'Gibt einen doppelten Wert zurück, der die Zinszahlung für einen bestimmten Zeitraum einer Annuität auf der Grundlage periodischer fester Zahlungen und eines festen Zinssatzes angibt.',
                            numberOfPeriods: 'Gibt einen doppelten Wert zurück, der die Anzahl der Perioden für eine Annuität auf der Grundlage von regelmäßigen festen Zahlungen und einem festen Zinssatz angibt.',
                            annuityPayment: 'Gibt einen doppelten Wert zurück, der die Zahlung für eine Annuität festlegt, die auf periodischen festen Zahlungen und einem festen Zinssatz basiert.',
                            principalPayment: 'Gibt ein Double zurück, in dem die Kapitalzahlung für einen bestimmten Zeitraum einer Annuität basierend auf regelmäßigen festen Zahlungen und einem festen Zinssatz angegeben wird.',
                            presentValue: "Gibt einen doppelten Wert zurück, der den Barwert einer Rente auf der Grundlage von regelmäßigen, festen Zahlungen, die in der Zukunft zu zahlen sind, und eines festen Zinssatzes angibt.",
                            rateOfInterest: 'Gibt einen doppelten Wert zurück, der den Zinssatz pro Periode für eine Annuität angibt.',
                            straightLine: 'Gibt einen doppelten Wert zurück, der die lineare Abschreibung eines Vermögenswertes für eine einzelne Periode angibt.',
                            sumOfYearsDigits: 'Gibt einen doppelten Wert zurück, der die Abwertung der Summe der Jahreszahlen eines Vermögenswerts für einen bestimmten Zeitraum angibt.',
                            convertBool: 'In Boolean umwandeln.',
                            convertByte: 'In Byte umwandeln.',
                            convertChar: 'In Char umwandeln',
                            convertDate: 'In Datum umrechnen.',
                            convertDouble: 'In Doppel konvertieren.',
                            convertDecimal: 'In Dezimal konvertieren.',
                            convertInteger: 'In Ganzzahl konvertieren.',
                            convertLong: 'Zu lang konvertieren.',
                            convertObject: 'In Objekt konvertieren.',
                            convertShort: 'Konvertieren zu kurz.',
                            convertSingle: 'In Einzelbild konvertieren.',
                            convertString: 'In Zeichenfolge konvertieren',
                            fix: 'Gibt einen ganzzahligen Teil einer Zahl zurück.',
                            hexaDecimal: 'Gibt eine Zeichenfolge zurück, die den Hexadezimalwert einer Zahl darstellt.',
                            integerPortion: 'Gibt einen ganzzahligen Teil einer Zahl zurück.',
                            octal: 'Gibt eine Zeichenfolge zurück, die den Oktalwert einer Zahl darstellt.',
                            stringOfNumber: 'Gibt eine Zeichenfolge zurück, die eine Zahl darstellt.',
                            stringAsNumeric: 'Gibt eine Zahl in einer Zeichenfolge als numerischen Wert des entsprechenden Typs zurück.',
                            inScope: 'Gibt true zurück, wenn die aktuelle Instanz innerhalb des angegebenen Bereichs liegt.',
                            depthLevel: 'Gibt eine auf Null basierende ganze Zahl zurück, die die aktuelle Tiefe darstellt.',
                            previous: 'Gibt den Wert des Ausdrucks für die vorherige Datenzeile zurück.',
                            rowNumber: 'Gibt eine fortlaufende Anzahl aller Zeilen im angegebenen Bereich zurück.'
                        }
                    },
                    dataAssign: {
                        measures: 'Maße',
                        dimensions: 'Maße',
                        search: 'Suche',
                        xValue: 'X Wert(s)',
                        yValue: 'Y Wert(s)',
                        value: 'Wert(s)',
                        column: 'Säule',
                        row: 'Reihe(s)',
                        size: 'Größe(s)',
                        aggregate: 'Aggregat',
                        filters: 'Filter',
                        sorts: 'Sortiert',
                        groups: 'Gruppen',
                        expression: 'Ausdruck',
                        dragOnDrop: 'Ziehen und loslassen'
                    },
                    reportProperty: {
                        basicSettings: {
                            categoryName: 'Grundeinstellungen',
                            background: 'Hintergrund',
                            borderTypes: {
                                border: 'Rand',
                                borderLeft: 'Links',
                                borderTop: 'Oben',
                                borderRight: 'Recht',
                                borderBottom: 'Unterseite'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Keiner',
                                double: 'Doppelt',
                                dashed: 'Gestrichelt',
                                dotted: 'Gepunktet'
                            }
                        },
                        generalSettings: {
                            categoryName: 'Allgemeines',
                            printFirstPage: 'Auf der ersten Seite drucken',
                            printLastPage: 'Drucken Sie auf der letzten Seite'
                        },
                        size: {
                            sizeLabel: 'Größe',
                            paddingTypes: {
                                padding: 'Polsterung',
                                paddingLeft: 'Links',
                                paddingTop: 'Oben',
                                paddingRight: 'Recht',
                                paddingBottom: 'Unterseite'
                            }
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Links',
                            top: 'Oben',
                            sizeLabel: 'Größe',
                            width: 'Breite',
                            height: 'Höhe'
                        },
                        margin: {
                            categoryName: 'Margin',
                            categoryHeader: 'Margin',
                            types: {
                                left: 'Links',
                                right: 'Recht',
                                bottom: 'Unterseite',
                                top: 'Oben'
                            }
                        },
                        paperSize: {
                            orientation: 'Orientierung',
                            header: 'Papier größe',
                            label: 'Papier größe',
                            orientationTypes: {
                                landScape: 'Landschaft',
                                portrait: 'Porträt'
                            },
                            types: {
                                a3Size: 'A3',
                                a4Size: 'A4',
                                b4Size: 'B4(JIS)',
                                b5Size: 'B5(JIS)',
                                envelope: 'Briefumschlag #10',
                                envelopeMonarch: 'Umschlag Monarch',
                                executive: 'Exekutive',
                                legal: 'Legal',
                                letter: 'Brief',
                                tabloid: 'Boulevardzeitung',
                                custom: 'Brauch'
                            }
                        }
                    },
                    gridProperty: {
                        basicSettings: {
                            categoryName: 'Grundeinstellungen',
                            horizontalGridLine: "Horizontale Gitterlinie",
                            verticalGridLine: 'Vertikale Gitterlinie',
                            filters: 'Filter',
                            sorts: 'Sortiert'
                        },
                        columnSettings: {
                            categoryName: 'Spalteneinstellungen',
                            chooseColumn: 'Spalte wählen',
                            columnName: 'Spaltenname',
                            format: 'Format',
                            enableLink: 'Link aktivieren',
                            headerStyle: 'Kopfzeilenstil',
                            cellStyle: 'Zellstil',
                            summaryStyle: 'Zusammenfassung Stil'
                        },
                        rowSettings: {
                            categoryName: 'Zeileneinstellungen',
                            chooseRow: 'Wähle Zeile',
                            summaryColumns: 'Zusammenfassungsspalten',
                            summaryFields: {
                                column: 'Säule',
                                expression: 'Ausdruck'
                            }
                        },
                        appearance: {
                            categoryName: 'Aussehen',
                            showHeader: 'Kopfzeile anzeigen',
                            borderTypes: {
                                border: 'Rand',
                                borderLeft: 'Links',
                                borderTop: 'Oben',
                                borderRight: 'Recht',
                                borderBottom: 'Unterseite'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Keiner',
                                double: 'Doppelt',
                                dashed: 'Gestrichelt',
                                dotted: 'Gepunktet'
                            },
                            cellBorder: "Zellgrenze",
                            AlterRow: "Alternative Reihe",
                            AlterBackground: 'Alternativer Hintergrund',
                        },
                        pageBreak: {
                            categoryName: 'Seitenumbruch',
                            enablePageBreak: 'Seitenumbruch aktivieren',
                            breakLocation: {
                                categoryName: 'Ort brechen',
                                none: 'Keiner',
                                start: 'Anfang',
                                end: 'Anfang',
                                startAndEnd: 'Start und Ende',
                                between: 'Zwischen'
                            },
                            pageNumberReset: 'Seitenzahl zurücksetzen',
                        },
                        miscellaneous: {
                            categoryName: 'Sonstiges',
                            noRowsMessage: 'Keine Zeilen Nachricht',
                            pageName: 'Seitenname',
                            keepTogether: 'Zusammen halten',
                            repeatColumnHeaders: 'Spaltenüberschriften wiederholen',
                            fixedColumnHeaders: 'Feste Spaltenüberschriften',
                            fixedRowHeaders: 'Fixed Row Header',
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Links',
                            top: 'Oben',
                            sizeLabel: 'Größe',
                            width: 'Breite',
                            height: 'Höhe'
                        },
                        visibility: {
                            categoryName: 'Sichtweite',
                            visible: 'Sichtbar'
                        },
                        font: {
                            categoryName: 'Schriftart',
                            defaultStyle: 'Standard',
                            normal: 'Normal',
                            italic: 'Kursiv'
                        },
                        fontStyle: {
                            categoryName: 'Schriftstil',
                            defaultStyle: 'Standard',
                            normal: 'Normal',
                            thin: 'Dünn',
                            extraLight: 'Extra-Licht',
                            light: 'Licht',
                            medium: 'Mittel',
                            semiBold: 'Semi Fett',
                            bold: 'Fett gedruckt',
                            extraBold: 'Extra fett',
                            heavy: 'Schwer'
                        },
                        textDecoration: {
                            categoryName: 'Textdekoration',
                            defaultStyle: 'Standard',
                            none: 'Keiner',
                            underline: 'Unterstreichen',
                            lineThrough: 'Linie durch',
                            overline: 'Überstreichen'
                        },
                        alignment: {
                            categoryName: 'Ausrichtung',
                            textAlignment: {
                                categoryName: 'Textausrichtung',
                                defaultStyle: 'Standard',
                                left: 'Links',
                                center: 'Center',
                                right: 'Recht'
                            },
                            verticalAlignment: {
                                categoryName: 'Vertikale Ausrichtung',
                                defaultStyle: 'Standard',
                                top: 'Oben',
                                middle: 'Mitte',
                                bottom: 'Unterseite'
                            }
                        },
                        padding: {
                            padding: 'Polsterung',
                            paddingLeft: 'Links',
                            paddingTop: 'Oben',
                            paddingRight: 'Recht',
                            paddingBottom: 'Unterseite'
                        },
                        enableSummaryRow: 'Zusammenfassungszeile aktivieren'
                    },
                    pivotGridProperty: {
                        basicSettings: {
                            categoryName: 'Grundeinstellungen',
                            horizontalGridLine: "Horizontale Gitterlinie",
                            verticalGridLine: 'Vertikale Gitterlinie',
                            filters: 'Filter',
                            sorts: 'Sortiert'
                        },
                        format: 'Format',
                        link: 'Verknüpfung',
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'Links',
                            top: 'Oben',
                            sizeLabel: 'Größe',
                            width: 'Breite',
                            height: 'Höhe'
                        },
                        visibility: {
                            categoryName: 'Sichtweite',
                            visible: 'Sichtbar'
                        },
                        font: {
                            categoryName: 'Schriftart',
                            defaultStyle: 'Standard',
                            normal: 'Normal',
                            italic: 'Kursiv'
                        },
                        fontStyle: {
                            categoryName: 'Schriftstil',
                            defaultStyle: 'Standard',
                            normal: 'Normal',
                            thin: 'Dünn',
                            extraLight: 'Extra-Licht',
                            light: 'Licht',
                            medium: 'Mittel',
                            semiBold: 'Semi Fett',
                            bold: 'Fett gedruckt',
                            extraBold: 'Extra fett',
                            heavy: 'Schwer'
                        },
                        textDecoration: {
                            categoryName: 'Textdekoration',
                            defaultStyle: 'Standard',
                            none: 'Keiner',
                            underline: 'Unterstreichen',
                            lineThrough: 'Linie durch',
                            overline: 'Überstreichen'
                        },
                        alignment: {
                            categoryName: 'Ausrichtung',
                            textAlignment: {
                                categoryName: 'Textausrichtung',
                                defaultStyle: 'Standard',
                                left: 'Links',
                                center: 'Center',
                                right: 'Recht'
                            },
                            verticalAlignment: {
                                categoryName: 'Vertikale Ausrichtung',
                                defaultStyle: 'Standard',
                                top: 'Oben',
                                middle: 'Mitte',
                                bottom: 'Unterseite'
                            }
                        },
                        padding: {
                            padding: 'Polsterung',
                            paddingLeft: 'Links',
                            paddingTop: 'Oben',
                            paddingRight: 'Recht',
                            paddingBottom: 'Unterseite'
                        },
                        appearance: {
                            categoryName: 'Aussehen',
                            showHeader: 'Kopfzeile anzeigen',
                            borderTypes: {
                                border: 'Rand',
                                borderLeft: 'Links',
                                borderTop: 'Oben',
                                borderRight: 'Recht',
                                borderBottom: 'Unterseite'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Keiner',
                                double: 'Doppelt',
                                dashed: 'Gestrichelt',
                                dotted: 'Gepunktet'
                            },
                            cellBorder: "Zellgrenze",
                            AlterRow: "Alternative Reihe",
                            AlterBackground: 'Alternativer Hintergrund',
                        },
                        pageBreak: {
                            categoryName: 'Seitenumbruch',
                            enablePageBreak: 'Seitenumbruch aktivieren',
                            breakLocation: {
                                categoryName: 'Ort brechen',
                                none: 'Keiner',
                                start: 'Anfang',
                                end: 'Anfang',
                                startAndEnd: 'Start und Ende',
                                between: 'Zwischen'
                            },
                            pageNumberReset: 'Seitenzahl zurücksetzen',
                        },
                        miscellaneous: {
                            categoryName: 'Sonstiges',
                            noRowsMessage: 'Keine Zeilen Nachricht',
                            pageName: 'Seitenname',
                            keepTogether: 'Zusammen halten',
                            repeatColumnHeaders: 'Spaltenüberschriften wiederholen',
                            fixedColumnHeaders: 'Feste Spaltenüberschriften',
                            fixedRowHeaders: 'Feste Zeilenüberschrift',
                            repeatRowHeaders: 'Wiederhole Zeilenköpfe'
                        },
                        summarySettings: {
                            categoryName: 'Zusammenfassung Einstellungen',
                            enableColumn: 'Zusammenfassung aktivieren',
                            columnStyle: 'Zusammenfassung Spaltenstil',
                            columnBorder: 'Zusammenfassung Spaltengrenze',
                            chooseSummary: 'Wählen Sie Zusammenfassung',
                            summaryColumns: 'Zusammenfassungsspalten',
                            enableRow: 'Zusammenfassungszeile aktivieren',
                            rowStyle: 'Zusammenfassung Zeilenstil',
                            rowBorder: 'Zusammenfassung Zeilenrand'
                        },
                        groupSettings: {
                            summaryRows: 'Zusammenfassung der Zeilen',
                            summaryStyle: 'Zusammenfassung Stil',
                            summaryBorder: 'Zusammenfassung Grenze',
                            cellStyle: 'Zellstil',
                            cellBorder: "Zellgrenze",
                            summaryTable: {
                                column: 'Säule',
                                expression: 'Ausdruck'
                            }
                        },
                        columnGroupSettings: {
                            categoryName: 'Spaltengruppeneinstellungen',
                            chooseGroup: 'Spaltengruppe auswählen'
                        },
                        rowGroupSettings: {
                            categoryName: 'Zeilengruppeneinstellungen',
                            chooseRowGroup: 'Wählen Sie Zeilengruppe',
                            rowName: 'Zeilenname'
                        },
                        columnSettings: {
                            categoryName: 'Spalteneinstellungen',
                            chooseColumn: 'Spalte wählen',
                            header: 'Header',
                            headerStyle: 'Kopfzeilenstil'
                        },
                        rowSettings: {
                            categoryName: 'Zeileneinstellungen',
                            chooseRow: 'Wähle Zeile'
                        },
                        cornerCellSettings: {
                            categoryName: 'Eckzelleneinstellungen',
                            cellLabel: "Zell-Label"
                        }
                    },
                    textBoxProperty: {
                        basicSettings: {
                            categoryName: 'Grundeinstellungen',
                            font: {
                                categoryName: 'Schriftart',
                                defaultStyle: 'Standard',
                                normal: 'Normal',
                                italic: 'Kursiv'
                            },
                            fontStyle: {
                                categoryName: 'Schriftstil',
                                defaultStyle: 'Standard',
                                normal: 'Normal',
                                thin: 'Dünn',
                                extraLight: 'Extra-Licht',
                                light: 'Licht',
                                medium: 'Mittel',
                                semiBold: 'Semi Fett',
                                bold: 'Fett gedruckt',
                                extraBold: 'Extra fett',
                                heavy: 'Schwer'
                            },
                            textDecoration: {
                                categoryName: 'Textdekoration',
                                defaultStyle: 'Standard',
                                none: 'Keiner',
                                underline: 'Unterstreichen',
                                lineThrough: 'Linie durch',
                                overline: 'Überstreichen'
                            },
                            format: 'Format'
                        },
                        alignment: {
                            categoryName: 'Ausrichtung',
                            textAlignment: {
                                categoryName: 'Textausrichtung',
                                defaultStyle: 'Standard',
                                left: 'Links',
                                center: 'Center',
                                right: 'Recht'
                            },
                            verticalAlignment: {
                                categoryName: 'Vertikale Ausrichtung',
                                defaultStyle: 'Standard',
                                top: 'Oben',
                                middle: 'Mitte',
                                bottom: 'Unterseite'
                            }
                        },
                        appearance: {
                            categoryName: 'Aussehen',
                            borderTypes: {
                                border: 'Rand',
                                borderLeft: 'Links',
                                borderTop: 'Oben',
                                borderRight: 'Recht',
                                borderBottom: 'Unterseite'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Keiner',
                                double: 'Doppelt',
                                dashed: 'Gestrichelt',
                                dotted: 'Gepunktet'
                            },
                            background: 'Hintergrund'
                        },
                        link: 'Verknüpfung',
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            sizeLabel: 'Größe',
                            left: 'Links',
                            top: 'Oben',
                            width: 'Breite',
                            height: 'Höhe',
                            direction: {
                                categoryName: 'Richtung',
                                leftToRight: 'Links nach rechts',
                                rightToLeft: 'Rechts nach links'
                            }
                        },
                        visibility: {
                            categoryName: 'Sichtweite',
                            visible: 'Sichtbar'
                        },
                        miscellaneous: {
                            categoryName: 'Sonstiges',
                            canGrow: 'Kann wachsen',
                            canShrink: "Kann schrumpfen",
                        },
                        paragraphSettings: {
                            categoryName: 'Absatzeinstellungen',
                            textAlignment: {
                                categoryName: 'Textausrichtung',
                                defaultStyle: 'Standard',
                                left: 'Links',
                                center: 'Center',
                                right: 'Recht'
                            },
                            indent: {
                                categoryName: 'Einzug',
                                leftIndent: 'Links',
                                rightIndent: 'Recht'
                            },
                            space: {
                                categoryName: 'Raum',
                                topSpace: 'Oben',
                                bottomSpace: 'Unterseite'
                            },
                            listLevel: {
                                categoryName: 'Listenebene',
                                zeroLevel: '',
                                oneLevel: '',
                                twoLevel: '',
                                threeLevel: '',
                                fourLevel: ''
                            },
                            listStyle: {
                                categoryName: 'List Style',
                                none: 'Keiner',
                                numbered: 'Nummeriert',
                                bulleted: 'Bulleted'
                            }
                        },
                        padding: {
                            padding: 'Polsterung',
                            paddingLeft: 'Links',
                            paddingTop: 'Oben',
                            paddingRight: 'Recht',
                            paddingBottom: 'Unterseite'
                        },
                        contextMenu: {
                            cut: 'Schnitt',
                            copy: 'Kopieren',
                            paste: 'Einfügen',
                            expression: 'Ausdruck'
                        }
                    },
                    designPanel: {
                        headerText: 'Header',
                        footerText: 'Footer'
                    },
                    queryDesigner: {
                        storeParameter: {
                            title: 'Parameter',
                            ok: 'OK',
                            cancel: 'Stornieren',
                            parameterLable: 'Parameter',
                            nullLable: 'Null',
                            valueLable: 'Wert',
                            dataTypeLable: 'Datentyp',
                            closeToolTip: 'Schließen'
                        },
                        parameter: {
                            title: 'Parameter',
                            ok: 'OK',
                            cancel: 'Stornieren',
                            parameterLable: 'Parameter',
                            nullLable: 'Null',
                            valueLable: 'Wert',
                            closeToolTip: 'Schließen'
                        },
                        filter: {
                            title: 'Abfragefilter',
                            descriptionLable: 'Liste der Tabellenfilter',
                            add: 'HINZUFÜGEN',
                            save: 'OK',
                            cancel: 'Stornieren',
                            nullLable: 'Null',
                            trueLable: 'Wahr',
                            falseLable: 'Falsch',
                            parameterTooltip: 'Als Parameter einbeziehen',
                            closeToolTip: 'Schließen',
                            intOperatorType: {
                                equals: "Gleich",
                                doesNotEqual: 'Ist nicht gleich',
                                greaterThan: 'Größer als',
                                greaterThanOrEqual: 'Größer als oder gleich wie',
                                lessThan: 'Weniger als',
                                lessThanOrEqual: 'Gleich oder kleiner als',
                                between: 'Zwischen',
                                notBetween: 'Nicht zwischen'
                            },
                            stringOpertorType: {
                                equals: "Gleich",
                                startsWith: 'Beginnt mit',
                                endWith: 'Endet mit',
                                contains: "Enthält",
                                notContains: 'Nicht enthält'
                            },
                            errorMessage: {
                                dateValidation: 'Wert ist ein ungültiges Datumsformat. ',
                                commonContent: 'Der Filter ist eingeschaltet ',
                                booleanValidation: ' hat keine Werte zum Filtern. Bitte geben Sie die Werte für den Filter an.',
                                stringValidation: ' hat keine richtigen Werte zum Filtern. '
                            }
                        },
                        previewArea: {
                            dataPreview: 'Datenvorschau',
                            noRecords: 'Keine Datensätze zur Anzeige',
                            executeRecords: 'Ausführen, um Datensätze in der Vorschau anzuzeigen',
                            record: 'Aufzeichnung',
                            records: 'Aufzeichnungen',
                            retrieved: 'Abgerufen',
                            loadRecord: 'Mehr laden'
                        },
                        schemaArea: {
                            search: 'Suche',
                            matchesFound: 'Keine Treffer gefunden',
                            rename: 'Umbenennen',
                            aggregation: 'Anhäufung',
                            dialogHeader: 'Datensatz',
                            alertMessage: {
                                datasourceAlert: 'Wählen Sie eine DataSource zum Konfigurieren des Berichtsdatensatzes aus',
                                removeTable: 'Die folgenden zugehörigen Tabellen werden damit entfernt',
                                duplicateName: 'Der angegebene Spaltenname ist bereits vorhanden',
                                duplicateDatasetName: 'Der angegebene Name existiert bereits in der DataSet-Liste',
                                datasetSpecialCharacter: 'Name sollte keine Leerzeichen und Sonderzeichen enthalten',
                                specialCharacter: 'Der Spaltenname darf keine Sonderzeichen enthalten.',
                                switcherAlert: 'Wenn Sie zum visuellen Designer wechseln, werden manuelle Änderungen an der Abfrage verworfen. Möchten Sie den visuellen Designer trotzdem verwenden?'
                            },
                            errorMessage: {
                                specifyName: 'Geben Sie den Spaltennamen an',
                                specifyDatasetName: 'Geben Sie den DataSet-Namen an',
                                previewFailed: 'DataSet konnte die ausgewählte Tabelle nicht in der Vorschau anzeigen',
                                specifyQuery: 'Geben Sie die DataSet-Abfrage an',
                                selectTable: 'Wählen Sie die Tabelle aus, um das DataSet zu speichern',
                                queryFailed: 'DataSet konnte die Abfrage der ausgewählten Tabelle nicht speichern',
                                tableProcedure: 'DataSet konnte die ausgewählte Tabellenprozedur nicht abrufen'
                            }
                        },
                        toolBar: {
                            datasourceLable: 'Datenquelle',
                            datasetName: 'Name',
                            run: 'Lauf',
                            join: 'Beitreten',
                            expression: 'Ausdruck',
                            filter: 'Filter',
                            code: 'Code',
                            finish: 'Fertig',
                            cancel: 'Stornieren',
                            datasourceWaterMark: 'Wählen Sie eine DataSource aus'
                        },
                        joiner: {
                            title: 'Abfrage Joiner',
                            descriptionLable: 'Liste der Tabellenbeziehungen',
                            add: 'HINZUFÜGEN',
                            save: 'OK',
                            cancel: 'Stornieren',
                            closeToolTip: 'Schließen',
                            addField: 'Feld hinzufügen',
                            leftTableWaterMark: 'Linke Tabelle',
                            rightTableWaterMark: 'Rechter Tisch',
                            leftFieldWaterMark: 'Linkes Feld',
                            rightFieldWaterMark: 'Rechtes Feld',
                            operatorWaterMark: 'Operator',
                            joinTypeWaterMark: 'Verbindungstyp',
                            joinTypes: {
                                inner: 'Innere',
                                outer: 'Links außen',
                                rightOuter: 'Rechts außen',
                                fullOuter: 'Voller Äußerer'
                            },
                            errorMessage: {
                                removeField:'Jede Beziehung muss eine Feldbedingung haben. Also erlaubt es nicht, dieses Feld zu löschen. ',
                                noRelationAlert: ' hat keine Beziehung zu anderen Tabellen',
                                selectLeftTable: 'Wählen Sie den Wert für die linke Tabelle',
                                selectRightTable: 'Wählen Sie den richtigen Tabellenwert',
                                selectRelation: 'Wählen Sie die Beziehung für Tabellen aus',
                                selectLeftColumn: 'Wählen Sie den linken Spaltenwert der Feldzeile#',
                                selectRightColumn: 'Wählen Sie den rechten Spaltenwert der Feldzeile #',
                                selectOperator: 'Wählen Sie den Operator der Feldzeile aus #',
                                relationExists: 'Es besteht bereits eine Beziehung zwischen Tabellen'
                            }
                        },
                        credentialDialog: {
                            title: 'Anmeldedialog',
                            userName: 'Nutzername',
                            password: 'Passwort',
                            userNameWaterMark: 'Nutzername',
                            passwordWaterMark: 'Passwort',
                            userNameErrorMessage: 'Bitte geben sie einen Benutzernamen ein',
                            passwordErrorMessage: 'Bitte Passwort eingeben',
                            connect: 'Verbinden',
                            close: 'Schließen'
                        },
                        queryExpression: {
                            title: 'Abfrage Ausdrücke',
                            functionLabel: 'Funktionen',
                            columnLabel: 'Spalteneinstellungen',
                            expressionLabel: 'Ausdruck',
                            nameLabel: 'Name',
                            descriptionLabel: 'Beschreibung ',
                            exampleLabelText: 'Beispiel',
                            ok: 'Sparen',
                            cancel: 'Stornieren',
                            add: 'HINZUFÜGEN',
                            textAreaWaterMark: 'Abfrageausdruck',
                            nameFieldWaterMark: 'Ausdrucksname',
                            closeToolTip: 'Schließen',
                            errorMessage: {
                                saveAlert: 'Ausdruck wird nicht gespeichert. Willst du speichern und fortfahren? ',
                                bracketSyntax: 'Falsche Syntax in der Nähe von Open / Close Klammer (n).',
                                parseAlert: 'ReportDesigner konnte den angegebenen Ausdruck nicht analysieren.',
                                nameAlert: 'Name Feld sollte nicht leer sein.',
                                emptyAlert: 'Das Ausdrucksfeld darf nicht leer sein',
                                duplicateName: 'Der angegebene Ausdrucksname ist bereits vorhanden',
                                specialCharacter: 'Der Ausdrucksname darf keine Sonderzeichen enthalten.',
                                referenceError: 'Die Spalte kann nicht innerhalb ihres eigenen Ausdrucks angegeben werden!',
                                invalidSyntax: 'Ungültige Syntax in der Nähe von Open / Close Klammer (n).',
                                retrieveExpression: 'ReportDesigner konnte den angegebenen Ausdruck nicht abrufen.',
                            },
                            datasetTitle: 'Datensatz',
                            expressions: {
                                all: 'Alle',
                                numbers: 'Zahlen',
                                logical: 'Logisch',
                                conditional: 'Bedingt',
                                date: 'Datum',
                                stringType: 'Schnur',
                                text: 'Text',
                                miscellenuous: 'Sonstiges ',
                                abs: 'Gibt den absoluten Wert des angegebenen Ausdrucks zurück.',
                                acos: 'Gibt den inversen Kosinus (auch Arccosinus genannt) des angegebenen numerischen Ausdrucks zurück.',
                                asin: 'Gibt den inversen Sinus (auch als arcsine bezeichnet) des angegebenen numerischen Ausdrucks zurück.',
                                atan: 'Gibt den umgekehrten Tangens (auch Arkustangens genannt) des angegebenen numerischen Ausdrucks zurück.',
                                cos: 'Gibt den Kosinus des Winkels zurück, der im Bogenmaß des angegebenen Ausdrucks angegeben ist.',
                                degree: 'Gibt den Winkel in Grad für den Wert zurück, der im Bogenmaß den angegebenen numerischen Ausdruck angibt.',
                                exponent: 'Gibt den Exponentialwert des angegebenen Ausdrucks zurück. ',
                                logrithm: 'Gibt den Logarithmus des angegebenen Ausdrucks an die angegebene Basis zurück.',
                                pi: 'Gibt den konstanten Wert von PI zurück.',
                                power: 'Gibt den Wert des angegebenen Ausdrucks (Ausdruck1) an die angegebene Stärke zurück (Ausdruck2). ',
                                radians: 'Gibt den Winkel im Bogenmaß für den Winkel zurück, der im angegebenen numerischen Ausdruck in Grad angegeben wurde.',
                                round: 'Gibt einen gerundeten Wert zurück.',
                                sign: 'Gibt einen Wert zurück, der das positive (+1), Null (0) oder negative (-1) Vorzeichen des angegebenen numerischen Ausdrucks darstellt.',
                                sin: 'Gibt den Sinus des Winkels zurück, der im Bogenmaß des angegebenen Ausdrucks angegeben ist.',
                                squareRoot: 'Gibt die Quadratwurzel des angegebenen numerischen Ausdrucks zurück.',
                                tan: 'Gibt den Tangens des angegebenen numerischen Ausdrucks zurück.',
                                ifCondition: 'Gibt abhängig von der Auswertung des Ausdrucks entweder einen wahren Teil oder einen falschen Teil zurück.',
                                ifNull: 'Wenn der Ausdruck numerisch / Zeichenfolge / Datum ist, wird der erste Ausdruck zurückgegeben. Wenn der erste Ausdruck NULL ist, wird der zweite Ausdruck zurückgegeben.',
                                isNotNull: 'Wenn der Wert numeric / string / date_expression NULL ist, wird eine Zeichenfolge zurückgegeben; die false darstellt. Andernfalls wird true angegeben.',
                                isNull: 'Wenn der Wert numeric / string / date_expression NULL ist, wird eine Zeichenfolge zurückgegeben, die "true" darstellt; andernfalls "false".',
                                and: 'Gibt true zurück, wenn beide Ausdrücke als wahr ausgewertet werden.',
                                notOperation: 'Gibt den logischen Umkehrwert des auszuwertenden Ausdrucks zurück.',
                                orOperation: 'Gibt true zurück, wenn einer der Ausdrücke als wahr ausgewertet wird.',
                                addDate: 'Fügt dem angegebenen Datum die Anzahl der Tage hinzu.',
                                name: 'Gibt eine Zeichenfolge zurück, die den angegebenen Datumsteil des angegebenen Datumsausdrucks darstellt.',
                                part: 'Gibt einen ganzzahligen Wert zurück, der den angegebenen Datumsteil des angegebenen Datumsausdrucks darstellt.',
                                sub: 'Gibt das vom angegebenen Datum abgezogene Datum zurück.',
                                day: 'Gibt einen numerischen Wert zurück, der den Tagteil des angegebenen Datums darstellt.',
                                daydiff: 'Gibt einen numerischen Wert zurück, der die Differenz zwischen zwei angegebenen Datumsangaben darstellt.',
                                hour: 'Gibt die Stunde des angegebenen Datums als Ganzzahl zurück.',
                                minute: 'Gibt einen numerischen Wert zurück, der den Minutenabschnitt des Datums darstellt, der sich aus dem angegebenen Datumsausdruck ergibt.',
                                month: 'Gibt einen numerischen Wert zurück, der den Monatsteil des Datums darstellt, der sich aus dem angegebenen Datumsausdruck ergibt.',
                                now: 'Gibt das aktuelle Datum und die Uhrzeit zurück.',
                                today: 'Gibt das aktuelle Datum zurück.',
                                year: 'Gibt einen numerischen Wert zurück, der den Jahresteil des Datums darstellt, der sich aus dem angegebenen Datumsausdruck ergibt.',
                                char: 'Konvertiert den angegebenen Ganzzahl-ASCII-Code in ein Zeichen.',
                                concat: 'Gibt einen Zeichenfolgenwert zurück, der aus der Verkettung von zwei oder mehr Zeichenfolgenwerten resultiert.',
                                contains: 'Gibt true zurück, wenn der angegebene Zeichenfolgenausdruck den angegebenen Ausdruck der Unterzeichenfolge enthält.',
                                endsWith: 'Gibt true zurück, wenn der angegebene Zeichenfolgenausdruck mit dem angegebenen substring-Ausdruck endet.',
                                left:'Gibt die angegebene Anzahl von Zeichen ab dem Beginn des angegebenen Zeichenfolgenausdrucks zurück.',
                                length: 'Gibt den natürlichen Logarithmus des angegebenen Ausdrucks zurück.',
                                lower: 'Gibt einen konvertierten Kleinbuchstaben aus dem angegebenen Zeichenfolgenausdruck zurück.',
                                leftTrim: 'Gibt den Zeichenfolgenwert mit führenden Leerzeichen aus dem Zeichenfolgenausdruck zurück.',
                                maximum: 'Gibt den maximalen Wert im angegebenen Ausdruck zurück.',
                                minimum: 'Gibt den Mindestwert im angegebenen Ausdruck zurück. ',
                                right: 'Gibt die angegebene Anzahl von Zeichen vom Ende des angegebenen Zeichenfolgenausdrucks zurück.',
                                rightTrim: 'Gibt die Zeichenfolge ohne rechte nachstehende Leerzeichen in der angegebenen Zeichenfolge zurück.',
                                startswith: 'Gibt "true" zurück, wenn die angegebenen Zeichenfolgenausdrücke mit dem angegebenen Ausdruck der Unterzeichenfolge beginnen.',
                                subString: 'Gibt eine bestimmte Länge der Zeichenfolge zurück, beginnend mit dem spezifischen Index des angegebenen Zeichenfolgenausdrucks.',
                                upper: 'Gibt einen in Großbuchstaben umgewandelten Zeichenfolgenwert aus einem angegebenen Zeichenfolgenausdruck zurück.'
                            }
                        }
                    }
                };
                break;
            case "ejRibbon":
                ej.Ribbon.Locale = ej.Ribbon.Locale || {};
                ej.Ribbon.Locale["de-DE"] = {
                    CustomizeQuickAccess: "Schnellzugriffsleiste anpassen",
                    RemoveFromQuickAccessToolbar: "Schnellzugriffsleiste entfernen",
                    AddToQuickAccessToolbar: "Zu Schnellzugriffsleiste hinzufügen",
                    ShowAboveTheRibbon: "Über der Leiste anzeigen",
                    ShowBelowTheRibbon: "Unter der Leiste anzeigen",
                    MoreCommands: "Mehr Befehle…"
                };
                break;
            case "ejKanban":
                ej.Kanban.Locale = ej.Kanban.Locale || {};
                ej.Kanban.Locale["de-DE"] = {
                    EmptyCard: "Keine Karten zum anzeigen",
                    SaveButton: "Speichern",
                    CancelButton: "stornieren",
                    EditFormTitle: "Details von ",
                    AddFormTitle: "Neue Karte hinzufügen",
                    SwimlaneCaptionFormat: "- {{:count}}{{if count == 1 }} Artikel {{else}} Artikel {{/if}}",
                    FilterSettings: "Filter:",
                    FilterOfText: "1 von 2",
                    Max: "Max.",
                    Min: "Min.",
                    Cards: "  Karten",
                    ItemsCount: "Stückzahl :",
                    Unassigned: "Nicht zugeordnet",
                    AddCard: "Karte hinzufügen",
                    EditCard: "Karte bearbeiten",
                    DeleteCard: "Karte löschen",
                    TopofRow: "Ganz oben in der Reihe",
                    BottomofRow: "Ganz unten in der Reihe ",
                    MoveUp: "Hoch verschieben",
                    MoveDown: "Runter verschieben",
                    MoveLeft: "Nach links verschieben",
                    MoveRight: "Nach rechts verschieben",
                    MovetoSwimlane: "Zu Spalte bewegen",
                    HideColumn: "Spalte ausblenden",
                    VisibleColumns: "Sichtbare Spalten",
                    PrintCard: "Karte ausdrucken"
                };
                break;
            case "ejRTE":
                ej.RTE.Locale = ej.RTE.Locale || {};
                ej.RTE.Locale["de-DE"] = {
                    bold: "Fett",
                    italic: "Kursiv",
                    underline: "Unterstrichen",
                    strikethrough: "Durchgestrichen",
                    superscript: "Hochgestellt",
                    subscript: "Tiefgestellt",
                    justifyCenter: "Zentriert",
                    justifyLeft: "Linksbündig ausrichten",
                    justifyRight: "Rechtsbündig ausrichten",
                    justifyFull: "Blocksatz",
                    unorderedList: "Ungeordnete Liste einfügen",
                    orderedList: "Geordnete Liste einfügen",
                    indent: "Einzug vergrößern",
                    fileBrowser: "Dateibrowser",
                    outdent: "Einzug verkleinern",
                    cut: "Schneiden",
                    copy: "Kopieren",
                    paste: "Paste",
                    paragraph: "Absatz",
                    undo: "Rückgänig",
                    redo: "Wiederherstellen",
                    upperCase: "Großbuchstaben",
                    lowerCase: "Kleinbuchstaben",
                    clearAll: "Alles löschen",
                    clearFormat: "Format löschen",
                    createLink: "Hyperlink einfügen/bearbeiten",
                    removeLink: "Hyperlink entfernen",
                    tableProperties: "Tabelleneigenschaften",
                    insertTable: "Einfügen",
                    deleteTables: "Löschen",
                    imageProperties: "Bildereigenschaften",
                    openLink: "Hyperlink öffnen",
                    image: "Bild einfügen",
                    video: "Video einfügen",
                    editTable: "Tabelleneigenschaften bearbeiten",
                    embedVideo: "Eingebetteten Code unten Einfügen",
                    viewHtml: "Ansicht",
                    fontName: "Schriftfamilie auswählen",
                    fontSize: "Schriftgröße auswählen",
                    fontColor: "Farbe auswählen",
                    format: "Format",
                    backgroundColor: "Hintergrundfarbe",
                    style: "Formate",
                    deleteAlert: "Sind Sie sicher sie wollen den gesamten Inhald löschen",
                    copyAlert: "Ihr Browser unterstützt keinen direkten Zugriff auf die Zwischenablage. Bitte benützen Sie stattdessen die Tastenkombination Ctrl+C zum Kopieren.",
                    pasteAlert: "Ihr Browser unterstützt keinen direkten Zugriff auf die Zwischenablage. Bitte benützen Sie stattdessen die Tastenkombination Ctrl+V zum Einfügen.",
                    cutAlert: "Ihr Browser unterstützt keinen direkten Zugriff auf die Zwischenablage. Bitte benützen Sie stattdessen die Tastenkombination Ctrl+X zum Ausschneiden.",
                    videoError: "Der Textbereich darf nicht leer sein",
                    imageWebUrl: "Webadresse",
                    imageAltText: "Alternativer Text",
                    dimensions: "Größe",
                    constrainProportions: "Proportionen beschränken",
                    linkWebUrl: "Webadresse",
                    imageLink: "Bild as Link",
                    imageBorder: "Bildramen",
                    imageStyle: "Stil",
                    linkText: "Text",
                    linkTooltipLabel: "Werkzeugtipp",
                    html5Support: "Das Werkzeugsymbol ist nur in HTML5 unterstützten Browsern aktiviert",
                    linkOpenInNewWindow: "Link in neuem Fenster öffnen",
                    tableColumns: "Nr. von Spalten",
                    tableRows: "Nr. von Zeilen",
                    tableWidth: "Breite",
                    tableHeight: "Höhe",
                    tableCellSpacing: "Zellenabstand",
                    tableCellPadding: "Zellenfüllung",
                    tableBorder: "Rand",
                    tableCaption: "Beschriftung",
                    tableAlignment: "Ausrichtung",
                    textAlign: "Textausrichtung",
                    dialogUpdate: "Aktualisieren",
                    dialogInsert: "Einfügen",
                    dialogCancel: "Stornieren",
                    dialogApply: "Übernehmen",
                    dialogOk: "OK",
                    createTable: "Tabelle einfügen",
                    insertTable: "Einfügen",
                    addColumnLeft: "Spalten links einfügen",
                    addColumnRight: "Spalten rechts einfügen",
                    addRowAbove: "Zeilen überhalb einfügen",
                    addRowBelow: "Zeilen unterhalb einfügen",
                    deleteRow: "Ganze Zeile löschen",
                    deleteColumn: "Ganze Spalte löschen",
                    deleteTable: "Tabelle löschen",
                    customTable: "Benutzerdefinierte Tabelle erstellen...",
                    characters: "Zeichen",
                    words: "Wörter",
                    general: "General",
                    advanced: "Fortgeschritten",
                    table: "Tabelle",
                    row: "Reihe",
                    column: "Spalte",
                    cell: "Zelle",
                    solid: "Solide",
                    dotted: "Dotted",
                    dashed: "Gestrichelt",
                    doubled: "Doppelt",
                    maximize: "Maximieren",
                    resize: "Minimieren",
                    swatches: "Farbfelder",
                    paragraph: "Absatz",
                    quotation: "Zitat",
                    heading1: "Überschrift",
                    heading2: "Überschrift 2",
                    heading3: "Überschrift 3",
                    heading4: "Überschrift 4",
                    heading5: "Überschrift 5",
                    heading6: "Überschrift 6",
                    segoeui: "Segoe UI",
                    arial: "Arial",
                    couriernew: "Kurier Neu",
                    georgia: "Georgia",
                    impact: "Einfluss",
                    lucidaconsole: "Lucida-Konsole",
                    tahoma: "Tahoma",
                    timesnewroman: "Times New Roman kaufen",
                    trebuchetms: "Trebuchet MS",
                    verdana: "Verdana",
                    disc: "Scheibe",
                    circle: "Kreis",
                    square: "Quadrat",
                    number: "Nummer",
                    loweralpha: "Unteres Alpha",
                    upperalpha: "Oberes Alpha",
                    lowerroman: "Untere Römer",
                    upperroman: "Oberrömisch",
                    none: "Keiner",
                    linkTooltip: "Ctrl + Klicken um Link zu folgen",
                    charSpace: "Zeichen (mit Leerzeichen)",
                    charNoSpace: "Zeichen (ohne Leerzeichen)",
                    wordCount: "Wortanzahl",
                    left: "Links",
                    right: "Recht",
                    center: "Center",
                    zoomIn: "hineinzoomen",
                    zoomOut: "Rauszoomen",
                    print: "Drucken",
                    'import': "Dokument importieren",
                    wordExport: "Exportieren als Word-Dokument ",
                    pdfExport: "Als Pdf-Datei exportieren",
                    FindAndReplace: "Suchen und Ersetzen",
                    Find: "Finden",
                    MatchCase: "Streichholzschachtel",
                    WholeWord: "Ganzes Wort",
                    ReplaceWith: "Ersetzen mit",
                    Replace: "Ersetzen",
                    ReplaceAll: "Alles ersetzen",
                    FindErrorMsg: "Angegebenes Wort konnte nicht gefunden werden.",
                    customFontColor: "Mehr Farben…",
                    customBGColor: "Mehr Farben...",
                    TransBGColor: "Transparent",
                    addtodictionary: "Zum Wörterbuch hinzufügen",
                    ignoreall: "Alle Ignorieren"
                };
                break;
            case "ejRecurrenceEditor":
                ej.RecurrenceEditor.Locale = ej.RecurrenceEditor.Locale || {};
                ej.RecurrenceEditor.Locale["de-DE"] = {
                    Repeat: "Wiederholen",
                    Never: "Nie",
                    Daily: "Täglich",
                    Weekly: "Wöchentlich",
                    Monthly: "Monatlich",
                    Yearly: "Jährlich",
                    First: "Zuerst",
                    Second: "Zweite",
                    Third: "Dritte",
                    Fourth: "Vierte",
                    Last: "Letzte",
                    EveryWeekDay: "Jeden Wochentag",
                    Every: "Jeden",
                    RecurrenceDay: "Tag(e)",
                    RecurrenceWeek: "Woche(n)",
                    RecurrenceMonth: "Monat(e)",
                    RecurrenceYear: "Jahr(e)",
                    RepeatOn: "Wiederholen",
                    RepeatBy: "Wiederholen durch",
                    StartsOn: "Startet auf",
                    Times: "mal",
                    Ends: "Enden",
                    Day: "Tag",
                    The: "Das",
                    OfEvery: "Von",
                    After: "Nach",
                    On: "Auf",
                    Occurrence: "Vorkommen",
                    Until: "Bis"
                };
                break;
            case "ejSchedule":
                ej.Schedule.Locale = ej.Schedule.Locale || {};
                ej.Schedule.Locale["de-DE"] = {
                    ReminderWindowTitle: "Erinnerungsfenster",
                    CreateAppointmentTitle: "Termin erstellen",
                    RecurrenceEditTitle: "Terminwiederholung bearbeiten",
                    RecurrenceEditMessage: "Wie möchten Sie den Termin in der Serie ändern",
                    RecurrenceEditOnly: "Nur diesen Termin",
                    RecurrenceEditFollowingEvent: "Folgende Events",
                    RecurrenceEditSeries: "Ganze Serie",
                    PreviousAppointment: "Vorheriger Termin",
                    NextAppointment: "Nächster Termin",
                    AppointmentSubject: "Fach",
                    StartTime: "Startzeit",
                    EndTime: "Endzeit",
                    AllDay: "Ganzen Tag",
                    StartTimeZone: "Startzeitzone",
                    EndTimeZone: "Endzeitzone",
                    Today: "Heute",
                    Recurrence: "Wiederholen",
                    Done: "Erledigt",
                    Cancel: "Stornieren",
                    Ok: "OK",
                    Repeat: "Wiederholen",
                    RepeatBy: "Wiederholen bei",
                    RepeatEvery: "Wiederholen jeden",
                    RepeatOn: "Wiederholen am",
                    StartsOn: "Startet am",
                    Ends: "Endet",
                    Summary: "Zusammenfassung",
                    Daily: "Täglich",
                    Weekly: "Wöchentlich",
                    Monthly: "Monatlich",
                    Yearly: "Jährlich",
                    Every: "Jeden",
                    EveryWeekDay: "Jeden wochentag",
                    Never: "Nie",
                    After: "Nach",
                    Occurrence: "Wiederholung(en)",
                    On: "Am",
                    Edit: "Bearbeiten",
                    RecurrenceDay: "Tage",
                    RecurrenceWeek: "Wochen",
                    RecurrenceMonth: "Monate",
                    RecurrenceYear: "Jahre",
                    The: "Das",
                    OfEvery: "An jedem ",
                    First: "Zuerst",
                    Second: "Zweite",
                    Third: "Dritte",
                    Fourth: "Vierte",
                    Last: "Letzte",
                    WeekDay: "Wochentag",
                    WeekEndDay: "Wochenendtag",
                    Subject: "Fach",
                    Categorize: "Kategorien",
                    DueIn: "Fällig in",
                    DismissAll: "Alle Verwerfen",
                    Dismiss: "Verwerfen",
                    OpenItem: "Objekt öffnen",
                    Snooze: "Snooze",
                    Day: "Tag",
                    Week: "Woche",
                    WorkWeek: "Arbeitswoche",
                    Month: "Monat",
                    AddEvent: "Event hinzufügen",
                    CustomView: "Benutzerdefinerte Ansicht",
                    Agenda: "Agenda",
                    Detailed: "Termin bearbeiten",
                    EventBeginsin: "Termin beginnt in",
                    Editevent: "Termin bearbeiten",
                    Editfollowingevent: "Folgende Veranstaltungen",
                    Editseries: "Serie bearbeiten",
                    Times: "Zeiten",
                    Until: "bis",
                    Eventwas: "Termin war",
                    Hours: "hrs",
                    Minutes: "min",
                    Overdue: "Überfälliger Termin",
                    Days: "Tage",
                    Event: "Event",
                    Select: "wählen",
                    Previous: "früher",
                    Next: "Nächster",
                    Close: "Schließen",
                    Delete: "Löschen",
                    Date: "Datum",
                    Showin: "Anzeigen in",
                    Gotodate: "Gehe zu Datum",
                    Resources: "RESSOURCEN",
                    RecurrenceDeleteTitle: "Wiederholenden Termin löschen",
                    Location: "Ort",
                    Priority: "Priorität",
                    RecurrenceAlert: "Aufmerksam",
                    NoTitle: "Kein Titel",
                    OverFlowAppCount: "Mehr Termine",
                    AppointmentIndicator: "Klicke für mehr Termine",
                    WrongPattern: "Das wiederholungsmuster ist nicht gültig",
                    CreateError: "Die Dauer des Termins muss kürzer sein als die häufigkeit in der der Termin eintritt. Kürzen Sie die Dauer oder ändern sie das Wiederholungsmuster in dem Dialogfeld für Terminwiederholung.",
                    DragResizeError: "Ein wiederholender Termin kann nicht neu geplant werden, wenn er später sein soll als das nächste Auftreten desselben Termins.",
                    StartEndError: "Endzeit sollte größer sein als Startzeit",
                    MouseOverDeleteTitle: "Termin löschen",
                    DeleteConfirmation: "Sind Sie sicher Sie wollen diesen Termin löschen?",
                    Time: "Zeit",
                    EmptyResultText: "Keine Vorschläge",
                    BlockIntervalAlertTitle: "Alarm",
                    BlockIntervalError: "Der angegebene Zeitintervall wurde geblockt und ist nicht verfügbar für die Auswahl.",
                    RecurrenceDateValidation: "Manche Monate haben weniger Tage als ausgewählt. Für diese Monate fällt das Ereignis auf den letzten Tag des Monats.",
                    SeriesChangeAlert: "Die Anderungen zu spezifischen Instanzen der Serie werden abgebrochen und diese Termine werden wieder an die Serie angepasst."
                };
                break;
            case "ejSpreadsheet":
                ej.Spreadsheet.Locale = ej.Spreadsheet.Locale || {};
                ej.Spreadsheet.Locale["de-DE"] = {
                    Cut: "Schneiden",
                    Copy: "Kopieren",
                    FormatPainter: "Format Maler",
                    Paste: "Paste",
                    PasteValues: "Nur Werte einfügen",
                    PasteSpecial: "Paste",
                    Filter: "Filter",
                    FilterContent: "Filterung anschalten für ausgewählte Felder.",
                    FilterSelected: "Filterung bei ausgewählten Zellenwerten",
                    Sort: "Sortieren",
                    Clear: "Klar",
                    ClearContent: "Die Formatierungsinhalte, die Kommentare die Hyperlinks oder alles in der Zelle löschen.",
                    ClearFilter: "Clear Filter",
                    ClearFilterContent: "Filter und Sortierung von der derzeitigen Auswahl löschen.",
                    SortAtoZ: "Sortieren von A bis Z",
                    SortAtoZContent: "Niedrigstes zu Höchstes.",
                    SortZtoA: "Sortieren von Z nach A",
                    SortZtoAContent: "Höchstes zu Niedrigstes.",
                    SortSmallesttoLargest: "Sortieren der kleinsten zur größten",
                    SortLargesttoSmallest: "Sortieren der größten zur kleinsten",
                    SortOldesttoNewest: "Sortieren vom Ältesten zum Neuesten",
                    SortNewesttoOldest: "Sortieren vom Neuesten zum Ältesten",
                    Insert: "Einfügen",
                    InsertTitle: "Zellen einfügen",
                    InsertContent: "Neue Zellen, Zeilen oder Spalten zur Arbeitsmappe hinzufügen.",
                    MultipleInsertContent: "Um mehrere Zeilen oder Spalten auf einmal zu löschen, wählen Sie einfach mehrere Spalten oder Zeilen aus.",
                    InsertSBContent: "Zellen, Zeilen, Spalten oder Blätter zur Arbeitsmappe hinzufügen.",
                    Delete: "Löschen",
                    DeleteTitle: "Zellen löschen",
                    DeleteContent: "Zellen, Zeilen, Spalten oder Blätter zur Arbeitsmappe entfernen.",
                    MultipleDeleteContent: "Zu Ihrer Information:. Um mehrere Zeilen oder Spalten zu einer Zeit, wählen Sie mehrere Zeilen oder Spalten in dem Blatt zu löschen, und klicken Sie auf Löschen.",
                    FindSelectTitle: "Finden und Wählen",
                    FindSelectContent: "Klicke um die Optionen für Textsuche im Dokument zu sehen.",
                    CalculationOptions: "Berechnungsoptionen",
                    CalcOptTitle: "Berechnungsoptionen",
                    CalcOptContent: "Wähle aus um Formeln automatisch oder manuell zu berrechnen.",
                    CalcOptRecalcContent: " Wenn Sie eine Änderung vornehmen, die sich auf einen Wert auswirkt, wird diese automatisch im Spreadsheet neu berechnet.",
                    CalculateSheet: "Blatt berechnen",
                    CalculateNow: "Jetzt berechnen",
                    CalculateNowContent: "Die gesamte Arbeitsmappe jetzt berechnen.",
                    CalculateNowTurnOffContent: " Dies müssen Sie nur benützen wenn die automatische berechnung ausgeschaltet ist",
                    CalculateSheetContent: "Berechne das aktive Blatt jetzt.",
                    CalculateSheetTurnOffContent: " Sie nur diese verwenden müssen, wenn die automatische Berechnung ausgeschaltet ist.",
                    Title: "Spreadsheet",
                    ColorPicker: "Farbwähler",
                    Ok: "OK",
                    Cancel: "Stornieren",
                    Alert: "Wir konnten diese Funktion nicht auf die ausgewählten Zellen anwenden. Wählen Sie eine einzelne Zelle innerhalb des Datenbereichs aus und versuchen Sie es erneut.",
                    HeaderAlert: "Der Befehl konnte nicht abgeschlossen werden, da Sie versuchten mit dem Filterkopf zu filtern. Wählen Sie eine einzelne Zelle im Filterbereich und versuchen Sie es nocheinmal.",
                    FlashFillAlert: "Alle Daten neben Ihrer Auswahl wurden überprüft und es gab kein Muster zum Ausfüllen von Werten.",
                    Formatcells: "Zellen formatieren",
                    FontFamily: "Schriftart",
                    FFContent: "Wählen Sie eine neue Schriftart für den Text",
                    FontSize: "Schriftgröße",
                    FSContent: "Ändern Sie die Größe des Textes.",
                    IncreaseFontSize: "Schrift vergrößern",
                    IFSContent: "Machen Sie ihren Text etwas größer.",
                    DecreaseFontSize: "Schrift verkleinern",
                    DFSContent: "Machen Sie ihren Text etwas kleiner.",
                    Bold: "Fett gedruckt",
                    Italic: "Kursiv",
                    Underline: "Unterstreichen",
                    Linethrough: "Durchgehend",
                    FillColor: "Füllfarbe",
                    FontColor: "Schriftfarbe",
                    TopAlign: "Oben ausrichten",
                    TopAlignContent: "Text oben ausrichten.",
                    MiddleAlign: "Zentrier ausrichten",
                    MiddleAlignContent: "Text zentriert zwischen oberem und unterem Rand ausrichten.",
                    BottomAlign: "Unten ausrichten",
                    BottomAlignContent: "Text unten ausrichten.",
                    WrapText: "Zeilenumbruch",
                    WrapTextContent: "Brechen Sie extra langen text in mehrere Zeilen sodass Sie alles auf einmal sehen können.",
                    AlignLeft: "Linksbündig ausrichten",
                    AlignLeftContent: "Den Inhalt linksbündig ausrichten.",
                    AlignCenter: "Center",
                    AlignCenterContent: "Zenriert",
                    AlignRight: "Rechtsbündig ausrichten",
                    AlignRightContent: "Den Inhalt rechtsbündig ausrichten.",
                    IncreaseIndent: "Einzug erhöhen",
                    IncreaseIndentContent: "Schieben Sie ihren Inhalt weiter weg vom Zellenrand.",
                    DecreaseIndent: "Einzug verringern",
                    DecreaseIndentContent: "Schieben Sie ihren Inhalt näher zu dem Zellenrand.",
                    Undo: "Rückgängig machen",
                    Redo: "Redo",
                    NumberFormat: "Zahlenformat",
                    NumberFormatContent: "Wählen Sie ein Format für ihre Zellen aus, wie Beispielsweise Prozente, Währung, Datum oder Uhrzeit.",
                    AccountingStyle: "Buchhaltungszahlenformat",
                    AccountingStyleContent: "Als US Dollar, Euro oder andere Währungen formatieren.",
                    PercentageStyle: "Prozentformat",
                    PercentageStyleContent: "Als Prozentsatz formatieren.",
                    CommaStyle: "1.000er-Trennzeichen",
                    CommaStyleContent: "Mit Tausendertrennzeichen formatieren.",
                    IncreaseDecimal: "Dezimalstelle hinzufügen",
                    IncreaseDecimalContent: "Mehr Dezimalstellen für genauere Werte anzeigen.",
                    DecreaseDecimal: "Dezimalstelle entfernen",
                    DecreaseDecimalContent: "Weniger Dezimalstellen anzeigen",
                    AutoSum: "AutoSumme",
                    AutoSumTitle: "Summe",
                    AutoSumContent: "Automatisch Summieren. Die Summe wird nach den markierten Zellen angezeigt.",
                    Fill: "Füllen",
                    ExportXL: "übertreffen",
                    ExportCsv: "CSV",
                    ExportPdf: "PDF",
                    BackgroundColor: "Füllfarbe",
                    BGContent: "Färben Sie den Hintergrund von Zellen ein, um sie herausstechen zu lassen",
                    ColorContent: "Ändern Sie die Textfarbe.",
                    Border: "Rand",
                    BorderContent: "Ränder auf die aktuell ausgewählten Zellen anwenden.",
                    BottomBorder: "Ramenlinie unten",
                    TopBorder: "Ramenlinie oben",
                    LeftBorder: "Ramenlinie links",
                    RightBorder: "Ramenlinie rechts",
                    OutsideBorder: "Ramenlinien außen",
                    NoBorder: "Kein Ramen",
                    AllBorder: "Alle Ramenlinien",
                    ThickBoxBorder: "Dicke Ramenlinien außen",
                    ThickBottomBorder: "Dicke Ramenlinie unten",
                    TopandThickBottomBorder: "Dicke Ramenlinie oben",
                    BottomDoubleBorder: "Unterer doppelter Rand",
                    TopandBottomDoubleBorder: "Oberer und unterer Doppelrand",
                    DrawBorderGrid: "Ramenraster zeichnen",
                    DrawBorder: "Ramenlinie zeichnen",
                    TopandBottomBorder: "Ramenlinie unten und oben",
                    BorderColor: "Linienfarbe",
                    BorderStyle: "Linienart",
                    Number: "Zahlenformat wird benützt für generelles Anzeigen von Nummern. Währung und Buchhaltung bieten spezifische Formatierungen für Geldbeträge an",
                    General: "Standartformat Zellen haben kein spezifisches Nummernformat",
                    Currency: "Währungsformat wird benützt für alle generellen Geldbeträge. Um alle Decimalstellen gleich anzuzeigen, benützen Sie das Buchhaltungsformat",
                    Accounting: "Buchhaltungsformat reiht alle Währungssymbole und Decimalstellen untereinander in der Spalte.",
                    Text: "Textformat Zellen werden behandelt als Text auch wenn Zahlen darin stehen. Die Zelle wird genau so angezeigt wie sie eingegeben wird.",
                    Percentage: "Prozentsatzformat multipliziert den Wert der Zelle bei 100 und zeigt das Ergebniss mit einem Prozentzeichen",
                    CustomMessage: "Typ Nummer Format-Code, als Ausgangspunkt eines bestehenden Code.",
                    Fraction: " ",
                    Scientific: " ",
                    Type: "Art:",
                    CustomFormatAlert: "Bitte gültiges Format eingeben",
                    Date: "Datumsformat zeigt Datums- und Zeitnummern als Datum an .",
                    Time: "Zeitformat zeigt Datums- und Zeitnummern als Datum an.",
                    File: "Datei",
                    New: "Neu",
                    Open: "Öffnen",
                    SaveAs: "Speichern unter",
                    Print: "Drucken",
                    PrintContent: "Aktuelle Seite drucken.",
                    PrintSheet: "Seite drucken",
                    PrintSelected: "Auswahl ausdrucken",
                    PrintSelectedContent: "Wählen Sie einen Bereich aus den Sie ausdrucken möchten.",
                    HighlightVal: "Ungültige Daten formatieren",
                    ClearVal: "Prüfung löschen",
                    Validation: "Prüfung",
                    DataValidation: "Datenprüfung",
                    DVContent: "Wählen Sie aus einer Liste von Regeln aus, um die Eingabe von Daten in den Zellen zu begrenzen.",
                    PageSize: "Seitengröße",
                    PageSizeContent: "Wähen Sie die Seitengröße für Ihr Dokument aus",
                    FormatCells: "Zellenformatierung",
                    ConditionalFormat: "Bedingte Formatierung",
                    CFContent: "Trends und Muster ganz einfach in Ihren Daten finden und mithilfe von Farben wichtige Werte optisch hervorheben.",
                    And: "und",
                    With: "mit",
                    GTTitle: "Größer als",
                    GTContent: "Zellen Formatieren für die gilt GRÖßER ALS:",
                    LTTitle: "Weniger als",
                    LTContent: "Zellen Formatieren für die gilt KLEINER ALS:",
                    BWTitle: "Zwischen",
                    BWContent: "Zellen Formatieren für die gilt ZWISCHEN:",
                    EQTitle: "Ist Gleich",
                    EQContent: "Zellen Formatieren für die gilt IST GLEICH:",
                    DateTitle: "Ein Datum Auftretende",
                    DateContent: "Zellen Formatieren mit Inhalt DATUM:",
                    ContainsTitle: "Text, der enthält",
                    ContainsContent: "Zellen Formatieren die den Text enthalten",
                    GreaterThan: "Größer als",
                    LessThan: "Weniger als",
                    Between: "Zwischen",
                    EqualTo: "Gleich",
                    TextthatContains: "Text, der enthält",
                    DateOccurring: "Datum…",
                    ClearRules: "Regeln löschen",
                    ClearRulesfromSelected: "Regeln löschen für ausgewählte Zellen",
                    ClearRulesfromEntireSheets: "Regeln löschen für gesamtes Blatt",
                    CellStyles: "Zellvorlagen",
                    CellStylesContent: "Eine farbige Formatvorlage ist ein guter Weg um wichtige Daten aus dem Blatt optisch hervorzuheben.",
                    CellStyleHeaderText: "Zellenformatvorlage mit Designs",
                    Custom: "Geben Sie einen Nummernformatierungscode mithilfe der existierenden Codes an .",
                    CellStyleGBN: "Standard / Schlecht / Gut / Neutral",
                    CellStyleTH: "Überschrift / Titel",
                    Accent: "Akzent",
                    Style: "Formatvorlage",
                    FormatAsTable: "Als Tabelle formatieren",
                    FormatasTable: "Format als Tabelle",
                    FATContent: "Schnell eine Auswahl an Zellen in eine Tabbel mit eigenem Desing umwandeln",
                    FATHeaderText: "Hell / Medium / Dunkel",
                    FATNameDlgText: "Tabellenname : / MMeine Tabelle hat Überschiften",
                    InvalidReference: "Die angegebene Auswahl ist ungülting",
                    ResizeAlert: "Die Auswahl ist ungülting. Die oberste Zeile der Tabelle kann nicht verschoben werden und die darauffolgende Tabelle muss die orginale Version überlappen. Wählen Sie eine gültige Auswahl aus.",
                    RangeNotCreated: "Die Vergrößerung einer Zeile über das Maximum der Zeilenanzahl ist begrenzt in 'Als Tabelle formatieren'",
                    ResizeRestrictAlert: "Die Vergrößerung und Verkleinerung der Spalten und die Verkleinerung von Zeilen ist begrenzt in 'Als Tabelle formatieren'",
                    FATResizeTableText: "Geben Sie eine neue Datenauswahl für Ihre Tabelle an:",
                    FATReizeTableNote: "Bitte beachten Sie, dass die Überschriften nicht verschoben werden können und die darauffolgende Tabelle, die orginale Version überlappen muss.",
                    FormatAsTableAlert: "Es ist nicht möglich eine Tabelle mit nur einer Zeile zu generieren. Eine Tabelle muss mindestens zwei Zeilen haben, eine für die Überschriften und eine für die Daten.",
                    FormatAsTableTitle: "Light 1 / Light 2 / Light 3 / Light 4 / Licht-5 / Light 6 / Licht-7 / Light 8 / Light 9 / Light 10 / Light 11 / Light 12 / Medium 1 / Medium 2 / Medium 3 / Medium 4 / Medium 5 / Medium 6 / Medium 7 / Medium 8 / Dunkel 1 / Dark 2 / Dunkel 3 / Dunkel 4",
                    NewTableStyle: "Neue Tabellenformatvorlage",
                    ResizeTable: "Tabellengröße ändern",
                    ResizeTableContent: "Tabellengröße ändern durch hinzufügen oder entfernen von Zeilen und Spalten",
                    ConvertToRange: "Auswahl umwandeln",
                    ConvertToRangeContent: "Diese Tabelle in eine Normale auswahl von Zellen umwandeln",
                    ConverToRangeAlert: "Wollen Sie diese Tabelle in eine Normale auswahl von Zellen umwandeln?",
                    TableID: "Tabellen ID:",
                    Table: "Tabelle",
                    TableContent: "Tabelle zum organisieren und analysieren von zusammenhängenden Daten erstellen.",
                    TableStyleOptions: "Erste Spalte/Letzte Spalte/Gesamtreihe/Filtertaste",
                    Format: "Format",
                    NameManager: "Namen Manager",
                    NameManagerContent: "Erstellen, Bearbeiten, Löschen und Finden von allen Namen benützt in der Arbeitsmappe",
                    NameManagerFormulaContent: " Namen können als Ersatz für Zellenverweise in den Formeln benutzt werden",
                    DefinedNames: "Definierte Namen",
                    DefineName: "Definierte Namen",
                    DefineNameContent: "Namen definieren und Anwenden.",
                    UseInFormula: "In Formel benützen",
                    UseInFormulaContent: "Wählen Sie einen Namen aus der Arbeitsmappe aus und fügen Sie diesen in die aktuelle Formel ein.",
                    RefersTo: "In bezug auf",
                    Name: "Name",
                    Scope: "Bereich",
                    NMNameAlert: "Der Name den Sie verwendet haben ist ungültig./ Der Grund dafür kann sein/Der Name beginnt nicht mit einem Buchstaben oder Unterschrich/Der Name enthält Leerzeichen oder andere individuelle Zeichen/Der Name streitet sich mit einem Spreadsheet-Build-In Namen oder den Namen eines anderen Objektes in der Arbeitsmappe.",
                    NMUniqueNameAlert: "Der eingegebene Name existiert bereits. Bitte einen anderen eingeben.",
                    NMRangeAlert: "Einen gültigen Bereich auswählen",
                    FORMULAS: "Formeln",
                    DataValue: "Werte:",
                    Value: "Wert",
                    Formula: "Formeln",
                    MissingParenthesisAlert: "Der Formel fehlt eine öffnende oder schließende Klammer. Überprüfen Sie die Formel und fügen Sie die fehlende Klammer hinzu.",
                    UnsupportedFile: "Nicht unterstützte Datei",
                    IncorrectPassword: "Es ist nicht möglich die Datei oder Arbeitsmappe mit dem gegebenen Passwort zu öffnen",
                    InvalidUrl: "Bitte richtige URL angeben",
                    Up: "Hoch",
                    Down: "Runter",
                    Sheet: "Blatt",
                    Workbook: "Arbeitsmappe",
                    Rows: "Bei Zeilen",
                    Columns: "Bei Spalten",
                    FindReplace: "Suchen Ersetzen",
                    FindnReplace: "Suchen und Ersetzen",
                    Find: "Suchen",
                    Replace: "Ersetzen",
                    FindLabel: "Suchen nach:",
                    ReplaceLabel: "Ersetzen mit:",
                    ReplaceAll: "Alle ersetzen",
                    Close: "Schließen",
                    FindNext: "Weitersuchen",
                    FindPrev: "Letzter Fund",
                    Automatic: "Automatisch",
                    Manual: "Handbuch",
                    Settings: "Einstellungen",
                    MatchCase: "Spiel Fall",
                    MatchAll: "Gesamten Zelleninhalt anpassen",
                    Within: "Innerhalb:",
                    Search: "Suche:",
                    Lookin: "Hineinschauen:",
                    ShiftRight: "Zellen nach rechts verschieben",
                    ShiftBottom: "Zellen nach unten verschieben",
                    EntireRow: "Ganze Zeile",
                    EntireColumn: "Ganze Spalte",
                    ShiftUp: "Zellen nach oben verschieben",
                    ShiftLeft: "Zellen nach links verschieben",
                    Direction: "Richtung:",
                    GoTo: "Gehe zu ",
                    GoToName: "Gehe zu:",
                    Reference: "Bezug:",
                    Special: "Spezial",
                    Select: "Auswählen",
                    Comments: "Kommentare",
                    Formulas: "Formeln",
                    Constants: "Konstanten",
                    RowDiff: "Zeilenunterschied",
                    ColDiff: "Spaltenunterschied",
                    LastCell: "Letzte Zelle",
                    CFormat: "Bedingte Formatierung",
                    Blanks: "Blanks",
                    GotoError: "Fehler",
                    GotoLogicals: "Konsequenzen",
                    GotoNumbers: "Nummern",
                    GotoText: "Text",
                    FindSelect: "Finen und Auswählen",
                    Comment: "Kommentar",
                    NewComment: "Neu",
                    InsertComment: "Kommentar einfügen",
                    EditComment: "Bearbeiten",
                    DeleteComment: "Kommentar löschen",
                    DeleteCommentContent: "Ausgewählten Kommentar löschen.",
                    HideComment: "Kommentar verbergen",
                    Next: "Nächster",
                    NextContent: "Zum nächsten Kommentar springen.",
                    Previous: "früher",
                    PreviousContent: "Zum vorherigen Kommentar springen.",
                    ShowHide: "Kommentar anzeigen/verbergen",
                    ShowHideContent: "Anzeigen und verbergen des Kommentars in einer aktiven Zelle.",
                    ShowAll: "Alle Kommentare anzeigen",
                    ShowAllContent: "Alle Kommentare auf dem Blatt anzeigen.",
                    UserName: "Benutzername",
                    Hide: "Verbergen",
                    Unhide: "Sichtbar machen",
                    Add: "Hinzufügen",
                    DropAlert: "Wollen Sie die existierenden Daten ersetzten?",
                    PutCellColor: "Ausgewählte Zellenfarbe nach oben sortieren",
                    PutFontColor: "Ausgewählte Schriftfarbe nach oben sortieren",
                    WebPage: "Webseite",
                    WorkSheet: "Arbeitsmappenbezug",
                    SheetReference: "Blattbezug",
                    InsertHyperLink: "Hyperlink einfügen",
                    HyperLink: "Hyperlink",
                    EditLink: "Link bearbeiten",
                    OpenLink: "Link öffnen",
                    HyperlinkText: "Text:",
                    RemoveLink: "Link entfernen",
                    WebAddress: "Webadresse:",
                    CellAddress: "Handy-Nr:",
                    SheetIndex: "Einen Ort im Dokument aussuchen",
                    ClearAll: "Alles löschen",
                    ClearFormats: "Formate löschen",
                    ClearContents: "Inhalt löschen",
                    ClearComments: "Kommentare löschen",
                    ClearHyperLinks: "Hyperlinks löschen",
                    SortFilter: "Sortieren und Filtern",
                    SortFilterContent: "Ihre Daten anordnen so das es einfacher zum analysieren ist.",
                    NumberStart: "Minimum:",
                    NumberEnd: "Maximum:",
                    DecimalStart: "Minimum:",
                    DecimalEnd: "Maximum:",
                    DateStart: "Anfangsdatum:",
                    DateEnd: "Enddatum:",
                    ListStart: "Quelle:",
                    FreeText: "Fehlermeldung anzeigen nach Eingabe von ungültigen Daten",
                    ListEnd: "Zellbezug:",
                    TimeStart: "Startzeit:",
                    TimeEnd: "Endzeit:",
                    TextLengthStart: "Minimum:",
                    TextLengthEnd: "Maximum:",
                    CommentFindEndAlert: "Spreadsheet hat das Ende der Arbeitsmappe erreicht. Wollen Sie zum Anfang springen?",
                    InsertSheet: "Einfügen",
                    DeleteSheet: "Löschen",
                    RenameSheet: "Umbenennen",
                    MoveorCopy: "Verschieben oder Kopieren",
                    HideSheet: "Verstecken",
                    UnhideSheet: "Anzeigen",
                    SheetRenameAlert: "Der Name ist schon vergeben. Probieren Sie einen anderen aus.",
                    SheetRenameEmptyAlert: "Sie haben einen ungültigen Namen für das Blatt eingegeben. Stellen Sie sicher dass ",
                    SheetRenameEmptyCharExceedAlert: "der Name nicht 31 Zeichen überschreitet",
                    SheetRenameEmptySplCharAlert: " der Name keine der folgenden Zeichen enthält: ",
                    SheetRenameEmptyBlankAlert: " Sie nicht den Namen freigelassen haben.",
                    SheetDeleteAlert: "Sie können das Löschen von Blättern nicht rückgängig machen und verlieren möglicherweise Daten. Wenn Sie diese nicht benötigen, klicken Sie OK um zu löschen.",
                    SheetDeleteErrorAlert: "Eine Arbeitsmappe muss mindestens eine sicht",
                    CtrlKeyErrorAlert: "Dieses Befehl kann nicht gleichzeitig an mehreren Stellen benützt werden.",
                    ClipboardAccessError: "Ihr Browser kann die Zwischenablage nicht abrufen. Bitte die Tastenkombinationen benützen:",
                    MoveToEnd: "Zum Ende bewegen",
                    Beforesheet: "Vor dem Blatt:",
                    CreateaCopy: "Kopie erstellen",
                    AutoFillOptions: "Zellen Kopieren/Datenreihe ausfüllen/ nur Formate ausfüllen / ohne Formatiereungen ausfüllen / Blitzauswhal",
                    NumberValidationMsg: "Nur Zahlen eingeben",
                    DateValidationMsg: "Nur Datum eingeben",
                    Required: "Erforderlich",
                    TimeValidationMsg: "Die angegebene Zeit ist ungültig.",
                    cellAddrsValidationMsg: "Bezug ist ungültig.",
                    PivotTable: "Pivot-Tabelle",
                    PivotTableContent: "Einfache Anordung und Summierung von kompelxen daten in einer Pivot-Tabelle",
                    NumberTab: "Nummer",
                    AlignmentTab: "Ausrichtung",
                    FontTab: "Schriftart",
                    FillTab: "Füllen",
                    TextAlignment: "Textausrichtung",
                    Horizontal: "Horizontal",
                    Vertical: "Vertikal",
                    Indent: "Einzug",
                    TextControl: "Textkontrolle",
                    FontGroup: "Schriftart",
                    FontStyle: "Schriftstil:",
                    Size: "Größe:",
                    PSize: "Seitengröße",
                    Effects: "Effekte:",
                    StrikeThrough: "Durchgestrichen",
                    Overline: "Überstrich",
                    NormalFont: "Normale Schriftart",
                    Preview: "Vorschau",
                    Style: "Stil:",
                    Presets: "Voreinstellungen",
                    None: "Keiner",
                    Outline: "Gliederung",
                    AllSide: "Alle Folien",
                    InsCells: "Zellen einfügen",
                    InsRows: "Blatt Zeilen einfügen",
                    InsCols: "Blatt Spalten einfügen",
                    InsSheet: "Blatt einfügeh",
                    DelCells: "Zellen löschen",
                    DelRows: "Blatt Zeilen löschen",
                    DelCols: "Blatt Spalten löschen",
                    DelSheet: "Blatt löschen",
                    HyperLinkAlert: "Die Webadresse ist ungültig. Kontrollieren Sie die Adresse und versuchen es nocheinmal.",
                    ReplaceData: "Alles erledigt. Wir machten / Ersatz.",
                    NotFound: "Wir konnten nicht finden was Sie suchen. Klicken Sie auf Optionen um weitere Suchmöglichkeiten anzuzeigen.",
                    Data: "Daten:",
                    Allow: "Erlauben:",
                    IgnoreBlank: "Leerstellen ignorieren",
                    NotFind: "Es konnte keine Übereinstimmung gefunden werden",
                    FreezeTopRow: "Oberste Zeile fixieren",
                    FreezeFirstColumn: "Erste Spalte fixieren",
                    UnFreezePanes: "Verschiebung freigeben",
                    DestroyAlert: "Sind Sie sicher Sie wollen die aktuelle Arbeitsmappe verwerfen ohne zu speichern und eine neue erstellen?",
                    ImageValAlert: "Nur Bilddateien hochladen",
                    Pictures: "Bilder",
                    PicturesTitle: "Formulardatei",
                    PicturesContent: "Bilder hinzufügen vom Computer oder anderen Computer mit welchen Sie verbunden sind",
                    ImportAlert: "Sind Sie sicher Sie wollen die aktuelle Arbeitsmappe verwerfen ohne zu speichern und eine neue öffnen?",
                    UnmergeCells: "Zellenverbindung auflösen",
                    MergeCells: "Zellen verbinden",
                    MergeAcross: "Verbinden über",
                    MergeAndCenter: "Verbinden und Zentrieren",
                    MergeAndCenterContent: "Den Inhalt zentriert und in einer neuen, größeren Zelle zusammenfassen.",
                    MergeCellsAlert: "Beim Verbinden von Zellen bleibt nur der oberste, linke Wert erhalten, alle anderen werden verwrofen",
                    MergeInsertAlert: "Diese Operation sorgt dafür dass manche Zellenverbindungen aufgehoben werden. Wollen Sie fortfahren?",
                    Axes: "Achsen",
                    PHAxis: "Primär Horizontal",
                    PVAxis: "Primär Vertikal",
                    AxisTitle: "Achsentitel",
                    CTNone: "Ohne",
                    CTCenter: "Center",
                    CTFar: "Über Diagramm",
                    CTNear: "Mittig Überlagert",
                    DataLabels: "Datenbeschriftungen",
                    DLNone: "Keiner",
                    DLCenter: "Center",
                    DLIEnd: "Am Ende innerhalb",
                    DLIBase: "Am Anfang innerhalb",
                    DLOEnd: "Am Ende ausserhalb",
                    ErrorBar: "Fehlerbalken",
                    Gridline: "Gitternetzlinien",
                    PMajorH: "Primäres Hauptgitter Horizontal",
                    PMajorV: "Primäres Hauptgitter Vertikal",
                    PMinorH: "Primäres Hilfsgitter Horizontal",
                    PMinorV: "Primäres Hilfsgitter Vertikall",
                    Legend: "Legende",
                    LNone: "Keiner",
                    LLeft: "Links",
                    LRight: "Recht",
                    LBottom: "Boden",
                    LTop: "Oben",
                    ChartTitleDlgText: "Titel eingeben",
                    ChartTitle: "Titel",
                    InvalidTitle: "Sie haben einen ungültigen Namen für den Titel eingegeben.",
                    CorrectFormat: "Auswählen der richtigen Formatierungsdatei",
                    ResetPicture: "Bild zurücksetzten",
                    ResetPictureContent: "Alle formatierungsänderungen an diesem Bild zurücksetzten.",
                    PictureBorder: "Bildramen",
                    PictureBorderContent: "Wählen Sie die Farbe, Breite und Linienart aus für die Außenlinie der Form.",
                    ResetSize: "Bild und Größe zurücksetzen",
                    Height: "Höhe",
                    Width: "Breite",
                    ThemeColor: "Formatvorlagenfarbe",
                    NoOutline: "Keine Außenlinie",
                    Weight: "Gewicht",
                    Dashes: "Punkte",
                    ColumnChart: "Säule",
                    ColumnChartTitle: "Säulendiagramm einfügen",
                    ColumnChartContent: "Benützen Sie diesen Diagrammtypen um Werte zwischen Rupriken visuell zu vergleichen",
                    BarChart: "Bar",
                    BarChartTitle: "Balkendiagramm einfügen",
                    BarChartContent: "Benützen Sie diesen Diagrammtypen um Werte relativ zum Mittelpunkt anzuzeigen",
                    StockChart: "Radar",
                    StockChartTitle: "Netzdiagramm einfügen",
                    StockChartContent: "Verwenden Sie diese Diagrammtyp Werte relativ zu einem Mittelpunkt zu zeigen.",
                    LineChart: "Linie",
                    LineChartTitle: "Liniendiagramm einfügen",
                    LineChartContent: "Benützen Sie diesen Diagrammtypen um Trends über einen Zeitraum oder Kategorien anzuzeigen",
                    AreaChart: "Bereich",
                    AreaChartTitle: "Flächendiagramm einfügen",
                    AreaChartContent: "Benützen Sie diesen Diagrammtypen um Trends über einen Zeitraum oder Kategorien anzuzeigen und um die größe der Veränderung über die Zeit anzuzeigen",
                    ComboChart: "Kombination",
                    PieChart: "Kuchen",
                    PieChartTitle: "Kreis-/ Ringdiagramm einfügen",
                    PieChartContent: "Benützen Sie diesen Diagrammtypen um Proportionen eines Ganzen anzuzeigen und wenn die Summe der Werte 100% ist.",
                    ScatterChart: "Streuen",
                    ScatterChartTitle: "Punktdiagramm (X Y) einfügen",
                    ScatterChartContent: "Benützen Sie diesen Diagrammtypen um die Beziehungen zwischen Wertgruppen darzustellen.",
                    ClusteredColumn: "Gruppierte Säule",
                    StackedColumn: "Gestapelte Säule",
                    ClusteredBar: "Gruppierte Zeile",
                    StackedBar: "Gestapelte Zeile",
                    Radar: "Netz",
                    RadarMarkers: "Netz mit Datenpunkten",
                    Line: "Linie",
                    LineMarkers: "Linie mit Datenpunkten",
                    Area: "Fläche",
                    StackedArea: "Gestapelte Fläche",
                    Pie: "Kreis",
                    Doughnut: "Ring",
                    Scatter: "Streuen",
                    ChartRange: "Diagrammbereich",
                    XAxisRange: "X-Achsenbereich eintragen:",
                    YAxisRange: "Y-Achsenbereich eintragen:",
                    LegendRange: "Legendenbereich eintragen:",
                    YAxisMissing: "Y-Achsenbereich eintragen um Diagramm zu erstellen",
                    InvalidYAxis: "Y-Achsenbereich muss innerhalb des ausgewählten Bereiches liegen",
                    InvalidXAxis: "X-Achsenbereich muss innerhalb des ausgewählten Bereiches liegen",
                    InvalidLegend: "Legendenbereich muss innerhalb des ausgewählten Bereiches liegen",
                    InvalidXAxisColumns: "X-Achsenbereich sollte innerhalb einer einzelnen Spalte",
                    FreezePanes: "Verschiebung stoppen",
                    FreezePanesContent: "Teil des Blattes fixieren sodass es immer Sichtbar bleibt wärend man durch das Blatt scrollt.",
                    PasteContent: "Inhalt zu der Zwischenablage des Dokumentes hinzufügen",
                    PasteSplitContent: "Wählen Sie eine Einfügeoption aus wie ursprüngliches Format beibehalten oder zusammenführen",
                    CutContent: "Entfernt das Ausgewählte und legt es in die Zwischenablage, damit Sie es woanders einfügen können.",
                    CopyContent: "Legt eine Kopie der Auswahl in die Zwischenablage, damit Sie diese woanders einfügen können.",
                    FPTitle: "Format übertragen",
                    FPContent: "Gefallen Ihnen die Formatierungen von einer bestimmten Auswahl? Dann können Sie diesen Look auf die anderen Inhalte des Dokumentes anwenden.",
                    BoldContent: "Macht ihren Text fett",
                    ItalicContent: "Macht ihren Text kursiv.",
                    ULineContent: "Unterstreicht ihren Text",
                    LineTrContent: "Etwas Durchsteichen",
                    UndoContent: "Letzte Eingabe rückgänig machen.",
                    RedoContent: "Letzte Eingabe wiederholen.",
                    HyperLinkTitle: "Hyperlink hinzufügen",
                    HyperLinkContent: " Einen Hyperlink zu dem Dokument hinzufügen für einen schnellen Zugriff auf Webseiten und Daten",
                    HyperLinkPlaceContent: " Hyperlinks kann Sie auch in Ihrem Dokument zu Orten.",
                    NewCommentTitle: "Kommentar hinzufügen",
                    NewCommentContent: "Eine Notiz zu diesem Teil des Dokumentes hinzufügen.",
                    RefreshTitle: "auffrischen",
                    RefreshContent: "Bekommen Sie die aktuellsten Daten von der Quelle verbunden zu den aktiven Zellen",
                    FieldListTitle: "Feldliste",
                    FieldListContent: "Feldliste anzeigen oder verbergen.",
                    FieldListRemoveContent: " Die Feldliste erlaubt es Ihnen, Felder von dem PivotTabellen Report hinzuzufügen oder zu entfernen",
                    AddChartElement: "Diagrammelement hinzufügen",
                    AddChartElementContent: "Bestandteile zu dem bestehenden Diagramm hinzufügen.",
                    SwitchRowColumn: "Zeile/ Spalte tauschen",
                    SwitchRowColumnContent: "Daten über die Achse wechseln.",
                    MergeAlert: "Wir können das nicht auf einer verbundenen Stelle ausführen.",
                    UnhideDlgText: "Blatt anzeigen:",
                    ChartThemes: "Diagrammformatvorlagen",
                    ChartThemesContent: "Wählen Sie eine neue Formatvorlage für Ihr Diagramm",
                    ChangePicture: "Bild wechseln",
                    ChangePictureContent: "Zu einem anderen Bild wechseln und die Formatierung und Größe des aktuellen Bildes behalten.",
                    ChangeChartType: "Diagramtyp wechseln",
                    SelectData: "Daten auswählen",
                    SelectDataContent: "Die Datenauswahl des Diagramms verändern",
                    Sum: "Summe",
                    Average: "Durchschnittlich",
                    CountNumber: "Nummern zählen",
                    Max: "Max",
                    Min: "Min",
                    ChartType: "Diagrammtyp ändern",
                    ChartTypeContent: "Zu einem anderen Diagramm wechseln .",
                    AllCharts: "Alle Diagramme",
                    defaultfont: "Standart",
                    LGeneral: "General",
                    LCurrency: "Währung",
                    LAccounting: "Buchhaltung",
                    LDate: "Datum",
                    LTime: "Zeit",
                    LPercentage: "Prozent",
                    LFraction: "Bruch",
                    LScientific: "Wissenschaft",
                    LText: "Text",
                    LCustom: "Benutzerdefiniert",
                    FormatSample: "Beispiel",
                    Category: "Kategorie:",
                    Top: "Oben",
                    Center: "Center",
                    Bottom: "Boden",
                    Left: "Left (Indent)",
                    Right: "Recht",
                    Justify: "Rechtfertigen",
                    GeneralTxt: "Allgemeine Format Zellen haben keine bestimmte Anzahl Format.",
                    NegativeNumbersTxt: "Negative Zahlen",
                    ThousandSeparatorTxt: "1000er-Trennzeichen verwenden",
                    DecimalPlacesTxt: "Dezimalstellen:",
                    TextTxt: "Als Text formatierte Zellen behandeln auch Zahlen als Text. Der Zellinhalt wird genauso angezeigt wie eingegeben.",
                    BoldItalic: "Fett Kursiv",
                    Regular: "Normal",
                    HyperLinkHide: "Auswahl im Dokument",
                    InvalidSheetIndex: "Genauen Arbeitsblattindex angeben",
                    HugeDataAlert: "Datei zu groß zum öffnen",
                    ImportExportUrl: "Improt/Export URL eintragen und nocheinmal probieren.",
                    TitleScatterChart: "Streuen",
                    BetweenAlert: "Das Maximum muss größer sein als das Minimum.",
                    BorderStyles: "Solid / Eine gestrichelte / Gepunktete/ Doppelt",
                    FPaneAlert: "Verschiebung stoppen wurde nicht auf die erste Zelle angewendet",
                    ReplaceNotFound: "Spreadsheet kann keine Übereinstimmungen finden.",
                    BlankWorkbook: "leere Arbeitsmappe",
                    SaveAsExcel: "Speichern unter Excel",
                    SaveAsCsv: "Speichern als CSV",
                    SaveAsPdf: "Speichern als PDF",
                    Design: "DESIGN",
                    NewName: "Neuer Name",
                    FormulaBar: "Formelfeld",
                    NameBox: "Namensfeld",
                    NumberValMsg: "Dezimalwerte können nicht für Nummernbedingungen benützt werden",
                    NumberAlertMsg: "Nur Ziffern eingeben",
                    ListAlert: "Zellenbereich ist inkorrekt, bitte richtigen Zellenbereich eingeben.",
                    ListValAlert: "Die Listenquelle muss eine abgegrenzte Liste sein oder eine Referenz zu einer einzelnen Zeile oder Spalte haben.",
                    ListAlertMsg: "Der eingetragene Wert ist ungültig",
                    AutoFillTitle: "Auto-Fill-Optionen",
                    NewSheet: "Neues Blatt",
                    FullSheetCopyPasteAlert: "Wir können das nicht einfügen, da die Kopier und die Einfügefläche unterschiedliche Größen haben",
                    Heading: "Rubriken",
                    Gridlines: "Gitternetzlinien",
                    Firstsheet: "Zum ersten Blatt scrollen",
                    Lastsheet: "Zum letzten Blatt scrollen",
                    Nextsheet: "Zum nächsten Blatt scrollen",
                    Prevsheet: "Zum vorherigen Blatt scrollen",
                    ProtectWorkbook: "Arbeitsmappe schützen",
                    UnProtectWorkbook: "Arbeitsmappe ungeschützt",
                    ProtectWBContent: "Andere davon abhalten strukturelle Veränderungen an der Arbeitsmappe vorzunehmen",
                    Password: "Passwort",
                    ConfirmPassword: "Passwort erneut eingeben zum fortfahren:",
                    PasswordAlert1: "Passwortbestätigung ist nicht identisch.",
                    PasswordAlert2: "Bitte geben Sie ein Passwort ein.",
                    PasswordAlert3: "Das Passwort das sie eingegeben haben ist nicht richtig. Stellen Sie sicher, dass die Hochstelltaste deaktiviert ist.",
                    Protect: "ist geschützt.",
                    Lock: "ZelleSperren",
                    Unlock: "ZelleEntsperren",
                    Protectsheet: "Blatt schützten",
                    ProtectSheetToolTip: "Andere davon abhalten ungewünschte Veränderungen vorzunehmen durch die beschränkte Möglichkeit zu bearbeiten",
                    Unprotect: "Blattschutz aufheben",
                    LockAlert: "Die Zellen die sie versuchen zu verändern sind auf einem geschützen Arbeitsblatt. Um Änderungen vorzunehmen muss der Schutz aufgehoben werden im Vorschau Tab.",
                    CreateRule: "Neue Regel",
                    NewRule: "Neue Formatierungsregel",
                    NewRuleLabelContent: "Werte formatieren wo die Formel zutrifft:",
                    InsertDeleteAlert: "Diese Operation ist nicht erlaubt. Sie versucht Zellen in einer Tabelle in Ihrer Arbeitsmappe zu verschieben.",
                    ReadOnly: "Die Auswahl die Sie versuchen zu verändern enthält ReadOnly zellen.",
                    CreatePivotTable: "Pivot-Tabelle erstellen",
                    Range: "Auswahl:",
                    ChoosePivotTable: "Wählen Sie aus wo Sie die Pivot-Tabelle plaziert haben wollen",
                    NewWorksheet: "Neue Arbeitsmappe",
                    ExistingWorksheet: "Vorhandene Arbeitsmappe",
                    Location: "Ort:",
                    Refresh: "auffrischen",
                    PivotRowsAlert: "Dieser Befehl braucht mindestens zwei Zeilen von den Quellendaten. Sie können diesen Befehl nicht benützen mit der Auswahl nur einer Zeile",
                    PivotLabelsAlert: "Der Pivot-Tabellen Feldname ist ungültig. Um ein Pivot-Tabellen Bericht zu erstellen, braucht man Daten die in einer Liste mit beschrifteten Spalten organisert wurden.",
                    FieldList: "Feldliste",
                    MergeSortAlert: "Um dies zu tun müssen alle verbundenen Zellen die selbe größe haben",
                    FormulaSortAlert: "Die Auswahl enthält Formeln die nicht sortiert werden können.",
                    MergePreventInsertDelete: "Dieser Befehl ist nicht erlaubt. Der Befehl versucht verbundene Zellen auf der Arbeitsmappe zu verschieben.",
                    FormulaRuleMsg: "Bitte das richtige Format eingeben.",
                    MovePivotTable: "Pivot-Tabelle verschieben",
                    MovePivotTableContent: "Pivot-Tabelle an einen anderen Ort in der Arbeitsmappe verschieben.",
                    ClearAllContent: "Felder and Filter entfernen.",
                    ChangeDataSource: "Verändern",
                    ChangeDataSourceContent: "Die Quellendaten für die Pivot-Tabelle ändern",
                    ChangePivotTableDataSource: "Pivot-Tabelle Datenquelle ändern",
                    TotalRowAlert: "Dieser Befehl ist nicht erlaubt. Der Befehl versucht Zellen auf einer Arbeitsmappe zu verschieben. Klicke OK um mit der ganzen Zeile fortzufahren",
                    CellTypeAlert: "Diese Operation ist nicht erlaubt mit den ausgewählten Zelltypen.",
                    PivotOverlapAlert: "Ein Pivot-Tabellen Report kann nicht einen anderen Pivot-Tabellen Report überlappen",
                    NoCellFound: "Es wurden keine Zellen gefunden",
                    CorrectArgument: "Bitte geben Sie ein korrektes Argument ein",
                    CorrectFormula: "Bitte geben Sie die richtige Formel ein",
                    CorrectCellAddress: "Bitte geben Sie die richtige Zellenadresse ein",
                    ChartType: "Diagrammtyp",
                    NumberValidationAlert: "Das Maximum muss größer oder gleich das Minimum sein",
                    DateValidationAlert: "Das Enddatum muss größer oder gleich das Startdatum sein",
                    TimeValidationAlert: "Die Endzeit muss größer oder gleich der Startzeit sein",
                    NewRuleAlert: "Es ist ein Problem mit der Formel",
                    DragAlert: "Dieser Befehl konnte nicht ausgeführt werden, da Sie versucht haben Zellen innerhalb einer Filterbereich zu verschieben. Wählen Sie eine Auswahl außerhalb des Filterbereichs aus und probieren Sie es erneut.",
                    OR: "oder",
                    HOME: "START",
                    INSERT: "EINFÜGEN",
                    DATATAB: "DATEN",
                    PAGELAYOUT: "SEITENLAYOUT",
                    REVIEW: "ÜBERPRÜFEN",
                    OTHERS: "ANDERE",
                    FORMAT: "Format",
                    DESIGN: "ENTWURF",
                    CHARTDESIGN: "Diagrammdesign",
                    ANALYZE: "Analyse",
                    FileName: "Dateiname",
                    Save: "sparen",
                    SaveFile: "Datei speichern",
                    HighlightCellRules: "Zellenregeln hervorheben",
                    LightRedFillDark: "Hellrote Füllung mit Dunkelrotem Text",
                    YellowFillDark: "Gelbe Füllung mit Dunkelgelbem Text",
                    GreenFillDark: "Grüne Füllung mit Dunkelgrünen Text",
                    RedFill: "Rote Füllung",
                    RedText: "Roter Text",
                    Column: "Säule",
                    Bar: "Bar",
                    Line: "Linie",
                    DataValidationType: "Nummer / Dezimal / Datum / Zeit / Textlänge / Liste",
                    DataValidationAction: "Größer / größer oder gleich / kleiner als / kleiner oder gleich / gleich / nicht gleich / zwischen / nicht zwischen",
                    Modify: "Ändern",
                    Apply: "Sich bewerben",
                    NewCellStyle: "Neuer Zellstil",
                    cellStyleAlert: "Dieser Stilname existiert bereits",
                    modifyCellStyleAlert: "Dieser Stilname existiert nicht",
                    Color: "Farbe",
                    StyleName: "Stilname",
                    LShortdate: "Kurzes Date",
                    LLongdate: "Langes Datum",
                    Clipboard: "Zwischenablage",
                    Font: "Schriftart",
                    Actions: "Maßnahmen",
                    Styles: "Stile",
                    Editing: "Bearbeitung",
                    Tables: "Tabellen",
                    Illustrations: "Illustrationen",
                    Links: "Verbindungen",
                    Charts: "Diagramme",
                    DataTools: "Datenwerkzeuge",
                    Show: "Show",
                    PageLayout: "Seitenlayout",
                    Changes: "Änderungen",
                    Window: "Fenster",
                    Cells: "Zellen",
                    Calculation: "Berechnung",
                    Properties: "Eigenschaften",
                    Tools: "Werkzeuge",
                    TableStyleOption: "Tabellenstiloptionen",
                    ChartLayouts: "Diagrammlayouts",
                    ChartDesignData: "Daten",
                    ChartDesignType: "Art",
                    ChartDesignSize: "Größe",
                    Adjust: "Einstellen",
                    FormatSize: "Größe",
                    AnalyzePivotTable: "Pivot-Tabelle",
                    DataSource: "Datenquelle",
                    FATTitlePrefix: "Tabellenstil",
                    HighPoint: "Hochpunkt",
                    LowPoint: "Tiefpunkt",
                    FirstPoint: "Erster Punkt",
                    LastPoint: "Letzter Punkt",
                    NegativePoint: "Negative Punkte",
                    Markers: "Markierungen",
                    NegativePoints: "Negative Punkte",
                    LineSparklineTitle: "Linie Sparkline einfügen",
                    LineSparklineContent: "Sparklines sind Minitabellen, die in einer Zelle angeordnet sind und jeweils eine Datenzeile in Ihrer Auswahl darstellen",
                    ColumnSparklineTitle: "Spalte Sparkline einfügen",
                    ColumnSparklineContent: "Sparklines sind Minitabellen, die in einer Zelle angeordnet sind und jeweils eine Datenzeile in Ihrer Auswahl darstellen",
                    WinLossSparklineTitle: "Fügen Sie Win / Loss Sparkline ein",
                    WinLossSparklineContent: "Sparklines sind Minitabellen, die in einer Zelle angeordnet sind und jeweils eine Datenzeile in Ihrer Auswahl darstellen.",
                    Line: "Linie",
                    SparklineColor: "Sparkline-Farbe",
                    SparklineColorTitle: "Sparkline-Farbe",
                    SparklineColorContent: "Geben Sie die Farbe der Sparklines in der ausgewählten Sparkline-Gruppe an",
                    MarkerColor: "Markierungsfarbe",
                    MarkerColorContent: "Ändern Sie die Farbe für negative Punkte, Markierungen und alle anderen Punkte für die ausgewählte Sparkline-Gruppe",
                    ChooseDataRange: "Wählen Sie den Datenbereich",
                    ChooseLocationRange: "Wählen Sie den Standortbereich",
                    DataRange: "Datenreichweite",
                    LocationRange: "Standortbereich",
                    EmptyDLRnge: "Die Datenquellen- oder -lokationsreferenz ist nicht gültig",
                    SourceDataRange: "Wählen Sie einen Quelldatenbereich für die Sparkline aus",
                    SparklineAlert: "Die Ortsreferenz ist nicht gültig, da sich die Zellen nicht alle in derselben Spalte oder derselben Zeile befinden. Wählen Sie Zellen aus, die sich alle in einer einzelnen Zeile oder einer einzelnen Spalte befinden",
                    SparklineDataAlert: "Geben Sie das korrekte Datenformat ein",
                    SparklineLocAlert: "Die Referenz für den Standort oder Datenbereich ist nicht gültig",
                    SDataRangeAlert: "Die Datenquellenreferenz ist nicht gültig",
                    LineAlert: "Das Liniendiagramm für einen einzelnen Wert kann nicht erstellt werden",
                    EditData: "Daten bearbeiten",
                    EditDataContent: "Gruppenstandort und Daten bearbeiten",
                    EditSingleSparklineData: "Einzelne Sparkline-Daten bearbeiten",
                    EditSparklineData: "Sparkline-Daten bearbeiten",
                    HiddenEmptyCells: "Versteckte und leere Zellen",
                    SwitchRowCol: "Zeile / Spalte wechseln",
                    CreateSparkline: "Erstellen Sie eine Sparkline",
                    SelectDataSource: "Wählen Sie einen Quelldatenbereich für die Sparkline aus",
                    SPARKLINEDESIGN: "Sparkline-Design",
                };
                break;
            case "ejTimePicker":
                ej.TimePicker.Locale = ej.TimePicker.Locale || {};
                ej.TimePicker.Locale["de-DE"] = {
                    watermarkText: "Wählen Sie eine Zeit aus",
                };
                break;
            case "ejTreeGrid":
                ej.TreeGrid.Locale = ej.TreeGrid.Locale || {};
                ej.TreeGrid.Locale["de-DE"] = {
                    toolboxTooltipTexts: {
                        addTool: "Hinzufügen",
                        editTool: "Bearbeiten",
                        updateTool: "Aktualisieren",
                        deleteTool: "Löschen",
                        cancelTool: "Stornieren",
                        expandAllTool: "Alle erweitern",
                        collapseAllTool: "Alles reduzieren",
                        pdfExportTool: "PDF exportieren",
                        excelExportTool: "Excel exportieren",
                        printTool: "drucken",
                        searchTool: "Suche"
                    },
                    contextMenuTexts: {
                        addRowText: "Zeile hinzufügen",
                        editText: "Bearbeiten",
                        deleteText: "Löschen",
                        saveText: "sparen",
                        cancelText: "Stornieren",
                        aboveText: "Über",
                        belowText: "Unten"
                    },
                    columnMenuTexts: {
                        sortAscendingText: "Aufsteigend sortieren",
                        sortDescendingText: "Absteigend sortieren",
                        columnsText: "Spalten",
                        freezeText: "Fixieren",
                        unfreezeText: "Freigeben",
                        freezePrecedingColumnsText: "Vorangehende Spalten fixieren",
                        insertColumnLeft: "Spalte links einfügen",
                        insertColumnRight: "Spalte rechts einfügen",
                        deleteColumn: "Spalte löschen",
                        renameColumn: "Umbenennen Spalte",
                        menuFilter: "Filter"
                    },
                    filterMenuTexts: {
                        stringMenuOptions: [
                            { text: "Beginnt mit", value: "startswith" },
                            { text: "Endet mit", value: "endswith" },
                            { text: "Enthält", value: "contains" },
                            { text: "Entspricht", value: "equal" },
                            { text: "Ist nicht gleich", value: "notequal" }
                        ],
                        numberMenuOptions: [
                            { text: "Weniger als", value: "lessthan" },
                            { text: "Größer als", value: "greaterthan" },
                            { text: "Gleich oder kleiner als", value: "lessthanorequal" },
                            { text: "Größer als oder gleich wie", value: "greaterthanorequal" },
                            { text: "Entspricht", value: "equal" },
                            { text: "Ist nicht gleich", value: "notequal" }
                        ],
                        filterValue: "Filterwert",
                        filterButton: "Filter",
                        clearButton: "Klar",
                        enterValueText: "geben Sie den Wert ein"
                    },
                    columnDialogTexts: {
                        field: "Feld",
                        headerText: "Überschrift",
                        editType: "Bearbeiten Art",
                        filterEditType: "Filter Typ bearbeiten",
                        allowFiltering: "Lassen Filterung",
                        allowFilteringBlankContent: "Lassen Sie Filtering Blank Inhalt",
                        allowSorting: "Lassen Sortierung",
                        visible: "Sichtbar",
                        width: "Breite",
                        textAlign: "Textausrichtung",
                        headerTextAlign: "Textausrichtung",
                        isFrozen: "Ist fixiert",
                        allowFreezing: "Fixierung erlauben",
                        columnsDropdownData: "Spalte Drop Down Daten",
                        dropdownTableText: "Text",
                        dropdownTableValue: "Wert",
                        addData: "Hinzufügen",
                        deleteData: "Entfernen",
                        allowCellSelection: "Lassen Zellselektion",
                        showInColumnChooser: "Show In Column Chooser",
                        displayAsCheckbox: "Als Kontrollkästchen anzeigen",
                        clipMode: "Clip-Modus",
                        tooltip: "Tooltip",
                        headerTooltip: "Header-Tooltip"
                    },
                    editTypeTexts: {
                        string: "String",
                        numeric: "Numerisch",
                        datePicker: "Datumsauswahl",
                        dateTimePicker: "Datum Zeitauswahl",
                        dropdown: "Dropdown-Liste",
                        boolean: "Boolesch"
                    },
                    textAlignTypes: {
                        right: "Recht",
                        left: "Links",
                        center: "Center"
                    },
                    clipModeTexts: {
                        clip: "Clip",
                        ellipsis: "Ellipse"
                    },
                    columnDialogTitle: {
                        insertColumn: "Spalte einfügen",
                        deleteColumn: "Spalte löschen",
                        renameColumn: "Umbenennen Spalte"
                    },
                    deleteColumnText: "Sind Sie sicher, dass Sie diese Spalte zu löschen?",
                    deleteRecordText: "Möchten Sie den Datensatz wirklich löschen?",
                    okButtonText: "OK",
                    cancelButtonText: "Stornieren",
                    confirmDeleteText: "Löschen bestätigen",
                    dropDownListBlanksText: "(Rohlinge)",
                    dropDownListClearText: "(Filter löschen)",
                    trueText: "Wahr",
                    falseText: "Falsch",
                    emptyRecord: "Keine Aufzeichnungen angezeigt",
                };
                break;
            case "ejUploadbox":
                ej.Uploadbox.Locale = ej.Uploadbox.Locale || {};
                ej.Uploadbox.Locale["de-DE"] = {
                    buttonText: {
                        upload: "Hochladen",
                        browse: "blättern",
                        cancel: "Stornieren",
                        close: "Schließen"
                    },
                    dialogText: {
                        title: "hochladen Box",
                        name: "Name",
                        size: "Größe",
                        status: "Status"
                    },
                    dropAreaText: "Drop von Dateien oder klicken Sie zum Hochladen",
                    filedetail: "Die ausgewählte Datei ist zu groß. Bitte wählen Sie eine Datei innerhalb der gültigen Größe.",
                    denyError: "Dateien mit #Extension Erweiterungen sind nicht erlaubt.",
                    allowError: "Nur Dateien mit #Extension Erweiterungen sind erlaubt.",
                    cancelToolTip: "Stornieren",
                    removeToolTip: "Entfernen",
                    retryToolTip: "Wiederholen",
                    completedToolTip: "vollendet",
                    failedToolTip: "Gescheitert",
                    closeToolTip: "Schließen",
                };
                break;
            case "ejSpellCheck":
                ej.SpellCheck.Locale = ej.SpellCheck.Locale || {};
                ej.SpellCheck.Locale["de-DE"] = {
                    SpellCheckButtonText: "Rechtschreibung",
                    NotInDictionary: "Nicht im Wörterbuch",
                    SuggestionLabel: "Vorschlag",
                    IgnoreOnceButtonText: "Einmal Ignorieren",
                    IgnoreAllButtonText: "Alle Ignorieren",
                    AddToDictionary: "Zum Wörterbuch hinzufügen",
                    ChangeButtonText: "Ändern",
                    ChangeAllButtonText: "Alle ändern",
                    CloseButtonText: "Schließen",
                    CompletionPopupMessage: "Rechtschreibungsprüfung ist abgeschlossen",
                    CompletionPopupTitle: "Rechtschreibungsprüfung",
                    Ok: "OK",
                    NoSuggestionMessage: "Keine Vorschläge zur Verfügung"
                };
                break;
            case "ejMediaPlayer":
                ej.MediaPlayer.Locale = ej.MediaPlayer.Locale || {};
                ej.MediaPlayer.Locale["de-DE"] = {
                    "Play": "spielen",
                    "Pause": "Pause",
                    "Mute": "Stumm",
                    "Unmute": "Stummschalten",
                    "Settings": "Einstellungen",
                    "FullScreen": "Vollbild",
                    "ExitFullScreen": "Vollbild verlassen",
                    "HidePlaylist": "Playlist ausblenden",
                    "Previous": "Bisherige",
                    "Next": "Nächster",
                    "TogglePlaylist": "Playlist abspielen",
                    "Rewind": "Zurückspulen",
                    "Forward": "Vorwärts",
                    "Playlist": "Wiedergabeliste",
                    "RepeatPlaylist": "Wiedergabeliste wiederholen",
                    "Shuffle": "Shuffle",
                    "VideoTitle": "Video",
                    "PlaylistTitle": "Wiedergabeliste",
                    "PlaylistItemName": "Listenpunkt",
                    "PlaylistItemAuthor": "Autor",
                    "Media": "Medien",
                    "Speed": "Geschwindigkeit",
                    "Quality": "Qualität",
                    "Normal": "Normal",
                    "Auto": "Auto"
                };
                break;
            case "ejListView":
                ej.ListView.Locale = ej.ListView.Locale || {};
                ej.ListView.Locale["de-DE"] = {
                    headerTitle: "Titel",
                    headerBackButtonText: "Zurück"
                };
                break;
            case "ejTile":
                ej.Tile.Locale = ej.Tile.Locale || {};
                ej.Tile.Locale["de-DE"] = {
                    captionText: "text"
                };
                break;
        }
    }
    widgets = ej.widget.registeredWidgets;
    for (name in widgets)
        $.fn.Locale_deDE(name);
    if (ej.ExcelFilter)
        $.fn.Locale_deDE("ejExcelFilter");
})(window.jQuery, window.Syncfusion)