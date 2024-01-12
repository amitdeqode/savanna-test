export enum Section {
  Entity = 0,
  Manage,
}

export interface Tab {
  name: string;
  section: number;
}
