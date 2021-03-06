(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./Configuration', './ApiClient', './model/ServiceInformation', './model/ServiceVersion', './model/ErrorDetails', './model/ResourceInformation', './model/NameValue', './model/AccountInformation', './model/CustomFields', './model/TextCustomField', './model/ListCustomField', './model/FileTypeList', './model/FileType', './model/EnvelopesInformation', './model/Envelope', './model/Notification', './model/Reminders', './model/Expirations', './model/EmailSettings', './model/BccEmailAddress', './model/LockInformation', './model/UserInfo', './model/EnvelopeTransactionStatus', './model/EnvelopeDefinition', './model/Document', './model/MatchBox', './model/Recipients', './model/Signer', './model/RecipientSignatureInformation', './model/Tabs', './model/SignHere', './model/MergeField', './model/InitialHere', './model/SignerAttachment', './model/Approve', './model/Decline', './model/FullName', './model/DateSigned', './model/EnvelopeId', './model/Company', './model/Title', './model/Text', './model/Number', './model/Ssn', './model/Date', './model/Zip', './model/Email', './model/Note', './model/Checkbox', './model/RadioGroup', './model/Radio', './model/List', './model/ListItem', './model/FirstName', './model/LastName', './model/EmailAddress', './model/FormulaTab', './model/OfflineAttributes', './model/SocialAuthentication', './model/RecipientPhoneAuthentication', './model/RecipientSAMLAuthentication', './model/SamlAssertionAttribute', './model/RecipientSMSAuthentication', './model/IdCheckInformationInput', './model/AddressInformationInput', './model/AddressInformation', './model/DobInformationInput', './model/Ssn4InformationInput', './model/Ssn9InformationInput', './model/Attachment', './model/RecipientEmailNotification', './model/AuthenticationStatus', './model/EventResult', './model/Agent', './model/Editor', './model/Intermediary', './model/CarbonCopy', './model/CertifiedDelivery', './model/InPersonSigner', './model/EventNotification', './model/EnvelopeEvent', './model/RecipientEvent', './model/TemplateRole', './model/CompositeTemplate', './model/ServerTemplate', './model/InlineTemplate', './model/EnvelopeSummary', './model/EnvelopeIdsRequest', './model/EnvelopeUpdateSummary', './model/BulkEnvelopeStatus', './model/BulkEnvelope', './model/ReturnUrlRequest', './model/ViewUrl', './model/CorrectViewRequest', './model/RecipientViewRequest', './model/ViewLinkRequest', './model/EnvelopeAuditEventResponse', './model/EnvelopeAuditEvent', './model/CustomFieldsEnvelope', './model/LockRequest', './model/TemplateInformation', './model/TemplateSummary', './model/TemplateMatch', './model/DocumentTemplateList', './model/DocumentTemplate', './model/EnvelopeDocumentsResult', './model/EnvelopeDocument', './model/SignatureType', './model/DocumentFieldsInformation', './model/RecipientsUpdateSummary', './model/RecipientUpdateResponse', './model/FoldersResponse', './model/Folder', './model/Filter', './model/FolderItemsResponse', './model/FolderItem', './model/CustomFieldV2', './model/FoldersRequest', './model/FolderItemResponse', './model/FolderItemV2', './model/AccountSettingsInformation', './model/AccountSharedAccess', './model/MemberSharedItems', './model/SharedItem', './model/EnvelopeTemplate', './model/EnvelopeTemplateDefinition', './model/EnvelopeTemplateResults', './model/EnvelopeTemplateResult', './model/TemplateUpdateSummary', './model/TemplateCustomFields', './model/TemplateNotificationRequest', './model/TemplateDocumentsResult', './model/PageRequest', './model/TemplateRecipients', './model/TemplateTabs', './model/GroupInformation', './model/Group', './model/UserSettingsInformation', './model/SignerEmailNotifications', './model/SenderEmailNotifications', './model/ConsoleViewRequest', './model/TabMetadataList', './model/TabMetadata', './model/ApiRequestLogsResult', './model/ApiRequestLog', './model/DiagnosticsSettingsInformation', './model/LoginInformation', './model/LoginAccount', './api/EnvelopesApi', './api/DiagnosticsApi', './api/CustomTabsApi', './api/AuthenticationApi', './api/TemplatesApi', './api/FoldersApi', './api/UsersApi', './api/AccountsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./Configuration'), require('./ApiClient'), require('./model/ServiceInformation'), require('./model/ServiceVersion'), require('./model/ErrorDetails'), require('./model/ResourceInformation'), require('./model/NameValue'), require('./model/AccountInformation'), require('./model/CustomFields'), require('./model/TextCustomField'), require('./model/ListCustomField'), require('./model/FileTypeList'), require('./model/FileType'), require('./model/EnvelopesInformation'), require('./model/Envelope'), require('./model/Notification'), require('./model/Reminders'), require('./model/Expirations'), require('./model/EmailSettings'), require('./model/BccEmailAddress'), require('./model/LockInformation'), require('./model/UserInfo'), require('./model/EnvelopeTransactionStatus'), require('./model/EnvelopeDefinition'), require('./model/Document'), require('./model/MatchBox'), require('./model/Recipients'), require('./model/Signer'), require('./model/RecipientSignatureInformation'), require('./model/Tabs'), require('./model/SignHere'), require('./model/MergeField'), require('./model/InitialHere'), require('./model/SignerAttachment'), require('./model/Approve'), require('./model/Decline'), require('./model/FullName'), require('./model/DateSigned'), require('./model/EnvelopeId'), require('./model/Company'), require('./model/Title'), require('./model/Text'), require('./model/Number'), require('./model/Ssn'), require('./model/Date'), require('./model/Zip'), require('./model/Email'), require('./model/Note'), require('./model/Checkbox'), require('./model/RadioGroup'), require('./model/Radio'), require('./model/List'), require('./model/ListItem'), require('./model/FirstName'), require('./model/LastName'), require('./model/EmailAddress'), require('./model/FormulaTab'), require('./model/OfflineAttributes'), require('./model/SocialAuthentication'), require('./model/RecipientPhoneAuthentication'), require('./model/RecipientSAMLAuthentication'), require('./model/SamlAssertionAttribute'), require('./model/RecipientSMSAuthentication'), require('./model/IdCheckInformationInput'), require('./model/AddressInformationInput'), require('./model/AddressInformation'), require('./model/DobInformationInput'), require('./model/Ssn4InformationInput'), require('./model/Ssn9InformationInput'), require('./model/Attachment'), require('./model/RecipientEmailNotification'), require('./model/AuthenticationStatus'), require('./model/EventResult'), require('./model/Agent'), require('./model/Editor'), require('./model/Intermediary'), require('./model/CarbonCopy'), require('./model/CertifiedDelivery'), require('./model/InPersonSigner'), require('./model/EventNotification'), require('./model/EnvelopeEvent'), require('./model/RecipientEvent'), require('./model/TemplateRole'), require('./model/CompositeTemplate'), require('./model/ServerTemplate'), require('./model/InlineTemplate'), require('./model/EnvelopeSummary'), require('./model/EnvelopeIdsRequest'), require('./model/EnvelopeUpdateSummary'), require('./model/BulkEnvelopeStatus'), require('./model/BulkEnvelope'), require('./model/ReturnUrlRequest'), require('./model/ViewUrl'), require('./model/CorrectViewRequest'), require('./model/RecipientViewRequest'), require('./model/ViewLinkRequest'), require('./model/EnvelopeAuditEventResponse'), require('./model/EnvelopeAuditEvent'), require('./model/CustomFieldsEnvelope'), require('./model/LockRequest'), require('./model/TemplateInformation'), require('./model/TemplateSummary'), require('./model/TemplateMatch'), require('./model/DocumentTemplateList'), require('./model/DocumentTemplate'), require('./model/EnvelopeDocumentsResult'), require('./model/EnvelopeDocument'), require('./model/SignatureType'), require('./model/DocumentFieldsInformation'), require('./model/RecipientsUpdateSummary'), require('./model/RecipientUpdateResponse'), require('./model/FoldersResponse'), require('./model/Folder'), require('./model/Filter'), require('./model/FolderItemsResponse'), require('./model/FolderItem'), require('./model/CustomFieldV2'), require('./model/FoldersRequest'), require('./model/FolderItemResponse'), require('./model/FolderItemV2'), require('./model/AccountSettingsInformation'), require('./model/AccountSharedAccess'), require('./model/MemberSharedItems'), require('./model/SharedItem'), require('./model/EnvelopeTemplate'), require('./model/EnvelopeTemplateDefinition'), require('./model/EnvelopeTemplateResults'), require('./model/EnvelopeTemplateResult'), require('./model/TemplateUpdateSummary'), require('./model/TemplateCustomFields'), require('./model/TemplateNotificationRequest'), require('./model/TemplateDocumentsResult'), require('./model/PageRequest'), require('./model/TemplateRecipients'), require('./model/TemplateTabs'), require('./model/GroupInformation'), require('./model/Group'), require('./model/UserSettingsInformation'), require('./model/SignerEmailNotifications'), require('./model/SenderEmailNotifications'), require('./model/ConsoleViewRequest'), require('./model/TabMetadataList'), require('./model/TabMetadata'), require('./model/ApiRequestLogsResult'), require('./model/ApiRequestLog'), require('./model/DiagnosticsSettingsInformation'), require('./model/LoginInformation'), require('./model/LoginAccount'), require('./api/EnvelopesApi'), require('./api/DiagnosticsApi'), require('./api/CustomTabsApi'), require('./api/AuthenticationApi'), require('./api/TemplatesApi'), require('./api/FoldersApi'), require('./api/UsersApi'), require('./api/AccountsApi'));
  }
}(function(Configuration, ApiClient, ServiceInformation, ServiceVersion, ErrorDetails, ResourceInformation, NameValue, AccountInformation, CustomFields, TextCustomField, ListCustomField, FileTypeList, FileType, EnvelopesInformation, Envelope, Notification, Reminders, Expirations, EmailSettings, BccEmailAddress, LockInformation, UserInfo, EnvelopeTransactionStatus, EnvelopeDefinition, Document, MatchBox, Recipients, Signer, RecipientSignatureInformation, Tabs, SignHere, MergeField, InitialHere, SignerAttachment, Approve, Decline, FullName, DateSigned, EnvelopeId, Company, Title, Text, Number, Ssn, Date, Zip, Email, Note, Checkbox, RadioGroup, Radio, List, ListItem, FirstName, LastName, EmailAddress, FormulaTab, OfflineAttributes, SocialAuthentication, RecipientPhoneAuthentication, RecipientSAMLAuthentication, SamlAssertionAttribute, RecipientSMSAuthentication, IdCheckInformationInput, AddressInformationInput, AddressInformation, DobInformationInput, Ssn4InformationInput, Ssn9InformationInput, Attachment, RecipientEmailNotification, AuthenticationStatus, EventResult, Agent, Editor, Intermediary, CarbonCopy, CertifiedDelivery, InPersonSigner, EventNotification, EnvelopeEvent, RecipientEvent, TemplateRole, CompositeTemplate, ServerTemplate, InlineTemplate, EnvelopeSummary, EnvelopeIdsRequest, EnvelopeUpdateSummary, BulkEnvelopeStatus, BulkEnvelope, ReturnUrlRequest, ViewUrl, CorrectViewRequest, RecipientViewRequest, ViewLinkRequest, EnvelopeAuditEventResponse, EnvelopeAuditEvent, CustomFieldsEnvelope, LockRequest, TemplateInformation, TemplateSummary, TemplateMatch, DocumentTemplateList, DocumentTemplate, EnvelopeDocumentsResult, EnvelopeDocument, SignatureType, DocumentFieldsInformation, RecipientsUpdateSummary, RecipientUpdateResponse, FoldersResponse, Folder, Filter, FolderItemsResponse, FolderItem, CustomFieldV2, FoldersRequest, FolderItemResponse, FolderItemV2, AccountSettingsInformation, AccountSharedAccess, MemberSharedItems, SharedItem, EnvelopeTemplate, EnvelopeTemplateDefinition, EnvelopeTemplateResults, EnvelopeTemplateResult, TemplateUpdateSummary, TemplateCustomFields, TemplateNotificationRequest, TemplateDocumentsResult, PageRequest, TemplateRecipients, TemplateTabs, GroupInformation, Group, UserSettingsInformation, SignerEmailNotifications, SenderEmailNotifications, ConsoleViewRequest, TabMetadataList, TabMetadata, ApiRequestLogsResult, ApiRequestLog, DiagnosticsSettingsInformation, LoginInformation, LoginAccount, EnvelopesApi, DiagnosticsApi, CustomTabsApi, AuthenticationApi, TemplatesApi, FoldersApi, UsersApi, AccountsApi) {
  'use strict';

  return {
    Configuration: Configuration,
    ApiClient: ApiClient,
    ServiceInformation: ServiceInformation,
    ServiceVersion: ServiceVersion,
    ErrorDetails: ErrorDetails,
    ResourceInformation: ResourceInformation,
    NameValue: NameValue,
    AccountInformation: AccountInformation,
    CustomFields: CustomFields,
    TextCustomField: TextCustomField,
    ListCustomField: ListCustomField,
    FileTypeList: FileTypeList,
    FileType: FileType,
    EnvelopesInformation: EnvelopesInformation,
    Envelope: Envelope,
    Notification: Notification,
    Reminders: Reminders,
    Expirations: Expirations,
    EmailSettings: EmailSettings,
    BccEmailAddress: BccEmailAddress,
    LockInformation: LockInformation,
    UserInfo: UserInfo,
    EnvelopeTransactionStatus: EnvelopeTransactionStatus,
    EnvelopeDefinition: EnvelopeDefinition,
    Document: Document,
    MatchBox: MatchBox,
    Recipients: Recipients,
    Signer: Signer,
    RecipientSignatureInformation: RecipientSignatureInformation,
    Tabs: Tabs,
    SignHere: SignHere,
    MergeField: MergeField,
    InitialHere: InitialHere,
    SignerAttachment: SignerAttachment,
    Approve: Approve,
    Decline: Decline,
    FullName: FullName,
    DateSigned: DateSigned,
    EnvelopeId: EnvelopeId,
    Company: Company,
    Title: Title,
    Text: Text,
    Number: Number,
    Ssn: Ssn,
    Date: Date,
    Zip: Zip,
    Email: Email,
    Note: Note,
    Checkbox: Checkbox,
    RadioGroup: RadioGroup,
    Radio: Radio,
    List: List,
    ListItem: ListItem,
    FirstName: FirstName,
    LastName: LastName,
    EmailAddress: EmailAddress,
    FormulaTab: FormulaTab,
    OfflineAttributes: OfflineAttributes,
    SocialAuthentication: SocialAuthentication,
    RecipientPhoneAuthentication: RecipientPhoneAuthentication,
    RecipientSAMLAuthentication: RecipientSAMLAuthentication,
    SamlAssertionAttribute: SamlAssertionAttribute,
    RecipientSMSAuthentication: RecipientSMSAuthentication,
    IdCheckInformationInput: IdCheckInformationInput,
    AddressInformationInput: AddressInformationInput,
    AddressInformation: AddressInformation,
    DobInformationInput: DobInformationInput,
    Ssn4InformationInput: Ssn4InformationInput,
    Ssn9InformationInput: Ssn9InformationInput,
    Attachment: Attachment,
    RecipientEmailNotification: RecipientEmailNotification,
    AuthenticationStatus: AuthenticationStatus,
    EventResult: EventResult,
    Agent: Agent,
    Editor: Editor,
    Intermediary: Intermediary,
    CarbonCopy: CarbonCopy,
    CertifiedDelivery: CertifiedDelivery,
    InPersonSigner: InPersonSigner,
    EventNotification: EventNotification,
    EnvelopeEvent: EnvelopeEvent,
    RecipientEvent: RecipientEvent,
    TemplateRole: TemplateRole,
    CompositeTemplate: CompositeTemplate,
    ServerTemplate: ServerTemplate,
    InlineTemplate: InlineTemplate,
    EnvelopeSummary: EnvelopeSummary,
    EnvelopeIdsRequest: EnvelopeIdsRequest,
    EnvelopeUpdateSummary: EnvelopeUpdateSummary,
    BulkEnvelopeStatus: BulkEnvelopeStatus,
    BulkEnvelope: BulkEnvelope,
    ReturnUrlRequest: ReturnUrlRequest,
    ViewUrl: ViewUrl,
    CorrectViewRequest: CorrectViewRequest,
    RecipientViewRequest: RecipientViewRequest,
    ViewLinkRequest: ViewLinkRequest,
    EnvelopeAuditEventResponse: EnvelopeAuditEventResponse,
    EnvelopeAuditEvent: EnvelopeAuditEvent,
    CustomFieldsEnvelope: CustomFieldsEnvelope,
    LockRequest: LockRequest,
    TemplateInformation: TemplateInformation,
    TemplateSummary: TemplateSummary,
    TemplateMatch: TemplateMatch,
    DocumentTemplateList: DocumentTemplateList,
    DocumentTemplate: DocumentTemplate,
    EnvelopeDocumentsResult: EnvelopeDocumentsResult,
    EnvelopeDocument: EnvelopeDocument,
    SignatureType: SignatureType,
    DocumentFieldsInformation: DocumentFieldsInformation,
    RecipientsUpdateSummary: RecipientsUpdateSummary,
    RecipientUpdateResponse: RecipientUpdateResponse,
    FoldersResponse: FoldersResponse,
    Folder: Folder,
    Filter: Filter,
    FolderItemsResponse: FolderItemsResponse,
    FolderItem: FolderItem,
    CustomFieldV2: CustomFieldV2,
    FoldersRequest: FoldersRequest,
    FolderItemResponse: FolderItemResponse,
    FolderItemV2: FolderItemV2,
    AccountSettingsInformation: AccountSettingsInformation,
    AccountSharedAccess: AccountSharedAccess,
    MemberSharedItems: MemberSharedItems,
    SharedItem: SharedItem,
    EnvelopeTemplate: EnvelopeTemplate,
    EnvelopeTemplateDefinition: EnvelopeTemplateDefinition,
    EnvelopeTemplateResults: EnvelopeTemplateResults,
    EnvelopeTemplateResult: EnvelopeTemplateResult,
    TemplateUpdateSummary: TemplateUpdateSummary,
    TemplateCustomFields: TemplateCustomFields,
    TemplateNotificationRequest: TemplateNotificationRequest,
    TemplateDocumentsResult: TemplateDocumentsResult,
    PageRequest: PageRequest,
    TemplateRecipients: TemplateRecipients,
    TemplateTabs: TemplateTabs,
    GroupInformation: GroupInformation,
    Group: Group,
    UserSettingsInformation: UserSettingsInformation,
    SignerEmailNotifications: SignerEmailNotifications,
    SenderEmailNotifications: SenderEmailNotifications,
    ConsoleViewRequest: ConsoleViewRequest,
    TabMetadataList: TabMetadataList,
    TabMetadata: TabMetadata,
    ApiRequestLogsResult: ApiRequestLogsResult,
    ApiRequestLog: ApiRequestLog,
    DiagnosticsSettingsInformation: DiagnosticsSettingsInformation,
    LoginInformation: LoginInformation,
    LoginAccount: LoginAccount,
    EnvelopesApi: EnvelopesApi,
    DiagnosticsApi: DiagnosticsApi,
    CustomTabsApi: CustomTabsApi,
    AuthenticationApi: AuthenticationApi,
    TemplatesApi: TemplatesApi,
    FoldersApi: FoldersApi,
    UsersApi: UsersApi,
    AccountsApi: AccountsApi
  };
}));
