// /** The generic diagnostic that the plugin returns. */
// export enum SelphiPluginFinishStatus {
//     Ok = 1,
//     Error = 2,
//     CancelByUser = 3,
//     Timeout = 4
// }

// /** The type of exception due to an issue during the plugin call */
// export enum SelphiPluginErrorType {
//     UnknownError = 1,
//     NoError = 2,
//     CameraPermissionDenied = 3,
//     SettingsPermissionDenied = 4,
//     HardwareError = 5,
//     ExtractionLicenseError = 6,
//     ControlNotInitializedError = 7,
//     BadExtractorConfiguration = 8
// }

// /** The diagnostic code for the liveness passive process. This diagnostic is returned after the web service request. */
// export enum SelphiPassiveDiagnostic {
//     None = 0,
//     Spoof = 1,
//     Uncertain = 2,
//     Live = 3,
//     NoneBecauseBadQuality = 4,
//     NoneBecauseFaceTooClose = 5,
//     NoneBecauseFaceNotFound = 6,
//     NoneBecauseFaceTooSmall = 7,
//     NoneBecauseAngleTooLarge = 8,
//     NoneBecauseImageDataError = 9,
//     NoneBecauseInternalError = 10,
//     NoneBecauseImagePreprocessError = 11,
//     NoneBecauseTooManyFaces = 12
// }

/** The scan operation. Wizard mode scans both sides sequentially (RECOMMENDED) . */
export enum SelphIDOperationMode {
    CaptureFront = 'Front',
    CaptureBack = 'Back',
    CaptureWizard = 'Wizard'
}

/** The mode of scan. */
export enum SelphIDScanMode {
    GenericMode = 'Generic',
    SpecificMode = 'Specific',
    SearchMode = 'Search'
}

/** The type of document to scan. */
export enum SelphIDDocumentType {
    IDCard = 'DT_IDCard',
    Passport = 'DT_Passport',
    DriversLicense = 'DT_DriversLicense',
    ForeignCard = 'DT_ForeignCard',
    CreditCard = 'DT_CreditCard'
}

/** The generic diagnostic that the plugin returns. */
export enum SelphIDPluginFinishStatus {
    Ok = 1,
    Error = 2,
    CancelByUser = 3,
    Timeout = 4
}

/** The type of exception due to an issue during the plugin call */
export enum SelphIDPluginErrorType {
    UnknownError = 1,
    NoError = 2,
    CameraPermissionDenied = 3,
    SettingsPermissionDenied = 4,
    HardwareError = 5,
    ExtractionLicenseError = 6,
    UnexpectedCaptureError = 7,
    ControlNotInitializedError = 8,
    BadExtractorConfiguration = 9
}

/** The generic timeout that the plugin returns. */
export enum SelphIDTimeoutType {
    Short = 'Short',
    Medium = 'Medium',
    Long = 'Long'
}
