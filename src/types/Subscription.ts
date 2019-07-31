import { PersistableObject } from "./PersistableObject";

import { dateTime, long } from "./types";

import { RevisionHistory } from "./RevisionHistory";

import { User } from "./User";

import { Workspace } from "./Workspace";

export class Subscription extends PersistableObject {
  readonly ApiKeysEnabled?: boolean;
  readonly CORSEnabled?: boolean;
  readonly EmailEnabled?: boolean;
  readonly ExpirationDate?: dateTime;
  readonly JSONPEnabled?: boolean;
  readonly MaximumCustomUserFields: long | undefined;
  readonly MaximumProjects: long | undefined;
  readonly Modules?: string;
  readonly Name: string | undefined;
  readonly PasswordExpirationDays?: long;
  readonly PLA?: boolean;
  readonly PreviousPasswordCount: long | undefined;
  readonly ProjectHierarchyEnabled?: boolean;
  readonly RevisionHistory?: RevisionHistory;
  readonly SessionTimeoutSeconds?: long;
  readonly SiteId: string | undefined;
  readonly SSOUserExceptions?: User[];
  readonly StoryHierarchyEnabled?: boolean;
  readonly StoryHierarchyType: 'None' | 'Limited' | 'Unlimited' | undefined;
  readonly SubscriptionID: number | undefined;
  readonly SubscriptionType: 'CE2014' | 'Express_Edition' | 'Enterprise' | 'Unlimited' | undefined
  readonly WebhooksEnabled?: boolean
  readonly Workspaces?: Workspace[];
  readonly ZuulID?: string;
}