export type TechStack = {
  /** Unique identifier used to resolve icon files or default simpleicons slug. */
  key: string;
  /** Display name of the technology. */
  title: string;
  /** Official website URL. */
  href: string;
  /** Category tags used for grouping/filtering. */
  categories: string[];
  /** Optional custom icon URL. */
  icon?: string;
  /** If true, use theme-specific icons for dark/light mode. */
  theme?: boolean;
};

