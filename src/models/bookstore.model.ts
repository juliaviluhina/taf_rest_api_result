/**
 * Bookstore Service Models
 * Generated based on service contract
 */

// Authentication DTOs
export interface LoginViewModel {
  /** User name for authentication */
  userName: string;
  /** Password for authentication */
  password: string;
}

export interface RegisterViewModel {
  /** User name for registration */
  userName: string;
  /** Password for registration */
  password: string;
}

export interface TokenViewModel {
  /** Authentication token */
  token?: string;
  /** Token expiration date */
  expires?: string;
  /** Status of the token */
  status?: string;
  /** Additional result information */
  result?: string;
}

// Book-related DTOs
export interface BookModal {
  /** International Standard Book Number */
  isbn?: string;
  /** Book title */
  title?: string;
  /** Book subtitle */
  subTitle?: string;
  /** Book author */
  author?: string;
  /** Publication date */
  publish_date?: string;
  /** Book publisher */
  publisher?: string;
  /** Number of pages */
  pages?: number;
  /** Book description */
  description?: string;
  /** Book's website */
  website?: string;
}

export interface CollectionOfIsbn {
  /** ISBN of a book */
  isbn?: string;
}

export interface AllBooksModal {
  /** List of books */
  books?: BookModal[];
}

// User-related DTOs
export interface CreateUserResult {
  /** Unique identifier for the user */
  userId?: string;
  /** Username */
  username?: string;
  /** Books associated with the user */
  books?: BookModal[];
}

export interface GetUserResult {
  /** Unique identifier for the user */
  userId?: string;
  /** Username */
  username?: string;
  /** Books associated with the user */
  books?: BookModal[];
}

export interface AddListOfBooks {
  /** Unique identifier for the user */
  userId?: string;
  /** Collection of ISBNs to add */
  collectionOfIsbns?: CollectionOfIsbn[];
}

// Utility DTOs
export interface StringObject {
  /** ISBN of a book */
  isbn?: string;
  /** Unique identifier for the user */
  userId?: string;
}

export interface BooksResult {
  /** Unique identifier for the user */
  userId?: string;
  /** Result message */
  message?: string;
}

export interface UserBooksResult {
  /** Unique identifier for the user */
  userId?: string;
  /** ISBN of the book */
  isbn?: string;
  /** Result message */
  message?: string;
}

export interface ReplaceIsbn {
  /** Unique identifier for the user */
  userId?: string;
  /** ISBN of the book */
  isbn?: string;
}

export interface MessageModal {
  /** Response code */
  code?: number;
  /** Response message */
  message?: string;
}