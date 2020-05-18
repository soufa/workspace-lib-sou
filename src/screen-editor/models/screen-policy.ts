export interface ScreenPolicy {
    policyEnabled?: boolean;
    security: SecurityItem[];
}

export interface SecurityItem {
    role?: string;
    denyAccessScreen?: boolean;
    actions?: ActionPolicy[];
}

export interface ActionPolicy {
    name?: string;
    template?: string;
    condition?: string;
    startDate?: string;
    endDate?: string;
    strongAuthentication?: boolean;
}
