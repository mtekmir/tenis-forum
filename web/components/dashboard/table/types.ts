export interface IMenuItem {
  name: string;
  path: string;
}

export interface TableHeaders {
  name: string;
  id: string;
  padding: string;
}

export interface Category {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  forumCount: number;
}
