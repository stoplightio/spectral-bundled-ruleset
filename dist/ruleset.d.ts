declare const _default: {
    extends: ({
        documentationUrl: string;
        formats: import("@stoplight/spectral-core").Format<void>[];
        aliases: {
            PathItem: string[];
            OperationObject: string[];
        };
        rules: {
            'operation-success-response': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, unknown>, null>;
                };
            };
            'oas2-operation-formData-consume-check': {
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").IFunction;
                };
            };
            'operation-operationId-unique': {
                description: string;
                recommended: boolean;
                severity: number;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").IFunction;
                };
            };
            'operation-parameters': {
                description: string;
                message: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").IFunction;
                };
            };
            'operation-tag-defined': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").IFunction;
                };
            };
            'path-params': {
                description: string;
                message: string;
                severity: number;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").IFunction;
                };
            };
            'contact-properties': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                }[];
            };
            'duplicated-entry-in-enum': {
                description: string;
                severity: string;
                recommended: boolean;
                message: string;
                given: string[];
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-rulesets/dist/oas/functions/oasSchema").Options>;
                    functionOptions: {
                        schema: {
                            type: string;
                            uniqueItems: boolean;
                        };
                    };
                };
            };
            'info-contact': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'info-description': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'info-license': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'license-url': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'no-eval-in-markdown': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'no-script-tags-in-markdown': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'openapi-tags-alphabetical': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, unknown> | unknown[], import("@stoplight/spectral-functions").AlphabeticalOptions>;
                    functionOptions: {
                        keyedBy: string;
                    };
                };
            };
            'openapi-tags-uniqueness': {
                description: string;
                message: string;
                severity: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        name: string;
                    }[], null>;
                };
            };
            'openapi-tags': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        dialect: string;
                        schema: {
                            type: string;
                            minItems: number;
                        };
                    };
                };
            };
            'operation-description': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'operation-operationId': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'operation-operationId-valid-in-url': {
                message: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        match: string;
                    };
                };
            };
            'operation-singular-tag': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string | number | Record<string, unknown> | unknown[], import("@stoplight/spectral-functions").LengthOptions>;
                    functionOptions: {
                        max: number;
                    };
                };
            };
            'operation-tags': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        dialect: string;
                        schema: {
                            type: string;
                            minItems: number;
                        };
                    };
                };
            };
            'path-declarations-must-exist': {
                message: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'path-keys-no-trailing-slash': {
                message: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'path-not-include-query': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'tag-description': {
                description: string;
                recommended: boolean;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'no-$ref-siblings': {
                formats: import("@stoplight/spectral-core").Format<void>[];
                description: string;
                message: string;
                severity: number;
                recommended: boolean;
                resolved: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").IFunction;
                };
            };
            'typed-enum': {
                description: string;
                message: string;
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        [key: string]: unknown;
                        enum: unknown[];
                        type: string | string[];
                    }, null>;
                };
            };
            'oas2-api-host': {
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'oas2-api-schemes': {
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        dialect: string;
                        schema: {
                            items: {
                                type: string;
                            };
                            minItems: number;
                            type: string;
                        };
                    };
                };
            };
            'oas2-discriminator': {
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                severity: number;
                message: string;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").IFunction;
                };
            };
            'oas2-host-not-example': {
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'oas2-host-trailing-slash': {
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'oas2-parameter-description': {
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'oas2-operation-security-defined': {
                description: string;
                message: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        paths: Record<string, unknown>;
                        security: unknown[];
                    }, {
                        schemesPath: import("@stoplight/types").JsonPath;
                    }>;
                    functionOptions: {
                        schemesPath: string[];
                    };
                };
            };
            'oas2-valid-schema-example': {
                description: string;
                message: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                severity: number;
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, unknown>, import("@stoplight/spectral-rulesets/dist/oas/functions/oasExample").Options>;
                    functionOptions: {
                        schemaField: string;
                        oasVersion: number;
                        type: string;
                    };
                };
            };
            'oas2-valid-media-example': {
                description: string;
                message: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                severity: number;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, unknown>, import("@stoplight/spectral-rulesets/dist/oas/functions/oasExample").Options>;
                    functionOptions: {
                        schemaField: string;
                        oasVersion: number;
                        type: string;
                    };
                };
            };
            'oas2-anyOf': {
                message: string;
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, unknown>;
                };
            };
            'oas2-oneOf': {
                message: string;
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, unknown>;
                };
            };
            'oas2-schema': {
                description: string;
                message: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                severity: number;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'oas2-unused-definition': {
                description: string;
                recommended: boolean;
                resolved: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, unknown>, import("@stoplight/spectral-functions").UnreferencedReusableObjectOptions>;
                    functionOptions: {
                        reusableObjectsLocation: string;
                    };
                };
            };
            'oas3-api-servers': {
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        dialect: string;
                        schema: {
                            items: {
                                type: string;
                            };
                            minItems: number;
                            type: string;
                        };
                    };
                };
            };
            'oas3-examples-value-or-externalValue': {
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, unknown>, import("@stoplight/spectral-functions").XorOptions>;
                    functionOptions: {
                        properties: string[];
                    };
                };
            };
            'oas3-operation-security-defined': {
                description: string;
                message: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        paths: Record<string, unknown>;
                        security: unknown[];
                    }, {
                        schemesPath: import("@stoplight/types").JsonPath;
                    }>;
                    functionOptions: {
                        schemesPath: string[];
                    };
                };
            };
            'oas3-parameter-description': {
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string[];
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'oas3-server-not-example.com': {
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'oas3-server-trailing-slash': {
                description: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            'oas3-valid-media-example': {
                description: string;
                message: string;
                recommended: boolean;
                severity: number;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, unknown>, import("@stoplight/spectral-rulesets/dist/oas/functions/oasExample").Options>;
                    functionOptions: {
                        schemaField: string;
                        oasVersion: number;
                        type: string;
                    };
                };
            };
            'oas3-valid-schema-example': {
                description: string;
                message: string;
                severity: number;
                formats: import("@stoplight/spectral-core").Format<void>[];
                recommended: boolean;
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, unknown>, import("@stoplight/spectral-rulesets/dist/oas/functions/oasExample").Options>;
                    functionOptions: {
                        schemaField: string;
                        oasVersion: number;
                        type: string;
                    };
                };
            };
            'oas3-schema': {
                description: string;
                message: string;
                severity: number;
                formats: import("@stoplight/spectral-core").Format<void>[];
                recommended: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            'oas3-unused-component': {
                message: string;
                recommended: boolean;
                formats: import("@stoplight/spectral-core").Format<void>[];
                resolved: boolean;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<{
                        components: Record<string, unknown>;
                    }, null>;
                };
            };
        };
    } | {
        formats: import("@stoplight/spectral-core").Format<void>[];
        aliases: {
            ArrayProperties: {
                targets: {
                    formats: import("@stoplight/spectral-core").Format<void>[];
                    given: string[];
                }[];
            };
            IntegerProperties: {
                targets: {
                    formats: import("@stoplight/spectral-core").Format<void>[];
                    given: string[];
                }[];
            };
            StringProperties: {
                targets: {
                    formats: import("@stoplight/spectral-core").Format<void>[];
                    given: string[];
                }[];
            };
        };
        rules: {
            "owasp:api1:2019-no-numeric-ids": {
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        schema: {
                            type: string;
                            not: {
                                properties: {
                                    type: {
                                        const: string;
                                    };
                                };
                            };
                            properties: {
                                format: {
                                    const: string;
                                };
                            };
                        };
                    };
                };
            };
            "owasp:api2:2019-no-http-basic": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                };
            };
            "owasp:api2:2019-no-api-keys-in-url": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                }[];
            };
            "owasp:api2:2019-no-credentials-in-url": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string[];
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                }[];
            };
            "owasp:api2:2019-auth-insecure-schemes": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string[];
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        notMatch: string;
                    };
                }[];
            };
            "owasp:api2:2019-jwt-best-practices": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string[];
                then: ({
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                    functionOptions?: undefined;
                } | {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        match: string;
                    };
                })[];
            };
            "owasp:api2:2019-protection-global-unsafe": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<any, any>;
                    functionOptions: {
                        schemesPath: string[];
                        nullable: boolean;
                        methods: string[];
                    };
                }[];
            };
            "owasp:api2:2019-protection-global-unsafe-strict": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<any, any>;
                    functionOptions: {
                        schemesPath: string[];
                        nullable: boolean;
                        methods: string[];
                    };
                }[];
            };
            "owasp:api2:2019-protection-global-safe": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<any, any>;
                    functionOptions: {
                        schemesPath: string[];
                        nullable: boolean;
                        methods: string[];
                    };
                }[];
            };
            "owasp:api3:2019-define-error-validation": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        schema: {
                            type: string;
                            anyOf: {
                                required: string[];
                            }[];
                        };
                    };
                }[];
            };
            "owasp:api3:2019-define-error-responses-401": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                }[];
            };
            "owasp:api3:2019-define-error-responses-500": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                }[];
            };
            "owasp:api4:2019-rate-limit": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        schema: {
                            type: string;
                            oneOf: {
                                required: string[];
                            }[];
                        };
                    };
                };
            };
            "owasp:api4:2019-rate-limit-retry-after": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            "owasp:api4:2019-rate-limit-responses-429": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                }[];
            };
            "owasp:api4:2019-array-limit": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                };
            };
            "owasp:api4:2019-string-limit": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        schema: {
                            type: string;
                            oneOf: {
                                required: string[];
                            }[];
                        };
                    };
                };
            };
            "owasp:api4:2019-string-restricted": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        schema: {
                            type: string;
                            oneOf: {
                                required: string[];
                            }[];
                        };
                    };
                };
            };
            "owasp:api4:2019-integer-limit": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<Record<string, unknown>, import("@stoplight/spectral-functions").XorOptions>;
                    functionOptions: {
                        properties: string[];
                    };
                }[];
            };
            "owasp:api4:2019-integer-limit-legacy": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                }[];
            };
            "owasp:api4:2019-integer-format": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                }[];
            };
            "owasp:api6:2019-no-additionalProperties": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                }[];
            };
            "owasp:api6:2019-constrained-additionalProperties": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    field: string;
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, null>;
                }[];
            };
            "owasp:api7:2019-security-hosts-https-oas2": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                    functionOptions: {
                        schema: {
                            type: string;
                            items: {
                                type: string;
                                const: string;
                            };
                        };
                    };
                };
            };
            "owasp:api7:2019-security-hosts-https-oas3": {
                message: string;
                description: string;
                severity: import("@stoplight/types").DiagnosticSeverity;
                formats: import("@stoplight/spectral-core").Format<void>[];
                given: string;
                then: {
                    function: import("@stoplight/spectral-core").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                    functionOptions: {
                        match: string;
                    };
                };
            };
        };
    })[];
};
export default _default;
